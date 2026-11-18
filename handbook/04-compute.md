# 💻 Cómputo en la Nube | Compute
**Handbook AWS Certified Solutions Architect – Associate (SAA-C03)**

> **🎯 Mapeo de Examen:** Dominio 2: Resilient (26%) & Dominio 3: High-Performing (24%)
> **📄 Páginas en el PDF Original:** 63 a 81 (Total: 19 páginas)

### 📋 Descripción General
Servidores virtuales EC2, tipos de instancias, grupos de Auto Scaling elásticos, despliegue PaaS con Elastic Beanstalk y cómputo híbrido/edge (Outposts, Wavelength).

### 🗺️ Índice de Servicios en esta Categoría
| Servicio AWS | Página PDF | Acceso Rápido |
| :--- | :---: | :--- |
| **AWS Batch** | p. 63 | [Ver Ficha Técnica](#aws-batch) |
| **Amazon EC2** | p. 66 | [Ver Ficha Técnica](#amazon-ec2) |
| **Amazon EC2 Auto Scaling** | p. 71 | [Ver Ficha Técnica](#amazon-ec2-auto-scaling) |
| **AWS Elastic Beanstalk** | p. 73 | [Ver Ficha Técnica](#aws-elastic-beanstalk) |
| **AWS Outposts** | p. 76 | [Ver Ficha Técnica](#aws-outposts) |
| **AWS Serverless Application Repository** | p. 78 | [Ver Ficha Técnica](#aws-serverless-application-repository) |
| **AWS Wavelength** | p. 80 | [Ver Ficha Técnica](#aws-wavelength) |

---


## <a id="aws-batch"></a>🔹 AWS Batch
*(Página 63 del Handbook)*


### 📌 ¿Qué es? / What It Is

AWS Batch is a fully managed batch processing service that efficiently runs hundreds to
thousands of batch computing jobs on AWS. It dynamically provisions the optimal compute
resources (e.g., EC2, Spot, Fargate) based on the volume and requirements of your jobs — no
need to manage clusters manually.

### ⚙️ Características Clave / Key Features

- Fully managed batch computing, no cluster setup or job schedulers needed
- Automatically provisions compute resources based on job queue demand
- Supports EC2 and Spot Instances for cost optimization
- Integrates with Amazon ECS for containerized workloads
- Scales up and down automatically depending on queued jobs
- Supports single, array, and multi-node parallel jobs
- Fine-grained job dependencies and priorities
- Integrated with CloudWatch for logging and monitoring
- No additional cost, pay only for compute and storage used Core Components
- Job – A single unit of work submitted to AWS Batch (e.g., a script, container, or command).
- Job Definition – Template specifying job parameters such as Docker image, vCPUs, memory, IAM role, and retry strategy.
- Job Queue – Holds submitted jobs and determines their priority/order of execution.
- Compute Environment – Defines the compute resources (e.g., EC2, Spot, Fargate) where jobs are run. Job Types
- Single Job – Standard one-off task.
- Array Job – Run multiple copies of the same job with different input parameters (up to 10,000).
- Multi-Node Parallel Job – Run tightly coupled, distributed workloads (e.g., MPI, HPC workloads) across multiple EC2 instances. Job States
- SUBMITTED – Job accepted into the queue.
- PENDING – Waiting for resources or dependencies.
- RUNNABLE – Ready to run but waiting for compute capacity.
- STARTING – Container instance being provisioned.
- RUNNING – Job currently executing.
- SUCCEEDED – Job completed successfully.
- FAILED – Job terminated with error. Job Scheduling and Dependencies
- Priority is determined by job queue order and compute environment allocation.
- Supports job dependencies, jobs can start only after other jobs succeed.
- Array jobs and multi-node jobs can be combined for complex workflows.
- Retry strategies and timeout policies handle transient failures gracefully. Compute Environments
- Managed Compute Environment – AWS Batch automatically creates and scales compute resources (EC2 On-Demand or Spot).
- Unmanaged Compute Environment – You manage the compute resources yourself (custom ECS clusters).
- Supports multiple instance types, Spot Fleet, or On-Demand instances.
- **Can specify allocation strategy:** BEST_FIT , BEST_FIT_PROGRESSIVE, or SPOT_CAPACITY_OPTIMIZED. Integration with Other AWS Services
- Amazon ECS – Runs containerized jobs in Batch.
- Amazon ECR – Stores and pulls Docker images.
- Amazon CloudWatch Logs – Collects and monitors job logs.
- Amazon SNS/SQS – Triggers or notifies job completion/failure.
- AWS Lambda / Step Functions – Orchestrates Batch job submissions and workflows.
- AWS Identity and Access Management (IAM) – Controls access and permissions for jobs and resources.
- Amazon S3 – Commonly used for input/output data storage.

### 📈 Monitoreo y Auditoría / Monitoring & Logging

- Integrated with Amazon CloudWatch for metrics and alarms.
- Track job execution history, retries, and failures in the console.
- Custom metrics can monitor job duration, queue depth, and cost.

### 🔒 Seguridad y Cifrado / Security

- IAM Roles control job and service access.
- AWS KMS encrypts sensitive data (e.g., environment variables).
- Supports VPC configuration to run jobs in private subnets.

### 💵 Precios y Costos / Pricing

- No extra charge for AWS Batch itself.
- Pay only for EC2 / Fargate resources and storage used.
- Save costs by using Spot Instances for non-urgent or flexible workloads.

### 💡 Casos de Uso Típicos / Use Cases

- Data processing pipelines and analytics
- Machine learning model training or inference
- Media rendering or transcoding
- Financial risk analysis or report generation
- Nightly ETL jobs or large-scale file processing

### ⭐ Buenas Prácticas / Best Practices

- Use Managed Compute Environments for automatic scaling and optimization.
- Leverage Spot Instances for cost savings — but plan for interruptions.
- Use Array Jobs to parallelize similar workloads.
- Define IAM roles with least-privilege access for each job.
- Set retry strategies and timeout policies to handle transient errors.
- Use CloudWatch for monitoring and job-level metrics.
- Store large datasets in S3 and pass paths as environment variables.
- Combine Step Functions or EventBridge for orchestration and automation.

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- You pay only for the underlying compute and storage used.
- Integrates with ECS to run containerized workloads.
- Supports EC2 On-Demand, Spot, and Fargate compute options.
- Job definitions store container image, vCPU/memory, IAM role, and retry config.
- Managed compute environments are the easiest to use, AWS handles provisioning.
- Array jobs can run thousands of similar jobs concurrently.
- Commonly integrated with Step Functions for orchestration and CloudWatch for logging.
- Ideal for long-running or parallel workloads that don’t require real-time responses.

### 📝 Resumen Rápido / Quick Summary

AWS Batch is a serverless batch computing orchestration service that eliminates the need to
manage clusters or job schedulers. It integrates tightly with ECS, CloudWatch, and
IAM, automatically scales compute resources, supports job dependencies and retries, and is
designed for running large-scale, cost-efficient, containerized workloads in the cloud.

## <a id="amazon-ec2"></a>🔹 Amazon EC2
*(Página 66 del Handbook)*


### 📌 ¿Qué es? / What It Is

Amazon Elastic Compute Cloud (EC2) is a web service that provides resizable compute capacity
in the AWS cloud. It allows you to launch virtual servers on demand, scale them easily, and pay
only for what you use.

### ⚙️ Características Clave / Key Features

- Resizable compute capacity with multiple instance types.
- Supports Linux and Windows operating systems.
- Choice of instance types optimized for compute, memory, storage, or GPU workloads.
- Flexible pricing models.
- Supports auto scaling, load balancing, and high availability architectures.
- Integrated with many AWS services (EBS, S3, IAM, VPC, CloudWatch). EC2 Instance Types
- **General Purpose:** Balanced resources (e.g., t3, m5).
- **Compute Optimized:** High-performance processors (e.g., c5).
- **Memory Optimized:** Large memory needs (e.g., r5, x1).
- **Storage Optimized:** High sequential I/O, local NVMe (e.g., i3).
- **Accelerated Computing:** GPU or FPGA support (e.g., p3, g4). EC2 Pricing Models

### 1. On-Demand Instances

  - Pay by the second (or hour).
  - Flexible, no commitment.
  - Use for short-term, unpredictable workloads.

### 2. Reserved Instances (RI)

  - 1-year or 3-year terms.
  - Significant discounts.
  - Standard and Convertible RIs.
  - Best for steady-state workloads.

### 3. Savings Plans

  - Flexible pricing model with hourly spend commitment.
  - Apply to EC2, Fargate, Lambda.

### 4. Spot Instances

  - Spare capacity at up to 90% discount.
  - Can be terminated by AWS with 2-minute warning.
  - Good for batch processing, stateless workloads.

### 5. Dedicated Hosts

  - Physical servers dedicated to your use.
  - Helps meet compliance and licensing requirements.

### 6. Dedicated Instances

  - Run in VPC on hardware dedicated to you.
  - Not tied to specific physical server.

### 7. Capacity Reservations

  - Reserve capacity in a specific AZ. Storage Options
- EBS (Elastic Block Store)
  - Persistent block storage.
  - **Types:** gp3 (general), io1/io2 (provisioned IOPS), st1/sc1 (HDD).
  - Snapshots stored in S3.
  - Supports encryption with KMS.
- Instance Store
  - Ephemeral, physically attached disks.
  - Data lost when instance stops/terminates.
  - High IOPS.
- EFS (Elastic File System)
  - Network file system for Linux instances.
  - Scales automatically.
- FSx
  - Managed Windows File Server or Lustre. Networking Features
- Launched in VPCs.
- Assign public and private IP addresses.
- **Elastic IP:** Static, routable public IPv4 address.
- **Security Groups:** Virtual firewall for inbound/outbound rules.
- **Network ACLs:** Subnet-level traffic control.
- **ENI (Elastic Network Interface):** Network adapter with private/public IPs.
- **Placement Groups:** 
  - **Cluster:** Low-latency, high throughput.
  - **Spread:** Critical instances across hardware.
  - **Partition:** Large distributed workloads. Launch Options
- Amazon Machine Images (AMIs)
  - Preconfigured templates with OS, software, configuration.
  - AWS, Marketplace, or custom AMIs.
- User Data
  - Scripts that run at launch.
  - Used for bootstrapping.
- Launch Templates
  - Store launch parameters for reuse.
- Launch Configurations
  - Older alternative for Auto Scaling. Auto Scaling
- Automatically adjusts capacity to meet demand.
- **Auto Scaling Groups (ASGs):** 
  - Define min, max, and desired capacity.
  - Scaling policies based on CloudWatch alarms.
  - Health checks and instance replacement. Load Balancing
- Elastic Load Balancing (ELB) supports:
  - **Application Load Balancer (ALB):** Layer 7, path-based routing.
  - **Network Load Balancer (NLB):** Layer 4, ultra-low latency.
  - **Gateway Load Balancer:** Transparent appliances.
  - Classic Load Balancer (legacy). Monitoring and Management
- **CloudWatch:** 
  - Metrics and alarms.
  - Log collection with CloudWatch Agent.
- **AWS Systems Manager (SSM):** 
  - Run Command, Patch Manager.
  - Session Manager for SSH-free access.
- **CloudTrail:** 
  - Records API calls for audit.

### 🔒 Seguridad y Cifrado / Security

- **IAM Roles for EC2:** 
  - Grant temporary credentials to apps.
- **Security Groups:** 
  - Stateful, instance-level firewall.
- **Key Pairs:** 
  - SSH access for Linux, RDP for Windows.
- **Encryption:** 
  - EBS volume encryption using KMS.
  - Encrypted snapshots. Purchasing Options and Cost Savings
- Use Savings Plans for flexibility.
- Purchase Reserved Instances for predictable workloads.
- Use Spot Instances for interruptible workloads at low cost.
- Combine Auto Scaling with Spot and On-Demand using EC2 Fleet or Spot Fleet. Placement Strategies
- **Cluster Placement Group:** 
  - High performance within single AZ.
- **Spread Placement Group:** 
  - Instances spread across distinct hardware.
- **Partition Placement Group:** 
  - Distribute across partitions with isolation. High Availability and Fault Tolerance
- Deploy across multiple AZs.
- Use Auto Scaling Groups with ELB.
- Use Elastic IPs for static addressing.
- Take EBS Snapshots for backups.

### ⭐ Buenas Prácticas / Best Practices

- Use IAM Roles for permissions, not static keys.
- Encrypt EBS volumes.
- Design for stateless workloads where possible.
- Enable CloudWatch monitoring.
- Store logs centrally with CloudWatch Logs.
- Use Auto Scaling for resilience.
- Regularly patch instances with AWS Systems Manager.

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- On-Demand for flexible, unpredictable workloads.
- Reserved Instances/Savings Plans for steady state.
- Spot for batch, fault-tolerant tasks.
- EBS is persistent, Instance Store is ephemeral.
- Security Groups = stateful, NACLs = stateless.
- Use IAM roles instead of hard-coded credentials.
- User Data runs at boot for configuration.
- Placement Groups optimize network layout.
- Auto Scaling works with ELB for high availability.
- Know pricing options and best practices for cost optimization.

### 📝 Resumen Rápido / Quick Summary

Amazon EC2 provides resizable virtual servers in the cloud with flexible instance types, pricing
models, and integrated storage and networking. It supports secure, scalable, and highly available
architectures using Auto Scaling, Load Balancing, and AWS best practices for cloud-native
design.
AWS EC2 Auto Scaling

### 📌 ¿Qué es? / What It Is

AWS Auto Scaling is a fully managed service that automatically adjusts capacity to maintain
performance and minimize costs. It can be used to scale EC2 instances, ECS tasks, DynamoDB
throughput, Aurora Replicas, and Spot Fleets. It supports both vertical and horizontal scaling
strategies.

### ⚙️ Características Clave / Key Features

- Automatically scales resources based on demand
- Helps improve application availability and reduce costs
- Predictive scaling (machine learning-based forecasting) Components of EC2 Auto Scaling

### 1. Launch Template or Launch Configuration

  - Specifies instance type, AMI, key pair, security groups, and other settings
  - Launch Template is recommended over Launch Configuration

### 2. Auto Scaling Group (ASG)

  - A logical group of EC2 instances managed together
  - Defines min, max, and desired capacity
  - Can span multiple Availability Zones within a region

### 3. Scaling Policies

  - **Dynamic Scaling:** Adjusts capacity based on real-time metrics ▪ Target Tracking: Maintain metric (e.g., CPU) at target value ▪ Step Scaling: Increase/decrease capacity in steps based on thresholds ▪ Simple Scaling: Basic rule that adds/removes instances based on CloudWatch alarm
  - **Predictive Scaling:** Uses ML to forecast traffic and scale proactively
  - **Scheduled Scaling:** Scales at specific times based on schedule Health Checks
- Performed via EC2 and optionally ELB
- Unhealthy instances are automatically terminated and replaced Elastic Load Balancer Integration
- ASG automatically registers and deregisters instances with ELB
- Ensures traffic is distributed only to healthy instances
- Supports Classic, Application, and Network Load Balancers
Lifecycle Hooks
- Pause instance launching or terminating processes to run custom scripts
- Use cases include bootstrapping, log collection, or cleanup before termination Monitoring and Alarms
- Uses Amazon CloudWatch for metrics and alarms
- **Key metrics:** CPUUtilization, NetworkIn, NetworkOut, etc.
- Alarms trigger scaling actions based on thresholds Instance Refresh
- Replace instances in ASG with new configuration
- Helps apply updates or patches without downtime Warm Pools
- Pre-initialize EC2 instances and keep them in a stopped state
- Reduces scale-out time by maintaining warm capacity

### 💵 Precios y Costos / Pricing

- No additional cost for using Auto Scaling
- Pay only for the underlying AWS resources (EC2, ELB, etc.)

### 💡 Casos de Uso Típicos / Use Cases

- Handling unpredictable traffic
- Ensuring fault tolerance and high availability
- Reducing operational overhead through automation
- Lowering cost by scaling in when demand is low

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Use Target Tracking Scaling Policy for maintaining consistent performance
- Predictive Scaling is useful for known traffic patterns
- Health checks help maintain application availability
- Use Warm Pools to improve response time for scale-out events
- ASG can span multiple AZs but not across regions
- Use ELB to distribute traffic across Auto Scaling instances
- Instance Refresh is useful for patching or configuration updates

### 📝 Resumen Rápido / Quick Summary

AWS Auto Scaling helps maintain optimal performance and cost efficiency by dynamically
adjusting capacity based on real-time metrics or forecasts. It integrates with EC2, ELB,
CloudWatch, and other AWS services to provide scalable, fault-tolerant.

## <a id="aws-elastic-beanstalk"></a>🔹 AWS Elastic Beanstalk
*(Página 73 del Handbook)*


### 📌 ¿Qué es? / What It Is

AWS Elastic Beanstalk is a fully managed service that makes it easy to deploy, run, and scale web
applications and services developed with Java, .NET , PHP , Node.js, Python, Ruby, Go, and Docker.
It handles the provisioning of infrastructure such as EC2, Auto Scaling, and ELB.

### ⚙️ Características Clave / Key Features

- Simplifies application deployment without worrying about the underlying infrastructure
- Automatically handles capacity provisioning, load balancing, scaling, and health monitoring
- Supports multiple programming languages and platforms
- Integrated with developer tools like Git, Jenkins, and IDEs
- Allows customization of environments using configuration files and extensions
- Provides full control over resources if needed
- Supports rolling deployments, immutable deployments, blue/green deployments

### 🚀 Opciones de Despliegue / Deployment Options

- **All at once:** Deploys to all instances simultaneously
- **Rolling:** Deploys to a batch of instances at a time
- **Rolling with additional batch:** Adds a new batch before terminating the old one
- **Immutable:** Deploys to a new set of instances before switching traffic
- **Blue/Green:** Creates a new environment (green), tests it, and swaps with the old one (blue) Supported Platforms
- Java with Tomcat, .NET on Windows Server with IIS, PHP, Python, Ruby, Go
- Node.js, Docker (single and multi-container) Architecture and Components
- **Application:** Logical collection of components including environments, versions, and configurations
- **Application version:** Specific, deployable version of the application code
- **Environment:** Collection of AWS resources running the application version
- **Environment tier:** Determines if the environment is a web server or worker
- **Configuration template:** Predefined settings for environment creation
- Environment configurations are stored in .ebextensions configuration files Environment Tiers
- **Web Server Tier:** Handles HTTP requests, uses a web server like Apache or Nginx
- **Worker Tier:** Handles background tasks using SQS Customizations and Extensions
- Use .ebextensions YAML config files to customize EC2 instances and install packages
- Add cron jobs, configure logging, change instance types, and more
- Can use AWS CloudFormation templates embedded in extensions

### 📈 Monitoreo y Auditoría / Monitoring & Logging

- Provides real-time metrics and health status of environments
- Integrated with Amazon CloudWatch and Elastic Load Balancing health checks
- Logs available through the Elastic Beanstalk console or stored in S3
- Notifications via Amazon SNS Scaling
- Integrated with Auto Scaling for horizontal scaling
- Allows setting min, max, and desired instance counts
- Load balancing with ELB for high availability

### 🔒 Seguridad y Cifrado / Security

- Supports IAM roles for environment instances
- Integrates with VPC for private networking
- SSL termination via ELB
- Environment variables can be encrypted with KMS Application Lifecycle
- Upload application version
- Deploy to an environment
- Monitor and update as needed
- Terminate environment when no longer needed

### 💵 Precios y Costos / Pricing

- No additional charge for Elastic Beanstalk
- You pay for the underlying resources (EC2, ELB, S3, etc.)

### 💡 Casos de Uso Típicos / Use Cases

- Web application hosting with simplified infrastructure management
- Rapid deployment and iteration of applications
- Scalable and managed environments for microservices
- CI/CD pipelines for DevOps workflows

### ⭐ Buenas Prácticas / Best Practices

- Use immutable or blue/green deployments for safer updates
- Store configuration in version control using .ebextensions
- Monitor environment health and logs regularly
- Use environment cloning for testing changes before production
- Use managed updates to automate minor platform updates

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Elastic Beanstalk automatically provisions and manages the infrastructure
- Supports multiple deployment strategies including rolling and immutable
- Uses EC2, ELB, Auto Scaling, RDS, and other AWS services under the hood
- You still have full access to underlying resources
- Configuration is managed via environment settings and .ebextensions
- Blue/green deployments provide zero-downtime updates

### 📝 Resumen Rápido / Quick Summary

AWS Elastic Beanstalk simplifies application deployment by managing the infrastructure and
platform for you. It supports a variety of programming languages and frameworks, provides
several deployment options, integrates with monitoring and scaling services, and allows deep
customization when needed, all while giving you full control of the underlying AWS resources.

## <a id="aws-outposts"></a>🔹 AWS Outposts
*(Página 76 del Handbook)*


### 📌 ¿Qué es? / What It Is

AWS Outposts is a fully-managed hybrid-cloud service that brings AWS infrastructure, services,
APIs and tools to your on-premises or edge location. It essentially extends an AWS Availability
Zone into your data centre or colocation site.

### ⚙️ Características Clave / Key Features

- Run AWS services locally (EC2, EBS, ECS/EKS, etc) in your premises.
- Managed hardware from AWS (racks/servers/switches) so you don’t handle the low- level stuff.
- Same APIs, tooling, and experience as the cloud region (so your DevOps patterns stay consistent).
- Low latency access and on-premises data processing/residency advantages (for compliance, edge use-cases). Form Factors / Configurations
- Outposts Racks – Full 42U rack installations with compute + storage + network, installed on-site by AWS.
- Outposts Servers – Smaller footprint (1U or 2U servers) for branch locations, retail, edge zones.

### 🏗️ Cómo Funciona y Arquitectura / How It Works

- Your Outpost is “homed” to an AWS Region and Availability Zone; it extends that AZ into your premises.
- Outpost Subnet – You create a subnet in your VPC that’s associated with the Outpost.
- Local Gateway (LGW) – For rack form factor: route tables point to LGW for on-prem network integration (direct routing or CoIP).
- Local Network Interface (LNI) – For server form factor: network interface to your on- prem network.
- Service Link – Encrypted connectivity between Outpost and AWS Region for management/intra-VPC traffic. Supported Services & Capabilities
- **Compute:** EC2, ECS, EKS locally.
- **Storage:** EBS (and in some cases S3/other services depending on generation) locally.
- **Networking/VPC:** VPC extension, route tables, local routing to on-prem, Internet/Direct Connect integration.
- **Data residency, edge computing:** useful when you can’t send data off-site because of regulation or latency constraints.

### 💵 Precios y Costos / Pricing

- **Term-based pricing:** Typically, a 3-year term for Outpost rack capacity.
- **You pay for:** 
  - The Outpost infrastructure (rack or server) term contract. –
  - AWS services running on the Outpost (the compute/storage you consume) and shared resources.
  - Data transfer associated with service link VPN traffic from the AWS Region.
- **Not charged for:** Data transfer from the Outpost to the parent AWS Region (some cases).

### 💡 Casos de Uso Típicos / Use Cases

- Ultra-low latency workloads (on-site manufacturing systems, real-time analytics) where cloud latency isn’t acceptable.
- Data residency / compliance scenarios: you must keep data within a country/region/your own site.
- Edge/branch offices or retail environments where you want cloud consistency but need local compute/storage.

### ⭐ Buenas Prácticas / Best Practices

- Evaluate if you genuinely need on-premises: hybrid comes with cost and complexity.
- Right-size your Outpost capacity (compute, storage) for your workload and growth.
- Ensure your site requirements (power, cooling, network, physical space) are met before ordering.
- **Extend your VPC carefully:** manage routing, subnets, utilization of LGW / LNI properly.
- Use consistent IAM and monitoring patterns as you use in the cloud region so your DevOps tooling remains sane.

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- **Remember:** Outposts = AWS on-premises. It’s not just a “local VM” but AWS infrastructure extended into your site.
- It uses same AWS APIs, tool-chain, and management model — so you treat it like an AZ extension.
- Distinguish between rack vs server form-factors.
- The VPC routing to/from your on-premises network matters: Outpost subnets act like any other AZ subnet, with extended routing to local network.

### 📝 Resumen Rápido / Quick Summary

AWS Outposts brings the AWS cloud hardware, services, and APIs into your own data-centre or
edge site, giving a truly hybrid experience. You get local compute/storage with consistent
tooling, while still accessing cloud region services.

## <a id="aws-serverless-application-repository"></a>🔹 AWS Serverless Application Repository
*(Página 78 del Handbook)*


### 📌 ¿Qué es? / What It Is

AWS Serverless Application Repository (SAR) is a managed repository that enables developers,
teams, and organizations to find, deploy, and share serverless applications. It simplifies the
discovery and reuse of serverless components and entire applications built using AWS services.

### ⚙️ Características Clave / Key Features

- Fully managed repository for serverless apps
- Supports public and private sharing within AWS accounts or organizations
- Applications packaged as AWS SAM templates
- Deploy directly through the AWS Management Console, AWS CLI, AWS SDKs, or AWS SAM CLI
- Supports versioning of applications for tracking changes over time
- Integrated with AWS IAM for permission management Publishing Applications
- Developers can publish serverless applications built using AWS SAM (Serverless Application Model)
- Must include an AWS SAM template defining resources and configurations
- Supports adding metadata such as application name, description, license, and usage instructions
- Can publish public applications available to all AWS customers or restrict sharing to specific accounts/organizations
- Enables versioning for iterative improvements and easy rollback Deploying Applications
- Applications can be deployed directly to your AWS account from the console, CLI, or SAM CLI
- AWS CloudFormation handles provisioning and deployment using the included SAM template
- Supports customization through parameters defined in the template
- Ensures best practices by enforcing proper packaging and permissions Security and Access Control
- Integrated with AWS IAM for fine-grained access control
- Publishers control who can view and deploy applications
- Permissions defined in the SAM template are reviewed during deployment
- AWS performs automated scanning for known security issues in published apps
Integration with AWS Services
- Works with AWS Lambda, API Gateway, DynamoDB, Step Functions, SNS, SQS, and other serverless components
- Deployments use AWS CloudFormation for consistent and repeatable provisioning
- AWS SAM CLI can be used for local testing and publishing to the repository Benefits
- Accelerates development by reusing validated, production-ready serverless apps
- Reduces duplication of effort within organizations
- Simplifies sharing of best practices and vetted solutions
- Improves consistency across teams by standardizing serverless deployments
- Supports continuous integration and deployment workflows

### 💡 Casos de Uso Típicos / Use Cases

- Sharing serverless microservices within a company
- Open-source distribution of serverless solutions
- Centralizing vetted serverless patterns and architectures
- Building internal catalogs of reusable serverless components
- Quickly deploying common integrations and utilities

### 💵 Precios y Costos / Pricing

- No additional charge to use the AWS Serverless Application Repository itself
- Pay for underlying AWS resources provisioned by the application (e.g., Lambda invocations, API Gateway requests, DynamoDB storage)

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- SAR is a managed repository for packaging, sharing, and deploying serverless apps
- Apps are defined using AWS SAM templates
- Supports public sharing and private sharing with accounts or organizations
- Deployments are powered by AWS CloudFormation
- Ideal for promoting reuse and consistency in serverless development across teams and organizations

### 📝 Resumen Rápido / Quick Summary

AWS Serverless Application Repository is a fully managed service for discovering, sharing, and
deploying serverless applications defined with AWS SAM. It helps developers and organizations
reuse proven serverless architectures, accelerates delivery, and promotes best practices in
building serverless solutions on AWS.

## <a id="aws-wavelength"></a>🔹 AWS Wavelength
*(Página 80 del Handbook)*


### 📌 ¿Qué es? / What It Is

AWS Wavelength extends AWS compute and storage services into 5G networks by placing AWS
infrastructure inside telecommunications data centres. This allows developers to run
applications closer to mobile users, achieving ultra-low latency while still using the same AWS
services, APIs, and tools as in a normal AWS Region.

### ⚙️ Características Clave / Key Features

- Run applications within Wavelength Zones (extensions of an AWS Region)
- Ultra-low latency for mobile and edge devices
- Deep integration with 5G networks (Verizon, Vodafone, KDDI, SK Telecom, etc.)
- Use familiar AWS services like EC2, ECS, EKS, VPC, ALB, and CloudWatch
- Consistent AWS APIs, tools, AMIs, and IAM model
- Traffic stays local to 5G network → minimal hops, minimal jitter
- Supports containers, microservices, ML inference, AR/VR, gaming workloads Wavelength Zones
- Specific, carrier-operated data centres that extend an AWS Region
- Appear inside your VPC as isolated subnets
- Connected to the parent Region via high-bandwidth, secure network
- Provide compute (EC2), storage (EBS), networking (VPC), and load balancing
- Used for low-latency applications targeted at mobile users in that geography Supported Services
- Amazon EC2 (certain instance types optimized for edge)
- Amazon EBS for block storage
- Amazon VPC with Wavelength subnets
- Elastic Load Balancing (NLB only)
- Amazon ECS/EKS for container workloads
- Amazon CloudWatch for logs/metrics
- Amazon CloudFormation & CLI for automation Networking
- Create a VPC in the parent Region, then add Wavelength subnets
- Carrier Gateways -Enable traffic between Wavelength instances and 5G mobile users -No direct internet access from Wavelength instances
- **Service traffic usually flows:** Mobile Device → 5G Network → Wavelength Zone
- Use NLB for distributing traffic to Wavelength EC2
- Supports Security Groups, NACLs, VPC routing Storage
- Amazon EBS for persistent block storage
- Root volumes + data volumes supported
- No S3 inside Wavelength Zones (S3 lives in the parent Region)
- Use S3 for logs, backups, or static content (latency will be higher)
Compute
- EC2 instance families vary by carrier/location
- Supports running containers via ECS/EKS
- Ideal for workloads requiring high compute + low latency

### 💡 Casos de Uso Típicos / Use Cases

- Real-time gaming and game streaming
- AR/VR applications
- Autonomous systems & robotics control
- Live video analytics
- ML inference at the edge
- Smart cities & IoT backends
- Telemedicine, remote monitoring
- Connected vehicles (V2X)

### 🔒 Seguridad y Cifrado / Security

- Uses AWS IAM, KMS, SGs, NACLs, same as standard Region
- VPC isolation for Wavelength subnets
- All communication to parent Region secured over AWS backbone
- No internet gateway inside Wavelength, use Carrier Gateway instead

### 💵 Precios y Costos / Pricing

- **Pay for:** 
- EC2 instance usage in Wavelength Zones
- EBS storage attached Data transfer from Wavelength → parent Region
- No extra surcharge for using Wavelength Zones Deployment Flow

### 1. Create VPC in the associated AWS Region


### 2. Add Wavelength Zone subnets


### 3. Deploy EC2 / ECS / EKS workloads into those subnets


### 4. Attach NLB for mobile user traffic


### 5. Route mobile traffic via Carrier Gateway


### 6. Monitor with CloudWatch


### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Wavelength = AWS at the edge of 5G networks
- Wavelength Zones use Carrier Gateways, not Internet Gateways
- **Compute available:** EC2, ECS, EKS

### 📝 Resumen Rápido / Quick Summary

AWS Wavelength extends AWS infrastructure directly into 5G networks, enabling developers to
deploy compute and storage close to mobile users. It provides single-digit millisecond latency,
consistent AWS tooling, and deep VPC integration through Wavelength Zones, perfect for real-
time, mobile-heavy, edge-driven applications like AR/VR, gaming, analytics, and IoT .

---

### 🧭 Navegación
- [⬅️ Volver al Índice Principal del Handbook](README.md)
- [📚 Volver al Repositorio Maestro SAA-C03](../README.md)