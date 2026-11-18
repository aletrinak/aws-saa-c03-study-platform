# 📦 Contenedores y Orquestación | Containers
**Handbook AWS Certified Solutions Architect – Associate (SAA-C03)**

> **🎯 Mapeo de Examen:** Dominio 2: Resilient (26%) & Dominio 3: High-Performing (24%)
> **📄 Páginas en el PDF Original:** 82 a 94 (Total: 13 páginas)

### 📋 Descripción General
Orquestación de microservicios con Amazon ECS (nativo AWS) y Amazon EKS (Kubernetes gestionado), registro privado ECR y despliegues híbridos/on-premise (Anywhere / Distro).

### 🗺️ Índice de Servicios en esta Categoría
| Servicio AWS | Página PDF | Acceso Rápido |
| :--- | :---: | :--- |
| **Amazon ECS Anywhere** | p. 82 | [Ver Ficha Técnica](#amazon-ecs-anywhere) |
| **Amazon EKS Anywhere** | p. 83 | [Ver Ficha Técnica](#amazon-eks-anywhere) |
| **Amazon EKS Distro** | p. 84 | [Ver Ficha Técnica](#amazon-eks-distro) |
| **Amazon Elastic Container Service(Amazon ECS)** | p. 85 | [Ver Ficha Técnica](#amazon-elastic-container-service-amazon-ecs) |
| **Amazon Elastic Container Registry (Amazon ECR)** | p. 89 | [Ver Ficha Técnica](#amazon-elastic-container-registry-amazon-ecr) |
| **Amazon Elastic Kubernetes Service (Amazon EKS)** | p. 92 | [Ver Ficha Técnica](#amazon-elastic-kubernetes-service-amazon-eks) |

---


## <a id="amazon-ecs-anywhere"></a>🔹 Amazon ECS Anywhere
*(Página 82 del Handbook)*


### 📌 ¿Qué es? / What It Is

Amazon ECS Anywhere allows you to run ECS tasks on your own hardware , whether on-
premises, edge locations, or other environments outside AWS.
It provides a hybrid cloud model while still using the same ECS control plane that runs in AWS.

### ⚙️ Características Clave / Key Features

- Run containers on-premises or in any non-AWS environment
- Uses the same ECS management and APIs
- Ideal for hybrid and edge workloads
- You manage the infrastructure (servers, networking, etc.)
- ECS manages the containers, scheduling, deployment, and monitoring Benefits
- Extends AWS container management to on-prem environments
- Reduces operational complexity with a consistent ECS experience
- Single control plane for managing workloads across AWS and on-prem
- Enables hybrid application architectures

### 💡 Casos de Uso Típicos / Use Cases

- Edge computing (IoT or low-latency workloads)
- Regulated industries where data must remain on-prem
- Gradual cloud migration while keeping control of on-prem workloads

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- ECS Anywhere = Run ECS tasks outside AWS
- Hybrid container orchestration, same ECS control plane
- User manages infrastructure, ECS manages containers

## <a id="amazon-eks-anywhere"></a>🔹 Amazon EKS Anywhere
*(Página 83 del Handbook)*


### 📌 ¿Qué es? / What It Is

Amazon EKS Anywhere allows you to create and operate Kubernetes clusters on your own
infrastructure while still using EKS tooling and APIs.
It extends the EKS experience to on-premises or edge data centres.

### ⚙️ Características Clave / Key Features

- Run Kubernetes clusters locally using EKS tooling
- No dependency on AWS infrastructure
- Supports VMware vSphere and bare metal
- Integrated with EKS console and EKS CLI for management
- Supports GitOps-based workflows for consistent deployments Benefits
- Bring Kubernetes to your data centre
- Maintain operational consistency with EKS in AWS
- Allows hybrid or multi-cloud architectures
- Improves flexibility for regulated or latency-sensitive workloads

### 💡 Casos de Uso Típicos / Use Cases

- Hybrid Kubernetes deployments
- On-prem Kubernetes management with AWS consistency
- Organizations needing local control with AWS EKS tooling

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- EKS Anywhere = Run Kubernetes clusters on-prem using EKS tools
- No need to rely solely on AWS-managed EKS
- Ideal for hybrid and edge Kubernetes environments
Amazon EKS Distro (EKS-D)

### 📌 ¿Qué es? / What It Is

Amazon EKS Distro (EKS-D) is the open-source Kubernetes distribution that powers Amazon
EKS.
It includes the same tested Kubernetes components AWS uses in EKS, available to run anywhere.

### ⚙️ Características Clave / Key Features

- Open-source Kubernetes distribution
- Same versioned, security-hardened components used by EKS
- Run on any infrastructure AWS, on-prem, or other clouds
- AWS-maintained patches for security and stability
- Ensures compatibility with Amazon EKS clusters Benefits
- Enables consistent Kubernetes operations across environments
- Provides transparency and control over Kubernetes upgrades
- Security updates aligned with EKS releases
- Suitable for custom Kubernetes environments needing EKS compatibility

### 💡 Casos de Uso Típicos / Use Cases

- Self-managed Kubernetes clusters with AWS consistency
- Air-gapped or disconnected environments
- Multi-cloud and on-prem Kubernetes setups

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- EKS Distro (EKS-D) = Open-source Kubernetes distribution behind EKS
- Same tested components as AWS-managed EKS
- Helps maintain compatibility, reliability, and security
- Can be run anywhere, not limited to AWS

### 📝 Resumen Rápido / Quick Summary

ECS Anywhere, EKS Anywhere, and EKS Distro (EKS-D) extend AWS container services beyond
the cloud. ECS Anywhere runs ECS tasks on your own hardware, EKS Anywhere brings EKS-
managed Kubernetes to on-prem environments, and EKS Distro offers the same open-source
Kubernetes used by AWS. Together, they enable consistent, secure, and flexible hybrid container
management across on-premises and cloud environments.
Amazon Elastic Container Service (Amazon ECS)

### 📌 ¿Qué es? / What It Is

Amazon ECS is a fully managed container orchestration service that makes it easy to deploy,
manage, and scale containerized applications using Docker. It eliminates the need to install and
operate your own container orchestration software or manage clusters of virtual machines.

### ⚙️ Características Clave / Key Features

- Fully managed and scalable container orchestration
- Supports Docker containers
- Deep integration with AWS services (IAM, CloudWatch, VPC, ALB, Service Discovery)
- Runs on EC2 instances or AWS Fargate for serverless containers
- Supports Windows and Linux workloads
- Integrated service discovery using AWS Cloud Map
- Rolling updates and deployment controls
- Task placement strategies and constraints Launch Types
- EC2 Launch Type
  - Run container workloads on a cluster of EC2 instances you manage
  - Full control over instance types, AMIs, networking
  - Suitable for predictable, steady workloads
- Fargate Launch Type
  - Serverless, no EC2 management
  - Specify CPU and memory at the task level
  - AWS manages provisioning, scaling, patching
  - Ideal for variable or bursty workloads Clusters
- Logical grouping of tasks or services
- Can include EC2 instances with ECS agent installed
- Managed using ECS Console, CLI, or API
- Integrated with AWS CloudFormation for infrastructure as code Tasks and Task Definitions
- Task Definition
  - Blueprint for running containers
  - Specifies Docker images, CPU, memory, networking, IAM roles, environment variables
  - Supports multiple containers (sidecars) in a single task
- Task
  - Instantiation of a Task Definition
  - Runs on an EC2 instance or Fargate Services
- Manage long-running tasks
- Maintain desired count of running tasks
- Supports rolling updates and blue/green deployments (with AWS CodeDeploy)
- Integrated with Elastic Load Balancing for distributing traffic
- Auto-scaling support based on CloudWatch metrics Capacity Providers
- Define how ECS runs tasks across launch types (EC2, Fargate)
- Manage scaling policies and capacity weighting
- Supports EC2 Spot instances for cost optimization Networking
- Integrated with Amazon VPC
- Supports awsvpc networking mode for task-level ENIs
- Security Groups and NACLs for controlling traffic
- Load balancing using ALB, NLB, or CLB Storage
- Supports Amazon EFS integration for persistent, shared storage
- Data volumes defined in task definitions
- Ephemeral storage for scratch space

### 📈 Monitoreo y Auditoría / Monitoring & Logging

- Integrated with Amazon CloudWatch Logs
- Collect and view container logs
- CloudWatch metrics for CPU, memory usage, and custom metrics
- AWS X-Ray integration for tracing

### 🔒 Seguridad y Cifrado / Security

- IAM roles for tasks, services, and cluster management
- Task Role
  - Provides AWS API permissions to the containers in the task
- Task Execution Role
  - Permissions to pull images, write logs, manage secrets
- Supports encryption of sensitive data using AWS Secrets Manager and AWS KMS
- Private Docker registries supported via AWS Secrets Manager Integration with Other AWS Services
- AWS Fargate for serverless container hosting
- Elastic Load Balancing for distributing traffic
- AWS App Mesh for microservices networking
- AWS CloudWatch for logs and metrics
- AWS X-Ray for tracing
- AWS CodePipeline and CodeDeploy for CI/CD
- Amazon ECR for storing Docker images
- AWS Secrets Manager and Parameter Store for managing secrets

### 💵 Precios y Costos / Pricing

- No additional charge for ECS itself
- Pay for underlying compute resources
  - EC2 instances for EC2 Launch Type
  - Fargate task pricing based on vCPU and memory used per second
- Other AWS resources used (e.g., ALB, ECR, CloudWatch) incur standard charges

### 💡 Casos de Uso Típicos / Use Cases

- Microservices applications
- Batch processing workloads
- Hybrid workloads (EC2 and Fargate)
- Migrating existing Docker workloads to AWS
- Event-driven container execution

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- ECS supports EC2 and Fargate launch types
- Task Definition = blueprint; Task = running instance
- Services manage scaling, load balancing, and deployment
- awsvpc networking mode assigns ENI per task for VPC integration
- IAM roles for Task and Task Execution enable secure access to AWS services
- ECS Capacity Providers support EC2 On-Demand, EC2 Spot, and Fargate
- Use Fargate for serverless, no-instance-management deployments
- Supports integration with ALB, EFS, Secrets Manager, CloudWatch, X-Ray

### 📝 Resumen Rápido / Quick Summary

Amazon ECS is AWS’s fully managed container orchestration service supporting Docker
workloads. It offers flexible deployment with EC2 and Fargate launch types, deep AWS
integration for security and monitoring, and tools for scaling and managing container-based
applications in production.

## <a id="amazon-elastic-container-registry-amazon-ecr"></a>🔹 Amazon Elastic Container Registry (Amazon ECR)
*(Página 89 del Handbook)*


### 📌 ¿Qué es? / What It Is

Amazon ECR is a fully managed container image registry that makes it easy to store, manage,
share, and deploy container images and artifacts. It integrates with AWS services like ECS, EKS,
and AWS Lambda, as well as open-source tools.

### ⚙️ Características Clave / Key Features

- Fully managed, highly available registry
- Supports Docker and Open Container Initiative (OCI) images
- Integrated with ECS, EKS, Lambda, CodeBuild, CodeDeploy, CodePipeline
- Push and pull images using standard Docker CLI or AWS CLI
- Supports image scanning for vulnerabilities
- Repository-level permissions with AWS IAM
- Lifecycle policies for automated image cleanup
- Supports replication across regions for DR and latency optimization
- Encryption at rest with AWS KMS and in transit with TLS
- Cross-account access with resource policies Repositories
- Stores container images in private or public repositories
- Private repositories for controlled access
- Public repositories for open sharing without authentication
- Each repository stores multiple image versions identified by tags Authentication
- AWS CLI or SDK for authentication
- IAM policies control user and role access to repositories
- ECR Credential Helper for Docker CLI integration
- Supports temporary credentials via AWS IAM roles Image Management
- Push images to ECR from build systems or local machines
- Pull images to ECS, EKS, Fargate, or other Docker environments
- Supports multi-architecture images
- Image tags for versioning and organizing images
- Immutable tags can be enforced to prevent overwrites
Image Scanning
- Built-in vulnerability scanning using Common Vulnerabilities and Exposures (CVE) database
- Can scan on image push or on-demand
- Provides detailed findings for remediation
- Integrated with AWS Security Hub for consolidated findings Replication
- Supports cross-region replication of images
- Automatic replication to one or more AWS regions
- Simplifies DR, compliance, and global deployment needs
- Managed via repository settings and policies Lifecycle Policies
- Automates cleanup of unused or old images
- Rules based on image count, age, or tags
- Reduces storage costs and clutter Encryption
- Images encrypted at rest using AWS KMS
- Encryption in transit via HTTPS/TLS
- Supports customer-managed KMS keys Logging and Monitoring
- Amazon CloudWatch integration for monitoring actions
- AWS CloudTrail records API calls for auditing
- EventBridge integration for image push notifications Integration with AWS Services
- Amazon ECS and EKS for container orchestration
- AWS Fargate for serverless container deployment
- AWS CodePipeline, CodeBuild, CodeDeploy for CI/CD
- AWS Lambda for container-based functions

### 💵 Precios y Costos / Pricing

- Charged based on data storage (per GB-month)
- Data transfer costs for image pulls outside the region
- Scanning fees per image scan
- Free tier includes 500MB storage per month for private repositories Public Repositories
- Host public container images with no authentication required for pulls
- Ideal for sharing software, tools, or base images publicly
- Integrates with the AWS Container Registry website for browsing

### 💡 Casos de Uso Típicos / Use Cases

- Storing private Docker images for ECS, EKS, Fargate
- Hosting public images for open-source projects
- Integrating secure, managed image storage in CI/CD pipelines
- Enabling multi-region deployments with cross-region replication
- Ensuring security with built-in vulnerability scanning

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Supports both private and public repositories
- IAM policies and resource policies manage access
- Vulnerability scanning can be on-push or on-demand
- Cross-region replication for DR and global distribution
- Integrated with ECS, EKS, Fargate, CodePipeline, Lambda
- Lifecycle policies help automate image cleanup
- Encryption at rest with KMS and in transit with TLS
- Use ECR Credential Helper or AWS CLI for authentication

### 📝 Resumen Rápido / Quick Summary

Amazon ECR is a fully managed, secure, scalable container image registry that integrates with
AWS container services and CI/CD workflows. It simplifies storing, managing, and sharing
container images with built-in security, replication, and automation features for modern
containerized application development.

## <a id="amazon-elastic-kubernetes-service-amazon-eks"></a>🔹 Amazon Elastic Kubernetes Service (Amazon EKS)
*(Página 92 del Handbook)*


### 📌 ¿Qué es? / What It Is

Amazon EKS is a fully managed Kubernetes service that simplifies deploying, managing, and
scaling containerized applications using Kubernetes on AWS. It eliminates the need to install,
operate, and maintain your own Kubernetes control plane.

### ⚙️ Características Clave / Key Features

- Fully managed, highly available Kubernetes control plane
- Runs upstream, open-source Kubernetes for compatibility
- Automatic scaling and patching of control plane
- Integrated with AWS services like IAM, VPC, ALB, CloudWatch, ECR
- Supports EC2 and AWS Fargate as compute options
- Native Kubernetes tools (kubectl, Helm) work seamlessly
- Multi-AZ deployments for high availability Control Plane
- Managed by AWS with automatic scaling and redundancy
- Runs across multiple Availability Zones for high availability
- Managed API server and etcd with automatic patching and backups
- AWS handles upgrades of the Kubernetes control plane Worker Nodes
- EC2 Launch Type
  - Self-managed or managed node groups
  - Control over instance types and AMIs
- AWS Fargate Launch Type
  - Serverless, runs Kubernetes pods without managing EC2 instances
  - Specify CPU and memory at pod level
- Managed Node Groups
  - AWS provisions and manages EC2 nodes
  - Integrated with Auto Scaling Networking
- Uses Amazon VPC for cluster networking
- Supports Kubernetes CNI (Container Network Interface) with VPC-native networking
- Each pod gets its own ENI and private IP
- Security Groups and NACLs for traffic control
- AWS Load Balancer Controller for managing ALB/NLB integration

### 🔒 Seguridad y Cifrado / Security

- IAM integration for Kubernetes RBAC
- IAM Roles for Service Accounts (IRSA) for granular permissions
- Supports Kubernetes RBAC for cluster-level access control
- Encryption at rest using AWS KMS
- Encryption in transit using TLS
- Integration with AWS Secrets Manager and AWS Parameter Store for managing secrets Storage
- Supports Amazon EBS for persistent volumes
- Supports Amazon EFS for shared storage between pods
- Supports FSx for Lustre for high-performance workloads
- Dynamic provisioning of persistent volumes using Kubernetes Storage Classes Logging and Monitoring
- Integrated with Amazon CloudWatch for logs and metrics
- Container Insights for detailed monitoring of cluster resources and applications
- Supports AWS X-Ray for tracing
- Fluent Bit and CloudWatch Logs for log collection Cluster Autoscaler
- Automatically adjusts the number of nodes in your cluster based on pending pods
- Supports scaling EC2 instances in managed node groups Kubernetes Versions
- AWS regularly updates supported Kubernetes versions
- Ability to choose versions for clusters
- Control plane and worker nodes can be upgraded independently Integration with AWS Services
- AWS IAM for authentication and authorization
- AWS ALB/NLB for ingress
- Amazon ECR for container image storage
- AWS App Mesh for service mesh and observability
- AWS Fargate for serverless pods
- AWS CloudFormation and eksctl for infrastructure as code

### 💵 Precios y Costos / Pricing

- Charged per EKS cluster per hour
- Pay for EC2 instances or Fargate pods used as worker nodes
- Standard AWS charges apply for other integrated services (EBS, ALB, CloudWatch)

### 💡 Casos de Uso Típicos / Use Cases

- Deploying and managing microservices applications
- Hybrid workloads with EC2 and Fargate
- Batch processing and ML workflows on Kubernetes
- Migrating existing Kubernetes workloads to AWS
- Building multi-AZ, highly available applications

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- EKS control plane is managed by AWS and runs across multiple AZs
- Supports EC2 and Fargate launch types for worker nodes
- VPC CNI provides pod-level ENIs and IP addresses
- IAM Roles for Service Accounts allow fine-grained permissions for pods
- AWS Load Balancer Controller automates ALB/NLB integration for services
- Supports encryption at rest with KMS and in transit with TLS
- Managed Node Groups simplify worker node lifecycle management
- EFS integration enables persistent, shared storage between pods
- eksctl simplifies cluster provisioning and management
- Best for running standard Kubernetes workloads with AWS integrations

### 📝 Resumen Rápido / Quick Summary

Amazon EKS is a fully managed Kubernetes service providing a production-ready control plane,
integrated AWS security and networking, and support for both EC2 and Fargate worker nodes. It
allows organizations to run standard Kubernetes applications on AWS with high availability,
scalability, and ease of management.

---

### 🧭 Navegación
- [⬅️ Volver al Índice Principal del Handbook](README.md)
- [📚 Volver al Repositorio Maestro SAA-C03](../README.md)