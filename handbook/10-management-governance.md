# ⚙️ Gestión, Monitoreo y Gobernanza Multi-Cuenta | Management & Governance
**Handbook AWS Certified Solutions Architect – Associate (SAA-C03)**

> **🎯 Mapeo de Examen:** Dominio 1: Secure (30%), Dominio 2: Resilient (26%) & Dominio 4: Cost-Optimized (20%)
> **📄 Páginas en el PDF Original:** 138 a 179 (Total: 42 páginas)

### 📋 Descripción General
Infraestructura como código (CloudFormation), auditoría de llamadas API (CloudTrail), métricas y logs (CloudWatch), cumplimiento continuo (AWS Config), control multi-cuenta (Control Tower, AWS Organizations) y automatización operativa (Systems Manager).

### 🗺️ Índice de Servicios en esta Categoría
| Servicio AWS | Página PDF | Acceso Rápido |
| :--- | :---: | :--- |
| **AWS CloudFormation** | p. 138 | [Ver Ficha Técnica](#aws-cloudformation) |
| **AWS CloudTrail** | p. 140 | [Ver Ficha Técnica](#aws-cloudtrail) |
| **Amazon CloudWatch** | p. 143 | [Ver Ficha Técnica](#amazon-cloudwatch) |
| **AWS Command Line Interface (AWS CLI)** | p. 146 | [Ver Ficha Técnica](#aws-command-line-interface-aws-cli) |
| **AWS Config** | p. 148 | [Ver Ficha Técnica](#aws-config) |
| **AWS Control Tower** | p. 151 | [Ver Ficha Técnica](#aws-control-tower) |
| **AWS Management Console** | p. 154 | [Ver Ficha Técnica](#aws-management-console) |
| **AWS Health Dashboard** | p. 155 | [Ver Ficha Técnica](#aws-health-dashboard) |
| **Amazon License Manager** | p. 156 | [Ver Ficha Técnica](#amazon-license-manager) |
| **Amazon Managed Grafana** | p. 159 | [Ver Ficha Técnica](#amazon-managed-grafana) |
| **AWS Managed Service for Prometheus** | p. 162 | [Ver Ficha Técnica](#aws-managed-service-for-prometheus) |
| **AWS Organizations** | p. 164 | [Ver Ficha Técnica](#aws-organizations) |
| **AWS Proton** | p. 168 | [Ver Ficha Técnica](#aws-proton) |
| **AWS Service Catalog** | p. 170 | [Ver Ficha Técnica](#aws-service-catalog) |
| **AWS Systems Manager** | p. 172 | [Ver Ficha Técnica](#aws-systems-manager) |
| **AWS Trusted Advisor** | p. 174 | [Ver Ficha Técnica](#aws-trusted-advisor) |
| **AWS Well-Architected Tool** | p. 177 | [Ver Ficha Técnica](#aws-well-architected-tool) |

---


## <a id="aws-cloudformation"></a>🔹 AWS CloudFormation
*(Página 138 del Handbook)*


### 📌 ¿Qué es? / What It Is

AWS CloudFormation is an infrastructure-as-code (IaC) service that lets you model, provision,
and manage AWS resources (and some third-party resources) via declarative templates (JSON
or Y AML).
You define everything (instances, networks, databases, permissions) as code; CloudFormation
handles the creation, updates, deletions as “stacks”.

### ⚙️ Características Clave / Key Features

- **Templates:** YAML/JSON file with sections like Parameters, Mappings, Conditions, Resources, Outputs.
- **Stacks:** A deployed collection of AWS resources defined by a template. You manage all resources as one unit.
- **Change Sets:** Preview updates/changes before applying so you can see what will change or be replaced.
- **Nested Stacks / Modules / Registry:** Reuse templates/components for modularizing infrastructure.
- **StackSets:** Deploy stacks across multiple AWS accounts/regions with a single template.
- **Drift Detection:** Detect when stack resources diverge from the declared template.
- **Integration:** Works with CI/CD pipelines (since you’re a DevOps intern, this is gold).
- Free to use for the service; you pay for the resources provisioned via CloudFormation. Core Concepts & Components
- **Template:** The blueprint (YAML/JSON) defining resources.
- **Resources:** The only required section in a template; each resource maps to AWS service (EC2, VPC, S3… ).
- **Parameters:** Inputs you can provide when creating/updating stacks for flexibility.
- **Mappings / Conditions:** Provide region/OS/AMI variations or conditionally deploy resources.
- **Outputs:** Values you want to export, or make available after stack creation (e.g., VPC ID).
- **Ref / GetAtt / Fn:** :ImportValue: Intrinsic functions for referencing resources, attributes, cross-stack imports.
- **Stack:** The runtime instantiation of a template (i.e., the actual deployed set of resources).
- **Cross-Stack References:** Export outputs from one stack and import into another (modular design).
- **Module / Nested Stack:** Reusable, nested templates/components for better organization.
- **StackSet:** For multi-account/multi-region deployments.
Security, Governance & Cost
- You control access via AWS IAM to allow who can create/update/delete stacks.
- Don’t hard code credentials in templates; use secure parameter types, Secrets Manager or SSM Parameter Store.
- Use Stack Policies, drift detection, CloudTrail logging to ensure governance/compliance.
- **Cost:** CloudFormation itself has no extra charge; you pay for the resources the stack creates.

### 💡 Casos de Uso Típicos / Use Cases

- You need repeatable infrastructure provisioning across environments (dev/stage/prod). → Use CloudFormation.
- You want version-controlled infrastructure and ability to roll-back changes. → CloudFormation templates + Change Sets.
- You must deploy identical infrastructure in multiple regions/accounts. → Use StackSets.
- You want to modularize infrastructure (e.g., network stack, application stack referencing network outputs). → Use Cross-Stack references/modules.
- You’re building a CI/CD pipeline for infrastructure changes (DevOps flow). → Use CloudFormation integration with pipelines, change sets.

### ⭐ Buenas Prácticas / Best Practices

- **Keep templates modular:** separate logical parts of architecture into individual stacks.
- Validate templates (linting, tools like cfn-lint) before deploying.
- Use version control for template files, treat as code (IaC).
- Use Stack Policies/Change Sets before applying to production stacks.

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- **If question:** “Repeatable, immutable infrastructure” → CloudFormation (or CDK under the hood) is likely.
- If they mention “deal with account/region automation” → StackSets might be the answer.
- If they ask “cost of the service”, CloudFormation itself is free; you pay for underlying resources.
- **Trick:** CloudFormation vs other services (e.g., Terraform), CloudFormation is AWS-native, supported by exam.

### 📝 Resumen Rápido / Quick Summary

AWS CloudFormation is your go-to for automating and managing AWS infrastructure as code.
Define resources in templates, deploy stacks, reuse modules, govern with policies, embed into
DevOps pipelines. For the SAA exam you’ll often pick it when the requirement
emphasizes automation, repeatability, infrastructure lifecycle management, account/region
scale, and version-controlled provisioning.

## <a id="aws-cloudtrail"></a>🔹 AWS CloudTrail
*(Página 140 del Handbook)*


### 📌 ¿Qué es? / What It Is

AWS CloudTrail is a service that enables governance, compliance, and operational and risk
auditing of your AWS account. It records account activity and API calls across AWS services,
delivering log files to Amazon S3, CloudWatch Logs, or CloudWatch Events.

### ⚙️ Características Clave / Key Features

- Records AWS Management Console actions, AWS SDKs, command-line tools, and other AWS services API calls
- Tracks who did what, when, and from where in your AWS account
- Delivers event history to S3 buckets for auditing and analysis
- Integrates with CloudWatch Logs for real-time monitoring and alarms
- Integrates with Amazon EventBridge (formerly CloudWatch Events) to automate responses to events Events and Trails
- An event represents a single AWS API call, including request parameters and response elements
- Trails are configurations that specify how events are logged and delivered
- Single Region or Multi-Region Trails
- Supports logging for all AWS Regions in an account
- Management Events (control plane) record operations on AWS resources
- Data Events (data plane) record resource operations like S3 object-level actions and Lambda function invocations Types of Events
- **Management Events:** By default, includes Read and Write operations for resource configuration
- **Data Events:** Must be explicitly enabled, e.g., S3 GetObject, PutObject, Lambda Invoke
- **Insights Events:** Identify unusual operational activity (e.g., high rate of API errors) Trails Configuration
- Can have multiple trails per account
- Apply to single Region or all Regions
- Event logs delivered to S3 bucket specified in trail configuration
- Optional integration with CloudWatch Logs for near real-time monitoring
- Supports encryption of logs with AWS KMS CloudTrail Event History
- Provides 90 days of management event history for free
- Can view, search, and download events in the AWS console
- Useful for viewing recent account activity without setting up a trail CloudTrail Insights
- Analyses write management events to detect unusual activity
- Detects spikes in API call volume or error rates
- Provides Insight Events with details about the anomaly
- Helps identify security issues or operational problems Integration with Other AWS Services
- Amazon S3 for storing logs
- AWS CloudWatch Logs for real-time analysis and alarms
- Amazon EventBridge for automating workflows and security responses
- AWS Lambda to automatically respond to specific events
- AWS Organizations for organization-level trails covering all member accounts Organization Trails
- AWS Organizations can create a trail that applies to all accounts in the organization
- Centralized logging for governance and compliance
- Prevents member accounts from disabling logging Security and Access Control
- Logs can be encrypted with AWS KMS for secure storage
- IAM policies control access to CloudTrail logs and settings
- Supports bucket policies and S3 ACLs for secure delivery of logs

### 💵 Precios y Costos / Pricing

- Viewing CloudTrail Event History (last 90 days of management events) is free
- First copy of management events recorded in a trail is free
- Charges apply for additional copies, data events, and Insights events
- Storage costs for S3 and optionally CloudWatch Logs ingestion and storage

### ⭐ Buenas Prácticas / Best Practices

- Always enable CloudTrail in all Regions to ensure full coverage
- Use organization trails in AWS Organizations for centralized auditing
- Enable log file validation to ensure log integrity
- Enable encryption using AWS KMS for secure log storage
- Store logs in a dedicated S3 bucket with strict access controls
- Integrate with CloudWatch Logs and EventBridge for real-time alerting and automated responses
- Use Insights for detecting anomalous API activity

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- CloudTrail records all API calls made in your account, including from the console, SDKs, CLI, and other AWS services
- Delivers logs to S3, integrates with CloudWatch Logs for monitoring and alarms
- Management Events include control plane operations (e.g., creating resources)
- Data Events must be explicitly enabled (e.g., S3 object-level actions, Lambda invocations)
- Supports organization-wide trails in AWS Organizations
- Insights detect unusual API activity patterns
- Security best practices include encryption with KMS and log file validation

### 📝 Resumen Rápido / Quick Summary

AWS CloudTrail is the essential AWS service for auditing and compliance, recording API activity
across your account and delivering logs to S3 for analysis. It supports real-time monitoring via
CloudWatch, integrates with EventBridge for automation, and offers advanced features like
Insights for detecting anomalies.

## <a id="amazon-cloudwatch"></a>🔹 Amazon CloudWatch
*(Página 143 del Handbook)*


### 📌 ¿Qué es? / What It Is

Amazon CloudWatch is a monitoring and observability service for AWS resources and
applications. It provides data collection, visualization, alerting, and automated responses to
changes in your environment.

### ⚙️ Características Clave / Key Features

- Collects and tracks metrics for AWS resources and custom metrics
- Logs aggregation, storage, search, and analysis
- Alarms for monitoring thresholds and triggering actions
- Dashboards for visualization of metrics and logs
- Events for responding to state changes in AWS resources
- Anomaly detection for identifying unusual metric patterns
- Contributor Insights for analysing high-cardinality log data
- CloudWatch Synthetics for monitoring application endpoints
- ServiceLens for visualizing application performance and dependencies Metrics
- Automatically collects metrics from AWS services like EC2, RDS, Lambda, and ELB
- Custom metrics can be published by applications
- Standard and detailed monitoring (e.g., 1-minute vs. 5-minute intervals)
- Supports percentile-based metrics and high-resolution (up to 1-second) metrics
- Metric math for creating derived metrics from existing ones Logs
- Centralized storage and analysis of logs from AWS services and applications
- CloudWatch Logs Agents and AWS Lambda can send logs
- Supports log filtering and metric extraction
- Log groups and log streams for organization
- Subscription filters for streaming logs to other services (e.g., Lambda, Kinesis)
- Log Insights for querying and analysing logs with a SQL-like syntax Alarms
- Watches metrics and triggers actions when thresholds are breached
- Supports static thresholds and anomaly detection
- Actions include SNS notifications, Auto Scaling policies, and EC2 actions (e.g., stop, terminate, reboot, recover)
- Composite alarms to combine multiple alarms with AND/OR logic Dashboards
- Customizable views of metrics and logs in a single interface
- Supports text, metric graphs, and log queries
- Can include data from multiple regions and accounts
- JSON-based dashboard definitions for automation Events (EventBridge Integration)
- CloudWatch Events is now Amazon EventBridge
- Delivers system events describing changes in AWS resources
- Allows setting up rules to match events and trigger targets like Lambda, SNS, or Step Functions
- Supports scheduled (cron) events for automated tasks CloudWatch Synthetics
- Allows creation of canaries to monitor application endpoints and APIs
- Simulates user interactions to check availability and latency
- Captures screenshots, logs, and metrics for detailed analysis CloudWatch Contributor Insights
- Analyses time-series log data to identify top contributors
- Helps troubleshoot high-cardinality issues like top talkers or top error sources
- Real-time and historic analysis supported CloudWatch ServiceLens
- Integrates metrics, logs, and traces for end-to-end observability
- Visualizes service maps and dependencies
- Integrates with AWS X-Ray for distributed tracing
- Helps identify bottlenecks and performance issues across microservices Retention and Storage
- Metrics retained for 15 months (granularity varies by age)
- Logs retention configurable from days to indefinite
- Log archives can be exported to S3

### 🔒 Seguridad y Cifrado / Security

- IAM policies to control access to CloudWatch resources
- Data encrypted at rest and in transit
- Supports KMS for log group encryption
- AWS CloudTrail integration for auditing API calls Integration with AWS Services
- Works with EC2, Lambda, RDS, DynamoDB, ELB, ECS, EKS, and many other AWS services
- Supports custom applications publishing metrics via the PutMetricData API
- Integrates with AWS Auto Scaling for dynamic resource management
- Supports cross-account dashboards and metrics

### 💵 Precios y Costos / Pricing

- Charged based on metrics, API requests, alarms, dashboards, logs ingested and stored, and canary runs
- Free tier includes basic monitoring metrics and 5GB of log ingestion per month

### ⭐ Buenas Prácticas / Best Practices

- Use detailed monitoring for production-critical resources
- Set up alarms for key metrics and use SNS for notifications
- Use log filters to extract custom metrics from logs
- Leverage Contributor Insights for analysing high-volume log data
- Combine metrics, logs, and traces in dashboards for full observability
- Use anomaly detection to avoid hard thresholds for dynamic workloads
- Archive old logs to S3 for cost optimization

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- **CloudWatch Metrics:** monitor AWS resources and custom data
- **CloudWatch Logs:** store, search, and analyse application and system logs
- **Alarms:** trigger actions based on metric thresholds
- **Dashboards:** visualize operational data in one place
- **Events/EventBridge:** respond to state changes and schedule tasks
- **Synthetics:** monitor API and web endpoint availability
- **Contributor Insights:** analyse top contributors in log data
- **ServiceLens:** correlate metrics, logs, and traces for application performance monitoring
- Integration with SNS, Lambda, EC2 Auto Scaling, and many other AWS services

### 📝 Resumen Rápido / Quick Summary

Amazon CloudWatch is AWS’s integrated monitoring and observability service. It provides
metrics, logs, alarms, dashboards, events, and advanced features like anomaly detection,
Contributor Insights, and ServiceLens to help you understand and manage the performance,
health, and availability of your AWS environment and applications.
AWS Command Line Interface (CLI)

### 📌 ¿Qué es? / What It Is

The AWS CLI is a unified command-line tool that enables you to interact with nearly all AWS
services from your terminal. Instead of clicking around the console, you script, automate, and
integrate in pipelines. It fits right into the “automate infrastructure/deployment” mindset.

### ⚙️ Características Clave / Key Features

- Single tool to manage multiple AWS services via commands.
- Can be installed on Windows/macOS/Linux or used via AWS CloudShell.
- Supports configuration of multiple profiles and regions.
- Can run commands interactively or as part of scripts (CI/CD).
- Outputs in JSON, text, or table format for parsing and readability.
- Supports pagination, filters and powerful querying with --query.
- Integrates with automation frameworks (bash scripts, PowerShell, CI pipelines). Core Concepts & Syntax
- **Installation & Configuration:** aws configure          # set access key, secret, region, output format aws configure --profile myprofile
- **Profiles:** Use --profile to specify alternative credentials.
- **Region override:** --region us-west-2 allows per-command region override.
- **Output formats:** --output json|text|table Security / Governance & Cost Considerations
- **Credentials:** Should be stored securely. Do not embed access keys in code. Use IAM roles, environment variables, or AWS profiles.
- **Least privilege:** Commands executed via CLI are subject to IAM permissions — ensure users/roles have only necessary rights.
- **Auditing & logging:** Actions via CLI show up in AWS CloudTrail logs (just like console actions), so you’re covered for governance.
- **Region/Account awareness:** CLI operations apply to the region/account context. Mistakes (wrong region/account) can lead to resource sprawl or cost surprises.
- **Cost impact:** CLI may automate resource creation/deletion; include cleanup logic in scripts to avoid orphaned resources that drive cost.

### 💡 Casos de Uso Típicos / Use Cases

- **Quick:** “You need to script deployment of an S3 bucket + IAM role as part of CI/CD.” → CLI is perfect.
- “ Automate cleanup of EC2 instances across regions monthly” → Use CLI in a script or via AWS Systems Manager Run Command.
- “You want to query across multiple accounts/profiles for resource status” → CLI profiles + parameterization.
- “You need to integrate AWS commands into Jenkins or GitHub Actions pipeline” → CLI enables programmatic invocation.

### ⭐ Buenas Prácticas / Best Practices

- Use named profiles for different environments (dev/test/prod) rather than default profile only.
- Store configuration in ~/.aws/config and ~/.aws/credentials securely, avoid version controlling secrets.
- Use --dry-run or equivalent flags (when available) to check actions before executing.
- Combine CLI commands with infrastructure-as-code (IaC) tools (like AWS CloudFormation or AWS CDK) for repeatable builds.
- Script operations with error handling, logging output, and cleanup to avoid resource leakage.
- Use --output table for human readability in ad-hoc tasks; --output json for automation/parsing.
- Keep the CLI tool up-to-date (aws --version) because AWS adds new services/features constantly.

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- If a question describes “you need to automate repeated operations across AWS using scripts” → CLI is a key candidate.
- When they mention “use command-line to query resource details” → use CLI example.
- Don’t confuse CLI with SDK/console — “command line” means CLI.
- Know that CLI actions are subject to IAM permissions and region/account context. If a command fails, misconfigured profile/region or insufficient IAM is probable.
- **Remember:** CLI is tool-agnostic of AWS services; it’s the interface to them. So, in exam context pick answers that highlight “scriptable, automatable, less manual, supports multiple services”.

### 📝 Resumen Rápido / Quick Summary

AWS CLI is your go-to command-line tool for controlling AWS services in an automated, scripted
fashion. For the SAA exam: think “automation”, “script” , “multiple services via terminal”,
“region/profile context”, “IAM controls”. It’s not a service like S3 or EC2, it’s the interface you’ll
use to manage them.

## <a id="aws-config"></a>🔹 AWS Config
*(Página 148 del Handbook)*


### 📌 ¿Qué es? / What It Is

AWS Config is a fully managed service that enables you to assess, audit, and evaluate the
configurations of your AWS resources. It continuously monitors and records your AWS resource
configurations and allows you to automate the evaluation of recorded configurations against
desired settings.

### ⚙️ Características Clave / Key Features

- Records configuration changes of supported AWS resources
- Captures point-in-time snapshots and changes over time
- Evaluates resource configurations against compliance rules
- Provides a history of resource configuration changes
- Delivers configuration snapshots and change notifications to Amazon S3 and SNS
- Integrates with AWS Organizations for multi-account governance Configuration Recorder
- Core component of AWS Config
- Records changes to supported AWS resources in your account
- Must be turned on to capture configuration changes
- Defines which resources are recorded (all supported resources or specific types) Configuration Items (CIs)
- Represent the configuration of a resource at a point in time
- Include metadata, relationships, and current configuration details
- Delivered to S3 bucket in JSON format Resource Inventory
- Provides a view of all recorded AWS resources and their configurations
- Searchable inventory of resources
- Tracks relationships between resources (e.g., which EC2 instances are in which VPC) Configuration History
- Detailed history of resource configuration changes over time
- Can analyse historical configurations for troubleshooting and audits
- Stored in S3 for long-term retention and analysis Configuration Snapshots
- Point-in-time capture of all resource configurations
- Delivered to S3 bucket
- Useful for audits and compliance reporting AWS Config Rules
- Define desired configurations for resources
- Continuously evaluate resource configurations against these rules
- **AWS Managed Rules:** Pre-built rules covering common compliance scenarios
- **Custom Rules:** User-defined, often using AWS Lambda functions
- Rules can be triggered by configuration changes or on a periodic basis
- Noncompliant resources are flagged for remediation Remediation
- Automate remediation of noncompliant resources
- Use AWS Systems Manager Automation documents to define remediation actions
- Can be triggered automatically or manually from the AWS Config console
- Ensures continuous compliance with policies Aggregators
- Combine configuration data from multiple accounts and regions
- Centralized view of resource configurations and compliance across an organization
- Supports AWS Organizations to aggregate data from all member accounts Integration with AWS Organizations
- Multi-account governance with AWS Config aggregators
- Organization-level AWS Config rules for consistent policy enforcement
- Can record and evaluate resources in all accounts of an organization Delivery Channels
- Define where AWS Config delivers configuration snapshots and compliance notifications
- Typically, an S3 bucket for snapshots and an SNS topic for notifications
- Supports encryption of data at rest using AWS KMS Security and Access Control
- Supports IAM policies for fine-grained access control
- Encryption of configuration data in S3 using KMS
- Logs delivery to CloudWatch Logs for monitoring

### 💵 Precios y Costos / Pricing

- Charged based on the number of recorded configuration items
- Additional charges for active AWS Config rules evaluations
- Aggregators incur charges for cross-account and cross-region data aggregation
- Storage costs in S3 for snapshots and history files

### 💡 Casos de Uso Típicos / Use Cases

- Compliance auditing and reporting
- Security analysis and configuration monitoring
- Operational troubleshooting and resource tracking
- Change management and governance in multi-account environments
- Continuous enforcement of infrastructure policies

### ⭐ Buenas Prácticas / Best Practices

- Enable AWS Config in all regions for complete coverage
- Use AWS Config Rules to enforce security and compliance standards
- Aggregate configuration data across accounts with AWS Organizations
- Automate remediation of noncompliant resources
- Store configuration snapshots and history in a secure, versioned S3 bucket
- Integrate with CloudWatch Logs and SNS for alerting and monitoring

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- AWS Config records and evaluates AWS resource configurations over time
- Supports AWS Managed Rules and Custom Rules for compliance enforcement
- Aggregators provide a centralized view across accounts and regions
- Delivers configuration history and snapshots to S3
- Can trigger notifications via SNS and logs via CloudWatch
- Supports automated remediation using Systems Manager Automation
- Integrates with AWS Organizations for organization-wide governance

### 📝 Resumen Rápido / Quick Summary

AWS Config is a powerful tool for tracking, auditing, and enforcing AWS resource configurations.
It records changes, evaluates compliance against rules, and provides detailed histories to
support governance, security, and operational excellence across your AWS environment.

## <a id="aws-control-tower"></a>🔹 AWS Control Tower
*(Página 151 del Handbook)*


### 📌 ¿Qué es? / What It Is

AWS Control Tower is a fully managed service that helps you set up and govern a secure, multi-
account AWS environment based on AWS best practices. It automates account provisioning,
applies governance controls, and streamlines compliance for multi-account AWS setups using a
landing zone.
Key Benefits
- Automated landing zone setup for multi-account environments.
- Applies guardrails for governance and compliance.
- Simplifies account provisioning with Account Factory.
- Integrates with AWS Organizations, AWS Config, Service Catalog, and CloudTrail.
- Enables centralized monitoring and policy enforcement.

### 🧩 Conceptos Centrales / Core Concepts


### 1. Landing Zone

A preconfigured, secure AWS environment that follows AWS best practices for setting up new
accounts. Includes:
- Centralized logging.
- Account structure (management, audit, and log archive accounts).
- Networking configuration.
- Security baselines.

### 2. Account Factory

- A tool within Control Tower to automate account creation and provisioning.
- Uses AWS Service Catalog to provide account blueprints.
- Customizes VPC configurations, AWS Region selections, and other settings.

### 3. Guardrails

- Predefined policies that enforce rules and monitor compliance.
- **Two types:** 
  - **Preventive:** Uses Service Control Policies (SCPs) to block actions that violate governance rules.
  - **Detective:** Uses AWS Config rules to monitor compliance and alert on violations.
- **Examples:** 
  - Prevent use of unapproved regions.
  - Ensure CloudTrail is enabled.
  - Require MFA for root accounts. Architecture Overview
- **Control Tower builds on:** 
  - **AWS Organizations:** Manages account hierarchy.
  - **Service Catalog:** Used for Account Factory.
  - **CloudTrail:** Captures API activity logs.
  - **AWS Config:** Tracks resource compliance.
  - **CloudWatch & SNS:** For alerting and monitoring.
- **Accounts Created:** 
  - **Management Account:** Central administration and billing.
  - **Audit Account:** Read-only access to all accounts for compliance.
  - **Log Archive Account:** Centralized storage for CloudTrail and Config logs. Account Structure
- **Organizational Units (OUs):** Group accounts logically (e.g., production, development).
- Guardrails are applied at the OU level.
- New accounts can be provisioned into specific OUs. Customizations for Control Tower (CfCT)
- A framework that allows adding customizations, resources, and configurations to the landing zone.
- Can deploy CloudFormation templates across accounts and OUs.
- Supports lifecycle management for custom resources. Integration and Extension
- **AWS Config Aggregator:** Central view of configuration compliance.
- **AWS CloudTrail Lake:** Central storage of activity logs.
- IAM Identity Center (formerly AWS SSO): Enables single sign-on access.
- Supports custom SCPs in addition to managed guardrails.

### 🔒 Seguridad y Cumplimiento / Security & Compliance

- IAM policies, SCPs, and Config rules enforce governance.
- **Automatically sets up:** 
  - CloudTrail logs stored in Log Archive account.
  - AWS Config enabled across accounts.
- Helps with audit readiness and aligns with frameworks like CIS and NIST .

### 💡 Casos de Uso Típicos / Use Cases

- Establishing multi-account environments with best practices.
- Enforcing security baselines across multiple accounts.
- Centralized governance for enterprises and regulated environments.
- Streamlining account provisioning for dev/test/prod environments.

### 💵 Precios y Costos / Pricing

- No additional cost for using AWS Control Tower.
- You pay for the underlying services it uses:
  - CloudTrail
  - AWS Config
  - S3
  - AWS Lambda
  - Other resources deployed by Control Tower Limitations
- Limited customization of SCPs and guardrails within the Control Tower console (can be extended manually).
- Guardrails only apply to accounts enrolled in Control Tower.
- Certain AWS Regions may not be supported.
- Some services may not be Control Tower-aware.

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Control Tower simplifies multi-account AWS governance by using landing zones, guardrails, and Account Factory.
- Guardrails are either preventive (SCPs) or detective (Config rules).
- Account Factory uses AWS Service Catalog for account provisioning.
- Logs and compliance data are centrally stored in designated accounts.
- Works with AWS Organizations to manage multiple accounts.
- **Know the three key accounts:** Management, Audit, Log Archive.
- Use Customizations for Control Tower for advanced control and resource deployment.

### 📝 Resumen Rápido / Quick Summary

AWS Control Tower helps you build, manage, and govern a secure, multi-account AWS
environment at scale using preconfigured landing zones, automated account provisioning, and
governance guardrails. It streamlines compliance, centralizes logging, and integrates tightly with
other AWS services like IAM Identity Center , AWS Organizations, and AWS Config.

## <a id="aws-management-console"></a>🔹 AWS Management Console
*(Página 154 del Handbook)*


### 📌 ¿Qué es? / What It Is

The AWS Management Console is a web-based interface that lets you interact with and manage
your AWS resources visually without needing the CLI or SDKs. Think of it as your control room
for everything in AWS.

### ⚙️ Características Clave / Key Features

- **Web-Based UI:** Manage and configure AWS services from your browser.
- **Global Search Bar:** Quickly access services, documentation, and recent resources.
- **Resource Dashboard:** Monitor active resources, costs, and billing data.
- **Service Favourites:** Pin your frequently used AWS services for faster access.
- **Account Management:** Manage users, billing, regions, and support plans.
- **Integrated Access:** Launch CloudShell, connect to Cloud9, or switch to CLI seamlessly.

### 💡 Casos de Uso Típicos / Use Cases

- Spinning up EC2 instances, RDS databases, or S3 buckets manually.
- Managing IAM users, roles, and permissions.
- Monitoring application health and performance using CloudWatch dashboards.
- Viewing service quotas and billing summaries.

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- AWS Console is region-specific, always check your region in the top-right corner!
- Some services (like IAM or CloudFront) are global, meaning they aren’t tied to regions.
- You can access AWS CloudShell directly from the console to execute CLI commands.
- For automation, prefer AWS CLI, SDKs, or CloudFormation, the console is mostly for setup, testing, or visualization.

### 📝 Resumen Rápido / Quick Summary

A web-based GUI that gives you full control of your AWS resources, ideal for visual management,
quick deployments, and billing insights. It’s user-friendly but not meant for automation.

## <a id="aws-health-dashboard"></a>🔹 AWS Health Dashboard
*(Página 155 del Handbook)*


### 📌 ¿Qué es? / What It Is

The AWS Health Dashboard gives you real-time visibility into the status and health of AWS
services globally and specific to your account.
It helps you stay informed about service disruptions, planned maintenance, and resource-
specific issues that could affect your workloads.
There are two main views:

### 1. Service Health Dashboard – Public view of AWS service status across all regions.


### 2. Your Account Health Dashboard – Personalized view showing issues

impacting your AWS resources.

### ⚙️ Características Clave / Key Features

- **Service Status Updates:** See outages, degradation, or maintenance events in real-time.
- **Personalized Notifications:** Get alerts for your account-specific incidents.
- **Event History:** Review past issues and maintenance events.
- **Integration with CloudWatch & SNS:** Automate notifications for operational awareness.
- **APIs Available:** Access programmatically using AWS Health API (great for automation).

### 💡 Casos de Uso Típicos / Use Cases

- Monitoring service interruptions that might impact production workloads.
- Tracking AWS infrastructure health during incident management.
- Setting up alerting systems via SNS or EventBridge for proactive responses.
- Reviewing post-incident events for compliance and RCA (root cause analysis).

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- **Service Health Dashboard:** Accessible publicly without login shows AWS-wide events.
- **Account Health Dashboard:** Requires AWS credentials shows issues related to your AWS resources.
- AWS Health API can be integrated with monitoring tools for proactive alerts.
- Often tested in exam questions related to troubleshooting, monitoring, and resiliency.

### 📝 Resumen Rápido / Quick Summary

Your window into AWS’s operational health, track global and account-specific incidents, get
proactive alerts, and ensure your architecture remains resilient against service disruptions.
AWS License Manager

### 📌 ¿Qué es? / What It Is

AWS License Manager is a service that helps you manage, track, and control software licenses in
AWS and on-premises environments. It simplifies license administration, reduces the risk of
non-compliance, and supports license optimization by enforcing usage rules.

### ⚙️ Características Clave / Key Features

- Centralized license management for AWS and on-premises resources
- Supports BYOL (Bring Your Own License) models
- Define rules to track license usage and enforce limits
- Integrates with AWS Systems Manager for discovery of installed software
- Provides visibility into license usage across AWS accounts in an organization
- Supports integration with AWS Marketplace for license management of Marketplace products License Configurations
- Define custom licensing rules including:
  - Number of vCPUs or cores
  - Number of instances or sockets
  - Licensing metrics (e.g., per VM, per core)
- Create rules that align with your vendor agreements
- Enforce compliance by preventing overuse of licenses License Tracking
- Automatically track license consumption on AWS resources
- **Supports tracking for:** 
  - EC2 instances
  - On-premises servers connected via AWS Systems Manager
- Visibility into resource usage against defined limits
- Generate reports for audit and compliance purposes Enforcement
- Enforce licensing rules at launch time
- Prevents creation of resources that exceed defined license limits
- Integration with AWS Service Catalog to ensure compliant deployments
- Helps ensure usage stays within vendor agreements
Integration with AWS Systems Manager
- AWS Systems Manager Inventory discovers installed software on instances
- License Manager uses inventory data to track and manage licenses
- Supports hybrid environments (AWS and on-premises) Cross-Account Management
- Integrated with AWS Organizations for centralized license tracking
- Share license configurations across multiple AWS accounts
- Enable governance in multi-account environments AWS Marketplace Integration
- Supports license management for Marketplace products
- Track and manage entitlements purchased through AWS Marketplace
- Centralized view of Marketplace software usage Reporting and Visibility
- Dashboard to view license configurations, usage, and compliance status
- Detailed reports to help with audits and vendor negotiations
- Alerts for nearing license limits or non-compliance risks BYOL (Bring Your Own License)
- Supports bringing existing licenses to AWS
- Define and enforce rules to ensure BYOL usage complies with vendor terms
- Track usage to help maintain compliance Security and Access Control
- Integration with AWS Identity and Access Management (IAM)
- Fine-grained permissions to control who can create, modify, or delete license configurations
- AWS CloudTrail logging for API calls to support auditing and compliance

### 💵 Precios y Costos / Pricing

- No additional charge for using AWS License Manager
- Pay for the underlying AWS resources you use
- Helps reduce costs by optimizing license utilization and avoiding over-purchasing

### 💡 Casos de Uso Típicos / Use Cases

- Enforcing vendor licensing rules in AWS environments
- Centralized license tracking for multi-account AWS setups
- Managing software license compliance for hybrid (AWS + on-premises) environments
- Optimizing costs through better visibility into license usage
- Supporting BYOL strategies for existing software investments

### ⭐ Buenas Prácticas / Best Practices

- Define clear license configurations that match your vendor agreements
- Integrate with AWS Systems Manager for discovery and tracking
- Enable cross-account sharing for Organizations to standardize governance
- Regularly review usage reports to identify optimization opportunities
- Use IAM policies to control access to License Manager configurations

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- AWS License Manager helps track and enforce licensing rules in AWS and on-premises
- Supports BYOL by defining custom licensing rules
- Integrated with Systems Manager for inventory and tracking
- Can enforce rules at launch to prevent non-compliance
- Supports cross-account management with AWS Organizations
- Helps manage AWS Marketplace licenses in addition to BYOL software

### 📝 Resumen Rápido / Quick Summary

AWS License Manager is a service that enables customers to centrally manage and track
software licenses across AWS and on-premises environments. It supports BYOL, enforces license
usage rules to ensure compliance, integrates with AWS Systems Manager for discovery, and
provides visibility and reporting to help reduce costs and maintain audit readiness.

## <a id="amazon-managed-grafana"></a>🔹 Amazon Managed Grafana
*(Página 159 del Handbook)*


### 📌 ¿Qué es? / What It Is

Amazon Managed Grafana is a fully managed service for open-source Grafana that makes it easy
to visualize and analyse operational data at scale. It helps you create, explore, and share
dashboards to monitor AWS resources and other data sources without needing to manage
Grafana infrastructure yourself.

### ⚙️ Características Clave / Key Features

- Fully managed, highly available, and scalable Grafana workspace
- Integration with AWS data sources such as CloudWatch, X-Ray, Timestream, and IoT SiteWise
- Supports over 40 data sources including Prometheus, Elasticsearch, InfluxDB, and MySQL
- Built-in security features with AWS SSO and IAM Identity Center integration
- Supports Grafana Enterprise plugins for enhanced capabilities
- Automatic version updates and patching
- Supports creating, sharing, and embedding dashboards
- Alerting with multi-channel notifications including SNS and Slack Workspaces
- Logical Grafana environments in your AWS account
- Multi-user support with AWS SSO for access control
- Each workspace is isolated and secure
- Supports provisioning multiple workspaces for different teams or projects Data Sources
- Native integration with AWS services including:
  - Amazon CloudWatch
  - AWS X-Ray
  - AWS IoT SiteWise
  - Amazon Timestream
  - AWS Managed Prometheus
- Also supports popular third-party sources like:
  - Prometheus
  - Elasticsearch
  - InfluxDB
  - MySQL/PostgreSQL
  - OpenSearch Service Security and Access Control
- Integrated with AWS SSO for user authentication and authorization
- Supports IAM policies for fine-grained workspace access
- Encryption at rest using AWS KMS
- VPC connectivity for private data sources
- Audit logging with AWS CloudTrail Alerting
- Define thresholds and conditions on metrics
- Supports multi-channel notification integrations such as SNS, Slack, and email
- Managed Grafana alerting supports deduplication and silencing
- Alert rule and notification policy management within Grafana Grafana Enterprise Features
- Optional access to Enterprise plugins (available for additional cost)
- **Examples:** ServiceNow, Splunk, Datadog, Dynatrace
- Advanced reporting and data source integrations Integration with AWS Services
- **Amazon CloudWatch:** Native dashboard creation for AWS metrics
- **AWS X-Ray:** Visualize application traces
- **AWS IoT SiteWise:** Industrial data visualization
- **Amazon Timestream:** Time-series data analysis
- **AWS Managed Service for Prometheus:** Scrape and visualize Prometheus metrics Deployment and Management
- AWS fully manages setup, patching, scaling, and availability
- Simple provisioning through the AWS Console, CLI, or CloudFormation
- Automatic upgrades to latest Grafana versions
- Supports infrastructure-as-code for workspace creation and configuration

### 💵 Precios y Costos / Pricing

- Billed per active user per workspace per month
- Free tier available for trial usage
- Additional charges for Grafana Enterprise plugin usage
- Data transfer costs may apply when querying external data sources

### 💡 Casos de Uso Típicos / Use Cases

- Monitoring AWS infrastructure with CloudWatch metrics
- Centralized observability for microservices with Prometheus and AWS X-Ray
- Industrial IoT monitoring with AWS IoT SiteWise
- Operational dashboards for DevOps and SRE teams
- Correlating logs, metrics, and traces in a single view

### ⭐ Buenas Prácticas / Best Practices

- Use AWS SSO for secure user management and access control
- Leverage IAM policies to restrict workspace access
- Enable audit logging for compliance and visibility
- Organize workspaces by team or project to manage isolation
- Integrate with SNS for alerting to AWS services and other endpoints

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Managed Grafana is AWS’s fully managed, secure, scalable Grafana service
- Supports integration with AWS-native and third-party data sources
- AWS SSO and IAM help manage user access securely
- Use for building dashboards to monitor AWS services, application traces, and custom metrics
- Fully managed deployment means AWS handles patching, scaling, and availability
- Alerts can notify via SNS, email, Slack, and other channels

### 📝 Resumen Rápido / Quick Summary

Amazon Managed Grafana simplifies creating and managing Grafana dashboards for monitoring
AWS and third-party data sources. It is fully managed by AWS, supports secure access with SSO
and IAM, integrates natively with AWS services, offers enterprise plugin options, and provides
advanced alerting to help teams monitor and respond to operational events effectively.
Amazon Managed Service for Prometheus

### 📌 ¿Qué es? / What It Is

Amazon Managed Service for Prometheus (AMP) is a fully managed, highly available, and secure
monitoring service that is compatible with open-source Prometheus. It lets you collect, store,
and query operational metrics at scale without managing the underlying infrastructure.

### ⚙️ Características Clave / Key Features

- Fully managed, serverless, and automatically scalable
- Prometheus-compatible querying using PromQL
- High availability across multiple Availability Zones
- Integrated with AWS security services like IAM and AWS PrivateLink
- Secure data encryption at rest and in transit using AWS KMS
- Supports AWS native services for metric collection (e.g., Amazon EKS, ECS, EC2)
- Pay-as-you-go pricing with no upfront costs Prometheus Compatibility
- Works with open-source Prometheus clients and tools
- Supports remote write for sending metrics from existing Prometheus servers
- Allows using PromQL for querying metrics
- Compatible with existing Prometheus exporters and instrumentation libraries Data Ingestion and Storage
- Supports remote write API for pushing metrics
- Automatically scales ingestion based on workload
- Durable, long-term storage of metrics
- Data replication across multiple Availability Zones for high availability Querying and Analysis
- Supports PromQL for flexible metric querying
- Integrated with Amazon Managed Grafana for visualization
- Allows building dashboards and alerts based on Prometheus metrics
- Low-latency query performance even at scale Security and Access Control
- IAM policies for fine-grained access management
- AWS PrivateLink for secure, private connectivity to AMP endpoints
- Encryption of data in transit and at rest using AWS KMS
- Integration with AWS CloudTrail for auditing API calls
- Resource tagging for cost allocation and management Integration with AWS Services
- **Amazon EKS:** Native integration for scraping metrics from Kubernetes clusters
- **AWS Distro for OpenTelemetry:** Supports metrics collection from various sources
- **Amazon Managed Grafana:** For building dashboards with Prometheus metrics
- **AWS CloudWatch:** Can be used alongside for logs and other metrics

### 💵 Precios y Costos / Pricing

- Based on ingestion (data written), storage (GB-month), and query requests
- No upfront fees or long-term commitments
- Pay only for what you use, making it cost-efficient for workloads with variable monitoring needs

### 💡 Casos de Uso Típicos / Use Cases

- Monitoring Kubernetes workloads on Amazon EKS
- Collecting and analysing application metrics using Prometheus exporters
- Creating custom alerts and dashboards using PromQL and Grafana
- Centralizing metrics from multiple AWS and on-premises environments
- Supporting SRE and DevOps practices with scalable, highly available metric storage

### ⭐ Buenas Prácticas / Best Practices

- Use IAM policies to control access to AMP workspaces
- Leverage AWS PrivateLink for secure, private connectivity
- Tag resources for easier cost allocation and management
- Design retention policies to balance compliance needs and cost

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- AMP is fully managed and Prometheus-compatible
- Supports PromQL for querying metrics
- Works with remote write for collecting data from existing Prometheus servers
- Integrates with AWS IAM for access control and AWS PrivateLink for secure connections
- Pay-as-you-go pricing model without upfront costs

### 📝 Resumen Rápido / Quick Summary

Amazon Managed Service for Prometheus enables customers to monitor and analyse metrics
from AWS and on-premises environments using familiar Prometheus tools and PromQL, without
worrying about the operational complexity of scaling and managing Prometheus infrastructure.
It integrates with AWS security, networking, and visualization services to provide a secure, cost-
effective, and easy-to-use monitoring solution.

## <a id="aws-organizations"></a>🔹 AWS Organizations
*(Página 164 del Handbook)*


### 📌 ¿Qué es? / What It Is

AWS Organizations is a free service that helps you centrally manage and govern multiple AWS
accounts at scale. It provides a framework for consolidating billing, managing policies, and
enforcing governance across accounts in a single organization.
Key Benefits
- Centralized billing and cost management.
- Simplified account creation and lifecycle management.
- Policy-based governance with Service Control Policies (SCPs).
- Organize accounts in Organizational Units (OUs).
- Enforce security and compliance consistently.
- Integration with AWS Control Tower, AWS RAM, and other services.

### 🧩 Conceptos Centrales / Core Concepts


### 1. Organization

- A collection of AWS accounts under a single management account.
- Can include hundreds or thousands of member accounts.

### 2. Management Account

- Formerly called Master Account.
- Has full administrative control over the organization.
- Pays the consolidated bill for all member accounts.

### 3. Member Accounts

- Accounts within the organization.
- Managed via the management account.
- Can have restrictions enforced via policies.

### 4. Organizational Units (OUs)

- Logical groupings of accounts within the organization.
- Can be nested hierarchically.
- Policies (like SCPs) can be applied at the OU level to govern multiple accounts together. Features and Capabilities Consolidated Billing
- Combines charges for all accounts into one bill.
- **Benefits:** 
  - Share volume discounts across accounts.
  - Single payment method.
  - Simplified billing and reporting.
- No extra cost to use.
- Billing and usage tracked at both organization and individual account levels. Service Control Policies (SCPs)
- Policies to define maximum available permissions for accounts or OUs.
- **Work with IAM policies:** SCPs set boundaries; IAM policies grant permissions within those boundaries.
- Can allow or deny specific AWS actions.
- **SCP Types:** 
  - **FullAWSAccess:** Default SCP attached to root OU and new accounts.
  - Custom SCPs for fine-grained control.
- **Examples:** 
  - Deny usage of certain regions.
  - Block deletion of specific resources. AWS Single Sign-On (IAM Identity Center) Integration
- Enables centralized access management across accounts.
- Assign user permissions across AWS accounts.
- Supports SAML integration with external identity providers. Account Creation and Invitation
- Create new accounts programmatically or via AWS Management Console.
- Invite existing standalone AWS accounts to join the organization.
- Central governance is enforced upon joining. Tagging Support
- Tag AWS accounts for
- Helps with tracking and reporting. cost allocation and organization. Policy Types
- **Service Control Policies (SCPs):** 
  - Control what services and actions accounts can use.
- **Tag Policies:** 
  - Enforce consistent tagging across resources in accounts.
  - Define allowed tag keys and values.
- **Backup Policies:** 
  - Define and enforce backup plans across accounts.
  - Automate AWS Backup settings.
- **AI Services Opt-Out Policies:** 
  - Control whether AWS AI services can store and use customer content for service improvements. Integration with AWS Services
- **AWS Control Tower:** 
  - Builds landing zones on top of Organizations.
- **AWS Resource Access Manager (RAM):** 
  - Share resources across accounts.
- **AWS Budgets:** 
  - Track and enforce cost controls across the organization.
- **AWS Config:** 
  - Aggregate configuration data across accounts.
- **CloudTrail:** 
  - Centralize logging across all accounts. Security and Access Control
- SCPs enforce organization-wide permission guardrails.
- IAM policies work within the boundaries defined by SCPs.
- Management account can create and manage all OUs and member accounts.
- AWS CloudTrail can log all account activities centrally.

### ⭐ Buenas Prácticas / Best Practices

- Use OUs to reflect organizational structure (e.g., production, development, testing).
- Apply SCPs to enforce least privilege.
- Enable consolidated billing to maximize savings.
- Use tag policies to maintain resource consistency.
- Monitor and audit with AWS Config and CloudTrail.
- Enable AWS Budgets for cost tracking and alerts.

### 💵 Precios y Costos / Pricing

- AWS Organizations itself is free.
- You pay only for the AWS services used by the accounts.
- No extra charges for consolidated billing or policy enforcement. Limitations
- SCPs do not grant permissions; they only limit what is allowed.
- Not all AWS services fully support AWS Organizations features.
- Changes to SCPs can impact account operations immediately.
- Accounts can only belong to one organization at a time.

### 💡 Casos de Uso Típicos / Use Cases

- Centralized billing for multiple AWS accounts.
- Enforcing security policies across a multi-account environment.
- Isolating workloads by account (e.g., dev, test, prod).
- Simplifying compliance and governance reporting.
- Sharing resources securely across accounts with AWS RAM.

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- SCPs are used to enforce permission boundaries, not grant permissions.
- Management account has full admin control over the organization.
- Consolidated billing allows sharing volume discounts and centralized payment.
- Organizational Units (OUs) enable applying policies to groups of accounts.
- AWS Organizations integrates tightly with AWS Control Tower, RAM, and IAM Identity Center.
- Tag Policies ensure consistent tagging across accounts.
- Backup Policies automate and enforce backup plans organization-wide.

### 📝 Resumen Rápido / Quick Summary

AWS Organizations helps you centrally manage, secure, and govern multiple AWS accounts by
grouping them into Organizational Units, enforcing Service Control Policies, enabling
consolidated billing, and integrating with IAM Identity Center, AWS Control Tower, and AWS
RAM for streamlined multi-account management.

## <a id="aws-proton"></a>🔹 AWS Proton
*(Página 168 del Handbook)*


### 📌 ¿Qué es? / What It Is

AWS Proton is a managed delivery service for provisioning and deploying container-based and
serverless applications. It helps platform teams define standard stacks (infrastructure + CI/CD
pipelines) as templates, and developers deploy services from those templates, so you get
consistency, speed and governance.

### ⚙️ Características Clave / Key Features

- **Template-based architecture:** supports Environment Templates (shared infrastructure) and Service Templates (application stacks)
- **Infrastructure as Code support:** Works with AWS CloudFormation and Terraform for provisioning
- **Versioned templates:** Define major/minor versions of templates; enforce standardization and upgrade paths
- **Template sync & Git integration:** Changes to template bundles in repositories can automatically create new versions
- Automated CI/CD pipeline provisioning along with infrastructure for each service instance
- **Environment provisioning options:** AWS-managed, self-managed, and cross-account environments Core Concepts & Components
- Environment Template – Defines shared infrastructure used by many services (VPCs, clusters, load balancers)
- Service Template – Blueprint for a specific application or micro-service stack, including infrastructure and deployment pipeline
- Service Instance – A deployed instance of a Service Template within an Environment
- Component – Optional additional infrastructure that attaches to a service instance
- Template Bundle – ZIP/Y AML bundle stored in S3 or Git repo containing IaC files, manifest, and schema for templates
- Template Versions – Minor versions are backward-compatible, while major versions may introduce breaking changes Security, Governance & Cost
- Centralized control ensures developers use only approved architecture
- IAM roles and policies manage access to template registration, deployments, and environment management
- No additional Proton service cost, you pay only for the AWS resources provisioned by your templates
- Great for compliance and infrastructure standardization, preventing configuration drift

### 💡 Casos de Uso Típicos / Use Cases

- Platform teams want to define standardized micro-service stacks (containers/serverless) and allow self-service deployments → Use Proton
- Enforcing architecture standards and rolling out updates across many micro-services → Proton’s version control fits perfectly
- Need automated provisioning of both infrastructure and CI/CD pipelines for each new service → Proton handles both seamlessly

### ⭐ Buenas Prácticas / Best Practices

- Keep environment and service templates modular and easy to maintain
- Use versioning to handle infrastructure evolution and migration between template versions
- Integrate Proton with CloudFormation or Terraform for seamless DevOps workflows
- Continuously monitor deployments, automate updates, and track template drift

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- **Keyword clues:** “self-service deployment”, “standardized templates” , “automated CI/CD”, “versioned templates”
- Proton is delivery-oriented, not just IaC, adds governance and self-service to infrastructure
- Don’t confuse Proton with Service Catalog (which manages approved product stacks) or plain CloudFormation (which provisions resources)
- For questions about “governed, standardized app deployments at scale” → Proton is the answer

### 📝 Resumen Rápido / Quick Summary

AWS Proton helps teams standardize, automate, and manage deployment of containerized and
serverless applications. It bridges the gap between DevOps automation and platform
governance, empowering developers to deploy while keeping control centralized.

## <a id="aws-service-catalog"></a>🔹 AWS Service Catalog
*(Página 170 del Handbook)*


### 📌 ¿Qué es? / What It Is

AWS Service Catalog lets you create, manage and distribute a catalog of approved AWS-resource
“products” (stacks, services, templates) to end-users. Administrators define what resources are
approved, bundled, and how they can be used; end-users deploy from the catalog within
guardrails.

### ⚙️ Características Clave / Key Features

- **Standardization of assets:** Administrators define products via CloudFormation templates, version them, bundle them into portfolios.
- **Self-service discovery & launch:** End-users browse available products, launch with constrained parameters.
- **Fine-grained access control:** IAM + launch constraints, template constraints, tag update constraints.
- **Versioning & sharing:** Products can have active/inactive versions; portfolios can be shared across accounts.

### 🧩 Conceptos Centrales / Core Concepts

- **Product:** A CloudFormation template (or packaged AWS Marketplace offering) that defines one or more AWS resources.
- **Portfolio:** A collection of products, with configuration for who can access/deploy them, constraints applied, tags inherited.
- **Versions:** Each product can have multiple versions; you manage active/inactive/deleted states.
- **Constraints:** Template constraints (limit parameters), launch constraints (specify IAM role used when product is deployed), notification constraints (SNS notifications on stack events), tag update constraints (whether end-user can change tags).
- **Service Actions:** Additional actions end-users can perform on provisioned products (for example, run a System’s Manager document, update resources).
- **AppRegistry (integration):** Manage application metadata, attribute groups, associating stacks/provisioned products with applications for visibility. Security & Governance & Cost
- Works with IAM for who can create/edit catalogs, portfolios, access products.
- Data in S3/DynamoDB used under the hood is encrypted at rest; communication via TLS.
- Integration with CloudTrail for auditing provisioning and changes.
- **Pricing:** Free tier includes first 1,000 API calls per month; charge starts on API usage beyond free tier.
- Because products often create AWS resources via CloudFormation, underlying resource cost still applies.

### 💡 Casos de Uso Típicos / Use Cases

- Large organization wants to standardize infrastructure for developers; teams can only deploy approved stacks with preset configurations → Use Service Catalog.
- You want self-service provisioning by developers but still enforce governance (tagging policies, resource types, network configurations) → Use Service Catalog.
- **Multi-account architecture:** Central team shares portfolios into multiple accounts; each account uses same approved products → Service Catalog supports cross-account sharing.
- Track and manage application metadata across multiple stacks and accounts with AppRegistry integration → Service Catalog + AppRegistry.

### ⭐ Buenas Prácticas / Best Practices

- Define clear portfolios aligned with environments (dev/test/prod) and user roles.
- Use launch constraints and template constraints to restrict parameters (e.g., instance type, storage size) so you maintain cost control and compliance.
- Use versioning for product templates: when an update is needed, create new version, mark old inactive, migrate existing instances carefully.
- **Integrate with tagging strategy:** when launching a product, tags from portfolio should propagate into all underlying resources for tracking and cost allocation.
- **Combine with automation:** Use CloudFormation templates for products, integrate Service Catalog into CI/CD so updates go through code and review.
- Monitor usage of products, ensure resources spun via Service Catalog follow policies (cost, security).

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Differentiate from simple CloudFormation: While CloudFormation defines infrastructure, Service Catalog manages distribution and governance of those defined infrastructures.
- **Recognize key terms:** Product, Portfolio, Version, Constraints, Provisioned Product.
- If question involves multi-account distribution of standard stacks, Service Catalog is a strong candidate.

### 📝 Resumen Rápido / Quick Summary

AWS Service Catalog allows you to create, manage and distribute a curated set of infrastructure
products (via CloudFormation templates) so that developers or end-users can deploy what they
need, but only what you’ve approved and configured. Think of it as a governed store of
architecture blueprints: you get consistency, control, compliance; developers get self-service. On
the SAA exam: when you see self-service provisioning + standardization + guardrails, the
answer often points to Service Catalog.
AWS Systems Manager (SSM)

### 📌 ¿Qué es? / What It Is

- A centralized operations hub to manage infrastructure and systems on AWS and on- premises.
- Helps with automation, patching, inventory, monitoring, configuration, and remote command execution. Key Capabilities:

### 1. SSM Agent

- Installed on EC2 or on-prem machines.
- Enables Systems Manager to communicate with the instance.

### 2. Session Manager

- Secure shell access (SSH-like) to EC2 instances without needing a bastion host or open ports.
- Uses IAM permissions.
- Fully auditable with CloudTrail and CloudWatch Logs.

### 3. Run Command

- Run shell scripts or PowerShell commands across multiple EC2 or on-prem instances without logging in.
- Requires SSM Agent and appropriate IAM permissions.

### 4. Automation

- Automate repetitive tasks like instance start/stop, patching, backups.
- Use Automation Documents (runbooks) can be prebuilt or custom.

### 5. Patch Manager

- Automates OS patching for EC2 and on-prem.
- You can set patch baselines and maintenance windows.

### 6. Parameter Store

- Store configuration data and secrets securely.
- Supports plain text and encrypted (via KMS) values.
- Used by Lambda, EC2, and other services for dynamic configuration.

### 7. Inventory

- Collect metadata from EC2/on-prem instances (e.g., installed apps, network config).
- Helps with compliance and visibility.

### 8. State Manager

- Maintain desired state configuration (like enforcing antivirus installation or NTP settings).
- Applies configs continuously or at a schedule.

### 9. OpsCenter

- Central dashboard for operational issues (OpsItems).
- Integrated with CloudWatch and Config for diagnostics.

### 10. Change Manager

- Manage and approve infrastructure changes with built-in change control workflows. Use Cases:
- Patch and maintain EC2 fleets at scale.
- Secure, auditable remote instance management.
- Store secrets and config outside of code.
- Automate AMI creation, backups, and compliance tasks.
- Replace bastion hosts and SSH with Session Manager. Security & IAM:
- IAM policies control access to SSM documents, session access, and parameter values.
- All actions can be logged via CloudTrail.
- Parameter Store encryption via KMS. Pricing:
- Core features are free (Run Command, Session Manager, Parameter Store - Standard tier).
- Advanced features like Parameter Store (Advanced), OpsCenter integrations, and Automation steps may incur cost. Exam Tips:
- Use Session Manager instead of SSH for secure, auditable access.
- Use Run Command for quick multi-instance operations.
- Parameter Store stores secrets/configs; encrypt with KMS.
- Patch Manager automates patch compliance.
- Automation uses runbooks to automate tasks.
- SSM Agent must be installed and running on instances for SSM to work.

### 📝 Resumen Rápido / Quick Summary

AWS Systems Manager provides a single interface for managing infrastructure securely and at
scale automating tasks, maintaining compliance, and avoiding the need for manual SSH or
custom scripts.

## <a id="aws-trusted-advisor"></a>🔹 AWS Trusted Advisor
*(Página 174 del Handbook)*


### 📌 ¿Qué es? / What It Is

AWS Trusted Advisor is an online resource that provides real-time guidance to help you
provision your AWS resources following best practices. It offers recommendations to optimize
your AWS environment for cost, performance, security, fault tolerance, and service limits.

### ⚙️ Características Clave / Key Features

- Scans your AWS account and provides actionable recommendations
- **Covers five categories:** Cost Optimization, Performance, Security, Fault Tolerance, and Service Limits
- Continuously evaluates AWS infrastructure against AWS best practices
- Recommendations are prioritized and actionable
- Dashboard provides a central view of checks and recommendations Five Categories of Checks
- **Cost Optimization:** Identify idle and underutilized resources to reduce costs. Examples include underutilized EC2 instances, unattached EBS volumes, and idle load balancers.
- **Performance:** Improve the performance of AWS services. Includes checks for instance type optimization and usage of provisioned IOPS.
- **Security:** Strengthen security by identifying vulnerabilities. Examples include checks for MFA on root accounts, S3 bucket permissions, IAM password policies, and security group configurations.
- **Fault Tolerance:** Increase availability and redundancy. Checks include enabling Auto Scaling, monitoring EBS snapshots, and using multiple AZ deployments.
- **Service Limits:** Tracks usage against AWS service limits to avoid disruptions. Includes checks for EC2 instance limits, VPC limits, and others. Available Checks
- Over 50 checks covering various AWS services
- Checks are regularly updated and improved by AWS
- Some checks are available to all customers, while full set requires Business or Enterprise Support Plan Access Tiers
- **Basic and Developer Support Plans:** Access to seven core checks
- Business and Enterprise Support Plans: Access to all Trusted Advisor checks
- Core checks available to all customers include: Service Limits, Security Groups - Specific Ports Unrestricted, IAM Use, MFA on Root Account, EBS Public Snapshots, RDS Public Snapshots, and S3 Bucket Permissions
Dashboard
- Displays overall check status with color codes (green, yellow, red)
- Summarizes findings across all categories
- Links directly to AWS Console to act on recommendations
- Can export reports of recommendations Notifications and Alerts
- Weekly email notifications with updated recommendations
- Alerts about changes in check status
- Helps maintain awareness of evolving best practices and environment changes Programmatic Access
- Trusted Advisor API available for Business and Enterprise Support plans
- Enables automation and integration of recommendations into custom workflows
- Can retrieve results for specific checks or all checks programmatically Integration with AWS Organizations
- AWS Organizations support allows consolidated view of Trusted Advisor recommendations across multiple accounts
- Helps central teams manage best practices compliance for entire organization Security and Privacy
- Only analyses metadata and usage patterns, not customer data contents
- Recommendations are specific to your account and are only accessible by authorized IAM users

### 💵 Precios y Costos / Pricing

- No additional cost for Basic access tier (includes seven core checks)
- Full access to all checks requires Business or Enterprise Support Plan
- Cost included in AWS Support plan pricing

### 💡 Casos de Uso Típicos / Use Cases

- Cost savings by identifying idle or underused resources
- Improving security posture by enforcing best practices
- Avoiding service disruptions by monitoring service limits
- Ensuring highly available and fault-tolerant architectures
- Maintaining performance optimization across workloads

### ⭐ Buenas Prácticas / Best Practices

- Review Trusted Advisor dashboard regularly
- Act on high-priority recommendations promptly
- Automate remediation for common issues where possible
- Integrate Trusted Advisor with AWS Organizations for central visibility
- Use Trusted Advisor API to build custom monitoring and reporting solutions

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Trusted Advisor provides real-time recommendations across five categories
- Full set of checks is available only with Business and Enterprise Support plans
- Core checks are available to all AWS customers
- Supports API access for automation
- Integrates with AWS Organizations for multi-account management
- **Key categories to remember:** Cost Optimization, Performance, Security, Fault Tolerance, Service Limits

### 📝 Resumen Rápido / Quick Summary

AWS Trusted Advisor is a best-practice assessment tool that provides real-time guidance to help
optimize cost, improve performance, enhance security, ensure fault tolerance, and monitor
service limits across your AWS environment. It is a critical tool for keeping AWS deployments
efficient, secure, and compliant.

## <a id="aws-well-architected-tool"></a>🔹 AWS Well-Architected Tool
*(Página 177 del Handbook)*


### 📌 ¿Qué es? / What It Is

AWS Well-Architected Tool is a free service that helps you review and improve your cloud
workloads using AWS best practices. It guides you through AWS’s Well-Architected
Framework, making it easier to identify risks and track improvements over time.

### ⚙️ Características Clave / Key Features

- Provides a structured approach to reviewing workloads
- Helps evaluate workloads against AWS Well-Architected Framework best practices
- Supports consistent, repeatable reviews across teams
- Stores review history for tracking improvement progress
- Offers improvement plans for mitigating identified risks
- Accessible through the AWS Management Console AWS Well-Architected Framework
- Foundation for the Tool’s assessments
- **Consists of six pillars:** 
  - **Operational Excellence:** Running and monitoring systems to deliver business value
  - **Security:** Protecting data, systems, and assets
  - **Reliability:** Ensuring workloads perform as intended and can recover quickly
  - **Performance Efficiency:** Using resources efficiently to meet requirements
  - **Cost Optimization:** Avoiding unnecessary costs
  - **Sustainability:** Minimizing environmental impacts of workloads
- Each pillar has design principles and best practices Workload Reviews
- Define and document workloads to review
- Answer a set of best-practice questions across all six pillars
- Questions help identify high-risk and medium-risk issues
- Add custom lenses to tailor reviews to specific industry or organizational needs Improvement Plans
- Tool generates prioritized improvement plans based on risks found
- Provides recommendations with direct links to AWS documentation
- Tracks completed and pending improvements
- Supports collaborative team review and remediation
Lenses
- Extend the framework with additional guidance for specific workload types or industries
- AWS provides lenses for Serverless, SaaS, Machine Learning, IoT , and more
- Custom lenses can be created for organization-specific standards
- Lenses add additional questions and best practices beyond the core framework Integration with AWS Services
- AWS Organizations integration for sharing workload reviews across accounts
- AWS Service Catalog integration to ensure workloads meet Well-Architected standards before deployment
- Can use AWS IAM for fine-grained permissions to control access to workload reviews Reporting and Tracking
- Stores all reviews and improvements in the AWS account
- Offers comparison over time to track progress
- Can download reports in PDF format for audits and internal reviews
- Highlights trends in risk status and completed improvements Security and Access Control
- Uses AWS IAM for managing user permissions
- Supports resource-level permissions for controlling who can view or modify reviews
- All data is encrypted in transit and at rest using AWS encryption standards

### 💵 Precios y Costos / Pricing

- Free to use within the AWS Management Console
- Improvement plans may recommend using other AWS services that have separate costs

### 💡 Casos de Uso Típicos / Use Cases

- Conducting design and architecture reviews for workloads
- Identifying risks before production deployment
- Auditing existing workloads for compliance with best practices
- Standardizing architecture review processes across teams
- Supporting migration readiness assessments

### ⭐ Buenas Prácticas / Best Practices

- Review workloads early and often, especially before production deployment
- Involve cross-functional teams (developers, architects, security, operations) in reviews
- Use improvement plans to prioritize and track remediation
- Store review history for compliance and continuous improvement
- Leverage lenses to tailor reviews to workload types and industry needs

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- AWS Well-Architected Tool helps evaluate workloads against the Well-Architected Framework
- Supports six pillars, including the newer Sustainability pillar
- Identifies high-risk and medium-risk issues and generates improvement plans
- Offers custom lenses for industry-specific best practices
- Free to use in the AWS Console but may recommend services with additional costs
- Can integrate with AWS Organizations for multi-account management
- Ideal for ensuring workloads are secure, reliable, efficient, and cost-optimized

### 📝 Resumen Rápido / Quick Summary

AWS Well-Architected Tool enables consistent, structured reviews of workloads against
AWS’s best practices, helping teams identify and prioritize risks, implement improvements,
and track architectural progress over time. It supports custom lenses, integrates with AWS
Organizations, and provides reporting features for ongoing compliance and optimization.

---

### 🧭 Navegación
- [⬅️ Volver al Índice Principal del Handbook](README.md)
- [📚 Volver al Repositorio Maestro SAA-C03](../README.md)