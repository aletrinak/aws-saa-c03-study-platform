# ⚡ Arquitecturas Serverless y Cómputo sin Servidor | Serverless
**Handbook AWS Certified Solutions Architect – Associate (SAA-C03)**

> **🎯 Mapeo de Examen:** Dominio 3: High-Performing (24%) & Dominio 4: Cost-Optimized (20%)
> **📄 Páginas en el PDF Original:** 271 a 276 (Total: 6 páginas)

### 📋 Descripción General
Ejecución de código impulsada por eventos sin servidores (AWS Lambda) y ejecución de contenedores sin gestionar nodos subyacentes (AWS Fargate).

### 🗺️ Índice de Servicios en esta Categoría
| Servicio AWS | Página PDF | Acceso Rápido |
| :--- | :---: | :--- |
| **AWS Fargate** | p. 271 | [Ver Ficha Técnica](#aws-fargate) |
| **AWS Lambda** | p. 274 | [Ver Ficha Técnica](#aws-lambda) |

---


## <a id="aws-fargate"></a>🔹 AWS Fargate
*(Página 271 del Handbook)*


### 📌 ¿Qué es? / What It Is

AWS Fargate is a serverless compute engine for containers that lets you run containers without
managing servers or clusters. It works with Amazon ECS and Amazon EKS to provide on-
demand, right-sized compute capacity.

### ⚙️ Características Clave / Key Features

- Serverless compute for containers
- Works with ECS and EKS
- No need to provision or manage EC2 instances
- Per-second billing based on vCPU and memory
- Automatic scaling based on task or pod requirements
- Integrated with AWS IAM, VPC, CloudWatch, and other services

### 🏗️ Cómo Funciona y Arquitectura / How It Works

- Define task definitions in ECS or pod specs in EKS
- Specify CPU and memory requirements per task or pod
- AWS Fargate provisions and manages compute resources
- Supports networking with ENIs in your VPC
- Supports logging with CloudWatch Logs Integration with ECS
- Runs ECS tasks without EC2 instances
- Tasks get ENIs for networking in your VPC
- Supports Application Load Balancer and Network Load Balancer integration
- Uses ECS Service Auto Scaling to scale tasks based on demand
- Supports ECS Capacity Providers for managing mixed EC2 and Fargate workloads Integration with EKS
- Runs Kubernetes pods without managing EC2 nodes
- EKS Fargate profiles specify which pods run on Fargate
- Provides separate ENIs for pod networking in your VPC
- Fully integrated with Kubernetes API for deployment and scaling Task Definitions
- Define container images, CPU, memory, networking mode, and IAM roles
- Fargate supports Linux containers
- Supports secrets and environment variables with AWS Secrets Manager and SSM Parameter Store
- Define logging configuration for CloudWatch Logs Networking
- Uses AWS VPC networking (awsvpc mode)
- Each task or pod gets its own ENI with private IP
- Supports security groups and NACLs
- Enables fine-grained network isolation between tasks or pods

### 🔒 Seguridad y Cifrado / Security

- IAM roles for tasks and pods provide fine-grained permissions
- Encryption of data at rest and in transit
- Supports Secrets Manager and Parameter Store for managing secrets
- VPC integration ensures private networking
- Supports AWS PrivateLink for secure access to AWS services

### 📈 Monitoreo y Auditoría / Monitoring & Logging

- Integrated with Amazon CloudWatch for logs and metrics
- Container-level logs pushed to CloudWatch Logs
- ECS and EKS metrics available in CloudWatch
- Integration with AWS X-Ray for tracing Scaling
- Automatically scales tasks and pods based on demand
- ECS Service Auto Scaling for task-based scaling policies
- EKS Horizontal Pod Autoscaler (HPA) for Kubernetes-based scaling
- Per-task or per-pod resource allocation ensures efficient use of resources

### 💵 Precios y Costos / Pricing

- Pay for vCPU and memory resources requested per second
- Separate pricing for Fargate Spot capacity (discounted for interruption-tolerant workloads)
- Additional charges for data transfer, load balancing, and storage

### 💡 Casos de Uso Típicos / Use Cases

- Microservices architectures
- Batch processing workloads
- Event-driven applications
- Continuous integration and deployment pipelines
- Migrating legacy container workloads to serverless
- Running Kubernetes workloads without managing nodes Benefits
- No server management or provisioning
- Fine-grained billing based on actual resource usage
- Improved security with task/pod-level isolation
- Integration with AWS services for networking, monitoring, and security
- Seamless scaling to meet demand

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Fargate removes need to manage EC2 instances for ECS and EKS
- Supports per-task/pod billing for vCPU and memory
- Uses awsvpc networking mode with dedicated ENIs
- Integrated with IAM roles for fine-grained permissions
- Supports ECS Service Auto Scaling and EKS HPA
- Secrets management via Secrets Manager and Parameter Store
- Best for variable, unpredictable workloads or simplifying operations

### 📝 Resumen Rápido / Quick Summary

AWS Fargate is a serverless compute engine that runs containers without managing servers. It
integrates with ECS and EKS to provide scalable, secure, and cost-efficient container
deployments with per-second billing and deep AWS integration.

## <a id="aws-lambda"></a>🔹 AWS Lambda
*(Página 274 del Handbook)*


### 📌 ¿Qué es? / What It Is

AWS Lambda is a serverless, event-driven compute service that lets you run code without
provisioning or managing servers. It automatically scales and manages compute resources in
response to events and charges only for compute time consumed.

### ⚙️ Características Clave / Key Features

- Serverless compute with no infrastructure to manage
- Runs code in response to events from AWS services or custom apps
- Automatically scales based on the number of events
- Supports multiple languages including Python, Node.js, Java, C#, Go, Ruby, PowerShell
- Pay only for compute time (per millisecond) and number of requests
- Supports up to 15 minutes per invocation Triggers and Event Sources
- Can be triggered by AWS services such as S3, DynamoDB, Kinesis, SNS, SQS, EventBridge
- Supports API Gateway and Application Load Balancer for HTTP(S) endpoints
- Can be invoked directly using AWS SDKs or CLI
- Event source mappings allow Lambda to poll services like SQS and DynamoDB Streams Execution Environment
- Each function runs in its own isolated environment
- Includes specified runtime, memory, temporary storage (/tmp up to 10 GB)
- Supports environment variables for configuration
- Can use Lambda Layers to share code and libraries across functions Concurrency and Scaling
- Scales automatically based on incoming events
- Default concurrency limit per account/region (can request increases)
- Reserved concurrency guarantees a set number of concurrent executions
- Provisioned Concurrency keeps functions pre-initialized to reduce cold starts Function Configuration
- **Memory allocation:** 128 MB to 10,240 MB (10 GB)
- CPU power proportional to memory
- Timeout setting up to 15 minutes
- Permissions managed via AWS IAM roles assigned to the function
Deployment and Versioning
- Supports function versions (immutable snapshots)
- Aliases can point to specific versions for safe deployments
- Supports blue/green deployments using AWS CodeDeploy with traffic shifting
- Code packages can be uploaded as .zip files or via container images (up to 10 GB) Container Image Support
- Build and deploy Lambda functions as container images
- Supports up to 10 GB image size
- Use AWS ECR to store and manage images

### 🔒 Seguridad y Cifrado / Security

- IAM roles define what resources a function can access
- VPC integration allows functions to access resources in a VPC
- AWS KMS for encrypting environment variables
- Supports AWS Secrets Manager and AWS Systems Manager Parameter Store for secure configuration

### 📈 Monitoreo y Auditoría / Monitoring & Logging

- Integrated with Amazon CloudWatch Logs for function logs
- CloudWatch Metrics track invocation count, duration, errors, throttles
- AWS X-Ray provides tracing for performance analysis and debugging
- CloudTrail logs API calls made to Lambda

### 💵 Precios y Costos / Pricing

- Pay per request (first 1 million requests per month are free)
- Pay per compute time in GB-seconds, rounded to nearest millisecond
- Additional charges for Provisioned Concurrency and data transfer

### 💡 Casos de Uso Típicos / Use Cases

- Real-time file processing (e.g., S3 uploads)
- Event-driven data processing (e.g., DynamoDB Streams, Kinesis)
- Serverless APIs using API Gateway + Lambda
- Automation and infrastructure management tasks
- Backend for IoT , mobile, and web applications Integration with AWS Services
- **API Gateway:** Create REST or WebSocket APIs backed by Lambda
- **S3:** Process object events like uploads or deletes
- **DynamoDB Streams:** React to data changes
- **Kinesis:** Real-time stream processing
- **SNS/SQS:** Asynchronous messaging and queue processing
- **EventBridge:** Event routing and orchestration
- **Step Functions:** Orchestrate multiple Lambda functions in workflows

### ⭐ Buenas Prácticas / Best Practices

- Use environment variables for configuration
- Break down monolithic functions into smaller, single-purpose functions
- Use Provisioned Concurrency for latency-sensitive workloads
- Minimize package size for faster cold starts
- Monitor with CloudWatch and set alarms on errors or throttles
- Secure IAM roles with least privilege access
- Use Lambda Layers to share common dependencies

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Lambda is fully managed and serverless with automatic scaling
- Charges are based on request count and execution time
- Supports multiple event sources and triggers
- Can run up to 15 minutes per invocation
- IAM role attached to Lambda defines its permissions
- Integrates with VPCs for private resource access
- Supports container images for deployment
- Use Provisioned Concurrency to avoid cold start latency
- CloudWatch for logs and metrics, X-Ray for tracing
- Works well with API Gateway, S3, DynamoDB, Kinesis, SNS, SQS, EventBridge, Step Functions

### 📝 Resumen Rápido / Quick Summary

AWS Lambda is a serverless compute service that runs code in response to events, scales
automatically, and eliminates the need to manage servers. It integrates with many AWS services,
supports various languages and deployment models, and is priced based on execution time and
requests, making it ideal for building scalable, event-driven applications.

---

### 🧭 Navegación
- [⬅️ Volver al Índice Principal del Handbook](README.md)
- [📚 Volver al Repositorio Maestro SAA-C03](../README.md)