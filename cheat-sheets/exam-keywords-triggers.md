# 🎯 Disparadores y Palabras Clave del Examen SAA-C03 (Exam Triggers)

En el examen SAA-C03, AWS evalúa tu capacidad de seleccionar la solución correcta basada en **restricciones específicas**. Dos respuestas pueden ser técnicamente válidas, pero solo una cumple la restricción del enunciado.

---

## 🔑 Tabla Maestra de Disparadores y Respuestas Típicas

| Palabra Clave en la Pregunta | Lo que AWS te está pidiendo | Respuesta Arquitectónica Típica |
| :--- | :--- | :--- |
| **"LEAST operational overhead"** / **"Minimal management overhead"** | Evitar administrar servidores, parches, clusters o backups manuales. | **Serverless / Fully Managed**: AWS Lambda, Amazon Athena, Aurora Serverless, AWS Fargate, S3 Lifecycle Rules, AWS Glue, DynamoDB. |
| **"MOST cost-effective"** / **"Lowest cost"** | La opción con menor factura mensual, sacrificando comodidad si es necesario. | **S3 Standard-IA / Glacier Deep Archive**, **EC2 Spot Instances** (para cargas tolerantes a fallos), **S3 Intelligent-Tiering**, **VPC Gateway Endpoints** (gratis vs NAT Gateway), **CloudFront Caching**. |
| **"Sub-millisecond latency"** | Rendimiento ultra rápido en lectura/escritura en memoria. | **Amazon DynamoDB + DAX** (microsegundos para DynamoDB), **Amazon ElastiCache** (Redis / Memcached), **MemoryDB**. |
| **"Real-time data streaming"** / **"Ordered data streaming"** | Ingesta de telemetría, IoT o logs con orden estricto de partición. | **Amazon Kinesis Data Streams** (KDS) o **Amazon MSK** (Managed Kafka). |
| **"Deliver streaming data to S3 / Redshift / OpenSearch without coding"** | Ingesta y carga continua a destinos de almacenamiento/analítica. | **Amazon Kinesis Data Firehose** (sin servidores, con conversión opcional a Parquet/ORC). |
| **"Ad-hoc queries directly on S3 data using SQL"** | Consultar datos crudos en S3 (JSON, CSV, Parquet) sin levantar bases de datos. | **Amazon Athena**. |
| **"High Performance Computing (HPC)"** / **"POSIX-compliant parallel file system"** | Cómputo distribuido que procesa millones de IOPS con throughput masivo. | **Amazon FSx for Lustre**. |
| **"Shared storage across multiple Linux EC2 instances"** | Sistema de archivos compartido en red para Linux. | **Amazon Elastic File System (EFS)** (Multi-AZ, POSIX). |
| **"Shared storage for Windows applications (SMB/Active Directory)"** | Sistema de archivos nativo Windows para integración corporativa. | **Amazon FSx for Windows File Server**. |
| **"Private connectivity without internet traversal"** | Conectar instancias privadas con servicios AWS (S3, DynamoDB, APIs) sin salir a internet. | **VPC Endpoints**: <br>• **Gateway Endpoints** (solo para S3 y DynamoDB, gratis)<br>• **Interface Endpoints (PrivateLink)** (para casi todos los demás servicios, usa ENI con IP privada). |
| **"Prevent accidental deletion of data / Compliance (WORM)"** | Write Once, Read Many; retención regulatoria de datos. | **S3 Object Lock** (Compliance Mode o Governance Mode) y **S3 Versioning con MFA Delete**. |
| **"Decouple components and handle sudden traffic spikes"** | Amortiguar picos de carga para que los consumidores no colapsen. | **Amazon SQS (Simple Queue Service)** con Auto Scaling basado en la métrica `ApproximateNumberOfMessagesVisible`. |
| **"Fan-out architecture (one message to many subscribers)"** | Enviar un único evento a múltiples colas SQS, funciones Lambda o emails a la vez. | **Amazon SNS (Topic)** suscrito a múltiples colas **SQS**. |
| **"Event-driven architecture with SaaS integrations"** | Enrutamiento de eventos desde aplicaciones propias, servicios AWS o partners SaaS (ej. Datadog, Zendesk, Salesforce). | **Amazon EventBridge** (con Event Buses, Rules y Schema Registry). |
| **"DDoS Protection with Layer 7 inspection"** | Proteger aplicaciones web contra ataques HTTP flood, inyecciones SQL y XSS. | **AWS WAF** (Web Application Firewall) + **AWS Shield** (Standard incluido, Advanced con soporte 24/7 y reembolso de costos). |
| **"Analyze malicious activity / Unauthorized behavior / Anomaly detection"** | Detección de amenazas inteligente usando Machine Learning sobre CloudTrail, VPC Flow Logs y DNS Logs. | **Amazon GuardDuty**. |
| **"Audit API calls across accounts"** | Registro y trazabilidad de quién ejecutó qué acción en la cuenta. | **AWS CloudTrail**. |
| **"Discover sensitive data (PII) in S3"** | Identificar datos personales, tarjetas de crédito o pasaportes en buckets S3 con ML. | **Amazon Macie**. |
| **"Automated vulnerability scanning for EC2 instances and ECR images"** | Análisis de vulnerabilidades CVE en servidores e imágenes de contenedor. | **Amazon Inspector**. |
| **"Disaster Recovery with RTO/RPO in minutes"** | Recuperación ante desastres rápida manteniendo infraestructura mínima corriendo. | **Warm Standby** o **Pilot Light**. |
| **"Disaster Recovery with near-zero RTO/RPO"** | Cero tiempo de inactividad y cero pérdida de datos entre regiones. | **Multi-Site Active/Active** (usando Route 53 Multi-Region, DynamoDB Global Tables, Aurora Global Database). |

---

## 🚫 Trampas Comunes de Examen (Eliminadores Automáticos)

1. **EFS en Windows**: EFS solo soporta protocolo NFSv4 para Linux. Si el enunciado menciona Windows, la respuesta es **FSx for Windows File Server**.
2. **Gateway Endpoints para SQS o Kinesis**: Solo existen Gateway Endpoints para **Amazon S3** y **Amazon DynamoDB**. Todo lo demás usa **Interface Endpoints (PrivateLink)**.
3. **Multi-AZ para mejorar el rendimiento de lectura**:
   - `Multi-AZ RDS`: Se usa **únicamente para Alta Disponibilidad y Failover** (la instancia secundaria es pasiva y sincrónica).
   - `Read Replicas`: Se usan para **escalar lecturas** (asincrónico).
4. **NAT Instance vs NAT Gateway**:
   - Si la pregunta pide *"high availability with no maintenance"*, **NAT Gateway** siempre gana (administrado por AWS, escala hasta 100 Gbps, redundant en la AZ).
   - NAT Instance es una EC2 única que tú debes gestionar, parchar y escalar manualmente.
5. **Security Groups vs Network ACLs**:
   - Security Group = **Stateful** (si permites entrada, la salida está automáticamente permitida) a nivel de **ENI/Instancia**.
   - NACL = **Stateless** (debes permitir explícitamente reglas de entrada y salida, incluyendo puertos efímeros 1024-65535) a nivel de **Subnet**.
6. **Spot Instances para bases de datos críticas**: Las instancias Spot se pueden interrumpir con un aviso de 2 minutos. **NUNCA** selecciones Spot para bases de datos transaccionales de producción o servicios con estado que no toleren caídas repentinas.
7. **Security Groups con reglas "DENY"**: Los Security Groups **SOLO tienen reglas de ALLOW**. Toda opción de examen que diga *"create a deny rule in the security group"* es falsa y se descarta de inmediato.
8. **EBS Multi-AZ**: Los volúmenes EBS son estrictamente **Single-AZ**. No cruzan zonas de disponibilidad. Si necesitas almacenamiento compartido entre múltiples AZs, usa **Amazon EFS** (Linux) o **Amazon S3**.
9. **Achicar volúmenes EBS con ModifyVolume**: EBS Elastic Volumes permite expandir el disco o cambiar de tipo (`io2` a `gp3`) en caliente sin downtime, pero **NUNCA se puede reducir de tamaño**.
10. **Cifrar RDS no cifrado en caliente o crear Read Replica cifrada**: Es técnicamente imposible cifrar una instancia RDS existente o crear una réplica cifrada de una base sin cifrar. El procedimiento oficial es: **Snapshot -> Copy Snapshot habilitando KMS -> Restore DB desde el snapshot cifrado**.
11. **S3 Glacier Deep Archive para acceso inmediato**: Deep Archive requiere de **9 a 12 horas** para recuperar un archivo. Si la pregunta exige *"immediate access / millisecond retrieval"*, descarta Glacier y selecciona **S3 Standard-IA** o **S3 Glacier Instant Retrieval**.
12. **IAM Users para clientes finales de una app**: Los usuarios IAM son exclusivamente para empleados/operadores de la consola AWS. Para usuarios/clientes de aplicaciones web o móviles con login y MFA se debe usar **Amazon Cognito User Pools**.
13. **CloudFront para tráfico UDP o VoIP**: CloudFront solo admite tráfico HTTP/HTTPS (TCP). Para acelerar tráfico global que use **UDP, VoIP, videojuegos o que requiera 2 Static Anycast IPs**, la solución es **AWS Global Accelerator**.
14. **Amazon Macie para bases de datos o servidores**: Macie **SOLO analiza buckets de Amazon S3** en búsqueda de datos sensibles (PII). No escanea RDS, DynamoDB ni discos EBS.
15. **Amazon GuardDuty como herramienta de bloqueo activo**: GuardDuty es un sistema de **detección de amenazas pasivo** basado en análisis de logs (VPC Flow Logs, DNS, CloudTrail, S3 data events). No bloquea automáticamente; debe integrarse vía **EventBridge + AWS Lambda / Systems Manager** para remediación automatizada.
