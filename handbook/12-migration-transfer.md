# 🚚 Migración y Transferencia de Datos Híbridos | Migration & Transfer
**Handbook AWS Certified Solutions Architect – Associate (SAA-C03)**

> **🎯 Mapeo de Examen:** Dominio 3: High-Performing (24%) & Dominio 4: Cost-Optimized (20%)
> **📄 Páginas en el PDF Original:** 182 a 199 (Total: 18 páginas)

### 📋 Descripción General
Descubrimiento y migración de servidores (Application Discovery, MGN), migración continua de bases de datos (DMS), sincronización de red acelerada (DataSync) y transferencia masiva física (Snowball Edge, Snowmobile).

### 🗺️ Índice de Servicios en esta Categoría
| Servicio AWS | Página PDF | Acceso Rápido |
| :--- | :---: | :--- |
| **AWS Application Discovery Service** | p. 182 | [Ver Ficha Técnica](#aws-application-discovery-service) |
| **AWS Application Migration Service** | p. 184 | [Ver Ficha Técnica](#aws-application-migration-service) |
| **AWS Database Migration Service (AWS DMS)** | p. 186 | [Ver Ficha Técnica](#aws-database-migration-service-aws-dms) |
| **AWS DataSync** | p. 189 | [Ver Ficha Técnica](#aws-datasync) |
| **AWS Snow Mobile** | p. 192 | [Ver Ficha Técnica](#aws-snow-mobile) |
| **AWS Snowball Edge** | p. 194 | [Ver Ficha Técnica](#aws-snowball-edge) |
| **AWS Transfer Family** | p. 197 | [Ver Ficha Técnica](#aws-transfer-family) |

---


## <a id="aws-application-discovery-service"></a>🔹 AWS Application Discovery Service
*(Página 182 del Handbook)*


### 📌 ¿Qué es? / What It Is

AWS Application Discovery Service helps enterprises plan migration projects to AWS by
automatically identifying on-premises servers, applications, and their dependencies. It collects
detailed system configuration, performance, and usage data to provide insights that help with
migration planning and cost estimation.

### ⚙️ Características Clave / Key Features

- Automatically discovers on-premises servers and applications
- Collects system configuration, performance, and usage data
- Identifies application dependencies and network connections
- Provides detailed migration planning data to AWS Migration Hub
- Supports both agent-based and agentless discovery methods
- Enables accurate Total Cost of Ownership (TCO) and migration readiness analysis Discovery Methods

### 1. Agent-Based Discovery

- Lightweight agent installed on each on-premises server
- Collects detailed data on CPU, memory, disk, and network usage
- Captures process-level and dependency information
- Ideal for complex workloads requiring deep visibility
- Data is encrypted and sent securely to AWS

### 2. Agentless Discovery (via AWS Agentless Collector)

- Deploys a virtual appliance (OVA) in VMware vCenter environments
- Discovers VM configurations, usage metrics, and network connections
- No need to install software on individual VMs
- Best suited for large-scale VMware environments Data Collected
- Server details – hostnames, IPs, MAC addresses, OS, CPU, RAM, storage
- Performance metrics – CPU utilization, memory, disk I/O, network throughput
- Application and process information – running services and dependencies
- Network connections – inbound and outbound communication mapping
- Usage patterns and workload trends over time Integration with AWS Migration Hub
- All collected data is stored and visualized in AWS Migration Hub
- Helps group servers into applications for migration planning
- Provides migration recommendations and status tracking
- Supports export of discovered data for further analysis

### 🔒 Seguridad y Cifrado / Security

- All communication between agents, collectors, and AWS is encrypted (HTTPS/TLS)
- IAM roles and policies control data access
- No data is shared with AWS regions unless explicitly configured
- Collected data can be deleted at any time via the console or API
Integration with Other AWS Services
- AWS Migration Hub – Central dashboard for discovery, migration tracking, and planning.
- AWS Migration Evaluator – Provides TCO analysis based on discovery data.
- AWS Application Migration Service (MGN) – For lift-and-shift server migrations.
- AWS Database Migration Service (DMS) – For database migration and modernization.

### 💵 Precios y Costos / Pricing

- AWS Application Discovery Service is free to use.
- Standard AWS data transfer and storage charges may apply.
- Agents and collectors incur no additional software licensing costs.

### 💡 Casos de Uso Típicos / Use Cases

- Assessing on-premises environments before migration
- Mapping application dependencies for multi-tier workloads
- Identifying underutilized resources for cost optimization
- Supporting rehosting and replatforming strategies
- Generating inventory and performance baselines

### ⭐ Buenas Prácticas / Best Practices

- Run discovery for at least 2–4 weeks to capture accurate workload patterns.
- Use agent-based discovery for in-depth performance data.
- Combine agent-based and agentless discovery for comprehensive visibility.
- Group discovered servers into logical applications before migration.
- Regularly export and back up discovery data from Migration Hub.
- Restrict IAM access to discovery data and use encryption for security.

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Application Discovery Service identifies on-premises servers, applications, and dependencies for migration planning.
- Agent-based discovery gives deep performance and dependency details.
- Agentless discovery works with VMware environments for fast inventory.
- Integrates tightly with AWS Migration Hub for migration visualization.
- Helps build an accurate TCO and migration roadmap.
- Used during the Assessment and Discovery phase of migration not during actual migration.
- No additional cost, it’s a free AWS service.

### 📝 Resumen Rápido / Quick Summary

AWS Application Discovery Service automates the detection and analysis of on-premises
workloads to streamline migration planning. It provides insights into server performance,
dependencies, and configurations, integrates with AWS Migration Hub, and enables data-driven
migration strategies all without manual inventory or guesswork.
AWS Application Migration Service (MGN)

### 📌 ¿Qué es? / What It Is

AWS Application Migration Service (MGN) is a fully managed service that simplifies, expedites,
and reduces the cost of migrating applications to AWS. It allows you to lift and shift (rehost)
physical, virtual, or cloud-based servers to AWS with minimal downtime.

### ⚙️ Características Clave / Key Features

- **Continuous Block-Level Replication:** Automatically replicates source servers to AWS in near real-time.
- **Minimal Downtime Cutover:** Enables testing and final cutover with minimal business disruption.
- **Automated Launch Templates:** Automatically generates EC2 launch templates for test and cutover instances.
- **Simplified Migration:** Reduces manual effort compared to traditional rehosting tools.
- **Supports a Variety of Environments:** Works with physical, VMware, Hyper-V , and other cloud sources.
- **Rollback Capability:** You can revert to the original environment if needed.
- **Integrated Conversion:** Converts your source servers to run natively on AWS infrastructure.

### 🏗️ Cómo Funciona y Arquitectura / How It Works


### 1. Install Agent: Deploy the AWS replication agent on your source servers.


### 2. Continuous Replication: Data replicates continuously to a staging area subnet in your

AWS account.

### 3. Test Launch: You can test migrated servers to validate functionality before cutover.


### 4. Cutover Launch: Perform a final migration (cutover) when ready.


### 5. Post-Migration: Optimize instances using AWS tools like AWS Systems Manager or Cost

Explorer.
Core Components
- **Replication Agent:** Installed on each source server to replicate data.
- **Staging Area:** Temporary environment in AWS to store replicated data.
- **Launch Template:** Defines configuration for EC2 instances (type, VPC, subnet, etc.).
- **Test and Cutover Instances:** Created automatically for validation and final migration. Supported Use Cases
- Migrating on-premises workloads to AWS with minimal changes.
- Moving workloads from other clouds to AWS.
- Modernizing legacy infrastructure through rehosting.
- Large-scale datacentre migration and disaster recovery setups.

### ⭐ Buenas Prácticas / Best Practices

- **Perform Test Launches:** Always test before final cutover.
- **Ensure IAM Permissions:** Grant correct permissions for the MGN service role.
- **Monitor Using CloudWatch:** Track replication lag and health status.
- **Tag Resources:** Helps with tracking and cost management.
- **Clean Up Post-Migration:** Remove staging resources after cutover to avoid extra costs. Integration with Other AWS Services
- AWS Identity and Access Management (IAM): Controls access to MGN resources.
- **Amazon CloudWatch:** For performance and replication monitoring.
- **AWS Systems Manager:** Post-migration instance management.
- **AWS Migration Hub:** Centralized migration tracking and reporting.
- **AWS Cost Explorer:** Analyse and optimize costs after migration.

### 💵 Precios y Costos / Pricing

- **Pay-as-you-go:** Based on the number of source servers actively replicating to AWS.
- No separate charge for test or cutover instances beyond EC2 and EBS usage.

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- MGN is the recommended service for lift-and-shift migrations to AWS.
- Unlike AWS SMS (Server Migration Service), MGN provides continuous replication instead of snapshot-based replication.
- Staging area subnet is required for data replication.
- You can migrate physical, virtual, or cloud-based servers.
- MGN automatically creates EC2 launch templates for test and cutover.
- Always test migration before final cutover to avoid application downtime.

### 📝 Resumen Rápido / Quick Summary

AWS Application Migration Service (MGN) is the go-to tool for seamless lift-and-shift migrations
to AWS. It continuously replicates your source servers physical, virtual, or cloud-based into
AWS, minimizing downtime and manual effort. With automated EC2 launch templates, near real-
time replication, and test launch capabilities, MGN ensures a smooth transition before final
cutover . It integrates tightly with IAM, CloudWatch, and Migration Hub, making it ideal for large-
scale, low-risk migrations and modernization projects.
AWS Database Migration Service (DMS)

### 📌 ¿Qué es? / What It Is

AWS Database Migration Service (AWS DMS) is a managed service that helps you migrate
databases to AWS easily and securely. It supports homogeneous migrations (e.g., Oracle to
Oracle) and heterogeneous migrations (e.g., Oracle to Aurora). It also supports ongoing
replication for minimal downtime migrations.

### ⚙️ Características Clave / Key Features

- Supports one-time migration and continuous data replication
- Handles homogeneous and heterogeneous database migrations
- Supports both schema and data migration (with AWS Schema Conversion Tool)
- Minimal downtime with change data capture (CDC)
- Supports on-premises, EC2-based, and AWS cloud database sources and targets
- High availability with multi-AZ deployments
- Supports data transformation during migration
- Integrated monitoring with Amazon CloudWatch Supported Sources and Targets
- **Sources:** 
  - On-premises databases
  - AWS databases
  - EC2-hosted databases
- **Targets:** 
  - Amazon RDS (all engines)
  - Amazon Aurora
  - Amazon Redshift
  - Amazon S3
  - DynamoDB
  - Kinesis Data Streams
  - OpenSearch Service
  - Any database supported by JDBC driver Homogeneous vs. Heterogeneous Migrations
- **Homogeneous:** Source and target engines are the same (e.g., Oracle to Oracle)
- **Heterogeneous:** Source and target engines differ (e.g., Oracle to Aurora PostgreSQL)
- AWS Schema Conversion Tool (AWS SCT) helps convert database schema and code for heterogeneous migrations Replication Tasks
- **Full load:** Migrates all existing data
- **CDC (Change Data Capture):** Captures ongoing changes to keep source and target in sync
- **Full load + CDC:** Combines both for minimal downtime migrations Change Data Capture (CDC)
- Enables near-real-time replication
- Captures insert, update, and delete operations from the source
- Ensures target stays up-to-date during and after initial migration High Availability
- Multi-AZ deployment with failover support
- Ensures minimal disruption in case of infrastructure failure
- Replication tasks can be resumed after failover Data Transformation
- Supports basic data transformation rules during migration
- Modify data types, column names, or content as it moves to the target
- Can map and filter data to control what is migrated Performance and Scalability
- Scales with instance types to support large datasets
- Supports parallel table loading
- Optimized for high-throughput migration Monitoring and Management
- Integrated with Amazon CloudWatch for metrics and logs
- AWS Management Console for task creation and monitoring
- Detailed task logs for troubleshooting
- Notifications via Amazon SNS

### 🔒 Seguridad y Cifrado / Security

- Supports encryption at rest and in transit
- VPC support for network isolation
- IAM for controlling access to AWS DMS resources
- AWS Key Management Service (KMS) for managing encryption keys
AWS Schema Conversion Tool (SCT)
- Complements AWS DMS for heterogeneous migrations
- Converts database schema, stored procedures, views, and other code objects
- Provides assessment reports to identify manual changes required
- Supports conversion to Amazon Aurora, PostgreSQL, MySQL, and others

### 💵 Precios y Costos / Pricing

- Pay only for replication instance hours used
- Storage for migration logs and cached changes is billed separately
- No charge for data transfer between AWS DMS and AWS databases in the same region

### 💡 Casos de Uso Típicos / Use Cases

- Migrating production databases to AWS with minimal downtime
- Continuous replication for disaster recovery or high availability setups
- Consolidating multiple databases into a single AWS target
- Moving analytical workloads to Amazon Redshift
- Archiving transactional data to Amazon S3

### ⭐ Buenas Prácticas / Best Practices

- Use AWS SCT for schema conversion in heterogeneous migrations
- Test migration tasks thoroughly before production cutover
- Monitor tasks using CloudWatch metrics and logs
- Enable multi-AZ deployments for high availability
- Plan for network connectivity and security (VPC, IAM policies)
- Validate data integrity post-migration

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Supports homogeneous and heterogeneous migrations
- AWS SCT is required for schema conversion in heterogeneous migrations
- Supports sources and targets on-premises, in EC2, or AWS-managed databases
- Integrated monitoring with CloudWatch and notifications with SNS
- Encryption in transit and at rest supported via AWS KMS

### 📝 Resumen Rápido / Quick Summary

AWS DMS simplifies and automates database migrations to AWS with minimal downtime. It
supports both same-engine and cross-engine migrations, continuous replication via CDC, and
works with AWS SCT for schema conversion. With built-in monitoring, security, and multi-AZ
support, it ensures reliable, secure, and low-disruption database migrations.

## <a id="aws-datasync"></a>🔹 AWS DataSync
*(Página 189 del Handbook)*


### 📌 ¿Qué es? / What It Is

AWS DataSync is a fully managed data transfer service that simplifies, automates, and
accelerates moving large amounts of data between on-premises storage and AWS services.
It is designed for fast, secure, and automated data movement, supporting one-time migrations
and ongoing transfers.

### ⚙️ Características Clave / Key Features

- Transfers data up to 10x faster than open-source tools.
- Automates tasks like data validation, scheduling, monitoring, and encryption.
- Built-in integrity verification to ensure data consistency.
- Handles metadata and ACL preservation for files.
- No need to write custom transfer scripts or manage infrastructure. Supported Transfer Locations
- **On-premises storage:** 
  - NFS (Network File System)
  - SMB (Server Message Block)
- **AWS services:** 
  - Amazon S3
  - Amazon EFS (Elastic File System)
  - Amazon FSx for Windows File Server
  - Amazon FSx for Lustre
  - AWS Snowcone (via DataSync agent)
  - Amazon S3-compatible storage

### 🏗️ Cómo Funciona y Arquitectura / How It Works

- Deploy AWS DataSync Agent on-premises:
  - Virtual appliance for VMware, Hyper-V, or EC2.
  - Connects to on-premises NFS or SMB shares.
- Configure source and destination locations.
- **Define and start tasks:** 
  - Transfer data from on-prem to AWS, AWS to on-prem, or between AWS services.
- Supports scheduled and incremental transfers.
- Transfers securely over AWS Direct Connect, VPN, or the Internet.
Performance
- Purpose-built protocol optimized for high-speed transfers.
- Can use parallel, multi-threaded operations.
- Transfers hundreds of terabytes or millions of files quickly.
- Supports throttling to avoid saturating network links.

### 🔒 Seguridad y Cifrado / Security

- Data encrypted in transit using TLS.
- Data at rest uses AWS-managed encryption:
  - S3 SSE (including SSE-KMS).
  - EFS and FSx encryption features.
- Integrates with AWS IAM for access control.
- Supports VPC endpoints for private connectivity. Monitoring & Management
- AWS Management Console and CLI support for configuration and monitoring.
- **AWS CloudWatch:** 
  - Monitor task metrics and performance.
  - Receive alarms on failures or thresholds.
- **AWS CloudTrail:** 
  - Logs API calls for auditing.

### 💵 Precios y Costos / Pricing

- Charged based on amount of data copied (per GB transferred).
- Additional AWS service costs apply for storing transferred data (e.g., S3 storage fees). Typical Use Cases
- **Data migration:** 
  - On-premises storage to AWS for cloud adoption.
- **Ongoing replication:** 
  - Backup and DR strategies with continuous sync.
- **Hybrid cloud workflows:** 
  - Sync data between on-premises and AWS.
- **Data movement between AWS services:** 
  - E.g., S3 to EFS, FSx to S3.
Integration with Other AWS Services
- Transfer objects to/from S3 buckets.
- Migrate or replicate POSIX file systems.
- Supports Windows File Server and Lustre.
- Transfers data on/off Snowcone devices.
- AWS CloudWatch and CloudTrail for monitoring and auditing. Data Validation and Integrity
- Automatic checksum verification during transfers.
- Ensures transferred data matches source data.
- Logs transfer results for audit and compliance. Performance Tuning
- Supports configurable bandwidth limits.
- Can schedule transfers during off-peak hours.
- Enables efficient incremental transfers by only copying changed data. Comparison with Other Services Service Use Case Key Difference AWS DataSync Fast, automated bulk file transfer Designed for NFS/SMB, optimized for speed AWS Snowball Large-scale, offline data migration Physical device, TB–PB scale AWS Transfer Family Managed SFTP/FTP access to S3/EFS Protocol-based user transfers AWS Storage Gateway Hybrid, on-prem to cloud storage integration Mount points for files/volumes/tapes

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- AWS DataSync = automated, high-speed data transfer between on-premises and AWS.
- Supports NFS, SMB, S3, EFS, FSx, Snowcone.
- Requires DataSync Agent for on-premises transfers.
- Uses TLS encryption in transit.
- IAM controls for access permissions.
- Automatic integrity checks with checksums.

### 📝 Resumen Rápido / Quick Summary

AWS DataSync is a fully managed service for accelerated, secure, and automated data movement
between on-premises storage systems and AWS services. It supports large-scale, repeatable
transfers with monitoring, encryption, and integrity checks built in.
AWS Snowmobile

### 📌 ¿Qué es? / What It Is

AWS Snowmobile is an exabyte-scale data transfer service that helps move massive amounts of
data (up to 100 PB) into AWS.
It uses a secure, physical shipping container (a 45-foot ruggedized truck) to transport data
securely from your data centre to AWS.

### ⚙️ Características Clave / Key Features

- Capacity
  - Each Snowmobile can hold up to 100 petabytes of data.
  - Multiple Snowmobiles can be used for exabyte-scale transfers.
- Use Case
  - Best suited for large-scale data migrations when moving data over the network is impractical due to bandwidth constraints or time limitations.
  - **Typical scenarios:** ▪ Data centre decommissioning ▪ Massive archive migrations ▪ Disaster recovery data transfer
- Physical Security
  - Snowmobile is a tractor-trailer shipping container.
  - **Equipped with:** ▪ GPS tracking ▪ 24/7 video surveillance ▪ Alarms and tamper-proof mechanisms
  - An accompanies it during AWS dedicated security vehicle escort transit.
- Data Security
  - All data is automatically encrypted using 256-bit encryption keys managed through AWS Key Management Service (KMS).
  - Encryption keys are never stored on the Snowmobile.
  - Digital signatures verify data integrity during transfer.
- Data Transfer
  - AWS personnel connect the Snowmobile to your local network via high-speed network connections.
  - Data transfer rates can reach up to 1 Tbps depending on your infrastructure.
  - Data is copied to the Snowmobile’s on-board storage arrays.
- Integration
  - Once the Snowmobile arrives at the AWS data centre, AWS personnel unload the data into your specified S3 bucket(s).
- Ordering
  - The service must be requested through the AWS account team.
  - AWS conducts an assessment and planning process before scheduling delivery. Comparison with Other Snow Services Service Capacity Use Case Delivery Time Snowball Edge Up to 80 TB per device TB-scale migrations, edge computing workloads Days to weeks Snowmobile Up to 100 PB Exabyte-scale migrations Weeks (depending on size) Security Considerations
- Encryption in transit and at rest (AES-256).
- KMS integration for key management.
- Chain-of-custody tracking during entire operation.
- Tamper-evident enclosures and escort security. Limitations
- Only available in specific AWS regions (must confirm availability).
- Requires significant logistical planning.
- Typically used for one-time, large-scale migrations.

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Snowmobile = 100 PB truck used when moving data over network is infeasible.
- Data encrypted using KMS-managed 256-bit keys.
- Requires on-site setup by AWS and security escort.
- Often tested in exam scenarios describing massive data centre migrations.
- Compared to Snowball Edge, Snowmobile is much larger and designed for exabyte-scale transfer.

### 📝 Resumen Rápido / Quick Summary

AWS Snowmobile is a physically transported data transfer solution capable of moving up to 100
PB of data per unit securely and efficiently from customer sites to AWS, with strong encryption,
chain-of-custody controls, and logistical support from AWS.

## <a id="aws-snowball-edge"></a>🔹 AWS Snowball Edge
*(Página 194 del Handbook)*


### 📌 ¿Qué es? / What It Is

AWS Snowball Edge is a rugged, portable data transfer and edge computing device designed to
move TB-scale data to and from AWS, and to run select AWS compute services locally.

### ⚙️ Características Clave / Key Features

Storage and Capacity
- **Two device types:** 
  - Snowball Edge Storage Optimized ▪ 80 TB usable storage. ▪ Best for large-scale data transfer, local storage.
  - Snowball Edge Compute Optimized ▪ 42 TB usable storage. ▪ Includes more vCPUs and GPU options for edge computing workloads. Edge Computing Capabilities
- Can run AWS Lambda functions locally.
- Supports EC2 instances for local compute processing.
- Enables processing, filtering, and transforming data before transfer.
- Helps support workloads in disconnected or intermittent-network environments.

### 💡 Casos de Uso Típicos / Use Cases

- Data migration to AWS (TB-scale).
- Edge computing in remote or mobile environments.
- IoT data processing at the edge.
- Disaster recovery and business continuity.
- Military or rugged field operations with limited connectivity. Data Transfer
- **Secure, offline transfer to AWS:** 
  - Customer loads data onto Snowball Edge on-premises.
  - Device is shipped back to AWS.
  - AWS uploads data into the customer’s S3 bucket.
- Also supports online data transfer between devices in a local cluster.
- Supports data import and export.
Clustering
- Multiple Snowball Edge devices can be clustered for:
  - Increased local storage capacity.
  - High-availability deployments.
- Clusters can act as a local HDFS-compatible storage layer.

### 🔒 Seguridad y Cifrado / Security

- End-to-end 256-bit encryption.
- AWS KMS integration for managing encryption keys.
- Tamper-resistant enclosures with tamper-evident seals.
- Trusted Platform Module (TPM) for hardware-based key storage.
- Chain-of-custody tracking during transit.
- Data automatically wiped after successful transfer to AWS. Ordering and Management
- Ordered via AWS Management Console.
- Managed with the Snow Family Management Console or CLI.
- Tracks shipping, jobs, and device status.
- Snowball Edge devices arrive pre-configured for the customer's job. Networking
- Supports 10 Gb, 25 Gb, and 40 Gb network connections.
- Local interfaces allow for fast on-premises transfer.
- Can be used in edge locations with limited or no internet connectivity. Snowball Edge Variants Type Storage Capacity Use Case Compute Capabilities Storage Optimized 80 TB usable Bulk data transfer, local storage Basic EC2 and Lambda support Compute Optimized 42 TB usable Edge compute-heavy workloads, ML/AI Extra vCPUs, optional GPU (NVIDIA Tesla V100)
Comparison with Snowmobile
Feature Snowball Edge Snowmobile
Capacity 42–80 TB per device Up to 100 PB per truck
Use Case TB-scale transfer, edge
computing
Exabyte-scale data centre migration
Delivery Shipped as a rugged appliance Delivered as a secure 45-foot truck
Compute
Capabilities
Runs EC2, Lambda locally No compute capability, purely data
transfer

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Snowball Edge is for TB-scale transfer with edge computing.
- Choose Storage Optimized for bulk data movement.
- Choose Compute Optimized for local processing with EC2 instances and GPU workloads.
- Data is encrypted end-to-end with AWS KMS keys.
- Device automatically wiped after ingestion.
- Can be clustered for higher local storage and HA.
- **Common exam scenario:** Remote site or disconnected edge environment needing local processing and transfer to AWS.

### 📝 Resumen Rápido / Quick Summary

AWS Snowball Edge is a portable, rugged device for securely transferring TB-scale data and
running edge computing workloads locally. It supports offline data movement to AWS with
encryption, built-in compute resources, and clustering for local storage and processing in harsh
or remote environments.

## <a id="aws-transfer-family"></a>🔹 AWS Transfer Family
*(Página 197 del Handbook)*


### 📌 ¿Qué es? / What It Is

AWS Transfer Family is a fully managed service that enables you to transfer files directly into
and out of Amazon S3 or Amazon EFS using SFTP , FTPS, and FTP protocols.
It provides a secure, highly available, and scalable way to integrate traditional file transfer
workflows with AWS storage services.
Supported Protocols
- SFTP (Secure File Transfer Protocol)
- FTPS (FTP over SSL/TLS)
- FTP (unencrypted; generally used only if required by legacy systems)

### ⚙️ Características Clave / Key Features

- Fully managed service, no need to manage your own FTP servers.
- **Supports direct integration with:** 
  - Amazon S3
  - Amazon Elastic File System (EFS)
- Scales automatically to handle thousands of concurrent connections.
- Supports custom domain names via AWS Certificate Manager (ACM).
- High availability with AWS-managed infrastructure.
- **User authentication options:** 
  - Service-managed identities
  - AWS Directory Service (Active Directory)
  - Custom identity providers via API Gateway and Lambda. Storage Integration
- **Amazon S3:** 
  - Users’ files land in specified S3 buckets.
  - Supports S3 access points for fine-grained permissions.
- **Amazon EFS:** 
  - Mount EFS file systems as the backend for FTP servers.
  - Allows POSIX-compliant shared access.

### 🔒 Seguridad y Cifrado / Security

- **Data in transit:** 
  - SFTP and FTPS ensure encryption over the wire.
  - FTP is available for compatibility but is unencrypted.
- **Data at rest:** 
  - Protected via S3/EFS encryption.
  - Can leverage AWS Key Management Service (KMS) for managing encryption keys.
- IAM policies control user permissions and access to backend storage.
- Supports logging with AWS CloudTrail.
- Supports VPC Security Groups and VPC endpoints for private access. User Management
- **Service-managed users:** 
  - AWS stores user credentials and configuration.
- **Directory Service:** 
  - Integrates with Microsoft AD for authentication.
- **Custom Identity Provider:** 
  - Use API Gateway and Lambda to authenticate users against external systems.
- User permissions define which folders/buckets/files users can access. Availability & Scalability
- High availability by design in multiple Availability Zones.
- Automatic scaling based on number of connections and workloads.
- No infrastructure to provision or maintain.

### 📈 Monitoreo y Auditoría / Monitoring & Logging

- **AWS CloudWatch:** 
  - Monitor server activity.
  - Track metrics like connections and data transfer.
- **AWS CloudTrail:** 
  - Logs API calls and configuration changes for auditing. Typical Use Cases
- Replacing legacy FTP/SFTP servers with a managed service.
- Exchanging files securely with partners, vendors, or customers.
- Onboarding data feeds into data lakes stored in S3.
- Providing SFTP/FTPS access to EFS-based applications

### 💵 Precios y Costos / Pricing

- **Based on:** 
  - Endpoint hours.
  - Data uploaded/downloaded.
  - Additional costs for S3 or EFS storage used. Comparison with AWS Storage Gateway Feature AWS Transfer Family AWS Storage Gateway Purpose Protocol-based file transfer to/from AWS Hybrid on-prem to cloud storage integration Protocols SFTP , FTPS, FTP NFS, SMB, iSCSI Storage Back- end Amazon S3, Amazon EFS S3, EBS Snapshots, Glacier Use Cases Partner data exchange, legacy FTP replacement Backup, disaster recovery, hybrid cloud

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- AWS Transfer Family provides SFTP/FTPS/FTP access to S3 and EFS.
- **Common exam scenario:** Replacing a legacy FTP server with secure, scalable, managed AWS service.
- Supports custom authentication via API Gateway and Lambda.
- Integrates directly with S3 access points and EFS file systems.
- Supports VPC endpoints for private access.
- IAM policies and user management control permissions.
- Logs all API activity in CloudTrail.
- Encrypts data in transit (SFTP/FTPS) and at rest (via S3/EFS encryption).

### 📝 Resumen Rápido / Quick Summary

AWS Transfer Family provides managed, secure, scalable SFTP , FTPS, and FTP access to Amazon
S3 and EFS, enabling easy modernization of legacy file transfer workflows without maintaining
your own servers.

---

### 🧭 Navegación
- [⬅️ Volver al Índice Principal del Handbook](README.md)
- [📚 Volver al Repositorio Maestro SAA-C03](../README.md)