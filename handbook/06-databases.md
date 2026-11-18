# 🗄️ Bases de Datos Relacionales, NoSQL y Caching | Databases
**Handbook AWS Certified Solutions Architect – Associate (SAA-C03)**

> **🎯 Mapeo de Examen:** Dominio 3: High-Performing (24%), Dominio 2: Resilient (26%) & Dominio 4: Cost-Optimized (20%)
> **📄 Páginas en el PDF Original:** 95 a 122 (Total: 28 páginas)

### 📋 Descripción General
Motores relacionales gestionados (RDS, Aurora), bases de datos NoSQL de clave-valor ultrarrápidas (DynamoDB), grafos (Neptune), documentos (DocumentDB), ledger criptográfico (QLDB) y caché en memoria (ElastiCache).

### 🗺️ Índice de Servicios en esta Categoría
| Servicio AWS | Página PDF | Acceso Rápido |
| :--- | :---: | :--- |
| **Amazon Aurora** | p. 95 | [Ver Ficha Técnica](#amazon-aurora) |
| **Amazon DocumentDB (with MongoDB compatibility)** | p. 99 | [Ver Ficha Técnica](#amazon-documentdb-with-mongodb-compatibility) |
| **Amazon DynamoDB** | p. 102 | [Ver Ficha Técnica](#amazon-dynamodb) |
| **Amazon ElastiCache** | p. 105 | [Ver Ficha Técnica](#amazon-elasticache) |
| **Amazon Keyspaces (for Apache Cassandra)** | p. 108 | [Ver Ficha Técnica](#amazon-keyspaces-for-apache-cassandra) |
| **Amazon Neptune** | p. 111 | [Ver Ficha Técnica](#amazon-neptune) |
| **Amazon Quantum Ledger Database (Amazon QLDB)** | p. 114 | [Ver Ficha Técnica](#amazon-quantum-ledger-database-amazon-qldb) |
| **Amazon RDS** | p. 117 | [Ver Ficha Técnica](#amazon-rds) |
| **Amazon Redshift** | p. 120 | [Ver Ficha Técnica](#amazon-redshift) |

---


## <a id="amazon-aurora"></a>🔹 Amazon Aurora
*(Página 95 del Handbook)*


### 📌 ¿Qué es? / What It Is

Amazon Aurora is a fully managed, MySQL- and PostgreSQL-compatible relational database
engine built for the cloud. It delivers the performance and availability of high-end commercial
databases at a lower cost, while being fully integrated with AWS services.

### ⚙️ Características Clave / Key Features

- MySQL- and PostgreSQL-compatible
- Up to 5x faster than standard MySQL and 3x faster than standard PostgreSQL
- Storage automatically scales in 10GB increments up to 128TB
- Fault-tolerant and self-healing storage system with six-way replication across three Availability Zones
- Continuous backups to Amazon S3
- Automatic, incremental backups with point-in-time recovery
- Database cloning for fast, cost-effective copies
- Supports Global Databases for low-latency global reads and disaster recovery
- Integrated with AWS monitoring and security services Aurora Cluster Architecture
- Consists of a cluster volume that spans multiple AZs
- One primary instance for read/write operations
- Up to 15 Aurora Replicas for read scaling with low replication lag
- Reader endpoint automatically load-balances read traffic
- Failover to a replica typically takes less than 30 seconds Aurora Storage
- Distributed, fault-tolerant, self-healing storage
- Automatically replicated six ways across three AZs
- Continuous backup to Amazon S3 without affecting performance
- Supports storage auto-scaling up to 128TB Aurora Replicas
- Provide read scalability
- Up to 15 Aurora Replicas per cluster
- Replication lag typically under 100 milliseconds
- Supports cross-Region replication with Global Databases
- Failover targets for high availability
Backups and Snapshots
- Automated backups with configurable retention (up to 35 days)
- Point-in-time recovery to any second during retention period
- Manual snapshots retained until deleted
- Snapshots can be shared with other AWS accounts or copied across regions Global Databases
- Designed for globally distributed applications
- Single primary Region with read-only secondary Regions
- Cross-region replication with typical lag under 1 second
- Supports fast recovery in case of regional outages
- Enables low-latency global reads Aurora Serverless v1
- On-demand, auto-scaling configuration
- Automatically starts, stops, and scales based on workload
- Ideal for variable or unpredictable workloads
- Charges based on actual usage (Aurora Capacity Units)
- Supports MySQL-compatible edition Aurora Serverless v2
- Fine-grained, instant scaling with minimal latency
- Supports even higher workloads and connections
- Works with both MySQL- and PostgreSQL-compatible editions
- More production-ready and scalable than v1 Performance and Scaling
- Up to 64 vCPUs and hundreds of GBs of RAM per instance
- Storage and compute scale independently
- Supports read scaling with Aurora Replicas
- Write scaling can be improved with partitioning at the application layer
- Integrated with Amazon RDS Proxy for connection pooling

### 🔒 Seguridad y Cifrado / Security

- Encryption at rest using AWS KMS
- Encryption in transit using SSL/TLS
- VPC isolation and subnet-level security
- IAM integration for management
- Database authentication with IAM for MySQL and PostgreSQL
- Audit logging for tracking database activity
- Integration with AWS Secrets Manager for managing credentials Monitoring and Management
- Amazon CloudWatch for metrics and alarms
- Enhanced Monitoring for OS-level metrics
- Performance Insights for analysing query performance
- Automated backups, patching, and maintenance
- Database cloning for rapid creation of test and development environments Integration with Other AWS Services
- AWS Lambda for triggers and integrations
- AWS DMS for migrations to Aurora
- AWS Secrets Manager for credential management
- AWS Backup for centralized backup management
- RDS Proxy for improving application scalability and resiliency

### 💵 Precios y Costos / Pricing

- Charged per instance hour based on instance type
- Aurora Serverless charged based on Aurora Capacity Units (ACUs)
- Storage billed per GB per month
- I/O requests billed per million requests
- Backup storage beyond the allocated database size incurs additional charges
- Cross-region replication charges for Global Databases

### 💡 Casos de Uso Típicos / Use Cases

- Enterprise-grade applications requiring high availability and durability
- SaaS applications needing high performance at scale
- Global applications with low-latency read requirements
- Variable workloads with unpredictable usage patterns (Aurora Serverless)
- Online transaction processing (OLTP) systems

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Aurora is MySQL- and PostgreSQL-compatible but AWS-built for cloud performance
- Supports automatic storage scaling up to 128TB
- Six-way replication across three AZs ensures durability
- Multi-AZ by design with fast failover
- Aurora Replicas provide read scalability with minimal lag
- Global Databases enable low-latency global reads and DR
- Aurora Serverless is ideal for infrequent, unpredictable workloads
- Supports encryption at rest (KMS) and in transit (SSL/TLS)
- Point-in-time recovery and continuous backups to S3
- Database cloning for development and testing without affecting production workloads

### 📝 Resumen Rápido / Quick Summary

Amazon Aurora is AWS’s high-performance, highly available relational database engine
compatible with MySQL and PostgreSQL. It offers advanced features like storage auto-scaling,
fault-tolerant replication, read replicas, global databases, and serverless deployments, making it
an ideal choice for modern, cloud-native applications requiring scalability, durability, and high
availability.
Amazon DocumentDB

### 📌 ¿Qué es? / What It Is

Amazon DocumentDB (with MongoDB compatibility) is a fully managed document database
service designed to store, query, and index JSON-like documents. It is optimized for scalability,
availability, and performance, and is used for semi-structured data applications that require
flexible schemas, such as content management systems, catalogs, and user profiles.

### ⚙️ Características Clave / Key Features

- Fully managed document database service
- Compatible with MongoDB APIs (version 3.6, 4.0, 5.0)
- Designed for high performance, scalability, and availability
- Stores semi-structured JSON-like documents
- Automatically scales storage up to 64 TB
- Built-in security, backup, and monitoring features
- Offers automatic failover, backups, and patching
- Integrates with AWS services like CloudWatch, IAM, and Secrets Manager Architecture and Performance
- Separates compute and storage layers
- Each cluster has one primary instance (read/write) and up to 15 replicas (read-only)
- Six copies of data replicated across three Availability Zones
- Compute instances are based on Amazon EC2
- Automatically scales storage in 10 GB increments as needed
- Supports millions of reads per second with low latency
- Uses a purpose-built storage engine optimized for document workloads Data Model
- Uses a flexible, schema-less JSON-like format
- Collections contain documents, similar to tables in a relational database
- Supports embedded documents and arrays for nested data
- Ideal for applications with changing or dynamic data structures MongoDB Compatibility
- Supports MongoDB drivers and tools
- Compatible with popular MongoDB APIs, including find, insert, update, and delete
- Some features such as capped collections and change streams may not be fully supported
- Use AWS DMS to migrate data from existing MongoDB databases Scaling and Availability
- Horizontal read scaling with up to 15 read replicas
- Automatic failover to replicas during primary failure
- Storage auto-scales without downtime
- Multi-AZ deployments ensure high availability
- Supports replica lag monitoring and alerts Backups and Restore
- Continuous backups to Amazon S3
- Point-in-time recovery (PITR) up to 35 days
- Manual snapshots can be taken and retained as needed
- Snapshots can be shared across AWS accounts or copied to other regions

### 🔒 Seguridad y Cifrado / Security

- Encryption at rest using AWS KMS
- Encryption in transit using TLS
- VPC deployment for network-level isolation
- IAM integration for resource-level access control
- AWS Secrets Manager integration for secure credentials management
- Audit logging supported using CloudWatch Logs Monitoring and Management
- Amazon CloudWatch for performance metrics and alarms
- Enhanced Monitoring for detailed OS-level metrics
- Event notifications via Amazon SNS
- Amazon CloudTrail integration for API activity tracking
- Fully managed backups, patching, and failover by AWS Integration with AWS Services
- AWS DMS for data migration
- CloudWatch for monitoring and logging
- Secrets Manager for managing database credentials
- IAM for access control
- VPC for secure networking
- AWS Glue for data transformation and analytics

### 💡 Casos de Uso Típicos / Use Cases

- Content management systems
- Product catalogs and inventory
- User profiles and personalization
- Mobile and web applications with flexible schemas
- Semi-structured data ingestion and processing

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Amazon DocumentDB is MongoDB-compatible but not a native MongoDB engine
- Ideal for applications needing flexible, schema-less document storage
- Not a drop-in replacement for every MongoDB feature
- Multi-AZ support with six-way data replication provides high availability
- Automatically scales storage without downtime
- Supports up to 15 read replicas for horizontal scaling
- Fully managed by AWS including patching, backups, and failover
- Use IAM and VPC for security and access control
- Encryption at rest and in transit is enabled by default
- Integration with CloudWatch and CloudTrail for monitoring and auditing

### 📝 Resumen Rápido / Quick Summary

Amazon DocumentDB is a scalable, fully managed document database service designed for
modern applications that need flexible data models. With MongoDB compatibility, high
availability, automated scaling, and integrated AWS security and monitoring, it is ideal for
content-rich, semi-structured workloads that require low-latency and resilience.

## <a id="amazon-dynamodb"></a>🔹 Amazon DynamoDB
*(Página 102 del Handbook)*

What Is It
- Fully managed, serverless NoSQL database (key-value and document model)
- Single-digit millisecond latency at any scale
- Designed for high availability, durability, and scalability
- Automatically replicates data across multiple AZs
- Integrated with other AWS services (Lambda, AppSync, Glue, etc.)

### 🧩 Conceptos Centrales / Core Concepts

- **Table:** Collection of items (like a relational DB table)
- **Item:** Individual record (like a row)
- **Attribute:** Field within an item (like a column)
- **Primary Key:** 
  - **Partition Key:** Determines data partition
  - **Partition + Sort Key:** Enables sorting and querying within the partition Indexes
- **Global Secondary Index (GSI):** 
  - Query on different attributes
  - Supports different partition/sort keys
- **Local Secondary Index (LSI):** 
  - Same partition key, different sort key
  - Must be defined at table creation Capacity Modes
- **On-Demand:** 
  - No capacity planning
  - Scales automatically based on traffic
- **Provisioned:** 
  - Manually define RCUs/WCUs
  - Can enable Auto Scaling

### ⚡ Optimización de Rendimiento / Performance

- **DynamoDB Accelerator (DAX):** 
  - In-memory cache
  - Reduces read latency to microseconds
- **Adaptive Capacity:** 
  - Automatically adjusts throughput for imbalanced workloads Data Consistency
- Eventually Consistent Reads (default, more scalable)
- Strongly Consistent Reads (read after write consistency)
- **Transactions:** 
  - ACID-compliant operations across multiple items/tables Streams
- Capture item-level changes (insert, update, delete)
- Can trigger AWS Lambda for real-time processing
- Provides exactly-once event delivery Backup and Restore
- **On-Demand Backup:** Full backups, manual
- **Point-in-Time Recovery (PITR):** 
  - Continuous backup up to 35 days
  - Restore to any second within the window

### 🔒 Seguridad y Cifrado / Security

- **Encryption at Rest:** AWS KMS integration
- **IAM Policies:** Fine-grained access control
- **VPC Endpoints:** Private connectivity without Internet exposure Global Tables
- Multi-Region, multi-active replication
- Low-latency global access
- Automatic conflict resolution
- Supports disaster recovery across regions Integration
- **Lambda:** Trigger from Streams
- **AppSync:** GraphQL API layer for DynamoDB
- **Glue/Data Pipeline:** ETL and data movement
- **CloudWatch:** Monitoring and alerting
- **Backup:** Centralized backup through AWS Backup
- **Kinesis Firehose:** Data streaming to analytics tools

### 💵 Precios y Costos / Pricing

- **Charges based on:** 
  - Read/Write capacity (or On-Demand usage)
  - Storage (per GB/month)
  - Streams, backups, PITR, DAX, Global Tables billed separately

### 💡 Casos de Uso Típicos / Use Cases

- Real-time bidding platforms
- Gaming leaderboards
- Shopping carts
- IoT telemetry data
- Mobile app backends
- User preference/profile storage

### ⭐ Buenas Prácticas / Best Practices

- Use On-Demand mode for unpredictable traffic
- Partition keys should distribute traffic evenly
- Enable Auto Scaling for provisioned workloads
- Use DAX for frequently accessed read-heavy data
- Secure with IAM, KMS, and VPC Endpoints
- Use Streams + Lambda for event-driven architecture

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Choose On-Demand to avoid provisioning headaches
- LSI = must be defined at creation, GSI = can be added anytime
- Streams trigger Lambda, great for real-time applications
- Global Tables enable low-latency writes and reads across regions
- Transactions enable coordinated writes with ACID compliance
- PITR enables second-level restore up to 35 days
- Know difference between Eventually and Strongly Consistent Reads

### 📝 Resumen Rápido / Quick Summary

Amazon DynamoDB is a fully managed, serverless NoSQL database delivering high performance,
scalability, and resilience. It offers on-demand and provisioned capacity, automatic multi-AZ
replication, DAX for caching, PITR for recovery, and global tables for low-latency, multi-region
access. Ideal for real-time, serverless, and globally distributed applications.

## <a id="amazon-elasticache"></a>🔹 Amazon ElastiCache
*(Página 105 del Handbook)*

Overview
- Fully managed in-memory data store and cache service
- Supports Redis and Memcached engines
- Provides microsecond latency for real-time applications
- Scales horizontally and vertically
- Used for caching, session storage, real-time analytics Key Benefits
- Reduces load on databases by caching frequent queries
- Lowers latency and improves application performance
- **Fully managed:** patching, setup, failure recovery handled by AWS
- Supports multi-AZ with automatic failover (Redis) Engines
- Redis
  - In-memory key-value store supporting data structures
  - Supports persistence (RDB and AOF)
  - Supports replication and automatic failover
  - Pub/Sub messaging capability
  - Advanced features like backups, cluster mode, multi-AZ
- Memcached
  - Simple, in-memory key-value store
  - No persistence or replication
  - Supports sharding for horizontal scaling
  - Ideal for straightforward caching use cases Architecture and Deployment
- Deployed into Amazon VPC
- Nodes hosted on EC2 instances managed by AWS
- Redis supports single-node, replica sets, and cluster mode
- Multi-AZ deployments for high availability (Redis only)
- Automatic backups (Redis)
- Enhanced Monitoring and CloudWatch metrics
High Availability
- **Redis:** Supports replication groups with primary and replica nodes
- Automatic failover to replica in case of primary node failure
- Multi-AZ failover with minimal downtime
- Backup and restore support for disaster recovery Scaling
- Vertical scaling by changing node types
- Horizontal scaling via sharding (Redis cluster mode, Memcached)
- Add or remove nodes to meet demand
- Supports online resharding in Redis cluster mode Data Security
- Encryption in-transit using TLS
- Encryption at-rest with AWS KMS (Redis)
- IAM policies to control API access
- Redis AUTH for password protection
- VPC for network isolation and security groups for access control Performance Features
- Microsecond latency reads and writes
- Supports large datasets due to memory optimization
- Connection multiplexing to reduce client connections
- Optimized for high-throughput workloads Backup and Restore (Redis Only)
- Supports automatic daily snapshots
- Manual backups to Amazon S3
- Restore clusters from snapshots
- Useful for disaster recovery and migration Monitoring and Management
- Amazon CloudWatch integration for metrics
- Enhanced Monitoring for detailed metrics
- AWS CLI, SDKs, Console for management
- Events for operational changes and alerts
Integration with AWS Services
- Works with EC2, Lambda, RDS, DynamoDB, and more
- Used to cache database query results
- Can serve as a session store for stateless applications
- Integrates with AWS CloudFormation for IaC

### 💡 Casos de Uso Típicos / Use Cases

- Database query caching
- Real-time analytics and leaderboards
- Message brokering (Pub/Sub with Redis)
- Caching API responses

### 💵 Precios y Costos / Pricing

- Pay for node hours based on instance type
- Backup storage billed separately (Redis)
- Data transfer within VPC free
- Additional cost for multi-AZ, cluster mode

### ⭐ Buenas Prácticas / Best Practices

- Choose Redis for advanced features and persistence
- Use Memcached for simple, ephemeral caching
- Enable multi-AZ for production workloads needing HA
- Monitor usage with CloudWatch and scale nodes appropriately
- Secure access with VPC, IAM, and Redis AUTH

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Redis supports replication, backups, multi-AZ, cluster mode
- Memcached is simpler, no replication or persistence
- Multi-AZ is Redis-only with automatic failover
- Encryption options available for Redis
- Use ElastiCache to reduce database load and improve latency

### 📝 Resumen Rápido / Quick Summary

Amazon ElastiCache is a fully managed, in-memory caching service that supports Redis and
Memcached to deliver microsecond latency and high throughput for real-time applications. It
provides automatic scaling, multi-AZ failover (Redis), encryption, and monitoring, making it
ideal for caching, session management, real-time analytics, and reducing database load in
scalable cloud architectures.

## <a id="amazon-keyspaces-for-apache-cassandra"></a>🔹 Amazon Keyspaces (for Apache Cassandra)
*(Página 108 del Handbook)*


### 📌 ¿Qué es? / What It Is

- Fully managed, serverless, and scalable Apache Cassandra–compatible database service
- Designed for high availability, durability, and low-latency performance
- Serverless, automatically scales up/down based on traffic
- No need to provision, patch, or manage Cassandra clusters
- Compatible with Cassandra Query Language (CQL) and drivers Key Benefits
- Eliminates operational overhead of managing Cassandra clusters
- Serverless scaling, pay only for what you use
- Automatic replication across multiple AZs for fault tolerance
- Fully managed backup, patching, and maintenance
- Strong consistency and flexible read/write options
- Seamless integration with AWS ecosystem Architecture and Deployment
- Fully managed, no EC2 or cluster provisioning needed
- Data automatically replicated across 3 Availability Zones
- Supports single-region deployments with multi-AZ redundancy
- CQL-compatible endpoint, no driver code changes required
- Integrates with AWS Identity and Access Management (IAM)
- **Serverless:** scales partitions and throughput automatically High Availability and Durability
- Multi-AZ replication for fault tolerance
- Durable writes, all data written to 3 replicas across AZs
- No downtime during scaling or patching
- Highly available reads and writes even during node failures
- Point-in-time recovery (PITR) up to 35 days Performance and Scaling
- **On-demand capacity mode:** scales automatically with workload
- **Provisioned capacity mode:** manually define read/write throughput
- Latency in single-digit milliseconds
- Automatic load balancing and partition management
- No manual resharding required like traditional Cassandra Data Security
- Encryption at rest with AWS KMS
- Encryption in transit using TLS
- IAM for fine-grained access control
- VPC endpoints via AWS PrivateLink for private connectivity
- Audit logging using AWS CloudTrail
- No direct SSH or node-level access Backup and Restore
- Continuous backups with Point-in-Time Recovery (PITR)
- Manual on-demand backups available
- Data stored redundantly across AZs
- Backups can be restored to new tables
- No impact on performance during backup operations Monitoring and Management
- Integrated with Amazon CloudWatch for metrics
- AWS CloudTrail for auditing API activity
- No need to monitor nodes or repair clusters
- Manage via AWS Console, CLI, or SDKs
- CQL-compatible tools like cqlsh can connect
Integration with AWS Services
- Integrates with Lambda, Kinesis, Glue, Data Pipeline, and S3
- Use with Amazon MSK for streaming writes
- Connect via Amazon VPC endpoints
- Integrates with AWS CloudFormation, Terraform, and CDK for IaC
- Ideal for hybrid or multi-region architectures with data replication

### 💡 Casos de Uso Típicos / Use Cases

- IOT data ingestion and time-series data
- Session and user profile storage
- High-velocity log data and clickstreams
- Real-time recommendation systems
- Catalog and product metadata storage
- Event tracking and telemetry systems

### 💵 Precios y Costos / Pricing

- Pay per request for reads/writes (on-demand mode)
- **Provisioned mode:** pay for configured capacity
- PITR storage billed separately
- Data transfer within the same AWS Region is free
- Costs for backup storage and restores apply

### ⭐ Buenas Prácticas / Best Practices

- Use on-demand mode for unpredictable workloads
- Use provisioned mode for steady traffic to control costs
- Design tables with a well-planned partition key for even load distribution
- Enable PITR for production data protection
- Restrict access via IAM and VPC PrivateLink
- Monitor performance with CloudWatch metrics (throttling, latency)
- Avoid wide partitions distribute writes evenly

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Serverless Cassandra service, no cluster management required
- Supports CQL and Cassandra drivers
- Automatically replicates data across 3 AZs
- Encryption at-rest and in-transit supported by default
- **Two capacity modes:** On-Demand & Provisioned
- PITR available for up to 35 days
- No VPC deployment access via PrivateLink if needed
- Great for scalable, low-latency, NoSQL workloads

### 📝 Resumen Rápido / Quick Summary

Amazon Keyspaces is a fully managed, serverless, and highly available Cassandra-compatible
database designed for massive scalability, low-latency workloads, and seamless AWS
integration, ideal for use cases like IoT , session management, and real-time analytics without the
hassle of cluster administration.

## <a id="amazon-neptune"></a>🔹 Amazon Neptune
*(Página 111 del Handbook)*


### 📌 ¿Qué es? / What It Is

Amazon Neptune is a fully managed graph database service designed for applications that need
to work with complex, interconnected datasets. It supports graph models like Property Graph
(TinkerPop Gremlin) and RDF (SPARQL), making it ideal for use cases like social networks,
recommendation engines, fraud detection, and knowledge graphs.

### ⚙️ Características Clave / Key Features

- Purpose-built for graph applications
- **Supports two major graph models:** Property Graph and RDF
- **Uses open query languages:** Gremlin for Property Graph and SPARQL for RDF
- Optimized for high performance and low-latency graph queries
- Fully managed with built-in backup, patching, and maintenance
- ACID-compliant transactions for data integrity
- Supports encryption at rest and in transit
- High availability with multi-AZ deployments
- Integrated with AWS Identity and Access Management (IAM)
- Built-in integration with CloudWatch, VPC, and other AWS services Graph Models Supported
- Property Graph
  - **Query language:** Apache TinkerPop Gremlin
  - **Use case:** Social networks, fraud detection, real-time recommendations
- RDF (Resource Description Framework)
  - **Query language:** SPARQL
  - **Use case:** Knowledge graphs, linked data applications, semantic search

### 🏛️ Arquitectura y Componentes / Architecture

- Deployed within a VPC for network isolation
- High availability with up to 15 read replicas
- Writer and reader endpoints for separating workloads
- Replicates six copies of data across three Availability Zones
- Automated failover to replicas during node failures
- Backups stored in Amazon S3 with point-in-time recovery Performance and Scaling
- Designed for high-throughput, low-latency graph queries
- Supports up to 15 read replicas for read scaling
- Automatically detects and recovers from database failures
- Storage scales automatically in 10 GB increments
- Supports IOPS-optimized storage for consistent performance

### 🔒 Seguridad y Cifrado / Security

- Encryption at rest using AWS KMS
- Encryption in transit using SSL/TLS
- VPC isolation with subnet-level control
- IAM policies for fine-grained access control
- Database authentication using IAM
- Integration with AWS Secrets Manager for managing credentials Monitoring and Management
- Integrated with Amazon CloudWatch for monitoring metrics and logs
- Event notifications through Amazon SNS
- Amazon CloudTrail integration for auditing and compliance
- Supports Enhanced Monitoring for resource-level insights
- Maintenance and patching handled by AWS Data Loading and Migration
- Supports bulk data loading via Amazon S3 using Neptune Bulk Loader
- Supports CSV , RDF, and JSON data formats for import
- AWS DMS can migrate relational data into Neptune
- Compatible with open-source graph tools and libraries Integration with AWS Services
- Amazon S3 for backup and bulk data loading
- IAM for authentication and authorization
- CloudWatch for monitoring and alerting
- Secrets Manager for secure credential storage
- AWS Glue and DMS for ETL and migration
- VPC for network-level security and access control

### 💡 Casos de Uso Típicos / Use Cases

- Social networking applications
- Recommendation engines
- Fraud detection systems
- Knowledge graphs and semantic search
- Identity and access management systems
- Network and IT operations graphs

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Neptune is optimized for graph workloads, not relational or key-value data
- Supports Gremlin and SPARQL query languages for different graph models
- Replication across three AZs with 6 copies of data ensures durability
- Up to 15 read replicas for horizontal scaling of read workloads
- Encryption at rest and in transit is enabled by default
- IAM is used for access control and authentication
- Neptune is not used for OLTP or OLAP workloads
- Use Neptune when relationships between data elements are first-class citizens
- Bulk loading supported through Amazon S3 with the Neptune Loader
- Multi-AZ deployment provides automatic failover and high availability

### 📝 Resumen Rápido / Quick Summary

Amazon Neptune is a purpose-built, fully managed graph database service ideal for applications
that require navigating and analysing complex relationships. It supports both Property Graph
(Gremlin) and RDF (SPARQL) models, offers high availability, durability, and seamless AWS
integration, making it a strong choice for graph-based use cases like social networks, fraud
detection, and knowledge graphs.
Amazon Quantum Ledger Database (QLDB)

### 📌 ¿Qué es? / What It Is

Amazon QLDB is a fully managed ledger database designed to provide a transparent, immutable,
and cryptographically verifiable transaction log. It tracks all changes to application data over
time, making it ideal for use cases requiring auditability and data integrity without the overhead
of managing a blockchain network.

### ⚙️ Características Clave / Key Features

- Fully managed ledger database service
- Immutable transaction log that maintains a complete and verifiable history of changes
- Cryptographic verification with SHA-256 hashes to prove data integrity
- Transparent and append-only journal—no records can be deleted or modified
- Serverless with on-demand pricing and auto scaling
- Supports PartiQL for querying data with familiar SQL-like syntax
- High availability with replication across multiple Availability Zones
- No need to build or manage complex blockchain networks or consensus mechanisms Ledger Structure
- **Ledger:** Primary container for all data and history
- **Journal:** Immutable transaction log that records every change in order
- **Tables:** Store current state of data with flexible document model (similar to JSON)
- **Document revisions:** Every change creates a new immutable revision
- **Digest:** Cryptographic summary of journal for integrity verification Immutability and Verification
- Append-only journal guarantees that records cannot be altered or deleted
- Cryptographic hash chaining of entries provides proof that data has not been tampered with
- Periodic digest generation enables audit and verification
- Clients can compare digests to detect unauthorized changes PartiQL Query Language
- SQL-compatible query language for querying data in tables
- Supports SELECT , INSERT , UPDATE, and DELETE operations
- Allows querying historical revisions using system-generated metadata
- Enables time-travel queries to see the state of a table at any point in time
Performance and Scalability
- Serverless design with no provisioning required
- Auto-scales to support variable workloads
- Supports high availability by replicating data across multiple AZs
- ACID transactions ensure consistency and reliability Integration with AWS Services
- AWS Identity and Access Management (IAM) for user and permission management
- AWS Key Management Service (KMS) for encryption at rest
- Amazon CloudWatch for monitoring metrics and setting alarms
- AWS CloudTrail for logging API calls and tracking changes
- AWS Lambda for serverless triggers and event processing

### 🔒 Seguridad y Cifrado / Security

- Encryption at rest using AWS KMS-managed keys
- Encryption in transit using TLS
- Fine-grained access control using IAM policies
- Data is replicated for durability and availability across multiple AZs
- Audit logging and API monitoring with CloudTrail Backups and Availability
- Automatic replication across Availability Zones for high availability
- Journal data is always durable and cannot be deleted
- Snapshots can be exported to Amazon S3 for backup or analysis

### 💡 Casos de Uso Típicos / Use Cases

- Financial transactions and audit trails
- Supply chain management and tracking
- Insurance claim processing with full history
- Registries of assets such as vehicle or property ownership
- Systems of record requiring immutability and traceability without decentralization Advantages over Blockchain
- Centralized ledger with no need for consensus algorithms or peer nodes
- No complex network or distributed governance required
- Same cryptographic integrity guarantees as blockchain
- Easier to manage and operate for single-party or regulated environments

### 💵 Precios y Costos / Pricing

- Pay only for journal storage, indexed storage, read and write I/O requests
- No upfront costs or server provisioning
- Costs scale with usage

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- QLDB is not a blockchain, it is a centralized ledger database with blockchain-like immutability
- Journal is append-only and cryptographically verifiable
- Ideal for applications needing an authoritative system of record with full auditability
- Supports PartiQL for querying both current and historical data
- ACID transactions ensure data consistency
- Serverless design with automatic scaling and high availability
- Encryption at rest with KMS and in transit with TLS
- Integrates with CloudWatch, IAM, and CloudTrail for monitoring and security

### 📝 Resumen Rápido / Quick Summary

Amazon QLDB is a fully managed ledger database that delivers an immutable, transparent, and
cryptographically verifiable transaction log. It simplifies building audit-ready systems by
providing a central, trusted ledger with high availability, flexible querying, and strong security,
making it ideal for financial systems, supply chains, and regulatory compliance use cases.

## <a id="amazon-rds"></a>🔹 Amazon RDS
*(Página 117 del Handbook)*


### 📌 ¿Qué es? / What It Is

Amazon RDS is a managed relational database service that makes it easier to set up, operate,
and scale databases in the cloud. It automates tasks such as provisioning, patching, backup,
recovery, and scaling.
Supported Database Engines
- Amazon Aurora (MySQL and PostgreSQL compatible)
- PostgreSQL
- MySQL
- MariaDB
- Oracle
- Microsoft SQL Server

### ⚙️ Características Clave / Key Features

- Managed database service that handles maintenance tasks
- Automated backups with point-in-time recovery
- Automated software patching
- Automatic failure detection and recovery
- Multi-AZ deployments for high availability
- Read replicas for scaling read traffic
- Encryption at rest using AWS KMS
- Encryption in transit using SSL/TLS
- Easy scaling of compute and storage

### 🚀 Opciones de Despliegue / Deployment Options

- **Single-AZ:** Single database instance in one Availability Zone
- **Multi-AZ:** Synchronous standby replica in another AZ for high availability
  - Automated failover to standby on failure
- **Read Replicas:** Asynchronous replication for read-heavy workloads
  - Supports up to 5 read replicas for MySQL, MariaDB, PostgreSQL
  - Aurora supports up to 15 read replicas with low-latency replication Storage Options
- General Purpose (SSD)
  - Cost-effective, balanced performance
  - Suitable for most workloads
- Provisioned IOPS (SSD)
  - High-performance storage for critical workloads
  - Consistent low latency and high throughput
- Magnetic (legacy)
  - Previous-generation storage, limited use cases Backups and Snapshots
- Automated Backups
  - Enabled by default
  - Retention period configurable from 0 to 35 days
  - Supports point-in-time recovery
- Manual Snapshots
  - User-initiated
  - Retained until explicitly deleted
  - Can be shared with other AWS accounts or copied to other regions Maintenance and Patching
- AWS manages patching of the database engine
- Can specify maintenance window
- Minor version upgrades can be applied automatically or manually Monitoring and Metrics
- Amazon CloudWatch metrics for CPU, memory, storage, IOPS, connections
- Enhanced Monitoring for OS-level metrics
- Performance Insights for query performance analysis and optimization

### 🔒 Seguridad y Cifrado / Security

- Encryption at rest using AWS KMS
- Encryption in transit using SSL/TLS
- IAM integration for management access
- VPC support for network isolation
- Security groups to control inbound/outbound traffic
- Supports AWS Secrets Manager for credential management
- Option to enforce IAM Database Authentication (MySQL and PostgreSQL)

### 💵 Precios y Costos / Pricing

- Pay for instance hours (on-demand or reserved instances)
- Storage and I/O requests billed separately
- Backups stored in S3 are free up to the allocated storage size
- Data transfer costs may apply Aurora Highlights
- AWS-built, MySQL and PostgreSQL-compatible engine
- Up to 5x faster than standard MySQL, 3x faster than PostgreSQL
- Storage automatically grows up to 128 TB
- Six-way replication across three AZs
- Automated failover , continuous backups to S3
- **Aurora Serverless:** Auto-scales capacity based on load
- Global Databases for low-latency global reads and disaster recovery

### 💡 Casos de Uso Típicos / Use Cases

- Web and mobile applications
- Enterprise applications
- E-commerce platforms
- Business analytics
- SaaS applications requiring relational data storage

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Use multi-AZ for high availability and automatic failover
- Read Replicas are for scaling reads and disaster recovery
- Aurora offers better performance and high availability with low replication lag
- IAM Database Authentication adds IAM-based access control
- Backups support point-in-time recovery
- Encryption at rest uses KMS, in transit uses SSL/TLS
- Performance Insights helps identify slow queries
- Storage Auto Scaling automatically increases storage as needed
- Aurora Global Databases support globally distributed applications
- AWS handles maintenance tasks such as backups and patching

### 📝 Resumen Rápido / Quick Summary

Amazon RDS is a managed service that simplifies deploying, operating, and scaling relational
databases in AWS. It supports multiple database engines, offers automated backups, multi-AZ
deployments for high availability, read replicas for scaling, and encryption for data security.
Aurora, AWS’s proprietary database engine, offers additional performance and scaling benefits.

## <a id="amazon-redshift"></a>🔹 Amazon Redshift
*(Página 120 del Handbook)*


### 📌 ¿Qué es? / What It Is

Amazon Redshift is a fully managed, petabyte-scale cloud data warehouse service designed for
analyzing large datasets using standard SQL and existing Business Intelligence (BI) tools. It
offers high performance, scalability, and cost-effectiveness for data analytics workloads.

### ⚙️ Características Clave / Key Features

- Columnar storage format optimized for analytics
- Massively Parallel Processing (MPP) architecture for performance
- Supports standard SQL and integrates with common BI tools
- Automated backups and snapshots
- Redshift Spectrum enables querying data in S3 without loading it into Redshift
- AQUA (Advanced Query Accelerator) improves query performance using hardware acceleration
- Built-in security features including encryption, VPC, IAM, and logging
- Compatible with PostgreSQL drivers and clients Data Warehouse Architecture
- Redshift cluster consists of a leader node and one or more compute nodes
- Leader node receives queries and distributes them to compute nodes
- Compute nodes process the queries in parallel and return results to the leader node
- Supports provisioned and serverless deployment modes Redshift Serverless
- Allows running analytics without managing infrastructure
- Automatically provisions and scales compute capacity
- Charges based on Redshift Processing Units (RPUs) used
- Suitable for variable or unpredictable workloads
- Easy to set up, integrates with data in Redshift-managed storage and S3 Data Loading
- Load data using COPY command from S3, DynamoDB, EMR, or other sources
- Supports parallel loading for high performance
- Can use AWS Glue Data Catalog for schema discovery
- Supports SQL-based INSERT statements for small-scale operations Redshift Spectrum
- Query data in S3 directly using Redshift SQL
- Supports open data formats like CSV, Parquet, ORC, JSON, and Avro
- Integrates with AWS Glue Data Catalog for schema definitions
- Ideal for extending queries beyond data stored in Redshift clusters

### ⚡ Optimización de Rendimiento / Performance

- Use of distribution styles (KEY, EVEN, ALL) to manage data distribution across nodes
- Sort keys optimize query performance on large tables
- Compression (encoding) reduces storage usage and speeds up processing
- Materialized views store precomputed query results for faster performance
- Workload management (WLM) to prioritize and allocate query resources Scalability and Elasticity
- Elastic resize for quick cluster scaling
- Concurrency scaling to handle spikes in query load
- RA3 instances with managed storage to scale compute and storage independently
- Cross-region data sharing supported using datashares

### 🔒 Seguridad y Cifrado / Security

- Data encryption at rest using AWS KMS or hardware security modules (HSM)
- SSL encryption for data in transit
- VPC support for network isolation
- IAM for access control and resource policies
- Audit logging with integration to Amazon CloudWatch and AWS CloudTrail Monitoring and Management
- Performance Insights for query analysis and tuning
- CloudWatch integration for metrics, logs, and alarms
- Automatic backup to S3 with user-defined retention
- Snapshot-based restore options including cross-region snapshots
- Maintenance windows for patching and upgrades

### 💵 Precios y Costos / Pricing

- Based on instance type and node count for provisioned clusters
- Redshift Serverless pricing based on RPU-seconds used
- Separate charges for backup storage, concurrency scaling, and data transfer
- No cost for querying S3 data via Redshift Spectrum (only standard S3 and query charges apply)

### 💡 Casos de Uso Típicos / Use Cases

- Enterprise data warehousing and analytics
- Centralized data platform for BI reporting
- Large-scale log analytics and operational dashboards
- Predictive analytics and machine learning data prep
- Federated queries across data lakes and warehouses

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Redshift uses columnar storage and MPP for performance
- COPY command is used to bulk-load data from S3
- Spectrum allows querying S3 data directly using Redshift
- RA3 nodes separate compute from storage for flexibility
- Concurrency scaling adds transient clusters for high query loads
- Redshift Serverless offers hands-free provisioning and scaling
- Use sort and distribution keys to optimize query performance
- Supports VPC, encryption, IAM, and logging for security compliance

### 📝 Resumen Rápido / Quick Summary

Amazon Redshift is AWS’s fully managed data warehouse that supports petabyte-scale analytics
workloads using standard SQL. With features like columnar storage, MPP architecture, Redshift
Spectrum, serverless deployment, and deep AWS integration, it enables fast, scalable, and cost-
effective data analysis for modern business needs.

---

### 🧭 Navegación
- [⬅️ Volver al Índice Principal del Handbook](README.md)
- [📚 Volver al Repositorio Maestro SAA-C03](../README.md)