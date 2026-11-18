# 🛡️ Seguridad, Identidad, Cifrado y Cumplimiento | Security, Identity & Compliance
**Handbook AWS Certified Solutions Architect – Associate (SAA-C03)**

> **🎯 Mapeo de Examen:** Dominio 1: Design Secure Architectures (30% - Ponderación Máxima)
> **📄 Páginas en el PDF Original:** 226 a 270 (Total: 45 páginas)

### 📋 Descripción General
Control de acceso granular (IAM), gestión centralizada de llaves de cifrado (KMS, CloudHSM), protección perimetral (WAF, Shield), detección inteligente de amenazas (GuardDuty, Inspector, Macie, Detective) y bóveda de secretos (Secrets Manager).

### 🗺️ Índice de Servicios en esta Categoría
| Servicio AWS | Página PDF | Acceso Rápido |
| :--- | :---: | :--- |
| **AWS Artifact** | p. 226 | [Ver Ficha Técnica](#aws-artifact) |
| **AWS Audit Manager** | p. 228 | [Ver Ficha Técnica](#aws-audit-manager) |
| **AWS Certificate Manager (ACM)** | p. 231 | [Ver Ficha Técnica](#aws-certificate-manager-acm) |
| **AWS CloudHSM** | p. 233 | [Ver Ficha Técnica](#aws-cloudhsm) |
| **AWS Key Management Service (AWS KMS)** | p. 235 | [Ver Ficha Técnica](#aws-key-management-service-aws-kms) |
| **Amazon Cognito** | p. 237 | [Ver Ficha Técnica](#amazon-cognito) |
| **Amazon Detective** | p. 240 | [Ver Ficha Técnica](#amazon-detective) |
| **AWS Directory Service** | p. 242 | [Ver Ficha Técnica](#aws-directory-service) |
| **AWS Firewall Manager** | p. 246 | [Ver Ficha Técnica](#aws-firewall-manager) |
| **Amazon GuardDuty** | p. 248 | [Ver Ficha Técnica](#amazon-guardduty) |
| **AWS Identity and Access Management (IAM)** | p. 250 | [Ver Ficha Técnica](#aws-identity-and-access-management-iam) |
| **Amazon Inspector** | p. 254 | [Ver Ficha Técnica](#amazon-inspector) |
| **Amazon Macie** | p. 256 | [Ver Ficha Técnica](#amazon-macie) |
| **AWS Network Firewall** | p. 258 | [Ver Ficha Técnica](#aws-network-firewall) |
| **AWS Resource Access Manager (AWS RAM)** | p. 260 | [Ver Ficha Técnica](#aws-resource-access-manager-aws-ram) |
| **AWS Secrets Manager** | p. 263 | [Ver Ficha Técnica](#aws-secrets-manager) |
| **AWS Security Hub** | p. 265 | [Ver Ficha Técnica](#aws-security-hub) |
| **AWS Shield** | p. 267 | [Ver Ficha Técnica](#aws-shield) |
| **AWS WAF** | p. 269 | [Ver Ficha Técnica](#aws-waf) |

---


## <a id="aws-artifact"></a>🔹 AWS Artifact
*(Página 226 del Handbook)*


### 📌 ¿Qué es? / What It Is

- A self-service portal for accessing AWS compliance-related documents, like:
  - Audit reports
  - Security and compliance certifications
  - Agreements (e.g., HIPAA BAA, GDPR DPA)

### ⚙️ Características Clave / Key Features

Two Main Types of Content
- **Artifact Reports:** 
  - Downloadable compliance reports such as: ▪ SOC 1, SOC 2, SOC 3 ▪ ISO certifications ▪ PCI DSS, etc.
  - Verifies AWS's compliance with various industry standards.
- **Artifact Agreements:** 
  - Let you review and accept legal agreements like: ▪ Business Associate Addendum (BAA) for HIPAA ▪ GDPR Data Processing Addendum (DPA) Key Benefits
- Provides transparency into AWS’s compliance posture.
- Helps customers with their own audit, risk, and compliance programs.
- No need to contact AWS Support for reports, self-service access. Security & Access
- IAM policies control who can download or accept agreements.
- All activity is logged in AWS CloudTrail for auditing.

### 💡 Casos de Uso Típicos / Use Cases

- Auditors reviewing AWS’s compliance before migrating sensitive workloads.
- Businesses needing official proof of AWS compliance (e.g., SOC reports).
- Organizations requiring legal agreements like HIPAA BAA or GDPR DPA before storing regulated data.

### 💵 Precios y Costos / Pricing

- AWS Artifact is free to use.

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- AWS Artifact = compliance documents and agreements portal.
- Use it to get SOC, ISO, PCI, and other audit reports.
- Accept HIPAA BAA and GDPR DPA agreements in Artifact.
- IAM can control access; CloudTrail logs activity.
- Available as a self-service tool, no AWS support ticket needed.

### 📝 Resumen Rápido / Quick Summary

AWS Artifact is a free self-service portal that provides access to AWS compliance reports and
agreements (e.g., SOC, ISO, HIPAA BAA, GDPR DPA), helping customers meet regulatory and
audit requirements.

## <a id="aws-audit-manager"></a>🔹 AWS Audit Manager
*(Página 228 del Handbook)*


### 📌 ¿Qué es? / What It Is

AWS Audit Manager is a service that helps you continuously audit AWS usage to simplify risk
assessments and compliance with regulations and industry standards. It automates evidence
collection to reduce manual effort and maintain audit readiness.

### ⚙️ Características Clave / Key Features

- Automates evidence collection for audits
- Supports prebuilt frameworks for common compliance standards (e.g., CIS, GDPR, PCI DSS, HIPAA)
- Custom frameworks to meet internal or industry-specific requirements
- Mapping of AWS resources and configurations to control requirements
- Continuous monitoring to maintain audit readiness
- Evidence stored securely and organized for auditor review Assessment Frameworks
- Prebuilt frameworks cover common compliance standards
- Custom frameworks can be built from scratch or by modifying existing frameworks
- Controls defined within frameworks specify what evidence to collect and how to evaluate it
- Mapping of controls to AWS resources ensures relevant evidence is gathered Assessments
- Created from frameworks to evaluate specific environments or accounts
- Define scope by selecting AWS accounts and services
- Automates collection of evidence based on defined controls
- Ongoing assessments provide continuous visibility into compliance posture Evidence Collection
- Automatic collection from AWS services and resources
- Manual evidence upload supported for non-AWS resources or custom requirements
- Evidence includes configuration snapshots, policies, logs, and API activity
- Evidence is time-stamped and organized by control for easy auditor access
- Supports export of evidence to AWS S3 for long-term storage or sharing Continuous Auditing
- Ongoing monitoring ensures compliance posture is maintained
- Tracks changes over time, enabling identification of noncompliance as it occurs
- Reduces point-in-time audit preparation burden
- Facilitates proactive remediation of issues Integrations
- AWS Organizations to manage multi-account environments
- AWS CloudTrail for capturing API activity
- AWS Config for resource configuration tracking
- AWS Security Hub for security findings and posture insights
- Amazon S3 for evidence storage and export Security and Access Control
- Evidence encrypted in transit and at rest
- IAM policies control access to Audit Manager features and assessments
- Integration with AWS Key Management Service (KMS) for encryption key management
- Fine-grained access permissions for team members and auditors Reporting and Exporting
- Downloadable evidence reports for auditors
- Export evidence to Amazon S3 buckets
- Organized evidence folders by control and assessment
- Facilitates external auditor access without exposing the entire AWS environment Supported Compliance Frameworks
- PCI DSS
- CIS AWS Foundations Benchmark
- HIPAA
- GDPR
- SOC 2
- ISO 27001
- Custom frameworks to meet internal requirements

### 💵 Precios y Costos / Pricing

- Charged per assessment per month
- Additional costs for storing evidence in S3
- Costs depend on volume of collected evidence and number of active assessments

### 💡 Casos de Uso Típicos / Use Cases

- Preparing for regulatory audits (PCI DSS, HIPAA, SOC 2, ISO 27001)
- Automating compliance evidence collection to reduce manual effort
- Continuous compliance monitoring across AWS accounts
- Supporting internal security and risk assessments
- Streamlining third-party auditor reviews with organized evidence

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- AWS Audit Manager automates evidence collection for compliance audits
- Supports both prebuilt and custom frameworks
- Integrates with AWS services like CloudTrail, Config, and Security Hub
- Evidence is securely collected, time-stamped, and exportable
- Helps maintain continuous compliance readiness rather than one-time audits
- Supports multi-account environments through AWS Organizations
- IAM controls and KMS integration ensure secure access and encryption

### 📝 Resumen Rápido / Quick Summary

AWS Audit Manager helps AWS customers simplify compliance and audit processes by
automating evidence collection, supporting standard and custom frameworks, and maintaining
continuous audit readiness with secure, organized, and exportable evidence.

## <a id="aws-certificate-manager-acm"></a>🔹 AWS Certificate Manager (ACM)
*(Página 231 del Handbook)*


### 📌 ¿Qué es? / What It Is

- A fully managed AWS service that provisions, manages, and deploys SSL/TLS certificates.
- Used to secure websites, applications, APIs, and other endpoints.

### ⚙️ Características Clave / Key Features


### 1. Free Public Certificates

- You can request SSL/TLS certificates for use with:
  - Elastic Load Balancers (ALB/ELB)
  - Amazon CloudFront
  - Amazon API Gateway
- These public certificates are free and auto-renewed.

### 2. Private Certificates (ACM PCA)

- Create and manage private CA (Certificate Authority).
- Use for internal applications, microservices, or VPN devices.
- Paid service with fine-grained control over private cert issuance.

### 3. Automatic Renewal

- ACM handles renewal and deployment of certs for supported AWS services automatically.
- Reduces manual overhead and downtime risk.

### 4. Integrated with AWS Services

- **Seamless integration with:** 
  - CloudFront
  - Elastic Load Balancers (ALB/CLB/NLB)
  - API Gateway
  - Elastic Beanstalk
  - AWS CloudFormation

### 5. Secure Key Management

- AWS manages the private key for the certificate.
- Customers cannot download or export private keys for public certs.
Validation Methods

### 1. DNS Validation (Recommended)

- You add a CNAME record in your DNS to prove domain ownership.
- Preferred for automation and renewal.

### 2. Email Validation

- Verification email sent to admin/contact/tech email of the domain.
- Manual and prone to expiration if not confirmed.

### 💡 Casos de Uso Típicos / Use Cases

- Securing web apps hosted on AWS with HTTPS.
- Protecting custom domains on CloudFront and API Gateway.
- Automating certificate lifecycle (renewals, deployments).
- Internal TLS usage via ACM Private CA.

### 💵 Precios y Costos / Pricing

- Public certificates are free.
- Private CA (ACM PCA) incurs cost based on CA hours and certificate issuance.

### 🔒 Seguridad y Cumplimiento / Security & Compliance

- AWS manages private keys securely.
- Certificates use 2048-bit RSA keys or ECDSA.
- Supports FIPS-compliant algorithms.

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Use ACM for SSL/TLS certificates on AWS services.
- Public certs = free + auto-renewed, but only usable with supported AWS resources.
- Use ACM PCA for issuing internal/private certs.
- Choose DNS validation for easier automation.
- For custom domain HTTPS on CloudFront, use ACM in the us-east-1 (N. Virginia) region.
- ACM does not support downloading the private key for public certs.

### 📝 Resumen Rápido / Quick Summary

AWS Certificate Manager provides free, automatically managed public certificates and scalable
private certificate authority services for securing your applications and services using SSL/TLS.

## <a id="aws-cloudhsm"></a>🔹 AWS CloudHSM
*(Página 233 del Handbook)*


### 📌 ¿Qué es? / What It Is

- Managed Hardware Security Module (HSM) service in AWS Cloud.
- Let’s you generate and use your own encryption keys using dedicated HSM appliances.
- Fully customer-controlled hardware for highest security and compliance requirements.

### ⚙️ Características Clave / Key Features

- Dedicated, single-tenant HSMs in your VPC.
- FIPS 140-2 Level 3 validated.
- You have full administrative control over the HSM.
- Supports standard cryptographic APIs: PKCS#11, Java JCE, Microsoft CNG.
- Scales horizontally, adds more HSMs to cluster.
- Automated backups for durability.
- Integrated with AWS services (though not as seamless as KMS).

### 🏗️ Cómo Funciona y Arquitectura / How It Works

- AWS provisions the HSM in your VPC.
- You manage users, keys, and policies directly.
- AWS manages maintenance, monitoring, backups.
- You connect securely to HSM using standard protocols.

### 💡 Casos de Uso Típicos / Use Cases

- Compliance requirements needing FIPS 140-2 Level 3 HSMs.
- Regulatory controls demanding customer-exclusive hardware.
- Managing PKI (Public Key Infrastructure).
- Secure key generation and storage.
- Offloading SSL/TLS termination.
- Code signing. Differences from AWS KMS
- KMS = AWS-managed service for encryption keys.
- CloudHSM = Customer-managed, dedicated hardware.
- KMS is simpler, integrated, easier for general use.
- CloudHSM is used when full control and strongest compliance are required.

### 💵 Precios y Costos / Pricing

- Pay per HSM instance hourly.
- Additional data transfer costs may apply.
- No upfront fees.

### 🔒 Seguridad y Cumplimiento / Security & Compliance

- FIPS 140-2 Level 3 validation.
- Customer controls all keys and operations.
- Data encrypted with keys never leaves the HSM unencrypted.
- AWS can’t access or recover customer keys.

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- CloudHSM = dedicated hardware, full customer control.
- Required for strict compliance and regulatory use cases.
- FIPS 140-2 Level 3 certified.
- **Compare to KMS:** KMS is simpler but AWS-managed.
- Used for PKI, code signing, SSL/TLS offload, secure key storage.
- Keys generated in CloudHSM stay under customer’s exclusive control.

### 📝 Resumen Rápido / Quick Summary

AWS CloudHSM is a fully managed hardware security module service that gives customers
dedicated, FIPS 140-2 Level 3 validated HSMs in their VPC for secure key management and
compliance.

## <a id="aws-key-management-service-aws-kms"></a>🔹 AWS Key Management Service (AWS KMS)
*(Página 235 del Handbook)*


### 📌 ¿Qué es? / What It Is

- Fully managed service to create, control, and manage encryption keys.
- Central service for encrypting data across AWS.
- Integrated with most AWS services (e.g., S3, EBS, RDS, Lambda, SQS).

### ⚙️ Características Clave / Key Features

- **Customer Master Keys (CMKs):** 
  - Main resources in KMS.
  - Can be AWS-managed, customer-managed, or imported.
  - Define permissions with IAM policies and key policies.
- **AWS-managed keys:** 
  - Simple, AWS handles everything.
  - Limited customization.
- **Customer-managed keys (CMKs):** 
  - Full control over lifecycle, rotation, and permissions.
  - Audit via AWS CloudTrail.
- **Envelope Encryption:** 
  - Encrypts data keys with CMKs.
  - Improves performance for large-scale encryption.
- **Integrated with AWS CloudTrail:** 
  - Logs all key usage for auditing and compliance.
- **Import Your Own Keys:** 
  - For compliance/regulatory needs.
- **Multi-Region Keys:** 
  - Replicate CMKs across regions for global apps.

### 🏗️ Cómo Funciona y Arquitectura / How It Works

- Apps call KMS API to encrypt/decrypt data or data keys.
- KMS never exposes plaintext of CMKs.
- Uses envelope encryption, data encrypted with data key, data key encrypted with CMK.

### 💡 Casos de Uso Típicos / Use Cases

- Encrypt S3 objects (SSE-KMS).
- Encrypt EBS volumes.
- Encrypt RDS databases.
- Lambda environment variables.
- Application-layer encryption with KMS APIs.
- Regulatory/compliance needs for key management.

### 💵 Precios y Costos / Pricing

- Pay per CMK stored monthly.
- Pay per KMS API request (encrypt, decrypt, generate data key).

### 🔒 Seguridad y Cumplimiento / Security & Compliance

- FIPS 140-2 validated HSMs used under the hood.
- Customer-defined access policies.
- CloudTrail logs for full visibility.
- Regionally isolated keys by default (except multi-region keys).

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- AWS KMS = central, managed key management.
- CMKs = AWS-managed or customer-managed.
- SSE-KMS = S3 objects encrypted with KMS keys.
- Integrated with many AWS services.
- Use CloudTrail for logging key usage.
- For full hardware control, use AWS CloudHSM.
- Envelope encryption = encrypt data keys with CMKs for performance and security.
- Import keys for strict compliance requirements.

### 📝 Resumen Rápido / Quick Summary

AWS KMS is the central service for creating and managing encryption keys across AWS, enabling
secure encryption of data at rest and in transit, with fine-grained control, auditing, and
integration with AWS services.

## <a id="amazon-cognito"></a>🔹 Amazon Cognito
*(Página 237 del Handbook)*


### 📌 ¿Qué es? / What It Is

Amazon Cognito is a fully managed service that provides authentication, authorization, and user
management for web and mobile apps. It allows developers to add user sign-up, sign-in, and
access control to applications securely and at scale.

### ⚙️ Características Clave / Key Features

- User sign-up and sign-in with customizable UI
- User pools for user directory management
- Federated identities to allow sign-in with social and SAML providers
- Secure token generation for authentication and authorization
- Integration with AWS IAM for access control to AWS resources
- Supports MFA and advanced security features
- User profiles and attributes storage User Pools
- Managed user directories to handle registration and authentication
- Supports email and phone number verification
- Built-in support for Multi-Factor Authentication (MFA)
- Password policies and account recovery settings
- Hosted UI for sign-up and sign-in flows
- Integration with social identity providers (Google, Facebook, Amazon, Apple)
- Integration with SAML 2.0 and OIDC providers
- Provides OAuth 2.0 endpoints for token-based authentication
- **Tokens:** ID Token, Access Token, Refresh Token
- Lambda triggers for customizing workflows (e.g., pre-sign-up, post-confirmation) Identity Pools (Federated Identities)
- Provide temporary AWS credentials for accessing AWS services
- Support sign-in with User Pools, social providers, SAML, OIDC, and unauthenticated guest access
- Integrates with AWS IAM roles for fine-grained access control
- Role mapping to assign different IAM roles based on user attributes or provider Authentication Flows
- User Pools manage authentication and generate JWT tokens
- Identity Pools exchange tokens for AWS credentials via STS
- Supports custom authentication challenges with AWS Lambda triggers
- OAuth 2.0 authorization code and implicit grant flows supported
- Secure token storage and management Security Features
- Multi-Factor Authentication (MFA) with SMS or TOTP apps
- Adaptive authentication and risk-based security
- Account recovery with email or phone number
- Encryption of data at rest and in transit
- AWS KMS integration for encryption keys
- Device tracking and remembered devices
- Advanced security features to detect compromised credentials and unusual sign-in attempts Integration with AWS Services
- **IAM:** Control access to AWS resources
- **API Gateway:** Use Cognito Authorizer to protect REST and WebSocket APIs
- **AWS AppSync:** Secure GraphQL APIs with Cognito authentication
- **Lambda:** Invoke functions with Cognito identities
- **S3:** Control object access based on user identities
- **Mobile SDKs:** iOS, Android, JavaScript, and more for integrating Cognito into apps Tokens and Sessions
- **ID Token:** Contains user profile information (JWT)
- **Access Token:** Used to authorize API calls
- **Refresh Token:** Used to obtain new ID and Access tokens
- Token expiration settings configurable in User Pool settings Deployment and Management
- Fully managed, scalable service
- Supports region-specific deployments
- User Pools and Identity Pools managed separately
- User data stored securely in AWS-managed directories
- Integrates with CloudWatch for monitoring and metrics

### 💵 Precios y Costos / Pricing

- **User Pools:** Charged based on Monthly Active Users (MAUs)
- Free tier includes 50,000 MAUs per month
- **Identity Pools:** Charges for AWS STS calls and data transfer
- Advanced Security Features priced separately

### 💡 Casos de Uso Típicos / Use Cases

- Add sign-up/sign-in to mobile and web applications
- Federate user access across social and enterprise identity providers
- Enable secure access to AWS resources for authenticated users
- Build serverless backends that authenticate and authorize users
- Implement Multi-Factor Authentication and advanced security controls

### ⭐ Buenas Prácticas / Best Practices

- Enable MFA for additional security
- Use custom domains for OAuth flows
- Store minimal sensitive data in user attributes
- Secure Lambda triggers with IAM permissions
- Use IAM roles with least privilege when granting AWS resource access
- Monitor metrics and logs with CloudWatch
- Rotate encryption keys regularly

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- User Pools manage user directories and authentication
- Identity Pools provide AWS credentials for resource access
- Supports social providers, SAML, OIDC for federated sign-in
- Integrates with API Gateway, AppSync, S3, Lambda
- Supports MFA and adaptive authentication
- Generates ID, Access, and Refresh tokens (JWT)
- Use IAM roles for access control based on identity
- Advanced security features help detect compromised credentials

### 📝 Resumen Rápido / Quick Summary

Amazon Cognito is a fully managed service for adding user sign-up, sign-in, and access control to
applications. It includes User Pools for managing user directories and authentication, and
Identity Pools for providing AWS credentials to authenticated users, with support for social,
SAML, and OIDC identity providers, MFA, and advanced security features.

## <a id="amazon-detective"></a>🔹 Amazon Detective
*(Página 240 del Handbook)*


### 📌 ¿Qué es? / What It Is

Amazon Detective is a fully managed security service that simplifies the process of investigating
potential security issues or suspicious activities. It automatically collects log data from AWS
resources and uses machine learning, statistical analysis, and graph theory to build interactive
visualizations for investigation.

### ⚙️ Características Clave / Key Features

- Automatically collects and organizes data from AWS CloudTrail, Amazon VPC Flow Logs, Amazon GuardDuty findings, and AWS Security Hub
- Creates a behaviour graph that links disparate pieces of security data for faster analysis
- Provides visualizations for entities like AWS accounts, EC2 instances, IAM users, and IP addresses
- Helps security teams quickly identify the root cause of incidents
- No need for manual data collection or complex querying
- Automatically updates and retains up to 12 months of security data
- Data is processed and stored in a graph model that enables efficient querying and visualization
- Integrates with Amazon GuardDuty for streamlined threat detection and investigation
- Maintains context over time, helping to understand changes in behaviour

### 🏗️ Cómo Funciona y Arquitectura / How It Works

- Ingests data from AWS security services (CloudTrail, VPC Flow Logs, GuardDuty, Security Hub)
- Organizes data into a linked set of entities in a graph model
- Provides dashboards and entity profiles to explore relationships and activity
- Investigators can navigate between entities, review timelines, and compare historical behaviour
- No agents or additional log forwarding is required Supported Data Sources
- AWS CloudTrail for API activity logs
- VPC Flow Logs for network traffic metadata
- Amazon GuardDuty for threat detection findings
- AWS Security Hub for additional context from security alerts Entity Types Analysed
- AWS Accounts
- EC2 Instances
- IAM Users and Roles
- IP Addresses Security Use Cases
- Investigate suspicious login activity or unauthorized access attempts
- Trace lateral movement and network anomalies
- Identify misconfigured permissions or policy changes
- Review behaviour before and after GuardDuty findings
- Understand long-term patterns for persistent threats Access and Permissions
- Integrated with AWS Organizations for centralized investigation
- Delegated administrator account can view behaviour across all member accounts
- IAM roles and policies control access to Amazon Detective

### 💵 Precios y Costos / Pricing

- Charged based on the volume of data ingested from supported sources
- No additional charge for querying or visualizing the data
- Data is retained for up to 12 months automatically

### ⭐ Buenas Prácticas / Best Practices

- Enable GuardDuty and Detective together for a unified threat detection and investigation workflow
- Use in combination with AWS Security Hub to centralize alerts
- Grant security teams read-only access to Amazon Detective dashboards
- Monitor key entities like IAM users and EC2 instances for unusual activity

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Amazon Detective is used for security investigations and root cause analysis
- Works by analysing CloudTrail, VPC Flow Logs, and GuardDuty findings
- Builds a behaviour graph to visualize entity relationships and changes over time
- No manual data collection is needed—data is ingested and correlated automatically
- Not used for real-time alerting, but for deep dive forensic analysis
- Complements, but does not replace, services like GuardDuty and Security Hub

### 📝 Resumen Rápido / Quick Summary

Amazon Detective helps security teams quickly investigate and understand the root cause of
security issues using visualized and correlated data from AWS security services. It reduces the
time and effort needed for analysis by automatically building a behaviour graph and providing
interactive dashboards for security-relevant entities.

## <a id="aws-directory-service"></a>🔹 AWS Directory Service
*(Página 242 del Handbook)*


### 📌 ¿Qué es? / What It Is

AWS Directory Service is a managed service that enables you to set up and run directories in the
AWS Cloud or connect AWS resources with existing on-premises Microsoft Active Directory
(AD).
It is essential for managing user access and enabling authentication for AWS resources and
applications.
Why Use AWS Directory Service
- Manage user authentication and authorization.
- Enable single sign-on (SSO) for AWS applications and services.
- Support Microsoft Active Directory-aware applications in AWS.
- Simplify management of user accounts, groups, and policies. Directory Types

### 1. AWS Managed Microsoft AD

- Actual Microsoft Active Directory deployed in AWS.
- AWS manages patching, replication, and maintenance.
- Supports trust relationships with on-premises AD.
- Ideal for full AD compatibility.
- **Features:** 
  - Kerberos and NTLM authentication.
  - Group Policy support.
  - AD-integrated applications (e.g., SQL Server, SharePoint).
  - MFA integration with AD FS.
- **Two editions:** 
  - **Standard Edition:** up to 5,000 objects.
  - **Enterprise Edition:** up to 500,000 objects.

### 2. AD Connector

- Proxy that connects AWS to your existing on-premises Active Directory.
- No directory data stored in AWS.
- Allows AWS services (e.g., EC2, WorkSpaces) to authenticate against on-premises AD.
- **Use Cases:** 
  - Leverage existing credentials.
  - Enable SSO to AWS Management Console.
- **Advantages:** 
  - Simple to set up.
  - Cost-effective, no AD infrastructure to manage in AWS.
- **Limitations:** 
  - Requires reliable network connectivity to on-premises AD.

### 3. Simple AD

- Standalone, AWS-managed directory based on Samba 4 Active Directory Compatible Server.
- Inexpensive option for smaller workloads.
- **Supports basic AD features:** 
  - User and group management.
  - Kerberos-based SSO.
- **Limitations:** 
  - Not as feature-rich as AWS Managed Microsoft AD.
  - No support for trust relationships.
- **Two sizes:** 
  - **Small:** up to 500 users.
  - **Large:** up to 5,000 users. Integration with AWS Services
- **Amazon WorkSpaces:** 
  - Integrates for user authentication.
- **Amazon WorkDocs:** 
  - Use existing AD users and groups.
- **Amazon WorkMail:** 
  - Native integration with AWS Managed Microsoft AD.
- **EC2 Windows Instances:** 
  - Domain join support.
- **AWS Single Sign-On (SSO):** 
  - Use Directory Service as an identity source.

### 🔒 Seguridad y Cifrado / Security

- **AWS Managed Microsoft AD:** 
  - Multi-AZ deployment for high availability.
  - Automated daily snapshots.
  - Supports AWS KMS encryption for data at rest.
  - Enforces strong password policies.
- **AD Connector:** 
  - No AWS-stored credentials.
  - Relies on on-premises AD security.
- **Simple AD:** 
  - Managed by AWS.
  - Basic security controls.

### 💵 Precios y Costos / Pricing

- **AWS Managed Microsoft AD:** 
  - Pay per domain controller hour.
  - Cost varies by edition (Standard vs. Enterprise).
- **AD Connector:** 
  - Pay per connector hour.
  - **Two sizes:** Small and Large.
- **Simple AD:** 
  - Pay per directory hour.
  - Cost depends on size (Small or Large).

### 💡 Casos de Uso Típicos / Use Cases

- Migrate on-premises Windows workloads to AWS while keeping existing AD integration.
- Enable centralized user management and authentication for AWS-based applications.
- Provide AD support for AWS WorkSpaces and WorkDocs.
- Simplify Windows instance domain joins in the cloud.
- Allow on-premises users to authenticate to AWS resources with existing credentials.

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- AWS Managed Microsoft AD is best for full AD support in AWS, including trust relationships.
- AD Connector is ideal if you want to reuse on-premises AD without storing AD data in AWS.
- Simple AD is for small, cost-sensitive environments with basic AD needs.
- AWS Managed Microsoft AD supports Kerberos, NTLM, Group Policy, and integrates with MFA and AD FS.
- AD Connector requires reliable network connectivity to on-premises AD.
- Directory Service integrates with WorkSpaces, WorkDocs, WorkMail, EC2 Windows, and AWS SSO.
- Supports high availability with multi-AZ deployments. Comparison Table Feature AWS Managed Microsoft AD AD Connector Simple AD Type Fully managed Microsoft AD Proxy to on-premises AD Standalone, Samba- based AD- compatible AWS-Hosted Directory Yes No Yes Trust Relationships Yes Uses on-premises AD trust No Group Policy Support Yes Via on-premises AD Limited Use Cases Full AD compatibility, hybrid environments Leverage existing AD without migration Small-scale AD needs, low cost Editions/Sizes Standard/Enterprise Small/Large Small/Large Typical Customers Enterprises with AD workloads Customers with existing AD wanting integration Small organizations with simple needs

### 📝 Resumen Rápido / Quick Summary

AWS Directory Service offers multiple ways to use or connect to Active Directory in AWS. AWS
Managed Microsoft AD provides a fully managed, highly available Microsoft AD in the cloud. AD
Connector links AWS resources to your on-premises AD without migrating it. Simple AD offers a
low-cost, standalone AD-compatible directory for smaller deployments.

## <a id="aws-firewall-manager"></a>🔹 AWS Firewall Manager
*(Página 246 del Handbook)*


### 📌 ¿Qué es? / What It Is

- A security management service that centrally configures and manages firewall rules across multiple AWS accounts and resources.
- Designed for AWS Organizations to enforce consistent security policies.

### ⚙️ Características Clave / Key Features


### 1. Centralized Security Policy Management

- Create security policies once and apply them across accounts and resources in your organization.
- Supports AWS Organizations integration, manage all member accounts from a central admin account.

### 2. Supported Security Services

- **AWS WAF:** Manage and deploy Web ACLs across accounts.
- **AWS Shield Advanced:** Apply advanced DDoS protection consistently.
- **AWS Network Firewall:** Define VPC-level traffic filtering rules.
- **VPC Security Groups:** Audit and remediate security group rules.
- **Route 53 Resolver DNS Firewall:** Manage DNS filtering policies.

### 3. Automatic Policy Enforcement

- New resources (e.g., ALBs, CloudFront distributions) automatically get the appropriate policies.
- Ensures compliance even as new accounts or resources are created.

### 4. Compliance Monitoring

- Continuously checks for policy compliance across all accounts.
- Flags and optionally remediates noncompliant resources.

### 5. Integration with AWS Organizations

- Firewall Manager can only work if your accounts are in an AWS Organization.
- **Policies can target:** 
  - Specific OUs (Organizational Units)
  - Entire Organization
  - Specific accounts

### 💡 Casos de Uso Típicos / Use Cases

- Enforcing consistent AWS WAF rules across all company websites.
- Automatically protecting new resources with AWS Shield Advanced.
- Centrally managing Network Firewall rules for all VPCs.
- Auditing and fixing overly permissive security groups.
- Applying DNS Firewall rules to block malicious domains.

### 🔒 Seguridad y Cumplimiento / Security & Compliance

- Helps meet enterprise security requirements for policy consistency.
- Reduces misconfigurations and drift across accounts.
- Provides visibility into security posture across the organization.

### 💵 Precios y Costos / Pricing

- AWS Firewall Manager charges based on:
  - Number of policies created.
  - AWS security services used (e.g., WAF, Shield Advanced, Network Firewall).
- Additional costs for underlying services (WAF rules, Shield Advanced, Network Firewall usage).

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Firewall Manager = central policy management across multiple accounts.
- Requires AWS Organizations to function.
- Supports AWS WAF, Shield Advanced, Network Firewall, Security Groups, and DNS Firewall.
- Auto-applies security policies to new resources.
- Monitors compliance and can remediate automatically.
- Great for enterprises with multi-account strategies.

### 📝 Resumen Rápido / Quick Summary

AWS Firewall Manager lets you centrally configure, deploy, and enforce security policies (WAF,
Shield Advanced, Network Firewall, Security Groups, DNS Firewall) across all AWS accounts in
an organization for consistent, automated security.

## <a id="amazon-guardduty"></a>🔹 Amazon GuardDuty
*(Página 248 del Handbook)*


### 📌 ¿Qué es? / What It Is

- Managed threat detection service that continuously monitors AWS accounts, workloads, and data for malicious or unauthorized activity.
- Uses machine learning, anomaly detection, and threat intelligence feeds.

### ⚙️ Características Clave / Key Features


### 1. Continuous Threat Detection

- **Monitors AWS resources for:** 
  - Unauthorized API calls.
  - Reconnaissance (port scanning, unusual login attempts).
  - Malware activity.
  - Data exfiltration attempts.
  - Cryptocurrency mining.

### 2. Data Sources Analysed

- **VPC Flow Logs:** Network traffic patterns.
- **AWS CloudTrail:** API activity across AWS accounts.
- **DNS Logs:** Domain name lookups.
- **Kubernetes Audit Logs (optional):** For Amazon EKS clusters.
- **Malware Scan:** (Optional feature) Scans EC2 workloads for malware.

### 3. Threat Intelligence Feeds

- Integrated AWS threat intelligence.
- Third-party threat intel feeds.
- Helps detect known malicious IPs, domains, and behaviours.

### 4. Findings

- Alerts called Findings describe suspicious activities.
- Classified by severity (Low, Medium, High).
- Includes recommended remediation steps.

### 5. Integration with AWS Security Hub

- Findings can be sent to AWS Security Hub for centralized security visibility.
- Integrates with AWS EventBridge for custom workflows and automation. Key Benefits:
- Fully managed, no need to deploy or maintain infrastructure.
- Continuous monitoring without performance impact on workloads.
- No agent required, works from AWS log data.
- Regional service with cross-account support via AWS Organizations.

### 💵 Precios y Costos / Pricing

- **Pay-as-you-go pricing:** 
  - Based on volume of analysed logs.
  - Malware scans billed per GB scanned.
- No upfront costs.

### 💡 Casos de Uso Típicos / Use Cases

- Detecting compromised EC2 instances running crypto-miners.
- Monitoring for unusual API calls that suggest account compromise.
- Flagging data exfiltration attempts via DNS or traffic anomalies.
- Centralized threat detection for multi-account environments.

### 🔒 Seguridad y Cumplimiento / Security & Compliance

- Supports AWS Organizations for multi-account monitoring.
- Findings logged to AWS CloudWatch Events / EventBridge for alerting and remediation.
- Helps meet compliance requirements for continuous monitoring.

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- GuardDuty = threat detection, not prevention.
- Analyses VPC Flow Logs, CloudTrail, DNS Logs, and Kubernetes Audit Logs.
- No agent installation required.
- Integrates with Security Hub, EventBridge, and AWS Organizations.
- Findings include severity levels and recommended remediation.
- Pay-as-you-go pricing with no upfront commitments.

### 📝 Resumen Rápido / Quick Summary

Amazon GuardDuty is a managed AWS service that continuously monitors AWS accounts and
workloads for malicious activity using threat intelligence and machine learning, delivering
actionable security findings with no infrastructure to manage.
AWS IAM

### 📌 ¿Qué es? / What It Is

- AWS Identity and Access Management (IAM) is a global AWS service that enables you to securely control access to AWS services and resources.
- Used to authenticate (who) and authorize (what they can do) in your AWS account. Key IAM Concepts

### 1. IAM Users

- Represents individual people or applications.
- Has credentials (passwords, access keys) for AWS access.
- Can be assigned permissions directly or via groups.

### 2. IAM Groups

- Collection of users.
- Attach policies to a group to grant permissions to all members.
- Simplifies permission management for multiple users.

### 3. IAM Roles

- Temporary credentials for AWS resources or users.
- **Used for:** 
  - EC2 instances accessing AWS services.
  - Cross-account access.
  - AWS services assuming roles.
  - Federated users via SAML, OIDC, or custom identity providers.
- No long-term credentials.

### 4. IAM Policies

- JSON documents defining permissions.
- Attached to users, groups, or roles.
- **Types:** 
  - **Managed Policies:** ▪ AWS-managed (created/maintained by AWS). ▪ Customer-managed (created by you).
  - **Inline Policies:** ▪ Embedded directly in a user, group, or role.

### 5.  IAM Policy Elements

- **Effect:** Allow or deny.
- **Action:** API operations permitted/denied.
- **Resource:** Targeted AWS resources.
- **Condition:** Optional, for fine-grained control.

### 6. IAM Permissions Boundaries

- Advanced feature that limits maximum permissions a role or user can have.
- Useful in delegating permissions without over-provisioning.

### 7. IAM Identity-Based vs Resource-Based Policies

- **Identity-based policies:** Attached to IAM users, groups, roles.
- **Resource-based policies:** Attached to resources (e.g., S3 bucket policies, Lambda function policies).
- Resource policies enable cross-account access.

### 8. IAM Access Analyzer

- Analyses policies to identify resources shared outside your account.
- Helps maintain least privilege by highlighting unintended access.

### 9. IAM Password Policy

- Enforces account-wide password rules for IAM users.
- Configure complexity, rotation, reuse prevention.

### 10. MFA (Multi-Factor Authentication)

- Adds an extra layer of security beyond username and password.
- **Supports:** 
  - Virtual MFA apps.
  - U2F security keys.
  - SMS MFA (less recommended).
- Recommended for the root user and privileged IAM users.

### 11. IAM Best Practices

- Enable MFA, especially on the root account.
- **Use least privilege:** Grant only the permissions needed.
- Rotate access keys regularly.
- Avoid using the root account for daily tasks.
- Use roles for EC2 instances instead of embedding access keys.
- Use AWS Organizations and Service Control Policies (SCPs) for multi-account setups.

### 12. IAM Roles for Service Accounts / Applications

- **EC2 Instance Profiles:** 
  - Attach IAM roles to EC2 instances.
  - Automatically provide temporary credentials via Instance Metadata Service (IMDS).
- **Lambda Execution Role:** 
  - Grants permissions for AWS Lambda functions to access other AWS services.
- **Cross-Account Roles:** 
  - Allow users in one AWS account to access resources in another.

### 13. Temporary Security Credentials

- IAM roles issue short-lived credentials via:
  - AWS Security Token Service (STS).
  - **Used for:** ▪ Cross-account access. ▪ Federation with external IdPs. ▪ AWS services assuming roles.

### 14. Federation and SSO

- IAM supports integration with external identity providers:
  - SAML 2.0 (e.g., Active Directory, Okta).
  - OIDC (e.g., Google).
  - AWS SSO (now AWS IAM Identity Center).
- Enables single sign-on for accessing AWS Console or CLI.

### 15. AWS Managed Policies vs Customer Managed Policies

- **AWS Managed Policies:** 
  - Pre-built by AWS.
  - Easy to use, less customizable.
  - Automatically updated by AWS.
- **Customer Managed Policies:** 
  - Fully customizable.
  - Created and maintained by your organization.

### 16. Service-Linked Roles

- Pre-defined roles linked directly to AWS services.
- Required for certain AWS service operations (e.g., ECS, Auto Scaling).
- Managed entirely by AWS.

### 17. IAM Credential Report

- CSV file listing all IAM users and their credentials.
- Includes details on passwords, access keys, and MFA status.
- Helps with auditing and compliance.

### 18. IAM Access Advisor

- Shows last used information for permissions.
- Helps identify unused permissions for least privilege enforcement.

### 💵 Precios y Costos / Pricing

- IAM itself is free.
- You pay for the underlying AWS resources you use.

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- IAM is global (not tied to a region).
- Roles = temporary credentials, no passwords or access keys.
- Policies define who can do what on which resources.
- Use least privilege everywhere.
- MFA strongly recommended for root and privileged users.
- IAM Access Analyzer = identify unintended external access.
- Use IAM roles for EC2, Lambda, and cross-account access.
- Federation enables SSO with external IdPs.

### 📝 Resumen Rápido / Quick Summary

AWS IAM is a global service for managing user access and permissions securely. It uses users,
groups, roles, and policies to control who can access what in AWS, with best practices like least
privilege, MFA, and credential rotation to ensure security.

## <a id="amazon-inspector"></a>🔹 Amazon Inspector
*(Página 254 del Handbook)*


### 📌 ¿Qué es? / What It Is

- Automated vulnerability management service that scans AWS workloads for software vulnerabilities and unintended network exposure.
- Helps maintain security and compliance by continuously assessing EC2, container images (ECR), and Lambda functions.

### ⚙️ Características Clave / Key Features

Automated, Continuous Scanning
- **Continuously scans for:** 
  - Operating system vulnerabilities (CVEs).
  - Application vulnerabilities.
  - Network reachability (exposure to the internet).
  - Container image vulnerabilities (Amazon ECR).
  - Lambda function code packages. Integration with AWS Services
- **EC2:** 
  - Scans installed packages, OS.
  - Checks network exposure.
- **Amazon ECR:** 
  - Scans container images for known vulnerabilities.
  - Continuous scanning on push.
- **AWS Lambda:** 
  - Scans function code for known vulnerabilities. Findings and Scoring
- **Generates security findings with:** 
  - CVE details.
  - Severity scores (CVSS-based).
  - Recommended remediation steps.
- Prioritizes by risk to help with patching. AWS Organizations Integration
- Supports multi-account environments.
- Central management of scans and findings across accounts.
Automated Remediation Workflows
- **Findings can be sent to:** 
  - AWS Security Hub.
  - Amazon EventBridge.
  - Custom remediation workflows. Key Benefits
- No manual assessment setup, fully managed.
- Continuous, automated vulnerability management.
- Integrates with AWS developer workflows (ECR, Lambda).
- Helps maintain compliance requirements.

### 💵 Precios y Costos / Pricing

- **Pay-as-you-go:** 
  - Based on number of EC2 instances, container images scanned, and Lambda function scans.
- No upfront costs.

### 💡 Casos de Uso Típicos / Use Cases

- Ensuring EC2 instances are patched against CVEs.
- Scanning container images before deployment.
- Identifying Lambda code vulnerabilities.
- Meeting security compliance frameworks (PCI DSS, CIS benchmarks).

### 🔒 Seguridad y Cumplimiento / Security & Compliance

- Helps enforce security best practices.
- Supports continuous vulnerability management.
- Findings integrate with Security Hub for centralized visibility.

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Amazon Inspector = vulnerability scanning, not threat detection.
- Continuous, automated scans for EC2, ECR containers, Lambda.
- Findings include CVE details, severity, remediation.
- Integrates with Security Hub and EventBridge.

### 📝 Resumen Rápido / Quick Summary

Amazon Inspector is an automated AWS service that continuously scans EC2 instances,
container images, and Lambda functions for software vulnerabilities and network exposure,
helping ensure secure and compliant workloads.

## <a id="amazon-macie"></a>🔹 Amazon Macie
*(Página 256 del Handbook)*


### 📌 ¿Qué es? / What It Is

- Managed data security and privacy service that uses machine learning to discover, classify, and protect sensitive data in Amazon S3.
- Designed to help detect PII (Personally Identifiable Information) and other sensitive data.

### ⚙️ Características Clave / Key Features

Automated Sensitive Data Discovery
- Continuously monitors and automatically discovers sensitive data in S3 buckets.
- Uses machine learning and pattern matching to identify:
  - PII (e.g., names, addresses, credit card numbers).
  - Financial data.
  - Credentials. Data Classification
- Classifies objects in S3 buckets based on sensitive data types.
- Built-in managed data identifiers (common PII patterns).
- Supports custom data identifiers for specific patterns. Security and Privacy Alerts
- Generates findings when sensitive data is detected.
- **Findings include:** 
  - Bucket name.
  - Object details.
  - Type of sensitive data.
  - Severity levels. S3 Bucket-Level Analysis
- Evaluates S3 bucket permissions.
- Identifies publicly accessible buckets or buckets shared with other accounts.
- Alerts on misconfigurations that could lead to data exposure. Integration with AWS Services
- Findings sent to AWS Security Hub for central visibility.
- EventBridge for automation workflows (e.g., remediation).
- AWS CloudWatch for alerting.
Key Benefits
- Fully managed, no infrastructure to deploy.
- Helps meet compliance requirements (GDPR, HIPAA, PCI DSS).
- Reduces risk of unintentional data exposure.
- Supports multi-account management via AWS Organizations.

### 💵 Precios y Costos / Pricing

- **Pay-as-you-go pricing:** 
  - Based on S3 buckets evaluated.
  - Volume of data processed for sensitive data discovery.
- No upfront costs.

### 💡 Casos de Uso Típicos / Use Cases

- Identifying sensitive data stored in S3 buckets.
- Monitoring S3 buckets for public access or sharing.
- Enforcing data security policies.
- Supporting compliance audits with automated reporting.

### 🔒 Seguridad y Cumplimiento / Security & Compliance

- Helps maintain data privacy standards.
- Integrates with AWS Organizations for multi-account governance.
- Supports CloudTrail logging for full auditing.

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Amazon Macie = S3 data discovery and classification.
- Detects PII and sensitive data automatically using ML.
- Evaluates S3 bucket permissions for public or cross-account access.
- Integrates with Security Hub, EventBridge, CloudWatch.
- Supports custom data identifiers for specific patterns.

### 📝 Resumen Rápido / Quick Summary

Amazon Macie is a fully managed service that automatically discovers, classifies, and protects
sensitive data in S3 using machine learning, helping ensure privacy, security, and compliance

## <a id="aws-network-firewall"></a>🔹 AWS Network Firewall
*(Página 258 del Handbook)*


### 📌 ¿Qué es? / What It Is

AWS Network Firewall is a managed service that provides customizable, stateful, and stateless
network traffic filtering for your Amazon VPC. It helps protect VPC networks by inspecting and
controlling inbound and outbound traffic at the subnet level.

### ⚙️ Características Clave / Key Features

- Managed, highly available, and scalable firewall service
- Supports both stateful and stateless inspection rules
- Deep packet inspection (DPI) and domain list rule groups
- Integration with AWS Firewall Manager for centralized management
- Supports Suricata-compatible rule sets for advanced inspection
- Provides logging to Amazon S3, CloudWatch, and Kinesis Data Firehose
- Automatically scales to meet traffic demands
- Built-in high availability within an Availability Zone Components
- **Firewall:** Defines the inspection policies and logging settings
- **Firewall Policy:** Contains rule groups and settings for traffic handling
- **Rule Groups:** Sets of stateless or stateful rules to inspect traffic
- **Stateless Rules:** Match criteria based on header fields without maintaining session state
- **Stateful Rules:** Track and inspect connection state for advanced filtering
- **Domain List Rules:** Allow or deny based on domain names in DNS traffic
- **Logging Configuration:** Define how flow logs and alert logs are sent to S3, CloudWatch Logs, or Firehose Traffic Flow
- Deployed in a VPC subnet using AWS Gateway Load Balancer or as a VPC ingress/egress filter
- Traffic is routed through the firewall endpoint for inspection
- Supports routing rules in route tables to redirect traffic to firewall endpoints

### 💡 Casos de Uso Típicos / Use Cases

- Protecting VPC subnets with inbound and outbound filtering
- Enforcing security policies across workloads in multiple accounts using AWS Firewall Manager
- Detecting and blocking known bad IP addresses and domains
- Preventing data exfiltration through domain-based filtering
Deployment
- Integrated with AWS Transit Gateway for centralized inspection of traffic between VPCs
- Can be deployed in individual VPCs for distributed architectures
- Automatically scales horizontally to meet throughput demands Logging and Monitoring
- Send alert and flow logs to S3, CloudWatch Logs, or Kinesis Data Firehose
- Supports detailed analysis and forensic investigations
- Integration with CloudWatch Metrics for monitoring throughput and packet counts Integration with Other AWS Services
- **AWS Firewall Manager:** Centrally configure and deploy firewall policies across accounts and VPCs in AWS Organizations
- **AWS Transit Gateway:** Integrate for centralized inspection of East-West and North-South traffic
- **Amazon VPC:** Direct integration for ingress and egress filtering
- **AWS Security Hub:** Aggregate findings and integrate with other security tooling

### 💵 Precios y Costos / Pricing

- Charged based on firewall endpoint hours and the amount of traffic processed
- Separate pricing for stateful and stateless rule evaluations
- Logging costs based on delivery to S3, CloudWatch Logs, or Firehose

### ⭐ Buenas Prácticas / Best Practices

- Use AWS Firewall Manager for multi-account, multi-VPC management
- Define clear segmentation in VPC subnets to control traffic flow
- Maintain and update Suricata-compatible rule sets to address evolving threats
- Enable logging for audit and compliance purposes

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- AWS Network Firewall provides stateful and stateless filtering at the VPC level
- Supports integration with AWS Firewall Manager for centralized policy enforcement
- Can inspect traffic between VPCs via Transit Gateway integration
- Scales automatically with traffic without user-managed infrastructure

### 📝 Resumen Rápido / Quick Summary

AWS Network Firewall is a fully managed, scalable service that delivers customizable traffic
filtering at the VPC level. It supports both stateful and stateless inspection, integrates with AWS
services like Firewall Manager and Transit Gateway, and provides logging for compliance and
auditing, helping secure AWS workloads against network threats.

## <a id="aws-resource-access-manager-aws-ram"></a>🔹 AWS Resource Access Manager (AWS RAM)
*(Página 260 del Handbook)*


### 📌 ¿Qué es? / What It Is

AWS Resource Access Manager (RAM) is a service that lets you securely share AWS resources
with other AWS accounts, within your organization (AWS Organizations), or with Organizational
Units (OUs).
It removes the need to duplicate resources across accounts, simplifying management and
reducing costs.
Why Use AWS RAM
- Centralize management of shared resources.
- Avoid duplication of resources across accounts.
- Enforce access controls and security boundaries.
- Facilitate multi-account architectures recommended by AWS.
- Reduce operational overhead in large organizations.

### 🧩 Conceptos Centrales / Core Concepts

- **Resource Share:** 
  - A container for resources you want to share.
  - Specifies which AWS accounts, Organizations, or OUs have access.
- **Principal:** 
  - The AWS accounts, OUs, or entire organization with which you share resources.
- **Managed Permissions:** 
  - Define what actions principals can perform on shared resources.
  - AWS provides default managed permissions for supported resource types. Supported Resource Types AWS RAM supports sharing of specific AWS resources across accounts. Examples include:
- VPC Subnets
  - Enables multiple accounts to launch resources into a shared subnet.
- Transit Gateways
  - Allows centralized routing across multiple accounts.
- Route 53 Resolver Rules
  - Enables sharing DNS resolution configurations.
- License Manager Configurations
  - Share software licenses across accounts.
- AWS Outposts
- AWS Network Firewall Policies
- Cloud WAN Core Network Policies
- Resource Groups
- Custom resources integrated with AWS Service Catalog

### 🏗️ Cómo Funciona y Arquitectura / How It Works


### 1. Create a Resource Share:

  - Choose the resources you want to share.
  - Select the principals (accounts, OUs, or the whole Organization).
  - Choose permissions.

### 2. Invitation Process:

  - If sharing outside your organization, the recipient must accept the invitation.
  - Within the organization, sharing is automatic (if sharing with AWS Organizations accounts).

### 3. Access and Usage:

  - Shared resources appear in recipient accounts.
  - Recipients can use shared resources as if they owned them, within permission boundaries. Sharing Types
- **Within Organization:** 
  - Simplest method.
  - Automatic access (no invitation/acceptance needed).
- **With Specific AWS Accounts:** 
  - Cross-account sharing even outside the organization.
  - Requires invitation acceptance.
- **Organizational Units (OUs):** 
  - Fine-grained control using AWS Organizations hierarchy. Permissions and Security
- AWS RAM uses AWS Identity and Access Management (IAM) for defining policies.
- Managed permissions help control actions on shared resources.
- Sharing is limited to supported resource types, preventing accidental oversharing. Monitoring and Auditing
- **AWS CloudTrail integration:** 
  - Records all AWS RAM API calls for audit and compliance.
  - Tracks sharing creation, modification, and deletion events.

### 💵 Precios y Costos / Pricing

- AWS RAM itself has no additional charges.
- You pay for the resources you create and use, even when shared.
  - **Example:** If you share a VPC subnet and someone launches an EC2 instance in it, that account pays for the EC2 instance.

### 💡 Casos de Uso Típicos / Use Cases

- **Centralized Network Management:** 
  - Share VPC subnets, Transit Gateways for consistent networking.
- **Hybrid Environments:** 
  - Centralize DNS resolution rules with Route 53 Resolver Rules.
- **Cost Optimization:** 
  - Avoid duplicating resources in multiple accounts.
- **License Management:** 
  - Share License Manager configurations to enforce license limits.
- Cloud WAN and Network Firewall Policies:
  - Enforce consistent network security policies across accounts.

### ⭐ Buenas Prácticas / Best Practices

- Use AWS Organizations for easier, scalable sharing.
- Apply least privilege principles when defining managed permissions.
- Tag shared resources for better tracking and cost allocation.

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- AWS RAM lets you share resources securely across AWS accounts and organizations.
- Resource Shares are the central mechanism: you pick resources and principals.
- Supports VPC subnets, Transit Gateways, Route 53 Resolver Rules, and other specific resources.
- Sharing within an AWS Organization does not require acceptance.
- Cross-account sharing outside the org requires invitation acceptance.

### 📝 Resumen Rápido / Quick Summary

AWS Resource Access Manager (AWS RAM) lets you securely share supported AWS resources
across accounts and organizations. It simplifies multi-account architectures by enabling central
resource management, reduces duplication, and enforces access control using IAM and AWS
Organizations.

## <a id="aws-secrets-manager"></a>🔹 AWS Secrets Manager
*(Página 263 del Handbook)*


### 📌 ¿Qué es? / What It Is

- A managed service that helps you store, manage, and retrieve secrets securely.
- Commonly used for database credentials, API keys, OAuth tokens, etc.
- Provides automatic rotation, fine-grained access control, and audit logging.

### ⚙️ Características Clave / Key Features


### 1. Secure Storage

- Secrets are encrypted at rest using AWS KMS.
- Automatically encrypted when stored, you can bring your own KMS key (CMK).

### 2. Automatic Rotation

- Supports automatic rotation of secrets using AWS Lambda.
- Prebuilt templates for common integrations (e.g., RDS, Redshift, Aurora).
- No downtime required during rotation.

### 3. Fine-Grained Access Control

- Use IAM policies and resource-based policies to control who can access specific secrets.
- Can restrict access to parts of a secret using IAM condition keys.

### 4. Audit and Monitoring

- Integrated with AWS CloudTrail, log every access and change.
- Supports CloudWatch for monitoring usage.

### 5. Cross-Account Access

- Supports secure sharing of secrets across AWS accounts using resource policies.

### 6. SDK and CLI Integration

- Retrieve secrets via API, SDK, or AWS CLI.
- Secrets are fetched at runtime, no need to hard-code credentials. Use Cases:
- Managing RDS credentials securely with automatic rotation.
- Replacing hardcoded secrets in code or environment files.
- Securely managing third-party API keys and tokens.
- Sharing secrets across environments or accounts.
Secrets Manager vs Parameter Store
Feature Secrets Manager Parameter Store (Standard Tier)
Rotation Built-in automatic rotation  Manual only
Secret type Designed for sensitive secrets Config data and secrets
Pricing Paid service Free (Standard), Paid (Advanced)
API rate limit Higher throughput Lower in standard tier
Encryption KMS KMS

### 🔒 Seguridad y Cifrado / Security

- Secrets encrypted with KMS at rest.
- IAM + Resource policies define access.
- Rotate secrets using Lambda functions.
- Audit all access via CloudTrail.

### 💵 Precios y Costos / Pricing

- Charged per secret stored per month.
- Additional cost per 10,000 API calls.
- Rotation incurs Lambda execution cost.

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Use Secrets Manager when secrets need automatic rotation.
- Do not hardcode credentials, fetch them securely via Secrets Manager API.
- Use Parameter Store for less sensitive, infrequently updated configs.
- Always configure KMS encryption and IAM access control.
- Know how Secrets Manager integrates with RDS for auto-rotation.

### 📝 Resumen Rápido / Quick Summary

AWS Secrets Manager is a secure and scalable service for storing and automatically rotating
sensitive secrets like database credentials, API keys, and tokens with full integration into AWS
security and monitoring tools.

## <a id="aws-security-hub"></a>🔹 AWS Security Hub
*(Página 265 del Handbook)*


### 📌 ¿Qué es? / What It Is

- Centralized security service that aggregates, organizes, and prioritizes security findings from multiple AWS services and partner tools.
- Provides a single pane of glass for your AWS security posture.

### ⚙️ Características Clave / Key Features


### 1.  Aggregated Security Findings

- **Collects findings from:** 
  - AWS services (e.g., GuardDuty, Inspector, Macie, Firewall Manager).
  - AWS Partner solutions (third-party security tools).
- Normalizes findings into a standard format for easy analysis.

### 2. Security Standards & Best Practices

- Built-in security standards to assess AWS resources:
  - CIS AWS Foundations Benchmark.
  - AWS Foundational Security Best Practices.
  - PCI DSS v3.2.1 standard.
- Runs automated checks against these standards.
- Generates findings for non-compliant resources.

### 3.  Consolidated Dashboard

- **Central view of:** 
  - Active findings.
  - Compliance status.
  - Historical trends.
- Easy filtering and sorting.

### 4.  Automated Response and Remediation

- Integrates with AWS EventBridge.
- Supports building custom remediation workflows.
- **Example:** Auto-remediate non-compliant security groups.

### 5.  Cross-Account & Multi-Region Aggregation

- View findings from multiple AWS accounts and regions in one place.
- Central security operations across an AWS Organization.
Integrates With
- AWS GuardDuty
- AWS Inspector
- AWS Macie
- AWS Firewall Manager
- AWS IAM Access Analyzer
- AWS Systems Manager
- AWS Config
- Third-party security solutions (via AWS Security Finding Format - ASFF)

### 🔒 Seguridad y Cumplimiento / Security & Compliance

- Helps meet audit and compliance requirements.
- Supports continuous security posture management.

### 💵 Precios y Costos / Pricing

- **Charged based on:** 
  - Number of security checks per account.
  - Volume of ingested findings.
- No upfront fees.

### 💡 Casos de Uso Típicos / Use Cases

- Centralize and simplify security management.
- Automate compliance checks against industry standards.
- Enable automated remediation for faster incident response.
- Provide executive-level visibility into AWS security posture.

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Security Hub = central dashboard for security findings.
- Supports CIS Benchmarks, AWS Best Practices, PCI DSS checks.
- Integrates with EventBridge for automated responses.
- Cross-account and multi-region aggregation.
- Findings are standardized using ASFF .

### 📝 Resumen Rápido / Quick Summary

AWS Security Hub is a centralized security service that aggregates, prioritizes, and standardizes
findings from AWS services and third-party tools to give a unified view of your security posture.
It continuously evaluates your AWS environment against industry standards like CIS, AWS Best
Practices, and PCI DSS, generating findings for non-compliance.

## <a id="aws-shield"></a>🔹 AWS Shield
*(Página 267 del Handbook)*


### 📌 ¿Qué es? / What It Is

- Managed Distributed Denial of Service (DDoS) protection for AWS resources.
- Defends against network and transport layer (Layer 3/4) and application layer (Layer 7) attacks.

### ⚙️ Características Clave / Key Features


### 1. AWS Shield Standard

- Included at no extra cost for all AWS customers.
- Automatic protection against common, most frequent DDoS attacks.
- **Protects services like:** 
  - Amazon CloudFront
  - Route 53
  - Elastic Load Balancer (ALB/NLB)
  - AWS Global Accelerator
- Always-on detection and automatic inline mitigation.
- No need to enable, always active.

### 2. AWS Shield Advanced

- Paid service with enhanced DDoS protection.
- Protects against larger and more sophisticated attacks.
- **Features include:** 
  - 24x7 access to the AWS DDoS Response Team (DRT).
  - Advanced attack detection and mitigation at application and network layers.
  - Protection against volumetric attacks, state exhaustion, and application-layer attacks.
  - **Cost Protection:** DDoS cost protection against scaling-related charges during an attack.
  - Real-time attack visibility and detailed reports.
  - Layer 7 protections when combined with AWS WAF.
  - Global threat environment dashboard. Integrated AWS Services
- CloudFront
- Route 53
- Global Accelerator
- Elastic Load Balancers (ALB/NLB)
- EC2 instances (with Elastic IP)
- AWS Global Infrastructure

### 💵 Precios y Costos / Pricing

- **Shield Standard:** Free, automatic for all customers.
- **Shield Advanced:** Monthly fee per protected resource + additional data transfer fees.

### 🔒 Seguridad y Cumplimiento / Security & Compliance

- Protects mission-critical apps from downtime and degraded performance due to DDoS.
- Helps meet compliance requirements for resilience and uptime. AWS Shield vs AWS WAF
- **AWS Shield:** DDoS protection (Layer 3/4 + some Layer 7).
- **AWS WAF:** Custom rules for Layer 7 (HTTP/S) filtering.
- **Often used together:** 
  - Shield for DDoS mitigation.
  - WAF for fine-grained application-layer security.

### 💡 Casos de Uso Típicos / Use Cases

- Protect public-facing web apps from DDoS attacks.
- Maintain high availability during attack attempts.
- Reduce operational risk and cost from DDoS incidents.
- Meet compliance standards for uptime and security.

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Shield Standard is always on and free for AWS customers.
- **Shield Advanced provides:** 
  - 24/7 AWS DDoS Response Team access.
  - Enhanced, customizable protections.
  - DDoS cost protection.
  - Detailed attack diagnostics.
- Combine AWS WAF + Shield Advanced for best Layer 7 protection.

### 📝 Resumen Rápido / Quick Summary

AWS Shield is a managed DDoS protection service with two levels: Shield Standard (free,
automatic protection) and Shield Advanced (paid, enhanced protection with expert support and
cost safeguards).

## <a id="aws-waf"></a>🔹 AWS WAF
*(Página 269 del Handbook)*


### 📌 ¿Qué es? / What It Is

- A Web Application Firewall to protect web applications from common exploits.
- Let’s you control which HTTP/S requests reach your resources.
- Helps block, allow, or count web requests based on defined rules.

### ⚙️ Características Clave / Key Features


### 1. Web ACL (Access Control List)

- The main container for WAF rules.
- **Attach Web ACL to:** 
  - Amazon CloudFront distributions.
  - Application Load Balancers (ALB).
  - AWS App Runner services.
  - Amazon API Gateway.
  - AWS AppSync.

### 2. Rules and Rule Groups

- Define conditions for filtering web traffic.
- **Types of rules:** 
  - IP match conditions (allow/block specific IPs).
  - String match (inspect headers, body, query string).
  - Geo match (block/allow by country).
  - Regex pattern sets.
  - Size constraints.
  - Rate-based rules (limit requests per IP).
- Managed Rule Groups
  - AWS provides pre-configured rules against common threats (SQL injection, XSS).
  - AWS Marketplace sellers also offer curated rule groups.

### 3. Rate-Based Rules

- Automatically block IPs that exceed a configurable request threshold.

### 4. Bot Control

- Identify and block unwanted bots and scrapers.
- AWS-managed detection with optional CAPTCHA challenges.

### 5. Custom Responses

- Return custom error pages or messages when blocking traffic.

### 6. Logging and Metrics

- Detailed request logs sent to Amazon Kinesis Data Firehose.
- Integration with CloudWatch Metrics and Alarms. Pricing:
- **Pay for:** 
  - Web ACLs.
  - Number of rules per ACL.
  - Number of requests processed. Security and Compliance:
- Helps meet PCI DSS, GDPR, and other compliance requirements.
- Protects against OWASP Top 10 threats. Use Cases:
- Blocking common web exploits like SQL injection and cross-site scripting.
- Limiting request rates to prevent DDoS or scraping.
- Allowing or blocking traffic from specific geographies.
- Integrating with CloudFront for global edge protection.
- Protecting APIs hosted on API Gateway or AppSync. AWS WAF vs AWS Shield
- **AWS WAF:** Protects at the application layer (Layer 7) with custom rules.
- **AWS Shield:** Protects against DDoS attacks.
  - Shield Standard = automatic protection, free.
  - Shield Advanced = additional DDoS protection and response team access. Exam Tips:
- AWS WAF protects web apps at Layer 7.
- Attach WAF Web ACLs to CloudFront, ALB, API Gateway, App Runner, AppSync.
- Use Managed Rule Groups for easy protection.
- Rate-based rules to throttle or block abusive IPs.
- Logging via Kinesis Firehose, metrics via CloudWatch.
- Often used with AWS Shield and AWS Firewall Manager for complete protection.

---

### 🧭 Navegación
- [⬅️ Volver al Índice Principal del Handbook](README.md)
- [📚 Volver al Repositorio Maestro SAA-C03](../README.md)