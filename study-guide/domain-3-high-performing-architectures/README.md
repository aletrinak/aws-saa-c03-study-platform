# ⚡ Dominio 3: Diseñar Arquitecturas de Alto Rendimiento (24% del Examen)

El Dominio 3 evalúa la optimización del rendimiento en cómputo, almacenamiento, bases de datos y entrega de contenido a nivel global.

---

## 1. Rendimiento de Cómputo: Grupos de Colocación (Placement Groups)

Cuando las instancias EC2 necesitan interactuar entre sí, la colocación física en los racks del centro de datos determina la latencia y la resiliencia:

```text
       Cluster                       Spread                        Partition
┌─────────────────────┐       ┌───────────────────┐        ┌───────────────────────┐
│     Mismo Rack      │       │ Distintos Racks   │        │ Particiones de Racks  │
│  ┌───┐ ┌───┐ ┌───┐  │       │ [Rack 1] [Rack 2] │        │ [Partición 1] [Part 2]│
│  │EC2│ │EC2│ │EC2│  │       │  ┌───┐    ┌───┐   │        │   ┌───┐         ┌───┐ │
│  └───┘ └───┘ └───┘  │       │  │EC2│    │EC2│   │        │   │EC2│         │EC2│ │
│ Latencia <1ms 10Gbps│       │  └───┘    └───┘   │        │   └───┘         └───┘ │
└─────────────────────┘       └───────────────────┘        └───────────────────────┘
```

| Tipo de Placement Group | Topología Física | Límite / Restricción | Caso Típico de Examen |
| :--- | :--- | :--- | :--- |
| **Cluster** | Todas las instancias en el **mismo rack de hardware en una sola AZ**. | Una sola AZ. Riesgo si falla el rack. | **HPC, Machine Learning, simulaciones matemáticas** que demandan latencia de red de microsegundos y ancho de banda de hasta 100 Gbps. |
| **Spread** | Cada instancia en un **rack independiente con alimentación y red separadas**. | Máximo **7 instancias por AZ**. | Instancias críticas individuales donde la falla de una no debe afectar a las demás (ej. quorum de controladores de dominio). |
| **Partition** | Divide el grupo en particiones lógicas; las instancias de una partición no comparten racks con otras particiones. | Hasta 7 particiones por AZ, cientos de instancias. | **Cargas distribuidas de Big Data**: Apache Kafka, Cassandra, Hadoop HDFS. |

---

## 2. Redes de Ultra-Alto Rendimiento: ENA vs EFA

- **ENA (Elastic Network Adapter)**: Red mejorada estándar para EC2 con velocidades de hasta 100 Gbps, reducción de jitter y menor uso de CPU.
- **EFA (Elastic Fabric Adapter)**: Interfaz de red especializada para **HPC y aplicaciones de Message Passing Interface (MPI)**. Permite el mecanismo *OS-bypass*, donde la aplicación se comunica directamente con el hardware de red saltándose el kernel del sistema operativo.

---

## 3. Aceleración Global: CloudFront vs AWS Global Accelerator

| Característica | Amazon CloudFront | AWS Global Accelerator |
| :--- | :--- | :--- |
| **Mecanismo Central** | **Red de Distribución de Contenido (CDN)** con memoria caché en el borde (*Edge Locations*). | **Enrutamiento por Anycast IP** hacia la red troncal privada global de AWS. |
| **Caché de Contenido** | **SÍ**: Almacena contenido estático y dinámico (imágenes, video, HTML, API responses). | **NO almacena caché**. Todo el tráfico pasa directo al backend. |
| **Protocolos Soportados** | Solo **HTTP / HTTPS / WebSockets**. | **TCP y UDP** (ideal para VoIP, juegos online, IoT, streaming en vivo). |
| **Direccionamiento IP** | Devuelve nombres de dominio DNS (las IPs cambian dinámicamente). | Proporciona **2 IPs Anycast estáticas fijas**. |
| **Tolerancia a Fallos / Failover** | Sujeto al tiempo de expiración (TTL) del caché DNS de los clientes. | **Failover instantáneo en menos de 1 minuto** sin depender de TTLs de DNS. |

---

## 4. Cómputo en el Borde: CloudFront Functions vs Lambda@Edge

| Criterio | CloudFront Functions | Lambda@Edge |
| :--- | :--- | :--- |
| **Lenguajes** | Solo JavaScript (ECMAScript 5.1 compliant) | Node.js y Python |
| **Ubicación de Ejecución** | Más de 450+ Edge Locations (más cercano al usuario) | En las Regional Edge Caches (menos ubicaciones) |
| **Tiempo de Ejecución** | **Sub-milisegundo (< 1 ms)** | Hasta 5 segundos (viewer) o 30 segundos (origin) |
| **Memoria** | 2 MB | Hasta 10 GB |
| **Acceso a Red / Internet** | **NO** (no puede hacer llamadas HTTP a APIs externas) | **SÍ** (puede consultar bases de datos externas o microservicios) |
| **Acceso al Cuerpo (Body)** | **NO** (solo headers, cookies y query strings) | **SÍ** (puede inspeccionar y modificar el body) |
| **Casos Típicos** | Reescribir URLs, normalizar headers de caché, validar tokens JWT simples. | Transformación pesada de imágenes, autenticación compleja con llamada a IDP externo. |
