# 🌐 Guía Rápida de Redes e Hibridación AWS (Networking Cheat Sheet)

El diseño de redes en VPC y la conectividad híbrida entre on-premises y la nube son evaluados continuamente en los dominios de Seguridad, Resiliencia y Rendimiento.

---

## 🏗️ VPC Core: Componentes Básicos

```text
       ┌─────────────────────────────────────────────────────────────┐
       │ AWS Region                                                  │
       │  ┌───────────────────────────────────────────────────────┐  │
       │  │ VPC (ej. 10.0.0.0/16)                                  │  │
       │  │                                                       │  │
       │  │   [Internet Gateway (IGW)] (Adjunto a la VPC)         │  │
       │  │               ▲                                       │  │
       │  │               │ RUTA 0.0.0.0/0                        │  │
       │  │   ┌───────────┴──────────┐   ┌─────────────────────┐  │  │
       │  │   │ Subnet Pública (AZ-a)│   │Subnet Privada (AZ-a)│  │  │
       │  │   │  ┌─────────────────┐ │   │ ┌─────────────────┐ │  │  │
       │  │   │  │ NAT Gateway     │◄┼───┼─┤ Instancia EC2   │ │  │  │
       │  │   │  │ (IP Elástica)   │ │   │ │ (Solo IP Privada│ │  │  │
       │  │   │  └─────────────────┘ │   │ └─────────────────┘ │  │  │
       │  │   └──────────────────────┘   └─────────────────────┘  │  │
       │  └───────────────────────────────────────────────────────┘  │
       └─────────────────────────────────────────────────────────────┘
```

### Reglas de Oro de Redes en VPC:
1. **IPs Reservadas por AWS**: En cada Subnet, AWS reserva **5 direcciones IP**:
   - `.0`: Network address.
   - `.1`: Router del VPC.
   - `.2`: Servidor DNS de AWS (AmazonProvidedDNS).
   - `.3`: Reservado para uso futuro.
   - `.255`: Broadcast address (AWS no soporta broadcast, pero la reserva).
   - *Si creas una subnet `/24` (256 IPs), solo tendrás 251 IPs disponibles para hosts.*
2. **Security Groups vs Network ACLs (NACLs)**:
   - **Security Group (SG)**: Actúa a nivel de **interfaz de red (ENI/EC2)**. Es **Stateful** (el tráfico de retorno se permite automáticamente sin importar las reglas de salida). Todas las reglas son de **Permitir** (no existe regla de Deny explícito).
   - **NACL**: Actúa a nivel de **Subnet**. Es **Stateless** (debes abrir explícitamente el puerto de salida, incluyendo el rango de puertos efímeros `1024-65535` para el tráfico de retorno). Soporta reglas de **Allow y Deny** evaluadas en orden numérico ascendente.

---

## 🔌 VPC Endpoints: Gateway vs Interface

| Criterio | Gateway Endpoint | Interface Endpoint (AWS PrivateLink) |
| :--- | :--- | :--- |
| **Servicios Soportados** | **Solo 2 servicios: Amazon S3 y Amazon DynamoDB** | Casi todos los servicios AWS (CloudWatch, SQS, SNS, KMS, etc.) y servicios propios/partners |
| **Cómo Funciona** | Añade una entrada de ruta en la **Route Table** de la VPC apuntando a un prefijo de AWS. | Despliega una **ENI (Elastic Network Interface)** con una IP privada dentro de tu Subnet. |
| **Costo** | **Totalmente GRATUITO** (sin costo por hora ni por transferencia). | Costo por hora por ENI + costo por GB procesado. |
| **Acceso desde On-Premises (Direct Connect / VPN)** | **NO** es accesible directamente desde fuera de la VPC. | **SÍ** es accesible directamente desde on-premises a través de su IP privada. |

---

## 🔗 Conectividad Inter-VPC: Peering vs Transit Gateway

```text
VPC Peering: Punto a Punto (Malla Compleja)     AWS Transit Gateway: Hub-and-Spoke (Centralizado)

     [VPC A] ◄───────► [VPC B]                           [VPC A]       [VPC B]
        ▲                 ▲                                  ▲           ▲
        │                 │                                   \         /
        └──────► [VPC C] ◄┘                                  [Transit Gateway]
      (No permite enrutamiento                                /         \
            transitivo)                                      ▼           ▼
                                                         [VPC C]    [On-Premises / VPN]
```

- **VPC Peering**:
  - Conexión 1 a 1 entre dos VPCs.
  - **No soporta enrutamiento transitivo** (si A se conecta a B, y B se conecta a C, A **no** puede comunicarse con C a través de B).
  - No admite CIDRs solapados (*overlapping CIDRs*).
  - Excelente para pocas VPCs (costo bajo, sin cuota fija por hora).
- **AWS Transit Gateway (TGW)**:
  - Actúa como un router virtual centralizado (patrón *Hub-and-Spoke*).
  - **Soporta enrutamiento transitivo** entre miles de VPCs, VPNs y Direct Connect.
  - Soporta tráfico **Multicast** e interconexión entre regiones (*peering de Transit Gateways*).

---

## 🏢 Conectividad Híbrida: Direct Connect vs VPN

| Parámetro | AWS Site-to-Site VPN | AWS Direct Connect (DX) |
| :--- | :--- | :--- |
| **Medio de Transporte** | Internet pública mediante túnel IPsec cifrado | Conexión física de fibra óptica dedicada y privada |
| **Tiempo de Despliegue** | **Minutos** | **Semanas o meses** (requiere coordinación con telco) |
| **Ancho de Banda** | Hasta 1.25 Gbps por túnel (se pueden agregar con ECMP) | Opciones de 1 Gbps, 10 Gbps o 100 Gbps |
| **Cifrado en Tránsito** | **Cifrado nativo (IPsec AES-256)** | **No cifrado por defecto** (el tráfico es privado pero en texto plano; para cifrar se debe montar una VPN IPsec sobre Direct Connect). |
| **Caso Típico de Examen** | Conexión rápida, bajo costo inicial, o como **enlace de respaldo (backup / failover)** de una línea Direct Connect. | Máximo rendimiento, latencia predecible ultra-baja y transferencia masiva de datos constante. |
