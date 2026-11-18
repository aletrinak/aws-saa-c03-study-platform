# 💰 Dominio 4: Diseñar Arquitecturas Optimizadas en Costos (20% del Examen)

El Dominio 4 evalúa la capacidad de seleccionar la combinación de servicios más económica sin sacrificar los requisitos funcionales del negocio.

---

## 1. Modelos de Precios de Cómputo (EC2 & Fargate)

```text
┌─────────────────┬───────────────────────────────────┬──────────────────────────────────────────┐
│ Modelo de Pago  │ Ahorro Potencial                  │ Caso de Uso Típico de Examen             │
├─────────────────┼───────────────────────────────────┼──────────────────────────────────────────┤
│ On-Demand       │ 0% (tarifa estándar por segundo)  │ Cargas impredecibles, desarrollo a corto │
│                 │                                   │ plazo, pruebas no recurrentes.           │
├─────────────────┼───────────────────────────────────┼──────────────────────────────────────────┤
│ Compute Savings │ Hasta 66% de descuento            │ Compromiso de gasto ($/hora) por 1 o 3   │
│ Plans           │ (Máxima flexibilidad)             │ años. Aplica a EC2, Fargate y Lambda sin │
│                 │                                   │ importar región, OS o familia.           │
├─────────────────┼───────────────────────────────────┼──────────────────────────────────────────┤
│ EC2 Instance    │ Hasta 72% de descuento            │ Compromiso en una familia específica en  │
│ Savings Plans   │                                   │ una región fija (ej. familia m5 en us-east-1).│
├─────────────────┼───────────────────────────────────┼──────────────────────────────────────────┤
│ Spot Instances  │ Hasta 90% de descuento            │ Cargas de trabajo **tolerantes a fallos, │
│                 │ (Sujeto a interrupción en 2 min)  │ procesamiento por lotes (Batch), Big Data│
│                 │                                   │ (EMR), renderizado y contenedores**.     │
├─────────────────┼───────────────────────────────────┼──────────────────────────────────────────┤
│ Dedicated Hosts │ Mayor costo                       │ Cumplimiento estricto de licencias por   │
│                 │                                   │ socket/core físico (BYOL) y compliance.  │
└─────────────────┴───────────────────────────────────┴──────────────────────────────────────────┘
```

> [!TIP]
> **Patrón de Arquitectura para Máximo Ahorro en Auto Scaling**:
> Combinar una **línea base de instancias On-Demand / Savings Plans** para soportar el tráfico mínimo garantizado, y cubrir los picos de demanda con **instancias Spot** gestionadas automáticamente por el Auto Scaling Group.

---

## 2. Optimización del Costo de Transferencia de Datos (Data Transfer)

La transferencia de datos es uno de los costos ocultos más evaluados en el examen.

```text
                         INTERNET
                            │ (Entrada: GRATIS)
                            ▼
              ┌───────────────────────────┐
              │ AWS Region                │
              │                           │
              │  AZ-1               AZ-2  │
              │ ┌───────┐         ┌───────┐
              │ │  EC2  │◄───────►│  EC2  │ (Entre AZs: $0.01 / GB)
              │ └───────┘         └───────┘
              │     ▲
              │     │ (Misma AZ, IP Privada: GRATIS)
              │     ▼
              │ ┌───────┐
              │ │  EC2  │
              │ └───────┘
              └───────────────────────────┘
```

### Reglas de Examen sobre Transferencia de Datos:
1. **Entrada a AWS (Ingress)**: Siempre es **100% gratuita** desde internet.
2. **Dentro de la misma AZ con IP privada**: Es **totalmente gratuita**. Si usas IP pública o Elástica dentro de la misma AZ, pagas costo de red.
3. **Entre Zonas de Disponibilidad (Inter-AZ)**: Se cobra por tráfico de salida y de entrada ($0.01/GB en cada dirección).
4. **Entre Regiones distintas (Cross-Region)**: Se cobra tarifa de salida inter-región ($0.02/GB).
5. **El Gran Truco del Examen (NAT Gateway vs Gateway Endpoint)**:
   - Un **NAT Gateway** cuesta ~$0.045 por hora + **$0.045 por cada GB procesado**.
   - Si instancias privadas transfieren terabytes de datos a **Amazon S3 o DynamoDB** a través del NAT Gateway, la factura se dispara.
   - **Solución de Examen**: Crear un **Gateway VPC Endpoint** (completamente **gratuito**) y actualizar la tabla de rutas. El tráfico hacia S3/DynamoDB viajará por la red privada de AWS a costo $0.

---

## 3. Herramientas de Gobernanza y Optimización de Costos

- **AWS Compute Optimizer**:
  - Utiliza Machine Learning para analizar métricas de CloudWatch y recomendar si los tipos de instancia EC2, volúmenes EBS o memorias de Lambda están **sobredimensionados (over-provisioned)** o infrautilizados.
- **AWS Cost Explorer**:
  - Permite visualizar, analizar y proyectar el gasto en AWS con hasta 12 meses de datos históricos y pronósticos a 3 meses.
- **AWS Budgets**:
  - Configura alertas proactivas por email o SNS cuando el gasto real o el gasto previsto (*forecasted*) supere un umbral (ej. 80% del presupuesto mensual).
- **Amazon S3 Storage Lens**:
  - Proporciona visibilidad en toda la organización sobre el almacenamiento en S3, métricas de actividad y recomendaciones automatizadas de optimización de costos.
