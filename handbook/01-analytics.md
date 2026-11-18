# 📊 Analítica de Datos | Analytics
**Handbook AWS Certified Solutions Architect – Associate (SAA-C03)**

> **🎯 Mapeo de Examen:** Dominio 3: High-Performing (24%) & Dominio 4: Cost-Optimized (20%)
> **📄 Páginas en el PDF Original:** 4 a 38 (Total: 35 páginas)

### 📋 Descripción General
Servicios para ingesta masiva, procesamiento de datos en streaming y batch, consultas interactivas SQL serverless (Athena), data lakes y dashboards de inteligencia de negocios.

### 🗺️ Índice de Servicios en esta Categoría
| Servicio AWS | Página PDF | Acceso Rápido |
| :--- | :---: | :--- |
| **Amazon Athena** | p. 4 | [Ver Ficha Técnica](#amazon-athena) |
| **AWS Data Exchange** | p. 7 | [Ver Ficha Técnica](#aws-data-exchange) |
| **AWS Data Pipeline** | p. 10 | [Ver Ficha Técnica](#aws-data-pipeline) |
| **Amazon EMR** | p. 13 | [Ver Ficha Técnica](#amazon-emr) |
| **AWS Glue** | p. 17 | [Ver Ficha Técnica](#aws-glue) |
| **Amazon Kinesis** | p. 21 | [Ver Ficha Técnica](#amazon-kinesis) |
| **AWS Lake Formation** | p. 25 | [Ver Ficha Técnica](#aws-lake-formation) |
| **Amazon Managed Streaming for Apache Kafka (Amazon MSK)** | p. 27 | [Ver Ficha Técnica](#amazon-managed-streaming-for-apache-kafka-amazon-msk) |
| **Amazon OpenSearch Service** | p. 30 | [Ver Ficha Técnica](#amazon-opensearch-service) |
| **Amazon QuickSight** | p. 33 | [Ver Ficha Técnica](#amazon-quicksight) |
| **Amazon Redshift** | p. 36 | [Ver Ficha Técnica](#amazon-redshift) |

---


## <a id="amazon-athena"></a>🔹 Amazon Athena
*(Página 4 del Handbook)*


### 📌 ¿Qué es? / What It Is

Amazon Athena is an interactive query service that makes it easy to analyse data in Amazon S3
using standard SQL. It is serverless, so there is no infrastructure to manage, and you pay only for
the queries you run.

### ⚙️ Características Clave / Key Features

- Serverless, no need to provision or manage infrastructure
- SQL-based queries using standard ANSI SQL
- Supports querying data in S3 directly
- Pay-per-query pricing model, charged per TB of data scanned
- Integrated with AWS Glue Data Catalog for schema management
- Supports complex joins, window functions, and arrays
- Results can be stored in S3

### 🏗️ Cómo Funciona y Arquitectura / How It Works

- Point Athena at data stored in S3
- Define table schema using Data Catalog or DDL in Athena
- Run SQL queries to analyse data directly in S3
- Query results are saved to S3 in specified location
- Can partition data to improve performance and reduce costs

### 📑 Formatos de Datos Soportados

- CSV, TSV, JSON
- ORC, Parquet, Avro
- Text files with custom delimiters
- Apache Web Logs

### ⚡ Optimización de Rendimiento / Performance

- **Partitioning:** Breaks data into subsets for faster queries
- **Columnar formats:** ORC and Parquet reduce data scanned
- **Compression:** Reduces data transfer and storage costs
- **Bucketing:** Organizes data for efficient joins

### 🔄 Integración con AWS Glue

- Uses AWS Glue Data Catalog to store metadata
- Can crawl S3 data to infer schema automatically
- Shared catalog with Amazon Redshift Spectrum and EMR
- Supports schema versioning

### 🔒 Seguridad y Cifrado / Security

- Encryption at rest using S3 server-side encryption (SSE-S3, SSE-KMS)
- Encryption in transit using HTTPS
- IAM policies to control access to queries and data
- Integration with AWS Lake Formation for fine-grained access control
- Query result encryption in S3 using SSE

### 📈 Monitoreo y Auditoría / Monitoring & Logging

- Integrated with AWS CloudWatch for query metrics
- CloudTrail logs for auditing Athena API calls
- Query history available in the Athena console
- Can monitor failed or long-running queries

### 💡 Casos de Uso Típicos / Use Cases

- Ad hoc querying of log files in S3
- Analysing AWS service logs (CloudTrail, ELB, VPC Flow Logs)
- Data lake analytics without ETL
- Interactive data exploration and reporting
- Integrating with BI tools like Amazon QuickSight
- Cost-effective data warehousing for infrequent queries

### 💵 Precios y Costos / Pricing

- Charged per TB of data scanned
- Compressed, columnar, and partitioned data reduces cost
- No charges for infrastructure provisioning or idle time
- AWS Glue Data Catalog pricing applies separately Integration with Other AWS Services
- **Amazon S3:** Data source and result storage
- **AWS Glue:** Data Catalog for schema management
- **Amazon QuickSight:** For visualization and dashboards
- **AWS Lake Formation:** For data lake governance and security
- AWS CloudTrail and CloudWatch for logging and monitoring

### ⭐ Buenas Prácticas / Best Practices

- Use partitioning to limit data scanned
- Store data in columnar formats (Parquet or ORC)
- Compress data to reduce storage and scan costs
- Manage schemas in AWS Glue Data Catalog
- Secure data using IAM policies and encryption

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Serverless SQL queries on data in S3
- Charged per TB scanned, so optimize with partitions and formats
- Integrated with AWS Glue Data Catalog
- Supports multiple data formats including Parquet and ORC
- Can be used with QuickSight for visualization
- Best for ad hoc queries on large datasets stored in S3
- Use IAM and Lake Formation for access control
- Encrypt data at rest and in transit

### 📝 Resumen Rápido / Quick Summary

Amazon Athena is a serverless query service that analyses S3 data using SQL without
infrastructure management. It is cost-effective, integrates with AWS Glue for schema
management, and supports multiple data formats and security features, making it ideal for ad
hoc analytics and data lake querying.

## <a id="aws-data-exchange"></a>🔹 AWS Data Exchange
*(Página 7 del Handbook)*


### 📌 ¿Qué es? / What It Is

AWS Data Exchange is a fully managed service that makes it easy to find, subscribe to, and use
third-party data in the cloud. It helps organizations securely exchange and consume data sets
published by data providers, such as data from Reuters, Foursquare, and other providers,
without complex licensing and delivery processes.

### ⚙️ Características Clave / Key Features

- Catalog of thousands of third-party data products
- Supports public data products and private (entitlement-based) data sharing
- Automates data subscription, entitlement, and billing workflows
- Direct delivery of data sets to Amazon S3
- Data can be automatically updated as providers publish new revisions
- Supports REST API and AWS CLI for managing subscriptions and data sets
- Event notifications via Amazon EventBridge when new data is published Data Sets and Revisions
- Data providers publish data sets in the AWS Data Exchange catalog
- Each data set contains one or more revisions (versions)
- Revisions can include files in formats like CSV, Parquet, or JSON
- Subscribers access data revisions through entitlement Subscriptions
- Subscribers can browse and subscribe to products in AWS Marketplace
- Subscriptions can be free or paid (with integrated billing)
- Entitlement grants access to the data set revisions
- Automatic export of data revisions to an S3 bucket
- Option to automate workflows on data arrival using EventBridge Data Delivery
- Data sets are delivered directly to subscribers’ S3 buckets
- Supports incremental updates as new revisions are released
- Delivery logs available in CloudTrail and CloudWatch
- Data can be accessed via Athena, EMR, Redshift Spectrum, or other analytics tools Private Data Products
- Enables data providers to share data products privately with specific AWS accounts
- Supports entitlement management for granular access control
- Helps monetize proprietary data while restricting access Integration with Other AWS Services
- **Amazon S3:** storage destination for data sets
- **AWS Glue:** data cataloging and ETL
- **Amazon Athena:** query data directly from S3
- **Amazon Redshift Spectrum:** analyse data without loading into Redshift
- **EventBridge:** trigger workflows when new data arrives
- **AWS CloudTrail:** audit access and API calls

### 🔒 Seguridad y Cifrado / Security

- IAM policies control access to Data Exchange resources
- S3 bucket policies secure delivered data
- CloudTrail logging for governance and compliance
- Encryption at rest using S3 server-side encryption

### 💵 Precios y Costos / Pricing

- Subscribers pay for data products according to provider pricing (subscription fees)
- AWS charges delivery fees based on data volume delivered to S3
- No upfront fees to browse or subscribe to free data sets

### 💡 Casos de Uso Típicos / Use Cases

- Incorporating third-party data (market data, demographic data, geospatial data) into analytics workflows
- Monetizing proprietary data by creating data products for others to subscribe
- Simplifying data licensing, entitlement, and billing
- Automating ingestion and processing of external data sources

### ⭐ Buenas Prácticas / Best Practices

- Use S3 bucket versioning to track data revisions
- Leverage EventBridge to automate processing pipelines when new data arrives
- Apply granular IAM policies to limit access to sensitive data sets
- Review CloudTrail logs for compliance auditing
- Validate data schema and formats upon delivery to avoid downstream issues
- Use AWS Glue Data Catalog for metadata management and discovery

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- AWS Data Exchange simplifies finding, subscribing to, and using third-party data
- Data is delivered directly into your S3 buckets
- Supports automatic updates when providers publish new revisions
- Integrated with EventBridge for event-driven processing
- Subscription entitlements control access to data sets
- Private products allow sharing data with specific AWS accounts
- Use cases include analytics, ML training, and business intelligence with external data

### 📝 Resumen Rápido / Quick Summary

AWS Data Exchange enables secure and automated access to third-party and public data sets
directly in AWS. It handles subscriptions, entitlement management, delivery to S3, and
integrates with AWS analytics and storage services, making it easy to operationalize external
data for analytics and machine learning workloads.

## <a id="aws-data-pipeline"></a>🔹 AWS Data Pipeline
*(Página 10 del Handbook)*


### 📌 ¿Qué es? / What It Is

AWS Data Pipeline is a web service that helps you reliably process and move data between
different AWS compute and storage services, as well as on-premises data sources. It is used
to automate the movement and transformation of data.

### ⚙️ Características Clave / Key Features

- Orchestration service for data workflows
- Supports data movement and transformation across AWS services and on-premises
- Allows scheduling of recurring data processing activities
- Fault-tolerant with retry and failure notification options
- Supports dependencies between tasks for complex workflows
- Provides pre-built templates for common data processing scenarios Components
- **Pipeline:** Defines the overall workflow and schedule
- **Activities:** Units of work like copying data or running EMR jobs
- **Data Nodes:** Define data sources and destinations (e.g., S3, RDS, DynamoDB, on- premises databases)
- **Preconditions:** Optional conditions that must be met before an activity runs
- **Schedules:** Define when and how often pipeline activities run
- **Resources:** Compute resources like EC2 instances or EMR clusters used to execute activities
- **Parameters:** Allow reusing pipeline definitions with different input values

### 💡 Casos de Uso Típicos / Use Cases

- Move data from S3 to Redshift for analytics
- Run periodic ETL jobs on EMR clusters
- Copy data between RDS databases
- Archive data from DynamoDB to S3
- Trigger workflows based on time-based schedules Supported Services
- Amazon S3
- Amazon RDS
- Amazon DynamoDB
- Amazon Redshift
- Amazon EMR
- On-premises data stores via Data Pipeline Task Runner Execution Options
- Managed resources (AWS provisions and manages resources automatically)
- Customer-managed resources (users provide and manage the resources)
- On-premises Task Runner for hybrid data workflows Scheduling
- Cron-like scheduling expressions supported
- Supports hourly, daily, weekly, or custom intervals
- Activities can be chained with dependencies Fault Tolerance and Retries
- Automatic retry on failures
- Configurable retry policies
- Failure notifications via SNS
- Logging to Amazon S3 and CloudWatch Logs

### 🔒 Seguridad y Cifrado / Security

- IAM roles and policies to control access to pipeline resources
- Supports encryption of data in transit and at rest
- CloudTrail integration for auditing API calls
- VPC integration for controlling network access

### 📈 Monitoreo y Auditoría / Monitoring & Logging

- CloudWatch for monitoring pipeline activity and status
- Logs can be stored in S3 or CloudWatch Logs
- SNS notifications for success or failure events
- Detailed activity logs for debugging and auditing

### 💵 Precios y Costos / Pricing

- Free for low-frequency pipelines (one activity per month)
- Charges based on the number of pipeline runs and the frequency of execution
- Costs for resources used (e.g., EC2, EMR) are billed separately

### ⭐ Buenas Prácticas / Best Practices

- Use parameters to make pipelines reusable and configurable
- Design pipelines with clear dependencies and failure handling
- Monitor pipeline execution using CloudWatch metrics and logs
- Use preconditions to ensure data quality before processing
- Secure pipeline roles and resources with IAM policies
- Automate alerts for failures using SNS

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- AWS Data Pipeline is used for orchestrating data movement and transformation workflows
- Supports copying data between AWS services and on-premises sources
- Activities define work, Data Nodes define sources and destinations
- Scheduling supports complex recurring workflows
- Integrates with S3, Redshift, RDS, EMR, DynamoDB, and on-premises systems
- Supports fault tolerance with retries and notifications
- Managed and customer-managed resource options available
- Logs and metrics available in CloudWatch and S3

### 📝 Resumen Rápido / Quick Summary

AWS Data Pipeline enables the reliable movement and transformation of data across AWS and
on-premises systems. It provides scheduling, monitoring, fault tolerance, and
automation for complex ETL workflows, making it easier to manage data pipelines at scale.

## <a id="amazon-emr"></a>🔹 Amazon EMR
*(Página 13 del Handbook)*


### 📌 ¿Qué es? / What It Is

Amazon EMR (Elastic MapReduce) is a fully managed big data platform that simplifies running
large-scale distributed data processing jobs using open-source frameworks like Apache Hadoop,
Spark, Hive, HBase, Presto, and others on AWS. It lets you process vast amounts of data quickly
and cost-effectively.

### ⚙️ Características Clave / Key Features

- Fully managed clusters for Hadoop, Spark, Hive, HBase, Presto, and more
- Quick and easy provisioning of resizable clusters
- Integration with Amazon S3 for data storage
- Decoupled storage and compute using EMRFS
- Cluster scaling with Auto Scaling and manual resizing
- EMR Managed Scaling to automatically adjust resources
- Cost-effective with per-second billing and Spot Instances
- Supports AWS Glue Data Catalog for schema management
- Integration with AWS Lake Formation for data lake permissions
- Integration with AWS Step Functions for orchestration
- Notebook support via EMR Notebooks for interactive analysis Core Components
- **Cluster:** A collection of Amazon EC2 instances running EMR
- **Master Node:** Manages cluster and tracks job progress
- **Core Nodes:** Process data and store intermediate results
- **Task Nodes:** Process data only, no HDFS storage
- **EMRFS:** Connects EMR to S3 for scalable, durable data storage Deployment and Management
- Launch clusters quickly via AWS Management Console, CLI, SDKs, or CloudFormation
- Choose EC2 instance types, purchase options (On-Demand, Spot)
- EMR Managed Scaling automatically adjusts nodes based on workload
- Cluster Auto Termination to save costs
- Bootstrap actions to install software and customize nodes at launch
- Supports multi-master for high availability in Hadoop YARN ResourceManager
Data Storage
- EMRFS for S3 integration with eventual consistency improvements
- HDFS for ephemeral storage on cluster nodes
- Supports AWS Glue Data Catalog for Hive Metastore compatibility
- Lake Formation integration for centralized data access control Processing Frameworks
- Hadoop MapReduce for batch processing
- Apache Spark for fast, in-memory data processing
- Hive for SQL-like queries
- Presto for low-latency SQL queries
- HBase for NoSQL data storage
- Flink for real-time stream processing
- Zeppelin and Jupyter Notebooks for interactive analytics

### 🔒 Seguridad y Cifrado / Security

- IAM roles for fine-grained access control
- AWS Key Management Service (KMS) for encryption at rest
- TLS for encryption in transit
- Kerberos authentication for Hadoop clusters
- Security groups for controlling network access
- Integration with AWS Lake Formation for data permissions
- EC2 key pairs for SSH access to nodes
- AWS CloudTrail for auditing API calls

### 📈 Monitoreo y Auditoría / Monitoring & Logging

- Amazon CloudWatch for metrics and alarms
- CloudWatch Logs for application logs
- EMR console for real-time cluster monitoring
- Ganglia and Spark UI for detailed performance monitoring
- S3 for storing log files Scaling and Flexibility
- Resize clusters manually or with Auto Scaling
- EMR Managed Scaling automatically scales clusters based on workload
- Support for Spot Instances to reduce cost
- Instance Fleets and Instance Groups for flexible provisioning strategies
- Decoupled compute and storage allows processing directly from S3

### 💵 Optimización de Costos

- Per-second billing for EC2 instances
- Support for Spot Instances for significant cost savings
- Cluster Auto Termination to avoid charges for idle clusters
- Use of Reserved Instances for predictable workloads
- EMR pricing based on instance hours plus EC2 costs Integrations
- AWS S3 for data lake storage
- AWS Glue for schema management
- AWS Lake Formation for permissions management
- AWS Step Functions for orchestration
- AWS CloudTrail for auditing
- Amazon RDS and Redshift for data sources and sinks
- Kinesis Data Streams and Firehose for streaming ingestion

### 💡 Casos de Uso Típicos / Use Cases

- Big data processing and ETL workloads
- Data lake analytics with S3
- Machine learning workflows with Spark MLlib
- Log and clickstream analysis
- Real-time stream processing with Flink
- Ad hoc analytics using notebooks
- Batch processing of large datasets

### 💵 Precios y Costos / Pricing

- Charges based on EC2 instance hours used
- Additional EMR charge per instance hour
- Per-second billing for EC2 instances
- Costs for S3 storage and data transfer
- Additional costs for AWS Glue, Lake Formation, and other integrated services

### ⭐ Buenas Prácticas / Best Practices

- Use Spot Instances for core and task nodes to reduce cost
- Enable EMR Managed Scaling to optimize cluster size automatically
- Store data in S3 with EMRFS for separation of compute and storage
- Use AWS Glue Data Catalog for centralized schema management
- Secure clusters with IAM roles, KMS encryption, and Kerberos
- Monitor cluster health and costs with CloudWatch and CloudTrail
- Automate cluster creation and workflows with Step Functions and CloudFormation

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Fully managed big data platform supporting Hadoop, Spark, Hive, Presto, HBase
- EMRFS enables direct read/write to S3
- Managed Scaling automatically resizes cluster based on workload
- Spot Instances reduce cost significantly
- Supports encryption in transit (TLS) and at rest (KMS)
- IAM roles control access to resources
- Glue Data Catalog integration for Hive compatibility
- Decoupled compute and storage architecture
- **Use Case:** Log processing, ETL, machine learning, data lake analytics

### 📝 Resumen Rápido / Quick Summary

Amazon EMR is AWS’s managed big data platform for running open-source frameworks like
Hadoop and Spark on scalable EC2 clusters, tightly integrated with S3 and other AWS services,
with strong security, flexibility, and cost optimization features for processing massive datasets.

## <a id="aws-glue"></a>🔹 AWS Glue
*(Página 17 del Handbook)*


### 📌 ¿Qué es? / What It Is

AWS Glue is a fully managed serverless data integration service that makes it easy to discover,
prepare, move, and integrate data for analytics, machine learning, and application development.
It provides a central platform for data cataloging, ETL (extract, transform, load), and data
integration across various AWS services and data sources.

### ⚙️ Características Clave / Key Features

- Fully managed, serverless architecture
- Automated ETL using Apache Spark
- AWS Glue Data Catalog as a persistent metadata store
- Visual and code-based job authoring
- Crawlers to automatically discover and catalog data
- Support for schema versioning and evolution
- Data preparation with AWS Glue DataBrew
- Integration with AWS Lake Formation for access control
- Job scheduling and orchestration
- Supports Python and Scala for custom ETL scripts
- Built-in transforms and connectors for popular data stores AWS Glue Data Catalog
- Centralized metadata repository
- Stores table definitions, schemas, and job metadata
- Integrated with AWS services like Athena, Redshift Spectrum, EMR, and Lake Formation
- Supports schema versioning and evolution
- Can catalog data in S3, JDBC sources, DynamoDB, and more
- Enables discovery through AWS Glue Crawlers AWS Glue Crawlers
- Automatically scan data sources to infer schema and create catalog tables
- Support multiple data stores (S3, JDBC, DynamoDB)
- Can be scheduled or triggered on demand
- Handle schema changes over time with versioning ETL Jobs
- Serverless ETL using Apache Spark
- Can be created with visual job editor or by writing code in Python/Scala
- Built-in transforms like mapping, filtering, joining, partitioning
- Support for custom transforms and libraries
- Can read from and write to various data sources (S3, RDS, Redshift, DynamoDB, JDBC)
- Job bookmarks to track processed data and avoid reprocessing AWS Glue DataBrew
- Visual data preparation tool
- No-code interface to clean and normalize data
- Over 250 built-in transforms for formatting, deduplication, validation
- Can process data stored in S3, Redshift, Athena, and other sources
- Automates creation of transformation recipes for reuse AWS Glue Studio
- Visual interface for authoring, running, and monitoring ETL jobs
- Drag-and-drop nodes to define ETL flow
- Supports complex transformations without coding
- Allows code editing for advanced use cases
- Integrated monitoring and job runs management Triggers and Workflows
- Schedule jobs or run them on-demand
- Event-driven triggers based on data arrival or other job completion
- Workflows to coordinate multiple ETL jobs and crawlers
- Visual interface to design and monitor workflows Integration with Other AWS Services
- Amazon S3 for storage and data lakes
- Amazon Redshift for data warehousing
- Amazon RDS and Aurora for relational sources
- AWS Lake Formation for data lake permissions
- AWS Athena for querying cataloged data
- Amazon EMR for big data processing
- AWS Step Functions for orchestration of complex workflows
- AWS CloudWatch for monitoring and logging

### 🔒 Seguridad y Cifrado / Security

- IAM roles and policies for fine-grained access control
- Encryption at rest using AWS KMS
- Encryption in transit using SSL/TLS
- Integration with AWS Lake Formation for table-level permissions
- VPC support for private network access
- CloudTrail logging for auditing API calls

### 💵 Precios y Costos / Pricing

- Pay-per-use pricing model
- Charged based on Data Processing Units (DPUs) per job hour
- Separate pricing for crawlers, Data Catalog storage, and DataBrew usage
- No infrastructure to manage or provision

### 💡 Casos de Uso Típicos / Use Cases

- Building and managing data lakes on AWS
- Data discovery and cataloging for analytics
- ETL pipelines for data warehouses like Redshift
- Preparing data for machine learning workflows
- Real-time event-driven ETL triggered by S3 uploads
- Data cleaning and preparation with DataBrew

### ⭐ Buenas Prácticas / Best Practices

- Use Glue Crawlers to keep Data Catalog updated with schema changes
- Take advantage of Job Bookmarks to avoid reprocessing duplicate data
- Use DataBrew for data preparation without coding
- Encrypt data in transit and at rest
- Integrate with AWS Lake Formation for fine-grained data lake security
- Monitor jobs and workflows with CloudWatch
- Optimize Spark jobs by tuning DPUs and partitioning strategies

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Serverless ETL service with Apache Spark under the hood
- AWS Glue Data Catalog is a persistent, central metadata store
- Crawlers automatically discover schema and populate the catalog
- Jobs can be authoring visually (Glue Studio) or with code
- DataBrew is the no-code visual tool for preparing data
- Integration with Lake Formation for security and permissions
- Pay per DPU-hour, no infrastructure management
- Supports job triggers and workflows for orchestration
- Tight integration with AWS analytics and storage services

### 📝 Resumen Rápido / Quick Summary

AWS Glue is AWS’s serverless data integration service providing ETL capabilities, data
cataloging, schema discovery, and data preparation. It enables users to build scalable, cost-
effective data pipelines and manage metadata centrally for a wide range of analytics and
machine learning use cases on AWS.

## <a id="amazon-kinesis"></a>🔹 Amazon Kinesis
*(Página 21 del Handbook)*


### 📌 ¿Qué es? / What It Is

- Fully managed service for real-time processing of streaming data at massive scale.
- Enables you to collect, process, and analyse data streams in near real-time.
- Supports use cases like log analytics, event data processing, IoT telemetry, and video streams. Kinesis Data Streams (KDS)
- Real-time streaming service for continuous capture of gigabytes of data per second.
- Producers send records to the stream.
- Data is stored in shards.
  - **Each shard:** 1 MB/s write, 2 MB/s read.
- Records retained for 24 hours by default, up to 7 days (extended retention).
- **Consumers:** 
  - AWS Lambda for processing.
  - Kinesis Client Library (KCL) applications.
  - Supports enhanced fan-out (dedicated throughput per consumer).
- **Partition Key:** 
  - Determines which shard the data lands in.
- **Encryption:** 
  - Supports server-side encryption with AWS KMS.
- **Use Cases:** 
  - Real-time dashboards
  - Log and event collection
  - Clickstream analysis Kinesis Data Firehose
- Fully managed, no-shards-to-manage service to reliably load streaming data to destinations:
  - S3
  - Redshift
  - Elasticsearch Service (now OpenSearch)
  - Splunk
  - Custom HTTP endpoints
- Supports data transformation using AWS Lambda.
- Automatic scaling.
- Near real-time delivery (typical latency ~60 seconds).
- Built-in compression and encryption.
- No persistent storage of data in Firehose itself.
- **Use Cases:** 
  - Loading logs to S3 for analytics
  - Near-real-time reporting
  - Streaming ETL pipelines Kinesis Data Analytics
- Fully managed service to analyse streaming data using SQL.
- Ingests data from Kinesis Data Streams or Firehose.
- Runs SQL queries continuously against streaming data.
- Supports real-time aggregation, filtering, and anomaly detection.
- **Can output to:** 
  - Kinesis Data Streams
  - Kinesis Data Firehose
  - AWS Lambda
- **Use Cases:** 
  - Real-time metrics and alerts
  - Time-series analytics
  - Continuous data transformation Kinesis Video Streams
- Capture, process, and store video streams for analytics and machine learning.
- Supports live and on-demand video ingestion.
- Automatically encrypts and indexes video data.
- **Integrates with:** 
  - AWS Rekognition Video for analysis
  - Custom ML workflows
- Provides time-indexed video storage in S3.
- **Use Cases:** 
  - Security camera feeds
  - Video-enabled IoT devices
  - Machine learning on video data Data Retention and Replay
- **Kinesis Data Streams:** 
  - Retains data for 24 hours by default, configurable up to 7 days.
  - Allows reprocessing of older data (replay capability).
- **Firehose:** 
  - Does not store data, delivers directly to destinations.

### 🔒 Seguridad y Cifrado / Security

- Supports Server-Side Encryption (SSE) using AWS KMS.
- IAM policies control access to streams, Firehose delivery streams, analytics applications.
- VPC endpoints available for private access. Scaling
- **Kinesis Data Streams:** 
  - Scale by adding/removing shards.
  - Resharding supported (split/merge).
  - On-Demand mode for automatic scaling.
- **Firehose:** 
  - Fully managed, auto-scales.
- **Data Analytics:** 
  - Managed scaling, charges based on processing units (KPU).

### 💵 Precios y Costos / Pricing

- **Based on:** 
  - Number of shards (KDS)
  - PUT payload units
  - Data volume delivered (Firehose)
  - Processing units (Analytics)
  - Video streaming duration and storage
Kinesis Service Comparison
Service Purpose Data Storage Scaling Use Cases
Kinesis
Data
Streams
Real-time data
ingestion and
custom
processing
Stored in shards
(24h–7d
retention)
Manual shard
scaling or On-
Demand
Real-time dashboards,
log collection,
clickstreams
Kinesis
Data
Firehose
Fully managed
delivery to
destinations
No storage
(streams
directly)
Auto-scales Load data to S3,
Redshift, OpenSearch,
near real-time ETL
Kinesis
Data
Analytics
SQL-based
analysis of
streaming data
Processes input
streams (no
long-term
storage)
Managed
scaling via
KPUs
Real-time metrics,
continuous
transformations
Kinesis
Video
Streams
Ingest and store
video for analysis
Stores time-
indexed video in
S3
Managed
ingestion,
built for video
Security camera feeds,
IoT video, ML analysis
Integration
- **Lambda:** Event source for processing.
- **S3:** Destination via Firehose.
- **Redshift:** Direct loading via Firehose.
- **OpenSearch (Elasticsearch):** Index streaming data.
- **AWS Rekognition:** Analyse video streams.

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- **Kinesis Data Streams:** Real-time, ordered, sharded. Best for real-time analytics with custom processing.
- **Firehose:** Simplest way to load data to S3, Redshift, OpenSearch. Fully managed, near real-time.
- **Data Analytics:** Run continuous SQL on streaming data.
- **Video Streams:** Ingest and analyse video feeds.
- Shards determine throughput in KDS.
- Enhanced fan-out provides dedicated throughput per consumer.

### 📝 Resumen Rápido / Quick Summary

Amazon Kinesis is a suite of services for real-time streaming data ingestion, processing, analysis,
and delivery. It includes Kinesis Data Streams (sharded streams), Firehose (managed delivery),
Data Analytics (SQL processing), and Video Streams (video ingestion and analysis), enabling you
to build scalable, real-time data applications.
Amazon LakeFormation

### 📌 ¿Qué es? / What It Is

A fully managed service that simplifies setting up, securing, and managing data lakes. Builds,
catalogs, and secures data in Amazon S3 for analytics and ML. Integrates tightly with AWS
Glue, Athena, Redshift Spectrum, and EMR.

### ⚙️ Características Clave / Key Features

- **Centralized Data Lake Setup:** Registers S3 buckets as data lake locations. Automatically crawls and catalogs data. Grants fine-grained access controls.
- **Data Catalog:** Unified metadata catalog shared with AWS Glue. Defines tables, schemas, and partitions for analytics tools.
- **Access Control:** Fine-grained permissions at table, column, and row level. Permissions managed within Lake Formation, separate from IAM. Integrates with AWS IAM and AWS KMS for security.
- **BluePrints & Workflows:** Pre-built ETL blueprints automate data ingestion (e.g., from RDS or DynamoDB). Workflows orchestrate multiple jobs and data transformations.
- **Data Filtering:** Applies row- and column-level filters without duplicating data.
- **Transaction Support:** Supports ACID transactions for governed tables (insert/update/delete consistency).
- **Storage Optimization:** Uses Amazon S3 as the underlying data store. Manages metadata, versioning, and schema evolution.
- **Integration:** Works with Athena, Redshift Spectrum, QuickSight, Glue, and SageMaker. Supports federated queries from external sources.

### 🏗️ Cómo Funciona y Arquitectura / How It Works

- You register data locations (S3 paths) and define permissions in Lake Formation.
- Data is crawled and cataloged into the Data Catalog (shared with AWS Glue).
- Permissions determine which principals (users, roles) can access what data.
- Authorized analytics services query the data directly from S3 using governed access.

### 💡 Casos de Uso Típicos / Use Cases

- Centralize and govern enterprise data in one place.
- Simplify onboarding of new data sources for analytics.
- Apply fine-grained data access policies for different teams.
- Enable self-service analytics with consistent security controls.
- Manage ACID tables for data warehouses and ML pipelines.

### 💵 Precios y Costos / Pricing

- Pay per transaction (read/write) on governed tables.
- Pay for metadata storage and access requests.
- Underlying S3, Glue, and query service charges still apply.

### 🔒 Seguridad y Cumplimiento / Security & Compliance

- Integrates with IAM, CloudTrail, and KMS for full governance.
- Data access logs through CloudTrail.
- Fine-grained permissions reduce data exposure.
- Regional service , data stays within its AWS region.

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Lake Formation = simplified, secure data lake management on S3.
- Shares catalog with AWS Glue.
- Manages row/column-level permissions centrally.
- Integrates with Athena, Redshift Spectrum, and EMR.
- Governed tables = ACID compliance and transaction support.
- Permissions in Lake Formation are separate from IAM policies.
- Data filtering avoids data duplication.
- Use blueprints for automated ingestion from RDS or DynamoDB.
- CloudTrail logs all data access events for auditing.

### 📝 Resumen Rápido / Quick Summary

AWS Lake Formation helps you quickly build and secure a centralized data lake on S3, with fine-
grained access control, governance, and integrated analytics access, making it easier to manage
large-scale data securely across AWS services.
Amazon MSK

### 📌 ¿Qué es? / What It Is

Amazon Managed Streaming for Apache Kafka (Amazon MSK) is a fully managed service that
makes it easy to build and run applications that use Apache Kafka to process streaming data. It
removes the operational overhead of setting up, scaling, and managing Kafka clusters while
offering high availability, security, and integration with AWS services.

### ⚙️ Características Clave / Key Features

- Fully managed Apache Kafka service
- Supports open-source Kafka APIs
- Automated provisioning, configuration, and maintenance
- Broker patching, monitoring, and failure recovery built in
- High availability with replication across multiple Availability Zones
- Compatible with existing Kafka tools and client libraries
- AWS CLI, SDK, and Console support for management
- Serverless option with MSK Serverless for automatic scaling MSK Cluster Components
- **Brokers:** Kafka server nodes handling ingestion and replication
- **ZooKeeper:** Coordinates brokers and maintains cluster metadata
- **Storage:** Elastic storage options, backed by EBS volumes
- **Networking:** VPC integration, private endpoints, security groups
- **Monitoring:** Integrated with CloudWatch metrics and logging MSK Serverless
- No need to provision or manage brokers
- Automatically scales up and down based on data volume and throughput
- Pay only for data ingested, stored, and throughput used
- Ideal for variable or unpredictable workloads
- Supports same Kafka APIs, clients, and tooling Integration with AWS Services
- AWS Lambda for real-time stream processing
- AWS Glue Schema Registry for enforcing schemas on data streams
- Amazon Kinesis Data Analytics for SQL-based stream processing
- Amazon S3 for storing processed data
- AWS Identity and Access Management (IAM) for managing permissions
- AWS CloudWatch for monitoring and alerting
- AWS Secrets Manager for storing credentials

### 🔒 Seguridad y Cifrado / Security

- Encryption at rest using AWS KMS
- Encryption in transit using TLS between clients and brokers
- IAM integration for authentication and access control
- TLS-based mutual authentication supported
- Private connectivity via AWS VPC
- AWS Secrets Manager integration for managing credentials

### 📈 Monitoreo y Auditoría / Monitoring & Logging

- Amazon CloudWatch metrics for broker performance, storage, throughput
- AWS CloudTrail for auditing API calls
- Kafka broker logs can be streamed to CloudWatch Logs or Amazon S3
- JMX and Node metrics for fine-grained Kafka monitoring
- AWS CloudFormation support for infrastructure as code Performance and Scaling
- Horizontal scaling by adding brokers
- Storage scaling via EBS volume adjustments
- MSK Serverless scales automatically based on demand
- Multi-AZ replication for high availability and durability
- Custom configurations supported via MSK configurations MSK Versions
- Supports multiple versions of open-source Apache Kafka
- Option to choose versions during cluster creation
- AWS manages upgrades and patching

### 💵 Precios y Costos / Pricing

- **MSK Standard clusters:** Charged per broker-hour and storage used
- **MSK Serverless:** Charged per partition-hour , data volume, and throughput
- Data transfer charges may apply for cross-AZ traffic
- No upfront costs or long-term commitments required

### 💡 Casos de Uso Típicos / Use Cases

- Real-time analytics and event processing
- Log aggregation pipelines
- Website activity tracking
- Messaging between microservices
- IoT data ingestion and processing
- Data lake ingestion workflows

### ⭐ Buenas Prácticas / Best Practices

- Use IAM policies for least-privilege access control
- Enable encryption at rest and in transit
- Monitor with CloudWatch and set up alarms
- Plan broker count and storage for expected throughput
- Use MSK Serverless for unpredictable workloads without managing capacity
- Store sensitive configuration details in AWS Secrets Manager
- Design topics and partitions for scalability and consumption patterns

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Fully managed service for Apache Kafka on AWS
- MSK Serverless simplifies scaling and cost management
- Supports encryption at rest (AWS KMS) and in transit (TLS)
- Integrated with VPC for private networking
- Monitoring via CloudWatch, CloudTrail, and Kafka metrics
- IAM and TLS mutual authentication for access control
- Common use cases include real-time analytics, microservice communication, and log ingestion
- Compatible with open-source Kafka tooling and client libraries

### 📝 Resumen Rápido / Quick Summary

Amazon MSK is AWS’s fully managed service for running Apache Kafka without the operational
overhead. It offers secure, highly available, and scalable streaming data processing with
integrations across AWS services, supporting both provisioned clusters and serverless
deployments for flexible, cost-effective streaming workloads.
Amazon OpenSearch

### 📌 ¿Qué es? / What It Is

Amazon OpenSearch Service is a fully managed service that makes it easy to deploy, operate, and
scale OpenSearch and legacy Elasticsearch clusters in the AWS Cloud. It is used for search, log
analytics, and real-time application monitoring.

### ⚙️ Características Clave / Key Features

- Fully managed service for OpenSearch and Elasticsearch
- Supports versions of OpenSearch and legacy Elasticsearch (up to 7.10)
- In-place version upgrades
- Integrated Kibana (Elasticsearch) and OpenSearch Dashboards
- Built-in integrations with AWS services (CloudWatch, Kinesis, S3)
- Provides domain-level security with fine-grained access control
- Supports encryption at rest and node-to-node encryption
- VPC support for secure network access
- Auto-Tune for performance optimization
- Ultrawarm and cold storage for cost-effective storage of infrequently accessed data

### 🧩 Conceptos Centrales / Core Concepts

- **Domain:** An OpenSearch or Elasticsearch cluster in AWS
- **Index:** Collection of documents with similar characteristics
- **Document:** Basic unit of information in JSON format
- **Shard:** Horizontal partition of an index
- **Replica:** Copy of a shard for high availability Deployment and Scaling
- Supports cluster scaling by adjusting instance count and types
- Data nodes, dedicated master nodes, Ultrawarm nodes, cold storage
- Automated snapshots to S3 for backups
- Manual and scheduled snapshots available
- Supports multi-AZ deployments for high availability Ultrawarm and Cold Storage
- **Ultrawarm:** Cost-effective storage tier for read-only, infrequently accessed data
- **Cold Storage:** Even lower-cost storage for long-term retention
- Seamlessly search across hot, Ultrawarm, and cold data tiers

### 🔒 Seguridad y Cifrado / Security

- IAM policies for domain-level access control
- Fine-grained access control using OpenSearch security plugin
- Cognito integration for user authentication to dashboards
- Encryption at rest using AWS KMS
- Node-to-node encryption for secure cluster communication
- HTTPS for data in transit
- VPC support for private network connectivity

### 📈 Monitoreo y Auditoría / Monitoring & Logging

- Integrated with Amazon CloudWatch for metrics and alarms
- Detailed logs to CloudWatch Logs
- Slow logs for indexing and search performance analysis
- Audit logs for security compliance
- AWS CloudTrail for API call logging Data Ingestion
- **Supports ingesting data via:** 
  - Amazon Kinesis Data Firehose
  - Logstash
  - Fluentd
  - Beats
  - Custom ingestion pipelines
- Supports OpenSearch ingest nodes for processing data on ingestion Querying and Analytics
- Powerful full-text search capabilities
- Aggregations for analytics queries
- SQL support for querying data
- Piped Processing Language (PPL) for easier queries
- OpenSearch Dashboards for visualizing data Integrations
- Amazon CloudWatch for monitoring and alerts
- AWS Kinesis Data Firehose for streaming ingestion
- AWS Lambda for serverless ingestion pipelines
- Amazon S3 for snapshot storage and cold storage
- AWS Cognito for dashboard authentication

### 💡 Casos de Uso Típicos / Use Cases

- Application search
- Log and event analytics
- Infrastructure monitoring
- Security information and event management (SIEM)
- Real-time application and system monitoring
- Business and operational dashboards

### 💵 Precios y Costos / Pricing

- Charges based on instance hours, storage, and data transfer
- Ultrawarm and cold storage tiers reduce cost for infrequently accessed data
- Data transfer within the same region is free for ingestion
- Snapshot storage in S3 incurs S3 costs

### ⭐ Buenas Prácticas / Best Practices

- Choose appropriate instance types and storage tiers
- Use Ultrawarm and cold storage for older , less-frequently queried data
- Apply fine-grained access controls and encryption
- Monitor performance using CloudWatch and slow logs
- Scale clusters based on ingestion rates and query workloads

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Fully managed service for OpenSearch and Elasticsearch
- Supports log analytics and real-time search use cases
- Integrates with Kinesis Data Firehose, CloudWatch, and Cognito
- Ultrawarm and cold storage for cost-effective long-term retention
- Security features include encryption at rest, node-to-node encryption, and IAM
- Automated snapshots stored in S3
- VPC support for private network connectivity

### 📝 Resumen Rápido / Quick Summary

Amazon OpenSearch Service is AWS’s fully managed search and analytics
service supporting OpenSearch and legacy Elasticsearch, designed for log analytics, monitoring,
and real-time search, with strong security, scalability, and integration with AWS services.

## <a id="amazon-quicksight"></a>🔹 Amazon QuickSight
*(Página 33 del Handbook)*


### 📌 ¿Qué es? / What It Is

Amazon QuickSight is a fully managed business intelligence (BI) service that enables you to
easily create and publish interactive dashboards, visualizations, and analyses from various data
sources. It is designed to be scalable, serverless, and cost-effective, with pay-per-session pricing
for readers.

### ⚙️ Características Clave / Key Features

- Managed, serverless BI service with no infrastructure to manage
- Interactive dashboards with rich visualizations and drill-downs
- Supports ad hoc analysis and sharing of insights
- Pay-per-session pricing model for readers
- SPICE (Super-fast, Parallel, In-memory Calculation Engine) for fast performance
- Supports scheduled and email reports
- ML Insights for anomaly detection and forecasting
- Integration with AWS data sources and on-premises databases Data Sources
- **AWS services:** S3, Athena, Redshift, RDS, Aurora, EMR, Glue Data Catalog
- On-premises databases via QuickSight data sources
- **Third-party databases:** MySQL, PostgreSQL, SQL Server, Oracle, Teradata
- **Files:** CSV, Excel, JSON
- **SaaS connectors:** Salesforce, ServiceNow, Twitter, and others SPICE Engine
- In-memory storage and calculation engine
- Enables fast, interactive querying even on large datasets
- Automatic scaling to support thousands of users
- Data can be refreshed on schedule or on demand
- Cost-effective compared to direct querying of data sources Dashboard and Visualization
- **Rich set of visual types:** bar, line, pie charts, maps, tables, KPIs
- Supports drill-down and drill-through for exploration
- Parameterized dashboards for customization
- Filters and controls for interactive exploration
- Embedding dashboards into apps and portals
ML Insights
- Built-in machine learning capabilities without needing ML expertise
- Anomaly detection to identify unexpected changes
- Forecasting to predict future trends using ML models
- Narrative Insights to automatically generate textual summaries of data User Management and Access Control
- Supports AWS IAM for authentication and access management
- Role-based access control within QuickSight
- Integration with AWS SSO and Active Directory for enterprise sign-in
- Row-level security to restrict data access within datasets

### 🚀 Opciones de Despliegue / Deployment Options

- QuickSight Standard Edition for individuals and small teams
- QuickSight Enterprise Edition for advanced features, security, and enterprise integrations
- Pay-per-session pricing for readers to reduce costs for infrequent users
- SPICE capacity purchased separately for high-speed querying

### 🔒 Seguridad y Cifrado / Security

- Encryption at rest using AWS KMS
- Encryption in transit using SSL/TLS
- VPC connectivity for secure access to private data sources
- Compliance with AWS security and compliance standards Integration with AWS Services
- Direct integration with AWS data sources like Redshift, Athena, S3, RDS
- AWS Glue Data Catalog for schema and metadata management
- Integration with AWS IoT Analytics and other analytics services
- Ability to embed dashboards into custom applications using AWS SDKs Monitoring and Management
- AWS CloudWatch for usage metrics and alarms
- Usage tracking for pay-per-session billing
- Audit logging via AWS CloudTrail
- Centralized management of users and permissions

### 💵 Precios y Costos / Pricing

- **Author pricing:** fixed monthly fee per author user
- **Reader pricing:** pay-per-session or monthly pricing model
- SPICE storage pricing based on GB stored per month
- No upfront costs or infrastructure to manage

### 💡 Casos de Uso Típicos / Use Cases

- Business intelligence dashboards and reporting
- Operational analytics with near real-time data
- Embedded analytics for SaaS applications
- Executive dashboards and KPI monitoring
- Self-service data exploration for business users

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- QuickSight is AWS’s managed BI service with no servers to manage
- SPICE provides fast, in-memory query performance
- Supports pay-per-session pricing for cost-effective sharing
- Integrates deeply with AWS data sources like Athena, Redshift, and S3
- ML Insights add built-in anomaly detection and forecasting
- Supports embedding dashboards into apps for custom experiences
- Role-based access and row-level security control data access
- Can connect to on-premises and third-party databases via connectors

### 📝 Resumen Rápido / Quick Summary

Amazon QuickSight is a serverless, fully managed BI service that delivers fast, interactive
dashboards and visualizations using the SPICE engine. It integrates with a wide range of AWS
and external data sources, supports pay-per-session pricing, and offers ML-powered insights to
help organizations make data-driven decisions at scale.

## <a id="amazon-redshift"></a>🔹 Amazon Redshift
*(Página 36 del Handbook)*


### 📌 ¿Qué es? / What It Is

Amazon Redshift is a fully managed, petabyte-scale cloud data warehouse service designed for
analysing large datasets using standard SQL and existing Business Intelligence (BI) tools. It
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