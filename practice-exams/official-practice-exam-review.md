# 📝 Official Practice Exam Review (Questions & Deep-Dive Explanations)
## AWS Certified Solutions Architect - Associate (SAA-C03)

Este documento recopila las preguntas reales y oficiales del examen de práctica trabajadas en sesión intensiva de repaso, con su análisis de descarte, trampas frecuentes, justificación técnica y conceptos clave.

---

### Question 1: SQS Standard vs FIFO
* **Question:** A restaurant reservation application needs to access a waiting list. When a customer tries to reserve a table, and none are available, the customer application will put the user on the waiting list, and the application will notify the customer when a table becomes free. The waiting list must preserve the order in which customers were added to the waiting list. Which service should the solutions architect recommend to store this waiting list?
* **Options:**
  * A. A standard queue in Amazon Simple Queue Service (Amazon SQS)
  * B. Amazon Simple Notification Service (Amazon SNS)
  * C. AWS Step Functions invoking AWS Lambda functions
  * D. A FIFO queue in Amazon Simple Queue Service (Amazon SQS) *(Correct)*
* **Analysis & Key Trigger:**
  * **Keyword:** *"preserve the order in which customers were added"*.
  * **SQS Standard** ofrece *best-effort ordering* (el orden no está garantizado).
  * **SQS FIFO** garantiza orden estricto de entrega (*First-In, First-Out*) y procesamiento *exactly-once*.

---

### Question 2: S3 Resource-Based Policy Syntax
* **Question:** An administrator wants to apply a resource-based policy to the S3 bucket named "iam-policy-testbucket" to restrict access and to allow accounts to only write objects to the bucket. When the administrator tries to apply the policy:
  `{ "Version": "2012-10-17", "Id": "Policy1", "Statement": [ { "Sid": "Stmt1", "Effect": "Allow", "Action": "s3:PutObject", "Resource": "arn:aws:s3:::iam-policy-testbucket/*" } ]}`
  the bucket presents an error. How can the administrator correct the policy to resolve the error?
* **Options:**
  * A. Change the Action element from s3:PutObject to s3:\*.
  * B. Remove the Resource element because it is unnecessary for resource-based policies.
  * C. Change the Resource element to NotResource.
  * D. Add a Principal element to the policy to declare which accounts have access. *(Correct)*
* **Analysis & Key Trigger:**
  * Toda **Resource-based Policy** (Bucket Policy, SQS Policy, KMS Key Policy) **requiere obligatoriamente un elemento `Principal`** para indicar a qué entidad o cuenta le otorga o deniega permisos.
  * Solo las Identity-based policies prescinden de `Principal` porque ya están adjuntas al usuario/rol.

---

### Question 3: Athena Query Performance on S3 Data Lake
* **Question:** Batch processing on .csv files storing petabytes of sales data in Amazon S3 once every hour. The company runs ad-hoc queries in Amazon Athena to determine popularity by date and region. Queries fail or take longer than expected. Which actions improve query performance and reliability? (Choose two)
* **Correct Options:**
  * Use an AWS Glue ETL process to convert the .csv files into Apache Parquet format.
  * Partition the data by date and region in Amazon S3.
* **Analysis & Key Trigger:**
  * Athena lee directamente de S3 y cobra por byte escaneado.
  * **Parquet / ORC** es formato columnar con compresión y predicate pushdown.
  * **Partitioning** (`year=YYYY/month=MM/region=XX/`) evita escaneos de todo el bucket (full table scan) leyendo solo los prefijos filtrados.

---

### Question 4: DynamoDB Flash Sales / Sudden Traffic Spikes
* **Question:** Amazon DynamoDB with provisioned throughput for an ecommerce website inventory tier. During flash sales, the database cannot handle the sudden surge of transactions and transactions are lost. During normal periods, it performs appropriately. Which solution solves the performance problem?
* **Options:**
  * A. Implement DynamoDB Accelerator (DAX).
  * B. Switch DynamoDB to on-demand mode during flash sales. *(Correct)*
  * C. Use Amazon Simple Queue Service (Amazon SQS) to queue transactions to DynamoDB.
  * D. Use Amazon Kinesis to queue transactions for processing to DynamoDB.
* **Analysis & Key Trigger:**
  * DAX es caché en memoria solo para **lecturas repetitivas (Read cache)**; no soluciona escrituras en ventas relámpago.
  * **On-Demand Capacity Mode** escala de forma instantánea a cualquier volumen de lecturas y escrituras sin aprovisionamiento previo.

---

### Question 5: High Availability (S3, Lambda, DynamoDB vs RDS)
* **Question:** S3 upload triggers Lambda, which writes metadata to DynamoDB and an Amazon RDS for PostgreSQL database. Which action ensures high availability?
* **Correct Option:** Enable Multi-AZ on the RDS for PostgreSQL database.
* **Analysis & Key Trigger:**
  * S3, Lambda y DynamoDB son serverless y **Multi-AZ por defecto**.
  * RDS PostgreSQL por defecto es **Single-AZ**. Para brindarle alta disponibilidad y failover automático síncrono hay que habilitar explícitamente **Multi-AZ**.

---

### Question 6: S3 Data Lake Infrequent SQL Queries
* **Question:** Data lake in S3 with infrequent SQL queries, minimizing infrastructure costs.
* **Correct Option:** Amazon Athena (Serverless, sin servidores corriendo 24/7, pagas por query).

---

### Question 7: VPN Throughput Limitation & ECMP
* **Question:** AWS Site-to-Site VPN experiences high latency and bottleneck despite available internet bandwidth on-premises. How to improve VPN throughput?
* **Correct Option:** Use a Transit Gateway with equal cost multipath (ECMP) routing and add additional VPN tunnels.
* **Analysis & Key Trigger:**
  * Virtual Private Gateway (VGW) tiene tope de **1.25 Gbps** por túnel y no soporta ECMP.
  * Para agregar ancho de banda combinando múltiples túneles VPN con ECMP se requiere **AWS Transit Gateway (TGW)**.

---

### Question 8 & 11: Stopped EC2 Costs
* **Question:** Stopped EC2 instances over weekends still generate charges. Which resources are causing this?
* **Correct Answers:**
  * Amazon Elastic Block Store (Amazon EBS) volumes (cobran por GB-mes aprovisionado independientemente del estado de la instancia).
  * Elastic IP addresses asociadas a instancias apagadas o desasociadas.

---

### Question 10: Active Directory on EC2 Security Risk
* **Question:** EC2 instance hosts public website AND Microsoft Active Directory Domain Controller. Need to improve security and minimize administrative demand.
* **Correct Option:** Use AWS Managed Microsoft AD to create a managed Active Directory. Uninstall Active Directory on the current EC2 instance.
* **Rule:** Los Security Groups no tienen reglas DENY. Instalar AD manual en EC2 acarrea sobrecarga operativa.

---

### Question 12 & 25: Least Privilege between App Tiers (Security Groups)
* **Question:** Restrict database access strictly to application servers.
* **Correct Rule:** En el Security Group de la Base de Datos, crear regla Inbound donde el **Source sea el Security Group ID del Application Server** (ej: `sg-app`). No usar CIDR blocks.

---

### Question 13: ECS Container IAM Permissions
* **Question:** Application running in ECS (EC2 launch type) needs to publish messages to Amazon SQS. Most secure method?
* **Correct Option:** Create an IAM role with SQS permissions and assign it to the **Task Role** in the task definition.
* **Rule:** Nunca otorgar permisos al EC2 Instance Role / Launch Configuration (violaría el menor privilegio entre contenedores).

---

### Question 14: S3 Encryption Management
* **Question:** Encrypt S3 images at rest. Do not want to manage or rotate keys, but want to control who accesses the keys.
* **Correct Option:** Server-Side Encryption with AWS KMS-Managed Keys (SSE-KMS).

---

### Question 15: SQS Dead-Letter Queue
* **Question:** Microservice B fails to process an SQS message after 4 retries. Move it for investigation.
* **Correct Option:** Configure an SQS Dead-Letter Queue (DLQ) with a redrive policy (`maxReceiveCount: 4`).

---

### Question 17: EFS Throughput Modes
* **Question:** Hundreds of concurrent ECS tasks across multiple AZs produce 10 MB outputs. Total storage is under 1 TB, but requires HIGHEST throughput.
* **Correct Option:** Amazon EFS with **Provisioned Throughput mode**.
* **Rule:** En modo Bursting el throughput depende del tamaño almacenado (50 KB/s por GiB). Para tamaños pequeños con alto tráfico se usa Provisioned Throughput.

---

### Question 18 & 40 & 60: Private Connectivity to AWS Services
* **Question:** Instances in private subnets need to reach AWS services without traversing the public internet.
* **Correct Option:** **VPC Endpoints** (Gateway Endpoint para S3 y DynamoDB; Interface Endpoint / PrivateLink para el resto). Nunca NAT Gateway si se exige no salir a Internet.

---

### Question 20: Amazon Polly Custom Pronunciation
* **Question:** Text-to-speech with custom abbreviations and brand names with least operational overhead.
* **Correct Option:** Amazon Polly with **Custom Lexicons** + `StartSpeechSynthesisTask` API.

---

### Question 23: Service Limits / Quotas
* **Question:** Auto Scaling cannot launch instances due to error: `EC2 QUOTA EXCEEDED`.
* **Correct Option:** Use **AWS Service Quotas** to request a limit increase for the account/region.

---

### Question 27: Multi-Account Governance & Remediation
* **Question:** Standardize evaluations and remediations across all member accounts in AWS Organizations.
* **Correct Option:** **AWS Config Conformance Packs**.

---

### Question 28: Auto Scaling Cost Optimization
* **Question:** Three-tier website with variable demand. Management fears over-provisioning frontend instances.
* **Correct Option:** Auto Scaling with a **Target Tracking Scaling Policy**.

---

### Question 29: VPC Peering Routing
* **Question:** VPC peering established between two VPCs, but traffic cannot flow.
* **Correct Option:** Configure the **Route Tables** in both VPCs pointing to the peering connection (`pcx-xxxx`).

---

### Question 30 & 63: Gaming / Package Tracking with DynamoDB
* **Question:** Unstructured data, millions of users, updates every 0.5s. Older items (> 1 month) must be deleted with minimal cost.
* **Correct Option:** Amazon DynamoDB with Global Secondary Indexes + **Time to Live (TTL)**.

---

### Question 31: Multi-Region Disaster Recovery (RPO 1s, RTO 1min)
* **Question:** Relational database with multi-Region RPO of 1 second and RTO of 1 minute.
* **Correct Option:** **Amazon Aurora Global Database**.

---

### Question 33: Secure Private Downloads from S3
* **Question:** Web servers overloaded serving private user downloads. Users must only download their own files.
* **Correct Option:** Store files on Amazon S3 and generate **Amazon S3 Presigned URLs**.

---

### Question 36: SQS Prioritization (Paid vs Free Users)
* **Question:** Process paid user requests before free user requests.
* **Correct Option:** Create **two separate SQS queues** (one for paid, one for free) and have workers prioritize polling the paid queue.

---

### Question 37 & 49: Offloading Long-Running Requests
* **Question:** Long-running report/creation requests (minutes) blocking incoming web connections and causing timeouts.
* **Correct Option:** Offload requests to **Amazon SQS + Lambda / Worker** for asynchronous background processing.

---

### Question 39: App User Authentication & MFA
* **Question:** Mobile app users need secure sign-in with MFA. Limit build time and maintenance.
* **Correct Option:** **Amazon Cognito User Pools** (nunca crear usuarios IAM para clientes).

---

### Question 41 & 61: Encrypting Existing Unencrypted RDS Instance
* **Question:** Existing unencrypted RDS database must be encrypted due to new compliance requirements.
* **Correct Rule:**
  1. Take a snapshot of the unencrypted RDS database.
  2. Copy the snapshot and enable KMS encryption.
  3. Restore a new RDS instance from the encrypted snapshot.

---

### Question 43: Exposing Private Service to Thousands of Customers
* **Question:** Service provider in private subnet needs to transmit data to thousands of customer AWS accounts.
* **Correct Option:** Create a **VPC Endpoint Service (AWS PrivateLink)**.

---

### Question 44: EBS Cost Reduction
* **Question:** Over-provisioned `io2` volumes incurring high costs.
* **Correct Option:** Use CloudWatch metrics to evaluate IOPS/throughput and use `ModifyVolume` to switch to **General Purpose SSD (`gp3`)**. (EBS jamás se puede achicar).

---

### Question 55: High Availability NAT Gateway
* **Question:** Instances in private subnets across multiple AZs must reach internet independently if one AZ fails.
* **Correct Option:** Deploy **one NAT Gateway in each Availability Zone** in its respective public subnet.

---

### Question 56: Static Disaster Recovery Website
* **Question:** Fallback website showing contact details if primary ALB website goes down.
* **Correct Option:** Host static backup on **Amazon S3 Website Hosting** + **Route 53 Failover Routing Policy**.

---

### Question 59: Restrict S3 to CloudFront Only
* **Question:** Prevent direct access to S3 objects, forcing users through CloudFront CDN.
* **Correct Option:** Configure **CloudFront Origin Access Control (OAC)** and update the S3 bucket policy to only allow the OAC principal.

---

### Question 65: UDP Traffic & Static IPs Globally
* **Question:** Low-latency streaming of audio over UDP for global users from a single region.
* **Correct Option:** **AWS Global Accelerator** (CloudFront no soporta UDP).
