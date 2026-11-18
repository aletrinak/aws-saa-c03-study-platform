# 🛡️ AWS SAA-C03: Cheat Sheet de Último Momento (Supervivencia y Aprobación)

Este documento está optimizado para lectura rápida en el celular antes de dormir y durante el desayuno previo al examen. Contiene las reglas mnemotécnicas, palabras trampa y asociaciones directas que definen el 80% de las preguntas de la certificación.

---

## ⚡ 1. Los 12 "Disparadores Automáticos" (Trigger Words)

Si ves estas palabras en el enunciado, la respuesta casi siempre es el servicio asociado:

| Si el enunciado dice... | La respuesta casi siempre es... |
| :--- | :--- |
| **"Preserve order" / "Strict FIFO" / "No duplicates"** | **Amazon SQS FIFO** (no standard queue). |
| **"Delete items older than X" en DynamoDB** | **DynamoDB Time to Live (TTL)** (gratis y sin código). |
| **"Hot partition / Frequent repeated reads" en DynamoDB** | **DynamoDB Accelerator (DAX)** (caché en microsegundos). |
| **"Unpredictable traffic / Flash sales" en DynamoDB** | **On-Demand Capacity Mode** (evita throttling súbito). |
| **"UDP traffic" o "2 Static Anycast IPs" a nivel global** | **AWS Global Accelerator** (CloudFront NO soporta UDP). |
| **"Shared POSIX file system across multiple AZs (Linux)"** | **Amazon EFS** (EBS es Single-AZ; S3 no es POSIX nativo). |
| **"Windows File Share / SMB / Active Directory"** | **Amazon FSx for Windows File Server**. |
| **"HPC / High Performance Compute / Parallel file system"** | **Amazon FSx for Lustre**. |
| **"Subir o descargar archivos privados sin saturar el servidor"** | **S3 Presigned URLs**. |
| **"Long-running task (takes minutes) / Slow API endpoint"** | **Amazon SQS + Lambda / Worker** (desacople asíncrono). |
| **"User login, Sign-up, MFA for mobile/web app customers"** | **Amazon Cognito User Pools** (NUNCA crear usuarios IAM). |
| **"Aggregate VPN throughput > 1.25 Gbps with ECMP"** | **AWS Transit Gateway + ECMP**. |

---

## 🛑 2. Trampas Clásicas de Descarte Inmediato

Descarta estas opciones en menos de 5 segundos cuando las leas:

1. **Security Groups con regla "DENY"**: Falso. Los Security Groups **SOLO tienen reglas ALLOW**. Si una opción dice *"create a deny rule in the security group"*, descártala al instante.
2. **EBS Multi-AZ**: Falso. Un volumen EBS pertenece a **una sola Availability Zone**. No puede montarse en instancias de otra AZ.
3. **Achicar volumen EBS con `ModifyVolume`**: Falso. Los discos EBS se pueden expandir o cambiar de tipo (`io2` a `gp3`), pero **nunca se pueden reducir de tamaño**.
4. **Cifrar RDS en caliente o crear Read Replica cifrada de base no cifrada**: Falso. No se puede cifrar una BD RDS viva ni crear réplicas cifradas de algo no cifrado.
5. **S3 Glacier Deep Archive para "Immediate access"**: Falso. Deep Archive tarda **9 a 12 horas** en recuperar archivos. Si piden acceso inmediato o en milisegundos, es **S3 Standard-IA** o **Glacier Instant Retrieval**.
6. **NAT Gateway para no salir a Internet**: Falso. El NAT Gateway **manda el tráfico a Internet**. Para no salir a Internet hacia AWS se usa **VPC Endpoint**.

---

## 🗄️ 3. Bases de Datos: Decisiones Rápidas

### Relacional (RDS / Aurora)
* **High Availability (HA) / Disaster Recovery**: **Multi-AZ** (copia síncrona en otra AZ con failover automático de DNS).
* **Read Performance / Reportes pesados**: **Read Replicas** (copia asíncrona, hasta 15 en Aurora o 5 en RDS).
* **Base de datos que se usa pocos minutos al día de forma intermitente**: **Aurora Serverless**.
* **RPO < 1s, RTO < 1 min entre Regiones (Multi-Region)**: **Aurora Global Database**.
* **¿Cómo cifrar una base RDS MySQL/Postgres que no estaba cifrada?**
  $$\text{Snapshot} \longrightarrow \text{Copy Snapshot (marcar KMS)} \longrightarrow \text{Restore new DB}$$

### NoSQL (DynamoDB)
* **Gaming / Perfiles de usuario / Millones de usuarios concurrentes**: **DynamoDB**.
* **Buscar por atributos secundarios**: **Global Secondary Index (GSI)**.
* **Sesiones web**: Guardar sesiones de usuario en DynamoDB (o ElastiCache) para desacoplar los servidores web (stateless).

---

## 🌐 4. Networking y VPC

* **Gateway VPC Endpoints (Gratis, modifica Route Table)**: Únicamente para **S3** y **DynamoDB**.
* **Interface VPC Endpoints (PrivateLink, usa ENI con IP privada)**: Para el resto de los servicios (SQS, SNS, Secrets Manager, etc.).
* **Reglas entre capas (Web a DB)**: La regla inbound del Security Group de la base de datos debe tener como **Source el ID del Security Group de la capa Web/App**, jamás rangos de IP CIDR abiertos.
* **VPC Peering creado pero sin tráfico**: Falta actualizar las **Route Tables** en ambas VPCs.
* **NAT Gateway tolerante a fallos**: Debe haber **un NAT Gateway por cada Availability Zone** en su respectiva subred pública.

---

## 🚨 5. Disaster Recovery (De menor a mayor costo)

1. **Backup & Restore**: Horas / días de RTO/RPO. La más barata. Snapshots a S3.
2. **Pilot Light**: Decenas de minutos (~30 min). Base de datos replicada viva en tamaño mínimo; cómputo apagado hasta el desastre.
3. **Warm Standby**: Minutos (~5-10 min). Toda la arquitectura corriendo en la otra región pero a escala mínima (ej: 1 instancia mínima detrás de un ASG), lista para escalar.
4. **Multi-site Active/Active**: Cero downtime / segundos. Tráfico dividido en tiempo real entre dos regiones (la más costosa).

---

## 🔐 6. Seguridad y Almacenamiento

* **S3 Bucket Policy con error de sintaxis**: Le falta el campo `"Principal": { ... }` (obligatorio en Resource-based policies).
* **Bloquear acceso directo a S3 y forzar CloudFront**: **Origin Access Control (OAC)** + S3 Bucket Policy apuntando al servicio CloudFront.
* **Rotación automática de contraseñas de Base de Datos**: **AWS Secrets Manager** (Parameter Store no tiene rotación nativa integrada con RDS).
* **Auditoría de quién llamó a qué API**: **AWS CloudTrail**.
* **Auditoría de cumplimiento de configuración y remediación automática**: **AWS Config** (Conformance Packs para organizaciones).
* **Contenedores en ECS que necesitan permisos para SQS/S3**: Asignar un **ECS Task Role** en la Task Definition (nunca usar el Instance Role de EC2).

---

## ⏱️ 7. Estrategia Mental durante el Examen

1. **Lee primero la última frase de la pregunta**: Te dice inmediatamente qué criterio priorizar (*"most cost-effective"*, *"least operational overhead"*, *"highest availability"*).
2. **Aplica descarte binario**: En el 90% de las preguntas, dos opciones son disparates técnicos o usan servicios que no tienen que ver. Quédate con las 2 finalistas.
3. **Usa el botón "Flag for review"**: Si dudas más de 60 segundos en una pregunta, marca la que más te convenza por instinto, ponle Flag y continúa. El examen tiene 65 preguntas y 130 minutos (2 minutos por pregunta).
4. **Cero respuestas en blanco**: AWS no penaliza por respuestas incorrectas.

¡Mucho éxito mañana! Tu capacidad de análisis y descarte ya demostró estar en el nivel de aprobación. Con calma y aplicando estas reglas, esa certificación es tuya.
