# 💾 Almacenamiento de Objetos, Bloques, Archivos y Nube Híbrida | Storage
**Handbook AWS Certified Solutions Architect – Associate (SAA-C03)**

> **🎯 Mapeo de Examen:** Dominio 3: High-Performing (24%), Dominio 2: Resilient (26%) & Dominio 4: Cost-Optimized (20%)
> **📄 Páginas en el PDF Original:** 277 a 298 (Total: 22 páginas)

### 📋 Descripción General
Almacenamiento de objetos duradero (S3 y sus clases de ciclo de vida), volúmenes de bloque para EC2 (EBS), sistemas de archivos elásticos POSIX (EFS), sistemas de archivos de alto rendimiento (Amazon FSx for Windows / Lustre / ONTAP), copias centralizadas (AWS Backup) e integración híbrida on-premise (Storage Gateway).

### 🗺️ Índice de Servicios en esta Categoría
| Servicio AWS | Página PDF | Acceso Rápido |
| :--- | :---: | :--- |
| **AWS Backup** | p. 277 | [Ver Ficha Técnica](#aws-backup) |
| **Amazon Elastic Block Store (Amazon EBS)** | p. 280 | [Ver Ficha Técnica](#amazon-elastic-block-store-amazon-ebs) |
| **Amazon Elastic File System (Amazon EFS)** | p. 284 | [Ver Ficha Técnica](#amazon-elastic-file-system-amazon-efs) |
| **Amazon FSx (for all types)** | p. 287 | [Ver Ficha Técnica](#amazon-fsx-for-all-types) |
| **Amazon S3** | p. 291 | [Ver Ficha Técnica](#amazon-s3) |
| **AWS Storage Gateway** | p. 296 | [Ver Ficha Técnica](#aws-storage-gateway) |

---


## <a id="aws-backup"></a>🔹 AWS Backup
*(Página 277 del Handbook)*


### 📌 ¿Qué es? / What It Is

AWS Backup is a fully managed backup service that makes it easy to centrally automate and
manage backups across AWS services and on-premises resources. It provides centralized backup
management, compliance tracking, and backup activity monitoring.

### ⚙️ Características Clave / Key Features

- Centralized backup management across AWS services
- Policy-based automation for scheduling backups
- Backup vaults to store and manage backups securely
- Cross-region and cross-account backup capability
- Backup activity monitoring and auditing
- Integration with AWS Organizations for managing multiple accounts
- Supports backup of on-premises resources via AWS Storage Gateway Supported AWS Services
- Amazon EBS volumes
- Amazon RDS databases (including Aurora)
- DynamoDB tables
- Amazon EFS file systems
- Amazon FSx file systems
- AWS Storage Gateway volumes
- Amazon EC2 instances
- AWS Backup Vault Lock for immutable backups Backup Plans
- Define policies for creating backups on a schedule
- Specify frequency, lifecycle rules, and retention
- Support for tags to identify resources for backup
- Lifecycle rules for transitioning backups to cold storage
- Central policy management for consistency across resources Backup Vaults
- Logical containers to store backups
- Supports encryption with AWS KMS
- Access control with IAM policies
- Cross-account access can be granted
- Vault Lock feature for Write-Once-Read-Many (WORM) compliance Backup Lifecycle Management
- Define retention rules for backups
- Automate transition of backups to low-cost cold storage
- Control backup expiration to manage costs Cross-Region and Cross-Account Backups
- Enable replication of backups to other AWS Regions for disaster recovery
- Support for cross-account backup sharing for secure collaboration
- Enhance resilience and meet compliance requirements Backup Monitoring and Reporting
- AWS Backup console provides job status and history
- Integration with AWS CloudTrail for auditing API activity
- AWS CloudWatch integration for alerts and metrics
- Compliance reporting for backup plan adherence AWS Organizations Integration
- Centralized backup policy management across accounts
- Apply backup plans consistently in multi-account setups
- Use delegated administrator account to manage backup policies Security and Encryption
- Encryption at rest using AWS KMS keys
- Encryption in transit using TLS
- IAM roles and policies control access to backup resources
- Vault Lock for immutable, tamper-proof backups

### 💵 Precios y Costos / Pricing

- Charges based on backup storage used (warm and cold storage)
- Charges for backup transitions between warm and cold storage
- Additional costs for cross-region backup copies
- No upfront fees or commitments—pay-as-you-go model

### 💡 Casos de Uso Típicos / Use Cases

- Centralized and automated backup for AWS workloads
- Disaster recovery with cross-region backups
- Compliance with data retention and audit requirements
- Backup of hybrid cloud workloads via Storage Gateway
- Securing critical business data with encrypted, immutable backups

### ⭐ Buenas Prácticas / Best Practices

- Define clear backup policies for all critical resources
- Use Vault Lock for compliance and immutability
- Implement cross-region replication for disaster recovery
- Monitor backup activity with CloudWatch and CloudTrail
- Regularly test backup and restore processes

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- AWS Backup centralizes and automates backup management
- Supports cross-region and cross-account backups
- Backup Vaults store encrypted backups with access controls
- Vault Lock enforces Write-Once-Read-Many compliance
- Integrates with AWS Organizations for policy management
- Monitors and audits backup activity via CloudWatch and CloudTrail

### 📝 Resumen Rápido / Quick Summary

AWS Backup provides a centralized, automated way to manage backups across AWS services
and on-premises systems. It supports policy-based automation, secure storage in backup vaults,
compliance reporting, cross-region and cross-account replication, and integrates with AWS
Organizations for large-scale management.
Amazon EBS

### 📌 ¿Qué es? / What It Is

Amazon Elastic Block Store (EBS) is durable block storage for use with Amazon EC2 instances.
Provides persistent storage volumes that can be attached to instances in the same Availability
Zone.
Key Characteristics
- Block-level storage for EC2.
- Persistent, data remains even after instance stops or terminates.
- Designed for 99.999% availability.
- Supports snapshots for backup and recovery.
- Encryptable using AWS KMS.
- Can be dynamically resized without downtime. EBS Volume Types

### 1. General Purpose SSD (gp3)

- Baseline 3,000 IOPS, can provision up to 16,000 IOPS.
- Throughput up to 1,000 MB/s.
- Suitable for most workloads (boot volumes, dev/test).

### 2. Provisioned IOPS SSD (io1/io2)

- Designed for critical applications needing high performance.
- **io1:** Up to 64,000 IOPS.
- **io2:** More durability (99.999% durability SLA).
- Supports multi-attach (attach to multiple instances in same AZ).

### 3. Throughput Optimized HDD (st1)

- Low-cost, high-throughput workloads.
- Up to 500 MB/s throughput.
- Good for big data, data warehouses, log processing.
- Cannot be a boot volume.

### 4. Cold HDD (sc1)

- Lowest cost.
- Infrequently accessed data.
- Up to 250 MB/s throughput.
- Cannot be a boot volume.
Volume Features
- **Durability:** 
  - Replicated within an AZ.
  - Designed for high availability and durability.
- **Elastic Volumes:** 
  - Modify size, performance, and type without downtime.
- **Snapshots:** 
  - Point-in-time backups.
  - Stored in Amazon S3.
  - Incremental, only changes since last snapshot.
  - Can be copied across regions.
- **Encryption:** 
  - Uses AWS KMS.
  - Encrypts data at rest, data in transit between instance and volume, snapshots, and volume copies.
  - Enabled at creation; cannot encrypt an existing unencrypted volume directly (must copy to new encrypted volume). Performance
- IOPS depends on volume type and size.
- Consistent and predictable performance with Provisioned IOPS.
- Can burst IOPS on gp3.
- Throughput and IOPS can be adjusted for gp3. Multi-Attach (io1/io2)
- Attach a single io1/io2 volume to multiple Nitro-based EC2 instances in the same AZ.
- Enables shared storage scenarios like clustered applications. Snapshots
- Stored in S3, but invisible as S3 objects.
- Incremental by design, saving storage costs.
- Used to restore volumes or create new volumes.
- Can copy snapshots to other regions for disaster recovery.
- **Fast Snapshot Restore (FSR):** 
  - Enables low-latency, fully-initialized volumes from snapshots.
EBS Lifecycle Manager
- Automates snapshot creation, retention, and deletion.
- Helps enforce backup policies consistently. Data Lifecycle
- Create EBS volume in an AZ.
- Attach to EC2 instance in same AZ.
- Detach and reattach to other instances in same AZ.
- Delete when no longer needed.
- Snapshots allow cross-region or cross-account restoration.

### 🔒 Seguridad y Cifrado / Security

- Supports encryption at rest with AWS KMS.
- Transparent encryption for data in transit between instance and volume.
- IAM policies control access to snapshots and volumes.
- Supports encrypted snapshots and sharing encrypted snapshots with other accounts (requires KMS permissions).

### 💵 Precios y Costos / Pricing

- Charged per GB per month for provisioned storage.
- Charged for provisioned IOPS (io1/io2).
- Snapshot storage charged per GB-month.
- Fast Snapshot Restore incurs additional cost.
- Data transfer within same AZ free; cross-AZ/region transfers billed separately.

### ⭐ Buenas Prácticas / Best Practices

- Use gp3 for general workloads.
- Use io1/io2 for critical low-latency workloads needing high IOPS.
- Take regular snapshots for backup and DR.
- Use EBS Lifecycle Manager to automate backups.
- Encrypt sensitive data with AWS KMS.
- Monitor performance with CloudWatch metrics.
- Consider multi-attach for shared-disk applications.
- Use Fast Snapshot Restore for production recovery scenarios.

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- EBS volumes persist independently from EC2 instances.
- Snapshots are incremental and stored in S3.
- Encryption at rest uses AWS KMS.
- You can resize volumes without downtime (Elastic Volumes).
- gp3 is general purpose with customizable IOPS.
- io1/io2 support high IOPS and Multi-Attach.
- st1 and sc1 are HDD options for large, sequential workloads—cannot be used as boot volumes.
- Fast Snapshot Restore reduces initialization times for volumes created from snapshots.
- Always provision in same AZ as EC2 instance.

### 📝 Resumen Rápido / Quick Summary

Amazon EBS provides durable, high-performance block storage for EC2, with flexible volume
types, snapshot-based backups, encryption, and advanced features like Multi-Attach and Fast
Snapshot Restore. Essential for building reliable, scalable, and secure applications on AWS.
Amazon EFS

### 📌 ¿Qué es? / What It Is

Amazon Elastic File System (EFS) is a fully managed, scalable, elastic NFS file system for use
with AWS services and on-premises resources. Provides shared, concurrent access to thousands
of EC2 instances.
Key Characteristics
- Managed Network File System (NFSv4.1, NFSv4.0).
- **Elastic:** Automatically grows and shrinks as files are added or removed.
- **Scalable:** Supports petabytes of data, high levels of throughput and IOPS.
- Accessible concurrently by multiple instances across AZs.
- Supports POSIX permissions for access control. Storage Classes

### 1. Standard

  - For frequently accessed files.
  - Higher cost.
  - Designed for low latency, high throughput.

### 2. Infrequent Access (IA)

  - Lower cost for infrequently accessed files.
  - Charged per GB stored and per access request.
  - Ideal for files not read often but must be available.

### 3. Lifecycle Management

  - Automatically moves files to IA based on age.
  - Configurable transition policy (e.g., 30 days of no access). Performance Modes

### 1. General Purpose

  - Default mode.
  - Low latency for latency-sensitive use cases.
  - Suitable for web servers, CMS, home directories.

### 2. Max I/O

  - Supports higher levels of aggregate throughput.
  - Higher latencies.
  - Best for big data, media processing, analytics workloads.
Throughput Modes

### 1. Bursting Throughput

  - Default.
  - Throughput scales with file system size.
  - Suitable for most workloads.

### 2. Provisioned Throughput

  - Specify throughput independent of storage size.
  - Useful for workloads needing higher, consistent throughput. Availability and Durability
- Data is stored redundantly across multiple AZs in a region.
- Designed for 99.999999999% (11 9s) durability.
- **Regional service:** accessible from all AZs in a region.

### 🔒 Seguridad y Cifrado / Security

- Supports AWS KMS for encryption at rest.
- TLS encryption for data in transit.
- IAM policies and POSIX permissions for access control.
- Supports VPC security groups and network ACLs.
- **EFS Access Points:** 
  - Managed application access.
  - Enforce user and group identities, root access control. Mounting Options
- Mount directly on EC2 instances using NFS protocol.
- Mount targets in each AZ for high availability.
- **Supported on:** 
  - Linux EC2 instances.
  - On-premises servers via AWS Direct Connect or VPN.
  - AWS services like ECS and Lambda (via EFS Access Points). Backup and Restore
- AWS Backup supports EFS file systems.
- Centralized, automated backup service.
- Define backup plans and retention policies.
- Point-in-time recovery of file systems.

### 💡 Casos de Uso Típicos / Use Cases

- Content management.
- Web serving and hosting.
- Home directories.
- Media processing workflows.

### 💵 Precios y Costos / Pricing

- **Charged based on:** 
  - Storage used (Standard or IA), Requests to IA storage class.
  - Provisioned throughput if used, Data transfer within VPC is free; across regions incurs charges. Integration with Other AWS Services
- **EC2:** Primary mounting target.
- **ECS:** Persistent shared storage for containers.
- **Lambda:** Native integration with EFS via Access Points.
- **AWS Backup:** Centralized backup management.

### ⭐ Buenas Prácticas / Best Practices

- Use Lifecycle Management to reduce costs.
- Choose General Purpose performance mode for low-latency workloads.
- Use Max I/O for highly parallel, throughput-heavy workloads.
- Encrypt data at rest and in transit.
- Design for regional redundancy by using mount targets in each AZ.

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- EFS is POSIX-compliant, network file system.
- Supports concurrent access from thousands of instances.
- Elastic, managed, scales automatically with usage.
- **Two storage classes:** Standard and IA with Lifecycle Management.
- Can be mounted on-premises using Direct Connect or VPN.
- Integrated with AWS Backup for managed backups.

### 📝 Resumen Rápido / Quick Summary

Amazon EFS is a regional, managed, elastic NFS file system that supports scalable, concurrent
access from thousands of instances. It offers multiple performance and storage classes, POSIX-
compliant access controls, strong security and encryption options, and seamless integration
with AWS services for building highly available, shared file-based workloads.
Amazon FSx

### 📌 ¿Qué es? / What It Is

Amazon FSx is a fully managed service that makes it easy to launch, run, and scale feature-rich,
high-performance file systems in the cloud.
It provides native Windows and Linux file systems, eliminating the need to manage file servers
or storage hardware.

### ⚙️ Características Clave / Key Features

- **Fully managed by AWS:** patching, backups, monitoring.
- Supports multiple file system types to match different workloads.
- Provides high performance, scalable storage.
- Integrates with AWS security and networking.
- Supports encryption at rest and in transit. Supported File Systems

### 1. Amazon FSx for Windows File Server

- Built on Microsoft Windows Server.
- Provides SMB protocol access.
- **Supports Windows NTFS features:** 
  - ACLs
  - User quotas
  - Shadow copies
- Integrates with Active Directory for user authentication.
- Supports DFS namespaces and replication.
- **Use Cases:** 
  - Windows-based applications.
  - Home directories.
  - Content management systems.

### 2. Amazon FSx for Lustre

- High-performance file system for fast processing of workloads.
- POSIX-compliant.
- Seamlessly integrates with Amazon S3:
  - Can link S3 buckets for data processing.
  - Results can be written back to S3.
- Sub-millisecond latencies.
- Throughput up to hundreds of GB/s.
- **Use Cases:** 
  - Machine learning.
  - High-performance computing (HPC).
  - Media processing.

### 3. Amazon FSx for NetApp ONTAP

- Managed NetApp ONTAP file systems.
- Supports NFS, SMB, and iSCSI protocols.
- **Advanced NetApp features:** 
  - Multi-protocol access.
  - Snapshots.
  - Data deduplication and compression.
  - Cloning and replication.
- Supports FlexCache for caching volumes in different regions.
- Can tier cold data to Amazon S3.
- **Use Cases:** 
  - Enterprise workloads needing NetApp features.
  - Data replication and disaster recovery.
  - Hybrid cloud storage.

### 4. Amazon FSx for OpenZFS

- Managed OpenZFS file systems.
- POSIX-compliant, Linux-native.
- Supports NFS v3 and v4.1.
- High throughput and low latency.
- **Use Cases:** 
  - Linux-based applications.
  - Container storage.
  - Dev/test environments. Integration and Access
- Deploys inside VPC, with control over networking.
- Supports AWS Direct Connect and VPN for hybrid workloads.
- Integrated with AWS IAM for managing access.
- AWS Backup integration for automated backups.
- Data replication within and across AWS regions (for some file systems).

### 🔒 Seguridad y Cifrado / Security

- Encryption at rest using AWS KMS.
- Encryption in transit using SMB encryption, NFS encryption, and TLS.
- VPC Security Groups and Network ACLs for access control.
- IAM policies for API-level access.
- Supports AWS Identity Store integrations (e.g., Active Directory). Performance
- **FSx for Windows:** 
  - Up to tens of GB/s throughput.
  - Supports SSD and HDD storage.
- **FSx for Lustre:** 
  - Hundreds of GB/s throughput.
  - Sub-millisecond latencies.
- **FSx for ONTAP:** 
  - Advanced caching.
  - Efficient deduplication/compression.
- **FSx for OpenZFS:** 
  - High IOPS.
  - Consistent low latency. Backup and Recovery
- Supports automated daily backups.
- User-initiated backups at any time.
- Snapshots for point-in-time recovery. Monitoring and Management
- Amazon CloudWatch for performance metrics and alarms.
- AWS CloudTrail logs API calls for auditing.
- AWS Backup integration for centralized backup management.
- Management via AWS Console, CLI, and SDKs.

### 💵 Precios y Costos / Pricing

- **Charged based on:** 
  - Storage capacity provisioned.
  - Throughput capacity.
  - Backup storage used.
  - Data transfer (for replication).
- Separate pricing for SSD vs. HDD storage. Typical Use Cases
- Lift-and-shift Windows applications needing shared storage.
- HPC workloads using Lustre.
- Hybrid enterprise workloads needing NetApp features.
- Linux-native apps using OpenZFS.
- Media rendering, genomic analysis, ML training. Comparison Table FSx Type Protocols Best For Key Features FSx for Windows File Server SMB Windows apps, user shares NTFS, AD integration, DFS, Shadow Copies FSx for Lustre NFS, POSIX HPC, ML, analytics S3 integration, sub-ms latency, high throughput FSx for NetApp ONTAP NFS, SMB, iSCSI Enterprise workloads, hybrid storage Snapshots, deduplication, FlexCache, tiering FSx for OpenZFS NFS v3/v4.1 Linux workloads, container storage Snapshots, clones, compression, encryption

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- FSx is fully managed, no need to maintain file servers.
- Choose FSx for Windows for SMB/Windows workloads needing AD.
- Use FSx for Lustre for HPC and S3-integrated data processing.
- FSx for ONTAP offers advanced enterprise storage features with multi-protocol access.
- FSx for OpenZFS is best for Linux workloads with ZFS features.
- Supports encryption at rest (AWS KMS) and in transit.
- Integrated with VPC, IAM, CloudWatch, CloudTrail, AWS Backup.

### 📝 Resumen Rápido / Quick Summary

Amazon FSx provides fully managed, scalable, high-performance file systems tailored for
Windows, Linux, HPC, and enterprise workloads. Choose the right FSx variant based on
protocols, performance, and features needed for your application.

## <a id="amazon-s3"></a>🔹 Amazon S3
*(Página 291 del Handbook)*


### 📌 ¿Qué es? / What It Is

Amazon Simple Storage Service (Amazon S3) is an object storage service offering industry-
leading scalability, data availability, security, and performance.
Store and retrieve any amount of data from anywhere on the web.

### 🧩 Conceptos Centrales / Core Concepts

- **Buckets:** 
  - Top-level container for objects.
  - Globally unique name.
  - Defined in a single AWS Region.
- **Objects:** 
  - Data stored in buckets.
  - Consists of key (name), value (data), metadata, and version ID.
- **Keys:** 
  - Unique identifier for an object within a bucket.
- **Regions:** 
  - Buckets are created in a specific AWS Region. Storage Classes
- **Standard:** 
  - Frequent access.
  - High durability (99.999999999% - 11 9s).
  - 99.99% availability.
- **Intelligent-Tiering:** 
  - Automatically moves objects between access tiers.
  - Suitable for unknown or changing access patterns.
- **Standard-IA (Infrequent Access):** 
  - Lower cost for infrequent access.
  - Retrieval fee applies.
- **One Zone-IA:** 
  - Single AZ storage.
  - Cheaper but less resilient.
- **Glacier:** 
  - Archival storage.
  - Retrieval times from minutes to hours.
- **Glacier Deep Archive:** 
  - Lowest-cost archival.
  - Retrieval within 12 hours.
- Reduced Redundancy Storage (Deprecated):
  - Legacy, not recommended. Durability and Availability
- **Durability:** 
  - 99.999999999% (11 9s) across storage classes.
- **Availability:** 
  - **Standard:** 99.99%
  - **Standard-IA:** 99.9%
  - **One Zone-IA:** 99.5% S3 Object Versioning
- Preserves, retrieves, and restores every version of every object.
- Can be enabled or suspended.
- Helps recover from unintended overwrites and deletions. S3 Encryption Options
- **Encryption In-Transit:** 
  - HTTPS/TLS.
- **Encryption At Rest:** 
  - SSE-S3 (AWS-managed keys).
  - SSE-KMS (AWS KMS-managed keys with audit).
  - SSE-C (Customer-provided keys).
  - Client-side encryption. Access Control
- **Bucket Policies:** 
  - JSON-based policies defining access permissions.
  - Applied at bucket level.
- **IAM Policies:** 
  - User/role-based permissions.
- **ACLs (Access Control Lists):** 
  - Legacy, finer-grained control.
- **Block Public Access:** 
  - Central settings to prevent public access.
  - Strongly recommended for securing buckets. S3 Access Points
- Simplified way to manage access for shared datasets.
- Each access point has its own policy.
- Supports VPC restrictions for private access. S3 Storage Lens
- Provides organization-wide visibility into storage usage and activity.
- Helps identify cost-saving opportunities and improve security posture. S3 Event Notifications
- Can trigger actions when objects are created, deleted, etc.
- **Supports:** 
  - SNS
  - SQS
  - Lambda S3 Lifecycle Policies
- Automate object transitions between storage classes.
- Define expiration rules to delete objects automatically. S3 Replication
- **Cross-Region Replication (CRR):** 
  - Automatically replicates objects to a bucket in another Region.
  - Useful for disaster recovery and compliance.
- **Same-Region Replication (SRR):** 
  - Replicates objects within the same Region.
  - Useful for log aggregation and latency reduction.
- Supports replication of new objects and existing objects via batch operations. S3 Transfer Acceleration
- Speeds up uploads and downloads by routing through Amazon CloudFront edge locations.
- Suitable for geographically distributed users. S3 Multipart Upload
- Splits large objects into parts for parallel upload.
- Recommended for objects larger than 100 MB.
- Required for objects over 5 GB. S3 Select
- Retrieve a subset of data from an object using SQL expressions.
- Reduces the amount of data transferred. S3 Object Lock
- Enforces WORM (Write Once Read Many) protection.
- Can set retention periods or legal holds.
- Used for compliance with regulations. S3 Access Analyzer
- Identifies buckets with public or cross-account access.
- Helps remediate unintended access. S3 Inventory
- Provides CSV reports listing objects and their metadata.
- Useful for auditing and compliance. S3 Batch Operations
- Perform actions on millions or billions of objects.
- Supports copying, tagging, ACL updates, and Lambda invocations.

### 🔒 Seguridad y Cifrado / Security

- IAM Policies, Bucket Policies, ACLs.
- Encryption at rest and in transit.
- Block Public Access settings.
- VPC endpoints for private S3 access.
- CloudTrail logs for auditing API calls.

### 💵 Precios y Costos / Pricing

- **Charges based on:** 
  - Storage used (per GB/month).
  - Requests and data retrieval.
  - Data transfer out.
  - Replication costs.
  - Features like S3 Select and Inventory reports.
Integration with AWS Services
- AWS Lambda for event-driven processing.
- CloudFront for content delivery.
- Athena for querying data in S3.
- AWS Glue for ETL workflows.
- Amazon Macie for sensitive data discovery.
- DataSync for large-scale transfers.
- Snowball and Snowmobile for offline migration.

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- S3 is object storage, not block or file.
- Highly durable (11 9s), region-scoped buckets.
- Versioning enables protection against deletes/overwrites.
- Encryption can use SSE-S3, SSE-KMS, SSE-C, or client-side.
- Lifecycle rules automate class transitions and deletions.
- Replication supports CRR and SRR for DR and compliance.
- Block Public Access is critical for securing data.
- Access via IAM, bucket policies, access points, ACLs.
- Transfer Acceleration speeds up global transfers.
- Object Lock enables compliance with WORM requirements.
- Integration with Lambda, SNS, SQS for event notifications.

### 📝 Resumen Rápido / Quick Summary

Amazon S3 is AWS’s highly durable, scalable, secure object storage service, supporting advanced
features like lifecycle management, replication, encryption, event notifications, and integrations
with a wide range of AWS services. It is essential for storing unstructured data in the cloud with
fine-grained access controls and cost-effective storage classes.

## <a id="aws-storage-gateway"></a>🔹 AWS Storage Gateway
*(Página 296 del Handbook)*


### 📌 ¿Qué es? / What It Is

AWS Storage Gateway is a hybrid cloud storage service that connects on-premises environments
to AWS storage infrastructure.
It enables you to seamlessly integrate on-prem applications with cloud storage, supporting
backup, archiving, disaster recovery, and tiered storage use cases.
Gateway Types

### 1. File Gateway (NFS / SMB)

- Provides file-based access to objects in Amazon S3.
- Interfaces with on-prem apps via NFS or SMB.
- Files are stored as objects in S3.
- Frequently accessed data cached locally for low-latency access.
- Supports Amazon S3 Object Lock for WORM (Write Once Read Many) compliance.
- **Use Cases:** 
  - File server replacement
  - Backup storage
  - Data lake ingestion

### 2. Volume Gateway (iSCSI)

- Presents cloud-backed block storage volumes to on-prem servers via iSCSI.
- **Two modes:** 
  - **Stored Volumes:** ▪ Primary data is stored locally. ▪ Asynchronous backups to AWS (EBS Snapshots). ▪ Low-latency access with local storage.
  - **Cached Volumes:** ▪ Primary data stored in AWS. ▪ Frequently accessed data cached locally. ▪ Reduces on-prem storage requirements.
- **Use Cases:** 
  - Local apps with cloud backup
  - Disaster recovery

### 3. Tape Gateway (VTL)

- Presents itself as a virtual tape library (VTL) to backup applications.
- Compatible with most enterprise backup solutions.
- Virtual tapes stored in S3.
- Archived tapes stored in S3 Glacier or S3 Glacier Deep Archive.
- Eliminates need for physical tape infrastructure.
- **Use Cases:** 
  - Backup/archive replacement
  - Long-term compliance storage

### 🚀 Opciones de Despliegue / Deployment Options

- VMware ESXi, Microsoft Hyper-V, or Amazon EC2 (for cloud-based deployment).
- Requires local disk space for cache and upload buffer.
- Connects securely to AWS using HTTPS.
- Managed via AWS Storage Gateway Console or AWS CLI.

### 🔒 Seguridad y Cifrado / Security

- All data transferred is encrypted using TLS.
- Data at rest is encrypted using AWS Key Management Service (KMS).
- Supports IAM policies for access control.
- File Gateway supports Active Directory integration for SMB access control. Monitoring & Management
- **Integrated with:** 
  - Amazon CloudWatch for monitoring.
  - AWS CloudTrail for auditing API calls.
  - AWS Backup for managing backup policies (for Volume and Tape Gateway).
- Storage Gateway software and configuration updates are managed automatically. Storage Integration Gateway Type Access Protocol AWS Backend Storage Caching Use Case File Gateway NFS / SMB Amazon S3 Local disk File share, ingest to S3 Volume Gateway iSCSI EBS Snapshots (Stored/Cached) Local (opt) Block storage with backup Tape Gateway iSCSI (VTL) S3 + Glacier Local disk Virtual tape backup/archive

### 🛡️ Durabilidad y Alta Disponibilidad

- Leverages S3’s 11 nines durability.
- Virtual tapes in Glacier provide long-term, low-cost archival.
- Automatic replication and failover using AWS backend services.

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- File Gateway = Files to S3 (via NFS/SMB), good for S3 integration.
- Volume Gateway = Block storage over iSCSI, good for on-prem block apps with cloud backup.
- Tape Gateway = VTL to S3/Glacier, good for backup/archive use cases.
- Cached Volumes = Store in AWS, cache locally.
- Stored Volumes = Store locally, backup to AWS.
- Often tested in hybrid cloud, DR, and backup scenarios.
- Security = TLS + KMS, and IAM access control.
- AWS Backup can manage Volume and Tape Gateway backups.

### 📝 Resumen Rápido / Quick Summary

AWS Storage Gateway provides three gateway types: File, Volume, and Tape, to bridge on-
premises environments with AWS cloud storage. It supports hybrid storage, backup, and
archival use cases with local caching, encryption, and seamless AWS integration.

---

### 🧭 Navegación
- [⬅️ Volver al Índice Principal del Handbook](README.md)
- [📚 Volver al Repositorio Maestro SAA-C03](../README.md)