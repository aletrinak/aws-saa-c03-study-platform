window.QUESTIONS = [
  {
    "id": "01-1",
    "q": "A company is deploying a new application on AWS and needs to ensure the highest level of availability and fault tolerance. The application must continue to operate even if an entire data center fails. Which AWS infrastructure component should be used?",
    "options": {
      "A": "Deploy across multiple Edge Locations",
      "B": "Deploy across multiple Availability Zones within a single Region",
      "C": "Deploy across multiple Regions",
      "D": "Deploy using AWS Local Zones"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Availability Zones (AZs) are separate data centers within a Region\n• Deploying across multiple AZs protects against data center failure\n• This is the standard approach for high availability within a Region\n• Option C (multiple Regions) is for disaster recovery, not just data center failure\n• Edge Locations are for content delivery, not application hosting\n• Local Zones are for ultra-low latency but don't provide the same fault tolerance",
    "module": "AWS Fundamentals",
    "multi": false,
    "why": [
      "Availability Zones (AZs) are separate data centers within a Region.",
      "Deploying across multiple AZs protects against data center failure.",
      "This is the standard approach for high availability within a Region.",
      "Option C (multiple Regions) is for disaster recovery, not just data center failure.",
      "Edge Locations are for content delivery, not application hosting.",
      "Local Zones are for ultra-low latency but don't provide the same fault tolerance."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "01-2",
    "q": "A solutions architect needs to design a solution that minimizes latency for users accessing static content globally. Which combination of AWS services should be used?",
    "options": {
      "A": "Amazon S3 with Cross-Region Replication",
      "B": "Amazon CloudFront with S3 as the origin",
      "C": "Amazon S3 with Transfer Acceleration",
      "D": "Multiple EC2 instances in different Regions"
    },
    "answer": [
      "B"
    ],
    "explanation": "• CloudFront is AWS's Content Delivery Network (CDN) with 400+ edge locations globally\n• It caches content close to users, minimizing latency\n• S3 serves as the origin for static content\n• Option A provides redundancy but doesn't optimize latency\n• Option C accelerates uploads, not downloads\n• Option D is cost-ineffective and complex to manage",
    "module": "AWS Fundamentals",
    "multi": false,
    "why": [
      "CloudFront is AWS's Content Delivery Network (CDN) with 400+ edge locations globally.",
      "It caches content close to users, minimizing latency.",
      "S3 serves as the origin for static content."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Provides redundancy but doesn't optimize latency."
      },
      {
        "l": [
          "C"
        ],
        "t": "Accelerates uploads, not downloads."
      },
      {
        "l": [
          "D"
        ],
        "t": "Is cost-ineffective and complex to manage."
      }
    ],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "01-3",
    "q": "According to the AWS Shared Responsibility Model, which of the following is AWS's responsibility?",
    "options": {
      "A": "Encryption of data at rest in S3",
      "B": "Patch management of guest operating systems on EC2",
      "C": "Physical security of data centers",
      "D": "Configuration of security groups"
    },
    "answer": [
      "C"
    ],
    "explanation": "• AWS is responsible for \"Security OF the Cloud\" - physical infrastructure\n• This includes data centers, hardware, and facilities\n• Customers are responsible for \"Security IN the Cloud\"\n• Options A, B, and D are all customer responsibilities\n• Customers choose whether to encrypt, patch OS, and configure security",
    "module": "AWS Fundamentals",
    "multi": false,
    "why": [
      "AWS is responsible for \"Security OF the Cloud\" - physical infrastructure.",
      "This includes data centers, hardware, and facilities.",
      "Customers are responsible for \"Security IN the Cloud\"",
      "Customers choose whether to encrypt, patch OS, and configure security."
    ],
    "others": [
      {
        "l": [
          "A",
          "B",
          "D"
        ],
        "t": "Are all customer responsibilities."
      }
    ],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "01-4",
    "q": "A startup company wants to deploy an application without managing servers, operating systems, or runtime environments. Which AWS service category best fits this requirement?",
    "options": {
      "A": "Infrastructure as a Service (IaaS)",
      "B": "Platform as a Service (PaaS)",
      "C": "Software as a Service (SaaS)",
      "D": "Function as a Service (FaaS)"
    },
    "answer": [
      "B"
    ],
    "explanation": "• PaaS services (like Elastic Beanstalk) abstract infrastructure management\n• Users deploy code without managing servers or OS\n• IaaS (like EC2) requires managing virtual machines\n• SaaS is fully managed applications (like Amazon Chime)\n• FaaS (like Lambda) is event-driven, not for full applications typically\n• PaaS is the best fit for deploying applications without infrastructure management",
    "module": "AWS Fundamentals",
    "multi": false,
    "why": [
      "PaaS services (like Elastic Beanstalk) abstract infrastructure management.",
      "Users deploy code without managing servers or OS.",
      "IaaS (like EC2) requires managing virtual machines.",
      "SaaS is fully managed applications (like Amazon Chime)",
      "FaaS (like Lambda) is event-driven, not for full applications typically.",
      "PaaS is the best fit for deploying applications without infrastructure management."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "01-5",
    "q": "A company has regulatory requirements to ensure that data stored in AWS does not leave a specific geographic location. How can this be achieved?",
    "options": {
      "A": "Enable AWS GuardDuty",
      "B": "Choose the appropriate AWS Region and do not enable cross-region features",
      "C": "Use AWS Organizations with Service Control Policies",
      "D": "Enable AWS CloudTrail"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Data in an AWS Region stays in that Region unless you explicitly configure otherwise\n• No cross-region replication, backups, or data transfer ensures data residency\n• GuardDuty is for threat detection, not data residency\n• SCPs can enforce policies but the key is choosing the right Region\n• CloudTrail is for logging, not data residency\n• Primary control: select Region and don't configure cross-region services",
    "module": "AWS Fundamentals",
    "multi": false,
    "why": [
      "Data in an AWS Region stays in that Region unless you explicitly configure otherwise.",
      "No cross-region replication, backups, or data transfer ensures data residency.",
      "GuardDuty is for threat detection, not data residency.",
      "SCPs can enforce policies but the key is choosing the right Region.",
      "CloudTrail is for logging, not data residency.",
      "Primary control: select Region and don't configure cross-region services."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "01-6",
    "q": "Which pillar of the AWS Well-Architected Framework focuses on the ability to recover from failures and dynamically acquire computing resources to meet demand?",
    "options": {
      "A": "Operational Excellence",
      "B": "Security",
      "C": "Reliability",
      "D": "Performance Efficiency"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Reliability pillar focuses on recovery from failures and maintaining workload functionality\n• Key aspects: fault tolerance, disaster recovery, self-healing\n• Operational Excellence focuses on operations and monitoring\n• Security focuses on protecting information and systems\n• Performance Efficiency focuses on using resources efficiently",
    "module": "AWS Fundamentals",
    "multi": false,
    "why": [
      "Key aspects: fault tolerance, disaster recovery, self-healing.",
      "Operational Excellence focuses on operations and monitoring.",
      "Security focuses on protecting information and systems.",
      "Performance Efficiency focuses on using resources efficiently."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "01-7",
    "q": "A company wants to estimate the cost of running their planned AWS infrastructure before deployment. Which AWS tool should they use?",
    "options": {
      "A": "AWS Cost Explorer",
      "B": "AWS Budgets",
      "C": "AWS Pricing Calculator",
      "D": "AWS Cost and Usage Report"
    },
    "answer": [
      "C"
    ],
    "explanation": "• AWS Pricing Calculator estimates costs for planned architectures\n• Cost Explorer analyzes existing/historical costs\n• AWS Budgets sets budget alerts\n• Cost and Usage Report provides detailed billing data\n• For estimation BEFORE deployment, Pricing Calculator is correct",
    "module": "AWS Fundamentals",
    "multi": false,
    "why": [
      "Cost Explorer analyzes existing/historical costs.",
      "AWS Budgets sets budget alerts.",
      "Cost and Usage Report provides detailed billing data.",
      "For estimation BEFORE deployment, Pricing Calculator is correct."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "01-8",
    "q": "An application requires 15 milliseconds or less of latency for users in a specific metropolitan area. Which AWS infrastructure component should be used?",
    "options": {
      "A": "AWS Region",
      "B": "Availability Zone",
      "C": "AWS Local Zone",
      "D": "AWS Wavelength Zone"
    },
    "answer": [
      "C"
    ],
    "explanation": "• AWS Local Zones bring compute, storage, and database closer to end-users\n• Designed for single-digit millisecond latency requirements\n• Placed in metropolitan areas for ultra-low latency applications\n• Wavelength Zones are for 5G edge computing\n• Regular Regions/AZs may not meet ultra-low latency requirements",
    "module": "AWS Fundamentals",
    "multi": false,
    "why": [
      "Designed for single-digit millisecond latency requirements.",
      "Placed in metropolitan areas for ultra-low latency applications.",
      "Wavelength Zones are for 5G edge computing.",
      "Regular Regions/AZs may not meet ultra-low latency requirements."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "01-9",
    "q": "Which AWS service provides a unified interface to manage multiple AWS accounts within an organization?",
    "options": {
      "A": "AWS IAM",
      "B": "AWS Organizations",
      "C": "AWS Control Tower",
      "D": "AWS Systems Manager"
    },
    "answer": [
      "B"
    ],
    "explanation": "• AWS Organizations centrally manages multiple AWS accounts\n• Provides consolidated billing, account creation, and policy management\n• IAM manages permissions within an account\n• Control Tower sets up multi-account environments (uses Organizations underneath)\n• Systems Manager manages AWS resources, not accounts\n• Direct answer for multi-account management: Organizations",
    "module": "AWS Fundamentals",
    "multi": false,
    "why": [
      "Provides consolidated billing, account creation, and policy management.",
      "IAM manages permissions within an account.",
      "Control Tower sets up multi-account environments (uses Organizations underneath)",
      "Systems Manager manages AWS resources, not accounts.",
      "Direct answer for multi-account management: Organizations."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "01-10",
    "q": "According to the AWS Well-Architected Framework, which design principle is recommended for the Security pillar?",
    "options": {
      "A": "Implement a strong identity foundation",
      "B": "Go global in minutes",
      "C": "Stop spending money on data center operations",
      "D": "Implement feedback loops"
    },
    "answer": [
      "A"
    ],
    "explanation": "• \"Implement a strong identity foundation\" is a Security pillar principle\n• Includes: least privilege, separation of duties, centralized identity management\n• Option B relates to global deployment (general AWS benefit)\n• Option C is a cloud advantage, not security principle\n• Option D relates to Operational Excellence pillar",
    "module": "AWS Fundamentals",
    "multi": false,
    "why": [
      "Includes: least privilege, separation of duties, centralized identity management."
    ],
    "others": [
      {
        "l": [
          "B"
        ],
        "t": "Relates to global deployment (general AWS benefit)"
      },
      {
        "l": [
          "C"
        ],
        "t": "Is a cloud advantage, not security principle."
      },
      {
        "l": [
          "D"
        ],
        "t": "Relates to Operational Excellence pillar."
      }
    ],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "01-11",
    "q": "A company wants to use AWS CLI to manage resources but wants to avoid embedding long-term credentials in their scripts. What is the BEST practice?",
    "options": {
      "A": "Use root account credentials",
      "B": "Create an IAM user and store credentials in the script",
      "C": "Use IAM roles with temporary security credentials",
      "D": "Use access keys without secret keys"
    },
    "answer": [
      "C"
    ],
    "explanation": "• IAM roles provide temporary security credentials via AWS STS\n• Credentials rotate automatically, enhancing security\n• Never use root account credentials for daily tasks\n• Never hardcode credentials in scripts\n• Access keys always require secret keys\n• Best practice: IAM roles with temporary credentials",
    "module": "AWS Fundamentals",
    "multi": false,
    "why": [
      "IAM roles provide temporary security credentials via AWS STS.",
      "Credentials rotate automatically, enhancing security.",
      "Never use root account credentials for daily tasks.",
      "Never hardcode credentials in scripts.",
      "Access keys always require secret keys.",
      "Best practice: IAM roles with temporary credentials."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "01-12",
    "q": "Which of the following is a benefit of using AWS Regions? (Choose TWO)",
    "options": {
      "A": "Reduced latency for users in specific geographic areas",
      "B": "Automatic data replication across all Regions",
      "C": "Compliance with data sovereignty requirements",
      "D": "Lower costs compared to using a single Region",
      "E": "Automatic failover between Regions"
    },
    "answer": [
      "A",
      "C"
    ],
    "explanation": "• A is correct: Deploying in Regions closer to users reduces latency\n• C is correct: Regions enable meeting data residency/sovereignty requirements\n• B is incorrect: Replication is NOT automatic, must be configured\n• D is incorrect: Multiple Regions typically increase costs\n• E is incorrect: Failover is NOT automatic, requires architecture design",
    "module": "AWS Fundamentals",
    "multi": true,
    "why": [
      "A is correct: Deploying in Regions closer to users reduces latency.",
      "C is correct: Regions enable meeting data residency/sovereignty requirements."
    ],
    "others": [
      {
        "l": [
          "B"
        ],
        "t": "Is incorrect: Replication is NOT automatic, must be configured."
      },
      {
        "l": [
          "D"
        ],
        "t": "Is incorrect: Multiple Regions typically increase costs."
      },
      {
        "l": [
          "E"
        ],
        "t": "Is incorrect: Failover is NOT automatic, requires architecture design."
      }
    ],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "01-13",
    "q": "A solutions architect needs to design a system that follows the \"Design for Failure\" principle of the Well-Architected Framework. Which approach should be taken?",
    "options": {
      "A": "Use only the largest EC2 instance types to prevent failures",
      "B": "Design the application to handle component failures gracefully",
      "C": "Deploy all resources in a single Availability Zone for simplicity",
      "D": "Rely on AWS Support to handle all failures"
    },
    "answer": [
      "B"
    ],
    "explanation": "• \"Design for Failure\" means assuming components will fail and planning accordingly\n• Applications should handle failures gracefully with retry logic, health checks, etc.\n• Larger instances don't prevent failures\n• Single AZ deployment increases failure risk\n• You must design for failure, not rely solely on support\n• Proper approach: graceful degradation, automatic recovery",
    "module": "AWS Fundamentals",
    "multi": false,
    "why": [
      "\"Design for Failure\" means assuming components will fail and planning accordingly.",
      "Applications should handle failures gracefully with retry logic, health checks, etc.",
      "Larger instances don't prevent failures.",
      "Single AZ deployment increases failure risk.",
      "You must design for failure, not rely solely on support.",
      "Proper approach: graceful degradation, automatic recovery."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "01-14",
    "q": "Which statement about AWS Edge Locations is correct?",
    "options": {
      "A": "Edge Locations are only used for CloudFront content delivery",
      "B": "There are fewer Edge Locations than Regions",
      "C": "Edge Locations can be used for both content delivery and edge computing",
      "D": "Edge Locations are the same as Availability Zones"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Edge Locations support CloudFront (CDN), Lambda@Edge, and other edge services\n• There are 400+ edge locations vs 30+ Regions\n• Edge Locations ≠ Availability Zones (different purposes)\n• Used for content delivery AND edge computing (Lambda@Edge, CloudFront Functions)",
    "module": "AWS Fundamentals",
    "multi": false,
    "why": [
      "Edge Locations support CloudFront (CDN), Lambda@Edge, and other edge services.",
      "There are 400+ edge locations vs 30+ Regions.",
      "Edge Locations ≠ Availability Zones (different purposes)",
      "Used for content delivery AND edge computing (Lambda@Edge, CloudFront Functions)"
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "01-15",
    "q": "A company wants to receive alerts when their monthly AWS costs exceed a threshold. Which service should they use?",
    "options": {
      "A": "AWS Cost Explorer",
      "B": "AWS Budgets",
      "C": "AWS Pricing Calculator",
      "D": "AWS Trusted Advisor"
    },
    "answer": [
      "B"
    ],
    "explanation": "• AWS Budgets allows setting custom cost/usage budgets with alerts\n• Can send notifications via SNS when thresholds are exceeded\n• Cost Explorer visualizes historical costs but doesn't send alerts\n• Pricing Calculator estimates future costs\n• Trusted Advisor provides best practice recommendations\n• For threshold alerts: AWS Budgets",
    "module": "AWS Fundamentals",
    "multi": false,
    "why": [
      "Can send notifications via SNS when thresholds are exceeded.",
      "Cost Explorer visualizes historical costs but doesn't send alerts.",
      "Pricing Calculator estimates future costs.",
      "Trusted Advisor provides best practice recommendations.",
      "For threshold alerts: AWS Budgets."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "01-16",
    "q": "According to the AWS Shared Responsibility Model, who is responsible for patching the underlying hypervisor for EC2 instances?",
    "options": {
      "A": "Customer",
      "B": "AWS",
      "C": "Both AWS and Customer",
      "D": "Third-party vendors"
    },
    "answer": [
      "B"
    ],
    "explanation": "• AWS manages the hypervisor layer (security OF the cloud)\n• Customers manage guest OS patches (security IN the cloud)\n• Hypervisor is infrastructure, AWS's responsibility\n• Customer patches OS, applications, data encryption",
    "module": "AWS Fundamentals",
    "multi": false,
    "why": [
      "Customers manage guest OS patches (security IN the cloud)",
      "Hypervisor is infrastructure, AWS's responsibility.",
      "Customer patches OS, applications, data encryption."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "01-17",
    "q": "A company wants to deploy applications closer to 5G mobile users for ultra-low latency. Which AWS service should be used?",
    "options": {
      "A": "AWS Local Zones",
      "B": "AWS Wavelength",
      "C": "AWS Outposts",
      "D": "AWS Direct Connect"
    },
    "answer": [
      "B"
    ],
    "explanation": "• AWS Wavelength embeds compute at 5G network edge\n• Provides single-digit millisecond latency to mobile devices\n• Local Zones are for metro areas but not 5G-specific\n• Outposts is for on-premises AWS infrastructure\n• Direct Connect is for dedicated network connection\n• For 5G mobile: Wavelength",
    "module": "AWS Fundamentals",
    "multi": false,
    "why": [
      "Provides single-digit millisecond latency to mobile devices.",
      "Local Zones are for metro areas but not 5G-specific.",
      "Outposts is for on-premises AWS infrastructure.",
      "Direct Connect is for dedicated network connection.",
      "For 5G mobile: Wavelength."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "01-18",
    "q": "Which pillar of the AWS Well-Architected Framework includes the principle \"Stop guessing your capacity needs\"?",
    "options": {
      "A": "Cost Optimization",
      "B": "Performance Efficiency",
      "C": "Reliability",
      "D": "Operational Excellence"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Performance Efficiency pillar includes capacity planning principles\n• \"Stop guessing capacity\" - use Auto Scaling and elastic services\n• Enables right-sizing and dynamic capacity adjustment\n• Cost Optimization focuses on eliminating waste\n• Reliability focuses on recovery and testing\n• Operational Excellence focuses on running/monitoring",
    "module": "AWS Fundamentals",
    "multi": false,
    "why": [
      "\"Stop guessing capacity\" - use Auto Scaling and elastic services.",
      "Enables right-sizing and dynamic capacity adjustment.",
      "Cost Optimization focuses on eliminating waste.",
      "Reliability focuses on recovery and testing.",
      "Operational Excellence focuses on running/monitoring."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "01-19",
    "q": "A company has multiple development teams that need separate AWS accounts for isolation. They want consolidated billing. What should they implement?",
    "options": {
      "A": "AWS Control Tower",
      "B": "AWS Organizations with consolidated billing",
      "C": "Multiple IAM users in one account",
      "D": "AWS Resource Groups"
    },
    "answer": [
      "B"
    ],
    "explanation": "• AWS Organizations provides consolidated billing across multiple accounts\n• Each team gets isolated account with separate resources\n• Single bill for entire organization\n• Control Tower helps set up Organizations but Organizations is the direct answer\n• IAM users don't provide account-level isolation\n• Resource Groups organize resources, not billing",
    "module": "AWS Fundamentals",
    "multi": false,
    "why": [
      "AWS Organizations provides consolidated billing across multiple accounts.",
      "Each team gets isolated account with separate resources.",
      "Single bill for entire organization.",
      "Control Tower helps set up Organizations but Organizations is the direct answer.",
      "IAM users don't provide account-level isolation.",
      "Resource Groups organize resources, not billing."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "01-20",
    "q": "What is the primary purpose of Availability Zones within an AWS Region?",
    "options": {
      "A": "To provide different pricing tiers",
      "B": "To enable fault tolerance and high availability",
      "C": "To support different AWS services",
      "D": "To reduce data transfer costs"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Availability Zones are isolated locations within a Region\n• Primary purpose: fault tolerance and high availability\n• Each AZ has independent power, cooling, networking\n• Deploying across AZs protects against single point of failure\n• Not for pricing, service availability, or cost reduction\n• Core purpose: resilience and availability",
    "module": "AWS Fundamentals",
    "multi": false,
    "why": [
      "Availability Zones are isolated locations within a Region.",
      "Primary purpose: fault tolerance and high availability.",
      "Each AZ has independent power, cooling, networking.",
      "Deploying across AZs protects against single point of failure.",
      "Not for pricing, service availability, or cost reduction.",
      "Core purpose: resilience and availability."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "01-21",
    "q": "A company has 50 AWS accounts and wants to centrally manage billing and apply organization-wide security policies. Which AWS service should they use?",
    "options": {
      "A": "AWS IAM",
      "B": "AWS Organizations",
      "C": "AWS Control Tower",
      "D": "AWS Systems Manager"
    },
    "answer": [
      "B"
    ],
    "explanation": "• AWS Organizations is the service for managing multiple AWS accounts\n• Provides consolidated billing across all accounts\n• Enables Service Control Policies (SCPs) for organization-wide policies\n• Can create Organizational Units (OUs) for logical grouping\n• Control Tower (C) is built on Organizations but is for automated setup\n• IAM (A) is for user/role management within a single account\n• Systems Manager (D) is for operations, not multi-account management",
    "module": "AWS Fundamentals",
    "multi": false,
    "why": [
      "Provides consolidated billing across all accounts.",
      "Enables Service Control Policies (SCPs) for organization-wide policies.",
      "Can create Organizational Units (OUs) for logical grouping."
    ],
    "others": [
      {
        "l": [
          "C"
        ],
        "t": "Control Tower (C) is built on Organizations but is for automated setup."
      },
      {
        "l": [
          "A"
        ],
        "t": "IAM (A) is for user/role management within a single account."
      },
      {
        "l": [
          "D"
        ],
        "t": "Systems Manager (D) is for operations, not multi-account management."
      }
    ],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "01-22",
    "q": "A security team wants to prevent all member accounts in their AWS Organization from creating resources in any region except us-east-1 and eu-west-1. How should this be implemented?",
    "options": {
      "A": "Create IAM policies in each account restricting regions",
      "B": "Use AWS Config rules to detect non-compliant resources",
      "C": "Create a Service Control Policy (SCP) denying actions in other regions",
      "D": "Use AWS Firewall Manager to block region access"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Service Control Policies (SCPs) provide centralized, preventive controls\n• SCPs can restrict which AWS regions can be used\n• Applied at the Organization, OU, or account level\n• Cannot be overridden by users in member accounts\n• IAM policies (A) can be changed by account administrators\n• Config rules (B) are detective, not preventive\n• Firewall Manager (D) is for security group/WAF rules, not region restrictions\nSCP Example:",
    "module": "AWS Fundamentals",
    "multi": false,
    "why": [
      "Service Control Policies (SCPs) provide centralized, preventive controls.",
      "SCPs can restrict which AWS regions can be used.",
      "Applied at the Organization, OU, or account level.",
      "Cannot be overridden by users in member accounts.",
      "SCP Example:."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "IAM policies (A) can be changed by account administrators."
      },
      {
        "l": [
          "B"
        ],
        "t": "Config rules (B) are detective, not preventive."
      },
      {
        "l": [
          "D"
        ],
        "t": "Firewall Manager (D) is for security group/WAF rules, not region restrictions."
      }
    ],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "01-23",
    "q": "Which of the following statements about Service Control Policies (SCPs) is TRUE?",
    "options": {
      "A": "SCPs grant permissions to users and roles",
      "B": "SCPs affect the management account in an AWS Organization",
      "C": "SCPs define maximum permissions for member accounts",
      "D": "SCPs can only be applied to individual accounts, not OUs"
    },
    "answer": [
      "C"
    ],
    "explanation": "• SCPs define maximum permissions - they act as guardrails\n• SCPs do NOT grant permissions (A is wrong)\n• They only restrict what is possible\n• SCPs do NOT affect the management account (B is wrong)\n• SCPs can be applied to Organization root, OUs, or accounts (D is wrong)\n• Effective permissions = IAM policy AND SCP\nKey SCP Rules:\n• ❌ Don't grant permissions\n• ❌ Don't affect management account\n• ✅ Set maximum permission boundaries\n• ✅ Can be applied to OUs\n• ✅ Inherited down the hierarchy",
    "module": "AWS Fundamentals",
    "multi": false,
    "why": [
      "SCPs do NOT grant permissions (A is wrong)",
      "They only restrict what is possible.",
      "SCPs do NOT affect the management account (B is wrong)",
      "SCPs can be applied to Organization root, OUs, or accounts (D is wrong)",
      "Effective permissions = IAM policy AND SCP.",
      "Key SCP Rules:.",
      "❌ Don't grant permissions.",
      "❌ Don't affect management account.",
      "✅ Set maximum permission boundaries.",
      "✅ Can be applied to OUs.",
      "✅ Inherited down the hierarchy."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "01-24",
    "q": "A company wants to quickly set up a secure, multi-account AWS environment following best practices with automated account provisioning and pre-configured governance guardrails. Which service should they use?",
    "options": {
      "A": "AWS Organizations",
      "B": "AWS Control Tower",
      "C": "AWS CloudFormation StackSets",
      "D": "AWS Service Catalog"
    },
    "answer": [
      "B"
    ],
    "explanation": "• AWS Control Tower provides automated multi-account setup\n• Includes Landing Zone (well-architected baseline)\n• Pre-configured guardrails (preventive and detective)\n• Account Factory for automated provisioning\n• Built on top of AWS Organizations\n• AWS Organizations (A) requires manual setup\n• CloudFormation StackSets (C) deploys templates, not governance\n• Service Catalog (D) is for self-service IT resources\nControl Tower Features:\n• ✅ Automated setup (minutes vs days)\n• ✅ Pre-built guardrails\n• ✅ Account Factory\n• ✅ Compliance dashboard\n• ✅ Integrated with Organizations, IAM Identity Center, CloudTrail\nWhen to Use:\n• Quick setup with best practices\n• Less AWS expertise required\n• Want pre-built governance\nWhen to Use Organizations Directly:\n• Need maximum flexibility\n• Have custom requirements\n• Experienced AWS team",
    "module": "AWS Fundamentals",
    "multi": false,
    "why": [
      "Includes Landing Zone (well-architected baseline)",
      "Pre-configured guardrails (preventive and detective)",
      "Account Factory for automated provisioning.",
      "Built on top of AWS Organizations.",
      "Control Tower Features:.",
      "✅ Automated setup (minutes vs days)",
      "✅ Pre-built guardrails.",
      "✅ Account Factory.",
      "✅ Compliance dashboard.",
      "✅ Integrated with Organizations, IAM Identity Center, CloudTrail.",
      "When to Use:.",
      "Quick setup with best practices.",
      "Less AWS expertise required.",
      "Want pre-built governance.",
      "When to Use Organizations Directly:.",
      "Need maximum flexibility.",
      "Have custom requirements.",
      "Experienced AWS team."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "AWS Organizations (A) requires manual setup."
      },
      {
        "l": [
          "C"
        ],
        "t": "CloudFormation StackSets (C) deploys templates, not governance."
      },
      {
        "l": [
          "D"
        ],
        "t": "Service Catalog (D) is for self-service IT resources."
      }
    ],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "01-25",
    "q": "A company has a centralized networking account and wants to share VPC subnets with multiple application accounts without duplicating VPC infrastructure. Which AWS service enables this?",
    "options": {
      "A": "VPC Peering",
      "B": "AWS Transit Gateway",
      "C": "AWS Resource Access Manager (RAM)",
      "D": "AWS PrivateLink"
    },
    "answer": [
      "C"
    ],
    "explanation": "• AWS Resource Access Manager (RAM) allows sharing resources across accounts\n• Can share VPC subnets between accounts\n• Resources remain in owner account, but accessible to shared accounts\n• No need to duplicate VPCs\n• VPC Peering (A) connects VPCs but doesn't share subnets\n• Transit Gateway (B) connects networks but doesn't share subnets\n• PrivateLink (D) is for service-to-VPC connectivity\nBenefits of Subnet Sharing with RAM:\n• ✅ Centralized network management\n• ✅ Reduced VPC sprawl\n• ✅ Efficient IP address usage\n• ✅ Simplified network architecture\n• ✅ Lower operational overhead\nOther Shareable Resources via RAM:\n• VPC Subnets (most common)\n• Transit Gateway attachments\n• Route 53 Resolver rules\n• License Manager configurations\n• Aurora DB clusters\n• Prefix lists",
    "module": "AWS Fundamentals",
    "multi": false,
    "why": [
      "Can share VPC subnets between accounts.",
      "Resources remain in owner account, but accessible to shared accounts.",
      "No need to duplicate VPCs.",
      "Benefits of Subnet Sharing with RAM:.",
      "✅ Centralized network management.",
      "✅ Reduced VPC sprawl.",
      "✅ Efficient IP address usage.",
      "✅ Simplified network architecture.",
      "✅ Lower operational overhead.",
      "Other Shareable Resources via RAM:.",
      "VPC Subnets (most common)",
      "Transit Gateway attachments.",
      "Route 53 Resolver rules.",
      "License Manager configurations.",
      "Aurora DB clusters.",
      "Prefix lists."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "VPC Peering (A) connects VPCs but doesn't share subnets."
      },
      {
        "l": [
          "B"
        ],
        "t": "Transit Gateway (B) connects networks but doesn't share subnets."
      },
      {
        "l": [
          "D"
        ],
        "t": "PrivateLink (D) is for service-to-VPC connectivity."
      }
    ],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "01-26",
    "q": "A company uses AWS Organizations with consolidated billing. They notice they're receiving volume discounts on S3 storage even though no single account uses enough storage to qualify. Why?",
    "options": {
      "A": "AWS provides automatic discounts for Organizations",
      "B": "Consolidated billing combines usage across all accounts for volume pricing",
      "C": "The management account gets all the discounts",
      "D": "SCPs enable cost savings automatically"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Consolidated billing combines usage across all accounts\n• AWS treats the entire organization as a single billing entity\n• Volume discounts apply to combined usage\n• Example: 3 accounts with 500GB each = 1500GB total → higher tier pricing\n• Not automatic discounts (A), just usage aggregation\n• All accounts benefit, not just management account (C)\n• SCPs are for permissions, not costs (D)\nConsolidated Billing Benefits:\n• ✅ Volume discounts across accounts\n• ✅ Single payment method\n• ✅ Easier cost tracking\n• ✅ Cost allocation tags across org\n• ✅ Reserved Instance sharing",
    "module": "AWS Fundamentals",
    "multi": false,
    "why": [
      "AWS treats the entire organization as a single billing entity.",
      "Volume discounts apply to combined usage.",
      "Example: 3 accounts with 500GB each = 1500GB total → higher tier pricing.",
      "Consolidated Billing Benefits:.",
      "✅ Volume discounts across accounts.",
      "✅ Single payment method.",
      "✅ Easier cost tracking.",
      "✅ Cost allocation tags across org.",
      "✅ Reserved Instance sharing."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Not automatic discounts (A), just usage aggregation."
      },
      {
        "l": [
          "C"
        ],
        "t": "All accounts benefit, not just management account (C)"
      },
      {
        "l": [
          "D"
        ],
        "t": "SCPs are for permissions, not costs (D)"
      }
    ],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "01-27",
    "q": "Which AWS Organizations feature allows you to create policies that prevent accounts from leaving the organization?",
    "options": {
      "A": "IAM Policy",
      "B": "Service Control Policy (SCP)",
      "C": "Resource Control Policy",
      "D": "Organizational Lock"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Service Control Policies (SCPs) can prevent accounts from leaving\n• SCP can deny the `organizations:LeaveOrganization` action\n• Applied at Organization or OU level\n• Cannot be overridden by member accounts",
    "module": "AWS Fundamentals",
    "multi": false,
    "why": [
      "SCP can deny the `organizations:LeaveOrganization` action.",
      "Applied at Organization or OU level.",
      "Cannot be overridden by member accounts."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "02-1",
    "q": "An application running on Amazon EC2 instances needs to access objects in an Amazon S3 bucket. What is the MOST secure way to grant this access?",
    "options": {
      "A": "Create an IAM user with programmatic access and store the access keys on the EC2 instance",
      "B": "Create an IAM role with S3 permissions and attach it to the EC2 instance",
      "C": "Make the S3 bucket public and allow anonymous access",
      "D": "Use the root account credentials on the EC2 instance"
    },
    "answer": [
      "B"
    ],
    "explanation": "• IAM roles provide temporary security credentials that rotate automatically\n• No need to manage or embed long-term credentials\n• Most secure and AWS-recommended approach\n• Option A: Access keys are long-term credentials, security risk if exposed\n• Option C: Violates security best practices\n• Option D: Never use root credentials for applications\n• Best Practice: Always use IAM roles for EC2 instances",
    "module": "IAM",
    "multi": false,
    "why": [
      "IAM roles provide temporary security credentials that rotate automatically.",
      "No need to manage or embed long-term credentials.",
      "Most secure and AWS-recommended approach.",
      "Best Practice: Always use IAM roles for EC2 instances."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Access keys are long-term credentials, security risk if exposed."
      },
      {
        "l": [
          "C"
        ],
        "t": "Violates security best practices."
      },
      {
        "l": [
          "D"
        ],
        "t": "Never use root credentials for applications."
      }
    ],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "02-2",
    "q": "A company needs to grant temporary access to external auditors to review CloudTrail logs in S3. The access should expire after 7 days. What is the BEST solution?",
    "options": {
      "A": "Create IAM users for auditors and delete them after 7 days",
      "B": "Create IAM roles and provide auditors with temporary security credentials using AWS STS",
      "C": "Share the root account credentials for 7 days",
      "D": "Create an S3 pre-signed URL valid for 7 days"
    },
    "answer": [
      "B"
    ],
    "explanation": "• AWS STS (Security Token Service) generates temporary credentials\n• IAM roles can be assumed by external users via federation\n• Credentials automatically expire based on session duration\n• Option A: Requires manual deletion, operational overhead\n• Option C: Never share root credentials\n• Option D: Pre-signed URLs work but IAM roles are more comprehensive\n• Best for temporary access: STS with IAM roles",
    "module": "IAM",
    "multi": false,
    "why": [
      "AWS STS (Security Token Service) generates temporary credentials.",
      "IAM roles can be assumed by external users via federation.",
      "Credentials automatically expire based on session duration.",
      "Best for temporary access: STS with IAM roles."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Requires manual deletion, operational overhead."
      },
      {
        "l": [
          "C"
        ],
        "t": "Never share root credentials."
      },
      {
        "l": [
          "D"
        ],
        "t": "Pre-signed URLs work but IAM roles are more comprehensive."
      }
    ],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "02-3",
    "q": "A solutions architect is writing an IAM policy to deny access to all S3 buckets except one specific bucket named \"production-data\". Which policy element should be used?\n\n```json\n{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": \"s3:*\",\n      \"Resource\": [\n        \"arn:aws:s3:::production-data\",\n        \"arn:aws:s3:::production-data/*\"\n      ]\n    },\n    {\n      \"Effect\": \"Deny\",\n      \"Action\": \"s3:*\",\n      \"Resource\": \"*\",\n      \"Condition\": {\n        \"StringNotEquals\": {\n          \"s3:ResourceAccount\": \"${aws:PrincipalAccount}\"\n        }\n      }\n    }\n  ]\n}\n```\n\nWhat is the correct approach?",
    "options": {
      "A": "Use Allow effect for the specific bucket only",
      "B": "Use Deny effect for all buckets except the one",
      "C": "Use both Allow for specific bucket and implicit Deny for others",
      "D": "Use resource-based policy on S3 bucket"
    },
    "answer": [
      "C"
    ],
    "explanation": "• IAM uses default Deny for all actions not explicitly allowed\n• Allow access to \"production-data\" bucket explicitly\n• All other buckets are implicitly denied\n• No need for explicit Deny statement for other buckets\n• IAM Evaluation Logic: Explicit Deny > Allow > Implicit Deny\n• Simpler policy: Just Allow the specific bucket\nCorrect Policy:",
    "module": "IAM",
    "multi": false,
    "why": [
      "IAM uses default Deny for all actions not explicitly allowed.",
      "Allow access to \"production-data\" bucket explicitly.",
      "All other buckets are implicitly denied.",
      "No need for explicit Deny statement for other buckets.",
      "IAM Evaluation Logic: Explicit Deny > Allow > Implicit Deny.",
      "Simpler policy: Just Allow the specific bucket.",
      "Correct Policy:."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "02-4",
    "q": "A company has a requirement that all IAM users must use Multi-Factor Authentication (MFA) before they can delete any S3 objects. How can this be enforced?",
    "options": {
      "A": "Enable MFA Delete on the S3 bucket",
      "B": "Create an IAM policy with a condition requiring MFA",
      "C": "Use AWS Organizations Service Control Policies",
      "D": "Configure S3 bucket policy to require MFA"
    },
    "answer": [
      "B"
    ],
    "explanation": "• IAM policy condition `aws:MultiFactorAuthPresent` enforces MFA\n• Can be applied to specific actions like `s3:DeleteObject`",
    "module": "IAM",
    "multi": false,
    "why": [
      "IAM policy condition `aws:MultiFactorAuthPresent` enforces MFA.",
      "Can be applied to specific actions like `s3:DeleteObject`."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "02-5",
    "q": "A development team needs read-only access to all EC2 instances, but write access should only be granted during business hours (9 AM - 5 PM). How can this be implemented?",
    "options": {
      "A": "Use time-based IAM policy conditions",
      "B": "Manually attach/detach policies during business hours",
      "C": "Use AWS Lambda to modify IAM policies based on time",
      "D": "Create two separate IAM groups and move users between them"
    },
    "answer": [
      "A"
    ],
    "explanation": "• IAM supports time-based conditions using `aws:CurrentTime`\n• Can specify date/time ranges for policy evaluation",
    "module": "IAM",
    "multi": false,
    "why": [
      "IAM supports time-based conditions using `aws:CurrentTime`.",
      "Can specify date/time ranges for policy evaluation."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "02-6",
    "q": "A company wants to allow users to change their own passwords but nothing else. Which AWS managed policy should be attached?",
    "options": {
      "A": "IAMFullAccess",
      "B": "IAMUserChangePassword",
      "C": "IAMReadOnlyAccess",
      "D": "PowerUserAccess"
    },
    "answer": [
      "B"
    ],
    "explanation": "• `IAMUserChangePassword` is an AWS managed policy for self-service password changes\n• Follows principle of least privilege\n• Allows users to manage only their own passwords\n• Option A: Too permissive, full IAM access\n• Option C: Read-only, can't change passwords\n• Option D: Almost full access except IAM\nAlternative: Create custom policy:",
    "module": "IAM",
    "multi": false,
    "why": [
      "Follows principle of least privilege.",
      "Allows users to manage only their own passwords.",
      "Alternative: Create custom policy:."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Too permissive, full IAM access."
      },
      {
        "l": [
          "C"
        ],
        "t": "Read-only, can't change passwords."
      },
      {
        "l": [
          "D"
        ],
        "t": "Almost full access except IAM."
      }
    ],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "02-7",
    "q": "An organization has multiple AWS accounts. They want to centrally manage permissions across all accounts. What is the BEST solution?",
    "options": {
      "A": "Create identical IAM policies in each account",
      "B": "Use AWS Organizations with Service Control Policies (SCPs)",
      "C": "Use IAM roles in each account",
      "D": "Share IAM users across accounts"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Service Control Policies (SCPs) set permission boundaries for entire AWS accounts\n• Applied at organization, OU, or account level\n• Centrally managed from master/management account\n• Maximum permissions available, individual IAM policies still needed\n• Option A: Not centralized, difficult to maintain\n• Option C: Roles help with cross-account access but don't centrally manage permissions\n• Option D: IAM users cannot be shared across accounts\nSCP Example (Deny all regions except us-east-1):",
    "module": "IAM",
    "multi": false,
    "why": [
      "Service Control Policies (SCPs) set permission boundaries for entire AWS accounts.",
      "Applied at organization, OU, or account level.",
      "Centrally managed from master/management account.",
      "Maximum permissions available, individual IAM policies still needed.",
      "SCP Example (Deny all regions except us-east-1):."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Not centralized, difficult to maintain."
      },
      {
        "l": [
          "C"
        ],
        "t": "Roles help with cross-account access but don't centrally manage permissions."
      },
      {
        "l": [
          "D"
        ],
        "t": "IAM users cannot be shared across accounts."
      }
    ],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "02-8",
    "q": "A company uses SAML 2.0 to allow employees to access AWS using their corporate Active Directory credentials. What type of access is this?",
    "options": {
      "A": "IAM user access",
      "B": "Root account access",
      "C": "Federated access",
      "D": "Programmatic access"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Federation allows users to access AWS using existing corporate credentials\n• SAML 2.0 is a standard for identity federation\n• Users authenticate with corporate IdP (like Active Directory)\n• IdP provides temporary AWS credentials via IAM role assumption\n• No need to create IAM users for each employee\n• Types of Federation: SAML 2.0, OpenID Connect, Custom Identity Broker\nFederation Flow:\n1. User authenticates with corporate IdP\n2. IdP generates SAML assertion\n3. User presents assertion to AWS STS\n4. STS returns temporary credentials\n5. User accesses AWS with temp credentials",
    "module": "IAM",
    "multi": false,
    "why": [
      "Federation allows users to access AWS using existing corporate credentials.",
      "SAML 2.0 is a standard for identity federation.",
      "Users authenticate with corporate IdP (like Active Directory)",
      "IdP provides temporary AWS credentials via IAM role assumption.",
      "No need to create IAM users for each employee.",
      "Types of Federation: SAML 2.0, OpenID Connect, Custom Identity Broker.",
      "Federation Flow:.",
      "1.",
      "User authenticates with corporate IdP.",
      "2.",
      "IdP generates SAML assertion.",
      "3.",
      "User presents assertion to AWS STS.",
      "4.",
      "STS returns temporary credentials.",
      "5.",
      "User accesses AWS with temp credentials."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "02-9",
    "q": "Which statement about IAM policies is correct?",
    "options": {
      "A": "Identity-based policies are attached to resources",
      "B": "Resource-based policies are attached to IAM identities",
      "C": "Identity-based policies define permissions for users, groups, and roles",
      "D": "Resource-based policies cannot specify principals from other accounts"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Identity-based policies: Attached to users, groups, roles (who can do what)\n• Resource-based policies: Attached to resources like S3, SQS (who can access this resource)\n• Option A: Incorrect, identity-based policies attach to identities\n• Option B: Incorrect, resource-based policies attach to resources\n• Option D: Incorrect, resource-based policies CAN specify cross-account principals",
    "module": "IAM",
    "multi": false,
    "why": [
      "Resource-based policies: Attached to resources like S3, SQS (who can access this resource)"
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Incorrect, identity-based policies attach to identities."
      },
      {
        "l": [
          "B"
        ],
        "t": "Incorrect, resource-based policies attach to resources."
      },
      {
        "l": [
          "D"
        ],
        "t": "Incorrect, resource-based policies CAN specify cross-account principals."
      }
    ],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "02-10",
    "q": "A Lambda function needs to access DynamoDB tables. What is the correct way to grant permissions?",
    "options": {
      "A": "Create an IAM user for the Lambda function",
      "B": "Create an IAM execution role for the Lambda function",
      "C": "Add permissions directly to the Lambda function",
      "D": "Use resource-based policy on DynamoDB"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Lambda execution role defines what the function can access\n• Role is assumed by Lambda service when function executes\n• Attach policies to role (e.g., AmazonDynamoDBFullAccess or custom policy)\n• Option A: Lambda functions cannot use IAM users\n• Option C: No such mechanism, must use IAM roles\n• Option D: DynamoDB doesn't have resource-based policies like S3\nLambda Execution Role Policy Example:",
    "module": "IAM",
    "multi": false,
    "why": [
      "Lambda execution role defines what the function can access.",
      "Role is assumed by Lambda service when function executes.",
      "Attach policies to role (e.g., AmazonDynamoDBFullAccess or custom policy)",
      "Lambda Execution Role Policy Example:."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Lambda functions cannot use IAM users."
      },
      {
        "l": [
          "C"
        ],
        "t": "No such mechanism, must use IAM roles."
      },
      {
        "l": [
          "D"
        ],
        "t": "DynamoDB doesn't have resource-based policies like S3."
      }
    ],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "02-11",
    "q": "What does the following IAM policy condition do?\n\n```json\n\"Condition\": {\n  \"IpAddress\": {\n    \"aws:SourceIp\": \"203.0.113.0/24\"\n  }\n}\n```",
    "options": {
      "A": "Allows access only from the specified IP range",
      "B": "Denies access from the specified IP range",
      "C": "Logs access from the specified IP range",
      "D": "Routes traffic through the specified IP range"
    },
    "answer": [
      "A"
    ],
    "explanation": "• Condition restricts policy effectiveness to requests from specified IP range\n• When used with \"Effect\": \"Allow\", grants access only from those IPs\n• When used with \"Effect\": \"Deny\", denies access from those IPs\n• Does not log or route traffic\n• Use Case: Restrict access to corporate network IPs\nComplete Policy Example:",
    "module": "IAM",
    "multi": false,
    "why": [
      "Condition restricts policy effectiveness to requests from specified IP range.",
      "When used with \"Effect\": \"Allow\", grants access only from those IPs.",
      "When used with \"Effect\": \"Deny\", denies access from those IPs.",
      "Does not log or route traffic.",
      "Use Case: Restrict access to corporate network IPs.",
      "Complete Policy Example:."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "02-12",
    "q": "A company wants to ensure that IAM users cannot create EC2 instances larger than t3.medium. How can this be enforced?",
    "options": {
      "A": "Use IAM policy with condition checking instance type",
      "B": "Use AWS Config rules",
      "C": "Use AWS Budgets",
      "D": "Use EC2 instance limits"
    },
    "answer": [
      "A"
    ],
    "explanation": "• IAM policy conditions can restrict EC2 instance types\n• Condition key: `ec2:InstanceType`\nPolicy Example:\n• Option B: Config rules detect compliance, don't prevent actions\n• Option C: Budgets monitor costs, don't restrict actions\n• Option D: Service limits are for account-wide quotas, not policy-based restrictions",
    "module": "IAM",
    "multi": false,
    "why": [
      "IAM policy conditions can restrict EC2 instance types.",
      "Condition key: `ec2:InstanceType`.",
      "Policy Example:."
    ],
    "others": [
      {
        "l": [
          "B"
        ],
        "t": "Config rules detect compliance, don't prevent actions."
      },
      {
        "l": [
          "C"
        ],
        "t": "Budgets monitor costs, don't restrict actions."
      },
      {
        "l": [
          "D"
        ],
        "t": "Service limits are for account-wide quotas, not policy-based restrictions."
      }
    ],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "02-13",
    "q": "What is the maximum number of IAM groups a user can belong to?",
    "options": {
      "A": "5",
      "B": "10",
      "C": "20",
      "D": "Unlimited"
    },
    "answer": [
      "B"
    ],
    "explanation": "• An IAM user can be a member of up to 10 groups\n• This is an AWS service limit/quota\n• Groups simplify permission management\n• If more complex permissions needed, use multiple policies or roles\nIAM Limits (Key ones for exam):\n• Users per account: 5,000 (default)\n• Groups per account: 300\n• Groups per user: 10\n• Managed policies per user/group/role: 10\n• Inline policy size: 2,048 characters for users, 10,240 for roles",
    "module": "IAM",
    "multi": false,
    "why": [
      "This is an AWS service limit/quota.",
      "Groups simplify permission management.",
      "If more complex permissions needed, use multiple policies or roles.",
      "IAM Limits (Key ones for exam):.",
      "Users per account: 5,000 (default)",
      "Groups per account: 300.",
      "Groups per user: 10.",
      "Managed policies per user/group/role: 10.",
      "Inline policy size: 2,048 characters for users, 10,240 for roles."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "02-14",
    "q": "A developer accidentally committed AWS access keys to a public GitHub repository. What should be done IMMEDIATELY?",
    "options": {
      "A": "Change the password of the IAM user",
      "B": "Delete the GitHub repository",
      "C": "Deactivate and delete the exposed access keys",
      "D": "Enable MFA on the account"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Exposed credentials must be deactivated/deleted immediately\n• Prevents unauthorized access using compromised keys\n• Steps: Deactivate keys → Create new keys → Delete old keys → Review CloudTrail\n• Option A: Passwords are separate from access keys\n• Option B: Deleting repo doesn't help if already cloned/indexed\n• Option D: MFA doesn't protect already-exposed keys\nIncident Response Steps:\n1. Deactivate compromised keys immediately\n2. Review CloudTrail for unauthorized activity\n3. Create new access keys\n4. Delete compromised keys\n5. Scan code repositories\n6. Implement secrets management (AWS Secrets Manager, Parameter Store)",
    "module": "IAM",
    "multi": false,
    "why": [
      "Exposed credentials must be deactivated/deleted immediately.",
      "Prevents unauthorized access using compromised keys.",
      "Steps: Deactivate keys → Create new keys → Delete old keys → Review CloudTrail.",
      "Incident Response Steps:.",
      "1.",
      "Deactivate compromised keys immediately.",
      "2.",
      "Review CloudTrail for unauthorized activity.",
      "3.",
      "Create new access keys.",
      "4.",
      "Delete compromised keys.",
      "5.",
      "Scan code repositories.",
      "6.",
      "Implement secrets management (AWS Secrets Manager, Parameter Store)"
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Passwords are separate from access keys."
      },
      {
        "l": [
          "B"
        ],
        "t": "Deleting repo doesn't help if already cloned/indexed."
      },
      {
        "l": [
          "D"
        ],
        "t": "MFA doesn't protect already-exposed keys."
      }
    ],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "02-15",
    "q": "Which IAM entity can have both trust policy and permissions policy?",
    "options": {
      "A": "IAM User",
      "B": "IAM Group",
      "C": "IAM Role",
      "D": "IAM Policy"
    },
    "answer": [
      "C"
    ],
    "explanation": "• IAM Roles have two types of policies:\n• Trust Policy: Defines who can assume the role (principal)\n• Permissions Policy: Defines what the role can do (actions)\n• Users and Groups don't have trust policies\n• Policies are documents, not entities with other policies\nTrust Policy Example:\nPermissions Policy Example:",
    "module": "IAM",
    "multi": false,
    "why": [
      "Trust Policy: Defines who can assume the role (principal)",
      "Permissions Policy: Defines what the role can do (actions)",
      "Users and Groups don't have trust policies.",
      "Policies are documents, not entities with other policies.",
      "Trust Policy Example:.",
      "Permissions Policy Example:."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "02-16",
    "q": "A company needs to provide third-party vendors access to specific S3 buckets without creating IAM users. What is the BEST approach?",
    "options": {
      "A": "Share root account credentials",
      "B": "Create cross-account IAM roles with external ID",
      "C": "Make S3 buckets public",
      "D": "Use S3 pre-signed URLs"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Cross-account roles allow external accounts to access resources\n• External ID adds security layer preventing confused deputy problem\n• Vendor assumes role from their AWS account\n• No need to manage IAM users\nSetup:\n1. Create IAM role in your account\n2. Trust policy allows vendor's AWS account\n3. Include External ID for security\n4. Vendor assumes role using STS AssumeRole\nTrust Policy with External ID:",
    "module": "IAM",
    "multi": false,
    "why": [
      "Cross-account roles allow external accounts to access resources.",
      "External ID adds security layer preventing confused deputy problem.",
      "Vendor assumes role from their AWS account.",
      "No need to manage IAM users.",
      "Setup:.",
      "1.",
      "Create IAM role in your account.",
      "2.",
      "Trust policy allows vendor's AWS account.",
      "3.",
      "Include External ID for security.",
      "4.",
      "Vendor assumes role using STS AssumeRole.",
      "Trust Policy with External ID:."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "02-17",
    "q": "What is the default effect when no IAM policy explicitly allows or denies an action?",
    "options": {
      "A": "Allow",
      "B": "Deny",
      "C": "Prompt for approval",
      "D": "Log the action"
    },
    "answer": [
      "B"
    ],
    "explanation": "• IAM uses implicit deny by default\n• All actions denied unless explicitly allowed\n• Evaluation Logic: Explicit Deny → Allow → Implicit Deny\n• Cannot override explicit Deny with Allow\n• Must have explicit Allow to perform action\nPolicy Evaluation Flow:\n1. Deny evaluation: If any policy has explicit Deny → DENY\n2. Organizations SCPs: Applied as permission boundary\n3. Resource-based policies: Evaluated\n4. Identity-based policies: If any has Allow → ALLOW\n5. IAM permissions boundaries: Applied as filter\n6. Session policies: Applied for assumed roles\n7. Default: DENY (if no explicit Allow)",
    "module": "IAM",
    "multi": false,
    "why": [
      "All actions denied unless explicitly allowed.",
      "Evaluation Logic: Explicit Deny → Allow → Implicit Deny.",
      "Cannot override explicit Deny with Allow.",
      "Must have explicit Allow to perform action.",
      "Policy Evaluation Flow:.",
      "1.",
      "Deny evaluation: If any policy has explicit Deny → DENY.",
      "2.",
      "Organizations SCPs: Applied as permission boundary.",
      "3.",
      "Resource-based policies: Evaluated.",
      "4.",
      "Identity-based policies: If any has Allow → ALLOW.",
      "5.",
      "IAM permissions boundaries: Applied as filter.",
      "6.",
      "Session policies: Applied for assumed roles.",
      "7.",
      "Default: DENY (if no explicit Allow)"
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "02-18",
    "q": "A company wants to grant temporary access to S3 objects for unauthenticated users for 1 hour. What should be used?",
    "options": {
      "A": "IAM user credentials",
      "B": "S3 pre-signed URLs",
      "C": "S3 bucket policy",
      "D": "IAM role"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Pre-signed URLs grant time-limited access to S3 objects\n• No AWS credentials needed by end user\n• URL contains authentication information\n• Expires after specified duration\nGenerate Pre-signed URL (AWS CLI):\nUse Cases:\n• Temporary download links\n• Upload forms for unauthenticated users\n• Sharing private content without making public\n• Time-limited access to resources\n• Option A: Requires creating users, not for temporary/anonymous\n• Option C: Bucket policies are not time-limited\n• Option D: Roles require authentication",
    "module": "IAM",
    "multi": false,
    "why": [
      "Pre-signed URLs grant time-limited access to S3 objects.",
      "No AWS credentials needed by end user.",
      "URL contains authentication information.",
      "Expires after specified duration.",
      "Generate Pre-signed URL (AWS CLI):.",
      "Use Cases:.",
      "Temporary download links.",
      "Upload forms for unauthenticated users.",
      "Sharing private content without making public.",
      "Time-limited access to resources."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Requires creating users, not for temporary/anonymous."
      },
      {
        "l": [
          "C"
        ],
        "t": "Bucket policies are not time-limited."
      },
      {
        "l": [
          "D"
        ],
        "t": "Roles require authentication."
      }
    ],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "02-19",
    "q": "What is the purpose of IAM permissions boundaries?",
    "options": {
      "A": "To set maximum permissions an IAM entity can have",
      "B": "To grant additional permissions beyond policies",
      "C": "To replace IAM policies",
      "D": "To encrypt IAM credentials"
    },
    "answer": [
      "A"
    ],
    "explanation": "• Permissions boundaries set maximum permissions limit\n• Cannot grant more permissions than boundary allows\n• Even if identity policy allows, boundary can restrict\n• Use Case: Delegate permission management safely",
    "module": "IAM",
    "multi": false,
    "why": [
      "Permissions boundaries set maximum permissions limit.",
      "Cannot grant more permissions than boundary allows.",
      "Even if identity policy allows, boundary can restrict.",
      "Use Case: Delegate permission management safely."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "02-20",
    "q": "Which of the following actions require MFA for the root account according to AWS best practices? (Choose TWO)",
    "options": {
      "A": "Logging into AWS Console",
      "B": "Changing account settings",
      "C": "Launching EC2 instances",
      "D": "Deleting S3 buckets",
      "E": "Viewing billing information"
    },
    "answer": [
      "A",
      "B"
    ],
    "explanation": "• AWS best practices: Enable MFA on root account immediately\n• Root account should be protected with MFA\n• MFA required for sensitive operations\n• Some actions like changing account settings require root + MFA\nRoot Account Best Practices:\n1. ✅ Enable MFA on root account\n2. ✅ Don't use root for everyday tasks\n3. ✅ Delete root access keys (use IAM users instead)\n4. ✅ Create IAM users for administrative tasks\n5. ✅ Use root only for tasks requiring root\n6. ✅ Secure root credentials (password manager)\nTasks Requiring Root Account:\n• Change account settings\n• Close AWS account\n• Change AWS Support plan\n• Restore IAM user permissions\n• Register as seller in Reserved Instance Marketplace\n• Configure S3 bucket for MFA Delete\n• Sign up for GovCloud",
    "module": "IAM",
    "multi": true,
    "why": [
      "AWS best practices: Enable MFA on root account immediately.",
      "Root account should be protected with MFA.",
      "MFA required for sensitive operations.",
      "Some actions like changing account settings require root + MFA.",
      "Root Account Best Practices:.",
      "1. ✅ Enable MFA on root account.",
      "2. ✅ Don't use root for everyday tasks.",
      "3. ✅ Delete root access keys (use IAM users instead)",
      "4. ✅ Create IAM users for administrative tasks.",
      "5. ✅ Use root only for tasks requiring root.",
      "6. ✅ Secure root credentials (password manager)",
      "Tasks Requiring Root Account:.",
      "Change account settings.",
      "Close AWS account.",
      "Change AWS Support plan.",
      "Restore IAM user permissions.",
      "Register as seller in Reserved Instance Marketplace.",
      "Configure S3 bucket for MFA Delete.",
      "Sign up for GovCloud."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "03-1",
    "q": "A company needs to run a batch processing job that can tolerate interruptions and must minimize costs. Which EC2 pricing model should be used?",
    "options": {
      "A": "On-Demand Instances",
      "B": "Reserved Instances",
      "C": "Spot Instances",
      "D": "Dedicated Hosts"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Spot Instances offer up to 90% discount compared to On-Demand\n• Can be interrupted with 2-minute warning when AWS needs capacity\n• Perfect for fault-tolerant, flexible workloads\n• Ideal Use Cases: Batch jobs, data analysis, image processing, CI/CD\n• Option A: On-Demand is most expensive\n• Option B: Reserved requires 1-3 year commitment\n• Option D: Dedicated Hosts are most expensive, for compliance",
    "module": "Compute",
    "multi": false,
    "why": [
      "Can be interrupted with 2-minute warning when AWS needs capacity.",
      "Perfect for fault-tolerant, flexible workloads.",
      "Ideal Use Cases: Batch jobs, data analysis, image processing, CI/CD."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "On-Demand is most expensive."
      },
      {
        "l": [
          "B"
        ],
        "t": "Reserved requires 1-3 year commitment."
      },
      {
        "l": [
          "D"
        ],
        "t": "Dedicated Hosts are most expensive, for compliance."
      }
    ],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "03-2",
    "q": "An application experiences predictable traffic spikes every Monday at 9 AM. What is the MOST cost-effective Auto Scaling approach?",
    "options": {
      "A": "Target Tracking Scaling",
      "B": "Simple Scaling",
      "C": "Step Scaling",
      "D": "Scheduled Scaling"
    },
    "answer": [
      "D"
    ],
    "explanation": "• Scheduled Scaling scales based on predefined schedule\n• Perfect for predictable traffic patterns\n• Scales before traffic spike occurs (proactive)\n• Most cost-effective for known patterns\nSchedule Example:\n• Option A: Target Tracking is reactive, scales after metric changes\n• Option B/C: Step/Simple scaling are reactive\n• Scheduled = Proactive, Target/Step/Simple = Reactive",
    "module": "Compute",
    "multi": false,
    "why": [
      "Perfect for predictable traffic patterns.",
      "Scales before traffic spike occurs (proactive)",
      "Most cost-effective for known patterns.",
      "Schedule Example:.",
      "Option B/C: Step/Simple scaling are reactive.",
      "Scheduled = Proactive, Target/Step/Simple = Reactive."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Target Tracking is reactive, scales after metric changes."
      }
    ],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "03-3",
    "q": "A web application requires high availability across multiple Availability Zones with automatic distribution of traffic. Which load balancer should be used for HTTP/HTTPS traffic with advanced routing?",
    "options": {
      "A": "Classic Load Balancer",
      "B": "Application Load Balancer",
      "C": "Network Load Balancer",
      "D": "Gateway Load Balancer"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Application Load Balancer (ALB) operates at Layer 7 (HTTP/HTTPS)\n• Advanced routing: path-based, host-based, header-based\n• WebSocket and HTTP/2 support\n• Perfect for modern web applications\nALB Features:\n• Path-based routing: `/api/*` → API servers, `/images/*` → image servers\n• Host-based routing: `api.example.com` vs `www.example.com`\n• Query string/header routing\n• Fixed response, redirects\n• AWS WAF integration\n• Authentication (OIDC, Cognito)\nLoad Balancer Comparison:\n• CLB: Legacy, Layer 4/7, basic\n• ALB: Layer 7, HTTP/HTTPS, advanced routing\n• NLB: Layer 4, TCP/UDP, ultra-high performance, static IP\n• GLB: Layer 3, third-party virtual appliances",
    "module": "Compute",
    "multi": false,
    "why": [
      "Advanced routing: path-based, host-based, header-based.",
      "WebSocket and HTTP/2 support.",
      "Perfect for modern web applications.",
      "ALB Features:.",
      "Path-based routing: `/api/` → API servers, `/images/` → image servers.",
      "Host-based routing: `api.example.com` vs `www.example.com`.",
      "Query string/header routing.",
      "Fixed response, redirects.",
      "AWS WAF integration.",
      "Authentication (OIDC, Cognito)",
      "Load Balancer Comparison:.",
      "CLB: Legacy, Layer 4/7, basic.",
      "ALB: Layer 7, HTTP/HTTPS, advanced routing.",
      "NLB: Layer 4, TCP/UDP, ultra-high performance, static IP.",
      "GLB: Layer 3, third-party virtual appliances."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "03-4",
    "q": "A microservices application needs a load balancer that can handle millions of requests per second with ultra-low latency and static IP addresses. Which load balancer should be used?",
    "options": {
      "A": "Application Load Balancer",
      "B": "Network Load Balancer",
      "C": "Classic Load Balancer",
      "D": "CloudFront"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Network Load Balancer (NLB) operates at Layer 4 (TCP/UDP/TLS)\n• Handles millions of requests per second\n• Ultra-low latency (microseconds)\n• Static IP addresses (one per AZ)\n• Preserves source IP address\nNLB Use Cases:\n• Extreme performance requirements\n• Static/Elastic IP needed (whitelist in firewalls)\n• TCP/UDP traffic\n• PrivateLink endpoints\n• Game servers, IoT, real-time applications\nNLB vs ALB:\n• NLB: Layer 4, faster, static IP, TCP/UDP\n• ALB: Layer 7, advanced routing, HTTP/HTTPS",
    "module": "Compute",
    "multi": false,
    "why": [
      "Handles millions of requests per second.",
      "Ultra-low latency (microseconds)",
      "Static IP addresses (one per AZ)",
      "Preserves source IP address.",
      "NLB Use Cases:.",
      "Extreme performance requirements.",
      "Static/Elastic IP needed (whitelist in firewalls)",
      "TCP/UDP traffic.",
      "PrivateLink endpoints.",
      "Game servers, IoT, real-time applications.",
      "NLB vs ALB:.",
      "NLB: Layer 4, faster, static IP, TCP/UDP.",
      "ALB: Layer 7, advanced routing, HTTP/HTTPS."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "03-5",
    "q": "A company wants to run code in response to events without managing servers. The code should execute only when triggered and scale automatically. Which service should be used?",
    "options": {
      "A": "Amazon EC2 with Auto Scaling",
      "B": "AWS Lambda",
      "C": "Amazon ECS",
      "D": "AWS Elastic Beanstalk"
    },
    "answer": [
      "B"
    ],
    "explanation": "• AWS Lambda is serverless compute service\n• Event-driven execution\n• Automatic scaling (1 to 1000s of concurrent executions)\n• Pay only for compute time (per millisecond)\n• No server management\nLambda Characteristics:\n• Max execution time: 15 minutes\n• Memory: 128 MB to 10,240 MB\n• Deployment package: 50 MB (zipped), 250 MB (unzipped)\n• Concurrent executions: 1000 (default, can increase)\n• Billing: Per request + compute time (GB-seconds)\nLambda Triggers:\n• API Gateway (REST APIs)\n• S3 events\n• DynamoDB Streams\n• EventBridge (scheduled/event-based)\n• SNS, SQS\n• Kinesis",
    "module": "Compute",
    "multi": false,
    "why": [
      "Event-driven execution.",
      "Automatic scaling (1 to 1000s of concurrent executions)",
      "Pay only for compute time (per millisecond)",
      "No server management.",
      "Lambda Characteristics:.",
      "Max execution time: 15 minutes.",
      "Memory: 128 MB to 10,240 MB.",
      "Deployment package: 50 MB (zipped), 250 MB (unzipped)",
      "Concurrent executions: 1000 (default, can increase)",
      "Billing: Per request + compute time (GB-seconds)",
      "Lambda Triggers:.",
      "API Gateway (REST APIs)",
      "S3 events.",
      "DynamoDB Streams.",
      "EventBridge (scheduled/event-based)",
      "SNS, SQS.",
      "Kinesis."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "03-6",
    "q": "An application running on EC2 instances experiences variable traffic and needs to maintain 50% average CPU utilization. What Auto Scaling policy should be configured?",
    "options": {
      "A": "Simple Scaling",
      "B": "Step Scaling",
      "C": "Target Tracking Scaling",
      "D": "Predictive Scaling"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Target Tracking Scaling automatically adjusts capacity to maintain target metric\n• Specify target value (e.g., 50% CPU), Auto Scaling does the rest\n• Easiest to configure and manage\n• Creates and manages CloudWatch alarms automatically\nConfiguration Example:\nPredefined Metrics:\n• `ASGAverageCPUUtilization`\n• `ASGAverageNetworkIn`\n• `ASGAverageNetworkOut`\n• `ALBRequestCountPerTarget`\nScaling Policy Types:\n• Target Tracking: Maintain specific metric value (EASIEST)\n• Step: Add/remove capacity based on CloudWatch alarm thresholds\n• Simple: Single scaling adjustment (legacy)\n• Predictive: ML-based forecasting",
    "module": "Compute",
    "multi": false,
    "why": [
      "Specify target value (e.g., 50% CPU), Auto Scaling does the rest.",
      "Easiest to configure and manage.",
      "Creates and manages CloudWatch alarms automatically.",
      "Configuration Example:.",
      "Predefined Metrics:.",
      "`ASGAverageCPUUtilization`.",
      "`ASGAverageNetworkIn`.",
      "`ASGAverageNetworkOut`.",
      "`ALBRequestCountPerTarget`.",
      "Scaling Policy Types:.",
      "Target Tracking: Maintain specific metric value (EASIEST)",
      "Step: Add/remove capacity based on CloudWatch alarm thresholds.",
      "Simple: Single scaling adjustment (legacy)",
      "Predictive: ML-based forecasting."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "03-7",
    "q": "A company needs to run Docker containers without managing EC2 instances. Which service should be used?",
    "options": {
      "A": "Amazon ECS with EC2 launch type",
      "B": "Amazon ECS with Fargate launch type",
      "C": "Amazon EKS",
      "D": "AWS Elastic Beanstalk"
    },
    "answer": [
      "B"
    ],
    "explanation": "• AWS Fargate is serverless container platform\n• No EC2 instance management required\n• Pay for vCPU and memory resources used\n• Works with both ECS and EKS\nContainer Service Options:\n| Service | Description | Management |\n|---------|-------------|------------|\n| ECS + EC2 | Container orchestration on EC2 | Manage instances |\n| ECS + Fargate | Serverless containers | No instance management |\n| EKS + EC2 | Kubernetes on EC2 | Manage instances + K8s |\n| EKS + Fargate | Serverless Kubernetes | No instance management |\nFargate Benefits:\n• No instance provisioning/scaling\n• No patching/securing instances\n• Pay per task\n• Simpler operations\nWhen to use Fargate vs EC2:\n• Fargate: Simplicity, less operational overhead\n• EC2: Need specific instance types, GPU, cost optimization for sustained workloads",
    "module": "Compute",
    "multi": false,
    "why": [
      "AWS Fargate is serverless container platform.",
      "No EC2 instance management required.",
      "Pay for vCPU and memory resources used.",
      "Works with both ECS and EKS.",
      "Container Service Options:.",
      "| Service | Description | Management |.",
      "|---------|-------------|------------|.",
      "| ECS + EC2 | Container orchestration on EC2 | Manage instances |.",
      "| ECS + Fargate | Serverless containers | No instance management |.",
      "| EKS + EC2 | Kubernetes on EC2 | Manage instances + K8s |.",
      "| EKS + Fargate | Serverless Kubernetes | No instance management |.",
      "Fargate Benefits:.",
      "No instance provisioning/scaling.",
      "No patching/securing instances.",
      "Pay per task.",
      "Simpler operations.",
      "When to use Fargate vs EC2:.",
      "Fargate: Simplicity, less operational overhead.",
      "EC2: Need specific instance types, GPU, cost optimization for sustained workloads."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "03-8",
    "q": "An EC2 instance needs low-latency, high-throughput connectivity to other instances in the same cluster. Which placement group should be used?",
    "options": {
      "A": "Cluster Placement Group",
      "B": "Spread Placement Group",
      "C": "Partition Placement Group",
      "D": "No placement group needed"
    },
    "answer": [
      "A"
    ],
    "explanation": "• Cluster Placement Group places instances close together in single AZ\n• Low-latency network (10 Gbps between instances)\n• High throughput, enhanced networking\n• All instances in same rack/physical proximity\nPlacement Group Types:\n| Type | Purpose | AZ | Max Instances |\n|------|---------|----|----|\n| Cluster | Low latency, high throughput | Single AZ | Limited by instance type |\n| Spread | Reduce correlated failures | Multi-AZ | 7 per AZ |\n| Partition | Large distributed workloads | Multi-AZ | 7 partitions per AZ |\nUse Cases:\n• Cluster: HPC, big data, low-latency apps\n• Spread: Critical applications (each instance separate rack)\n• Partition: Hadoop, Cassandra, Kafka (partition = rack)\nLimitations:\n• Cluster: Single AZ only\n• Spread: Max 7 instances per AZ\n• Not all instance types supported",
    "module": "Compute",
    "multi": false,
    "why": [
      "Low-latency network (10 Gbps between instances)",
      "High throughput, enhanced networking.",
      "All instances in same rack/physical proximity.",
      "Placement Group Types:.",
      "| Type | Purpose | AZ | Max Instances |.",
      "|------|---------|----|----|.",
      "| Cluster | Low latency, high throughput | Single AZ | Limited by instance type |.",
      "| Spread | Reduce correlated failures | Multi-AZ | 7 per AZ |.",
      "| Partition | Large distributed workloads | Multi-AZ | 7 partitions per AZ |.",
      "Use Cases:.",
      "Cluster: HPC, big data, low-latency apps.",
      "Spread: Critical applications (each instance separate rack)",
      "Partition: Hadoop, Cassandra, Kafka (partition = rack)",
      "Limitations:.",
      "Cluster: Single AZ only.",
      "Spread: Max 7 instances per AZ.",
      "Not all instance types supported."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "03-9",
    "q": "A company wants to deploy a web application with automatic scaling, load balancing, and health monitoring without managing infrastructure. Which service should be used?",
    "options": {
      "A": "AWS Lambda",
      "B": "Amazon EC2 with Auto Scaling",
      "C": "AWS Elastic Beanstalk",
      "D": "Amazon Lightsail"
    },
    "answer": [
      "C"
    ],
    "explanation": "• AWS Elastic Beanstalk is PaaS (Platform as a Service)\n• Upload code, Beanstalk handles deployment\n• Automatic provisioning: EC2, ALB, Auto Scaling, RDS, monitoring\n• Multiple platforms: Java, .NET, PHP, Node.js, Python, Ruby, Go, Docker\nElastic Beanstalk Features:\n• Automatic capacity provisioning\n• Load balancing\n• Auto Scaling\n• Health monitoring\n• Platform updates\n• Still have full control over resources (not completely abstracted)\nDeployment Options:\n• All at once: Fastest, downtime\n• Rolling: Partial batches, reduced capacity\n• Rolling with additional batch: Maintains full capacity\n• Immutable: New instances, safest\n• Blue/Green: Manual via swap URLs\nBeanstalk vs Others:\n• Lambda: Functions, not full applications\n• EC2 + Auto Scaling: More manual configuration\n• Lightsail: Simpler, less scalable",
    "module": "Compute",
    "multi": false,
    "why": [
      "Upload code, Beanstalk handles deployment.",
      "Automatic provisioning: EC2, ALB, Auto Scaling, RDS, monitoring.",
      "Multiple platforms: Java, .NET, PHP, Node.js, Python, Ruby, Go, Docker.",
      "Elastic Beanstalk Features:.",
      "Automatic capacity provisioning.",
      "Load balancing.",
      "Auto Scaling.",
      "Health monitoring.",
      "Platform updates.",
      "Still have full control over resources (not completely abstracted)",
      "Deployment Options:.",
      "All at once: Fastest, downtime.",
      "Rolling: Partial batches, reduced capacity.",
      "Rolling with additional batch: Maintains full capacity.",
      "Immutable: New instances, safest.",
      "Blue/Green: Manual via swap URLs.",
      "Beanstalk vs Others:.",
      "Lambda: Functions, not full applications.",
      "EC2 + Auto Scaling: More manual configuration.",
      "Lightsail: Simpler, less scalable."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "03-10",
    "q": "An application requires guaranteed capacity reservation for EC2 instances in a specific Availability Zone without long-term commitment. Which option should be used?",
    "options": {
      "A": "Reserved Instances",
      "B": "Savings Plans",
      "C": "On-Demand Capacity Reservations",
      "D": "Spot Instances"
    },
    "answer": [
      "C"
    ],
    "explanation": "• On-Demand Capacity Reservations reserve capacity in specific AZ\n• No long-term commitment (can cancel anytime)\n• Charged at On-Demand rates whether used or not\n• Ensures capacity availability when needed\nCapacity Options Comparison:\n| Option | Commitment | Discount | Capacity Guarantee |\n|--------|------------|----------|-------------------|\n| On-Demand | None | None | No guarantee |\n| Reserved | 1-3 years | Up to 72% | Yes (regional or zonal) |\n| Savings Plans | 1-3 years | Up to 66% | No |\n| Capacity Reservations | None | None | Yes (zonal) |\n| Spot | None | Up to 90% | No (can be interrupted) |\nUse Case:\n• Disaster recovery (reserve capacity but don't always run)\n• Business-critical events (Black Friday)\n• Regulatory/compliance requirements\nCost Optimization: Combine Capacity Reservation with Savings Plan",
    "module": "Compute",
    "multi": false,
    "why": [
      "No long-term commitment (can cancel anytime)",
      "Charged at On-Demand rates whether used or not.",
      "Ensures capacity availability when needed.",
      "Capacity Options Comparison:.",
      "| Option | Commitment | Discount | Capacity Guarantee |.",
      "|--------|------------|----------|-------------------|.",
      "| On-Demand | None | None | No guarantee |.",
      "| Reserved | 1-3 years | Up to 72% | Yes (regional or zonal) |.",
      "| Savings Plans | 1-3 years | Up to 66% | No |.",
      "| Capacity Reservations | None | None | Yes (zonal) |.",
      "| Spot | None | Up to 90% | No (can be interrupted) |.",
      "Use Case:.",
      "Disaster recovery (reserve capacity but don't always run)",
      "Business-critical events (Black Friday)",
      "Regulatory/compliance requirements.",
      "Cost Optimization: Combine Capacity Reservation with Savings Plan."
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "03-11",
    "q": "A Lambda function is timing out after 3 seconds when processing large files. What should be changed?",
    "options": {
      "A": "Increase Lambda memory allocation",
      "B": "Increase Lambda timeout setting",
      "C": "Use Lambda layers",
      "D": "Switch to EC2"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Lambda default timeout is 3 seconds\n• Can be increased up to 15 minutes (900 seconds)\n• Timeout configuration is separate from memory\nLambda Configuration:\n• Memory: 128 MB to 10,240 MB (10 GB)\n• Timeout: 1 second to 900 seconds (15 minutes)\n• CPU scales with memory (1,792 MB = 1 vCPU)\n• Ephemeral storage (/tmp): 512 MB to 10,240 MB\nPerformance Tuning:\n1. Increase timeout for long-running tasks\n2. Increase memory if CPU-bound (CPU scales with memory)\n3. Optimize code\n4. Use async patterns for very long tasks\nWhen Lambda is NOT suitable:\n• Tasks > 15 minutes\n• Need GPU\n• Stateful applications\n• Real-time latency requirements (cold starts)",
    "module": "Compute",
    "multi": false,
    "why": [
      "Lambda default timeout is 3 seconds.",
      "Can be increased up to 15 minutes (900 seconds)",
      "Timeout configuration is separate from memory.",
      "Lambda Configuration:.",
      "Memory: 128 MB to 10,240 MB (10 GB)",
      "Timeout: 1 second to 900 seconds (15 minutes)",
      "CPU scales with memory (1,792 MB = 1 vCPU)",
      "Ephemeral storage (/tmp): 512 MB to 10,240 MB.",
      "Performance Tuning:.",
      "1.",
      "Increase timeout for long-running tasks.",
      "2.",
      "Increase memory if CPU-bound (CPU scales with memory)",
      "3.",
      "Optimize code.",
      "4.",
      "Use async patterns for very long tasks.",
      "When Lambda is NOT suitable:.",
      "Tasks > 15 minutes.",
      "Need GPU.",
      "Stateful applications.",
      "Real-time latency requirements (cold starts)"
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "03-12",
    "q": "A company wants to run EC2 instances with dedicated physical servers for compliance requirements. Which option should be used?",
    "options": {
      "A": "Dedicated Instances",
      "B": "Dedicated Hosts",
      "C": "Reserved Instances",
      "D": "Spot Instances"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Dedicated Hosts: Physical server dedicated to your use\n• Visibility into sockets, cores, host ID\n• Support for BYOL (Bring Your Own License) - Windows Server, SQL Server\n• Meet compliance requirements\n• Most expensive option\nDedicated Instances vs Dedicated Hosts:\n| Feature | Dedicated Instances | Dedicated Hosts |\n|---------|-------------------|----------------|\n| Isolation | Instance-level | Physical server |\n| Visibility | No hardware visibility | Socket/core visibility |\n| BYOL | Not supported | Supported |\n| Placement | Automatic | Control placement |\n| Billing | Per instance | Per host |\n| Use Case | Compliance (soft requirement) | BYOL, compliance (strict) |\nUse Cases for Dedicated Hosts:\n• Server-bound software licenses\n• Regulatory compliance\n• Track physical host usage",
    "module": "Compute",
    "multi": false,
    "why": [
      "Visibility into sockets, cores, host ID.",
      "Support for BYOL (Bring Your Own License) - Windows Server, SQL Server.",
      "Meet compliance requirements.",
      "Most expensive option.",
      "Dedicated Instances vs Dedicated Hosts:.",
      "| Feature | Dedicated Instances | Dedicated Hosts |.",
      "|---------|-------------------|----------------|.",
      "| Isolation | Instance-level | Physical server |.",
      "| Visibility | No hardware visibility | Socket/core visibility |.",
      "| BYOL | Not supported | Supported |.",
      "| Placement | Automatic | Control placement |.",
      "| Billing | Per instance | Per host |.",
      "| Use Case | Compliance (soft requirement) | BYOL, compliance (strict) |.",
      "Use Cases for Dedicated Hosts:.",
      "Server-bound software licenses.",
      "Regulatory compliance.",
      "Track physical host usage."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "03-13",
    "q": "An Auto Scaling group has 10 instances. An administrator manually terminates 3 instances. What happens next?",
    "options": {
      "A": "Auto Scaling terminates 3 more instances",
      "B": "Auto Scaling launches 3 new instances",
      "C": "Auto Scaling does nothing",
      "D": "Auto Scaling sends an alert"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Auto Scaling maintains desired capacity\n• If instances are terminated (manually or automatically), ASG replaces them\n• Ensures desired count is maintained\nAuto Scaling Group Configuration:\n• Minimum: Minimum number of instances\n• Desired: Target number of instances\n• Maximum: Maximum number of instances\nScaling Activities:\n• Scale out: Launch instances (desired < current)\n• Scale in: Terminate instances (desired > current)\n• Replace unhealthy: Terminate and replace\n• Rebalance across AZs\nInstance Protection:\n• Can enable scale-in protection on specific instances\n• Prevents Auto Scaling from terminating protected instances\n• Manual termination still works",
    "module": "Compute",
    "multi": false,
    "why": [
      "Auto Scaling maintains desired capacity.",
      "If instances are terminated (manually or automatically), ASG replaces them.",
      "Ensures desired count is maintained.",
      "Auto Scaling Group Configuration:.",
      "Minimum: Minimum number of instances.",
      "Desired: Target number of instances.",
      "Maximum: Maximum number of instances.",
      "Scaling Activities:.",
      "Scale out: Launch instances (desired < current)",
      "Scale in: Terminate instances (desired > current)",
      "Replace unhealthy: Terminate and replace.",
      "Rebalance across AZs.",
      "Instance Protection:.",
      "Can enable scale-in protection on specific instances.",
      "Prevents Auto Scaling from terminating protected instances.",
      "Manual termination still works."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "03-14",
    "q": "A batch processing application uses Lambda functions but needs to coordinate multiple steps with error handling and retries. Which service should be used?",
    "options": {
      "A": "Amazon SQS",
      "B": "Amazon SNS",
      "C": "AWS Step Functions",
      "D": "Amazon EventBridge"
    },
    "answer": [
      "C"
    ],
    "explanation": "• AWS Step Functions orchestrates serverless workflows\n• Coordinate multiple Lambda functions\n• Built-in error handling, retries, parallel execution\n• Visual workflow designer\nStep Functions Features:\n• State machine: Define workflow as states\n• Error handling: Catch errors, retry logic\n• Parallel execution: Run steps concurrently\n• Wait states: Delays between steps\n• Choice states: Conditional logic\n• Map states: Iterate over arrays\nWorkflow Types:\n• Standard: Long-running (up to 1 year), exactly-once execution\n• Express: Short-lived (5 min), at-least-once, high-rate\nUse Cases:\n• ETL pipelines\n• Order processing\n• Video processing\n• Machine learning workflows\nStep Functions vs Alternatives:\n• SQS: Message queue, no orchestration\n• SNS: Pub/sub messaging, no orchestration\n• EventBridge: Event routing, simpler workflows",
    "module": "Compute",
    "multi": false,
    "why": [
      "Coordinate multiple Lambda functions.",
      "Built-in error handling, retries, parallel execution.",
      "Visual workflow designer.",
      "Step Functions Features:.",
      "State machine: Define workflow as states.",
      "Error handling: Catch errors, retry logic.",
      "Parallel execution: Run steps concurrently.",
      "Wait states: Delays between steps.",
      "Choice states: Conditional logic.",
      "Map states: Iterate over arrays.",
      "Workflow Types:.",
      "Standard: Long-running (up to 1 year), exactly-once execution.",
      "Express: Short-lived (5 min), at-least-once, high-rate.",
      "Use Cases:.",
      "ETL pipelines.",
      "Order processing.",
      "Video processing.",
      "Machine learning workflows.",
      "Step Functions vs Alternatives:.",
      "SQS: Message queue, no orchestration.",
      "SNS: Pub/sub messaging, no orchestration.",
      "EventBridge: Event routing, simpler workflows."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "03-15",
    "q": "An application needs consistent performance with baseline CPU and ability to burst above baseline when needed. Which EC2 instance type should be used?",
    "options": {
      "A": "M5 (General Purpose)",
      "B": "C5 (Compute Optimized)",
      "C": "T3 (Burstable Performance)",
      "D": "R5 (Memory Optimized)"
    },
    "answer": [
      "C"
    ],
    "explanation": "• T3/T4g instances are burstable performance instances\n• Baseline CPU performance with credit system\n• Accumulate CPU credits when below baseline\n• Burst above baseline using credits\n• Cost-effective for variable workloads\nT3 CPU Credits:\n• Baseline performance depends on instance size\n• Earn credits when CPU < baseline\n• Spend credits when CPU > baseline\n• Unlimited mode: Can burst beyond credits (additional charges)\nT3 Instance Types:\n• t3.nano: 5% baseline\n• t3.micro: 10% baseline\n• t3.small: 20% baseline\n• t3.medium: 20% baseline\n• t3.large: 30% baseline\nUse Cases:\n• Web servers, dev/test\n• Small databases\n• Code repositories\n• Microservices\nWhen NOT to use T3:\n• Sustained high CPU usage\n• Predictable high performance needs\n• Use C5/M5 for sustained performance",
    "module": "Compute",
    "multi": false,
    "why": [
      "T3/T4g instances are burstable performance instances.",
      "Baseline CPU performance with credit system.",
      "Accumulate CPU credits when below baseline.",
      "Burst above baseline using credits.",
      "Cost-effective for variable workloads.",
      "T3 CPU Credits:.",
      "Baseline performance depends on instance size.",
      "Earn credits when CPU < baseline.",
      "Spend credits when CPU > baseline.",
      "Unlimited mode: Can burst beyond credits (additional charges)",
      "T3 Instance Types:.",
      "T3.nano: 5% baseline.",
      "T3.micro: 10% baseline.",
      "T3.small: 20% baseline.",
      "T3.medium: 20% baseline.",
      "T3.large: 30% baseline.",
      "Use Cases:.",
      "Web servers, dev/test.",
      "Small databases.",
      "Code repositories.",
      "Microservices.",
      "When NOT to use T3:.",
      "Sustained high CPU usage.",
      "Predictable high performance needs.",
      "Use C5/M5 for sustained performance."
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "03-16",
    "q": "A company wants to deploy containerized applications using Kubernetes without managing the control plane. Which service should be used?",
    "options": {
      "A": "Amazon ECS",
      "B": "Amazon EKS",
      "C": "AWS Fargate",
      "D": "AWS Elastic Beanstalk"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Amazon EKS (Elastic Kubernetes Service) is managed Kubernetes\n• AWS manages Kubernetes control plane\n• Compatible with standard Kubernetes tools (kubectl, Helm)\n• Multi-AZ control plane for high availability\nEKS Features:\n• Managed K8s control plane (etcd, API server)\n• Automatic upgrades and patches\n• Integrate with AWS services (IAM, VPC, ALB, CloudWatch)\n• CNCF certified (standard Kubernetes)\nEKS Worker Nodes Options:\n• Self-managed nodes: You manage EC2 instances\n• Managed node groups: AWS manages EC2 lifecycle\n• Fargate: Serverless, no node management\nECS vs EKS:\n• ECS: AWS-proprietary, simpler, tight AWS integration\n• EKS: Standard Kubernetes, portable, more complex, existing K8s expertise\nWhen to use EKS:\n• Existing Kubernetes workloads\n• Kubernetes expertise in team\n• Multi-cloud/hybrid requirements\n• Standard Kubernetes tools needed",
    "module": "Compute",
    "multi": false,
    "why": [
      "AWS manages Kubernetes control plane.",
      "Compatible with standard Kubernetes tools (kubectl, Helm)",
      "Multi-AZ control plane for high availability.",
      "EKS Features:.",
      "Managed K8s control plane (etcd, API server)",
      "Automatic upgrades and patches.",
      "Integrate with AWS services (IAM, VPC, ALB, CloudWatch)",
      "CNCF certified (standard Kubernetes)",
      "EKS Worker Nodes Options:.",
      "Self-managed nodes: You manage EC2 instances.",
      "Managed node groups: AWS manages EC2 lifecycle.",
      "Fargate: Serverless, no node management.",
      "ECS vs EKS:.",
      "ECS: AWS-proprietary, simpler, tight AWS integration.",
      "EKS: Standard Kubernetes, portable, more complex, existing K8s expertise.",
      "When to use EKS:.",
      "Existing Kubernetes workloads.",
      "Kubernetes expertise in team.",
      "Multi-cloud/hybrid requirements.",
      "Standard Kubernetes tools needed."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "03-17",
    "q": "An Auto Scaling group needs to ensure that newly launched instances are ready to serve traffic before receiving requests. What should be configured?",
    "options": {
      "A": "EC2 Status Checks",
      "B": "ELB Health Checks",
      "C": "Auto Scaling Health Check Grace Period",
      "D": "CloudWatch Alarms"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Health Check Grace Period gives instances time to boot and pass checks\n• Prevents premature termination during initialization\n• Default: 300 seconds (5 minutes)\n• Should be longer than application startup time\nAuto Scaling Health Checks:\n• EC2 health check: Instance running (default)\n• ELB health check: Instance passes load balancer health checks\n• Grace period applies to both types\nRecommended Configuration:\n1. Set grace period > application startup time\n2. Enable ELB health checks\n3. Configure ELB health check with appropriate interval/threshold",
    "module": "Compute",
    "multi": false,
    "why": [
      "Health Check Grace Period gives instances time to boot and pass checks.",
      "Prevents premature termination during initialization.",
      "Default: 300 seconds (5 minutes)",
      "Should be longer than application startup time.",
      "Auto Scaling Health Checks:.",
      "EC2 health check: Instance running (default)",
      "ELB health check: Instance passes load balancer health checks.",
      "Grace period applies to both types.",
      "Recommended Configuration:.",
      "1.",
      "Set grace period > application startup time.",
      "2.",
      "Enable ELB health checks.",
      "3.",
      "Configure ELB health check with appropriate interval/threshold."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "03-18",
    "q": "A company wants to migrate lift-and-shift Windows applications to AWS without refactoring. Which compute option is MOST appropriate?",
    "options": {
      "A": "AWS Lambda",
      "B": "Amazon ECS",
      "C": "Amazon EC2",
      "D": "AWS Fargate"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Amazon EC2 for lift-and-shift migrations\n• Run Windows Server, install applications as-is\n• Minimal refactoring required\n• Full control over OS and configuration\nMigration Strategies (6 R's):\n1. Rehost (Lift-and-Shift): Move as-is to EC2\n2. Replatform (Lift-Tinker-Shift): Minor optimizations\n3. Repurchase: Move to SaaS\n4. Refactor/Re-architect: Redesign for cloud-native\n5. Retire: Decommission\n6. Retain: Keep on-premises\nLift-and-Shift Approach:\n• Quick migration\n• Minimal risk\n• Can optimize later\n• Use AWS Application Migration Service (MGN)\nOther Options Not Suitable:\n• Lambda: Requires code changes, event-driven\n• ECS/Fargate: Requires containerization\n• EC2 is best for \"as-is\" Windows applications",
    "module": "Compute",
    "multi": false,
    "why": [
      "Run Windows Server, install applications as-is.",
      "Minimal refactoring required.",
      "Full control over OS and configuration.",
      "Migration Strategies (6 R's):.",
      "1.",
      "Rehost (Lift-and-Shift): Move as-is to EC2.",
      "2.",
      "Replatform (Lift-Tinker-Shift): Minor optimizations.",
      "3.",
      "Repurchase: Move to SaaS.",
      "4.",
      "Refactor/Re-architect: Redesign for cloud-native.",
      "5.",
      "Retire: Decommission.",
      "6.",
      "Retain: Keep on-premises.",
      "Lift-and-Shift Approach:.",
      "Quick migration.",
      "Minimal risk.",
      "Can optimize later.",
      "Use AWS Application Migration Service (MGN)",
      "Other Options Not Suitable:.",
      "Lambda: Requires code changes, event-driven.",
      "ECS/Fargate: Requires containerization.",
      "EC2 is best for \"as-is\" Windows applications."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "03-19",
    "q": "An application running on Lambda is invoked by S3 events. During peak times, thousands of files are uploaded simultaneously. How should Lambda handle this?",
    "options": {
      "A": "Increase Lambda memory",
      "B": "Enable Lambda reserved concurrency",
      "C": "Lambda automatically scales concurrently",
      "D": "Use Step Functions"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Lambda automatically scales to handle concurrent invocations\n• Each S3 event triggers separate Lambda invocation\n• Default account concurrency: 1000 (can request increase)\n• No configuration needed for basic scaling\nLambda Concurrency Types:\n• Account concurrency: Total concurrent executions across all functions (1000 default)\n• Reserved concurrency: Dedicated concurrency for specific function\n• Provisioned concurrency: Pre-initialized instances (reduce cold starts)\nWhen to use Reserved Concurrency:\n• Limit function concurrency (prevent overwhelming downstream)\n• Guarantee concurrency for critical functions\n• Prevent one function from consuming all account concurrency",
    "module": "Compute",
    "multi": false,
    "why": [
      "Each S3 event triggers separate Lambda invocation.",
      "Default account concurrency: 1000 (can request increase)",
      "No configuration needed for basic scaling.",
      "Lambda Concurrency Types:.",
      "Account concurrency: Total concurrent executions across all functions (1000 default)",
      "Reserved concurrency: Dedicated concurrency for specific function.",
      "Provisioned concurrency: Pre-initialized instances (reduce cold starts)",
      "When to use Reserved Concurrency:.",
      "Limit function concurrency (prevent overwhelming downstream)",
      "Guarantee concurrency for critical functions.",
      "Prevent one function from consuming all account concurrency."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "03-20",
    "q": "A web application needs to maintain session state. The application runs on multiple EC2 instances behind an Application Load Balancer. How should session state be managed?",
    "options": {
      "A": "Store session data on EC2 instance local storage",
      "B": "Enable sticky sessions on ALB",
      "C": "Store session data in Amazon ElastiCache or DynamoDB",
      "D": "Use NLB instead of ALB"
    },
    "answer": [
      "C"
    ],
    "explanation": "• External session storage (ElastiCache/DynamoDB) is best practice\n• Sessions accessible from any instance\n• Survives instance failures\n• True stateless architecture\nSession Management Options:\n| Option | Pros | Cons |\n|--------|------|------|\n| ElastiCache/DynamoDB | Stateless, scalable, resilient | Additional service |\n| Sticky Sessions | Simple | Uneven load, not resilient |\n| Local Storage | Fast | Lost on instance failure |\nWhy ElastiCache/DynamoDB is Better:\n• ✅ Any instance can serve any request\n• ✅ Auto Scaling works properly\n• ✅ Instance failure doesn't lose sessions\n• ✅ Better load distribution\nSticky Sessions Issues:\n• Uneven instance utilization\n• New instances get no traffic initially\n• Instance failure = lost sessions\n• Use only if refactoring is not possible",
    "module": "Compute",
    "multi": false,
    "why": [
      "External session storage (ElastiCache/DynamoDB) is best practice.",
      "Sessions accessible from any instance.",
      "Survives instance failures.",
      "True stateless architecture.",
      "Session Management Options:.",
      "| Option | Pros | Cons |.",
      "|--------|------|------|.",
      "| ElastiCache/DynamoDB | Stateless, scalable, resilient | Additional service |.",
      "| Sticky Sessions | Simple | Uneven load, not resilient |.",
      "| Local Storage | Fast | Lost on instance failure |.",
      "Why ElastiCache/DynamoDB is Better:.",
      "✅ Any instance can serve any request.",
      "✅ Auto Scaling works properly.",
      "✅ Instance failure doesn't lose sessions.",
      "✅ Better load distribution.",
      "Sticky Sessions Issues:.",
      "Uneven instance utilization.",
      "New instances get no traffic initially.",
      "Instance failure = lost sessions.",
      "Use only if refactoring is not possible."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "03-21",
    "q": "A company needs to run AWS services in its own data center to meet strict data residency requirements, while maintaining a consistent hybrid cloud experience. Which AWS service should they use?",
    "options": {
      "A": "AWS Outposts",
      "B": "Amazon EC2 Dedicated Hosts",
      "C": "AWS Snowball Edge",
      "D": "AWS Direct Connect"
    },
    "answer": [
      "A"
    ],
    "explanation": "• AWS Outposts brings native AWS services, infrastructure, and operating models to on-premises data centers\n• Provides a consistent hybrid experience\n• Supports EC2, EBS, RDS, ECS, EKS, S3, and more\n• Dedicated Hosts are for compliance, not hybrid cloud\n• Snowball Edge is for edge computing and data transfer, not full AWS services\n• Direct Connect is for network connectivity, not running AWS services on-premises",
    "module": "Compute",
    "multi": false,
    "why": [
      "Provides a consistent hybrid experience.",
      "Supports EC2, EBS, RDS, ECS, EKS, S3, and more.",
      "Dedicated Hosts are for compliance, not hybrid cloud.",
      "Snowball Edge is for edge computing and data transfer, not full AWS services.",
      "Direct Connect is for network connectivity, not running AWS services on-premises."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "03-22",
    "q": "A research organization needs to run large-scale, high-throughput batch jobs on AWS with automatic job scheduling and resource provisioning. Which service should they use?",
    "options": {
      "A": "AWS Batch",
      "B": "Amazon EC2 Auto Scaling",
      "C": "AWS Lambda",
      "D": "Amazon EMR"
    },
    "answer": [
      "A"
    ],
    "explanation": "• AWS Batch is a fully managed batch computing service\n• Automatically provisions compute resources and schedules jobs\n• Supports Docker containers and EC2/Spot/Fargate\n• EC2 Auto Scaling is for scaling instances, not job scheduling\n• Lambda is for short-lived, event-driven compute\n• EMR is for big data processing, not general batch jobs",
    "module": "Compute",
    "multi": false,
    "why": [
      "Automatically provisions compute resources and schedules jobs.",
      "Supports Docker containers and EC2/Spot/Fargate.",
      "EC2 Auto Scaling is for scaling instances, not job scheduling.",
      "Lambda is for short-lived, event-driven compute.",
      "EMR is for big data processing, not general batch jobs."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "03-23",
    "q": "A development team wants to share and deploy serverless applications published by AWS and third parties. Which AWS service should they use?",
    "options": {
      "A": "AWS Serverless Application Repository",
      "B": "AWS Marketplace",
      "C": "AWS Lambda Layers",
      "D": "AWS CloudFormation StackSets"
    },
    "answer": [
      "A"
    ],
    "explanation": "• AWS Serverless Application Repository is a managed repository for serverless apps\n• Allows sharing and deployment of Lambda-based applications\n• Marketplace is for commercial software, not serverless apps\n• Lambda Layers are for code sharing, not full applications\n• CloudFormation StackSets is for multi-account deployments",
    "module": "Compute",
    "multi": false,
    "why": [
      "Allows sharing and deployment of Lambda-based applications.",
      "Marketplace is for commercial software, not serverless apps.",
      "Lambda Layers are for code sharing, not full applications.",
      "CloudFormation StackSets is for multi-account deployments."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "03-24",
    "q": "A company wants to run VMware workloads on AWS with seamless integration and management using familiar VMware tools. Which solution should they use?",
    "options": {
      "A": "VMware Cloud on AWS",
      "B": "AWS Outposts",
      "C": "Amazon EC2 Dedicated Hosts",
      "D": "AWS Snowball Edge"
    },
    "answer": [
      "A"
    ],
    "explanation": "• VMware Cloud on AWS integrates VMware vSphere, NSX, and vSAN with AWS infrastructure\n• Enables seamless migration and hybrid operations\n• Managed by both AWS and VMware\n• Outposts is for running AWS services on-premises\n• Dedicated Hosts are for compliance\n• Snowball Edge is for edge computing",
    "module": "Compute",
    "multi": false,
    "why": [
      "Enables seamless migration and hybrid operations.",
      "Managed by both AWS and VMware.",
      "Outposts is for running AWS services on-premises.",
      "Dedicated Hosts are for compliance.",
      "Snowball Edge is for edge computing."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "03-25",
    "q": "A global enterprise needs to deploy AWS compute and storage services at the edge of mobile networks to deliver ultra-low latency applications. Which AWS service should they use?",
    "options": {
      "A": "AWS Wavelength",
      "B": "AWS Outposts",
      "C": "Amazon CloudFront",
      "D": "AWS Direct Connect"
    },
    "answer": [
      "A"
    ],
    "explanation": "• AWS Wavelength brings AWS services to the edge of 5G networks\n• Enables ultra-low latency applications for mobile and edge devices\n• Outposts is for on-premises data centers\n• CloudFront is a CDN, not edge compute\n• Direct Connect is for network connectivity",
    "module": "Compute",
    "multi": false,
    "why": [
      "Enables ultra-low latency applications for mobile and edge devices.",
      "Outposts is for on-premises data centers.",
      "CloudFront is a CDN, not edge compute.",
      "Direct Connect is for network connectivity."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "03-26",
    "q": "A company wants to run Amazon ECS and EKS workloads on its own infrastructure outside AWS, managed from the AWS Console. Which services should they use?",
    "options": {
      "A": "Amazon ECS Anywhere and Amazon EKS Anywhere",
      "B": "AWS Outposts",
      "C": "AWS Fargate",
      "D": "Amazon EC2 Dedicated Hosts"
    },
    "answer": [
      "A"
    ],
    "explanation": "• ECS Anywhere and EKS Anywhere extend container orchestration to on-premises infrastructure\n• Managed from AWS Console\n• Outposts is for running AWS infrastructure on-premises\n• Fargate is for serverless containers in AWS\n• Dedicated Hosts are for compliance",
    "module": "Compute",
    "multi": false,
    "why": [
      "ECS Anywhere and EKS Anywhere extend container orchestration to on-premises infrastructure.",
      "Managed from AWS Console.",
      "Outposts is for running AWS infrastructure on-premises.",
      "Fargate is for serverless containers in AWS.",
      "Dedicated Hosts are for compliance."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "03-27",
    "q": "A team needs a managed, scalable Apache Cassandra-compatible database for their application. Which AWS service should they use?",
    "options": {
      "A": "Amazon Keyspaces",
      "B": "Amazon DynamoDB",
      "C": "Amazon RDS for PostgreSQL",
      "D": "Amazon Aurora"
    },
    "answer": [
      "A"
    ],
    "explanation": "• Amazon Keyspaces is a managed Cassandra-compatible database\n• Supports Cassandra Query Language (CQL)\n• DynamoDB is NoSQL but not Cassandra-compatible\n• RDS and Aurora are relational databases",
    "module": "Compute",
    "multi": false,
    "why": [
      "Supports Cassandra Query Language (CQL)",
      "DynamoDB is NoSQL but not Cassandra-compatible.",
      "RDS and Aurora are relational databases."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "03-28",
    "q": "A financial institution needs a fully managed, immutable, cryptographically verifiable ledger database. Which AWS service should they use?",
    "options": {
      "A": "Amazon QLDB",
      "B": "Amazon Aurora",
      "C": "Amazon RDS",
      "D": "Amazon DynamoDB"
    },
    "answer": [
      "A"
    ],
    "explanation": "• Amazon QLDB (Quantum Ledger Database) is a fully managed ledger database\n• Provides immutable, cryptographically verifiable transaction log\n• Aurora, RDS, and DynamoDB are not ledger databases",
    "module": "Compute",
    "multi": false,
    "why": [
      "Provides immutable, cryptographically verifiable transaction log.",
      "Aurora, RDS, and DynamoDB are not ledger databases."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "04-1",
    "q": "A company needs to store frequently accessed data with the lowest latency and highest throughput. Cost is not the primary concern. Which S3 storage class should be used?",
    "options": {
      "A": "S3 Standard",
      "B": "S3 Intelligent-Tiering",
      "C": "S3 Standard-IA",
      "D": "S3 One Zone-IA"
    },
    "answer": [
      "A"
    ],
    "explanation": "• S3 Standard provides:\n• Millisecond latency\n• High throughput\n• 99.99% availability\n• 11 9's durability\n• Designed for frequently accessed data\nS3 Storage Classes Comparison:\n• Standard: Frequent access, highest cost\n• Intelligent-Tiering: Unknown/changing patterns, automatic tiering\n• Standard-IA: Infrequent access, lower cost, retrieval fees\n• One Zone-IA: Infrequent, single AZ, lowest IA cost\n• Glacier: Archive, minutes to hours retrieval\n• Glacier Deep Archive: Long-term archive, 12+ hours retrieval",
    "module": "Storage",
    "multi": false,
    "why": [
      "Millisecond latency.",
      "High throughput.",
      "99.99% availability.",
      "11 9's durability.",
      "Designed for frequently accessed data.",
      "S3 Storage Classes Comparison:.",
      "Standard: Frequent access, highest cost.",
      "Intelligent-Tiering: Unknown/changing patterns, automatic tiering.",
      "Standard-IA: Infrequent access, lower cost, retrieval fees.",
      "One Zone-IA: Infrequent, single AZ, lowest IA cost.",
      "Glacier: Archive, minutes to hours retrieval.",
      "Glacier Deep Archive: Long-term archive, 12+ hours retrieval."
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "04-2",
    "q": "A company stores infrequently accessed data in S3 Standard-IA. They need to access this data immediately when required. What is the retrieval time?",
    "options": {
      "A": "12 hours",
      "B": "3-5 hours",
      "C": "1-5 minutes",
      "D": "Milliseconds (immediate)"
    },
    "answer": [
      "D"
    ],
    "explanation": "• S3 Standard-IA provides immediate access (milliseconds)\n• \"IA\" means Infrequent Access, not slow access\n• Lower storage cost than Standard\n• Retrieval fees apply per GB\n• Minimum storage duration: 30 days\n• Minimum object size: 128 KB\nS3 Retrieval Times:\n• Standard/Standard-IA/One Zone-IA: Milliseconds\n• Intelligent-Tiering: Milliseconds\n• Glacier Instant Retrieval: Milliseconds\n• Glacier Flexible Retrieval: \n• Expedited: 1-5 minutes\n• Standard: 3-5 hours\n• Bulk: 5-12 hours\n• Glacier Deep Archive:\n• Standard: 12 hours\n• Bulk: 48 hours",
    "module": "Storage",
    "multi": false,
    "why": [
      "S3 Standard-IA provides immediate access (milliseconds)",
      "\"IA\" means Infrequent Access, not slow access.",
      "Lower storage cost than Standard.",
      "Retrieval fees apply per GB.",
      "Minimum storage duration: 30 days.",
      "Minimum object size: 128 KB.",
      "S3 Retrieval Times:.",
      "Standard/Standard-IA/One Zone-IA: Milliseconds.",
      "Intelligent-Tiering: Milliseconds.",
      "Glacier Instant Retrieval: Milliseconds.",
      "Glacier Flexible Retrieval:.",
      "Expedited: 1-5 minutes.",
      "Standard: 3-5 hours.",
      "Bulk: 5-12 hours.",
      "Glacier Deep Archive:.",
      "Standard: 12 hours.",
      "Bulk: 48 hours."
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "04-3",
    "q": "A company needs to store compliance data that must be retained for 7 years and accessed once or twice per year. Cost optimization is critical. Which storage solution is MOST cost-effective?",
    "options": {
      "A": "S3 Standard",
      "B": "S3 Glacier Flexible Retrieval",
      "C": "S3 Glacier Deep Archive",
      "D": "S3 Intelligent-Tiering"
    },
    "answer": [
      "C"
    ],
    "explanation": "• S3 Glacier Deep Archive is cheapest S3 storage class\n• Designed for long-term retention (7-10+ years)\n• Retrieval time: 12-48 hours (acceptable for rare access)\n• Lowest cost per GB\n• Perfect for compliance, regulatory archives\nCost Comparison (approximate):\n• Deep Archive: $0.00099/GB/month (cheapest)\n• Glacier Flexible: $0.0036/GB/month\n• Standard-IA: $0.0125/GB/month\n• Standard: $0.023/GB/month\nWhen to Use:\n• Deep Archive: Rarely accessed, 7+ years retention\n• Glacier Flexible: Occasionally accessed archives\n• Standard-IA: Monthly access\n• Standard: Frequent access",
    "module": "Storage",
    "multi": false,
    "why": [
      "Designed for long-term retention (7-10+ years)",
      "Retrieval time: 12-48 hours (acceptable for rare access)",
      "Lowest cost per GB.",
      "Perfect for compliance, regulatory archives.",
      "Cost Comparison (approximate):.",
      "Deep Archive: $0.00099/GB/month (cheapest)",
      "Glacier Flexible: $0.0036/GB/month.",
      "Standard-IA: $0.0125/GB/month.",
      "Standard: $0.023/GB/month.",
      "When to Use:.",
      "Deep Archive: Rarely accessed, 7+ years retention.",
      "Glacier Flexible: Occasionally accessed archives.",
      "Standard-IA: Monthly access.",
      "Standard: Frequent access."
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "04-4",
    "q": "A web application serves static content (images, CSS, JS) to global users. The content is stored in S3. What is the BEST way to improve performance and reduce latency?",
    "options": {
      "A": "Enable S3 Transfer Acceleration",
      "B": "Use CloudFront with S3 as origin",
      "C": "Enable S3 Cross-Region Replication",
      "D": "Use S3 Standard storage class"
    },
    "answer": [
      "B"
    ],
    "explanation": "• CloudFront is AWS's CDN (Content Delivery Network)\n• Caches content at 400+ edge locations globally\n• Reduces latency for users worldwide\n• Reduces load on origin S3 bucket\nCloudFront Benefits:\n• Low latency (content served from nearest edge)\n• High transfer speeds\n• DDoS protection (AWS Shield)\n• SSL/TLS support\n• Reduced S3 data transfer costs\nOther Options:\n• Transfer Acceleration: Speeds up uploads to S3, not downloads\n• Cross-Region Replication: Multi-region redundancy, not CDN\n• Storage class: Doesn't affect delivery performance",
    "module": "Storage",
    "multi": false,
    "why": [
      "CloudFront is AWS's CDN (Content Delivery Network)",
      "Caches content at 400+ edge locations globally.",
      "Reduces latency for users worldwide.",
      "Reduces load on origin S3 bucket.",
      "CloudFront Benefits:.",
      "Low latency (content served from nearest edge)",
      "High transfer speeds.",
      "DDoS protection (AWS Shield)",
      "SSL/TLS support.",
      "Reduced S3 data transfer costs.",
      "Other Options:.",
      "Transfer Acceleration: Speeds up uploads to S3, not downloads.",
      "Cross-Region Replication: Multi-region redundancy, not CDN.",
      "Storage class: Doesn't affect delivery performance."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "04-5",
    "q": "A company needs block storage for an EC2 instance running a database that requires consistent high IOPS. Which storage option should be used?",
    "options": {
      "A": "Instance Store",
      "B": "EBS General Purpose SSD (gp3)",
      "C": "EBS Provisioned IOPS SSD (io2)",
      "D": "Amazon EFS"
    },
    "answer": [
      "C"
    ],
    "explanation": "• EBS Provisioned IOPS SSD (io2/io2 Block Express) for high-performance databases\n• Consistent IOPS performance\n• Up to 64,000 IOPS per volume (io2)\n• Up to 256,000 IOPS (io2 Block Express)\n• 99.999% durability\nEBS Volume Types:\n| Type | Use Case | IOPS | Throughput |\n|------|----------|------|------------|\n| gp3 | General purpose | 16,000 | 1,000 MB/s |\n| io2 | High-performance databases | 64,000 | 1,000 MB/s |\n| io2 Block Express | Largest databases | 256,000 | 4,000 MB/s |\n| st1 | Big data, data warehouses | 500 | 500 MB/s |\n| sc1 | Cold storage | 250 | 250 MB/s |\nWhen to Use:\n• io2: Databases needing high, consistent IOPS\n• gp3: Most workloads, cost-effective\n• st1: Throughput-intensive, sequential\n• Instance Store: Temporary, highest performance",
    "module": "Storage",
    "multi": false,
    "why": [
      "Consistent IOPS performance.",
      "Up to 64,000 IOPS per volume (io2)",
      "Up to 256,000 IOPS (io2 Block Express)",
      "99.999% durability.",
      "EBS Volume Types:.",
      "| Type | Use Case | IOPS | Throughput |.",
      "|------|----------|------|------------|.",
      "| gp3 | General purpose | 16,000 | 1,000 MB/s |.",
      "| io2 | High-performance databases | 64,000 | 1,000 MB/s |.",
      "| io2 Block Express | Largest databases | 256,000 | 4,000 MB/s |.",
      "| st1 | Big data, data warehouses | 500 | 500 MB/s |.",
      "| sc1 | Cold storage | 250 | 250 MB/s |.",
      "When to Use:.",
      "Io2: Databases needing high, consistent IOPS.",
      "Gp3: Most workloads, cost-effective.",
      "St1: Throughput-intensive, sequential.",
      "Instance Store: Temporary, highest performance."
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "04-6",
    "q": "An application requires shared file storage accessible from multiple EC2 instances across multiple Availability Zones using NFS protocol. Which service should be used?",
    "options": {
      "A": "Amazon EBS",
      "B": "Amazon S3",
      "C": "Amazon EFS",
      "D": "Instance Store"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Amazon EFS (Elastic File System) provides:\n• Shared NFS file system\n• Multi-AZ access\n• Automatic scaling\n• Linux-compatible (NFS v4)\n• Concurrent access from 1000s of instances\nStorage Service Comparison:\n| Service | Protocol | Multi-Instance | Multi-AZ | Use Case |\n|---------|----------|----------------|----------|----------|\n| EBS | Block | No (single instance) | No | Databases, boot volumes |\n| EFS | NFS | Yes | Yes | Shared file storage |\n| FSx for Windows | SMB | Yes | Yes | Windows file shares |\n| S3 | HTTP/S | Yes | Yes | Object storage |\nEFS Performance Modes:\n• General Purpose: Low latency, most workloads\n• Max I/O: Higher latency, massive parallel access\nEFS Throughput Modes:\n• Bursting: Throughput scales with size\n• Provisioned: Set throughput independent of size",
    "module": "Storage",
    "multi": false,
    "why": [
      "Shared NFS file system.",
      "Multi-AZ access.",
      "Automatic scaling.",
      "Linux-compatible (NFS v4)",
      "Concurrent access from 1000s of instances.",
      "Storage Service Comparison:.",
      "| Service | Protocol | Multi-Instance | Multi-AZ | Use Case |.",
      "|---------|----------|----------------|----------|----------|.",
      "| EBS | Block | No (single instance) | No | Databases, boot volumes |.",
      "| EFS | NFS | Yes | Yes | Shared file storage |.",
      "| FSx for Windows | SMB | Yes | Yes | Windows file shares |.",
      "| S3 | HTTP/S | Yes | Yes | Object storage |.",
      "EFS Performance Modes:.",
      "General Purpose: Low latency, most workloads.",
      "Max I/O: Higher latency, massive parallel access.",
      "EFS Throughput Modes:.",
      "Bursting: Throughput scales with size.",
      "Provisioned: Set throughput independent of size."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "04-7",
    "q": "A company wants to automatically move S3 objects to cheaper storage classes based on access patterns. They don't want to manage this manually. What should they use?",
    "options": {
      "A": "S3 Lifecycle Policies",
      "B": "S3 Intelligent-Tiering",
      "C": "Manual scripts",
      "D": "AWS Lambda functions"
    },
    "answer": [
      "B"
    ],
    "explanation": "• S3 Intelligent-Tiering automatically moves objects between tiers\n• Monitors access patterns\n• No retrieval fees (unlike IA classes)\n• Small monthly monitoring fee per object\nIntelligent-Tiering Access Tiers:\n1. Frequent Access: Default, accessed frequently\n2. Infrequent Access: 30 days no access\n3. Archive Instant Access: 90 days no access\n4. Archive Access (optional): 90-270 days no access\n5. Deep Archive Access (optional): 180-730 days no access\nIntelligent-Tiering vs Lifecycle:\n• Intelligent-Tiering: Automatic based on access, no retrieval fees\n• Lifecycle: Rule-based transitions, set schedule\nWhen to Use:\n• Intelligent-Tiering: Unknown or changing access patterns\n• Lifecycle: Known patterns (e.g., move to Glacier after 90 days)",
    "module": "Storage",
    "multi": false,
    "why": [
      "Monitors access patterns.",
      "No retrieval fees (unlike IA classes)",
      "Small monthly monitoring fee per object.",
      "Intelligent-Tiering Access Tiers:.",
      "1.",
      "Frequent Access: Default, accessed frequently.",
      "2.",
      "Infrequent Access: 30 days no access.",
      "3.",
      "Archive Instant Access: 90 days no access.",
      "4.",
      "Archive Access (optional): 90-270 days no access.",
      "5.",
      "Deep Archive Access (optional): 180-730 days no access.",
      "Intelligent-Tiering vs Lifecycle:.",
      "Intelligent-Tiering: Automatic based on access, no retrieval fees.",
      "Lifecycle: Rule-based transitions, set schedule.",
      "When to Use:.",
      "Intelligent-Tiering: Unknown or changing access patterns.",
      "Lifecycle: Known patterns (e.g., move to Glacier after 90 days)"
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "04-8",
    "q": "A company needs to ensure S3 objects are encrypted at rest. They want AWS to manage the encryption keys. Which encryption method should be used?",
    "options": {
      "A": "SSE-C (Customer-Provided Keys)",
      "B": "SSE-S3 (S3-Managed Keys)",
      "C": "SSE-KMS (KMS-Managed Keys)",
      "D": "Client-Side Encryption"
    },
    "answer": [
      "B"
    ],
    "explanation": "• SSE-S3 uses S3-managed encryption keys\n• AWS handles all key management\n• AES-256 encryption\n• No additional cost\n• Simplest encryption option\nS3 Encryption Options:\n| Method | Key Management | Cost | Use Case |\n|--------|----------------|------|----------|\n| SSE-S3 | AWS manages | Free | Simple encryption |\n| SSE-KMS | AWS KMS | KMS API costs | Audit trail, key rotation |\n| SSE-C | Customer provides | Free | Customer controls keys |\n| Client-Side | Customer | Free | Encrypt before upload |\nSSE-KMS Benefits (when needed):\n• Audit trail (CloudTrail)\n• Key rotation\n• Granular permissions\n• Envelope encryption\nFor exam: If question says \"AWS manages keys, simplest\", choose SSE-S3",
    "module": "Storage",
    "multi": false,
    "why": [
      "SSE-S3 uses S3-managed encryption keys.",
      "AWS handles all key management.",
      "AES-256 encryption.",
      "No additional cost.",
      "Simplest encryption option.",
      "S3 Encryption Options:.",
      "| Method | Key Management | Cost | Use Case |.",
      "|--------|----------------|------|----------|.",
      "| SSE-S3 | AWS manages | Free | Simple encryption |.",
      "| SSE-KMS | AWS KMS | KMS API costs | Audit trail, key rotation |.",
      "| SSE-C | Customer provides | Free | Customer controls keys |.",
      "| Client-Side | Customer | Free | Encrypt before upload |.",
      "SSE-KMS Benefits (when needed):.",
      "Audit trail (CloudTrail)",
      "Key rotation.",
      "Granular permissions.",
      "Envelope encryption.",
      "For exam: If question says \"AWS manages keys, simplest\", choose SSE-S3."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "04-9",
    "q": "A company needs to replicate S3 objects from us-east-1 to eu-west-1 for disaster recovery. What feature should be enabled?",
    "options": {
      "A": "S3 Versioning",
      "B": "S3 Cross-Region Replication (CRR)",
      "C": "S3 Same-Region Replication (SRR)",
      "D": "S3 Transfer Acceleration"
    },
    "answer": [
      "B"
    ],
    "explanation": "• S3 Cross-Region Replication (CRR) replicates objects across regions\n• Automatic, asynchronous replication\n• Requires versioning enabled on both buckets\n• Use cases: Compliance, disaster recovery, latency reduction\nCRR Requirements:\n1. Versioning enabled on source and destination\n2. Appropriate IAM permissions\n3. Different AWS regions\nCRR vs SRR:\n• CRR: Different regions, disaster recovery, compliance\n• SRR: Same region, log aggregation, replication between accounts\nReplication Options:\n• Replication Time Control (RTC): 99.99% replicated within 15 minutes\n• Delete marker replication: Optional\n• Existing object replication: Manual batch operation",
    "module": "Storage",
    "multi": false,
    "why": [
      "Automatic, asynchronous replication.",
      "Requires versioning enabled on both buckets.",
      "Use cases: Compliance, disaster recovery, latency reduction.",
      "CRR Requirements:.",
      "1.",
      "Versioning enabled on source and destination.",
      "2.",
      "Appropriate IAM permissions.",
      "3.",
      "Different AWS regions.",
      "CRR vs SRR:.",
      "CRR: Different regions, disaster recovery, compliance.",
      "SRR: Same region, log aggregation, replication between accounts.",
      "Replication Options:.",
      "Replication Time Control (RTC): 99.99% replicated within 15 minutes.",
      "Delete marker replication: Optional.",
      "Existing object replication: Manual batch operation."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "04-10",
    "q": "An application generates temporary data that needs high-performance storage. The data can be lost if the instance stops. Which storage should be used?",
    "options": {
      "A": "EBS General Purpose SSD",
      "B": "EBS Provisioned IOPS SSD",
      "C": "Instance Store",
      "D": "Amazon EFS"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Instance Store provides:\n• Ephemeral storage (temporary)\n• Physically attached to host\n• Highest IOPS performance\n• No additional cost\n• Data lost on instance stop/termination\nInstance Store Characteristics:\n• Performance: Millions of IOPS possible\n• Persistence: Data lost on stop/terminate\n• Size: Varies by instance type\n• Use cases: Cache, buffers, temporary data, scratch data\nInstance Store vs EBS:\n• Instance Store: Temporary, highest performance, free\n• EBS: Persistent, network-attached, survives stop/start",
    "module": "Storage",
    "multi": false,
    "why": [
      "Ephemeral storage (temporary)",
      "Physically attached to host.",
      "Highest IOPS performance.",
      "No additional cost.",
      "Data lost on instance stop/termination.",
      "Instance Store Characteristics:.",
      "Performance: Millions of IOPS possible.",
      "Persistence: Data lost on stop/terminate.",
      "Size: Varies by instance type.",
      "Use cases: Cache, buffers, temporary data, scratch data.",
      "Instance Store vs EBS:.",
      "Instance Store: Temporary, highest performance, free.",
      "EBS: Persistent, network-attached, survives stop/start."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "04-11",
    "q": "A company wants to ensure deleted S3 objects can be recovered for 30 days. What should be enabled?",
    "options": {
      "A": "S3 Lifecycle Policies",
      "B": "S3 Versioning",
      "C": "S3 Object Lock",
      "D": "MFA Delete"
    },
    "answer": [
      "B"
    ],
    "explanation": "• S3 Versioning preserves all versions of objects\n• Deleted objects become delete markers (recoverable)\n• Previous versions retained\n• Protection against accidental deletion\nS3 Versioning Features:\n• Stores all versions (including deleted)\n• Recover from accidental deletes\n• Recover from application failures\n• Can suspend (not disable completely)\n• Each version counted for storage costs\nRelated Features:\n• MFA Delete: Requires MFA to delete versions or suspend versioning\n• Object Lock: WORM (Write Once Read Many), compliance\n• Lifecycle: Transition or delete versions after time period\nBest Practice: Enable versioning + lifecycle to delete old versions",
    "module": "Storage",
    "multi": false,
    "why": [
      "Deleted objects become delete markers (recoverable)",
      "Previous versions retained.",
      "Protection against accidental deletion.",
      "S3 Versioning Features:.",
      "Stores all versions (including deleted)",
      "Recover from accidental deletes.",
      "Recover from application failures.",
      "Can suspend (not disable completely)",
      "Each version counted for storage costs.",
      "Related Features:.",
      "MFA Delete: Requires MFA to delete versions or suspend versioning.",
      "Object Lock: WORM (Write Once Read Many), compliance.",
      "Lifecycle: Transition or delete versions after time period.",
      "Best Practice: Enable versioning + lifecycle to delete old versions."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "04-12",
    "q": "A Windows application running on EC2 needs shared file storage accessible via SMB protocol. Which service should be used?",
    "options": {
      "A": "Amazon EFS",
      "B": "Amazon FSx for Windows File Server",
      "C": "Amazon EBS",
      "D": "Amazon S3"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Amazon FSx for Windows File Server:\n• Native Windows file system\n• SMB protocol support\n• Active Directory integration\n• Windows NTFS features\n• Multi-AZ deployment\nFSx Family:\n• FSx for Windows: Windows workloads, SMB, AD\n• FSx for Lustre: HPC, ML, high-performance\n• FSx for NetApp ONTAP: Enterprise NAS, multi-protocol\n• FSx for OpenZFS: Linux workloads, snapshots\nFile Storage Options:\n• Windows apps: FSx for Windows (SMB)\n• Linux apps: EFS (NFS)\n• HPC/ML: FSx for Lustre\n• Block storage: EBS",
    "module": "Storage",
    "multi": false,
    "why": [
      "Native Windows file system.",
      "SMB protocol support.",
      "Active Directory integration.",
      "Windows NTFS features.",
      "Multi-AZ deployment.",
      "FSx Family:.",
      "FSx for Windows: Windows workloads, SMB, AD.",
      "FSx for Lustre: HPC, ML, high-performance.",
      "FSx for NetApp ONTAP: Enterprise NAS, multi-protocol.",
      "FSx for OpenZFS: Linux workloads, snapshots.",
      "File Storage Options:.",
      "Windows apps: FSx for Windows (SMB)",
      "Linux apps: EFS (NFS)",
      "HPC/ML: FSx for Lustre.",
      "Block storage: EBS."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "04-13",
    "q": "A company needs to store petabytes of data for machine learning training with the fastest possible throughput. Which storage service is MOST appropriate?",
    "options": {
      "A": "Amazon S3",
      "B": "Amazon EFS",
      "C": "Amazon FSx for Lustre",
      "D": "Amazon EBS"
    },
    "answer": [
      "C"
    ],
    "explanation": "• FSx for Lustre designed for:\n• High-performance computing (HPC)\n• Machine learning\n• Media processing\n• Sub-millisecond latencies\n• Hundreds of GB/s throughput\n• Millions of IOPS\nFSx for Lustre Features:\n• Integrates with S3 (lazy loading)\n• POSIX-compliant file system\n• Scratch and persistent deployment types\n• Scales to petabytes\nDeployment Types:\n• Scratch: Temporary, highest performance, no replication\n• Persistent: Long-term, replication, automatic failover\nML/HPC Storage:\n• Training: FSx for Lustre (from S3)\n• Inference: EFS or S3\n• Dataset storage: S3\n• Processing: FSx for Lustre",
    "module": "Storage",
    "multi": false,
    "why": [
      "FSx for Lustre designed for:.",
      "High-performance computing (HPC)",
      "Machine learning.",
      "Media processing.",
      "Sub-millisecond latencies.",
      "Hundreds of GB/s throughput.",
      "Millions of IOPS.",
      "FSx for Lustre Features:.",
      "Integrates with S3 (lazy loading)",
      "POSIX-compliant file system.",
      "Scratch and persistent deployment types.",
      "Scales to petabytes.",
      "Deployment Types:.",
      "Scratch: Temporary, highest performance, no replication.",
      "Persistent: Long-term, replication, automatic failover.",
      "ML/HPC Storage:.",
      "Training: FSx for Lustre (from S3)",
      "Inference: EFS or S3.",
      "Dataset storage: S3.",
      "Processing: FSx for Lustre."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "04-14",
    "q": "A company wants to move infrequently accessed EBS snapshots to cheaper storage automatically. What feature should be used?",
    "options": {
      "A": "S3 Lifecycle Policies",
      "B": "EBS Snapshot Archive",
      "C": "EBS Cold HDD volumes",
      "D": "Amazon Glacier"
    },
    "answer": [
      "B"
    ],
    "explanation": "• EBS Snapshot Archive tier:\n• 75% cheaper than standard snapshots\n• For snapshots stored 90+ days\n• Restore time: 24-72 hours\n• Minimum 90-day storage\nEBS Snapshot Management:\n• Standard: Fast restore (minutes), higher cost\n• Archive: Cheaper, slower restore (24-72 hrs)\n• Automatic archival with lifecycle policies\nEBS Snapshot Features:\n• Incremental backups (only changed blocks)\n• Stored in S3 (managed by AWS)\n• Cross-region copy available\n• Fast Snapshot Restore (FSR) for instant recovery\nUse Cases:\n• Standard: Frequent restores, DR\n• Archive: Compliance, long-term retention",
    "module": "Storage",
    "multi": false,
    "why": [
      "75% cheaper than standard snapshots.",
      "For snapshots stored 90+ days.",
      "Restore time: 24-72 hours.",
      "Minimum 90-day storage.",
      "EBS Snapshot Management:.",
      "Standard: Fast restore (minutes), higher cost.",
      "Archive: Cheaper, slower restore (24-72 hrs)",
      "Automatic archival with lifecycle policies.",
      "EBS Snapshot Features:.",
      "Incremental backups (only changed blocks)",
      "Stored in S3 (managed by AWS)",
      "Cross-region copy available.",
      "Fast Snapshot Restore (FSR) for instant recovery.",
      "Use Cases:.",
      "Standard: Frequent restores, DR.",
      "Archive: Compliance, long-term retention."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "04-15",
    "q": "An application writes data to S3 frequently. The company wants to be notified immediately when objects are created. What should be configured?",
    "options": {
      "A": "S3 Event Notifications",
      "B": "CloudWatch Logs",
      "C": "AWS Config",
      "D": "CloudTrail"
    },
    "answer": [
      "A"
    ],
    "explanation": "• S3 Event Notifications trigger on bucket events\n• Near real-time notifications\n• Destinations: SNS, SQS, Lambda\nS3 Events:\n• Object created (PUT, POST, COPY, CompleteMultipartUpload)\n• Object deleted\n• Object restored from Glacier\n• Replication events\n• Lifecycle transitions\nEvent Notification Setup:\nCommon Patterns:\n• S3 → Lambda: Process uploaded files\n• S3 → SQS: Queue processing\n• S3 → SNS: Multi-subscriber notifications\nAlternative: EventBridge (more advanced filtering)",
    "module": "Storage",
    "multi": false,
    "why": [
      "Near real-time notifications.",
      "Destinations: SNS, SQS, Lambda.",
      "S3 Events:.",
      "Object created (PUT, POST, COPY, CompleteMultipartUpload)",
      "Object deleted.",
      "Object restored from Glacier.",
      "Replication events.",
      "Lifecycle transitions.",
      "Event Notification Setup:.",
      "Common Patterns:.",
      "S3 → Lambda: Process uploaded files.",
      "S3 → SQS: Queue processing.",
      "S3 → SNS: Multi-subscriber notifications.",
      "Alternative: EventBridge (more advanced filtering)"
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "04-16",
    "q": "A company needs to ensure S3 objects are never deleted or overwritten for regulatory compliance. Which feature should be used?",
    "options": {
      "A": "S3 Versioning",
      "B": "S3 Object Lock",
      "C": "MFA Delete",
      "D": "S3 Lifecycle Policies"
    },
    "answer": [
      "B"
    ],
    "explanation": "• S3 Object Lock provides WORM (Write Once Read Many)\n• Prevents deletion/overwrite for specified retention period\n• Compliance and governance modes\nObject Lock Modes:\n• Compliance: Can't be overwritten/deleted by anyone (even root)\n• Governance: Users with special permissions can override\n• Legal Hold: Indefinite protection, manually removed\nObject Lock vs Versioning:\n• Versioning: Protects but versions can be deleted\n• Object Lock: Enforces retention, truly immutable\nRequirements:\n• Versioning must be enabled\n• Set at bucket creation\n• Retention period or legal hold\nUse Cases:\n• Financial records\n• Healthcare data (HIPAA)\n• Legal documents\n• Regulatory compliance",
    "module": "Storage",
    "multi": false,
    "why": [
      "Prevents deletion/overwrite for specified retention period.",
      "Compliance and governance modes.",
      "Object Lock Modes:.",
      "Compliance: Can't be overwritten/deleted by anyone (even root)",
      "Governance: Users with special permissions can override.",
      "Legal Hold: Indefinite protection, manually removed.",
      "Object Lock vs Versioning:.",
      "Versioning: Protects but versions can be deleted.",
      "Object Lock: Enforces retention, truly immutable.",
      "Requirements:.",
      "Versioning must be enabled.",
      "Set at bucket creation.",
      "Retention period or legal hold.",
      "Use Cases:.",
      "Financial records.",
      "Healthcare data (HIPAA)",
      "Legal documents.",
      "Regulatory compliance."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "04-17",
    "q": "An application needs to upload large files (100 GB+) to S3 with optimal performance. What should be used?",
    "options": {
      "A": "Single PUT operation",
      "B": "S3 Multipart Upload",
      "C": "S3 Transfer Acceleration",
      "D": "AWS DataSync"
    },
    "answer": [
      "B"
    ],
    "explanation": "• S3 Multipart Upload:\n• Upload large objects in parts\n• Parts uploaded in parallel (better throughput)\n• Can pause/resume\n• Recommended for files > 100 MB\n• Required for files > 5 GB\nMultipart Upload Benefits:\n• Improved throughput (parallel uploads)\n• Quick recovery from network issues\n• Pause and resume uploads\n• Upload before knowing final size\nBest Practices:\n• Use for files > 100 MB\n• Required for files > 5 GB\n• Upload parts in parallel\n• Configure lifecycle to abort incomplete uploads\nTransfer Acceleration:\n• Different feature (uses CloudFront edge locations)\n• Speeds up uploads via edge locations\n• Can combine with Multipart Upload",
    "module": "Storage",
    "multi": false,
    "why": [
      "Upload large objects in parts.",
      "Parts uploaded in parallel (better throughput)",
      "Can pause/resume.",
      "Recommended for files > 100 MB.",
      "Required for files > 5 GB.",
      "Multipart Upload Benefits:.",
      "Improved throughput (parallel uploads)",
      "Quick recovery from network issues.",
      "Pause and resume uploads.",
      "Upload before knowing final size.",
      "Best Practices:.",
      "Use for files > 100 MB.",
      "Required for files > 5 GB.",
      "Upload parts in parallel.",
      "Configure lifecycle to abort incomplete uploads.",
      "Transfer Acceleration:.",
      "Different feature (uses CloudFront edge locations)",
      "Speeds up uploads via edge locations.",
      "Can combine with Multipart Upload."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "04-18",
    "q": "A company wants to access S3 from EC2 instances without using internet gateway or NAT. What should be configured?",
    "options": {
      "A": "VPN Connection",
      "B": "AWS Direct Connect",
      "C": "VPC Endpoint for S3 (Gateway Endpoint)",
      "D": "VPC Peering"
    },
    "answer": [
      "C"
    ],
    "explanation": "• VPC Endpoint for S3 (Gateway Endpoint):\n• Private connection from VPC to S3\n• No internet required\n• No data transfer charges\n• Traffic stays within AWS network\nVPC Endpoint Types:\n| Type | Services | Cost | Implementation |\n|------|----------|------|----------------|\n| Gateway | S3, DynamoDB | Free | Route table entry |\n| Interface | Most AWS services | Hourly + data | ENI in subnet |\nS3 Endpoint Benefits:\n• Enhanced security (no internet exposure)\n• Better performance\n• No NAT Gateway costs\n• Control access via endpoint policies\nConfiguration:\n1. Create Gateway Endpoint for S3\n2. Select VPC and route tables\n3. Configure endpoint policy (optional)\n4. S3 traffic automatically routed",
    "module": "Storage",
    "multi": false,
    "why": [
      "Private connection from VPC to S3.",
      "No internet required.",
      "No data transfer charges.",
      "Traffic stays within AWS network.",
      "VPC Endpoint Types:.",
      "| Type | Services | Cost | Implementation |.",
      "|------|----------|------|----------------|.",
      "| Gateway | S3, DynamoDB | Free | Route table entry |.",
      "| Interface | Most AWS services | Hourly + data | ENI in subnet |.",
      "S3 Endpoint Benefits:.",
      "Enhanced security (no internet exposure)",
      "Better performance.",
      "No NAT Gateway costs.",
      "Control access via endpoint policies.",
      "Configuration:.",
      "1.",
      "Create Gateway Endpoint for S3.",
      "2.",
      "Select VPC and route tables.",
      "3.",
      "Configure endpoint policy (optional)",
      "4.",
      "S3 traffic automatically routed."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "04-19",
    "q": "A database backup is stored in S3. The company wants to ensure the backup can be restored quickly if needed. What feature should be enabled?",
    "options": {
      "A": "S3 Transfer Acceleration",
      "B": "S3 Versioning",
      "C": "S3 Cross-Region Replication",
      "D": "Enable S3 Retrieval directly"
    },
    "answer": [
      "B"
    ],
    "explanation": "• S3 Versioning for backup protection:\n• Immediate access to all versions\n• Protect against accidental deletion/overwrite\n• Quick recovery (millisecond retrieval)\n• Keep multiple backup versions\nBackup Best Practices:\n1. Enable versioning\n2. Use lifecycle policies to transition old versions\n3. Enable Cross-Region Replication for DR\n4. Tag backup objects\n5. Test restore procedures\nAdditional Protection:\n• CRR: Geographic redundancy\n• Object Lock: Immutable backups\n• MFA Delete: Prevent accidental deletion\nStorage Class: Use Standard or Standard-IA for quick restore",
    "module": "Storage",
    "multi": false,
    "why": [
      "Immediate access to all versions.",
      "Protect against accidental deletion/overwrite.",
      "Quick recovery (millisecond retrieval)",
      "Keep multiple backup versions.",
      "Backup Best Practices:.",
      "1.",
      "Enable versioning.",
      "2.",
      "Use lifecycle policies to transition old versions.",
      "3.",
      "Enable Cross-Region Replication for DR.",
      "4.",
      "Tag backup objects.",
      "5.",
      "Test restore procedures.",
      "Additional Protection:.",
      "CRR: Geographic redundancy.",
      "Object Lock: Immutable backups.",
      "MFA Delete: Prevent accidental deletion.",
      "Storage Class: Use Standard or Standard-IA for quick restore."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "04-20",
    "q": "A company has data in S3 Standard storage. Objects accessed within 30 days should remain in Standard, but older objects should move to S3 Glacier. How can this be automated?",
    "options": {
      "A": "S3 Intelligent-Tiering",
      "B": "S3 Lifecycle Policies",
      "C": "AWS Lambda function",
      "D": "Manual migration"
    },
    "answer": [
      "B"
    ],
    "explanation": "• S3 Lifecycle Policies automate transitions and expiration\n• Rule-based transitions between storage classes\n• Can filter by prefix or tags\n• No code required\nLifecycle Policy Example:\nLifecycle Actions:\n• Transition: Move to different storage class\n• Expiration: Delete objects\n• NoncurrentVersionTransition: Transition previous versions\n• NoncurrentVersionExpiration: Delete previous versions\n• AbortIncompleteMultipartUpload: Clean up incomplete uploads\nTransition Rules:\n• Standard → Standard-IA (30 days min)\n• Standard → Glacier (0 days min)\n• Can't transition backwards (Glacier → Standard)",
    "module": "Storage",
    "multi": false,
    "why": [
      "Rule-based transitions between storage classes.",
      "Can filter by prefix or tags.",
      "No code required.",
      "Lifecycle Policy Example:.",
      "Lifecycle Actions:.",
      "Transition: Move to different storage class.",
      "Expiration: Delete objects.",
      "NoncurrentVersionTransition: Transition previous versions.",
      "NoncurrentVersionExpiration: Delete previous versions.",
      "AbortIncompleteMultipartUpload: Clean up incomplete uploads.",
      "Transition Rules:.",
      "Standard → Standard-IA (30 days min)",
      "Standard → Glacier (0 days min)",
      "Can't transition backwards (Glacier → Standard)"
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "05-1",
    "q": "A company needs a relational database with automatic scaling, high availability across multiple AZs, and automatic failover. They want minimal database administration. Which service should be used?",
    "options": {
      "A": "Amazon RDS MySQL",
      "B": "Amazon Aurora",
      "C": "Amazon DynamoDB",
      "D": "Amazon Redshift"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Amazon Aurora provides:\n• MySQL/PostgreSQL compatibility\n• 5x performance of MySQL, 3x of PostgreSQL\n• Automatic scaling (storage up to 128 TB)\n• Multi-AZ by design (6 copies across 3 AZs)\n• Automatic failover (< 30 seconds)\n• Serverless option available\nAurora vs RDS:\n• Aurora: Better performance, auto-scaling storage, faster replication\n• RDS: Standard MySQL/PostgreSQL, simpler\nAurora Features:\n• Up to 15 read replicas\n• Continuous backup to S3\n• Point-in-time recovery\n• Backtrack (rewind database)",
    "module": "Database",
    "multi": false,
    "why": [
      "MySQL/PostgreSQL compatibility.",
      "5x performance of MySQL, 3x of PostgreSQL.",
      "Automatic scaling (storage up to 128 TB)",
      "Multi-AZ by design (6 copies across 3 AZs)",
      "Automatic failover (< 30 seconds)",
      "Serverless option available.",
      "Aurora vs RDS:.",
      "Aurora: Better performance, auto-scaling storage, faster replication.",
      "RDS: Standard MySQL/PostgreSQL, simpler.",
      "Aurora Features:.",
      "Up to 15 read replicas.",
      "Continuous backup to S3.",
      "Point-in-time recovery.",
      "Backtrack (rewind database)"
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "05-2",
    "q": "An application requires sub-millisecond latency for read/write operations with automatic scaling to handle millions of requests per second. Which database should be used?",
    "options": {
      "A": "Amazon RDS",
      "B": "Amazon DynamoDB",
      "C": "Amazon Aurora",
      "D": "Amazon DocumentDB"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Amazon DynamoDB is fully managed NoSQL database\n• Single-digit millisecond latency\n• Scales to 10+ trillion requests/day\n• Automatic scaling\n• Multi-AZ replication built-in\n• Serverless option (on-demand pricing)\nDynamoDB Features:\n• Key-value and document database\n• DynamoDB Streams (change data capture)\n• Global Tables (multi-region replication)\n• DynamoDB Accelerator (DAX) for microsecond latency\n• Point-in-time recovery\n• On-demand and provisioned capacity modes\nWhen to use DynamoDB:\n• Need extreme scale\n• Variable workloads\n• Need sub-10ms latency\n• Key-value or document data model",
    "module": "Database",
    "multi": false,
    "why": [
      "Single-digit millisecond latency.",
      "Scales to 10+ trillion requests/day.",
      "Automatic scaling.",
      "Multi-AZ replication built-in.",
      "Serverless option (on-demand pricing)",
      "DynamoDB Features:.",
      "Key-value and document database.",
      "DynamoDB Streams (change data capture)",
      "Global Tables (multi-region replication)",
      "DynamoDB Accelerator (DAX) for microsecond latency.",
      "Point-in-time recovery.",
      "On-demand and provisioned capacity modes.",
      "When to use DynamoDB:.",
      "Need extreme scale.",
      "Variable workloads.",
      "Need sub-10ms latency.",
      "Key-value or document data model."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "05-3",
    "q": "A company wants to cache database query results to reduce read load on their RDS database and improve response times. Which service should be used?",
    "options": {
      "A": "Amazon CloudFront",
      "B": "Amazon ElastiCache",
      "C": "DynamoDB Accelerator (DAX)",
      "D": "Amazon S3"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Amazon ElastiCache provides in-memory caching\n• Redis or Memcached engines\n• Microsecond latency\n• Reduces database load\n• Session storage\n• Leaderboards, real-time analytics\nElastiCache Engines:\n| Feature | Redis | Memcached |\n|---------|-------|-----------|\n| Data Types | Advanced (strings, sets, sorted sets) | Simple (strings) |\n| Persistence | Yes (snapshots) | No |\n| Replication | Yes (Multi-AZ) | No |\n| Pub/Sub | Yes | No |\n| Sorted Sets | Yes (leaderboards) | No |\n| Multi-threaded | No | Yes |\nCommon Pattern: Application → ElastiCache → RDS (cache-aside)",
    "module": "Database",
    "multi": false,
    "why": [
      "Redis or Memcached engines.",
      "Microsecond latency.",
      "Reduces database load.",
      "Session storage.",
      "Leaderboards, real-time analytics.",
      "ElastiCache Engines:.",
      "| Feature | Redis | Memcached |.",
      "|---------|-------|-----------|.",
      "| Data Types | Advanced (strings, sets, sorted sets) | Simple (strings) |.",
      "| Persistence | Yes (snapshots) | No |.",
      "| Replication | Yes (Multi-AZ) | No |.",
      "| Pub/Sub | Yes | No |.",
      "| Sorted Sets | Yes (leaderboards) | No |.",
      "| Multi-threaded | No | Yes |.",
      "Common Pattern: Application → ElastiCache → RDS (cache-aside)"
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "05-4",
    "q": "A data warehouse requires complex analytical queries across petabytes of data. Which AWS database service is MOST appropriate?",
    "options": {
      "A": "Amazon RDS",
      "B": "Amazon DynamoDB",
      "C": "Amazon Redshift",
      "D": "Amazon Aurora"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Amazon Redshift is data warehouse service\n• Columnar storage\n• Massively parallel processing (MPP)\n• Petabyte-scale\n• SQL queries (PostgreSQL-compatible)\n• Integration with S3, EMR, Glue\nRedshift Features:\n• Columnar storage (better compression, faster queries)\n• Redshift Spectrum (query S3 data directly)\n• Automatic backups and snapshots\n• Encryption at rest and in transit\n• Concurrency Scaling (handle burst queries)\n• Result caching\nRedshift vs RDS:\n• Redshift: Analytics, OLAP, data warehouse\n• RDS: Transactional, OLTP, operational database\nUse Cases:\n• Business intelligence\n• Historical data analysis\n• Large-scale analytics\n• Reporting",
    "module": "Database",
    "multi": false,
    "why": [
      "Columnar storage.",
      "Massively parallel processing (MPP)",
      "Petabyte-scale.",
      "SQL queries (PostgreSQL-compatible)",
      "Integration with S3, EMR, Glue.",
      "Redshift Features:.",
      "Columnar storage (better compression, faster queries)",
      "Redshift Spectrum (query S3 data directly)",
      "Automatic backups and snapshots.",
      "Encryption at rest and in transit.",
      "Concurrency Scaling (handle burst queries)",
      "Result caching.",
      "Redshift vs RDS:.",
      "Redshift: Analytics, OLAP, data warehouse.",
      "RDS: Transactional, OLTP, operational database.",
      "Use Cases:.",
      "Business intelligence.",
      "Historical data analysis.",
      "Large-scale analytics.",
      "Reporting."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "05-5",
    "q": "A MongoDB application needs to be migrated to AWS with minimal changes. Which service should be used?",
    "options": {
      "A": "Amazon RDS",
      "B": "Amazon DynamoDB",
      "C": "Amazon DocumentDB",
      "D": "Amazon Neptune"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Amazon DocumentDB is MongoDB-compatible document database\n• Fully managed\n• MongoDB 3.6 and 4.0 compatibility\n• Scales to millions of requests/second\n• Multi-AZ replication\n• Automatic backups\nDocumentDB Features:\n• Document data model (JSON)\n• MongoDB drivers and tools compatible\n• Storage auto-scales to 64 TB\n• Up to 15 read replicas\n• Continuous backup to S3\nMigration: Use AWS Database Migration Service (DMS)\nWhen to use:\n• Existing MongoDB workloads\n• Document-oriented data\n• Need managed service",
    "module": "Database",
    "multi": false,
    "why": [
      "Fully managed.",
      "MongoDB 3.6 and 4.0 compatibility.",
      "Scales to millions of requests/second.",
      "Multi-AZ replication.",
      "Automatic backups.",
      "DocumentDB Features:.",
      "Document data model (JSON)",
      "MongoDB drivers and tools compatible.",
      "Storage auto-scales to 64 TB.",
      "Up to 15 read replicas.",
      "Continuous backup to S3.",
      "Migration: Use AWS Database Migration Service (DMS)",
      "When to use:.",
      "Existing MongoDB workloads.",
      "Document-oriented data.",
      "Need managed service."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "05-6",
    "q": "An application needs to store relationships between data entities (social network connections, fraud detection). Which database is MOST suitable?",
    "options": {
      "A": "Amazon RDS",
      "B": "Amazon DynamoDB",
      "C": "Amazon Neptune",
      "D": "Amazon DocumentDB"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Amazon Neptune is graph database\n• Store and query highly connected data\n• Supports Gremlin and SPARQL\n• Fast relationship queries\n• Multi-AZ replication\nNeptune Use Cases:\n• Social networks\n• Fraud detection\n• Recommendation engines\n• Knowledge graphs\n• Network topology\n• Supply chain\nGraph vs Relational:\n• Graph: Complex relationships, traversals\n• Relational: Joins become expensive for deep relationships\n• Graph databases optimize for relationship queries",
    "module": "Database",
    "multi": false,
    "why": [
      "Store and query highly connected data.",
      "Supports Gremlin and SPARQL.",
      "Fast relationship queries.",
      "Multi-AZ replication.",
      "Neptune Use Cases:.",
      "Social networks.",
      "Fraud detection.",
      "Recommendation engines.",
      "Knowledge graphs.",
      "Network topology.",
      "Supply chain.",
      "Graph vs Relational:.",
      "Graph: Complex relationships, traversals.",
      "Relational: Joins become expensive for deep relationships.",
      "Graph databases optimize for relationship queries."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "05-7",
    "q": "A company needs to run an RDS database with automatic failover to a standby instance in another AZ. What should be configured?",
    "options": {
      "A": "RDS Read Replicas",
      "B": "RDS Multi-AZ Deployment",
      "C": "RDS Snapshots",
      "D": "RDS Cross-Region Replication"
    },
    "answer": [
      "B"
    ],
    "explanation": "• RDS Multi-AZ provides high availability\n• Synchronous replication to standby\n• Automatic failover (1-2 minutes)\n• Same region, different AZ\n• No manual intervention\nMulti-AZ vs Read Replicas:\n| Feature | Multi-AZ | Read Replicas |\n|---------|----------|---------------|\n| Purpose | High availability | Read scaling |\n| Replication | Synchronous | Asynchronous |\n| Failover | Automatic | Manual promotion |\n| Access | Standby not accessible | Can read from replicas |\n| Region | Same | Same or cross-region |\nMulti-AZ Failover Triggers:\n• AZ failure\n• Instance failure\n• Storage failure\n• Software patching (planned)",
    "module": "Database",
    "multi": false,
    "why": [
      "RDS Multi-AZ provides high availability.",
      "Synchronous replication to standby.",
      "Automatic failover (1-2 minutes)",
      "Same region, different AZ.",
      "No manual intervention.",
      "Multi-AZ vs Read Replicas:.",
      "| Feature | Multi-AZ | Read Replicas |.",
      "|---------|----------|---------------|.",
      "| Purpose | High availability | Read scaling |.",
      "| Replication | Synchronous | Asynchronous |.",
      "| Failover | Automatic | Manual promotion |.",
      "| Access | Standby not accessible | Can read from replicas |.",
      "| Region | Same | Same or cross-region |.",
      "Multi-AZ Failover Triggers:.",
      "AZ failure.",
      "Instance failure.",
      "Storage failure.",
      "Software patching (planned)"
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "05-8",
    "q": "An application requires DynamoDB but needs to support complex queries with multiple attributes. What feature should be used?",
    "options": {
      "A": "DynamoDB Streams",
      "B": "DynamoDB Global Secondary Index (GSI)",
      "C": "DynamoDB Auto Scaling",
      "D": "DynamoDB Accelerator (DAX)"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Global Secondary Index (GSI):\n• Query on non-primary key attributes\n• Different partition and sort keys than base table\n• Eventually consistent reads\n• Can be added after table creation\nDynamoDB Index Types:\n| Type | Keys | Projection | Creation |\n|------|------|------------|----------|\n| LSI | Same partition key | Can choose | At table creation only |\n| GSI | Different keys | Can choose | Anytime |\nGSI Use Cases:\n• Query by different attributes\n• Support multiple access patterns\n• Flexible querying",
    "module": "Database",
    "multi": false,
    "why": [
      "Global Secondary Index (GSI):.",
      "Query on non-primary key attributes.",
      "Different partition and sort keys than base table.",
      "Eventually consistent reads.",
      "Can be added after table creation.",
      "DynamoDB Index Types:.",
      "| Type | Keys | Projection | Creation |.",
      "|------|------|------------|----------|.",
      "| LSI | Same partition key | Can choose | At table creation only |.",
      "| GSI | Different keys | Can choose | Anytime |.",
      "GSI Use Cases:.",
      "Query by different attributes.",
      "Support multiple access patterns.",
      "Flexible querying."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "05-9",
    "q": "A company wants to achieve microsecond latency for DynamoDB read operations. Which feature should be enabled?",
    "options": {
      "A": "DynamoDB Streams",
      "B": "DynamoDB Global Tables",
      "C": "DynamoDB Accelerator (DAX)",
      "D": "DynamoDB Auto Scaling"
    },
    "answer": [
      "C"
    ],
    "explanation": "• DynamoDB Accelerator (DAX):\n• In-memory cache for DynamoDB\n• Microsecond latency (vs millisecond)\n• Fully managed, highly available\n• No application code changes (drop-in replacement)\nDAX Benefits:\n• 10x performance improvement for read-heavy workloads\n• Reduces read load on DynamoDB\n• Eventually consistent reads\n• Write-through cache\nDAX vs ElastiCache:\n• DAX: DynamoDB-specific, easier integration\n• ElastiCache: General purpose, more control\nWhen to use DAX:\n• Read-heavy workloads\n• Need microsecond latency\n• Repeated reads of same items\n• Real-time bidding, gaming",
    "module": "Database",
    "multi": false,
    "why": [
      "In-memory cache for DynamoDB.",
      "Microsecond latency (vs millisecond)",
      "Fully managed, highly available.",
      "No application code changes (drop-in replacement)",
      "DAX Benefits:.",
      "10x performance improvement for read-heavy workloads.",
      "Reduces read load on DynamoDB.",
      "Eventually consistent reads.",
      "Write-through cache.",
      "DAX vs ElastiCache:.",
      "DAX: DynamoDB-specific, easier integration.",
      "ElastiCache: General purpose, more control.",
      "When to use DAX:.",
      "Read-heavy workloads.",
      "Need microsecond latency.",
      "Repeated reads of same items.",
      "Real-time bidding, gaming."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "05-10",
    "q": "An RDS database needs to handle increased read traffic. Write traffic is low. What is the MOST cost-effective solution?",
    "options": {
      "A": "Upgrade to larger instance",
      "B": "Enable RDS Multi-AZ",
      "C": "Create RDS Read Replicas",
      "D": "Use ElastiCache"
    },
    "answer": [
      "C"
    ],
    "explanation": "• RDS Read Replicas:\n• Asynchronous replication\n• Offload read traffic from primary\n• Up to 15 replicas (Aurora)\n• Same region or cross-region\n• Can be promoted to standalone\nRead Replica Use Cases:\n• Read-heavy workloads\n• Reporting/analytics (separate from production)\n• Cross-region disaster recovery (promotion)\n• Read scaling\nBenefits:\n• Cost-effective scaling for reads\n• No impact on primary instance\n• Can use different instance types\nReplication Lag: Monitor with CloudWatch metric",
    "module": "Database",
    "multi": false,
    "why": [
      "RDS Read Replicas:.",
      "Asynchronous replication.",
      "Offload read traffic from primary.",
      "Up to 15 replicas (Aurora)",
      "Same region or cross-region.",
      "Can be promoted to standalone.",
      "Read Replica Use Cases:.",
      "Read-heavy workloads.",
      "Reporting/analytics (separate from production)",
      "Cross-region disaster recovery (promotion)",
      "Read scaling.",
      "Benefits:.",
      "Cost-effective scaling for reads.",
      "No impact on primary instance.",
      "Can use different instance types.",
      "Replication Lag: Monitor with CloudWatch metric."
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "05-11",
    "q": "A global application requires DynamoDB tables to be replicated across multiple AWS regions with low-latency local reads and writes. Which feature should be used?",
    "options": {
      "A": "DynamoDB Streams",
      "B": "DynamoDB Global Tables",
      "C": "DynamoDB Cross-Region Replication",
      "D": "AWS Database Migration Service"
    },
    "answer": [
      "B"
    ],
    "explanation": "• DynamoDB Global Tables:\n• Multi-region, multi-active replication\n• Bi-directional replication\n• Local read/write in each region\n• Sub-second latency\n• Conflict resolution (last writer wins)\nGlobal Tables Requirements:\n• DynamoDB Streams enabled\n• Same table name across regions\n• Same primary key structure\nUse Cases:\n• Global applications\n• Disaster recovery\n• Multi-region high availability\n• Reduce latency for global users",
    "module": "Database",
    "multi": false,
    "why": [
      "Multi-region, multi-active replication.",
      "Bi-directional replication.",
      "Local read/write in each region.",
      "Sub-second latency.",
      "Conflict resolution (last writer wins)",
      "Global Tables Requirements:.",
      "DynamoDB Streams enabled.",
      "Same table name across regions.",
      "Same primary key structure.",
      "Use Cases:.",
      "Global applications.",
      "Disaster recovery.",
      "Multi-region high availability.",
      "Reduce latency for global users."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "05-12",
    "q": "A company needs to ensure RDS database backups are retained for 90 days for compliance. What should be configured?",
    "options": {
      "A": "Automated Backups with 90-day retention",
      "B": "Manual Snapshots",
      "C": "Both automated backups (35 days) and manual snapshots",
      "D": "RDS Cross-Region Replication"
    },
    "answer": [
      "C"
    ],
    "explanation": "• RDS Automated Backups: Max 35 days retention\n• Manual Snapshots: Retained until explicitly deleted\n• For > 35 days: Use manual snapshots\nRDS Backup Types:\n| Type | Retention | Deleted with DB | Use Case |\n|------|-----------|-----------------|----------|\n| Automated | 1-35 days | Yes | Point-in-time recovery |\n| Manual | Until deleted | No | Long-term retention |\nBest Practice for Long Retention:\n1. Enable automated backups (35 days)\n2. Create manual snapshots for long-term\n3. Use lifecycle policies to copy to S3/Glacier\nAutomated Backup Features:\n• Daily full snapshot\n• Transaction logs every 5 minutes\n• Point-in-time recovery within retention period",
    "module": "Database",
    "multi": false,
    "why": [
      "RDS Automated Backups: Max 35 days retention.",
      "Manual Snapshots: Retained until explicitly deleted.",
      "For > 35 days: Use manual snapshots.",
      "RDS Backup Types:.",
      "| Type | Retention | Deleted with DB | Use Case |.",
      "|------|-----------|-----------------|----------|.",
      "| Automated | 1-35 days | Yes | Point-in-time recovery |.",
      "| Manual | Until deleted | No | Long-term retention |.",
      "Best Practice for Long Retention:.",
      "1.",
      "Enable automated backups (35 days)",
      "2.",
      "Create manual snapshots for long-term.",
      "3.",
      "Use lifecycle policies to copy to S3/Glacier.",
      "Automated Backup Features:.",
      "Daily full snapshot.",
      "Transaction logs every 5 minutes.",
      "Point-in-time recovery within retention period."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "05-13",
    "q": "An application needs time-series data storage for IoT sensor data with automatic data retention policies. Which database is MOST appropriate?",
    "options": {
      "A": "Amazon DynamoDB",
      "B": "Amazon RDS",
      "C": "Amazon Timestream",
      "D": "Amazon Redshift"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Amazon Timestream is purpose-built for time-series data\n• IoT, DevOps, analytics\n• Automatic data lifecycle management\n• Built-in time-series analytics\n• 1000x faster, 1/10th cost vs relational\nTimestream Features:\n• Automatic tiering (memory → magnetic)\n• Built-in time-series functions\n• Serverless, auto-scaling\n• SQL queries\nUse Cases:\n• IoT sensor data\n• Application monitoring\n• DevOps metrics\n• Industrial telemetry\nTimestream vs Alternatives:\n• DynamoDB: General NoSQL, manual TTL\n• Redshift: Data warehouse, not optimized for time-series\n• Timestream: Purpose-built, best for time-series",
    "module": "Database",
    "multi": false,
    "why": [
      "IoT, DevOps, analytics.",
      "Automatic data lifecycle management.",
      "Built-in time-series analytics.",
      "1000x faster, 1/10th cost vs relational.",
      "Timestream Features:.",
      "Automatic tiering (memory → magnetic)",
      "Built-in time-series functions.",
      "Serverless, auto-scaling.",
      "SQL queries.",
      "Use Cases:.",
      "IoT sensor data.",
      "Application monitoring.",
      "DevOps metrics.",
      "Industrial telemetry.",
      "Timestream vs Alternatives:.",
      "DynamoDB: General NoSQL, manual TTL.",
      "Redshift: Data warehouse, not optimized for time-series.",
      "Timestream: Purpose-built, best for time-series."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "05-14",
    "q": "A company wants to migrate an on-premises Oracle database to AWS with minimal downtime. Which service should be used?",
    "options": {
      "A": "AWS Database Migration Service (DMS)",
      "B": "AWS DataSync",
      "C": "AWS Snowball",
      "D": "Manual export/import"
    },
    "answer": [
      "A"
    ],
    "explanation": "• AWS DMS (Database Migration Service):\n• Migrate databases with minimal downtime\n• Source database remains operational\n• Supports homogeneous and heterogeneous migrations\n• Continuous data replication\nDMS Migration Types:\n1. Homogeneous: Oracle → Oracle, MySQL → Aurora MySQL\n2. Heterogeneous: Oracle → Aurora PostgreSQL (use SCT)\nDMS Features:\n• Continuous replication\n• Multi-AZ for high availability\n• Automatic failover\n• Supports many database engines\nMigration Steps:\n1. Create replication instance\n2. Configure source and target endpoints\n3. Create migration task\n4. Full load + CDC (Change Data Capture)\n5. Cutover when ready",
    "module": "Database",
    "multi": false,
    "why": [
      "AWS DMS (Database Migration Service):.",
      "Migrate databases with minimal downtime.",
      "Source database remains operational.",
      "Supports homogeneous and heterogeneous migrations.",
      "Continuous data replication.",
      "DMS Migration Types:.",
      "1.",
      "Homogeneous: Oracle → Oracle, MySQL → Aurora MySQL.",
      "2.",
      "Heterogeneous: Oracle → Aurora PostgreSQL (use SCT)",
      "DMS Features:.",
      "Continuous replication.",
      "Multi-AZ for high availability.",
      "Automatic failover.",
      "Supports many database engines.",
      "Migration Steps:.",
      "1.",
      "Create replication instance.",
      "2.",
      "Configure source and target endpoints.",
      "3.",
      "Create migration task.",
      "4.",
      "Full load + CDC (Change Data Capture)",
      "5.",
      "Cutover when ready."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "05-15",
    "q": "An application uses RDS MySQL. The company wants to encrypt an existing unencrypted database. What is the correct approach?",
    "options": {
      "A": "Enable encryption on the existing database",
      "B": "Create encrypted snapshot, restore to new encrypted instance",
      "C": "Use AWS KMS to encrypt in-place",
      "D": "Export data and re-import to encrypted instance"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Cannot encrypt existing RDS instance directly\n• Must create encrypted copy\nEncryption Process:\n1. Create snapshot of unencrypted DB\n2. Copy snapshot with encryption enabled\n3. Restore encrypted snapshot to new DB instance\n4. Update application endpoint\n5. Delete old instance\nRDS Encryption:\n• Uses AWS KMS for key management\n• Encrypts data at rest (storage, backups, snapshots, read replicas)\n• Cannot disable encryption once enabled\n• Minimal performance impact\nAlternative: Use AWS DMS to migrate with encryption enabled",
    "module": "Database",
    "multi": false,
    "why": [
      "Cannot encrypt existing RDS instance directly.",
      "Must create encrypted copy.",
      "Encryption Process:.",
      "1.",
      "Create snapshot of unencrypted DB.",
      "2.",
      "Copy snapshot with encryption enabled.",
      "3.",
      "Restore encrypted snapshot to new DB instance.",
      "4.",
      "Update application endpoint.",
      "5.",
      "Delete old instance.",
      "RDS Encryption:.",
      "Uses AWS KMS for key management.",
      "Encrypts data at rest (storage, backups, snapshots, read replicas)",
      "Cannot disable encryption once enabled.",
      "Minimal performance impact.",
      "Alternative: Use AWS DMS to migrate with encryption enabled."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "05-16",
    "q": "A DynamoDB table experiences variable traffic patterns throughout the day. What capacity mode should be used to optimize costs?",
    "options": {
      "A": "Provisioned Capacity",
      "B": "On-Demand Capacity",
      "C": "Reserved Capacity",
      "D": "Auto Scaling"
    },
    "answer": [
      "B"
    ],
    "explanation": "• On-Demand Capacity:\n• Pay per request\n• No capacity planning\n• Scales automatically\n• Ideal for unpredictable/variable workloads\nCapacity Modes Comparison:\n| Mode | Best For | Pricing | Scaling |\n|------|----------|---------|---------|\n| On-Demand | Variable traffic | Per request | Automatic |\n| Provisioned | Predictable traffic | Per hour (RCU/WCU) | Manual or Auto Scaling |\nWhen to Use:\n• On-Demand: New tables, unpredictable, spiky traffic\n• Provisioned: Predictable, steady traffic, cost optimization\nCost: On-Demand can be more expensive for consistent workloads\nCan switch between modes once per 24 hours",
    "module": "Database",
    "multi": false,
    "why": [
      "Pay per request.",
      "No capacity planning.",
      "Scales automatically.",
      "Ideal for unpredictable/variable workloads.",
      "Capacity Modes Comparison:.",
      "| Mode | Best For | Pricing | Scaling |.",
      "|------|----------|---------|---------|.",
      "| On-Demand | Variable traffic | Per request | Automatic |.",
      "| Provisioned | Predictable traffic | Per hour (RCU/WCU) | Manual or Auto Scaling |.",
      "When to Use:.",
      "On-Demand: New tables, unpredictable, spiky traffic.",
      "Provisioned: Predictable, steady traffic, cost optimization.",
      "Cost: On-Demand can be more expensive for consistent workloads.",
      "Can switch between modes once per 24 hours."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "05-17",
    "q": "An application requires ACID transactions across multiple DynamoDB tables. Which feature should be used?",
    "options": {
      "A": "DynamoDB Streams",
      "B": "DynamoDB Transactions",
      "C": "DynamoDB Batch Operations",
      "D": "DynamoDB Global Tables"
    },
    "answer": [
      "B"
    ],
    "explanation": "• DynamoDB Transactions:\n• ACID properties (Atomicity, Consistency, Isolation, Durability)\n• All-or-nothing operations\n• Up to 100 items or 4 MB per transaction\n• TransactWriteItems and TransactGetItems\nTransaction Use Cases:\n• Financial transactions\n• Order processing\n• Inventory management\n• Need data consistency across items\nTransaction APIs:\n• `TransactWriteItems`: Atomic writes\n• `TransactGetItems`: Snapshot reads\nCost: 2x the cost of standard reads/writes",
    "module": "Database",
    "multi": false,
    "why": [
      "ACID properties (Atomicity, Consistency, Isolation, Durability)",
      "All-or-nothing operations.",
      "Up to 100 items or 4 MB per transaction.",
      "TransactWriteItems and TransactGetItems.",
      "Transaction Use Cases:.",
      "Financial transactions.",
      "Order processing.",
      "Inventory management.",
      "Need data consistency across items.",
      "Transaction APIs:.",
      "`TransactWriteItems`: Atomic writes.",
      "`TransactGetItems`: Snapshot reads.",
      "Cost: 2x the cost of standard reads/writes."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "05-18",
    "q": "A company wants to track changes to DynamoDB items in real-time to update materialized views and trigger workflows. Which feature should be used?",
    "options": {
      "A": "DynamoDB Auto Scaling",
      "B": "DynamoDB Streams",
      "C": "DynamoDB Backups",
      "D": "CloudWatch Events"
    },
    "answer": [
      "B"
    ],
    "explanation": "• DynamoDB Streams:\n• Ordered record of item-level changes\n• Near real-time (typically < 1 second)\n• 24-hour retention\n• Exactly-once delivery\nStream View Types:\n• KEYS_ONLY: Only key attributes\n• NEW_IMAGE: Entire item after change\n• OLD_IMAGE: Entire item before change\n• NEW_AND_OLD_IMAGES: Both before and after\nUse Cases:\n• Update materialized views\n• Trigger Lambda functions\n• Cross-region replication (Global Tables)\n• Data pipelines\n• Analytics\nCommon Pattern: DynamoDB Streams → Lambda → Process changes",
    "module": "Database",
    "multi": false,
    "why": [
      "Ordered record of item-level changes.",
      "Near real-time (typically < 1 second)",
      "24-hour retention.",
      "Exactly-once delivery.",
      "Stream View Types:.",
      "KEYS_ONLY: Only key attributes.",
      "NEW_IMAGE: Entire item after change.",
      "OLD_IMAGE: Entire item before change.",
      "NEW_AND_OLD_IMAGES: Both before and after.",
      "Use Cases:.",
      "Update materialized views.",
      "Trigger Lambda functions.",
      "Cross-region replication (Global Tables)",
      "Data pipelines.",
      "Analytics.",
      "Common Pattern: DynamoDB Streams → Lambda → Process changes."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "05-19",
    "q": "An Aurora database cluster needs to handle analytics queries without impacting production traffic. What should be configured?",
    "options": {
      "A": "Aurora Read Replicas",
      "B": "Aurora Serverless",
      "C": "Aurora Global Database",
      "D": "RDS Read Replicas"
    },
    "answer": [
      "A"
    ],
    "explanation": "• Aurora Read Replicas:\n• Up to 15 replicas\n• Low replication lag (< 10ms)\n• Offload read traffic\n• Can have custom endpoints\nAurora Custom Endpoints:\n• Direct specific workloads to specific replicas\n• Example: Analytics queries to larger instances\nReader Endpoint:\n• Load balances across all read replicas\n• Automatic failover if primary fails\nAurora Auto Scaling:\n• Automatically add/remove replicas based on load",
    "module": "Database",
    "multi": false,
    "why": [
      "Up to 15 replicas.",
      "Low replication lag (< 10ms)",
      "Offload read traffic.",
      "Can have custom endpoints.",
      "Aurora Custom Endpoints:.",
      "Direct specific workloads to specific replicas.",
      "Example: Analytics queries to larger instances.",
      "Reader Endpoint:.",
      "Load balances across all read replicas.",
      "Automatic failover if primary fails.",
      "Aurora Auto Scaling:.",
      "Automatically add/remove replicas based on load."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "05-20",
    "q": "A serverless application needs a database that automatically scales capacity based on workload. Which option is MOST suitable?",
    "options": {
      "A": "RDS with Auto Scaling",
      "B": "Aurora Serverless",
      "C": "DynamoDB On-Demand",
      "D": "Both B and C"
    },
    "answer": [
      "D"
    ],
    "explanation": "Both are suitable for serverless applications:\nAurora Serverless:\n• Automatically scales compute capacity\n• Pay per second for compute\n• Ideal for intermittent/unpredictable workloads\n• SQL database (PostgreSQL/MySQL)\nDynamoDB On-Demand:\n• Automatically scales throughput\n• Pay per request\n• NoSQL database\n• Sub-10ms latency\nChoose Based On:\n• Need SQL, relational → Aurora Serverless\n• Need NoSQL, extreme scale → DynamoDB On-Demand\n• Intermittent workloads → Both work\n• Dev/test environments → Aurora Serverless\n• Serverless apps → Both work",
    "module": "Database",
    "multi": false,
    "why": [
      "Both are suitable for serverless applications:.",
      "Aurora Serverless:.",
      "Automatically scales compute capacity.",
      "Pay per second for compute.",
      "Ideal for intermittent/unpredictable workloads.",
      "SQL database (PostgreSQL/MySQL)",
      "DynamoDB On-Demand:.",
      "Automatically scales throughput.",
      "Pay per request.",
      "NoSQL database.",
      "Sub-10ms latency.",
      "Choose Based On:.",
      "Need SQL, relational → Aurora Serverless.",
      "Need NoSQL, extreme scale → DynamoDB On-Demand.",
      "Intermittent workloads → Both work.",
      "Dev/test environments → Aurora Serverless.",
      "Serverless apps → Both work."
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "05-21",
    "q": "A development team needs a fully managed, scalable, and highly available Apache Cassandra-compatible database for their application. Which AWS service should they use?",
    "options": {
      "A": "Amazon Keyspaces",
      "B": "Amazon DynamoDB",
      "C": "Amazon RDS for PostgreSQL",
      "D": "Amazon Aurora"
    },
    "answer": [
      "A"
    ],
    "explanation": "• Amazon Keyspaces is a managed Cassandra-compatible database\n• Supports Cassandra Query Language (CQL)\n• DynamoDB is NoSQL but not Cassandra-compatible\n• RDS and Aurora are relational databases",
    "module": "Database",
    "multi": false,
    "why": [
      "Supports Cassandra Query Language (CQL)",
      "DynamoDB is NoSQL but not Cassandra-compatible.",
      "RDS and Aurora are relational databases."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "05-22",
    "q": "A financial institution needs a fully managed, immutable, cryptographically verifiable ledger database for recording transactions. Which AWS service should they use?",
    "options": {
      "A": "Amazon QLDB",
      "B": "Amazon Aurora",
      "C": "Amazon RDS",
      "D": "Amazon DynamoDB"
    },
    "answer": [
      "A"
    ],
    "explanation": "• Amazon QLDB (Quantum Ledger Database) is a fully managed ledger database\n• Provides immutable, cryptographically verifiable transaction log\n• Aurora, RDS, and DynamoDB are not ledger databases",
    "module": "Database",
    "multi": false,
    "why": [
      "Provides immutable, cryptographically verifiable transaction log.",
      "Aurora, RDS, and DynamoDB are not ledger databases."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "06-1",
    "q": "A company wants to create an isolated network in AWS where they can launch resources. Which AWS service should they use?",
    "options": {
      "A": "AWS Direct Connect",
      "B": "Amazon VPC",
      "C": "AWS Transit Gateway",
      "D": "Amazon Route 53"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Amazon VPC (Virtual Private Cloud) provides isolated network environment\n• Logically isolated section of AWS Cloud\n• Complete control over networking (IP ranges, subnets, route tables, gateways)\n• Can create public and private subnets\nVPC Key Components:\n• CIDR Block: IP address range (e.g., 10.0.0.0/16)\n• Subnets: Subdivisions within VPC\n• Route Tables: Control traffic routing\n• Internet Gateway: Access to internet\n• NAT Gateway: Outbound internet for private subnets",
    "module": "Networking",
    "multi": false,
    "why": [
      "Logically isolated section of AWS Cloud.",
      "Complete control over networking (IP ranges, subnets, route tables, gateways)",
      "Can create public and private subnets.",
      "VPC Key Components:.",
      "CIDR Block: IP address range (e.g., 10.0.0.0/16)",
      "Subnets: Subdivisions within VPC.",
      "Route Tables: Control traffic routing.",
      "Internet Gateway: Access to internet.",
      "NAT Gateway: Outbound internet for private subnets."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "06-2",
    "q": "A private subnet contains EC2 instances that need to download software updates from the internet. The instances should NOT be directly accessible from the internet. What should be configured?",
    "options": {
      "A": "Internet Gateway",
      "B": "NAT Gateway",
      "C": "Virtual Private Gateway",
      "D": "VPC Peering"
    },
    "answer": [
      "B"
    ],
    "explanation": "• NAT Gateway enables outbound internet access for private subnets\n• Instances remain private (no inbound from internet)\n• Placed in public subnet\n• Route private subnet traffic to NAT Gateway\nNAT Gateway vs NAT Instance:\n| Feature | NAT Gateway | NAT Instance |\n|---------|-------------|--------------|\n| Managed | AWS-managed | Customer-managed |\n| Availability | Highly available (AZ) | Single instance |\n| Bandwidth | Up to 45 Gbps | Instance type dependent |\n| Cost | Hourly + data transfer | Instance cost |\n| Maintenance | AWS handles | Customer handles |\nConfiguration:\n1. Create NAT Gateway in public subnet\n2. Update private subnet route table\n3. Route 0.0.0.0/0 to NAT Gateway",
    "module": "Networking",
    "multi": false,
    "why": [
      "Instances remain private (no inbound from internet)",
      "Placed in public subnet.",
      "Route private subnet traffic to NAT Gateway.",
      "NAT Gateway vs NAT Instance:.",
      "| Feature | NAT Gateway | NAT Instance |.",
      "|---------|-------------|--------------|.",
      "| Managed | AWS-managed | Customer-managed |.",
      "| Availability | Highly available (AZ) | Single instance |.",
      "| Bandwidth | Up to 45 Gbps | Instance type dependent |.",
      "| Cost | Hourly + data transfer | Instance cost |.",
      "| Maintenance | AWS handles | Customer handles |.",
      "Configuration:.",
      "1.",
      "Create NAT Gateway in public subnet.",
      "2.",
      "Update private subnet route table.",
      "3.",
      "Route 0.0.0.0/0 to NAT Gateway."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "06-3",
    "q": "A company has a VPC with CIDR 10.0.0.0/16. They want to divide it into subnets. How many IP addresses are available in a /24 subnet?",
    "options": {
      "A": "128",
      "B": "256",
      "C": "251",
      "D": "254"
    },
    "answer": [
      "C"
    ],
    "explanation": "• /24 subnet has 256 total IP addresses (2^8)\n• AWS reserves 5 IP addresses in each subnet:\n• .0: Network address\n• .1: VPC router\n• .2: DNS server\n• .3: Future use\n• .255: Broadcast\n• Available: 256 - 5 = 251 IP addresses\nCIDR Calculations:\n• /16: 65,536 IPs (65,531 usable)\n• /24: 256 IPs (251 usable)\n• /28: 16 IPs (11 usable)",
    "module": "Networking",
    "multi": false,
    "why": [
      "/24 subnet has 256 total IP addresses (2^8)",
      "AWS reserves 5 IP addresses in each subnet:.",
      ".0: Network address.",
      ".1: VPC router.",
      ".2: DNS server.",
      ".3: Future use.",
      ".255: Broadcast.",
      "Available: 256 - 5 = 251 IP addresses.",
      "CIDR Calculations:.",
      "/16: 65,536 IPs (65,531 usable)",
      "/24: 256 IPs (251 usable)",
      "/28: 16 IPs (11 usable)"
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "06-4",
    "q": "An application running in a VPC needs to connect to AWS services (S3, DynamoDB) without traversing the internet. What should be configured?",
    "options": {
      "A": "NAT Gateway",
      "B": "Internet Gateway",
      "C": "VPC Endpoint",
      "D": "VPN Connection"
    },
    "answer": [
      "C"
    ],
    "explanation": "• VPC Endpoints provide private connectivity to AWS services\n• Traffic stays within AWS network\n• No internet gateway or NAT required\n• Enhanced security and performance\nVPC Endpoint Types:\n| Type | Services | Implementation | Cost |\n|------|----------|----------------|------|\n| Gateway | S3, DynamoDB | Route table entry | Free |\n| Interface | Most AWS services | ENI in subnet | Hourly + data |\nGateway Endpoint Benefits:\n• No data transfer charges\n• Better performance\n• No internet exposure\n• Policy control",
    "module": "Networking",
    "multi": false,
    "why": [
      "Traffic stays within AWS network.",
      "No internet gateway or NAT required.",
      "Enhanced security and performance.",
      "VPC Endpoint Types:.",
      "| Type | Services | Implementation | Cost |.",
      "|------|----------|----------------|------|.",
      "| Gateway | S3, DynamoDB | Route table entry | Free |.",
      "| Interface | Most AWS services | ENI in subnet | Hourly + data |.",
      "Gateway Endpoint Benefits:.",
      "No data transfer charges.",
      "Better performance.",
      "No internet exposure.",
      "Policy control."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "06-5",
    "q": "A company wants to connect their on-premises data center to AWS with a dedicated, private network connection. Which service should they use?",
    "options": {
      "A": "AWS VPN",
      "B": "AWS Direct Connect",
      "C": "Internet Gateway",
      "D": "VPC Peering"
    },
    "answer": [
      "B"
    ],
    "explanation": "• AWS Direct Connect provides dedicated physical connection\n• Bypasses public internet\n• More consistent performance\n• Reduced bandwidth costs\nDirect Connect vs VPN:\n| Feature | Direct Connect | Site-to-Site VPN |\n|---------|----------------|------------------|\n| Connection | Dedicated fiber | Internet-based |\n| Bandwidth | 1 Gbps to 100 Gbps | Up to 1.25 Gbps |\n| Latency | Low, consistent | Variable |\n| Cost | Higher (port + data) | Lower |\n| Setup Time | Weeks/months | Minutes |\n| Encryption | Not by default | Yes (IPSec) |\nUse Cases:\n• Large data transfers\n• Consistent performance needed\n• Hybrid cloud architectures\n• Compliance requirements",
    "module": "Networking",
    "multi": false,
    "why": [
      "Bypasses public internet.",
      "More consistent performance.",
      "Reduced bandwidth costs.",
      "Direct Connect vs VPN:.",
      "| Feature | Direct Connect | Site-to-Site VPN |.",
      "|---------|----------------|------------------|.",
      "| Connection | Dedicated fiber | Internet-based |.",
      "| Bandwidth | 1 Gbps to 100 Gbps | Up to 1.25 Gbps |.",
      "| Latency | Low, consistent | Variable |.",
      "| Cost | Higher (port + data) | Lower |.",
      "| Setup Time | Weeks/months | Minutes |.",
      "| Encryption | Not by default | Yes (IPSec) |.",
      "Use Cases:.",
      "Large data transfers.",
      "Consistent performance needed.",
      "Hybrid cloud architectures.",
      "Compliance requirements."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "06-6",
    "q": "A company needs to route traffic between multiple VPCs in different AWS accounts. What is the MOST scalable solution?",
    "options": {
      "A": "VPC Peering between all VPCs",
      "B": "AWS Transit Gateway",
      "C": "Multiple VPN connections",
      "D": "Internet Gateway"
    },
    "answer": [
      "B"
    ],
    "explanation": "• AWS Transit Gateway is central hub for VPCs\n• Connects multiple VPCs, on-premises networks\n• Simplifies network topology\n• Scalable (up to 5000 VPCs)\nTransit Gateway vs VPC Peering:\n| Feature | Transit Gateway | VPC Peering |\n|---------|----------------|-------------|\n| Topology | Hub-and-spoke | Mesh (1-to-1) |\n| Scalability | Thousands of VPCs | Limited |\n| Routing | Centralized | Per peering |\n| Cost | Higher | Lower (small scale) |\n| Cross-Region | Yes | Yes |\nPeering Limitations:\n• Non-transitive (must peer each VPC)\n• Complex with many VPCs (N*(N-1)/2 connections)",
    "module": "Networking",
    "multi": false,
    "why": [
      "Connects multiple VPCs, on-premises networks.",
      "Simplifies network topology.",
      "Scalable (up to 5000 VPCs)",
      "Transit Gateway vs VPC Peering:.",
      "| Feature | Transit Gateway | VPC Peering |.",
      "|---------|----------------|-------------|.",
      "| Topology | Hub-and-spoke | Mesh (1-to-1) |.",
      "| Scalability | Thousands of VPCs | Limited |.",
      "| Routing | Centralized | Per peering |.",
      "| Cost | Higher | Lower (small scale) |.",
      "| Cross-Region | Yes | Yes |.",
      "Peering Limitations:.",
      "Non-transitive (must peer each VPC)",
      "Complex with many VPCs (N(N-1)/2 connections)"
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "06-7",
    "q": "An application needs to resolve domain names. Where should the DNS server be configured in a VPC?",
    "options": {
      "A": "Custom DNS server on EC2",
      "B": "Use AWS-provided DNS at .2 address",
      "C": "Use Route 53 Resolver",
      "D": "Both B and C"
    },
    "answer": [
      "D"
    ],
    "explanation": "• VPC DNS is available at base IP + 2 (e.g., 10.0.0.2)\n• Route 53 Resolver provides DNS resolution\n• Resolves AWS resources\n• Forwards to on-premises DNS\n• Inbound/outbound endpoints\nDNS Options:\n• AWS-provided DNS: Default, automatic\n• Route 53 Resolver: Advanced, hybrid scenarios\n• Custom DNS: Full control, more management\nenableDnsHostnames: EC2 instances get public DNS names\nenableDnsSupport: Amazon-provided DNS enabled",
    "module": "Networking",
    "multi": false,
    "why": [
      "VPC DNS is available at base IP + 2 (e.g., 10.0.0.2)",
      "Route 53 Resolver provides DNS resolution.",
      "Resolves AWS resources.",
      "Forwards to on-premises DNS.",
      "Inbound/outbound endpoints.",
      "DNS Options:.",
      "AWS-provided DNS: Default, automatic.",
      "Route 53 Resolver: Advanced, hybrid scenarios.",
      "Custom DNS: Full control, more management.",
      "EnableDnsHostnames: EC2 instances get public DNS names.",
      "EnableDnsSupport: Amazon-provided DNS enabled."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "06-8",
    "q": "A company wants to protect their web application from DDoS attacks and filter malicious traffic. Which AWS services should be used? (Choose TWO)",
    "options": {
      "A": "AWS WAF",
      "B": "AWS Shield",
      "C": "Security Groups",
      "D": "AWS GuardDuty",
      "E": "Network ACLs"
    },
    "answer": [
      "A",
      "B"
    ],
    "explanation": "• AWS Shield: DDoS protection\n• Standard: Free, automatic, common attacks\n• Advanced: Paid, advanced attacks, 24/7 support, cost protection\n• AWS WAF: Web Application Firewall\n• Filter HTTP/HTTPS requests\n• SQL injection, XSS protection\n• Custom rules\n• Integration with CloudFront, ALB, API Gateway\nDDoS Protection Layers:\n1. Shield Standard: Network/transport layer (free)\n2. Shield Advanced: Application layer, enhanced\n3. WAF: Application-level filtering\n4. CloudFront: Absorb traffic at edge\nOther Options:\n• Security Groups: Instance-level firewall, not DDoS\n• NACLs: Subnet-level firewall, not DDoS\n• GuardDuty: Threat detection, not prevention",
    "module": "Networking",
    "multi": true,
    "why": [
      "AWS Shield: DDoS protection.",
      "Standard: Free, automatic, common attacks.",
      "Advanced: Paid, advanced attacks, 24/7 support, cost protection.",
      "AWS WAF: Web Application Firewall.",
      "Filter HTTP/HTTPS requests.",
      "SQL injection, XSS protection.",
      "Custom rules.",
      "Integration with CloudFront, ALB, API Gateway.",
      "DDoS Protection Layers:.",
      "1.",
      "Shield Standard: Network/transport layer (free)",
      "2.",
      "Shield Advanced: Application layer, enhanced.",
      "3.",
      "WAF: Application-level filtering.",
      "4.",
      "CloudFront: Absorb traffic at edge.",
      "Other Options:.",
      "Security Groups: Instance-level firewall, not DDoS.",
      "NACLs: Subnet-level firewall, not DDoS.",
      "GuardDuty: Threat detection, not prevention."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "06-9",
    "q": "An application needs to distribute traffic across EC2 instances in multiple Availability Zones. The instances fail health checks intermittently. What should be configured?",
    "options": {
      "A": "Increase health check interval",
      "B": "Configure unhealthy threshold",
      "C": "Use health check grace period",
      "D": "Disable health checks"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Unhealthy threshold: Number of consecutive failed checks before marking unhealthy\n• Prevents temporary issues from removing instances\n• Balance between responsiveness and stability\nHealth Check Parameters:\n• HealthCheckIntervalSeconds: Time between checks (5-300s)\n• HealthyThresholdCount: Consecutive successes to mark healthy\n• UnhealthyThresholdCount: Consecutive failures to mark unhealthy\n• HealthCheckTimeoutSeconds: Time to wait for response\nBest Practices:\n• Set appropriate thresholds for application\n• Monitor health check metrics\n• Use ALB health checks for HTTP endpoints\n• Consider application startup time",
    "module": "Networking",
    "multi": false,
    "why": [
      "Unhealthy threshold: Number of consecutive failed checks before marking unhealthy.",
      "Prevents temporary issues from removing instances.",
      "Balance between responsiveness and stability.",
      "Health Check Parameters:.",
      "HealthCheckIntervalSeconds: Time between checks (5-300s)",
      "HealthyThresholdCount: Consecutive successes to mark healthy.",
      "UnhealthyThresholdCount: Consecutive failures to mark unhealthy.",
      "HealthCheckTimeoutSeconds: Time to wait for response.",
      "Best Practices:.",
      "Set appropriate thresholds for application.",
      "Monitor health check metrics.",
      "Use ALB health checks for HTTP endpoints.",
      "Consider application startup time."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "06-10",
    "q": "A company wants to route traffic based on the geographic location of users. Which Route 53 routing policy should be used?",
    "options": {
      "A": "Simple Routing",
      "B": "Weighted Routing",
      "C": "Geolocation Routing",
      "D": "Latency-based Routing"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Geolocation Routing routes based on user's geographic location\n• Routes by continent, country, or state\n• Use cases: Content localization, compliance, load distribution\nRoute 53 Routing Policies:\n| Policy | Use Case |\n|--------|----------|\n| Simple | Single resource |\n| Weighted | A/B testing, gradual rollout |\n| Latency | Best performance for users |\n| Failover | Active-passive DR |\n| Geolocation | Route by user location |\n| Geoproximity | Route by resource location + bias |\n| Multivalue | Multiple IPs, health checks |\nGeolocation vs Latency:\n• Geolocation: Based on WHERE user is\n• Latency: Based on WHICH region has lowest latency",
    "module": "Networking",
    "multi": false,
    "why": [
      "Routes by continent, country, or state.",
      "Use cases: Content localization, compliance, load distribution.",
      "Route 53 Routing Policies:.",
      "| Policy | Use Case |.",
      "|--------|----------|.",
      "| Simple | Single resource |.",
      "| Weighted | A/B testing, gradual rollout |.",
      "| Latency | Best performance for users |.",
      "| Failover | Active-passive DR |.",
      "| Geolocation | Route by user location |.",
      "| Geoproximity | Route by resource location + bias |.",
      "| Multivalue | Multiple IPs, health checks |.",
      "Geolocation vs Latency:.",
      "Geolocation: Based on WHERE user is.",
      "Latency: Based on WHICH region has lowest latency."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "06-11",
    "q": "A Security Group allows inbound traffic on port 443 from 0.0.0.0/0. What outbound rule is needed for responses?",
    "options": {
      "A": "Allow port 443 outbound to 0.0.0.0/0",
      "B": "Allow ephemeral ports outbound",
      "C": "No outbound rule needed",
      "D": "Allow all traffic outbound"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Security Groups are stateful\n• If inbound is allowed, return traffic automatically allowed\n• No need to configure outbound rule for responses\n• Only need outbound rules for instance-initiated traffic\nSecurity Groups vs NACLs:\n| Feature | Security Groups | NACLs |\n|---------|----------------|-------|\n| State | Stateful | Stateless |\n| Level | Instance | Subnet |\n| Rules | Allow only | Allow and Deny |\n| Return Traffic | Automatic | Must configure |\n| Evaluation | All rules | Ordered rules |",
    "module": "Networking",
    "multi": false,
    "why": [
      "Security Groups are stateful.",
      "If inbound is allowed, return traffic automatically allowed.",
      "No need to configure outbound rule for responses.",
      "Only need outbound rules for instance-initiated traffic.",
      "Security Groups vs NACLs:.",
      "| Feature | Security Groups | NACLs |.",
      "|---------|----------------|-------|.",
      "| State | Stateful | Stateless |.",
      "| Level | Instance | Subnet |.",
      "| Rules | Allow only | Allow and Deny |.",
      "| Return Traffic | Automatic | Must configure |.",
      "| Evaluation | All rules | Ordered rules |."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "06-12",
    "q": "A company needs to block specific IP addresses from accessing their application. Which is the MOST appropriate solution?",
    "options": {
      "A": "Security Group Deny rules",
      "B": "Network ACL Deny rules",
      "C": "AWS WAF IP set rules",
      "D": "Route 53 DNS filtering"
    },
    "answer": [
      "B"
    ],
    "explanation": "For network-level blocking:\n• Network ACLs support Deny rules\n• Evaluated before traffic reaches instances\n• Can block IP ranges at subnet level\nFor application-level blocking:\n• AWS WAF with IP set match conditions\n• More flexible filtering\n• Works with CloudFront, ALB, API Gateway\nSecurity Groups limitations:\n• Cannot create Deny rules (only Allow)\n• Cannot block specific IPs\nBest Practice:\n• NACL: Network-level IP blocking\n• WAF: Application-level, geographic blocking, rate limiting",
    "module": "Networking",
    "multi": false,
    "why": [
      "For network-level blocking:.",
      "Network ACLs support Deny rules.",
      "Evaluated before traffic reaches instances.",
      "Can block IP ranges at subnet level.",
      "For application-level blocking:.",
      "AWS WAF with IP set match conditions.",
      "More flexible filtering.",
      "Works with CloudFront, ALB, API Gateway.",
      "Security Groups limitations:.",
      "Cannot create Deny rules (only Allow)",
      "Cannot block specific IPs.",
      "Best Practice:.",
      "NACL: Network-level IP blocking.",
      "WAF: Application-level, geographic blocking, rate limiting."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "06-13",
    "q": "A company has resources in two VPCs in the same region and wants them to communicate privately. What should be configured?",
    "options": {
      "A": "Internet Gateway",
      "B": "VPC Peering",
      "C": "AWS Transit Gateway",
      "D": "VPN Connection"
    },
    "answer": [
      "B"
    ],
    "explanation": "• VPC Peering connects two VPCs privately\n• Same or different regions\n• Same or different accounts\n• Uses AWS network (no internet)\nVPC Peering Requirements:\n• Non-overlapping CIDR blocks\n• Accept peering request\n• Update route tables in both VPCs\n• Update security groups if needed\nVPC Peering Characteristics:\n• Not transitive (VPC A ↔ VPC B, VPC B ↔ VPC C, but NOT A ↔ C)\n• 1-to-1 connection\n• No single point of failure\n• No bandwidth bottleneck\nWhen to use Transit Gateway instead:\n• Many VPCs (>3-4)\n• Complex routing\n• Need transitive routing",
    "module": "Networking",
    "multi": false,
    "why": [
      "Same or different regions.",
      "Same or different accounts.",
      "Uses AWS network (no internet)",
      "VPC Peering Requirements:.",
      "Non-overlapping CIDR blocks.",
      "Accept peering request.",
      "Update route tables in both VPCs.",
      "Update security groups if needed.",
      "VPC Peering Characteristics:.",
      "Not transitive (VPC A ↔ VPC B, VPC B ↔ VPC C, but NOT A ↔ C)",
      "1-to-1 connection.",
      "No single point of failure.",
      "No bandwidth bottleneck.",
      "When to use Transit Gateway instead:.",
      "Many VPCs (>3-4)",
      "Complex routing.",
      "Need transitive routing."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "06-14",
    "q": "An application running on EC2 instances needs to maintain client connections to the same instance for session persistence. Which load balancer feature should be enabled?",
    "options": {
      "A": "Cross-Zone Load Balancing",
      "B": "Connection Draining",
      "C": "Sticky Sessions",
      "D": "Health Checks"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Sticky Sessions (Session Affinity) routes requests from same client to same instance\n• Uses cookies to track sessions\n• Duration-based or application-based cookies\nALB Sticky Session Types:\n• Duration-based: LB-generated cookie (AWSALB)\n• Application-based: Application-generated cookie\nSticky Sessions Limitations:\n• Can cause uneven load distribution\n• Instance failure = lost sessions\nBetter Alternative: \n• Store sessions in ElastiCache or DynamoDB\n• True stateless architecture",
    "module": "Networking",
    "multi": false,
    "why": [
      "Uses cookies to track sessions.",
      "Duration-based or application-based cookies.",
      "ALB Sticky Session Types:.",
      "Duration-based: LB-generated cookie (AWSALB)",
      "Application-based: Application-generated cookie.",
      "Sticky Sessions Limitations:.",
      "Can cause uneven load distribution.",
      "Instance failure = lost sessions.",
      "Better Alternative:.",
      "Store sessions in ElastiCache or DynamoDB.",
      "True stateless architecture."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "06-15",
    "q": "A company wants to use custom domain name with CloudFront distribution. What must be configured?",
    "options": {
      "A": "Route 53 CNAME record only",
      "B": "SSL/TLS certificate in ACM and Route 53 alias",
      "C": "CloudFront custom origin",
      "D": "S3 bucket name matching domain"
    },
    "answer": [
      "B"
    ],
    "explanation": "Requirements for custom domain:\n1. SSL/TLS Certificate in ACM (us-east-1 region)\n2. Alternate Domain Names (CNAMEs) in CloudFront\n3. Route 53 Alias Record pointing to CloudFront distribution\nConfiguration Steps:\n1. Request/import certificate in ACM (us-east-1)\n2. Add alternate domain names to CloudFront\n3. Associate ACM certificate with distribution\n4. Create Route 53 alias record\nCertificate Requirements:\n• Must be in us-east-1 for CloudFront\n• Domain name must match\n• Can use wildcard (*.example.com)",
    "module": "Networking",
    "multi": false,
    "why": [
      "Requirements for custom domain:.",
      "1.",
      "SSL/TLS Certificate in ACM (us-east-1 region)",
      "2.",
      "Alternate Domain Names (CNAMEs) in CloudFront.",
      "3.",
      "Route 53 Alias Record pointing to CloudFront distribution.",
      "Configuration Steps:.",
      "1.",
      "Request/import certificate in ACM (us-east-1)",
      "2.",
      "Add alternate domain names to CloudFront.",
      "3.",
      "Associate ACM certificate with distribution.",
      "4.",
      "Create Route 53 alias record.",
      "Certificate Requirements:.",
      "Must be in us-east-1 for CloudFront.",
      "Domain name must match.",
      "Can use wildcard (.example.com)"
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "06-16",
    "q": "A company needs a highly available solution for connecting on-premises data center to AWS. What should be implemented?",
    "options": {
      "A": "Single Direct Connect connection",
      "B": "Redundant Direct Connect connections to different locations",
      "C": "Site-to-Site VPN as backup to Direct Connect",
      "D": "Both B and C (Maximum redundancy)"
    },
    "answer": [
      "D"
    ],
    "explanation": "Maximum High Availability:\n• Multiple Direct Connect connections in different locations\n• Site-to-Site VPN as backup\n• Redundant customer routers\n• Multiple VPN tunnels\nHA Architecture Layers:\n1. Redundant DX connections: Different locations\n2. Redundant customer routers: No single point failure\n3. VPN backup: Failover if DX fails\n4. Multiple VPN tunnels: AWS provides 2 tunnels per connection\nBenefits:\n• 99.99% availability possible\n• Automatic failover\n• Protection against location/connection failures",
    "module": "Networking",
    "multi": false,
    "why": [
      "Maximum High Availability:.",
      "Multiple Direct Connect connections in different locations.",
      "Site-to-Site VPN as backup.",
      "Redundant customer routers.",
      "Multiple VPN tunnels.",
      "HA Architecture Layers:.",
      "1.",
      "Redundant DX connections: Different locations.",
      "2.",
      "Redundant customer routers: No single point failure.",
      "3.",
      "VPN backup: Failover if DX fails.",
      "4.",
      "Multiple VPN tunnels: AWS provides 2 tunnels per connection.",
      "Benefits:.",
      "99.99% availability possible.",
      "Automatic failover.",
      "Protection against location/connection failures."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "06-17",
    "q": "An application needs to resolve private DNS names between on-premises network and AWS VPC. What should be configured?",
    "options": {
      "A": "VPC Peering",
      "B": "Route 53 Private Hosted Zone",
      "C": "Route 53 Resolver Endpoints",
      "D": "AWS PrivateLink"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Route 53 Resolver Endpoints enable DNS resolution between on-premises and AWS\n• Inbound Endpoints: On-premises queries AWS resources\n• Outbound Endpoints: AWS queries on-premises resources\nEndpoint Types:\n• Inbound: On-premises → AWS VPC\n• Outbound: AWS VPC → On-premises (with forwarding rules)\nConfiguration:\n1. Create inbound/outbound endpoints in VPC\n2. Configure forwarding rules\n3. Update on-premises DNS to forward to inbound endpoint\n4. Create rules to forward to on-premises DNS\nUse Cases:\n• Hybrid cloud DNS resolution\n• Migrate workloads with DNS dependencies\n• Unified naming across environments",
    "module": "Networking",
    "multi": false,
    "why": [
      "Inbound Endpoints: On-premises queries AWS resources.",
      "Outbound Endpoints: AWS queries on-premises resources.",
      "Endpoint Types:.",
      "Inbound: On-premises → AWS VPC.",
      "Outbound: AWS VPC → On-premises (with forwarding rules)",
      "Configuration:.",
      "1.",
      "Create inbound/outbound endpoints in VPC.",
      "2.",
      "Configure forwarding rules.",
      "3.",
      "Update on-premises DNS to forward to inbound endpoint.",
      "4.",
      "Create rules to forward to on-premises DNS.",
      "Use Cases:.",
      "Hybrid cloud DNS resolution.",
      "Migrate workloads with DNS dependencies.",
      "Unified naming across environments."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "06-18",
    "q": "A company wants to share services (like NLB) from one VPC with other VPCs/accounts without VPC peering. Which service enables this?",
    "options": {
      "A": "VPC Peering",
      "B": "AWS PrivateLink",
      "C": "Transit Gateway",
      "D": "VPN Connection"
    },
    "answer": [
      "B"
    ],
    "explanation": "• AWS PrivateLink provides private connectivity to services\n• Expose services via VPC Endpoint Services\n• Consumers access via Interface VPC Endpoints\n• No VPC peering, Internet Gateway, NAT required\nPrivateLink Architecture:\n• Provider: Creates Endpoint Service (backed by NLB)\n• Consumer: Creates Interface VPC Endpoint\n• Connection: Private, within AWS network\nBenefits:\n• Simplified network management\n• No CIDR overlap issues\n• Enhanced security (private connectivity)\n• Scalable (thousands of consumers)\nUse Cases:\n• SaaS applications\n• Shared services\n• Third-party services\n• Marketplace applications",
    "module": "Networking",
    "multi": false,
    "why": [
      "Expose services via VPC Endpoint Services.",
      "Consumers access via Interface VPC Endpoints.",
      "No VPC peering, Internet Gateway, NAT required.",
      "PrivateLink Architecture:.",
      "Provider: Creates Endpoint Service (backed by NLB)",
      "Consumer: Creates Interface VPC Endpoint.",
      "Connection: Private, within AWS network.",
      "Benefits:.",
      "Simplified network management.",
      "No CIDR overlap issues.",
      "Enhanced security (private connectivity)",
      "Scalable (thousands of consumers)",
      "Use Cases:.",
      "SaaS applications.",
      "Shared services.",
      "Third-party services.",
      "Marketplace applications."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "06-19",
    "q": "A company wants to implement a global accelerator for their application with static IP addresses and deterministic routing. Which service should be used?",
    "options": {
      "A": "Amazon CloudFront",
      "B": "AWS Global Accelerator",
      "C": "Route 53 with Latency Routing",
      "D": "Elastic Load Balancing"
    },
    "answer": [
      "B"
    ],
    "explanation": "• AWS Global Accelerator provides static anycast IPs\n• Routes traffic over AWS global network\n• Deterministic, fast failover\n• Health checks and instant failover\nGlobal Accelerator vs CloudFront:\n| Feature | Global Accelerator | CloudFront |\n|---------|-------------------|------------|\n| Use Case | TCP/UDP apps | HTTP/HTTPS content |\n| Caching | No | Yes |\n| Static IP | Yes (2 anycast) | No |\n| Failover | Instant (< 30s) | DNS-based |\n| Protocol | TCP, UDP | HTTP, HTTPS, WebSocket |\nGlobal Accelerator Benefits:\n• Static IPs (no DNS changes)\n• AWS network routing (better performance)\n• Health-based routing\n• Traffic dials for blue/green deployments\nUse Cases:\n• Gaming (UDP)\n• IoT\n• VoIP\n• Non-HTTP applications",
    "module": "Networking",
    "multi": false,
    "why": [
      "Routes traffic over AWS global network.",
      "Deterministic, fast failover.",
      "Health checks and instant failover.",
      "Global Accelerator vs CloudFront:.",
      "| Feature | Global Accelerator | CloudFront |.",
      "|---------|-------------------|------------|.",
      "| Use Case | TCP/UDP apps | HTTP/HTTPS content |.",
      "| Caching | No | Yes |.",
      "| Static IP | Yes (2 anycast) | No |.",
      "| Failover | Instant (< 30s) | DNS-based |.",
      "| Protocol | TCP, UDP | HTTP, HTTPS, WebSocket |.",
      "Global Accelerator Benefits:.",
      "Static IPs (no DNS changes)",
      "AWS network routing (better performance)",
      "Health-based routing.",
      "Traffic dials for blue/green deployments.",
      "Use Cases:.",
      "Gaming (UDP)",
      "IoT.",
      "VoIP.",
      "Non-HTTP applications."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "06-20",
    "q": "A web application receives sudden traffic spikes. The company wants to protect backend servers from being overwhelmed. What should be implemented at the Network ACL level?",
    "options": {
      "A": "Allow all traffic",
      "B": "Rate limiting",
      "C": "Connection draining",
      "D": "NACLs don't support rate limiting, use WAF"
    },
    "answer": [
      "D"
    ],
    "explanation": "• NACLs provide basic allow/deny rules\n• No rate limiting capabilities\n• AWS WAF provides rate limiting\nRate Limiting Solutions:\n| Service | Level | Capability |\n|---------|-------|------------|\n| AWS WAF | Application (L7) | Rate-based rules |\n| API Gateway | API | Throttling |\n| Shield Advanced | Network | DDoS mitigation |\n| NACL | Network (L4) | No rate limiting |\nWAF Rate-Based Rule:\n• Block IPs exceeding request threshold\n• 5-minute time window\n• Example: Block if > 2000 requests in 5 minutes\nBest Practice for Traffic Spikes:\n1. Auto Scaling for capacity\n2. WAF for rate limiting\n3. CloudFront for caching\n4. ElastiCache for session/data",
    "module": "Networking",
    "multi": false,
    "why": [
      "NACLs provide basic allow/deny rules.",
      "No rate limiting capabilities.",
      "AWS WAF provides rate limiting.",
      "Rate Limiting Solutions:.",
      "| Service | Level | Capability |.",
      "|---------|-------|------------|.",
      "| AWS WAF | Application (L7) | Rate-based rules |.",
      "| API Gateway | API | Throttling |.",
      "| Shield Advanced | Network | DDoS mitigation |.",
      "| NACL | Network (L4) | No rate limiting |.",
      "WAF Rate-Based Rule:.",
      "Block IPs exceeding request threshold.",
      "5-minute time window.",
      "Example: Block if > 2000 requests in 5 minutes.",
      "Best Practice for Traffic Spikes:.",
      "1.",
      "Auto Scaling for capacity.",
      "2.",
      "WAF for rate limiting.",
      "3.",
      "CloudFront for caching.",
      "4.",
      "ElastiCache for session/data."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "06-21",
    "q": "A mobile gaming company needs to deliver ultra-low latency multiplayer experiences to users on 5G networks in major cities. The solution must run AWS compute and storage services at the edge of telecom networks. Which AWS service should they use?",
    "options": {
      "A": "AWS Wavelength",
      "B": "Amazon CloudFront",
      "C": "AWS Outposts",
      "D": "AWS Direct Connect"
    },
    "answer": [
      "A"
    ],
    "explanation": "• AWS Wavelength brings AWS compute and storage to the edge of 5G networks\n• Minimizes latency by running workloads at telecom provider locations\n• Ideal for mobile apps, gaming, AR/VR, IoT requiring <10ms latency\n• CloudFront is a CDN for static/dynamic content, not edge compute\n• Outposts is for on-premises data centers, not telecom edge\n• Direct Connect is for dedicated network connectivity",
    "module": "Networking",
    "multi": false,
    "why": [
      "Minimizes latency by running workloads at telecom provider locations.",
      "Ideal for mobile apps, gaming, AR/VR, IoT requiring <10ms latency.",
      "CloudFront is a CDN for static/dynamic content, not edge compute.",
      "Outposts is for on-premises data centers, not telecom edge.",
      "Direct Connect is for dedicated network connectivity."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "07-1",
    "q": "A company wants to encrypt data at rest in S3 with full control over encryption keys including custom rotation policies and audit trails. Which encryption method should be used?",
    "options": {
      "A": "SSE-S3 (Server-Side Encryption with S3-Managed Keys)",
      "B": "SSE-KMS with AWS managed keys",
      "C": "SSE-KMS with Customer Managed Keys (CMK)",
      "D": "SSE-C (Customer-Provided Keys)"
    },
    "answer": [
      "C"
    ],
    "explanation": "• SSE-KMS with Customer Managed Keys (CMK) provides complete control\n• Create, manage, rotate encryption keys\n• CloudTrail audit trail for key usage\n• Fine-grained access control via key policies\n• Automatic or manual key rotation\nS3 Encryption Options Comparison:\n| Method | Key Management | Rotation | Audit Trail | Cost |\n|--------|----------------|----------|-------------|------|\n| SSE-S3 | AWS | AWS handles | No | Free |\n| SSE-KMS (AWS managed) | AWS | Annual (automatic) | Yes (CloudTrail) | KMS API charges |\n| SSE-KMS (CMK) | Customer | On-demand/annual | Yes (CloudTrail) | KMS API charges |\n| SSE-C | Customer provides | Customer manages | No | Free |\nCMK Benefits:\n• Custom rotation schedule (enable automatic yearly rotation)\n• Disable/enable keys\n• Define key policies and grants\n• Cross-account access\n• Complete audit trail",
    "module": "Security",
    "multi": false,
    "why": [
      "Create, manage, rotate encryption keys.",
      "CloudTrail audit trail for key usage.",
      "Fine-grained access control via key policies.",
      "Automatic or manual key rotation.",
      "S3 Encryption Options Comparison:.",
      "| Method | Key Management | Rotation | Audit Trail | Cost |.",
      "|--------|----------------|----------|-------------|------|.",
      "| SSE-S3 | AWS | AWS handles | No | Free |.",
      "| SSE-KMS (AWS managed) | AWS | Annual (automatic) | Yes (CloudTrail) | KMS API charges |.",
      "| SSE-KMS (CMK) | Customer | On-demand/annual | Yes (CloudTrail) | KMS API charges |.",
      "| SSE-C | Customer provides | Customer manages | No | Free |.",
      "CMK Benefits:.",
      "Custom rotation schedule (enable automatic yearly rotation)",
      "Disable/enable keys.",
      "Define key policies and grants.",
      "Cross-account access.",
      "Complete audit trail."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "07-2",
    "q": "An application needs to securely store database credentials that should be automatically rotated every 30 days. Which AWS service is MOST appropriate?",
    "options": {
      "A": "AWS Systems Manager Parameter Store",
      "B": "AWS Secrets Manager",
      "C": "AWS KMS",
      "D": "Amazon S3 with encryption"
    },
    "answer": [
      "B"
    ],
    "explanation": "• AWS Secrets Manager designed specifically for secrets with built-in rotation\n• Automatic rotation for RDS, DocumentDB, Redshift, Amazon Redshift\n• Lambda-based custom rotation for other services\n• Versioning and immediate rotation\nSecrets Manager Features:\n• Automatic rotation (configurable schedule)\n• Built-in integration with AWS databases\n• Encryption at rest (KMS)\n• Fine-grained access control (IAM)\n• Audit capability (CloudTrail)\n• Cross-region replication\n• Version management\nSecrets Manager vs Parameter Store:\n| Feature | Secrets Manager | Parameter Store (Standard) | Parameter Store (Advanced) |\n|---------|----------------|----------------------------|----------------------------|\n| Automatic Rotation | Yes | No | No |\n| Built-in RDS Integration | Yes | No | No |\n| Cost | $0.40/secret/month + API calls | Free | $0.05/parameter/month |\n| Secret Size | 64 KB | 4 KB | 8 KB |\n| Encryption | Always (KMS) | Optional (KMS) | Optional (KMS) |\n| Use Case | DB credentials, API keys | Configuration, non-rotating secrets | Configuration, larger values |\nRotation Configuration:",
    "module": "Security",
    "multi": false,
    "why": [
      "Automatic rotation for RDS, DocumentDB, Redshift, Amazon Redshift.",
      "Lambda-based custom rotation for other services.",
      "Versioning and immediate rotation.",
      "Secrets Manager Features:.",
      "Automatic rotation (configurable schedule)",
      "Built-in integration with AWS databases.",
      "Encryption at rest (KMS)",
      "Fine-grained access control (IAM)",
      "Audit capability (CloudTrail)",
      "Cross-region replication.",
      "Version management.",
      "Secrets Manager vs Parameter Store:.",
      "| Feature | Secrets Manager | Parameter Store (Standard) | Parameter Store (Advanced) |.",
      "|---------|----------------|----------------------------|----------------------------|.",
      "| Automatic Rotation | Yes | No | No |.",
      "| Built-in RDS Integration | Yes | No | No |.",
      "| Cost | $0.40/secret/month + API calls | Free | $0.05/parameter/month |.",
      "| Secret Size | 64 KB | 4 KB | 8 KB |.",
      "| Encryption | Always (KMS) | Optional (KMS) | Optional (KMS) |.",
      "| Use Case | DB credentials, API keys | Configuration, non-rotating secrets | Configuration, larger values |.",
      "Rotation Configuration:."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "07-3",
    "q": "A company must ensure that all API calls across their AWS organization are logged and stored for 7 years for compliance. Which services should be configured?",
    "options": {
      "A": "CloudWatch Logs with 7-year retention",
      "B": "CloudTrail with S3 storage and Glacier lifecycle",
      "C": "AWS Config with long-term storage",
      "D": "VPC Flow Logs"
    },
    "answer": [
      "B"
    ],
    "explanation": "• AWS CloudTrail records all API calls (management and data events)\n• Store logs in S3 for long-term retention\n• Use S3 Lifecycle policies to transition to Glacier for cost optimization\nCloudTrail Configuration:\n1. Enable CloudTrail in all regions\n2. Store logs in S3 bucket\n3. Enable log file validation (integrity checking)\n4. Configure S3 Lifecycle policy:\n• Transition to Glacier after 90 days\n• Retain for 7 years\nCloudTrail Features:\n• Management Events: Control plane operations (CreateInstance, DeleteBucket)\n• Data Events: Data plane operations (S3 GetObject, Lambda invocations)\n• Insights Events: Detect unusual activity\n• Multi-region: Capture events from all regions\n• Multi-account: Organization trail\n• Log file integrity: Detect tampering\nBest Practice Configuration:\nS3 Lifecycle for Cost Optimization:",
    "module": "Security",
    "multi": false,
    "why": [
      "AWS CloudTrail records all API calls (management and data events)",
      "Store logs in S3 for long-term retention.",
      "Use S3 Lifecycle policies to transition to Glacier for cost optimization.",
      "CloudTrail Configuration:.",
      "1.",
      "Enable CloudTrail in all regions.",
      "2.",
      "Store logs in S3 bucket.",
      "3.",
      "Enable log file validation (integrity checking)",
      "4.",
      "Configure S3 Lifecycle policy:.",
      "Transition to Glacier after 90 days.",
      "Retain for 7 years.",
      "CloudTrail Features:.",
      "Management Events: Control plane operations (CreateInstance, DeleteBucket)",
      "Data Events: Data plane operations (S3 GetObject, Lambda invocations)",
      "Insights Events: Detect unusual activity.",
      "Multi-region: Capture events from all regions.",
      "Multi-account: Organization trail.",
      "Log file integrity: Detect tampering.",
      "Best Practice Configuration:.",
      "S3 Lifecycle for Cost Optimization:."
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "07-4",
    "q": "A company wants to detect and respond to security threats in their AWS environment automatically. Which service provides intelligent threat detection?",
    "options": {
      "A": "AWS CloudTrail",
      "B": "Amazon GuardDuty",
      "C": "AWS Config",
      "D": "AWS Security Hub"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Amazon GuardDuty provides intelligent, continuous threat detection\n• Uses machine learning and threat intelligence\n• Analyzes multiple data sources automatically\n• No infrastructure to manage\nGuardDuty Data Sources:\n1. AWS CloudTrail Events: Unusual API calls, unauthorized deployments\n2. VPC Flow Logs: Malicious IP addresses, unusual traffic patterns\n3. DNS Logs: Domain generation algorithms, C&C communication\n4. EKS Audit Logs: Kubernetes security events\n5. S3 Data Events: Suspicious access patterns\n6. Lambda Network Activity: Suspicious connections\nGuardDuty Finding Types:\n• Reconnaissance: Port scanning, unusual API activity\n• Instance Compromise: Malware, cryptocurrency mining, backdoor\n• Account Compromise: Credential misuse, unusual behavior\n• Bucket Compromise: Suspicious S3 access\n• Persistence: IAM changes, unauthorized access\nGuardDuty vs Other Security Services:\n| Service | Purpose | Detection Type | Response |\n|---------|---------|----------------|----------|\n| GuardDuty | Threat detection | Automated ML-based | EventBridge rules |\n| Security Hub | Centralized findings | Aggregation | Manual/automated |\n| Inspector | Vulnerability scanning | Agent/agentless scans | Manual remediation |\n| Macie | Data protection | PII/sensitive data | Manual/automated |\n| Config | Compliance | Rule-based | Remediation actions |\nAutomated Response Pattern:\nGuardDuty Finding → EventBridge → Lambda → Isolate Instance/Block IP",
    "module": "Security",
    "multi": false,
    "why": [
      "Uses machine learning and threat intelligence.",
      "Analyzes multiple data sources automatically.",
      "No infrastructure to manage.",
      "GuardDuty Data Sources:.",
      "1.",
      "AWS CloudTrail Events: Unusual API calls, unauthorized deployments.",
      "2.",
      "VPC Flow Logs: Malicious IP addresses, unusual traffic patterns.",
      "3.",
      "DNS Logs: Domain generation algorithms, C&C communication.",
      "4.",
      "EKS Audit Logs: Kubernetes security events.",
      "5.",
      "S3 Data Events: Suspicious access patterns.",
      "6.",
      "Lambda Network Activity: Suspicious connections.",
      "GuardDuty Finding Types:.",
      "Reconnaissance: Port scanning, unusual API activity.",
      "Instance Compromise: Malware, cryptocurrency mining, backdoor.",
      "Account Compromise: Credential misuse, unusual behavior.",
      "Bucket Compromise: Suspicious S3 access.",
      "Persistence: IAM changes, unauthorized access.",
      "GuardDuty vs Other Security Services:.",
      "| Service | Purpose | Detection Type | Response |.",
      "|---------|---------|----------------|----------|.",
      "| GuardDuty | Threat detection | Automated ML-based | EventBridge rules |.",
      "| Security Hub | Centralized findings | Aggregation | Manual/automated |.",
      "| Inspector | Vulnerability scanning | Agent/agentless scans | Manual remediation |.",
      "| Macie | Data protection | PII/sensitive data | Manual/automated |.",
      "| Config | Compliance | Rule-based | Remediation actions |.",
      "Automated Response Pattern:.",
      "GuardDuty Finding → EventBridge → Lambda → Isolate Instance/Block IP."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "07-5",
    "q": "A company needs to ensure all S3 buckets are encrypted and not publicly accessible. Which service can continuously monitor and evaluate compliance?",
    "options": {
      "A": "AWS CloudTrail",
      "B": "AWS Config",
      "C": "Amazon GuardDuty",
      "D": "AWS Trusted Advisor"
    },
    "answer": [
      "B"
    ],
    "explanation": "• AWS Config continuously monitors and records resource configurations\n• Evaluates compliance against desired configurations\n• Provides configuration history and change tracking\n• Automated or manual remediation\nAWS Config Key Features:\nConfig Rules (Managed and Custom):\n• `s3-bucket-public-read-prohibited`\n• `s3-bucket-public-write-prohibited`\n• `s3-bucket-server-side-encryption-enabled`\n• `encrypted-volumes`\n• `required-tags`\n• `approved-amis-by-id`\nConfig Components:\n1. Configuration Recorder: Captures resource configurations\n2. Config Rules: Define desired configurations\n3. Remediation Actions: Automatic fixes via SSM Automation\n4. Conformance Packs: Packaged compliance rules\n5. Aggregators: Multi-account/region view",
    "module": "Security",
    "multi": false,
    "why": [
      "Evaluates compliance against desired configurations.",
      "Provides configuration history and change tracking.",
      "Automated or manual remediation.",
      "AWS Config Key Features:.",
      "Config Rules (Managed and Custom):.",
      "`s3-bucket-public-read-prohibited`.",
      "`s3-bucket-public-write-prohibited`.",
      "`s3-bucket-server-side-encryption-enabled`.",
      "`encrypted-volumes`.",
      "`required-tags`.",
      "`approved-amis-by-id`.",
      "Config Components:.",
      "1.",
      "Configuration Recorder: Captures resource configurations.",
      "2.",
      "Config Rules: Define desired configurations.",
      "3.",
      "Remediation Actions: Automatic fixes via SSM Automation.",
      "4.",
      "Conformance Packs: Packaged compliance rules.",
      "5.",
      "Aggregators: Multi-account/region view."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "07-6",
    "q": "An organization wants to centrally manage security findings from multiple AWS accounts and security services. Which service should be used?",
    "options": {
      "A": "Amazon GuardDuty",
      "B": "AWS Security Hub",
      "C": "AWS Config",
      "D": "Amazon Inspector"
    },
    "answer": [
      "B"
    ],
    "explanation": "• AWS Security Hub provides centralized security and compliance view\n• Aggregates findings from multiple AWS services and accounts\n• Security standards compliance (CIS, PCI-DSS, AWS Foundational Security Best Practices)\n• Automated compliance checks\nSecurity Hub Integrations:\nAWS Services:\n• Amazon GuardDuty (threat detection)\n• Amazon Inspector (vulnerability assessment)\n• Amazon Macie (data protection)\n• AWS IAM Access Analyzer (IAM policy analysis)\n• AWS Firewall Manager (firewall rule management)\n• AWS Config (compliance rules)\n• Amazon Detective (security investigation)\nThird-Party Integrations:\n• Splunk, Palo Alto Networks, Trend Micro, etc.\nSecurity Hub Features:\n1. Consolidated Dashboard: Single pane of glass\n2. Security Standards: CIS AWS Foundations, PCI-DSS, AWS Best Practices\n3. Automated Checks: Continuous compliance evaluation\n4. Finding Aggregation: From all integrated services\n5. Custom Insights: Create custom views\n6. Automated Remediation: EventBridge + Lambda/SSM\nSecurity Hub Workflow:\nUse Cases:\n• Multi-account security management\n• Compliance reporting\n• Security posture assessment\n• Automated remediation workflows",
    "module": "Security",
    "multi": false,
    "why": [
      "Aggregates findings from multiple AWS services and accounts.",
      "Security standards compliance (CIS, PCI-DSS, AWS Foundational Security Best Practices)",
      "Automated compliance checks.",
      "Security Hub Integrations:.",
      "AWS Services:.",
      "Amazon GuardDuty (threat detection)",
      "Amazon Inspector (vulnerability assessment)",
      "Amazon Macie (data protection)",
      "AWS IAM Access Analyzer (IAM policy analysis)",
      "AWS Firewall Manager (firewall rule management)",
      "AWS Config (compliance rules)",
      "Amazon Detective (security investigation)",
      "Third-Party Integrations:.",
      "Splunk, Palo Alto Networks, Trend Micro, etc.",
      "Security Hub Features:.",
      "1.",
      "Consolidated Dashboard: Single pane of glass.",
      "2.",
      "Security Standards: CIS AWS Foundations, PCI-DSS, AWS Best Practices.",
      "3.",
      "Automated Checks: Continuous compliance evaluation.",
      "4.",
      "Finding Aggregation: From all integrated services.",
      "5.",
      "Custom Insights: Create custom views.",
      "6.",
      "Automated Remediation: EventBridge + Lambda/SSM.",
      "Security Hub Workflow:.",
      "Use Cases:.",
      "Multi-account security management.",
      "Compliance reporting.",
      "Security posture assessment.",
      "Automated remediation workflows."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "07-7",
    "q": "A company wants to detect when S3 buckets contain sensitive personally identifiable information (PII). Which service should be used?",
    "options": {
      "A": "Amazon GuardDuty",
      "B": "Amazon Macie",
      "C": "AWS Config",
      "D": "Amazon Inspector"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Amazon Macie is data security service that discovers and protects sensitive data\n• Uses machine learning to identify PII, financial data, credentials\n• Automated S3 bucket inventory and classification\n• Continuous monitoring and alerts\nMacie Capabilities:\nData Discovery:\n• Credit card numbers\n• Social security numbers\n• Passport numbers\n• Driver's license numbers\n• Bank account numbers\n• Personal health information\n• Authentication credentials\nMacie Features:\n1. Automated Discovery Jobs: Scan S3 buckets\n2. Sensitive Data Types: Pre-built and custom identifiers\n3. Bucket Inventory: Complete S3 bucket assessment\n4. Policy Findings: Public access, encryption, replication issues\n5. Sensitive Data Findings: Location and type of sensitive data\n6. Integration: Security Hub, EventBridge for automation\nMacie Finding Types:\n| Category | Examples |\n|----------|----------|\n| Policy Findings | Public bucket, unencrypted, no versioning |\n| Sensitive Data Findings | PII detected, credentials found |\nAutomated Response Pattern:\nMacie vs Other Services:\n• Macie: Data privacy, PII detection in S3\n• GuardDuty: Threat detection, malicious activity\n• Inspector: Vulnerability scanning (EC2, ECR, Lambda)\n• Config: Configuration compliance",
    "module": "Security",
    "multi": false,
    "why": [
      "Uses machine learning to identify PII, financial data, credentials.",
      "Automated S3 bucket inventory and classification.",
      "Continuous monitoring and alerts.",
      "Macie Capabilities:.",
      "Data Discovery:.",
      "Credit card numbers.",
      "Social security numbers.",
      "Passport numbers.",
      "Driver's license numbers.",
      "Bank account numbers.",
      "Personal health information.",
      "Authentication credentials.",
      "Macie Features:.",
      "1.",
      "Automated Discovery Jobs: Scan S3 buckets.",
      "2.",
      "Sensitive Data Types: Pre-built and custom identifiers.",
      "3.",
      "Bucket Inventory: Complete S3 bucket assessment.",
      "4.",
      "Policy Findings: Public access, encryption, replication issues.",
      "5.",
      "Sensitive Data Findings: Location and type of sensitive data.",
      "6.",
      "Integration: Security Hub, EventBridge for automation.",
      "Macie Finding Types:.",
      "| Category | Examples |.",
      "|----------|----------|.",
      "| Policy Findings | Public bucket, unencrypted, no versioning |.",
      "| Sensitive Data Findings | PII detected, credentials found |.",
      "Automated Response Pattern:.",
      "Macie vs Other Services:.",
      "Macie: Data privacy, PII detection in S3.",
      "GuardDuty: Threat detection, malicious activity.",
      "Inspector: Vulnerability scanning (EC2, ECR, Lambda)",
      "Config: Configuration compliance."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "07-8",
    "q": "A company wants to analyze IAM policies to identify resources shared with external entities. Which service provides this capability?",
    "options": {
      "A": "AWS IAM Policy Simulator",
      "B": "IAM Access Analyzer",
      "C": "AWS Trusted Advisor",
      "D": "AWS Config"
    },
    "answer": [
      "B"
    ],
    "explanation": "• IAM Access Analyzer uses automated reasoning to analyze resource policies\n• Identifies resources shared with external principals\n• Validates IAM policies against best practices\n• Generates findings for review\nIAM Access Analyzer Features:\n1. External Access Analysis:\n• S3 buckets\n• IAM roles\n• KMS keys\n• Lambda functions\n• SQS queues\n• Secrets Manager secrets\n• SNS topics\n2. Policy Validation:\n• Check policy grammar\n• Security warnings\n• Errors and suggestions\n• Best practice recommendations\n3. Policy Generation:\n• Generate policies based on CloudTrail activity\n• Least privilege policies\n• Review and refine\nFinding Types:\nAccess Analyzer vs Other Tools:\n| Tool | Purpose |\n|------|---------|\n| Access Analyzer | External access, policy validation, policy generation |\n| Policy Simulator | Test policy effects |\n| Trusted Advisor | Best practices, cost optimization |\n| Config | Resource configuration compliance |\nUse Cases:\n• Identify unintended external access\n• Validate policies before deployment\n• Generate least-privilege policies\n• Continuous monitoring for access changes",
    "module": "Security",
    "multi": false,
    "why": [
      "Identifies resources shared with external principals.",
      "Validates IAM policies against best practices.",
      "Generates findings for review.",
      "IAM Access Analyzer Features:.",
      "1.",
      "External Access Analysis:.",
      "S3 buckets.",
      "IAM roles.",
      "KMS keys.",
      "Lambda functions.",
      "SQS queues.",
      "Secrets Manager secrets.",
      "SNS topics.",
      "2.",
      "Policy Validation:.",
      "Check policy grammar.",
      "Security warnings.",
      "Errors and suggestions.",
      "Best practice recommendations.",
      "3.",
      "Policy Generation:.",
      "Generate policies based on CloudTrail activity.",
      "Least privilege policies.",
      "Review and refine.",
      "Finding Types:.",
      "Access Analyzer vs Other Tools:.",
      "| Tool | Purpose |.",
      "|------|---------|.",
      "| Access Analyzer | External access, policy validation, policy generation |.",
      "| Policy Simulator | Test policy effects |.",
      "| Trusted Advisor | Best practices, cost optimization |.",
      "| Config | Resource configuration compliance |.",
      "Use Cases:.",
      "Identify unintended external access.",
      "Validate policies before deployment.",
      "Generate least-privilege policies.",
      "Continuous monitoring for access changes."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "07-9",
    "q": "A web application needs protection against common web exploits like SQL injection and cross-site scripting (XSS). Which AWS service provides this protection?",
    "options": {
      "A": "AWS Shield",
      "B": "AWS WAF",
      "C": "Security Groups",
      "D": "Network ACLs"
    },
    "answer": [
      "B"
    ],
    "explanation": "• AWS WAF (Web Application Firewall) protects against common web exploits\n• Filters HTTP/HTTPS requests based on rules\n• Integrates with CloudFront, ALB, API Gateway, AppSync\n• Managed rules and custom rules\nAWS WAF Capabilities:\n1. Managed Rule Groups:\n• AWS Managed Rules (Core Rule Set, Known Bad Inputs, SQL Database, etc.)\n• AWS Marketplace Rules (third-party)\n• Rate-based rules (DDoS protection)\n2. Custom Rules:\n• IP address filtering\n• Geographic blocking\n• String/regex matching\n• Size constraints\n• SQL injection protection\n• XSS protection\n3. Request Filtering:\nWAF Components:\n| Component | Description |\n|-----------|-------------|\n| Web ACL | Container for rules |\n| Rules | Match conditions + action |\n| Rule Groups | Collection of reusable rules |\n| IP Sets | List of IP addresses |\n| Regex Pattern Sets | Regex patterns |\nRate-Based Rule (DDoS Protection):\nWAF vs Shield:\n• WAF: Application-level (Layer 7) filtering, custom rules\n• Shield Standard: Network/transport (Layer 3/4) DDoS protection, automatic, free\n• Shield Advanced: Enhanced DDoS protection, cost protection, 24/7 support\nCommon WAF Rules:\n1. Block SQL injection attempts\n2. Block XSS attacks\n3. Rate limiting (prevent abuse)\n4. Geographic restrictions\n5. IP blacklist/whitelist\n6. String/pattern matching",
    "module": "Security",
    "multi": false,
    "why": [
      "Filters HTTP/HTTPS requests based on rules.",
      "Integrates with CloudFront, ALB, API Gateway, AppSync.",
      "Managed rules and custom rules.",
      "AWS WAF Capabilities:.",
      "1.",
      "Managed Rule Groups:.",
      "AWS Managed Rules (Core Rule Set, Known Bad Inputs, SQL Database, etc.)",
      "AWS Marketplace Rules (third-party)",
      "Rate-based rules (DDoS protection)",
      "2.",
      "Custom Rules:.",
      "IP address filtering.",
      "Geographic blocking.",
      "String/regex matching.",
      "Size constraints.",
      "SQL injection protection.",
      "XSS protection.",
      "3.",
      "Request Filtering:.",
      "WAF Components:.",
      "| Component | Description |.",
      "|-----------|-------------|.",
      "| Web ACL | Container for rules |.",
      "| Rules | Match conditions + action |.",
      "| Rule Groups | Collection of reusable rules |.",
      "| IP Sets | List of IP addresses |.",
      "| Regex Pattern Sets | Regex patterns |.",
      "Rate-Based Rule (DDoS Protection):.",
      "WAF vs Shield:.",
      "WAF: Application-level (Layer 7) filtering, custom rules.",
      "Shield Standard: Network/transport (Layer 3/4) DDoS protection, automatic, free.",
      "Shield Advanced: Enhanced DDoS protection, cost protection, 24/7 support.",
      "Common WAF Rules:.",
      "1.",
      "Block SQL injection attempts.",
      "2.",
      "Block XSS attacks.",
      "3.",
      "Rate limiting (prevent abuse)",
      "4.",
      "Geographic restrictions.",
      "5.",
      "IP blacklist/whitelist.",
      "6.",
      "String/pattern matching."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "07-10",
    "q": "A company wants to protect their application from DDoS attacks and ensure cost protection during large-scale attacks. Which service provides these features?",
    "options": {
      "A": "AWS WAF",
      "B": "AWS Shield Standard",
      "C": "AWS Shield Advanced",
      "D": "Security Groups"
    },
    "answer": [
      "C"
    ],
    "explanation": "• AWS Shield Advanced provides enhanced DDoS protection with cost protection\n• 24/7 access to DDoS Response Team (DRT)\n• Advanced attack detection and mitigation\n• Cost protection against scaling charges during attacks\nShield Comparison:\n| Feature | Shield Standard | Shield Advanced |\n|---------|----------------|-----------------|\n| Cost | Free | $3,000/month |\n| Protection Level | Network/Transport (L3/L4) | Network + Application (L3/L4/L7) |\n| DDoS Response Team | No | 24/7 access |\n| Cost Protection | No | Yes (scaling charges) |\n| Advanced Detection | Basic | Enhanced, real-time |\n| Health-based Detection | No | Yes |\n| Application Layer | Via WAF | Included + WAF |\nShield Advanced Features:\n1. Cost Protection:\n• Protects against scaling charges during DDoS attacks\n• Covers: EC2, ELB, CloudFront, Route 53, Global Accelerator\n2. DDoS Response Team (DRT):\n• 24/7 expert support\n• Attack analysis and mitigation\n• Custom mitigation rules\n3. Advanced Metrics:\n• Real-time attack visibility\n• Historical attack data\n• Integration with CloudWatch\n4. Protection Scope:\n• CloudFront distributions\n• Route 53 hosted zones\n• Global Accelerator accelerators\n• Elastic Load Balancers\n• EC2 Elastic IP addresses\n5. Health-Based Detection:\n• Monitors application health\n• Proactive mitigation\n• Route 53 health checks integration\nWhen to Use Shield Advanced:\n• Business-critical applications\n• High-profile websites\n• Cannot tolerate downtime\n• Need cost protection\n• Want expert DRT support\nBest Practice Architecture:",
    "module": "Security",
    "multi": false,
    "why": [
      "24/7 access to DDoS Response Team (DRT)",
      "Advanced attack detection and mitigation.",
      "Cost protection against scaling charges during attacks.",
      "Shield Comparison:.",
      "| Feature | Shield Standard | Shield Advanced |.",
      "|---------|----------------|-----------------|.",
      "| Cost | Free | $3,000/month |.",
      "| Protection Level | Network/Transport (L3/L4) | Network + Application (L3/L4/L7) |.",
      "| DDoS Response Team | No | 24/7 access |.",
      "| Cost Protection | No | Yes (scaling charges) |.",
      "| Advanced Detection | Basic | Enhanced, real-time |.",
      "| Health-based Detection | No | Yes |.",
      "| Application Layer | Via WAF | Included + WAF |.",
      "Shield Advanced Features:.",
      "1.",
      "Cost Protection:.",
      "Protects against scaling charges during DDoS attacks.",
      "Covers: EC2, ELB, CloudFront, Route 53, Global Accelerator.",
      "2.",
      "DDoS Response Team (DRT):.",
      "24/7 expert support.",
      "Attack analysis and mitigation.",
      "Custom mitigation rules.",
      "3.",
      "Advanced Metrics:.",
      "Real-time attack visibility.",
      "Historical attack data.",
      "Integration with CloudWatch.",
      "4.",
      "Protection Scope:.",
      "CloudFront distributions.",
      "Route 53 hosted zones.",
      "Global Accelerator accelerators.",
      "Elastic Load Balancers.",
      "EC2 Elastic IP addresses.",
      "5.",
      "Health-Based Detection:.",
      "Monitors application health.",
      "Proactive mitigation.",
      "Route 53 health checks integration.",
      "When to Use Shield Advanced:.",
      "Business-critical applications.",
      "High-profile websites.",
      "Cannot tolerate downtime.",
      "Need cost protection.",
      "Want expert DRT support.",
      "Best Practice Architecture:."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "07-11",
    "q": "A company needs to scan EC2 instances and container images for software vulnerabilities. Which service should be used?",
    "options": {
      "A": "Amazon GuardDuty",
      "B": "Amazon Inspector",
      "C": "AWS Security Hub",
      "D": "Amazon Macie"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Amazon Inspector provides automated vulnerability assessment\n• Scans EC2 instances, container images (ECR), Lambda functions\n• Network reachability analysis\n• Package vulnerability detection (CVEs)\nAmazon Inspector v2 Features:\n1. Continuous Scanning:\n• Automated, continuous assessment\n• No agents needed for ECR\n• SSM agent for EC2 (automatic deployment)\n2. Vulnerability Detection:\n• CVE (Common Vulnerabilities and Exposures)\n• OS packages\n• Application dependencies\n• Network exposure\n3. Resource Types:\n• EC2 Instances: OS and application vulnerabilities\n• ECR Container Images: Image vulnerabilities\n• Lambda Functions: Code and package vulnerabilities\n4. Risk Scoring:\n• Inspector score (0-10)\n• Severity: Critical, High, Medium, Low, Informational\n• Prioritization based on exploitability and CVSS\n5. Integration:\n• Security Hub (centralized findings)\n• EventBridge (automated remediation)\n• AWS Organizations (multi-account)\nInspector Finding Example:\nInspector vs Other Services:\n• Inspector: Vulnerability scanning (EC2, ECR, Lambda)\n• GuardDuty: Threat detection (malicious activity)\n• Macie: Data protection (PII in S3)\n• Config: Configuration compliance\nAutomated Remediation:",
    "module": "Security",
    "multi": false,
    "why": [
      "Scans EC2 instances, container images (ECR), Lambda functions.",
      "Network reachability analysis.",
      "Package vulnerability detection (CVEs)",
      "Amazon Inspector v2 Features:.",
      "1.",
      "Continuous Scanning:.",
      "Automated, continuous assessment.",
      "No agents needed for ECR.",
      "SSM agent for EC2 (automatic deployment)",
      "2.",
      "Vulnerability Detection:.",
      "CVE (Common Vulnerabilities and Exposures)",
      "OS packages.",
      "Application dependencies.",
      "Network exposure.",
      "3.",
      "Resource Types:.",
      "EC2 Instances: OS and application vulnerabilities.",
      "ECR Container Images: Image vulnerabilities.",
      "Lambda Functions: Code and package vulnerabilities.",
      "4.",
      "Risk Scoring:.",
      "Inspector score (0-10)",
      "Severity: Critical, High, Medium, Low, Informational.",
      "Prioritization based on exploitability and CVSS.",
      "5.",
      "Integration:.",
      "Security Hub (centralized findings)",
      "EventBridge (automated remediation)",
      "AWS Organizations (multi-account)",
      "Inspector Finding Example:.",
      "Inspector vs Other Services:.",
      "Inspector: Vulnerability scanning (EC2, ECR, Lambda)",
      "GuardDuty: Threat detection (malicious activity)",
      "Macie: Data protection (PII in S3)",
      "Config: Configuration compliance.",
      "Automated Remediation:."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "07-12",
    "q": "A company wants to enforce that all new EC2 instances must have encrypted EBS volumes. How can this be enforced across the organization?",
    "options": {
      "A": "AWS Config rule with manual remediation",
      "B": "Service Control Policy (SCP) in AWS Organizations",
      "C": "IAM policy on each user",
      "D": "AWS Lambda function to check instances"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Service Control Policies (SCPs) provide centralized, preventive controls\n• Applied at organization, OU, or account level\n• Cannot be overridden by anyone in member accounts\n• Maximum permission boundaries\nSCP Example - Enforce Encrypted EBS:\nSCPs vs Other Controls:\n| Method | Prevention | Detection | Scope | Override |\n|--------|-----------|-----------|-------|----------|\n| SCP | Yes | No | Organization/OU/Account | Cannot override |\n| IAM Policy | Yes | No | User/Role/Group | Admin can change |\n| Config Rule | No | Yes | Account | Detection only |\n| Lambda | Possible | Yes | Custom | Complex |\nSCP Best Practices:\n1. Preventive Controls:\n• Deny unencrypted resources\n• Deny public S3 buckets\n• Restrict regions\n• Prevent root user actions\n2. Example - Region Restriction:\n3. Example - Deny Public S3:\nSCP Evaluation Logic:\n1. Explicit Deny in SCP → DENY\n2. SCP allows + IAM allows → ALLOW\n3. Default → DENY\nMulti-Layer Security:\n• SCP: Preventive (organization-wide)\n• Config: Detective (compliance monitoring)\n• Automated Remediation: Corrective (fix non-compliant)",
    "module": "Security",
    "multi": false,
    "why": [
      "Applied at organization, OU, or account level.",
      "Cannot be overridden by anyone in member accounts.",
      "Maximum permission boundaries.",
      "SCP Example - Enforce Encrypted EBS:.",
      "SCPs vs Other Controls:.",
      "| Method | Prevention | Detection | Scope | Override |.",
      "|--------|-----------|-----------|-------|----------|.",
      "| SCP | Yes | No | Organization/OU/Account | Cannot override |.",
      "| IAM Policy | Yes | No | User/Role/Group | Admin can change |.",
      "| Config Rule | No | Yes | Account | Detection only |.",
      "| Lambda | Possible | Yes | Custom | Complex |.",
      "SCP Best Practices:.",
      "1.",
      "Preventive Controls:.",
      "Deny unencrypted resources.",
      "Deny public S3 buckets.",
      "Restrict regions.",
      "Prevent root user actions.",
      "2.",
      "Example - Region Restriction:.",
      "3.",
      "Example - Deny Public S3:.",
      "SCP Evaluation Logic:.",
      "1.",
      "Explicit Deny in SCP → DENY.",
      "2.",
      "SCP allows + IAM allows → ALLOW.",
      "3.",
      "Default → DENY.",
      "Multi-Layer Security:.",
      "SCP: Preventive (organization-wide)",
      "Config: Detective (compliance monitoring)",
      "Automated Remediation: Corrective (fix non-compliant)"
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "07-13",
    "q": "A company needs to ensure S3 objects cannot be deleted for 7 years and even the root account cannot override this. Which feature should be configured?",
    "options": {
      "A": "S3 Versioning with Lifecycle policies",
      "B": "S3 Object Lock in Compliance Mode",
      "C": "S3 Object Lock in Governance Mode",
      "D": "MFA Delete"
    },
    "answer": [
      "B"
    ],
    "explanation": "• S3 Object Lock in Compliance Mode enforces WORM (Write Once Read Many)\n• Cannot be overridden by anyone, including root account\n• Retention period cannot be shortened\n• Object versions cannot be deleted during retention period\nObject Lock Modes:\n| Feature | Governance Mode | Compliance Mode |\n|---------|----------------|-----------------|\n| Override | Yes (with special permission) | No (even root cannot) |\n| Delete | Can be deleted with permission | Cannot be deleted |\n| Retention Change | Can shorten with permission | Cannot shorten |\n| Use Case | Internal governance | Regulatory compliance |\nObject Lock Components:\n1. Retention Modes:\n• Compliance: Immutable, regulatory compliance\n• Governance: Flexible, internal policies\n2. Retention Period:\n• Fixed period (days/years)\n• Protect-until date\n3. Legal Hold:\n• Indefinite protection\n• On/off toggle\n• Independent of retention period\n• Requires `s3:PutObjectLegalHold` permission\nConfiguration Requirements:\n1. Versioning must be enabled (object lock requires versioning)\n2. Object Lock enabled at bucket creation (cannot enable later)\n3. Default retention settings (optional, can be per-object)\nCompliance Mode Example:\nLegal Hold Example:\nCompliance Use Cases:\n• SEC Rule 17a-4 (financial services)\n• HIPAA (healthcare)\n• FINRA (financial industry)\n• Legal documents\n• Regulatory archives\nObject Lock vs Other Protection:\n• Versioning: Can delete versions\n• MFA Delete: Adds MFA but can still delete\n• Object Lock Governance: Can override with permissions\n• Object Lock Compliance: True immutability",
    "module": "Security",
    "multi": false,
    "why": [
      "Cannot be overridden by anyone, including root account.",
      "Retention period cannot be shortened.",
      "Object versions cannot be deleted during retention period.",
      "Object Lock Modes:.",
      "| Feature | Governance Mode | Compliance Mode |.",
      "|---------|----------------|-----------------|.",
      "| Override | Yes (with special permission) | No (even root cannot) |.",
      "| Delete | Can be deleted with permission | Cannot be deleted |.",
      "| Retention Change | Can shorten with permission | Cannot shorten |.",
      "| Use Case | Internal governance | Regulatory compliance |.",
      "Object Lock Components:.",
      "1.",
      "Retention Modes:.",
      "Compliance: Immutable, regulatory compliance.",
      "Governance: Flexible, internal policies.",
      "2.",
      "Retention Period:.",
      "Fixed period (days/years)",
      "Protect-until date.",
      "3.",
      "Legal Hold:.",
      "Indefinite protection.",
      "On/off toggle.",
      "Independent of retention period.",
      "Requires `s3:PutObjectLegalHold` permission.",
      "Configuration Requirements:.",
      "1.",
      "Versioning must be enabled (object lock requires versioning)",
      "2.",
      "Object Lock enabled at bucket creation (cannot enable later)",
      "3.",
      "Default retention settings (optional, can be per-object)",
      "Compliance Mode Example:.",
      "Legal Hold Example:.",
      "Compliance Use Cases:.",
      "SEC Rule 17a-4 (financial services)",
      "HIPAA (healthcare)",
      "FINRA (financial industry)",
      "Legal documents.",
      "Regulatory archives.",
      "Object Lock vs Other Protection:.",
      "Versioning: Can delete versions.",
      "MFA Delete: Adds MFA but can still delete.",
      "Object Lock Governance: Can override with permissions.",
      "Object Lock Compliance: True immutability."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "07-14",
    "q": "A company wants to provide temporary, limited-privilege access to third-party vendors to perform specific tasks in their AWS account. What is the BEST approach?",
    "options": {
      "A": "Create IAM users with passwords",
      "B": "Share root account credentials temporarily",
      "C": "Create cross-account IAM roles with external ID",
      "D": "Create access keys and share them"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Cross-account IAM roles with External ID provide secure temporary access\n• No long-term credentials needed\n• External ID prevents confused deputy problem\n• Fine-grained permissions with session duration limits\nCross-Account Access Architecture:\n1. Trust Policy (in your account):\n2. Permissions Policy:\nExternal ID - Confused Deputy Prevention:\nThe Problem:\n• Vendor uses same role name for all customers\n• Attacker could trick vendor into accessing your resources\nThe Solution:\n• Unique External ID per customer\n• Vendor must provide correct External ID to assume role\n• Prevents unauthorized access\nImplementation Steps:\nYour Account:\n1. Create IAM role for vendor\n2. Set trust policy with vendor's account ID\n3. Add External ID condition (vendor provides this)\n4. Attach permissions policy (least privilege)\n5. Configure session duration (1-12 hours)\nVendor Account:\n1. Configure to assume role\n2. Provide External ID when assuming\n3. Receive temporary credentials\n4. Credentials auto-expire after session duration\nAssumeRole Example (vendor side):\nBenefits:\n• ✅ No long-term credentials\n• ✅ Automatic credential rotation\n• ✅ Auditable (CloudTrail)\n• ✅ Time-limited access\n• ✅ Revocable (delete role)\n• ✅ Prevents confused deputy\nBest Practices:\n1. Always use External ID\n2. Principle of least privilege\n3. Short session durations (1-2 hours)\n4. Monitor with CloudTrail\n5. Review permissions regularly\n6. Use MFA for sensitive roles",
    "module": "Security",
    "multi": false,
    "why": [
      "Cross-account IAM roles with External ID provide secure temporary access.",
      "No long-term credentials needed.",
      "External ID prevents confused deputy problem.",
      "Fine-grained permissions with session duration limits.",
      "Cross-Account Access Architecture:.",
      "1.",
      "Trust Policy (in your account):.",
      "2.",
      "Permissions Policy:.",
      "External ID - Confused Deputy Prevention:.",
      "The Problem:.",
      "Vendor uses same role name for all customers.",
      "Attacker could trick vendor into accessing your resources.",
      "The Solution:.",
      "Unique External ID per customer.",
      "Vendor must provide correct External ID to assume role.",
      "Prevents unauthorized access.",
      "Implementation Steps:.",
      "Your Account:.",
      "1.",
      "Create IAM role for vendor.",
      "2.",
      "Set trust policy with vendor's account ID.",
      "3.",
      "Add External ID condition (vendor provides this)",
      "4.",
      "Attach permissions policy (least privilege)",
      "5.",
      "Configure session duration (1-12 hours)",
      "Vendor Account:.",
      "1.",
      "Configure to assume role.",
      "2.",
      "Provide External ID when assuming.",
      "3.",
      "Receive temporary credentials.",
      "4.",
      "Credentials auto-expire after session duration.",
      "AssumeRole Example (vendor side):.",
      "Benefits:.",
      "✅ No long-term credentials.",
      "✅ Automatic credential rotation.",
      "✅ Auditable (CloudTrail)",
      "✅ Time-limited access.",
      "✅ Revocable (delete role)",
      "✅ Prevents confused deputy.",
      "Best Practices:.",
      "1.",
      "Always use External ID.",
      "2.",
      "Principle of least privilege.",
      "3.",
      "Short session durations (1-2 hours)",
      "4.",
      "Monitor with CloudTrail.",
      "5.",
      "Review permissions regularly.",
      "6.",
      "Use MFA for sensitive roles."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "07-15",
    "q": "A company needs to rotate SSL/TLS certificates for their application load balancers automatically. Which service should they use?",
    "options": {
      "A": "AWS Certificate Manager (ACM)",
      "B": "AWS Secrets Manager",
      "C": "AWS KMS",
      "D": "IAM Server Certificates"
    },
    "answer": [
      "A"
    ],
    "explanation": "• AWS Certificate Manager (ACM) provides free SSL/TLS certificates\n• Automatic renewal (no manual intervention)\n• Automatic deployment to integrated services\n• Free for public certificates\nACM Features:\n1. Automatic Renewal:\n• ACM automatically renews certificates before expiration\n• No downtime during renewal\n• Deploys renewed certificate automatically\n2. Supported Services:\n• Elastic Load Balancing (ALB, NLB, CLB)\n• Amazon CloudFront\n• Amazon API Gateway\n• AWS App Runner\n• AWS Elastic Beanstalk\n3. Certificate Types:\n• Public Certificates: Free, validated via DNS or email\n• Private Certificates: Paid, via AWS Private CA\n4. Validation Methods:\n• DNS Validation: Add CNAME record (recommended)\n• Email Validation: Email to domain contacts\nACM Certificate Request:\nDNS Validation (Route 53):\nCloudFront Requirement:\n• Certificate must be in us-east-1 region\n• Must be public certificate\n• Can use wildcard (*.example.com)\nCertificate Monitoring:\n• CloudWatch metrics for expiration\n• EventBridge events for renewal status\n• AWS Health Dashboard notifications\nBest Practices:\n1. Use DNS validation (faster, automatic)\n2. Use ACM for all supported services\n3. Monitor certificate expiration (backup)\n4. Use wildcard for subdomains\n5. Enable automatic renewal",
    "module": "Security",
    "multi": false,
    "why": [
      "Automatic renewal (no manual intervention)",
      "Automatic deployment to integrated services.",
      "Free for public certificates.",
      "ACM Features:.",
      "1.",
      "Automatic Renewal:.",
      "ACM automatically renews certificates before expiration.",
      "No downtime during renewal.",
      "Deploys renewed certificate automatically.",
      "2.",
      "Supported Services:.",
      "Elastic Load Balancing (ALB, NLB, CLB)",
      "Amazon CloudFront.",
      "Amazon API Gateway.",
      "AWS App Runner.",
      "AWS Elastic Beanstalk.",
      "3.",
      "Certificate Types:.",
      "Public Certificates: Free, validated via DNS or email.",
      "Private Certificates: Paid, via AWS Private CA.",
      "4.",
      "Validation Methods:.",
      "DNS Validation: Add CNAME record (recommended)",
      "Email Validation: Email to domain contacts.",
      "ACM Certificate Request:.",
      "DNS Validation (Route 53):.",
      "CloudFront Requirement:.",
      "Certificate must be in us-east-1 region.",
      "Must be public certificate.",
      "Can use wildcard (.example.com)",
      "Certificate Monitoring:.",
      "CloudWatch metrics for expiration.",
      "EventBridge events for renewal status.",
      "AWS Health Dashboard notifications.",
      "Best Practices:.",
      "1.",
      "Use DNS validation (faster, automatic)",
      "2.",
      "Use ACM for all supported services.",
      "3.",
      "Monitor certificate expiration (backup)",
      "4.",
      "Use wildcard for subdomains.",
      "5.",
      "Enable automatic renewal."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "07-16",
    "q": "A company wants to centrally manage firewall rules across multiple AWS accounts and VPCs. Which service should be used?",
    "options": {
      "A": "Security Groups",
      "B": "Network ACLs",
      "C": "AWS Firewall Manager",
      "D": "AWS WAF"
    },
    "answer": [
      "C"
    ],
    "explanation": "• AWS Firewall Manager centrally configures and manages firewall rules\n• Works across accounts and resources in AWS Organizations\n• Ensures consistent security policies\n• Automatic policy application to new resources\nFirewall Manager Capabilities:\n1. Supported Policies:\n• AWS WAF rules (ALB, CloudFront, API Gateway)\n• AWS Shield Advanced protections\n• VPC Security Groups\n• AWS Network Firewall rules\n• Route 53 Resolver DNS Firewall\n• Third-party firewall appliances\n2. Policy Types:\n| Policy Type | Scope | Use Case |\n|-------------|-------|----------|\n| WAF Policy | CloudFront, ALB, API Gateway | Web application protection |\n| Shield Advanced | CloudFront, ALB, EIP | DDoS protection |\n| Security Group | EC2, ENI | VPC-level firewall |\n| Network Firewall | VPC | Stateful firewall |\n| DNS Firewall | VPC | DNS query filtering |\n3. Policy Application:\n• Automatically applied to all accounts in organization\n• Applied to new resources automatically\n• Centralized compliance monitoring\nFirewall Manager Example Use Case:\nScenario: Enforce WAF rules across all ALBs in organization\nConfiguration:\nBenefits:\n1. Centralized Management: Single console for all accounts\n2. Automatic Compliance: Policies auto-applied\n3. Consistent Security: Same rules everywhere\n4. Reduced Overhead: No manual configuration per account\n5. Visibility: Compliance dashboard\nFirewall Manager vs Manual Management:\n| Aspect | Firewall Manager | Manual |\n|--------|-----------------|--------|\n| Setup | Once (centralized) | Per account/resource |\n| New Resources | Automatic | Manual |\n| Compliance | Monitored | Manual checks |\n| Updates | Centralized | Per account |\n| Accounts | Multi-account | Single account |\nCommon Policies:\n1. Common WAF Rules:\n• SQL injection protection\n• XSS protection\n• Rate limiting (prevent abuse)\n• Geographic restrictions\n• IP blacklist/whitelist\n• String/pattern matching\n2. Security Group Rules:\n• Restrict SSH (port 22) to corporate IPs\n• Deny all unauthorized outbound traffic\n3. DNS Firewall:\n• Block known malicious domains\n• Data exfiltration prevention\nPrerequisites:\n• AWS Organizations enabled\n• Firewall Manager administrator account\n• AWS Config enabled in all accounts\n• AWS Config Service-Linked Role",
    "module": "Security",
    "multi": false,
    "why": [
      "Works across accounts and resources in AWS Organizations.",
      "Ensures consistent security policies.",
      "Automatic policy application to new resources.",
      "Firewall Manager Capabilities:.",
      "1.",
      "Supported Policies:.",
      "AWS WAF rules (ALB, CloudFront, API Gateway)",
      "AWS Shield Advanced protections.",
      "VPC Security Groups.",
      "AWS Network Firewall rules.",
      "Route 53 Resolver DNS Firewall.",
      "Third-party firewall appliances.",
      "2.",
      "Policy Types:.",
      "| Policy Type | Scope | Use Case |.",
      "|-------------|-------|----------|.",
      "| WAF Policy | CloudFront, ALB, API Gateway | Web application protection |.",
      "| Shield Advanced | CloudFront, ALB, EIP | DDoS protection |.",
      "| Security Group | EC2, ENI | VPC-level firewall |.",
      "| Network Firewall | VPC | Stateful firewall |.",
      "| DNS Firewall | VPC | DNS query filtering |.",
      "3.",
      "Policy Application:.",
      "Automatically applied to all accounts in organization.",
      "Applied to new resources automatically.",
      "Centralized compliance monitoring.",
      "Firewall Manager Example Use Case:.",
      "Scenario: Enforce WAF rules across all ALBs in organization.",
      "Configuration:.",
      "Benefits:.",
      "1.",
      "Centralized Management: Single console for all accounts.",
      "2.",
      "Automatic Compliance: Policies auto-applied.",
      "3.",
      "Consistent Security: Same rules everywhere.",
      "4.",
      "Reduced Overhead: No manual configuration per account.",
      "5.",
      "Visibility: Compliance dashboard.",
      "Firewall Manager vs Manual Management:.",
      "| Aspect | Firewall Manager | Manual |.",
      "|--------|-----------------|--------|.",
      "| Setup | Once (centralized) | Per account/resource |.",
      "| New Resources | Automatic | Manual |.",
      "| Compliance | Monitored | Manual checks |.",
      "| Updates | Centralized | Per account |.",
      "| Accounts | Multi-account | Single account |.",
      "Common Policies:.",
      "1.",
      "Common WAF Rules:.",
      "SQL injection protection.",
      "XSS protection.",
      "Rate limiting (prevent abuse)",
      "Geographic restrictions.",
      "IP blacklist/whitelist.",
      "String/pattern matching.",
      "2.",
      "Security Group Rules:.",
      "Restrict SSH (port 22) to corporate IPs.",
      "Deny all unauthorized outbound traffic.",
      "3.",
      "DNS Firewall:.",
      "Block known malicious domains.",
      "Data exfiltration prevention.",
      "Prerequisites:.",
      "AWS Organizations enabled.",
      "Firewall Manager administrator account.",
      "AWS Config enabled in all accounts.",
      "AWS Config Service-Linked Role."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "07-17",
    "q": "A developer accidentally commits AWS credentials to a public GitHub repository. What immediate actions should be taken? (Choose THREE)",
    "options": {
      "A": "Change the IAM user's password",
      "B": "Deactivate and delete the exposed access keys immediately",
      "C": "Review CloudTrail logs for unauthorized activity",
      "D": "Enable MFA on the account",
      "E": "Create new access keys before deleting old ones",
      "F": "Check AWS Personal Health Dashboard"
    },
    "answer": [
      "B",
      "C",
      "E"
    ],
    "explanation": "Immediate Response Steps:\n1. Deactivate/Delete Exposed Credentials (B):\n• FIRST: Deactivate keys immediately\n• SECOND: Review activity\n• THIRD: Delete keys after creating new ones\n2. Review CloudTrail Logs (C):\n• Check for unauthorized API calls\n• Identify scope of compromise\n• Document affected resources\n3. Create New Credentials Before Deleting (E):\n• Ensure application continuity\n• Update applications with new keys\n• Then delete compromised keys\nComplete Incident Response Checklist:\nImmediate (Minutes):\n• [ ] Deactivate exposed credentials\n• [ ] Alert security team\n• [ ] Check GuardDuty for findings\nShort-term (Hours):\n• [ ] Review CloudTrail logs (7-90 days)\n• [ ] Identify unauthorized actions\n• [ ] Assess damage (new resources, data access)\n• [ ] Create new credentials\n• [ ] Update applications\n• [ ] Delete old credentials\n• [ ] Revoke temporary credentials (if role assumed)\nMedium-term (Days):\n• [ ] Review IAM policies (reduce permissions)\n• [ ] Enable MFA (not immediate priority but important)\n• [ ] Implement AWS Secrets Manager\n• [ ] Set up CloudWatch alarms for unusual activity\n• [ ] Review security groups, NACLs\n• [ ] Check for backdoors (IAM users, roles)\nLong-term (Weeks):\n• [ ] Implement AWS SSO\n• [ ] Enforce MFA organization-wide\n• [ ] Use IAM roles instead of access keys\n• [ ] Implement secrets rotation\n• [ ] Security training\n• [ ] Code repository scanning (git-secrets)\n• [ ] Implement preventive controls\nCloudTrail Investigation Queries:\nGuardDuty Findings to Check:\n• UnauthorizedAccess:IAMUser/InstanceCredentialExfiltration\n• Persistence:IAMUser/UserPermissions\n• PrivilegeEscalation:IAMUser/AdministrativePermissions\n• Impact:IAMUser/MaliciousIPCaller\nWhy Other Options are Wrong:\n• A (Password): Access keys and passwords are separate\n• D (MFA): Important but not immediate priority\n• F (PHD): Doesn't relate to credential exposure\nPrevention Strategies:\n1. Never commit credentials to version control\n2. Use IAM roles for applications\n3. Implement AWS Secrets Manager or Parameter Store\n4. Use git-secrets or git-hound to scan repositories\n5. Enable AWS GuardDuty for detection\n6. Rotate credentials regularly\n7. Use short-lived credentials (STS)\n8. Implement AWS SSO for users",
    "module": "Security",
    "multi": true,
    "why": [
      "Immediate Response Steps:.",
      "1.",
      "Deactivate/Delete Exposed Credentials (B):.",
      "FIRST: Deactivate keys immediately.",
      "SECOND: Review activity.",
      "THIRD: Delete keys after creating new ones.",
      "2.",
      "Review CloudTrail Logs (C):.",
      "Check for unauthorized API calls.",
      "Identify scope of compromise.",
      "Document affected resources.",
      "3.",
      "Create New Credentials Before Deleting (E):.",
      "Ensure application continuity.",
      "Update applications with new keys.",
      "Then delete compromised keys.",
      "Complete Incident Response Checklist:.",
      "Immediate (Minutes):.",
      "[ ] Deactivate exposed credentials.",
      "[ ] Alert security team.",
      "[ ] Check GuardDuty for findings.",
      "Short-term (Hours):.",
      "[ ] Review CloudTrail logs (7-90 days)",
      "[ ] Identify unauthorized actions.",
      "[ ] Assess damage (new resources, data access)",
      "[ ] Create new credentials.",
      "[ ] Update applications.",
      "[ ] Delete old credentials.",
      "[ ] Revoke temporary credentials (if role assumed)",
      "Medium-term (Days):.",
      "[ ] Review IAM policies (reduce permissions)",
      "[ ] Enable MFA (not immediate priority but important)",
      "[ ] Implement AWS Secrets Manager.",
      "[ ] Set up CloudWatch alarms for unusual activity.",
      "[ ] Review security groups, NACLs.",
      "[ ] Check for backdoors (IAM users, roles)",
      "Long-term (Weeks):.",
      "[ ] Implement AWS SSO.",
      "[ ] Enforce MFA organization-wide.",
      "[ ] Use IAM roles instead of access keys.",
      "[ ] Implement secrets rotation.",
      "[ ] Security training.",
      "[ ] Code repository scanning (git-secrets)",
      "[ ] Implement preventive controls.",
      "CloudTrail Investigation Queries:.",
      "GuardDuty Findings to Check:.",
      "UnauthorizedAccess:IAMUser/InstanceCredentialExfiltration.",
      "Persistence:IAMUser/UserPermissions.",
      "PrivilegeEscalation:IAMUser/AdministrativePermissions.",
      "Impact:IAMUser/MaliciousIPCaller.",
      "Why Other Options are Wrong:.",
      "A (Password): Access keys and passwords are separate.",
      "D (MFA): Important but not immediate priority.",
      "F (PHD): Doesn't relate to credential exposure.",
      "Prevention Strategies:.",
      "1.",
      "Never commit credentials to version control.",
      "2.",
      "Use IAM roles for applications.",
      "3.",
      "Implement AWS Secrets Manager or Parameter Store.",
      "4.",
      "Use git-secrets or git-hound to scan repositories.",
      "5.",
      "Enable AWS GuardDuty for detection.",
      "6.",
      "Rotate credentials regularly.",
      "7.",
      "Use short-lived credentials (STS)",
      "8.",
      "Implement AWS SSO for users."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "07-18",
    "q": "A company wants to ensure data encryption in transit between their on-premises data center and AWS. Which connectivity option provides encryption by default?",
    "options": {
      "A": "AWS Direct Connect",
      "B": "AWS Site-to-Site VPN",
      "C": "Internet Gateway",
      "D": "AWS PrivateLink"
    },
    "answer": [
      "B"
    ],
    "explanation": "• AWS Site-to-Site VPN uses IPsec to encrypt data in transit\n• Encryption is built-in and automatic\n• No additional configuration needed for encryption\nConnectivity Options Comparison:\n| Option | Encryption | Speed | Setup | Cost |\n|--------|-----------|-------|-------|------|\n| Site-to-Site VPN | Yes (IPsec) | Up to 1.25 Gbps | Minutes | Low |\n| Direct Connect | No (but can add) | 1-100 Gbps | Weeks | High |\n| DX + VPN | Yes | 1-100 Gbps | Weeks | High |\n| Internet | HTTPS only | Variable | Immediate | Very low |\nSite-to-Site VPN Features:\n1. Encryption:\n• IPsec tunnel\n• AES-256-GCM or AES-128-GCM encryption\n• SHA-2 hashing\n• DH (Diffie-Hellman) groups\n2. Redundancy:\n• AWS provides 2 VPN tunnels per connection\n• Active/passive or active/active\n• Multi-AZ availability\n3. Dynamic Routing:\n• BGP support\n• Automatic failover\n• Route propagation\nVPN Configuration:\nDirect Connect Encryption:\nOption 1: DX + Public VIF + VPN:\n• VPN over Direct Connect\n• Encrypted but complex\nOption 2: DX + VPN (Separate):\n• Direct Connect for primary (unencrypted)\n• VPN for backup (encrypted)\nOption 3: MACsec (Direct Connect):\n• Layer 2 encryption\n• 10 Gbps and 100 Gbps connections only\n• Not available for all locations\nWhen to Choose:\nSite-to-Site VPN:\n• Need immediate encryption\n• Budget-conscious\n• Bandwidth < 1 Gbps adequate\n• Quick setup required\nDirect Connect:\n• Large data transfers\n• Consistent performance needed\n• Can add VPN for encryption\n• Long-term investment\nBest Practice - Hybrid:\n• Primary: Direct Connect (performance)\n• Backup: VPN (encrypted, failover)\n• Provides both performance and encryption",
    "module": "Security",
    "multi": false,
    "why": [
      "Encryption is built-in and automatic.",
      "No additional configuration needed for encryption.",
      "Connectivity Options Comparison:.",
      "| Option | Encryption | Speed | Setup | Cost |.",
      "|--------|-----------|-------|-------|------|.",
      "| Site-to-Site VPN | Yes (IPsec) | Up to 1.25 Gbps | Minutes | Low |.",
      "| Direct Connect | No (but can add) | 1-100 Gbps | Weeks | High |.",
      "| DX + VPN | Yes | 1-100 Gbps | Weeks | High |.",
      "| Internet | HTTPS only | Variable | Immediate | Very low |.",
      "Site-to-Site VPN Features:.",
      "1.",
      "Encryption:.",
      "IPsec tunnel.",
      "AES-256-GCM or AES-128-GCM encryption.",
      "SHA-2 hashing.",
      "DH (Diffie-Hellman) groups.",
      "2.",
      "Redundancy:.",
      "AWS provides 2 VPN tunnels per connection.",
      "Active/passive or active/active.",
      "Multi-AZ availability.",
      "3.",
      "Dynamic Routing:.",
      "BGP support.",
      "Automatic failover.",
      "Route propagation.",
      "VPN Configuration:.",
      "Direct Connect Encryption:.",
      "Option 1: DX + Public VIF + VPN:.",
      "VPN over Direct Connect.",
      "Encrypted but complex.",
      "Option 2: DX + VPN (Separate):.",
      "Direct Connect for primary (unencrypted)",
      "VPN for backup (encrypted)",
      "Option 3: MACsec (Direct Connect):.",
      "Layer 2 encryption.",
      "10 Gbps and 100 Gbps connections only.",
      "Not available for all locations.",
      "When to Choose:.",
      "Site-to-Site VPN:.",
      "Need immediate encryption.",
      "Budget-conscious.",
      "Bandwidth < 1 Gbps adequate.",
      "Quick setup required.",
      "Direct Connect:.",
      "Large data transfers.",
      "Consistent performance needed.",
      "Can add VPN for encryption.",
      "Long-term investment.",
      "Best Practice - Hybrid:.",
      "Primary: Direct Connect (performance)",
      "Backup: VPN (encrypted, failover)",
      "Provides both performance and encryption."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "07-19",
    "q": "A company wants to ensure EC2 instances can only launch in approved VPCs and subnets. How can this be enforced at the organization level?",
    "options": {
      "A": "IAM policy condition checking VPC ID",
      "B": "Service Control Policy (SCP) in AWS Organizations",
      "C": "AWS Config rule",
      "D": "Security Group rules"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Service Control Policy (SCP) provides organization-wide preventive control\n• Can restrict actions based on VPC/subnet\n• Cannot be bypassed by member accounts\n• Enforced before IAM policies\nSCP Example - Restrict to Approved VPCs:\nSCP Example - Restrict to Approved Subnets:\nUseful EC2 Condition Keys:\n| Condition Key | Use Case |\n|---------------|----------|\n| `ec2:Vpc` | Restrict to specific VPCs |\n| `ec2:Subnet` | Restrict to specific subnets |\n| `ec2:InstanceType` | Limit instance types |\n| `ec2:Region` | Region restrictions |\n| `ec2:Tenancy` | Dedicated vs default |\n| `ec2:RootDeviceType` | EBS vs instance store |\nMulti-Layer Enforcement:\nLayer 1 - SCP (Preventive):\nLayer 2 - IAM Policy (Preventive):\nLayer 3 - Config (Detective):\nWhy SCP is Best:\n1. Organization-wide: Applies to all accounts\n2. Preventive: Blocks before creation\n3. Cannot override: Even admins cannot bypass\n4. Centralized: Managed from master account\n5. Inherited: Applied to OUs and child accounts\nComparison:\n• SCP: Preventive, organization-wide, cannot override\n• IAM: Preventive, account-level, admins can change\n• Config: Detective, alerts after creation\n• Security Groups: Network-level, not launch control",
    "module": "Security",
    "multi": false,
    "why": [
      "Can restrict actions based on VPC/subnet.",
      "Cannot be bypassed by member accounts.",
      "Enforced before IAM policies.",
      "SCP Example - Restrict to Approved VPCs:.",
      "SCP Example - Restrict to Approved Subnets:.",
      "Useful EC2 Condition Keys:.",
      "| Condition Key | Use Case |.",
      "|---------------|----------|.",
      "| `ec2:Vpc` | Restrict to specific VPCs |.",
      "| `ec2:Subnet` | Restrict to specific subnets |.",
      "| `ec2:InstanceType` | Limit instance types |.",
      "| `ec2:Region` | Region restrictions |.",
      "| `ec2:Tenancy` | Dedicated vs default |.",
      "| `ec2:RootDeviceType` | EBS vs instance store |.",
      "Multi-Layer Enforcement:.",
      "Layer 1 - SCP (Preventive):.",
      "Layer 2 - IAM Policy (Preventive):.",
      "Layer 3 - Config (Detective):.",
      "Why SCP is Best:.",
      "1.",
      "Organization-wide: Applies to all accounts.",
      "2.",
      "Preventive: Blocks before creation.",
      "3.",
      "Cannot override: Even admins cannot bypass.",
      "4.",
      "Centralized: Managed from master account.",
      "5.",
      "Inherited: Applied to OUs and child accounts.",
      "Comparison:.",
      "SCP: Preventive, organization-wide, cannot override.",
      "IAM: Preventive, account-level, admins can change.",
      "Config: Detective, alerts after creation.",
      "Security Groups: Network-level, not launch control."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "07-20",
    "q": "A company needs to monitor and respond to unusual API activity patterns that might indicate compromised credentials. Which service combination is MOST effective?",
    "options": {
      "A": "CloudTrail + CloudWatch Logs",
      "B": "GuardDuty + EventBridge + Lambda",
      "C": "Config + SNS",
      "D": "Inspector + Security Hub"
    },
    "answer": [
      "B"
    ],
    "explanation": "• GuardDuty uses ML to detect unusual API activity automatically\n• EventBridge routes findings to automated response\n• Lambda executes remediation actions\n• Fully automated threat detection and response\nAutomated Threat Response Architecture:\nGuardDuty Finding Example:\nEventBridge Rule (routes GuardDuty findings):\nLambda Response Function (Python example):\nCommon GuardDuty Finding Types:\n| Finding Type | Description | Response |\n|--------------|-------------|----------|\n| UnauthorizedAccess:IAMUser/MaliciousIPCaller | API calls from malicious IP | Disable credentials |\n| UnauthorizedAccess:IAMUser/InstanceCredentialExfiltration | Credentials used outside AWS | Rotate credentials |\n| PrivilegeEscalation:IAMUser/AdministrativePermissions | User gained admin permissions | Revoke permissions |\n| Persistence:IAMUser/UserPermissions | User created new access keys | Review and delete |\n| Impact:IAMUser/AnomalousBehavior | Unusual API activity | Investigate |\nComplete Response Playbook:\nDetection (GuardDuty):\n• Continuous monitoring\n• ML-based anomaly detection\n• Threat intelligence feeds\nRouting (EventBridge):\n• Filter by severity\n• Route to appropriate response\nResponse (Lambda):\n• Disable credentials\n• Isolate resources\n• Create forensic snapshots\n• Alert security team\n• Create incident ticket\nInvestigation (Manual):\n• Review CloudTrail logs\n• Analyze scope of compromise\n• Identify affected resources\n• Root cause analysis\nRemediation (Manual/Automated):\n• Rotate credentials\n• Update IAM policies\n• Remove backdoors\n• Apply security patches\n• Update security groups\nPrevention (Long-term):\n• Implement MFA\n• Use IAM roles\n• Enforce least privilege\n• Regular access reviews\n• Security training\nWhy This Combination is Best:\n1. GuardDuty: Intelligent detection (no manual rules)\n2. EventBridge: Flexible routing\n3. Lambda: Automated response (immediate action)\n4. Scalable: No infrastructure\n5. Comprehensive: Covers all AWS API activity\nAlternative (Manual):\n• CloudTrail → CloudWatch Logs → Metric Filters → Alarms → SNS\n• Requires manual pattern definition\n• Less intelligent\n• Manual response",
    "module": "Security",
    "multi": false,
    "why": [
      "GuardDuty uses ML to detect unusual API activity automatically.",
      "EventBridge routes findings to automated response.",
      "Lambda executes remediation actions.",
      "Fully automated threat detection and response.",
      "Automated Threat Response Architecture:.",
      "GuardDuty Finding Example:.",
      "EventBridge Rule (routes GuardDuty findings):.",
      "Lambda Response Function (Python example):.",
      "Common GuardDuty Finding Types:.",
      "| Finding Type | Description | Response |.",
      "|--------------|-------------|----------|.",
      "| UnauthorizedAccess:IAMUser/MaliciousIPCaller | API calls from malicious IP | Disable credentials |.",
      "| UnauthorizedAccess:IAMUser/InstanceCredentialExfiltration | Credentials used outside AWS | Rotate credentials |.",
      "| PrivilegeEscalation:IAMUser/AdministrativePermissions | User gained admin permissions | Revoke permissions |.",
      "| Persistence:IAMUser/UserPermissions | User created new access keys | Review and delete |.",
      "| Impact:IAMUser/AnomalousBehavior | Unusual API activity | Investigate |.",
      "Complete Response Playbook:.",
      "Detection (GuardDuty):.",
      "Continuous monitoring.",
      "ML-based anomaly detection.",
      "Threat intelligence feeds.",
      "Routing (EventBridge):.",
      "Filter by severity.",
      "Route to appropriate response.",
      "Response (Lambda):.",
      "Disable credentials.",
      "Isolate resources.",
      "Create forensic snapshots.",
      "Alert security team.",
      "Create incident ticket.",
      "Investigation (Manual):.",
      "Review CloudTrail logs.",
      "Analyze scope of compromise.",
      "Identify affected resources.",
      "Root cause analysis.",
      "Remediation (Manual/Automated):.",
      "Rotate credentials.",
      "Update IAM policies.",
      "Remove backdoors.",
      "Apply security patches.",
      "Update security groups.",
      "Prevention (Long-term):.",
      "Implement MFA.",
      "Use IAM roles.",
      "Enforce least privilege.",
      "Regular access reviews.",
      "Security training.",
      "Why This Combination is Best:.",
      "1.",
      "GuardDuty: Intelligent detection (no manual rules)",
      "2.",
      "EventBridge: Flexible routing.",
      "3.",
      "Lambda: Automated response (immediate action)",
      "4.",
      "Scalable: No infrastructure.",
      "5.",
      "Comprehensive: Covers all AWS API activity.",
      "Alternative (Manual):.",
      "CloudTrail → CloudWatch Logs → Metric Filters → Alarms → SNS.",
      "Requires manual pattern definition.",
      "Less intelligent.",
      "Manual response."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "07-21",
    "q": "A company needs to provide auditors with access to compliance reports and agreements for various AWS services. Which AWS service should they use?",
    "options": {
      "A": "AWS Artifact",
      "B": "AWS Audit Manager",
      "C": "AWS Config",
      "D": "AWS Security Hub"
    },
    "answer": [
      "A"
    ],
    "explanation": "• AWS Artifact provides on-demand access to AWS compliance reports and agreements\n• Used for audit, compliance, and regulatory requirements\n• Audit Manager is for automating evidence collection, not report access\n• Config is for resource compliance, not reports\n• Security Hub is for security findings, not compliance documents",
    "module": "Security",
    "multi": false,
    "why": [
      "Used for audit, compliance, and regulatory requirements.",
      "Audit Manager is for automating evidence collection, not report access.",
      "Config is for resource compliance, not reports.",
      "Security Hub is for security findings, not compliance documents."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "07-22",
    "q": "A security team wants to automate evidence collection for compliance frameworks such as PCI DSS and HIPAA. Which AWS service should they use?",
    "options": {
      "A": "AWS Audit Manager",
      "B": "AWS Artifact",
      "C": "AWS Config",
      "D": "AWS Security Hub"
    },
    "answer": [
      "A"
    ],
    "explanation": "• AWS Audit Manager automates evidence collection for audits\n• Maps AWS resources to control requirements\n• Artifact is for downloading compliance reports\n• Config is for resource compliance, not evidence collection\n• Security Hub is for security findings",
    "module": "Security",
    "multi": false,
    "why": [
      "Maps AWS resources to control requirements.",
      "Artifact is for downloading compliance reports.",
      "Config is for resource compliance, not evidence collection.",
      "Security Hub is for security findings."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "07-23",
    "q": "A company needs to manage and use dedicated hardware security modules (HSMs) for cryptographic operations in the AWS Cloud. Which service should they use?",
    "options": {
      "A": "AWS CloudHSM",
      "B": "AWS KMS",
      "C": "AWS Secrets Manager",
      "D": "Amazon Macie"
    },
    "answer": [
      "A"
    ],
    "explanation": "• AWS CloudHSM provides dedicated HSM appliances in the AWS Cloud\n• Used for single-tenant key management with FIPS 140-3 Level 3 compliance\n• KMS is managed, shared HSMs\n• Secrets Manager is for secrets, not HSM\n• Macie is for PII detection",
    "module": "Security",
    "multi": false,
    "why": [
      "Used for single-tenant key management with FIPS 140-3 Level 3 compliance.",
      "KMS is managed, shared HSMs.",
      "Secrets Manager is for secrets, not HSM.",
      "Macie is for PII detection."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "07-24",
    "q": "A security analyst needs to investigate and visualize relationships between AWS resources and suspicious activity for a security incident. Which AWS service should they use?",
    "options": {
      "A": "Amazon Detective",
      "B": "AWS Security Hub",
      "C": "Amazon GuardDuty",
      "D": "AWS Config"
    },
    "answer": [
      "A"
    ],
    "explanation": "• Amazon Detective helps analyze, investigate, and visualize security incidents\n• Integrates with GuardDuty, Security Hub, CloudTrail\n• Security Hub aggregates findings, not investigation\n• GuardDuty detects threats, not investigation\n• Config tracks resource changes, not relationships",
    "module": "Security",
    "multi": false,
    "why": [
      "Integrates with GuardDuty, Security Hub, CloudTrail.",
      "Security Hub aggregates findings, not investigation.",
      "GuardDuty detects threats, not investigation.",
      "Config tracks resource changes, not relationships."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "07-25",
    "q": "A company needs to provide Microsoft Active Directory authentication for AWS applications and resources. Which AWS service should they use?",
    "options": {
      "A": "AWS Directory Service",
      "B": "AWS IAM",
      "C": "AWS SSO",
      "D": "Amazon Cognito"
    },
    "answer": [
      "A"
    ],
    "explanation": "• AWS Directory Service provides managed Microsoft AD in AWS\n• Supports AD authentication for EC2, RDS, WorkSpaces, and more\n• IAM is for AWS-native identities\n• SSO is for SAML/OIDC-based SSO\n• Cognito is for app user authentication, not AD",
    "module": "Security",
    "multi": false,
    "why": [
      "Supports AD authentication for EC2, RDS, WorkSpaces, and more.",
      "IAM is for AWS-native identities.",
      "SSO is for SAML/OIDC-based SSO.",
      "Cognito is for app user authentication, not AD."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "08-1",
    "q": "A microservices architecture needs asynchronous communication where multiple services must process the same message independently. Which AWS service is MOST appropriate?",
    "options": {
      "A": "Amazon SQS Standard Queue",
      "B": "Amazon SNS",
      "C": "Amazon Kinesis Data Streams",
      "D": "AWS Step Functions"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Amazon SNS (Simple Notification Service) provides pub/sub messaging pattern\n• One message published → Multiple subscribers receive copy\n• Push-based delivery (proactive)\n• Perfect for fan-out scenarios\nSNS Architecture:\nSNS Features:\n• Message Filtering: Subscribers receive only relevant messages\n• Multiple Protocols: SQS, Lambda, HTTP/HTTPS, Email, SMS, Mobile Push\n• Message Attributes: Metadata for filtering\n• Fan-out: 1-to-many delivery\n• FIFO Topics: Ordered, exactly-once delivery\nSNS vs SQS:\n| Feature | SNS | SQS |\n|---------|-----|-----|\n| Pattern | Pub/Sub (1-to-many) | Queue (1-to-1) |\n| Delivery | Push | Pull |\n| Subscribers | Multiple (fan-out) | Single consumer per message |\n| Retention | No retention | Up to 14 days |\n| Use Case | Notifications, fan-out | Decoupling, buffering |",
    "module": "Application Integration",
    "multi": false,
    "why": [
      "One message published → Multiple subscribers receive copy.",
      "Push-based delivery (proactive)",
      "Perfect for fan-out scenarios.",
      "SNS Architecture:.",
      "SNS Features:.",
      "Message Filtering: Subscribers receive only relevant messages.",
      "Multiple Protocols: SQS, Lambda, HTTP/HTTPS, Email, SMS, Mobile Push.",
      "Message Attributes: Metadata for filtering.",
      "Fan-out: 1-to-many delivery.",
      "FIFO Topics: Ordered, exactly-once delivery.",
      "SNS vs SQS:.",
      "| Feature | SNS | SQS |.",
      "|---------|-----|-----|.",
      "| Pattern | Pub/Sub (1-to-many) | Queue (1-to-1) |.",
      "| Delivery | Push | Pull |.",
      "| Subscribers | Multiple (fan-out) | Single consumer per message |.",
      "| Retention | No retention | Up to 14 days |.",
      "| Use Case | Notifications, fan-out | Decoupling, buffering |."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "08-2",
    "q": "An application needs to decouple components with message buffering. Messages must be processed exactly once in strict order. Which service should be used?",
    "options": {
      "A": "Amazon SQS Standard Queue",
      "B": "Amazon SQS FIFO Queue",
      "C": "Amazon SNS",
      "D": "Amazon Kinesis Data Streams"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Amazon SQS FIFO Queue provides exactly-once processing with strict ordering\n• Messages processed in the order received\n• Content-based deduplication prevents duplicates\n• Message groups enable parallel processing\nSQS Standard vs FIFO:\n| Feature | Standard | FIFO |\n|---------|----------|------|\n| Ordering | Best-effort | Guaranteed (FIFO) |\n| Delivery | At-least-once | Exactly-once |\n| Throughput | Unlimited | 300 msg/s (3000 batched) |\n| Deduplication | No | Yes (5 min window) |\n| Use Case | High throughput | Order critical |\nFIFO Queue Features:\n1. Message Ordering:\n2. Message Groups:\n• Multiple groups for parallel processing\n• Order maintained within each group\n• Different groups can process simultaneously\n3. Content-Based Deduplication:\n• SHA-256 hash of message body\n• Automatic duplicate detection (5 minutes)\n• Or use MessageDeduplicationId\n4. High Throughput Mode:\n• 3,000 messages per second with batching\n• 9,000 TPS per group (with batching)\nFIFO Queue Naming:\n• Must end with `.fifo` suffix\n• Example: `OrderQueue.fifo`\nUse Cases:\n• Financial transactions: No duplicate charges\n• Order processing: Correct sequence\n• Command execution: Sequential operations\n• Event sourcing: Order matters\nMessage Groups Example:\nBest Practices:\n1. Use message groups for parallelism\n2. Enable content-based deduplication\n3. Set appropriate visibility timeout\n4. Use batch operations (10 messages per batch)\n5. Monitor `ApproximateAgeOfOldestMessage`",
    "module": "Application Integration",
    "multi": false,
    "why": [
      "Messages processed in the order received.",
      "Content-based deduplication prevents duplicates.",
      "Message groups enable parallel processing.",
      "SQS Standard vs FIFO:.",
      "| Feature | Standard | FIFO |.",
      "|---------|----------|------|.",
      "| Ordering | Best-effort | Guaranteed (FIFO) |.",
      "| Delivery | At-least-once | Exactly-once |.",
      "| Throughput | Unlimited | 300 msg/s (3000 batched) |.",
      "| Deduplication | No | Yes (5 min window) |.",
      "| Use Case | High throughput | Order critical |.",
      "FIFO Queue Features:.",
      "1.",
      "Message Ordering:.",
      "2.",
      "Message Groups:.",
      "Multiple groups for parallel processing.",
      "Order maintained within each group.",
      "Different groups can process simultaneously.",
      "3.",
      "Content-Based Deduplication:.",
      "SHA-256 hash of message body.",
      "Automatic duplicate detection (5 minutes)",
      "Or use MessageDeduplicationId.",
      "4.",
      "High Throughput Mode:.",
      "3,000 messages per second with batching.",
      "9,000 TPS per group (with batching)",
      "FIFO Queue Naming:.",
      "Must end with `.fifo` suffix.",
      "Example: `OrderQueue.fifo`.",
      "Use Cases:.",
      "Financial transactions: No duplicate charges.",
      "Order processing: Correct sequence.",
      "Command execution: Sequential operations.",
      "Event sourcing: Order matters.",
      "Message Groups Example:.",
      "Best Practices:.",
      "1.",
      "Use message groups for parallelism.",
      "2.",
      "Enable content-based deduplication.",
      "3.",
      "Set appropriate visibility timeout.",
      "4.",
      "Use batch operations (10 messages per batch)",
      "5.",
      "Monitor `ApproximateAgeOfOldestMessage`."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "08-3",
    "q": "A serverless application needs to process real-time streaming data from thousands of IoT devices. Each device sends data every second. Which service is MOST appropriate?",
    "options": {
      "A": "Amazon SQS",
      "B": "Amazon SNS",
      "C": "Amazon Kinesis Data Streams",
      "D": "Amazon MQ"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Amazon Kinesis Data Streams designed for real-time streaming data\n• Handles massive data ingestion from thousands of producers\n• Multiple consumers can read same data stream\n• Data retention (24 hours to 365 days)\n• Ordered records per shard\nKinesis Data Streams Architecture:\nKinesis Key Concepts:\n1. Shards:\n• Throughput unit\n• 1 MB/s write, 2 MB/s read per shard\n• 1,000 records/s write per shard\n• Ordered within shard\n2. Records:\n• Partition key (determines shard)\n• Sequence number (order within shard)\n• Data blob (up to 1 MB)\n3. Consumers:\n• Multiple consumers can read same stream\n• Enhanced fan-out (dedicated 2 MB/s per consumer)\n• Shared throughput mode (2 MB/s total)\nKinesis Features:\n| Feature | Description |\n|---------|-------------|\n| Retention | 24 hours default, up to 365 days |\n| Ordering | Per partition key/shard |\n| Replay | Can reprocess data |\n| Scaling | Add/remove shards |\n| Encryption | At rest (KMS), in transit (HTTPS) |\nCapacity Planning:\nKinesis Producer (Python):\nKinesis Consumer (Lambda):\nKinesis Family:\n| Service | Use Case |\n|---------|----------|\n| Data Streams | Custom real-time processing |\n| Data Firehose | Load to S3, Redshift, ES (easier) |\n| Data Analytics | SQL on streaming data |\n| Video Streams | Video ingestion and processing |\nKinesis vs SQS:\n| Feature | Kinesis | SQS |\n|---------|---------|-----|\n| Ordering | Per shard | FIFO queue only |\n| Multiple Consumers | Yes | No (fanout via SNS) |\n| Retention | Up to 365 days | Up to 14 days |\n| Replay | Yes | No |\n| Use Case | Streaming, analytics | Decoupling, buffering |\nWhen to Use Kinesis:\n• Real-time analytics\n• Log and event data collection\n• IoT data ingestion\n• Multiple consumers need same data\n• Need to replay data\n• Streaming ETL",
    "module": "Application Integration",
    "multi": false,
    "why": [
      "Handles massive data ingestion from thousands of producers.",
      "Multiple consumers can read same data stream.",
      "Data retention (24 hours to 365 days)",
      "Ordered records per shard.",
      "Kinesis Data Streams Architecture:.",
      "Kinesis Key Concepts:.",
      "1.",
      "Shards:.",
      "Throughput unit.",
      "1 MB/s write, 2 MB/s read per shard.",
      "1,000 records/s write per shard.",
      "Ordered within shard.",
      "2.",
      "Records:.",
      "Partition key (determines shard)",
      "Sequence number (order within shard)",
      "Data blob (up to 1 MB)",
      "3.",
      "Consumers:.",
      "Multiple consumers can read same stream.",
      "Enhanced fan-out (dedicated 2 MB/s per consumer)",
      "Shared throughput mode (2 MB/s total)",
      "Kinesis Features:.",
      "| Feature | Description |.",
      "|---------|-------------|.",
      "| Retention | 24 hours default, up to 365 days |.",
      "| Ordering | Per partition key/shard |.",
      "| Replay | Can reprocess data |.",
      "| Scaling | Add/remove shards |.",
      "| Encryption | At rest (KMS), in transit (HTTPS) |.",
      "Capacity Planning:.",
      "Kinesis Producer (Python):.",
      "Kinesis Consumer (Lambda):.",
      "Kinesis Family:.",
      "| Service | Use Case |.",
      "|---------|----------|.",
      "| Data Streams | Custom real-time processing |.",
      "| Data Firehose | Load to S3, Redshift, ES (easier) |.",
      "| Data Analytics | SQL on streaming data |.",
      "| Video Streams | Video ingestion and processing |.",
      "Kinesis vs SQS:.",
      "| Feature | Kinesis | SQS |.",
      "|---------|---------|-----|.",
      "| Ordering | Per shard | FIFO queue only |.",
      "| Multiple Consumers | Yes | No (fanout via SNS) |.",
      "| Retention | Up to 365 days | Up to 14 days |.",
      "| Replay | Yes | No |.",
      "| Use Case | Streaming, analytics | Decoupling, buffering |.",
      "When to Use Kinesis:.",
      "Real-time analytics.",
      "Log and event data collection.",
      "IoT data ingestion.",
      "Multiple consumers need same data.",
      "Need to replay data.",
      "Streaming ETL."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "08-4",
    "q": "A company wants to implement a fan-out pattern where an SNS message triggers multiple SQS queues for different services. What is this architecture called?",
    "options": {
      "A": "SQS Message Chaining",
      "B": "SNS to SQS Fan-out",
      "C": "Kinesis Fan-out",
      "D": "EventBridge Routing"
    },
    "answer": [
      "B"
    ],
    "explanation": "• SNS to SQS Fan-out is common pattern for parallel, asynchronous processing\n• Single message to SNS triggers multiple SQS queues\n• Each service consumes from its own queue\n• Decoupled, resilient architecture\nSNS-SQS Fan-out Architecture:\nBenefits:\n1. Parallel Processing:\n• Services process independently\n• No blocking between services\n2. Reliability:\n• SQS provides message persistence\n• Retries on failure\n• Dead Letter Queue for failed messages\n3. Scalability:\n• Each service scales independently\n• Add new subscribers without changes\n4. Decoupling:\n• Services don't know about each other\n• Add/remove services easily\nConfiguration:\nStep 1: Create SNS Topic:\nStep 2: Create SQS Queues:\nStep 3: Subscribe Queues to Topic:\nStep 4: Update SQS Policy (allow SNS to send):\nReal-World Example - E-commerce Order:\nMessage Filtering (each service gets relevant messages only):\nError Handling - Dead Letter Queue:\nBest Practices:\n1. Use message filtering to reduce unnecessary processing\n2. Configure Dead Letter Queues for failed messages\n3. Set appropriate visibility timeout\n4. Use batching for cost optimization\n5. Monitor queue depth (CloudWatch)\n6. Implement idempotency in consumers\nSNS-SQS vs Kinesis:\n• SNS-SQS: Different processing per service\n• Kinesis: Same data, different consumers",
    "module": "Application Integration",
    "multi": false,
    "why": [
      "Single message to SNS triggers multiple SQS queues.",
      "Each service consumes from its own queue.",
      "Decoupled, resilient architecture.",
      "SNS-SQS Fan-out Architecture:.",
      "Benefits:.",
      "1.",
      "Parallel Processing:.",
      "Services process independently.",
      "No blocking between services.",
      "2.",
      "Reliability:.",
      "SQS provides message persistence.",
      "Retries on failure.",
      "Dead Letter Queue for failed messages.",
      "3.",
      "Scalability:.",
      "Each service scales independently.",
      "Add new subscribers without changes.",
      "4.",
      "Decoupling:.",
      "Services don't know about each other.",
      "Add/remove services easily.",
      "Configuration:.",
      "Step 1: Create SNS Topic:.",
      "Step 2: Create SQS Queues:.",
      "Step 3: Subscribe Queues to Topic:.",
      "Step 4: Update SQS Policy (allow SNS to send):.",
      "Real-World Example - E-commerce Order:.",
      "Message Filtering (each service gets relevant messages only):.",
      "Error Handling - Dead Letter Queue:.",
      "Best Practices:.",
      "1.",
      "Use message filtering to reduce unnecessary processing.",
      "2.",
      "Configure Dead Letter Queues for failed messages.",
      "3.",
      "Set appropriate visibility timeout.",
      "4.",
      "Use batching for cost optimization.",
      "5.",
      "Monitor queue depth (CloudWatch)",
      "6.",
      "Implement idempotency in consumers.",
      "SNS-SQS vs Kinesis:.",
      "SNS-SQS: Different processing per service.",
      "Kinesis: Same data, different consumers."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "08-5",
    "q": "A serverless workflow needs to coordinate multiple Lambda functions with conditional logic, parallel execution, and error handling. Which service should be used?",
    "options": {
      "A": "Amazon SQS with multiple queues",
      "B": "Amazon SNS with message filtering",
      "C": "AWS Step Functions",
      "D": "Amazon EventBridge"
    },
    "answer": [
      "C"
    ],
    "explanation": "• AWS Step Functions orchestrates serverless workflows\n• Visual workflow designer\n• Built-in error handling and retries\n• Parallel execution, conditional logic, wait states\n• Integration with 200+ AWS services\nStep Functions State Machine Example:\nStep Functions State Types:\n| State Type | Purpose | Example |\n|------------|---------|---------|\n| Task | Execute work (Lambda, ECS, SNS, etc.) | Call API, process data |\n| Choice | Conditional logic (if/else) | Check inventory status |\n| Parallel | Execute branches simultaneously | Payment + Inventory + Email |\n| Wait | Delay (seconds, timestamp) | Wait for approval |\n| Pass | Pass input to output, transform | Data transformation |\n| Map | Iterate over array | Process batch items |\n| Succeed | Successful termination | Order complete |\n| Fail | Failed termination | Validation failed |\nError Handling:\n1. Retry:\n2. Catch:\nStep Functions Workflow Types:\n| Type | Duration | Execution Rate | Use Case |\n|------|----------|----------------|----------|\n| Standard | Up to 1 year | 2,000/s | Long-running, exactly-once |\n| Express | Up to 5 min | 100,000/s | High-volume, at-least-once |\nIntegration with AWS Services:\n• Lambda: Execute functions\n• ECS/Fargate: Run containers\n• DynamoDB: Read/write data\n• SNS/SQS: Send messages\n• Glue: Run ETL jobs\n• SageMaker: ML training/inference\n• Batch: Run batch jobs\nStep Functions vs Alternatives:\n| Tool | Best For |\n|------|----------|\n| Step Functions | Complex workflows, orchestration |\n| Lambda | Single tasks |\n| SQS | Queue-based processing |\n| EventBridge | Event routing |\nReal-World Use Cases:\n1. ETL Pipelines: Extract → Transform → Load\n2. Order Processing: Validate → Payment → Fulfillment\n3. Video Processing: Upload → Transcode → Thumbnail → Delivery\n4. Machine Learning: Data prep → Training → Deploy → Monitor\n5. Approval Workflows: Submit → Review → Approve/Reject → Execute\nVisual Workflow Benefits:\n• Easy to understand complex logic\n• Debug with execution history\n• See exactly where failures occur\n• Modify without code changes (drag-and-drop)\nBest Practices:\n1. Use Express Workflows for high-volume, short-duration\n2. Implement error handling at each step\n3. Use Parallel states for independent tasks\n4. Monitor with CloudWatch metrics\n5. Use input/output filtering to manage data size\n6. Implement idempotency in Lambda functions",
    "module": "Application Integration",
    "multi": false,
    "why": [
      "Visual workflow designer.",
      "Built-in error handling and retries.",
      "Parallel execution, conditional logic, wait states.",
      "Integration with 200+ AWS services.",
      "Step Functions State Machine Example:.",
      "Step Functions State Types:.",
      "| State Type | Purpose | Example |.",
      "|------------|---------|---------|.",
      "| Task | Execute work (Lambda, ECS, SNS, etc.) | Call API, process data |.",
      "| Choice | Conditional logic (if/else) | Check inventory status |.",
      "| Parallel | Execute branches simultaneously | Payment + Inventory + Email |.",
      "| Wait | Delay (seconds, timestamp) | Wait for approval |.",
      "| Pass | Pass input to output, transform | Data transformation |.",
      "| Map | Iterate over array | Process batch items |.",
      "| Succeed | Successful termination | Order complete |.",
      "| Fail | Failed termination | Validation failed |.",
      "Error Handling:.",
      "1.",
      "Retry:.",
      "2.",
      "Catch:.",
      "Step Functions Workflow Types:.",
      "| Type | Duration | Execution Rate | Use Case |.",
      "|------|----------|----------------|----------|.",
      "| Standard | Up to 1 year | 2,000/s | Long-running, exactly-once |.",
      "| Express | Up to 5 min | 100,000/s | High-volume, at-least-once |.",
      "Integration with AWS Services:.",
      "Lambda: Execute functions.",
      "ECS/Fargate: Run containers.",
      "DynamoDB: Read/write data.",
      "SNS/SQS: Send messages.",
      "Glue: Run ETL jobs.",
      "SageMaker: ML training/inference.",
      "Batch: Run batch jobs.",
      "Step Functions vs Alternatives:.",
      "| Tool | Best For |.",
      "|------|----------|.",
      "| Step Functions | Complex workflows, orchestration |.",
      "| Lambda | Single tasks |.",
      "| SQS | Queue-based processing |.",
      "| EventBridge | Event routing |.",
      "Real-World Use Cases:.",
      "1.",
      "ETL Pipelines: Extract → Transform → Load.",
      "2.",
      "Order Processing: Validate → Payment → Fulfillment.",
      "3.",
      "Video Processing: Upload → Transcode → Thumbnail → Delivery.",
      "4.",
      "Machine Learning: Data prep → Training → Deploy → Monitor.",
      "5.",
      "Approval Workflows: Submit → Review → Approve/Reject → Execute.",
      "Visual Workflow Benefits:.",
      "Easy to understand complex logic.",
      "Debug with execution history.",
      "See exactly where failures occur.",
      "Modify without code changes (drag-and-drop)",
      "Best Practices:.",
      "1.",
      "Use Express Workflows for high-volume, short-duration.",
      "2.",
      "Implement error handling at each step.",
      "3.",
      "Use Parallel states for independent tasks.",
      "4.",
      "Monitor with CloudWatch metrics.",
      "5.",
      "Use input/output filtering to manage data size.",
      "6.",
      "Implement idempotency in Lambda functions."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "08-6",
    "q": "An application needs to load streaming data into S3, Redshift, and Elasticsearch with minimal code. Which service is MOST appropriate?",
    "options": {
      "A": "Amazon Kinesis Data Streams with custom consumers",
      "B": "Amazon Kinesis Data Firehose",
      "C": "AWS Lambda triggered by Kinesis",
      "D": "Amazon SQS with Lambda consumers"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Amazon Kinesis Data Firehose is fully managed service for loading streaming data\n• No code required (vs Data Streams which needs custom consumers)\n• Automatic scaling\n• Built-in data transformation (Lambda)\n• Direct delivery to S3, Redshift, Elasticsearch, HTTP endpoints\nKinesis Data Firehose Architecture:\nFirehose Features:\n1. Automatic Scaling:\n• No capacity planning\n• Scales to gigabytes per second\n• Pay for data volume\n2. Buffering:\n• Buffer by size (1-128 MB)\n• Buffer by time (60-900 seconds)\n• Delivers when either threshold met\n3. Data Transformation:\n• Lambda function processes each record\n• Format conversion (JSON to Parquet/ORC)\n• Compression (GZIP, ZIP, Snappy)\n4. Backup:\n• Backup source data to S3\n• Failed records to separate S3 prefix\nFirehose Delivery Configuration:\nData Transformation Example (Lambda):\nDelivery Destinations:\n1. Amazon S3:\n• Object storage\n• Data lake\n• Archive\n• Partitioning by time\n2. Amazon Redshift:\n• Data warehouse\n• Analytics\n• Data via S3 COPY command\n3. Amazon Elasticsearch:\n• Search and analytics\n• Log analysis\n• Real-time dashboards\n4. Splunk:\n• Security monitoring\n• Operational intelligence\n5. HTTP Endpoints:\n• Custom destinations\n• Third-party services\nFirehose vs Data Streams:\n| Feature | Data Firehose | Data Streams |\n|---------|---------------|--------------|\n| Management | Fully managed | Manage shards |\n| Destinations | Built-in (S3, Redshift, ES) | Custom code |\n| Scaling | Automatic | Manual shard management |\n| Retention | No retention | 24h to 365 days |\n| Consumers | One (delivery) | Multiple possible |\n| Use Case | Load to destinations | Custom processing |\nCost Comparison:\nWhen to Use Firehose:\n• Load data to S3, Redshift, ES, Splunk\n• Don't need multiple consumers\n• Want fully managed solution\n• Near real-time (60+ seconds latency)\n• Simple transformations\nWhen to Use Data Streams:\n• Need real-time processing (< 1 second)\n• Multiple consumers\n• Custom processing logic\n• Need to replay data\n• Order matters within shard\nReal-World Examples:\n1. Clickstream Analytics:\n2. Log Aggregation:\n3. Data Lake:\nBest Practices:\n1. Use buffering to optimize cost (batch writes)\n2. Enable S3 backup for source records\n3. Use compression (GZIP) to reduce storage costs\n4. Convert to columnar formats (Parquet/ORC) for analytics\n5. Partition S3 data by time for better query performance\n6. Monitor delivery to CloudWatch",
    "module": "Application Integration",
    "multi": false,
    "why": [
      "No code required (vs Data Streams which needs custom consumers)",
      "Automatic scaling.",
      "Built-in data transformation (Lambda)",
      "Direct delivery to S3, Redshift, Elasticsearch, HTTP endpoints.",
      "Kinesis Data Firehose Architecture:.",
      "Firehose Features:.",
      "1.",
      "Automatic Scaling:.",
      "No capacity planning.",
      "Scales to gigabytes per second.",
      "Pay for data volume.",
      "2.",
      "Buffering:.",
      "Buffer by size (1-128 MB)",
      "Buffer by time (60-900 seconds)",
      "Delivers when either threshold met.",
      "3.",
      "Data Transformation:.",
      "Lambda function processes each record.",
      "Format conversion (JSON to Parquet/ORC)",
      "Compression (GZIP, ZIP, Snappy)",
      "4.",
      "Backup:.",
      "Backup source data to S3.",
      "Failed records to separate S3 prefix.",
      "Firehose Delivery Configuration:.",
      "Data Transformation Example (Lambda):.",
      "Delivery Destinations:.",
      "1.",
      "Amazon S3:.",
      "Object storage.",
      "Data lake.",
      "Archive.",
      "Partitioning by time.",
      "2.",
      "Amazon Redshift:.",
      "Data warehouse.",
      "Analytics.",
      "Data via S3 COPY command.",
      "3.",
      "Amazon Elasticsearch:.",
      "Search and analytics.",
      "Log analysis.",
      "Real-time dashboards.",
      "4.",
      "Splunk:.",
      "Security monitoring.",
      "Operational intelligence.",
      "5.",
      "HTTP Endpoints:.",
      "Custom destinations.",
      "Third-party services.",
      "Firehose vs Data Streams:.",
      "| Feature | Data Firehose | Data Streams |.",
      "|---------|---------------|--------------|.",
      "| Management | Fully managed | Manage shards |.",
      "| Destinations | Built-in (S3, Redshift, ES) | Custom code |.",
      "| Scaling | Automatic | Manual shard management |.",
      "| Retention | No retention | 24h to 365 days |.",
      "| Consumers | One (delivery) | Multiple possible |.",
      "| Use Case | Load to destinations | Custom processing |.",
      "Cost Comparison:.",
      "When to Use Firehose:.",
      "Load data to S3, Redshift, ES, Splunk.",
      "Don't need multiple consumers.",
      "Want fully managed solution.",
      "Near real-time (60+ seconds latency)",
      "Simple transformations.",
      "When to Use Data Streams:.",
      "Need real-time processing (< 1 second)",
      "Multiple consumers.",
      "Custom processing logic.",
      "Need to replay data.",
      "Order matters within shard.",
      "Real-World Examples:.",
      "1.",
      "Clickstream Analytics:.",
      "2.",
      "Log Aggregation:.",
      "3.",
      "Data Lake:.",
      "Best Practices:.",
      "1.",
      "Use buffering to optimize cost (batch writes)",
      "2.",
      "Enable S3 backup for source records.",
      "3.",
      "Use compression (GZIP) to reduce storage costs.",
      "4.",
      "Convert to columnar formats (Parquet/ORC) for analytics.",
      "5.",
      "Partition S3 data by time for better query performance.",
      "6.",
      "Monitor delivery to CloudWatch."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "08-7",
    "q": "A company wants to route events from multiple AWS services to different targets based on event content. Which service provides centralized event routing?",
    "options": {
      "A": "Amazon SNS",
      "B": "Amazon SQS",
      "C": "Amazon EventBridge",
      "D": "AWS Step Functions"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Amazon EventBridge is serverless event bus for application and AWS service events\n• Content-based routing using event patterns\n• 100+ AWS service integrations as event sources\n• 20+ AWS services as targets\nEventBridge Architecture:\nEventBridge Components:\n1. Events:\n2. Event Rules (pattern matching):\n3. Event Buses:\n• Default: AWS service events\n• Custom: Application events\n• Partner: SaaS provider events\n4. Targets:\n• Multiple targets per rule (up to 5)\n• Input transformation\n• Retry policies\nReal-World Examples:",
    "module": "Application Integration",
    "multi": false,
    "why": [
      "Content-based routing using event patterns.",
      "100+ AWS service integrations as event sources.",
      "20+ AWS services as targets.",
      "EventBridge Architecture:.",
      "EventBridge Components:.",
      "1.",
      "Events:.",
      "2.",
      "Event Rules (pattern matching):.",
      "3.",
      "Event Buses:.",
      "Default: AWS service events.",
      "Custom: Application events.",
      "Partner: SaaS provider events.",
      "4.",
      "Targets:.",
      "Multiple targets per rule (up to 5)",
      "Input transformation.",
      "Retry policies.",
      "Real-World Examples:."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "08-8",
    "q": "A legacy application uses Java Message Service (JMS) API. What is the BEST AWS migration path with minimal code changes?",
    "options": {
      "A": "Migrate to Amazon SQS",
      "B": "Migrate to Amazon SNS",
      "C": "Migrate to Amazon MQ",
      "D": "Rewrite using Kinesis"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Amazon MQ is managed message broker for Apache ActiveMQ and RabbitMQ\n• JMS, AMQP, MQTT, OpenWire, STOMP protocols\n• Minimal code changes for lift-and-shift\n• Compatible with existing messaging APIs\nAmazon MQ vs SQS/SNS:\n| Feature | Amazon MQ | SQS/SNS |\n|---------|-----------|---------|\n| Protocols | JMS, AMQP, MQTT, STOMP | AWS API only |\n| Migration | Minimal code changes | Requires code changes |\n| Use Case | Legacy app migration | Cloud-native apps |\n| Scaling | Limited | Highly scalable |\n| Management | Managed broker | Fully serverless |\n| Cost | Instance-based | Pay per use |\nAmazon MQ Deployment:\nAmazon MQ Features:\n1. Broker Engines:\n• ActiveMQ: JMS, OpenWire, STOMP, MQTT, WSS\n• RabbitMQ: AMQP 0-9-1, MQTT, STOMP\n2. High Availability:\n• Active/Standby deployment (Multi-AZ)\n• Automatic failover\n• Durable message storage\n3. Network Connectivity:\n• VPC deployment\n• Private connectivity\n• Security groups\n4. Authentication:\n• Simple authentication\n• LDAP integration\nMigration Strategy:\nBefore (On-Premises):\nAfter (Amazon MQ) - Minimal changes:\nWhen to Use Amazon MQ:\n• Migrating from on-premises message brokers\n• Existing applications using JMS, AMQP\n• Need protocol compatibility\n• Complex message routing\n• Message selectors and filters\nWhen to Use SQS/SNS:\n• Cloud-native applications\n• Need massive scale\n• Serverless architecture\n• Cost optimization\n• Can rewrite code\nAmazon MQ Configuration:\nCost Comparison:\nAmazon MQ:\n• Instance costs (hourly)\n• Storage costs (EBS/EFS)\n• Data transfer\nSQS/SNS:\n• Per request\n• No instance costs\n• Generally cheaper at scale\nBest Practices:\n1. Use Multi-AZ for production\n2. Configure automatic minor version upgrades\n3. Enable CloudWatch logging\n4. Use VPC endpoints for secure access\n5. Implement message selectors for filtering\n6. Monitor broker metrics",
    "module": "Application Integration",
    "multi": false,
    "why": [
      "Amazon MQ is managed message broker for Apache ActiveMQ and RabbitMQ.",
      "JMS, AMQP, MQTT, OpenWire, STOMP protocols.",
      "Minimal code changes for lift-and-shift.",
      "Compatible with existing messaging APIs.",
      "Amazon MQ vs SQS/SNS:.",
      "| Feature | Amazon MQ | SQS/SNS |.",
      "|---------|-----------|---------|.",
      "| Protocols | JMS, AMQP, MQTT, STOMP | AWS API only |.",
      "| Migration | Minimal code changes | Requires code changes |.",
      "| Use Case | Legacy app migration | Cloud-native apps |.",
      "| Scaling | Limited | Highly scalable |.",
      "| Management | Managed broker | Fully serverless |.",
      "| Cost | Instance-based | Pay per use |.",
      "Amazon MQ Deployment:.",
      "Amazon MQ Features:.",
      "1.",
      "Broker Engines:.",
      "ActiveMQ: JMS, OpenWire, STOMP, MQTT, WSS.",
      "RabbitMQ: AMQP 0-9-1, MQTT, STOMP.",
      "2.",
      "High Availability:.",
      "Active/Standby deployment (Multi-AZ)",
      "Automatic failover.",
      "Durable message storage.",
      "3.",
      "Network Connectivity:.",
      "VPC deployment.",
      "Private connectivity.",
      "Security groups.",
      "4.",
      "Authentication:.",
      "Simple authentication.",
      "LDAP integration.",
      "Migration Strategy:.",
      "Before (On-Premises):.",
      "After (Amazon MQ) - Minimal changes:.",
      "When to Use Amazon MQ:.",
      "Migrating from on-premises message brokers.",
      "Existing applications using JMS, AMQP.",
      "Need protocol compatibility.",
      "Complex message routing.",
      "Message selectors and filters.",
      "When to Use SQS/SNS:.",
      "Cloud-native applications.",
      "Need massive scale.",
      "Serverless architecture.",
      "Cost optimization.",
      "Can rewrite code.",
      "Amazon MQ Configuration:.",
      "Cost Comparison:.",
      "Amazon MQ:.",
      "Instance costs (hourly)",
      "Storage costs (EBS/EFS)",
      "Data transfer.",
      "SQS/SNS:.",
      "Per request.",
      "No instance costs.",
      "Generally cheaper at scale.",
      "Best Practices:.",
      "1.",
      "Use Multi-AZ for production.",
      "2.",
      "Configure automatic minor version upgrades.",
      "3.",
      "Enable CloudWatch logging.",
      "4.",
      "Use VPC endpoints for secure access.",
      "5.",
      "Implement message selectors for filtering.",
      "6.",
      "Monitor broker metrics."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "08-9",
    "q": "An application publishes custom metrics to CloudWatch. These metrics should trigger automated responses. What is the BEST approach?",
    "options": {
      "A": "Poll CloudWatch API periodically",
      "B": "Use CloudWatch Alarms with SNS",
      "C": "Use EventBridge rule for CloudWatch events",
      "D": "Use Lambda to check metrics"
    },
    "answer": [
      "B"
    ],
    "explanation": "• CloudWatch Alarms monitor metrics and trigger actions automatically\n• SNS integration for notifications and automated responses\n• Can trigger Auto Scaling, EC2 actions, SNS, Systems Manager\nCloudWatch Alarms Architecture:\nCloudWatch Alarm States:\n• OK: Metric within threshold\n• ALARM: Metric breached threshold\n• INSUFFICIENT_DATA: Not enough data\nAlarm Configuration:\nCustom Metrics Example:\nAlarm Actions:\n1. SNS Notifications:\n2. Auto Scaling:\n3. EC2 Actions:\n4. Systems Manager Actions:\nAutomated Response Example (Lambda):\nComposite Alarms (multiple conditions):\nAlarm Statistics:\n• Average: Mean value\n• Sum: Total\n• Minimum: Lowest value\n• Maximum: Highest value\n• SampleCount: Number of data points\n• p99: 99th percentile\nBest Practices:\n1. Use meaningful alarm names\n2. Set appropriate evaluation periods (avoid flapping)\n3. Use composite alarms for complex conditions\n4. Test alarms with CloudWatch Alarm Testing\n5. Document alarm thresholds\n6. Review and adjust thresholds regularly\nCloudWatch Alarms vs EventBridge:\n• Alarms: Metric-based thresholds\n• EventBridge: Event-driven (state changes, API calls)",
    "module": "Application Integration",
    "multi": false,
    "why": [
      "CloudWatch Alarms monitor metrics and trigger actions automatically.",
      "SNS integration for notifications and automated responses.",
      "Can trigger Auto Scaling, EC2 actions, SNS, Systems Manager.",
      "CloudWatch Alarms Architecture:.",
      "CloudWatch Alarm States:.",
      "OK: Metric within threshold.",
      "ALARM: Metric breached threshold.",
      "INSUFFICIENT_DATA: Not enough data.",
      "Alarm Configuration:.",
      "Custom Metrics Example:.",
      "Alarm Actions:.",
      "1.",
      "SNS Notifications:.",
      "2.",
      "Auto Scaling:.",
      "3.",
      "EC2 Actions:.",
      "4.",
      "Systems Manager Actions:.",
      "Automated Response Example (Lambda):.",
      "Composite Alarms (multiple conditions):.",
      "Alarm Statistics:.",
      "Average: Mean value.",
      "Sum: Total.",
      "Minimum: Lowest value.",
      "Maximum: Highest value.",
      "SampleCount: Number of data points.",
      "P99: 99th percentile.",
      "Best Practices:.",
      "1.",
      "Use meaningful alarm names.",
      "2.",
      "Set appropriate evaluation periods (avoid flapping)",
      "3.",
      "Use composite alarms for complex conditions.",
      "4.",
      "Test alarms with CloudWatch Alarm Testing.",
      "5.",
      "Document alarm thresholds.",
      "6.",
      "Review and adjust thresholds regularly.",
      "CloudWatch Alarms vs EventBridge:.",
      "Alarms: Metric-based thresholds.",
      "EventBridge: Event-driven (state changes, API calls)"
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "08-10",
    "q": "A company wants to implement API Gateway to trigger different Lambda functions based on the API path. What feature enables this?",
    "options": {
      "A": "API Gateway Stages",
      "B": "API Gateway Methods",
      "C": "API Gateway Resources with Lambda Integration",
      "D": "API Gateway Authorizers"
    },
    "answer": [
      "C"
    ],
    "explanation": "• API Gateway Resources define API paths\n• Each resource/method can integrate with different Lambda functions\n• Enables REST API routing to microservices\nAPI Gateway Lambda Integration:\nAPI Gateway Structure:\nAPI Gateway Integration Types:\n| Type | Use Case |\n|------|----------|\n| Lambda | Serverless backend |\n| HTTP | HTTP endpoints |\n| AWS Service | Direct AWS service integration |\n| Mock | Testing, return fixed response |\n| VPC Link | Private VPC resources |\nLambda Integration Configuration:\nLambda Proxy Integration (recommended):\nAPI Gateway Features:\n1. Request Validation:\n• Validate request parameters\n• Validate request body against JSON schema\n• Reject invalid requests before invoking Lambda\n2. Request/Response Transformation:\n• Transform request data\n• Map response from Lambda\n• Change content types\n3. Throttling:\n• Rate limiting (requests per second)\n• Burst capacity\n• Per-client throttling (API keys)\n4. Caching:\n• Cache responses at API Gateway\n• Reduce Lambda invocations\n• Configurable TTL\n5. CORS Support:\n• Enable cross-origin requests\n• Configure allowed origins, headers, methods\n6. Authentication/Authorization:\n• AWS IAM\n• Cognito User Pools\n• Lambda Authorizers\n• API Keys\nAPI Gateway Stages:\nStage Variables (environment-specific):\nAPI Gateway Deployment:\nBest Practices:\n1. Use Lambda proxy integration for simplicity\n2. Enable request validation\n3. Use stages for environments (dev/test/prod)\n4. Enable caching for read-heavy APIs\n5. Implement authentication/authorization\n6. Enable CloudWatch logging\n7. Use custom domain names\n8. Implement rate limiting\n9. Version your APIs\n10. Monitor with X-Ray\nAPI Gateway Pricing:\n• REST API: $3.50 per million requests\n• HTTP API: $1.00 per million requests (cheaper)\n• WebSocket API: $1.00 per million messages\n• Data transfer out\nHTTP API vs REST API:\n• HTTP API: Simpler, cheaper, faster\n• REST API: More features (request validation, caching, API keys)",
    "module": "Application Integration",
    "multi": false,
    "why": [
      "Each resource/method can integrate with different Lambda functions.",
      "Enables REST API routing to microservices.",
      "API Gateway Lambda Integration:.",
      "API Gateway Structure:.",
      "API Gateway Integration Types:.",
      "| Type | Use Case |.",
      "|------|----------|.",
      "| Lambda | Serverless backend |.",
      "| HTTP | HTTP endpoints |.",
      "| AWS Service | Direct AWS service integration |.",
      "| Mock | Testing, return fixed response |.",
      "| VPC Link | Private VPC resources |.",
      "Lambda Integration Configuration:.",
      "Lambda Proxy Integration (recommended):.",
      "API Gateway Features:.",
      "1.",
      "Request Validation:.",
      "Validate request parameters.",
      "Validate request body against JSON schema.",
      "Reject invalid requests before invoking Lambda.",
      "2.",
      "Request/Response Transformation:.",
      "Transform request data.",
      "Map response from Lambda.",
      "Change content types.",
      "3.",
      "Throttling:.",
      "Rate limiting (requests per second)",
      "Burst capacity.",
      "Per-client throttling (API keys)",
      "4.",
      "Caching:.",
      "Cache responses at API Gateway.",
      "Reduce Lambda invocations.",
      "Configurable TTL.",
      "5.",
      "CORS Support:.",
      "Enable cross-origin requests.",
      "Configure allowed origins, headers, methods.",
      "6.",
      "Authentication/Authorization:.",
      "AWS IAM.",
      "Cognito User Pools.",
      "Lambda Authorizers.",
      "API Keys.",
      "API Gateway Stages:.",
      "Stage Variables (environment-specific):.",
      "API Gateway Deployment:.",
      "Best Practices:.",
      "1.",
      "Use Lambda proxy integration for simplicity.",
      "2.",
      "Enable request validation.",
      "3.",
      "Use stages for environments (dev/test/prod)",
      "4.",
      "Enable caching for read-heavy APIs.",
      "5.",
      "Implement authentication/authorization.",
      "6.",
      "Enable CloudWatch logging.",
      "7.",
      "Use custom domain names.",
      "8.",
      "Implement rate limiting.",
      "9.",
      "Version your APIs.",
      "10.",
      "Monitor with X-Ray.",
      "API Gateway Pricing:.",
      "REST API: $3.50 per million requests.",
      "HTTP API: $1.00 per million requests (cheaper)",
      "WebSocket API: $1.00 per million messages.",
      "Data transfer out.",
      "HTTP API vs REST API:.",
      "HTTP API: Simpler, cheaper, faster.",
      "REST API: More features (request validation, caching, API keys)"
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "08-41",
    "q": "A SaaS company needs to automate the transfer of customer data from Salesforce to Amazon S3 for analytics. The solution must be fully managed and require minimal code. Which AWS service should be used?",
    "options": {
      "A": "Amazon AppFlow",
      "B": "AWS Glue",
      "C": "Amazon Kinesis Data Firehose",
      "D": "AWS DataSync"
    },
    "answer": [
      "A"
    ],
    "explanation": "• Amazon AppFlow is a fully managed integration service\n• Automates data transfer between SaaS apps (e.g., Salesforce) and AWS\n• No code required, supports scheduling and transformation\n• Glue is for ETL, not direct SaaS integration\n• Firehose is for streaming, not SaaS connectors\n• DataSync is for file transfers, not SaaS data",
    "module": "Application Integration",
    "multi": false,
    "why": [
      "Automates data transfer between SaaS apps (e.g., Salesforce) and AWS.",
      "No code required, supports scheduling and transformation.",
      "Glue is for ETL, not direct SaaS integration.",
      "Firehose is for streaming, not SaaS connectors.",
      "DataSync is for file transfers, not SaaS data."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "08-42",
    "q": "A development team is building a GraphQL API for a mobile app and wants to minimize backend management. Which AWS service should they use?",
    "options": {
      "A": "AWS AppSync",
      "B": "Amazon API Gateway",
      "C": "AWS Lambda",
      "D": "Amazon Cognito"
    },
    "answer": [
      "A"
    ],
    "explanation": "• AWS AppSync is a managed GraphQL API service\n• Handles real-time data sync, subscriptions, and offline access\n• API Gateway is for REST/HTTP APIs\n• Lambda is compute, not API management\n• Cognito is for authentication, not APIs",
    "module": "Application Integration",
    "multi": false,
    "why": [
      "Handles real-time data sync, subscriptions, and offline access.",
      "API Gateway is for REST/HTTP APIs.",
      "Lambda is compute, not API management.",
      "Cognito is for authentication, not APIs."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "08-43",
    "q": "A company needs to deploy containerized workloads to on-premises servers and manage them using AWS services. Which solution should they use?",
    "options": {
      "A": "Amazon ECS Anywhere",
      "B": "Amazon EKS Anywhere",
      "C": "AWS Outposts",
      "D": "AWS Fargate"
    },
    "answer": [
      "A"
    ],
    "explanation": "• ECS Anywhere extends ECS to on-premises servers\n• Centralized management from AWS Console\n• EKS Anywhere is for Kubernetes, not ECS\n• Outposts is for running AWS infrastructure on-premises\n• Fargate is serverless containers in AWS only",
    "module": "Application Integration",
    "multi": false,
    "why": [
      "ECS Anywhere extends ECS to on-premises servers.",
      "Centralized management from AWS Console.",
      "EKS Anywhere is for Kubernetes, not ECS.",
      "Outposts is for running AWS infrastructure on-premises.",
      "Fargate is serverless containers in AWS only."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "08-44",
    "q": "A mobile development team wants to test their app on a wide range of real devices in the cloud. Which AWS service should they use?",
    "options": {
      "A": "AWS Device Farm",
      "B": "AWS Amplify",
      "C": "Amazon Pinpoint",
      "D": "Amazon API Gateway"
    },
    "answer": [
      "A"
    ],
    "explanation": "• AWS Device Farm provides cloud-based testing on real mobile devices\n• Supports Android and iOS\n• Automates testing and provides detailed reports\n• Amplify is for app development and hosting\n• Pinpoint is for user engagement, not testing\n• API Gateway is for APIs, not device testing",
    "module": "Application Integration",
    "multi": false,
    "why": [
      "Supports Android and iOS.",
      "Automates testing and provides detailed reports.",
      "Amplify is for app development and hosting.",
      "Pinpoint is for user engagement, not testing.",
      "API Gateway is for APIs, not device testing."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "08-45",
    "q": "A marketing team wants to send targeted push notifications, emails, and SMS messages to users based on their behavior in a mobile app. Which AWS service should be used?",
    "options": {
      "A": "Amazon Pinpoint",
      "B": "Amazon SNS",
      "C": "AWS Amplify",
      "D": "Amazon SQS"
    },
    "answer": [
      "A"
    ],
    "explanation": "• Amazon Pinpoint is a multi-channel marketing and analytics service\n• Supports push, email, SMS, and in-app messaging\n• Provides segmentation, analytics, and campaign management\n• SNS is for basic notifications, not targeted campaigns\n• Amplify is for app development, not marketing\n• SQS is for queuing, not messaging users",
    "module": "Application Integration",
    "multi": false,
    "why": [
      "Supports push, email, SMS, and in-app messaging.",
      "Provides segmentation, analytics, and campaign management.",
      "SNS is for basic notifications, not targeted campaigns.",
      "Amplify is for app development, not marketing.",
      "SQS is for queuing, not messaging users."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "08-46",
    "q": "A company needs to integrate its on-premises Apache Kafka workloads with AWS analytics and storage services. Which AWS service provides a fully managed, highly available Kafka environment?",
    "options": {
      "A": "Amazon MSK",
      "B": "Amazon Kinesis Data Streams",
      "C": "Amazon SQS",
      "D": "AWS Glue Streaming"
    },
    "answer": [
      "A"
    ],
    "explanation": "• Amazon MSK (Managed Streaming for Apache Kafka) provides a fully managed Kafka service\n• Handles provisioning, patching, and scaling\n• Integrates with Kinesis, Lambda, S3, Redshift\n• Kinesis is a separate streaming service, not Kafka-compatible\n• SQS is for message queuing, not streaming\n• Glue Streaming is for ETL, not Kafka management",
    "module": "Application Integration",
    "multi": false,
    "why": [
      "Handles provisioning, patching, and scaling.",
      "Integrates with Kinesis, Lambda, S3, Redshift.",
      "Kinesis is a separate streaming service, not Kafka-compatible.",
      "SQS is for message queuing, not streaming.",
      "Glue Streaming is for ETL, not Kafka management."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "09-1",
    "q": "A company wants to monitor the memory utilization of its EC2 instances and trigger an alarm when memory usage exceeds 80%. Which combination of actions should the solutions architect take?",
    "options": {
      "A": "Enable detailed monitoring on EC2 instances and create a CloudWatch alarm on the default memory metric",
      "B": "Install the CloudWatch Agent on EC2 instances, configure it to send memory metrics, and create a CloudWatch alarm",
      "C": "Use AWS Systems Manager Session Manager to view memory metrics and manually create alerts",
      "D": "Enable CloudTrail logging and use CloudWatch Logs Insights to query memory usage"
    },
    "answer": [
      "B"
    ],
    "explanation": "• EC2 instances do NOT send memory metrics by default\n• The CloudWatch Agent must be installed to collect memory metrics\n• Once the agent sends metrics to CloudWatch, you can create alarms\n• Option A is incorrect because memory is not a default metric\n• Option C doesn't provide automated alerting\n• Option D is for auditing API calls, not performance metrics",
    "module": "Monitoring",
    "multi": false,
    "why": [
      "EC2 instances do NOT send memory metrics by default.",
      "The CloudWatch Agent must be installed to collect memory metrics.",
      "Once the agent sends metrics to CloudWatch, you can create alarms."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Is incorrect because memory is not a default metric."
      },
      {
        "l": [
          "C"
        ],
        "t": "Doesn't provide automated alerting."
      },
      {
        "l": [
          "D"
        ],
        "t": "Is for auditing API calls, not performance metrics."
      }
    ],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "09-2",
    "q": "A security team needs to identify which IAM user terminated a critical EC2 instance last week. Which AWS service should they use?",
    "options": {
      "A": "Amazon CloudWatch Logs",
      "B": "AWS Config",
      "C": "AWS CloudTrail",
      "D": "AWS Systems Manager"
    },
    "answer": [
      "C"
    ],
    "explanation": "• CloudTrail records API calls including WHO made them\n• It tracks management events like TerminateInstances\n• CloudTrail logs include user identity, timestamp, and action\n• Option A (CloudWatch Logs) monitors application logs, not API calls\n• Option B (Config) tracks resource configuration, not who made changes\n• Option D (Systems Manager) is for operational management",
    "module": "Monitoring",
    "multi": false,
    "why": [
      "CloudTrail records API calls including WHO made them.",
      "It tracks management events like TerminateInstances.",
      "CloudTrail logs include user identity, timestamp, and action.",
      "Option A (CloudWatch Logs) monitors application logs, not API calls.",
      "Option B (Config) tracks resource configuration, not who made changes.",
      "Option D (Systems Manager) is for operational management."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "09-3",
    "q": "A company needs to ensure all S3 buckets have versioning enabled and receive automatic notifications when this requirement is violated. Which AWS service should be used?",
    "options": {
      "A": "AWS CloudTrail with CloudWatch Logs",
      "B": "Amazon CloudWatch with custom metrics",
      "C": "AWS Config with AWS Managed Rules",
      "D": "AWS Systems Manager State Manager"
    },
    "answer": [
      "C"
    ],
    "explanation": "• AWS Config evaluates resource configurations against rules\n• Managed rule `s3-bucket-versioning-enabled` checks versioning\n• Config can send SNS notifications when non-compliant\n• CloudTrail tracks who made changes but doesn't evaluate compliance\n• CloudWatch monitors performance metrics, not configuration compliance\n• Systems Manager State Manager is for EC2 instance configuration",
    "module": "Monitoring",
    "multi": false,
    "why": [
      "AWS Config evaluates resource configurations against rules.",
      "Managed rule `s3-bucket-versioning-enabled` checks versioning.",
      "Config can send SNS notifications when non-compliant.",
      "CloudTrail tracks who made changes but doesn't evaluate compliance.",
      "CloudWatch monitors performance metrics, not configuration compliance.",
      "Systems Manager State Manager is for EC2 instance configuration."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "09-4",
    "q": "A solutions architect needs to access EC2 instances for troubleshooting without opening port 22 or managing SSH keys. Which AWS service provides this capability?",
    "options": {
      "A": "AWS CloudShell",
      "B": "AWS Systems Manager Session Manager",
      "C": "Amazon EC2 Instance Connect",
      "D": "AWS Direct Connect"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Session Manager provides secure shell access without SSH keys or open ports\n• Uses IAM permissions for access control\n• Session logs can be sent to S3 or CloudWatch Logs\n• EC2 Instance Connect still requires port 22 to be open\n• CloudShell is for running AWS CLI commands, not accessing instances\n• Direct Connect is for network connectivity",
    "module": "Monitoring",
    "multi": false,
    "why": [
      "Session Manager provides secure shell access without SSH keys or open ports.",
      "Uses IAM permissions for access control.",
      "Session logs can be sent to S3 or CloudWatch Logs.",
      "EC2 Instance Connect still requires port 22 to be open.",
      "CloudShell is for running AWS CLI commands, not accessing instances.",
      "Direct Connect is for network connectivity."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "09-5",
    "q": "A company wants to automatically patch all EC2 instances in their fleet during a scheduled maintenance window. Which AWS service should they use?",
    "options": {
      "A": "AWS CloudFormation with custom scripts",
      "B": "AWS Systems Manager Patch Manager",
      "C": "Amazon EventBridge with Lambda",
      "D": "AWS Config with remediation actions"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Patch Manager automates OS and application patching\n• Maintenance windows define when to patch\n• Patch baselines specify which patches to install\n• CloudFormation is for infrastructure as code, not patching\n• EventBridge could trigger patching but isn't purpose-built\n• Config evaluates compliance but doesn't patch",
    "module": "Monitoring",
    "multi": false,
    "why": [
      "Patch Manager automates OS and application patching.",
      "Maintenance windows define when to patch.",
      "Patch baselines specify which patches to install.",
      "CloudFormation is for infrastructure as code, not patching.",
      "EventBridge could trigger patching but isn't purpose-built.",
      "Config evaluates compliance but doesn't patch."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "09-6",
    "q": "An application writes log data to CloudWatch Logs. The operations team needs to be alerted when the word \"ERROR\" appears more than 10 times in 5 minutes. How should this be configured?",
    "options": {
      "A": "Use CloudWatch Logs Insights to query for errors and manually check",
      "B": "Create a metric filter to count \"ERROR\" occurrences, then create an alarm on that metric",
      "C": "Export logs to S3 and use Athena to query for errors",
      "D": "Use CloudTrail to track error events and create SNS notifications"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Metric filters extract metrics from log data\n• Filter pattern can count occurrences of \"ERROR\"\n• CloudWatch alarm can trigger on the custom metric\n• This provides automated, real-time alerting\n• Option A requires manual intervention\n• Option C adds unnecessary complexity and isn't real-time\n• CloudTrail is for API calls, not application logs",
    "module": "Monitoring",
    "multi": false,
    "why": [
      "Metric filters extract metrics from log data.",
      "Filter pattern can count occurrences of \"ERROR\"",
      "CloudWatch alarm can trigger on the custom metric.",
      "This provides automated, real-time alerting.",
      "CloudTrail is for API calls, not application logs."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Requires manual intervention."
      },
      {
        "l": [
          "C"
        ],
        "t": "Adds unnecessary complexity and isn't real-time."
      }
    ],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "09-7",
    "q": "A company needs to track all configuration changes to security groups across multiple AWS accounts and regions. What is the MOST efficient solution?",
    "options": {
      "A": "Enable CloudTrail in each account and region",
      "B": "Create Lambda functions to monitor security group changes",
      "C": "Use AWS Config with a Config Aggregator",
      "D": "Use CloudWatch Events in each region"
    },
    "answer": [
      "C"
    ],
    "explanation": "• AWS Config records resource configuration changes\n• Config Aggregator provides centralized view across accounts and regions\n• Tracks configuration history and relationships\n• CloudTrail tracks who made changes but doesn't aggregate configurations\n• Lambda would require custom development and maintenance\n• CloudWatch Events could detect changes but doesn't provide historical tracking",
    "module": "Monitoring",
    "multi": false,
    "why": [
      "AWS Config records resource configuration changes.",
      "Config Aggregator provides centralized view across accounts and regions.",
      "Tracks configuration history and relationships.",
      "CloudTrail tracks who made changes but doesn't aggregate configurations.",
      "Lambda would require custom development and maintenance.",
      "CloudWatch Events could detect changes but doesn't provide historical tracking."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "09-8",
    "q": "A solutions architect needs to run a script on all EC2 instances fleet-wide without SSH access. The script should install security updates. Which service provides this capability?",
    "options": {
      "A": "AWS Systems Manager Run Command",
      "B": "AWS Lambda with EC2 API",
      "C": "Amazon CloudWatch Events",
      "D": "AWS Config Remediation"
    },
    "answer": [
      "A"
    ],
    "explanation": "• Run Command executes commands on managed instances remotely\n• No SSH required, uses IAM permissions\n• Provides rate control and error handling\n• Command history recorded in CloudTrail\n• Lambda could invoke Run Command but isn't the direct solution\n• CloudWatch Events can trigger Run Command but isn't the execution service\n• Config Remediation uses SSM Automation Documents",
    "module": "Monitoring",
    "multi": false,
    "why": [
      "Run Command executes commands on managed instances remotely.",
      "No SSH required, uses IAM permissions.",
      "Provides rate control and error handling.",
      "Command history recorded in CloudTrail.",
      "Lambda could invoke Run Command but isn't the direct solution.",
      "CloudWatch Events can trigger Run Command but isn't the execution service.",
      "Config Remediation uses SSM Automation Documents."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "09-9",
    "q": "An organization wants to detect unusual API activity, such as a sudden spike in EC2 instance creation. Which CloudTrail feature should be enabled?",
    "options": {
      "A": "CloudTrail Data Events",
      "B": "CloudTrail Management Events",
      "C": "CloudTrail Insights Events",
      "D": "CloudTrail Multi-Region Trails"
    },
    "answer": [
      "C"
    ],
    "explanation": "• CloudTrail Insights uses machine learning to detect unusual activity\n• Identifies anomalies like spikes in resource provisioning or IAM actions\n• Management Events track API calls but don't detect anomalies\n• Data Events track high-volume operations (S3 objects, Lambda invocations)\n• Multi-Region Trails collect logs but don't analyze patterns",
    "module": "Monitoring",
    "multi": false,
    "why": [
      "Identifies anomalies like spikes in resource provisioning or IAM actions.",
      "Management Events track API calls but don't detect anomalies.",
      "Data Events track high-volume operations (S3 objects, Lambda invocations)",
      "Multi-Region Trails collect logs but don't analyze patterns."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "09-10",
    "q": "A company needs to store CloudWatch Logs for 10 years to meet compliance requirements. What is the MOST cost-effective approach?",
    "options": {
      "A": "Keep logs in CloudWatch Logs with 10-year retention",
      "B": "Export logs to S3, then transition to S3 Glacier Deep Archive",
      "C": "Export logs to S3, then use S3 Intelligent-Tiering",
      "D": "Stream logs to Kinesis Data Firehose and store in Redshift"
    },
    "answer": [
      "B"
    ],
    "explanation": "• CloudWatch Logs retention is expensive for long-term storage\n• Export to S3 for cost-effective long-term storage\n• S3 Glacier Deep Archive is cheapest for archival ($0.00099 per GB/month)\n• S3 Intelligent-Tiering is more expensive than Glacier Deep Archive\n• Redshift is for analytics, not cost-effective archival",
    "module": "Monitoring",
    "multi": false,
    "why": [
      "CloudWatch Logs retention is expensive for long-term storage.",
      "Export to S3 for cost-effective long-term storage.",
      "S3 Glacier Deep Archive is cheapest for archival ($0.00099 per GB/month)",
      "S3 Intelligent-Tiering is more expensive than Glacier Deep Archive.",
      "Redshift is for analytics, not cost-effective archival."
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "09-11",
    "q": "A development team needs to query application logs to troubleshoot issues. The logs are stored in CloudWatch Logs. Which feature should they use for ad-hoc log analysis?",
    "options": {
      "A": "CloudWatch Metrics",
      "B": "CloudWatch Logs Insights",
      "C": "CloudWatch Dashboards",
      "D": "CloudWatch Alarms"
    },
    "answer": [
      "B"
    ],
    "explanation": "• CloudWatch Logs Insights provides interactive log analytics\n• Purpose-built query language for searching and analyzing logs\n• Can find errors, count events, calculate percentiles\n• Metrics are for numerical performance data\n• Dashboards visualize but don't query\n• Alarms trigger on thresholds",
    "module": "Monitoring",
    "multi": false,
    "why": [
      "Purpose-built query language for searching and analyzing logs.",
      "Can find errors, count events, calculate percentiles.",
      "Metrics are for numerical performance data.",
      "Dashboards visualize but don't query.",
      "Alarms trigger on thresholds."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "09-12",
    "q": "A company wants to automatically remediate non-compliant resources. For example, when an S3 bucket is created without encryption, it should be automatically encrypted. Which solution accomplishes this?",
    "options": {
      "A": "AWS Config Rules with automatic remediation using SSM Automation Documents",
      "B": "CloudWatch Events with Lambda functions",
      "C": "AWS CloudTrail with SNS notifications",
      "D": "Systems Manager State Manager"
    },
    "answer": [
      "A"
    ],
    "explanation": "• Config Rules evaluate compliance\n• Automatic remediation uses SSM Automation Documents\n• Can trigger remediation when resources become non-compliant\n• CloudWatch Events could work but Config is purpose-built for compliance\n• CloudTrail only tracks changes, doesn't remediate\n• State Manager maintains EC2 configuration, not S3",
    "module": "Monitoring",
    "multi": false,
    "why": [
      "Config Rules evaluate compliance.",
      "Automatic remediation uses SSM Automation Documents.",
      "Can trigger remediation when resources become non-compliant.",
      "CloudWatch Events could work but Config is purpose-built for compliance.",
      "CloudTrail only tracks changes, doesn't remediate.",
      "State Manager maintains EC2 configuration, not S3."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "09-13",
    "q": "A solutions architect needs to store sensitive configuration data like database passwords that can be accessed by EC2 instances and Lambda functions. The solution must support encryption and version history. Which service should be used?",
    "options": {
      "A": "AWS Secrets Manager",
      "B": "AWS Systems Manager Parameter Store",
      "C": "Amazon S3 with versioning",
      "D": "AWS Config"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Parameter Store securely stores configuration data and secrets\n• Supports encryption with KMS\n• Maintains version history\n• Integrates with EC2, Lambda, CloudFormation\n• Secrets Manager is also valid but more expensive (includes auto-rotation)\n• For exam context, Parameter Store is part of Systems Manager\n• S3 isn't designed for configuration management\n• Config is for compliance tracking",
    "module": "Monitoring",
    "multi": false,
    "why": [
      "Parameter Store securely stores configuration data and secrets.",
      "Supports encryption with KMS.",
      "Maintains version history.",
      "Integrates with EC2, Lambda, CloudFormation.",
      "Secrets Manager is also valid but more expensive (includes auto-rotation)",
      "For exam context, Parameter Store is part of Systems Manager.",
      "S3 isn't designed for configuration management.",
      "Config is for compliance tracking."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "09-14",
    "q": "A company has a multi-region application and needs to create a unified dashboard showing CloudWatch metrics from all regions. Is this possible?",
    "options": {
      "A": "No, CloudWatch dashboards are region-specific only",
      "B": "Yes, CloudWatch dashboards support cross-region metrics",
      "C": "Yes, but only with CloudWatch Logs, not metrics",
      "D": "Yes, but requires CloudWatch Events to aggregate data"
    },
    "answer": [
      "B"
    ],
    "explanation": "• CloudWatch dashboards support cross-region and cross-account views\n• Can add graphs from multiple regions to single dashboard\n• Global view of distributed applications\n• No additional aggregation service required",
    "module": "Monitoring",
    "multi": false,
    "why": [
      "CloudWatch dashboards support cross-region and cross-account views.",
      "Can add graphs from multiple regions to single dashboard.",
      "Global view of distributed applications.",
      "No additional aggregation service required."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "09-15",
    "q": "An operations team needs to collect metadata about all EC2 instances including installed applications, OS details, and network configuration. Which Systems Manager feature should they use?",
    "options": {
      "A": "Systems Manager Session Manager",
      "B": "Systems Manager Inventory",
      "C": "Systems Manager Patch Manager",
      "D": "Systems Manager Run Command"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Systems Manager Inventory collects metadata from managed instances\n• Gathers information about OS, applications, network config\n• Can query and visualize with Inventory dashboard\n• Session Manager is for shell access\n• Patch Manager is for patching\n• Run Command executes commands",
    "module": "Monitoring",
    "multi": false,
    "why": [
      "Gathers information about OS, applications, network config.",
      "Can query and visualize with Inventory dashboard.",
      "Session Manager is for shell access.",
      "Patch Manager is for patching.",
      "Run Command executes commands."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "09-16",
    "q": "A company needs to ensure CloudTrail logs haven't been tampered with for compliance audits. Which feature should be enabled?",
    "options": {
      "A": "CloudTrail Multi-Region Trails",
      "B": "CloudTrail Log File Integrity Validation",
      "C": "CloudTrail Insights",
      "D": "CloudTrail Data Events"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Log File Integrity Validation uses digital signatures\n• Ensures logs haven't been modified after delivery\n• Required for compliance and forensic investigations\n• Multi-Region Trails enable logging across regions\n• Insights detect unusual activity\n• Data Events track resource operations",
    "module": "Monitoring",
    "multi": false,
    "why": [
      "Log File Integrity Validation uses digital signatures.",
      "Ensures logs haven't been modified after delivery.",
      "Required for compliance and forensic investigations.",
      "Multi-Region Trails enable logging across regions.",
      "Insights detect unusual activity.",
      "Data Events track resource operations."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "09-17",
    "q": "A solutions architect needs to process CloudWatch Logs in real-time and send filtered data to an analytics application. Which solution should be used?",
    "options": {
      "A": "Export logs to S3 and use Athena",
      "B": "Use CloudWatch Logs Subscriptions with Kinesis Data Streams",
      "C": "Use CloudWatch Logs Insights with scheduled queries",
      "D": "Export logs to S3 and use Lambda"
    },
    "answer": [
      "B"
    ],
    "explanation": "• CloudWatch Logs Subscriptions enable real-time processing\n• Can send to Kinesis Data Streams for real-time analytics\n• Also supports Kinesis Data Firehose and Lambda\n• S3 export is not real-time (batch process)\n• Logs Insights is for ad-hoc queries, not streaming",
    "module": "Monitoring",
    "multi": false,
    "why": [
      "CloudWatch Logs Subscriptions enable real-time processing.",
      "Can send to Kinesis Data Streams for real-time analytics.",
      "Also supports Kinesis Data Firehose and Lambda.",
      "S3 export is not real-time (batch process)",
      "Logs Insights is for ad-hoc queries, not streaming."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "09-18",
    "q": "A company wants to track when a specific IAM policy was attached to a role and view the complete configuration history. Which service provides this capability?",
    "options": {
      "A": "AWS CloudTrail only",
      "B": "AWS Config only",
      "C": "Both CloudTrail and Config",
      "D": "IAM Access Analyzer"
    },
    "answer": [
      "C"
    ],
    "explanation": "• CloudTrail shows WHO attached the policy and WHEN (API call details)\n• Config shows configuration history and timeline of changes\n• Both services complement each other for complete visibility\n• CloudTrail: \"Who did what, when\"\n• Config: \"What does it look like now and over time\"\n• IAM Access Analyzer analyzes resource policies for external access",
    "module": "Monitoring",
    "multi": false,
    "why": [
      "CloudTrail shows WHO attached the policy and WHEN (API call details)",
      "Config shows configuration history and timeline of changes.",
      "Both services complement each other for complete visibility.",
      "CloudTrail: \"Who did what, when\"",
      "Config: \"What does it look like now and over time\"",
      "IAM Access Analyzer analyzes resource policies for external access."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "09-19",
    "q": "An application needs to maintain a desired state on EC2 instances, ensuring specific software is always installed and running. Which Systems Manager feature should be used?",
    "options": {
      "A": "Systems Manager Run Command",
      "B": "Systems Manager State Manager",
      "C": "Systems Manager Automation",
      "D": "Systems Manager Patch Manager"
    },
    "answer": [
      "B"
    ],
    "explanation": "• State Manager maintains desired state configuration\n• Creates associations between documents and instances\n• Continuously enforces configuration\n• Run Command executes one-time commands\n• Automation runs workflows\n• Patch Manager handles patching",
    "module": "Monitoring",
    "multi": false,
    "why": [
      "State Manager maintains desired state configuration.",
      "Creates associations between documents and instances.",
      "Continuously enforces configuration.",
      "Run Command executes one-time commands.",
      "Automation runs workflows.",
      "Patch Manager handles patching."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "09-20",
    "q": "A company needs to query 5 years of CloudTrail logs to investigate security incidents. What is the MOST efficient solution?",
    "options": {
      "A": "Download all logs from S3 and use local tools",
      "B": "Use Amazon Athena to query CloudTrail logs in S3",
      "C": "Use CloudTrail Lake to query logs with SQL",
      "D": "Import logs into Elasticsearch"
    },
    "answer": [
      "C"
    ],
    "explanation": "• CloudTrail Lake is purpose-built for querying CloudTrail logs\n• Uses SQL to query events\n• Can retain events for up to 7 years\n• Aggregates logs from multiple accounts/regions\n• Athena could work but CloudTrail Lake is optimized for this use case\n• Option A is inefficient and not scalable\n• Elasticsearch adds unnecessary complexity",
    "module": "Monitoring",
    "multi": false,
    "why": [
      "CloudTrail Lake is purpose-built for querying CloudTrail logs.",
      "Uses SQL to query events.",
      "Can retain events for up to 7 years.",
      "Aggregates logs from multiple accounts/regions.",
      "Athena could work but CloudTrail Lake is optimized for this use case.",
      "Elasticsearch adds unnecessary complexity."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Is inefficient and not scalable."
      }
    ],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "10-1",
    "q": "A company wants to migrate a large on-premises application to AWS quickly with minimal changes. The application runs on virtual machines and must be operational within 2 weeks. Which migration strategy should be used?",
    "options": {
      "A": "Refactor the application to use Lambda and DynamoDB",
      "B": "Rehost (Lift and Shift) using AWS Application Migration Service",
      "C": "Repurchase by moving to a SaaS solution",
      "D": "Replatform by migrating to containers on ECS"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Rehost (Lift and Shift) is the fastest migration strategy\n• AWS Application Migration Service (MGN) automates server migration\n• Moves VMs to EC2 with minimal changes\n• Meets the 2-week deadline requirement\n• Option A (Refactor) takes months of development\n• Option C (Repurchase) requires finding and adopting new software\n• Option D (Replatform) requires containerization effort",
    "module": "Migration",
    "multi": false,
    "why": [
      "AWS Application Migration Service (MGN) automates server migration.",
      "Moves VMs to EC2 with minimal changes.",
      "Meets the 2-week deadline requirement.",
      "Option A (Refactor) takes months of development.",
      "Option C (Repurchase) requires finding and adopting new software.",
      "Option D (Replatform) requires containerization effort."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "10-2",
    "q": "A solutions architect needs to migrate 50 TB of data from an on-premises NFS server to Amazon S3. The company has a 100 Mbps internet connection. Which service is MOST appropriate?",
    "options": {
      "A": "AWS DataSync",
      "B": "AWS Snowball",
      "C": "AWS Direct Connect",
      "D": "AWS Transfer Family"
    },
    "answer": [
      "B"
    ],
    "explanation": "• 50 TB over 100 Mbps would take approximately 46 days\n• Snowball is designed for large data transfers with limited bandwidth\n• Can transfer 50-80 TB per device in about a week\n• DataSync works over network but would be too slow\n• Direct Connect is for ongoing connectivity, not one-time migration\n• Transfer Family is for SFTP/FTPS access to S3\nCalculation: 50 TB = 400,000 Gb ÷ 100 Mbps = 4,000,000 seconds ≈ 46 days",
    "module": "Migration",
    "multi": false,
    "why": [
      "50 TB over 100 Mbps would take approximately 46 days.",
      "Snowball is designed for large data transfers with limited bandwidth.",
      "Can transfer 50-80 TB per device in about a week.",
      "DataSync works over network but would be too slow.",
      "Direct Connect is for ongoing connectivity, not one-time migration.",
      "Transfer Family is for SFTP/FTPS access to S3.",
      "Calculation: 50 TB = 400,000 Gb ÷ 100 Mbps = 4,000,000 seconds ≈ 46 days."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "10-3",
    "q": "A company wants to migrate an Oracle database to Amazon Aurora PostgreSQL. The database schemas and stored procedures need to be converted. Which combination of services should be used?",
    "options": {
      "A": "AWS DMS only",
      "B": "AWS Schema Conversion Tool (SCT) only",
      "C": "AWS SCT to convert schema, then AWS DMS to migrate data",
      "D": "AWS DataSync to transfer the database"
    },
    "answer": [
      "C"
    ],
    "explanation": "• This is a heterogeneous migration (different database engines)\n• SCT converts schemas, stored procedures, and functions\n• DMS migrates the actual data with minimal downtime\n• DMS alone doesn't convert schemas for heterogeneous migrations\n• SCT alone doesn't migrate data\n• DataSync is for file systems, not databases",
    "module": "Migration",
    "multi": false,
    "why": [
      "This is a heterogeneous migration (different database engines)",
      "SCT converts schemas, stored procedures, and functions.",
      "DMS migrates the actual data with minimal downtime.",
      "DMS alone doesn't convert schemas for heterogeneous migrations.",
      "SCT alone doesn't migrate data.",
      "DataSync is for file systems, not databases."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "10-4",
    "q": "A company needs to continuously replicate data from an on-premises MySQL database to Amazon RDS for MySQL for analytics purposes. The source database must remain operational. Which AWS service should be used?",
    "options": {
      "A": "AWS DataSync",
      "B": "AWS Database Migration Service (DMS) with CDC",
      "C": "AWS Snowball Edge",
      "D": "Amazon S3 Transfer Acceleration"
    },
    "answer": [
      "B"
    ],
    "explanation": "• DMS supports continuous data replication using Change Data Capture (CDC)\n• Source database remains operational during migration\n• Homogeneous migration (MySQL to MySQL)\n• Keeps source and target in sync\n• DataSync is for file systems, not databases\n• Snowball is for one-time transfers\n• S3 Transfer Acceleration is for S3 uploads",
    "module": "Migration",
    "multi": false,
    "why": [
      "DMS supports continuous data replication using Change Data Capture (CDC)",
      "Source database remains operational during migration.",
      "Homogeneous migration (MySQL to MySQL)",
      "Keeps source and target in sync.",
      "DataSync is for file systems, not databases.",
      "Snowball is for one-time transfers.",
      "S3 Transfer Acceleration is for S3 uploads."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "10-5",
    "q": "A solutions architect needs to transfer data between Amazon EFS in us-east-1 and Amazon S3 in us-west-2 on a daily basis. Which service provides automated, scheduled transfers?",
    "options": {
      "A": "AWS DataSync",
      "B": "AWS Snow Family",
      "C": "AWS Transfer Family",
      "D": "Amazon S3 Cross-Region Replication"
    },
    "answer": [
      "A"
    ],
    "explanation": "• DataSync supports transfers between AWS storage services\n• Can schedule tasks (hourly, daily, weekly)\n• Supports EFS to S3 transfers\n• Automated and managed service\n• Snow Family is for physical device transfers\n• Transfer Family is for SFTP/FTPS access\n• S3 CRR is for S3-to-S3 only",
    "module": "Migration",
    "multi": false,
    "why": [
      "DataSync supports transfers between AWS storage services.",
      "Can schedule tasks (hourly, daily, weekly)",
      "Supports EFS to S3 transfers.",
      "Automated and managed service.",
      "Snow Family is for physical device transfers.",
      "Transfer Family is for SFTP/FTPS access.",
      "S3 CRR is for S3-to-S3 only."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "10-6",
    "q": "A company is migrating a legacy application to AWS but wants to minimize changes. The application uses a specific OS version and custom drivers that aren't compatible with cloud-native services. Which migration strategy is MOST appropriate?",
    "options": {
      "A": "Refactor to serverless architecture",
      "B": "Replatform to managed services",
      "C": "Rehost (Lift and Shift) to EC2",
      "D": "Repurchase a SaaS solution"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Rehost (Lift and Shift) moves application as-is\n• EC2 supports custom OS and drivers\n• Minimal changes required\n• Fast migration path\n• Refactor requires re-architecting\n• Replatform may not support custom requirements\n• Repurchase requires finding compatible SaaS",
    "module": "Migration",
    "multi": false,
    "why": [
      "EC2 supports custom OS and drivers.",
      "Minimal changes required.",
      "Fast migration path.",
      "Refactor requires re-architecting.",
      "Replatform may not support custom requirements.",
      "Repurchase requires finding compatible SaaS."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "10-7",
    "q": "An organization wants to track the progress of migrating 200 applications across multiple AWS accounts and regions. Which service provides centralized visibility?",
    "options": {
      "A": "AWS CloudWatch",
      "B": "AWS Migration Hub",
      "C": "AWS Systems Manager",
      "D": "AWS Config"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Migration Hub provides centralized tracking of migrations\n• Aggregates progress from multiple migration tools\n• Supports multi-account and multi-region tracking\n• Integrates with DMS, Application Migration Service, etc.\n• CloudWatch monitors resources, not migrations\n• Systems Manager manages infrastructure\n• Config tracks configuration compliance",
    "module": "Migration",
    "multi": false,
    "why": [
      "Migration Hub provides centralized tracking of migrations.",
      "Aggregates progress from multiple migration tools.",
      "Supports multi-account and multi-region tracking.",
      "Integrates with DMS, Application Migration Service, etc.",
      "CloudWatch monitors resources, not migrations.",
      "Systems Manager manages infrastructure.",
      "Config tracks configuration compliance."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "10-8",
    "q": "A company needs to migrate data from an on-premises HDFS cluster to Amazon S3. The data must be encrypted in transit. Which service should be used?",
    "options": {
      "A": "AWS Snowball",
      "B": "AWS DataSync",
      "C": "AWS Direct Connect",
      "D": "AWS Storage Gateway"
    },
    "answer": [
      "B"
    ],
    "explanation": "• DataSync supports HDFS as a source\n• Encrypts data in transit with TLS\n• Automated and fast data transfer\n• Can transfer to S3\n• Snowball doesn't support HDFS directly\n• Direct Connect is for network connectivity\n• Storage Gateway is for hybrid storage, not migration",
    "module": "Migration",
    "multi": false,
    "why": [
      "DataSync supports HDFS as a source.",
      "Encrypts data in transit with TLS.",
      "Automated and fast data transfer.",
      "Can transfer to S3.",
      "Snowball doesn't support HDFS directly.",
      "Direct Connect is for network connectivity.",
      "Storage Gateway is for hybrid storage, not migration."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "10-9",
    "q": "A database migration using AWS DMS needs to handle large transactions and minimize the impact on the source database performance. How should the replication instance be sized?",
    "options": {
      "A": "Use the smallest instance to minimize costs",
      "B": "Use an instance type based on the source database workload and data volume",
      "C": "Always use the largest instance available",
      "D": "Instance size doesn't affect DMS performance"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Replication instance size affects performance\n• Should be based on workload, data volume, and complexity\n• Larger instances handle more throughput and complex transformations\n• Undersizing causes slow migration and potential source impact\n• Oversizing wastes money\n• Proper sizing requires workload analysis",
    "module": "Migration",
    "multi": false,
    "why": [
      "Replication instance size affects performance.",
      "Should be based on workload, data volume, and complexity.",
      "Larger instances handle more throughput and complex transformations.",
      "Undersizing causes slow migration and potential source impact.",
      "Oversizing wastes money.",
      "Proper sizing requires workload analysis."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "10-10",
    "q": "A company wants to migrate an on-premises Microsoft SQL Server database to AWS. They want to minimize management overhead and maintain compatibility. Which target should they choose?",
    "options": {
      "A": "Amazon RDS for SQL Server",
      "B": "Microsoft SQL Server on EC2",
      "C": "Amazon Aurora PostgreSQL",
      "D": "Amazon DynamoDB"
    },
    "answer": [
      "A"
    ],
    "explanation": "• RDS for SQL Server is managed service (minimal overhead)\n• Maintains SQL Server compatibility\n• This is a \"Replatform\" strategy\n• Option B requires managing EC2 and OS (more overhead)\n• Option C requires heterogeneous migration and code changes\n• Option D is NoSQL, requires application re-architecture",
    "module": "Migration",
    "multi": false,
    "why": [
      "RDS for SQL Server is managed service (minimal overhead)",
      "Maintains SQL Server compatibility.",
      "This is a \"Replatform\" strategy."
    ],
    "others": [
      {
        "l": [
          "B"
        ],
        "t": "Requires managing EC2 and OS (more overhead)"
      },
      {
        "l": [
          "C"
        ],
        "t": "Requires heterogeneous migration and code changes."
      },
      {
        "l": [
          "D"
        ],
        "t": "Is NoSQL, requires application re-architecture."
      }
    ],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "10-11",
    "q": "During a database migration with AWS DMS, which task type should be used to perform an initial data load followed by ongoing replication?",
    "options": {
      "A": "Full Load only",
      "B": "CDC (Change Data Capture) only",
      "C": "Full Load + CDC",
      "D": "Multiple Full Load tasks"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Full Load + CDC is the most common migration pattern\n• Full Load transfers existing data\n• CDC replicates ongoing changes\n• Minimizes downtime\n• Full Load only doesn't capture changes after initial load\n• CDC only doesn't transfer existing data\n• Multiple Full Loads don't capture changes",
    "module": "Migration",
    "multi": false,
    "why": [
      "Full Load transfers existing data.",
      "CDC replicates ongoing changes.",
      "Minimizes downtime.",
      "Full Load only doesn't capture changes after initial load.",
      "CDC only doesn't transfer existing data.",
      "Multiple Full Loads don't capture changes."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "10-12",
    "q": "A company has 500 TB of data to migrate from on-premises to AWS. The internet connection is 1 Gbps, but business requirements prohibit using the full bandwidth. Which solution is MOST cost-effective?",
    "options": {
      "A": "Use AWS DataSync with bandwidth throttling",
      "B": "Order multiple AWS Snowball devices",
      "C": "Upgrade internet connection to 10 Gbps",
      "D": "Use AWS Direct Connect with 10 Gbps connection"
    },
    "answer": [
      "B"
    ],
    "explanation": "• 500 TB is very large, Snowball is designed for this\n• Even with 1 Gbps, transfer would take months\n• Can't use full bandwidth due to business requirements\n• Snowball is faster and more cost-effective for large migrations\n• DataSync with throttling would be too slow\n• Upgrading connection is expensive\n• Direct Connect requires time to provision",
    "module": "Migration",
    "multi": false,
    "why": [
      "500 TB is very large, Snowball is designed for this.",
      "Even with 1 Gbps, transfer would take months.",
      "Can't use full bandwidth due to business requirements.",
      "Snowball is faster and more cost-effective for large migrations.",
      "DataSync with throttling would be too slow.",
      "Upgrading connection is expensive.",
      "Direct Connect requires time to provision."
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "10-13",
    "q": "An application stores data in an on-premises SMB file share. The company wants to migrate this data to AWS and continue accessing it via SMB protocol. Which solution should be implemented?",
    "options": {
      "A": "Use DataSync to transfer to S3, then use S3 File Gateway",
      "B": "Use DataSync to transfer to FSx for Windows File Server",
      "C": "Use Snowball to transfer to EFS",
      "D": "Use Storage Gateway Volume Gateway"
    },
    "answer": [
      "B"
    ],
    "explanation": "• DataSync supports SMB as source\n• FSx for Windows File Server provides native SMB protocol\n• Seamless migration path for Windows file shares\n• S3 File Gateway presents S3 as NFS/SMB but uses S3 storage\n• EFS doesn't natively support SMB (uses NFS)\n• Volume Gateway is for block storage",
    "module": "Migration",
    "multi": false,
    "why": [
      "DataSync supports SMB as source.",
      "FSx for Windows File Server provides native SMB protocol.",
      "Seamless migration path for Windows file shares.",
      "S3 File Gateway presents S3 as NFS/SMB but uses S3 storage.",
      "EFS doesn't natively support SMB (uses NFS)",
      "Volume Gateway is for block storage."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "10-14",
    "q": "A company is using AWS DMS to migrate a database. They need to ensure the data is encrypted both in transit and at rest. How can this be achieved?",
    "options": {
      "A": "DMS doesn't support encryption",
      "B": "Enable SSL/TLS for connections and use encrypted RDS instances",
      "C": "Use VPN for all connections",
      "D": "Encryption is automatic and cannot be configured"
    },
    "answer": [
      "B"
    ],
    "explanation": "• DMS supports encryption in transit using SSL/TLS\n• Target RDS instances can use encryption at rest\n• Replication instance can also be encrypted\n• Both source and target connections should use SSL\n• VPN adds security but isn't required for encryption\n• Encryption must be explicitly configured",
    "module": "Migration",
    "multi": false,
    "why": [
      "DMS supports encryption in transit using SSL/TLS.",
      "Target RDS instances can use encryption at rest.",
      "Replication instance can also be encrypted.",
      "Both source and target connections should use SSL.",
      "VPN adds security but isn't required for encryption.",
      "Encryption must be explicitly configured."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "10-15",
    "q": "A solutions architect needs to schedule a DataSync task to run every day at 2 AM UTC. How can this be configured?",
    "options": {
      "A": "DataSync doesn't support scheduling",
      "B": "Use the built-in task scheduling in DataSync",
      "C": "Use EventBridge to trigger DataSync tasks",
      "D": "Use Lambda with cron expressions"
    },
    "answer": [
      "B"
    ],
    "explanation": "• DataSync has built-in task scheduling\n• Can schedule hourly, daily, weekly, or custom intervals\n• No additional services required\n• EventBridge could also trigger tasks but isn't necessary\n• Lambda is unnecessary complexity\n• Scheduling is a native DataSync feature",
    "module": "Migration",
    "multi": false,
    "why": [
      "DataSync has built-in task scheduling.",
      "Can schedule hourly, daily, weekly, or custom intervals.",
      "No additional services required.",
      "EventBridge could also trigger tasks but isn't necessary.",
      "Lambda is unnecessary complexity.",
      "Scheduling is a native DataSync feature."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "10-16",
    "q": "A company wants to retire legacy applications that are no longer used as part of their cloud migration. Which migration strategy does this represent?",
    "options": {
      "A": "Rehost",
      "B": "Replatform",
      "C": "Retire",
      "D": "Retain"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Retire strategy identifies and turns off unused applications\n• Reduces cost and complexity\n• Part of the 6 R's migration framework\n• Rehost moves applications to cloud\n• Replatform optimizes during migration\n• Retain keeps applications on-premises",
    "module": "Migration",
    "multi": false,
    "why": [
      "Reduces cost and complexity.",
      "Part of the 6 R's migration framework.",
      "Rehost moves applications to cloud.",
      "Replatform optimizes during migration.",
      "Retain keeps applications on-premises."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "10-17",
    "q": "During a database migration, AWS DMS replication instance is in the same VPC as the target RDS database but cannot connect. What is the MOST likely cause?",
    "options": {
      "A": "The replication instance is too small",
      "B": "The target RDS security group doesn't allow inbound traffic from the replication instance",
      "C": "DMS doesn't support RDS as a target",
      "D": "SSL must be disabled on RDS"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Security groups must allow traffic between DMS and RDS\n• Common misconfiguration during DMS setup\n• Need to add inbound rule to RDS security group\n• Instance size doesn't affect connectivity\n• DMS fully supports RDS as target\n• SSL is optional, not a blocker",
    "module": "Migration",
    "multi": false,
    "why": [
      "Security groups must allow traffic between DMS and RDS.",
      "Common misconfiguration during DMS setup.",
      "Need to add inbound rule to RDS security group.",
      "Instance size doesn't affect connectivity.",
      "DMS fully supports RDS as target.",
      "SSL is optional, not a blocker."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "10-18",
    "q": "A company is planning a large-scale migration to AWS and needs to assess their current environment, plan the migration, and track progress. Which AWS service provides this comprehensive approach?",
    "options": {
      "A": "AWS Migration Hub",
      "B": "AWS Application Discovery Service",
      "C": "Both Migration Hub and Application Discovery Service",
      "D": "AWS CloudEndure"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Application Discovery Service discovers on-premises resources\n• Collects server specifications, performance data, dependencies\n• Migration Hub tracks migration progress\n• Together they provide complete migration solution\n• Application Discovery feeds data into Migration Hub\n• CloudEndure is now AWS Application Migration Service",
    "module": "Migration",
    "multi": false,
    "why": [
      "Application Discovery Service discovers on-premises resources.",
      "Collects server specifications, performance data, dependencies.",
      "Migration Hub tracks migration progress.",
      "Together they provide complete migration solution.",
      "Application Discovery feeds data into Migration Hub.",
      "CloudEndure is now AWS Application Migration Service."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "10-19",
    "q": "A company wants to use AWS DataSync to transfer data but needs to verify that files are identical at source and destination. Which DataSync feature ensures this?",
    "options": {
      "A": "DataSync doesn't verify data",
      "B": "Built-in data integrity verification",
      "C": "Manual MD5 checksum comparison",
      "D": "Use CloudWatch to monitor transfers"
    },
    "answer": [
      "B"
    ],
    "explanation": "• DataSync automatically verifies data integrity\n• Checks data at source and destination\n• Ensures data consistency after transfer\n• Built-in feature, no manual intervention needed\n• CloudWatch monitors progress but doesn't verify integrity",
    "module": "Migration",
    "multi": false,
    "why": [
      "DataSync automatically verifies data integrity.",
      "Checks data at source and destination.",
      "Ensures data consistency after transfer.",
      "Built-in feature, no manual intervention needed.",
      "CloudWatch monitors progress but doesn't verify integrity."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "10-20",
    "q": "An organization is migrating applications to AWS and wants to refactor a monolithic application into microservices. Which migration strategy is being used?",
    "options": {
      "A": "Rehost",
      "B": "Replatform",
      "C": "Refactor/Re-architect",
      "D": "Repurchase"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Refactor/Re-architect reimagines application architecture\n• Breaking monolith into microservices is classic refactoring\n• Uses cloud-native features (ECS, Lambda, etc.)\n• Most complex but provides maximum cloud benefits\n• Rehost moves as-is\n• Replatform makes minimal optimizations\n• Repurchase moves to SaaS",
    "module": "Migration",
    "multi": false,
    "why": [
      "Breaking monolith into microservices is classic refactoring.",
      "Uses cloud-native features (ECS, Lambda, etc.)",
      "Most complex but provides maximum cloud benefits.",
      "Rehost moves as-is.",
      "Replatform makes minimal optimizations.",
      "Repurchase moves to SaaS."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "11-1",
    "q": "A company stores application logs in Amazon S3 in CSV format. A data analyst needs to run ad-hoc SQL queries on this data without setting up infrastructure. Which AWS service should be used?",
    "options": {
      "A": "Amazon EMR",
      "B": "Amazon Athena",
      "C": "Amazon Redshift",
      "D": "AWS Glue"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Athena is serverless and queries S3 data using SQL\n• No infrastructure to manage\n• Pay per query (per TB scanned)\n• Perfect for ad-hoc querying\n• EMR requires cluster management\n• Redshift requires data warehouse setup\n• Glue is for ETL, not querying",
    "module": "Analytics",
    "multi": false,
    "why": [
      "Athena is serverless and queries S3 data using SQL.",
      "No infrastructure to manage.",
      "Pay per query (per TB scanned)",
      "Perfect for ad-hoc querying.",
      "EMR requires cluster management.",
      "Redshift requires data warehouse setup.",
      "Glue is for ETL, not querying."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "11-2",
    "q": "A solutions architect wants to reduce the cost of Athena queries on a large dataset stored in S3. The data is currently in CSV format and queries scan the entire dataset. What should be done to optimize costs?",
    "options": {
      "A": "Increase the Athena query timeout",
      "B": "Convert data to Parquet format and partition by commonly queried fields",
      "C": "Move data to Amazon Redshift",
      "D": "Enable S3 versioning"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Athena charges per TB scanned ($5/TB)\n• Parquet is columnar format, reduces data scanned by 30-90%\n• Partitioning limits data scanned to relevant partitions\n• Both optimizations significantly reduce costs\n• Increasing timeout doesn't reduce scanned data\n• Redshift adds infrastructure costs\n• S3 versioning doesn't affect query performance",
    "module": "Analytics",
    "multi": false,
    "why": [
      "Athena charges per TB scanned ($5/TB)",
      "Parquet is columnar format, reduces data scanned by 30-90%.",
      "Partitioning limits data scanned to relevant partitions.",
      "Both optimizations significantly reduce costs.",
      "Increasing timeout doesn't reduce scanned data.",
      "Redshift adds infrastructure costs.",
      "S3 versioning doesn't affect query performance."
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "11-3",
    "q": "A real-time analytics application needs to ingest clickstream data from a website, process it with custom business logic, and store results in DynamoDB. Which AWS service should be used for data ingestion?",
    "options": {
      "A": "Amazon Kinesis Data Streams",
      "B": "Amazon Kinesis Data Firehose",
      "C": "Amazon SQS",
      "D": "AWS DataSync"
    },
    "answer": [
      "A"
    ],
    "explanation": "• Kinesis Data Streams is for real-time streaming with custom processing\n• Supports custom consumers (Lambda, EC2, KCL)\n• Real-time processing capability\n• Firehose is for loading data to destinations (S3, Redshift, etc.)\n• SQS is for message queuing, not streaming analytics\n• DataSync is for file transfers",
    "module": "Analytics",
    "multi": false,
    "why": [
      "Kinesis Data Streams is for real-time streaming with custom processing.",
      "Supports custom consumers (Lambda, EC2, KCL)",
      "Real-time processing capability.",
      "Firehose is for loading data to destinations (S3, Redshift, etc.)",
      "SQS is for message queuing, not streaming analytics.",
      "DataSync is for file transfers."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "11-4",
    "q": "A company wants to load streaming IoT sensor data into Amazon S3 for analysis with minimal operational overhead. The data should be delivered every 5 minutes and compressed. Which service is MOST appropriate?",
    "options": {
      "A": "Amazon Kinesis Data Streams with Lambda",
      "B": "Amazon Kinesis Data Firehose",
      "C": "Amazon SQS with Lambda",
      "D": "AWS IoT Core with custom application"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Kinesis Data Firehose is fully managed, no infrastructure\n• Automatically loads to S3\n• Built-in compression (GZIP, Snappy)\n• Buffer interval supports 60-900 seconds (5 minutes = 300 seconds)\n• Minimal operational overhead\n• Data Streams requires consumer application\n• SQS adds unnecessary complexity\n• Custom application requires maintenance",
    "module": "Analytics",
    "multi": false,
    "why": [
      "Kinesis Data Firehose is fully managed, no infrastructure.",
      "Automatically loads to S3.",
      "Built-in compression (GZIP, Snappy)",
      "Buffer interval supports 60-900 seconds (5 minutes = 300 seconds)",
      "Minimal operational overhead.",
      "Data Streams requires consumer application.",
      "SQS adds unnecessary complexity.",
      "Custom application requires maintenance."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "11-5",
    "q": "An Athena query is scanning 10 TB of data but only needs records from the last month. The S3 bucket structure is organized by year, month, and day. How can query performance and cost be improved?",
    "options": {
      "A": "Use S3 Select to filter data",
      "B": "Create a partitioned table in Athena and query specific partitions",
      "C": "Enable S3 Intelligent-Tiering",
      "D": "Use Athena workgroups"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Partitioning allows queries to scan only relevant data\n• WHERE clause with partition keys limits scan to specific partitions\n• Dramatically reduces data scanned and costs\n• Example: WHERE year='2024' AND month='01'\n• S3 Select reduces transfer but doesn't work with Athena\n• Intelligent-Tiering is for storage costs\n• Workgroups organize queries but don't optimize scans",
    "module": "Analytics",
    "multi": false,
    "why": [
      "Partitioning allows queries to scan only relevant data.",
      "WHERE clause with partition keys limits scan to specific partitions.",
      "Dramatically reduces data scanned and costs.",
      "Example: WHERE year='2024' AND month='01'",
      "S3 Select reduces transfer but doesn't work with Athena.",
      "Intelligent-Tiering is for storage costs.",
      "Workgroups organize queries but don't optimize scans."
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "11-6",
    "q": "A company needs to process streaming data in real-time using SQL queries and send alerts when certain thresholds are exceeded. Which service should be used?",
    "options": {
      "A": "Amazon Athena",
      "B": "Amazon Kinesis Data Analytics",
      "C": "Amazon Kinesis Data Firehose",
      "D": "AWS Glue"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Kinesis Data Analytics processes streaming data with SQL\n• Real-time analytics on streaming data\n• Can send results to Lambda for alerts\n• Athena queries static data in S3\n• Firehose loads data but doesn't analyze\n• Glue is for ETL jobs",
    "module": "Analytics",
    "multi": false,
    "why": [
      "Kinesis Data Analytics processes streaming data with SQL.",
      "Real-time analytics on streaming data.",
      "Can send results to Lambda for alerts.",
      "Athena queries static data in S3.",
      "Firehose loads data but doesn't analyze.",
      "Glue is for ETL jobs."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "11-7",
    "q": "A data engineering team needs to run Apache Spark jobs to process large datasets. They want a managed service that handles infrastructure provisioning. Which service should they use?",
    "options": {
      "A": "Amazon Athena",
      "B": "Amazon EMR",
      "C": "AWS Glue",
      "D": "Amazon Kinesis"
    },
    "answer": [
      "B"
    ],
    "explanation": "• EMR (Elastic MapReduce) is managed big data platform\n• Supports Apache Spark, Hadoop, Hive, etc.\n• Handles cluster provisioning and scaling\n• Optimized for large-scale data processing\n• Athena is for SQL queries, not Spark\n• Glue supports Spark but EMR provides more control\n• Kinesis is for streaming, not batch processing",
    "module": "Analytics",
    "multi": false,
    "why": [
      "EMR (Elastic MapReduce) is managed big data platform.",
      "Supports Apache Spark, Hadoop, Hive, etc.",
      "Handles cluster provisioning and scaling.",
      "Optimized for large-scale data processing.",
      "Athena is for SQL queries, not Spark.",
      "Glue supports Spark but EMR provides more control.",
      "Kinesis is for streaming, not batch processing."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "11-8",
    "q": "A company has streaming data in Kinesis Data Streams and wants to load it into Amazon Redshift for analytics. What is the MOST operationally efficient solution?",
    "options": {
      "A": "Use Lambda to read from Kinesis and write to Redshift",
      "B": "Use Kinesis Data Firehose to load data into Redshift",
      "C": "Use EC2 instances with custom scripts",
      "D": "Use EMR to process and load data"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Firehose can read from Data Streams and load to Redshift\n• Fully managed, no code required\n• Automatically scales\n• Loads via S3 (COPY command)\n• Lambda requires custom code and error handling\n• EC2 and EMR add operational overhead",
    "module": "Analytics",
    "multi": false,
    "why": [
      "Firehose can read from Data Streams and load to Redshift.",
      "Fully managed, no code required.",
      "Automatically scales.",
      "Loads via S3 (COPY command)",
      "Lambda requires custom code and error handling.",
      "EC2 and EMR add operational overhead."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "11-9",
    "q": "An organization uses AWS Glue Crawlers to discover schemas for data in S3. The crawler should run automatically whenever new data arrives. How can this be configured?",
    "options": {
      "A": "Manually run the crawler daily",
      "B": "Use EventBridge to trigger the crawler on S3 PutObject events",
      "C": "Use AWS Config to detect changes",
      "D": "Crawlers cannot be triggered automatically"
    },
    "answer": [
      "B"
    ],
    "explanation": "• EventBridge (formerly CloudWatch Events) can trigger on S3 events\n• S3 PutObject events can invoke Glue Crawler\n• Automated schema discovery when new data arrives\n• Manual running isn't automatic\n• Config tracks configuration, doesn't trigger workflows\n• Glue supports multiple trigger types",
    "module": "Analytics",
    "multi": false,
    "why": [
      "EventBridge (formerly CloudWatch Events) can trigger on S3 events.",
      "S3 PutObject events can invoke Glue Crawler.",
      "Automated schema discovery when new data arrives.",
      "Manual running isn't automatic.",
      "Config tracks configuration, doesn't trigger workflows.",
      "Glue supports multiple trigger types."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "11-10",
    "q": "A Kinesis Data Stream has 4 shards. Producers are writing 5,000 records per second. What is the likely issue and solution?",
    "options": {
      "A": "Shards are over capacity; add more shards",
      "B": "Retention period is too short; increase it",
      "C": "No issue, this is within limits",
      "D": "Use Kinesis Data Firehose instead"
    },
    "answer": [
      "A"
    ],
    "explanation": "• Each shard supports 1,000 records/sec write capacity\n• 4 shards = 4,000 records/sec capacity\n• 5,000 records/sec exceeds capacity\n• Need at least 5 shards (or use on-demand mode)\n• Will receive ProvisionedThroughputExceededException\n• Retention doesn't affect write capacity\n• Firehose is for different use cases\nCalculation: 4 shards × 1,000 records/sec = 4,000 records/sec < 5,000 needed",
    "module": "Analytics",
    "multi": false,
    "why": [
      "Each shard supports 1,000 records/sec write capacity.",
      "4 shards = 4,000 records/sec capacity.",
      "5,000 records/sec exceeds capacity.",
      "Need at least 5 shards (or use on-demand mode)",
      "Will receive ProvisionedThroughputExceededException.",
      "Retention doesn't affect write capacity.",
      "Firehose is for different use cases.",
      "Calculation: 4 shards × 1,000 records/sec = 4,000 records/sec < 5,000 needed."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "11-11",
    "q": "A company wants to visualize data from multiple sources including S3, RDS, and Redshift. They need interactive dashboards for business users. Which AWS service should be used?",
    "options": {
      "A": "Amazon Athena",
      "B": "Amazon QuickSight",
      "C": "Amazon CloudWatch",
      "D": "Amazon Kinesis Data Analytics"
    },
    "answer": [
      "B"
    ],
    "explanation": "• QuickSight is business intelligence and visualization service\n• Connects to multiple data sources (S3, RDS, Redshift, etc.)\n• Creates interactive dashboards\n• SPICE engine for fast analytics\n• Athena queries data but doesn't visualize\n• CloudWatch monitors infrastructure\n• Kinesis analyzes streaming data",
    "module": "Analytics",
    "multi": false,
    "why": [
      "QuickSight is business intelligence and visualization service.",
      "Connects to multiple data sources (S3, RDS, Redshift, etc.)",
      "Creates interactive dashboards.",
      "SPICE engine for fast analytics.",
      "Athena queries data but doesn't visualize.",
      "CloudWatch monitors infrastructure.",
      "Kinesis analyzes streaming data."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "11-12",
    "q": "A solutions architect needs to ensure data in Kinesis Data Streams is retained for 7 days for reprocessing. What should be configured?",
    "options": {
      "A": "Set retention period to 168 hours (7 days)",
      "B": "Use Kinesis Data Firehose with 7-day buffer",
      "C": "Enable extended data retention in S3",
      "D": "Kinesis cannot retain data beyond 24 hours"
    },
    "answer": [
      "A"
    ],
    "explanation": "• Kinesis Data Streams supports retention from 24 hours to 365 days\n• Default is 24 hours\n• Extended retention has additional cost\n• 7 days = 168 hours\n• Firehose doesn't have 7-day buffer option\n• S3 is separate storage, not Kinesis retention\n• Extended retention is a supported feature",
    "module": "Analytics",
    "multi": false,
    "why": [
      "Kinesis Data Streams supports retention from 24 hours to 365 days.",
      "Default is 24 hours.",
      "Extended retention has additional cost.",
      "7 days = 168 hours.",
      "Firehose doesn't have 7-day buffer option.",
      "S3 is separate storage, not Kinesis retention.",
      "Extended retention is a supported feature."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "11-13",
    "q": "An ETL pipeline needs to transform data from multiple sources, catalog the metadata, and run the jobs on a schedule. Which AWS service provides this functionality?",
    "options": {
      "A": "Amazon EMR",
      "B": "AWS Glue",
      "C": "AWS Data Pipeline",
      "D": "Amazon Athena"
    },
    "answer": [
      "B"
    ],
    "explanation": "• AWS Glue is fully managed ETL service\n• Glue Data Catalog stores metadata\n• Glue Crawlers discover schemas\n• Glue Jobs perform transformations\n• Supports scheduling\n• EMR requires more management\n• Data Pipeline is older service\n• Athena queries, doesn't transform",
    "module": "Analytics",
    "multi": false,
    "why": [
      "Glue Data Catalog stores metadata.",
      "Glue Crawlers discover schemas.",
      "Glue Jobs perform transformations.",
      "Supports scheduling.",
      "EMR requires more management.",
      "Data Pipeline is older service.",
      "Athena queries, doesn't transform."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "11-14",
    "q": "A company collects application logs in CloudWatch Logs and wants to analyze them using SQL queries. What is the MOST cost-effective solution?",
    "options": {
      "A": "Keep logs in CloudWatch and use Logs Insights",
      "B": "Export logs to S3 and query with Athena",
      "C": "Stream logs to Kinesis and use Data Analytics",
      "D": "Load logs into Redshift"
    },
    "answer": [
      "B"
    ],
    "explanation": "• CloudWatch Logs storage is expensive for long-term retention\n• Export to S3 significantly reduces storage costs\n• Athena queries S3 data with SQL ($5/TB scanned)\n• Most cost-effective for infrequent analysis\n• Logs Insights is good for recent logs\n• Kinesis adds streaming costs\n• Redshift requires cluster costs",
    "module": "Analytics",
    "multi": false,
    "why": [
      "CloudWatch Logs storage is expensive for long-term retention.",
      "Export to S3 significantly reduces storage costs.",
      "Athena queries S3 data with SQL ($5/TB scanned)",
      "Most cost-effective for infrequent analysis.",
      "Logs Insights is good for recent logs.",
      "Kinesis adds streaming costs.",
      "Redshift requires cluster costs."
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "11-15",
    "q": "A Kinesis Data Firehose delivery stream should transform incoming JSON data using a Lambda function before storing in S3. How is this configured?",
    "options": {
      "A": "Firehose doesn't support transformations",
      "B": "Enable data transformation and specify the Lambda function ARN",
      "C": "Use Kinesis Data Analytics for transformation",
      "D": "Transform data before sending to Firehose"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Kinesis Data Firehose supports Lambda transformation\n• Configure transformation in delivery stream settings\n• Firehose invokes Lambda for each batch\n• Lambda can modify, filter, or enrich data\n• Built-in feature, no separate service needed\n• Transforming before Firehose is possible but not optimal",
    "module": "Analytics",
    "multi": false,
    "why": [
      "Kinesis Data Firehose supports Lambda transformation.",
      "Configure transformation in delivery stream settings.",
      "Firehose invokes Lambda for each batch.",
      "Lambda can modify, filter, or enrich data.",
      "Built-in feature, no separate service needed.",
      "Transforming before Firehose is possible but not optimal."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "11-16",
    "q": "An analytics application queries data in S3 using Athena. The queries are running slowly despite optimizations. The data is already in Parquet format and partitioned. What else can improve performance?",
    "options": {
      "A": "Optimize file sizes to 128 MB - 1 GB per file",
      "B": "Switch to CSV format",
      "C": "Disable partitioning",
      "D": "Use smaller file sizes (1-10 MB)"
    },
    "answer": [
      "A"
    ],
    "explanation": "• Too many small files causes performance issues\n• Optimal file size is 128 MB - 1 GB\n• Athena opens each file, many small files = overhead\n• Combine small files into larger ones\n• CSV is less efficient than Parquet\n• Partitioning improves performance\n• Very small files slow down queries",
    "module": "Analytics",
    "multi": false,
    "why": [
      "Too many small files causes performance issues.",
      "Optimal file size is 128 MB - 1 GB.",
      "Athena opens each file, many small files = overhead.",
      "Combine small files into larger ones.",
      "CSV is less efficient than Parquet.",
      "Partitioning improves performance.",
      "Very small files slow down queries."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "11-17",
    "q": "A company uses Athena with a Glue Data Catalog. They want to ensure different teams can only query their own datasets. How should access be controlled?",
    "options": {
      "A": "Use S3 bucket policies",
      "B": "Use IAM policies with Glue Catalog permissions",
      "C": "Create separate AWS accounts",
      "D": "Use Athena workgroups only"
    },
    "answer": [
      "B"
    ],
    "explanation": "• IAM policies control access to Glue Catalog databases and tables\n• Fine-grained permissions per team\n• Can combine with S3 bucket policies\n• Separate accounts is overly complex\n• Workgroups organize queries but don't enforce data access\n• Glue Catalog permissions are the primary control",
    "module": "Analytics",
    "multi": false,
    "why": [
      "IAM policies control access to Glue Catalog databases and tables.",
      "Fine-grained permissions per team.",
      "Can combine with S3 bucket policies.",
      "Separate accounts is overly complex.",
      "Workgroups organize queries but don't enforce data access.",
      "Glue Catalog permissions are the primary control."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "11-18",
    "q": "A real-time application needs guaranteed ordering of events for each user. Events should be processed in the order they arrive per user. Which Kinesis feature ensures this?",
    "options": {
      "A": "Use the same shard for all records",
      "B": "Use the user ID as the partition key",
      "C": "Enable Kinesis enhanced fan-out",
      "D": "Use multiple shards with round-robin distribution"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Partition key determines which shard receives the record\n• Same partition key always goes to the same shard\n• Records in a shard are ordered by sequence number\n• Using user ID ensures all user events go to same shard (ordered)\n• One shard doesn't scale\n• Enhanced fan-out is for parallel consumers\n• Round-robin breaks ordering",
    "module": "Analytics",
    "multi": false,
    "why": [
      "Partition key determines which shard receives the record.",
      "Same partition key always goes to the same shard.",
      "Records in a shard are ordered by sequence number.",
      "Using user ID ensures all user events go to same shard (ordered)",
      "One shard doesn't scale.",
      "Enhanced fan-out is for parallel consumers.",
      "Round-robin breaks ordering."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "11-19",
    "q": "A company needs to load VPC Flow Logs into Amazon S3 for analysis with Athena. The solution should be fully managed with minimal setup. What should be configured?",
    "options": {
      "A": "Use Kinesis Data Streams with Lambda",
      "B": "Use Kinesis Data Firehose as the Flow Logs destination",
      "C": "Use CloudWatch Logs with manual export",
      "D": "Use custom EC2 instances to collect logs"
    },
    "answer": [
      "B"
    ],
    "explanation": "• VPC Flow Logs can deliver directly to Kinesis Data Firehose\n• Firehose automatically loads to S3\n• Fully managed, no code required\n• Can compress and partition data\n• Manual export isn't automated\n• Data Streams requires consumer application\n• EC2 instances add operational overhead",
    "module": "Analytics",
    "multi": false,
    "why": [
      "VPC Flow Logs can deliver directly to Kinesis Data Firehose.",
      "Firehose automatically loads to S3.",
      "Fully managed, no code required.",
      "Can compress and partition data.",
      "Manual export isn't automated.",
      "Data Streams requires consumer application.",
      "EC2 instances add operational overhead."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "11-20",
    "q": "An Athena workgroup is configured with a data usage control of 1 TB per day. A user's query would scan 1.5 TB of data. What happens?",
    "options": {
      "A": "The query runs and scans 1.5 TB",
      "B": "The query is rejected",
      "C": "The query runs but only scans 1 TB",
      "D": "The user receives a warning but query proceeds"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Workgroup data usage controls enforce limits\n• Queries exceeding the limit are rejected\n• Prevents cost overruns\n• User must optimize query or request limit increase\n• Query doesn't partially execute\n• Hard enforcement, not just a warning",
    "module": "Analytics",
    "multi": false,
    "why": [
      "Workgroup data usage controls enforce limits.",
      "Queries exceeding the limit are rejected.",
      "Prevents cost overruns.",
      "User must optimize query or request limit increase.",
      "Query doesn't partially execute.",
      "Hard enforcement, not just a warning."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "11-21",
    "q": "A financial services company needs to securely share curated, third-party financial datasets with its data analysts on AWS. The solution must support subscription-based access and automate dataset updates. Which AWS service should be used?",
    "options": {
      "A": "AWS Data Exchange",
      "B": "Amazon S3",
      "C": "AWS Glue Data Catalog",
      "D": "Amazon Redshift Data Sharing"
    },
    "answer": [
      "A"
    ],
    "explanation": "• AWS Data Exchange enables secure, subscription-based access to third-party datasets\n• Automates dataset updates and notifications\n• Integrates with S3, Redshift, and Lake Formation\n• S3 is storage, not a data marketplace\n• Glue Data Catalog is for metadata, not data sharing\n• Redshift Data Sharing is for sharing data between Redshift clusters",
    "module": "Analytics",
    "multi": false,
    "why": [
      "Automates dataset updates and notifications.",
      "Integrates with S3, Redshift, and Lake Formation.",
      "S3 is storage, not a data marketplace.",
      "Glue Data Catalog is for metadata, not data sharing.",
      "Redshift Data Sharing is for sharing data between Redshift clusters."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "11-22",
    "q": "A healthcare company wants to build a secure data lake on AWS to store and analyze sensitive patient data. They need fine-grained access control, data cataloging, and integration with analytics services. Which service should be used to manage permissions and data cataloging?",
    "options": {
      "A": "AWS Lake Formation",
      "B": "Amazon S3",
      "C": "AWS Glue",
      "D": "Amazon Athena"
    },
    "answer": [
      "A"
    ],
    "explanation": "• Lake Formation provides fine-grained access control for data lakes\n• Manages permissions at table, column, and row level\n• Integrates with Glue Data Catalog and analytics services (Athena, Redshift, EMR)\n• S3 is storage, not access management\n• Glue is for ETL and cataloging, but Lake Formation extends Glue with security\n• Athena is for querying, not access management",
    "module": "Analytics",
    "multi": false,
    "why": [
      "Lake Formation provides fine-grained access control for data lakes.",
      "Manages permissions at table, column, and row level.",
      "Integrates with Glue Data Catalog and analytics services (Athena, Redshift, EMR)",
      "S3 is storage, not access management.",
      "Glue is for ETL and cataloging, but Lake Formation extends Glue with security.",
      "Athena is for querying, not access management."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "11-23",
    "q": "A media company needs to search, visualize, and analyze large volumes of log and event data in near real-time. Which AWS service is best suited for this use case?",
    "options": {
      "A": "Amazon OpenSearch Service",
      "B": "Amazon Athena",
      "C": "Amazon Redshift",
      "D": "AWS Glue"
    },
    "answer": [
      "A"
    ],
    "explanation": "• OpenSearch Service (formerly Elasticsearch) is designed for log analytics, search, and visualization\n• Provides near real-time indexing and querying\n• Integrates with Kibana for dashboards\n• Athena is for ad-hoc SQL queries, not real-time search\n• Redshift is for data warehousing\n• Glue is for ETL, not search/visualization",
    "module": "Analytics",
    "multi": false,
    "why": [
      "OpenSearch Service (formerly Elasticsearch) is designed for log analytics, search, and visualization.",
      "Provides near real-time indexing and querying.",
      "Integrates with Kibana for dashboards.",
      "Athena is for ad-hoc SQL queries, not real-time search.",
      "Redshift is for data warehousing.",
      "Glue is for ETL, not search/visualization."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "11-24",
    "q": "A data engineering team needs to ingest streaming data from Apache Kafka into AWS for analytics and storage. Which AWS service provides a fully managed, highly available Kafka environment?",
    "options": {
      "A": "Amazon MSK",
      "B": "Amazon Kinesis Data Streams",
      "C": "Amazon SQS",
      "D": "AWS Glue Streaming"
    },
    "answer": [
      "A"
    ],
    "explanation": "• Amazon MSK (Managed Streaming for Apache Kafka) provides a fully managed Kafka service\n• Handles provisioning, patching, and scaling\n• Integrates with Kinesis, Lambda, S3, Redshift\n• Kinesis is a separate streaming service, not Kafka-compatible\n• SQS is for message queuing, not streaming\n• Glue Streaming is for ETL, not Kafka management",
    "module": "Analytics",
    "multi": false,
    "why": [
      "Handles provisioning, patching, and scaling.",
      "Integrates with Kinesis, Lambda, S3, Redshift.",
      "Kinesis is a separate streaming service, not Kafka-compatible.",
      "SQS is for message queuing, not streaming.",
      "Glue Streaming is for ETL, not Kafka management."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "12-1",
    "q": "A company needs to deploy a web application that can handle unpredictable traffic spikes and minimize operational overhead. The application should scale automatically and use a pay-per-use pricing model. Which architecture is MOST appropriate?",
    "options": {
      "A": "EC2 instances with Auto Scaling behind an ALB",
      "B": "Serverless architecture with S3, CloudFront, API Gateway, Lambda, and DynamoDB",
      "C": "ECS containers on EC2 instances",
      "D": "EC2 instances with manual scaling"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Serverless architecture automatically scales and is pay-per-use\n• S3/CloudFront for static content\n• API Gateway/Lambda for compute (scales automatically)\n• DynamoDB for database (on-demand capacity)\n• Zero operational overhead for infrastructure\n• Option A requires some management and continuous costs\n• Option C requires container orchestration\n• Option D requires manual intervention",
    "module": "Architecture Patterns",
    "multi": false,
    "why": [
      "S3/CloudFront for static content.",
      "API Gateway/Lambda for compute (scales automatically)",
      "DynamoDB for database (on-demand capacity)",
      "Zero operational overhead for infrastructure."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Requires some management and continuous costs."
      },
      {
        "l": [
          "C"
        ],
        "t": "Requires container orchestration."
      },
      {
        "l": [
          "D"
        ],
        "t": "Requires manual intervention."
      }
    ],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "12-2",
    "q": "A solutions architect is designing a highly available application that must survive the failure of an entire Availability Zone. The RTO requirement is less than 5 minutes. Which pattern should be implemented?",
    "options": {
      "A": "Single AZ deployment with automated backups",
      "B": "Multi-AZ deployment with Auto Scaling and Application Load Balancer",
      "C": "Cross-region replication with manual failover",
      "D": "Single region with daily snapshots"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Multi-AZ deployment provides automatic failover\n• ALB distributes traffic across AZs and health checks instances\n• Auto Scaling replaces failed instances automatically\n• Meets < 5 minute RTO requirement\n• Option A doesn't protect against AZ failure\n• Option C has longer RTO (manual failover)\n• Option D doesn't provide HA",
    "module": "Architecture Patterns",
    "multi": false,
    "why": [
      "ALB distributes traffic across AZs and health checks instances.",
      "Auto Scaling replaces failed instances automatically.",
      "Meets < 5 minute RTO requirement."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Doesn't protect against AZ failure."
      },
      {
        "l": [
          "C"
        ],
        "t": "Has longer RTO (manual failover)"
      },
      {
        "l": [
          "D"
        ],
        "t": "Doesn't provide HA."
      }
    ],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "12-3",
    "q": "A company wants to implement a disaster recovery solution for their production database. They can tolerate a 1-hour data loss (RPO) and 4-hour recovery time (RTO). Which DR strategy is MOST cost-effective?",
    "options": {
      "A": "Multi-site active-active",
      "B": "Warm standby",
      "C": "Pilot light",
      "D": "Backup and restore"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Pilot light maintains core services (like database replication)\n• RPO: Minutes (database replication lag)\n• RTO: Hours (time to scale up remaining services)\n• More cost-effective than warm standby\n• Meets the 1-hour RPO and 4-hour RTO requirements\n• Multi-site is expensive and over-engineered\n• Warm standby costs more than necessary\n• Backup and restore may not meet RPO/RTO",
    "module": "Architecture Patterns",
    "multi": false,
    "why": [
      "RPO: Minutes (database replication lag)",
      "RTO: Hours (time to scale up remaining services)",
      "More cost-effective than warm standby.",
      "Meets the 1-hour RPO and 4-hour RTO requirements.",
      "Multi-site is expensive and over-engineered.",
      "Warm standby costs more than necessary.",
      "Backup and restore may not meet RPO/RTO."
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "12-4",
    "q": "An application experiences high database read load. The data is read frequently but rarely updated. Which caching strategy should be implemented to reduce database load?",
    "options": {
      "A": "Write-through caching",
      "B": "Cache-aside (Lazy Loading) with ElastiCache",
      "C": "Database connection pooling only",
      "D": "Increase database instance size"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Cache-aside pattern is ideal for read-heavy workloads\n• Application checks cache first, loads from DB if cache miss\n• ElastiCache (Redis/Memcached) reduces database load\n• Cost-effective solution\n• Write-through is better for write-heavy workloads\n• Connection pooling helps but doesn't cache data\n• Scaling database is more expensive",
    "module": "Architecture Patterns",
    "multi": false,
    "why": [
      "Cache-aside pattern is ideal for read-heavy workloads.",
      "Application checks cache first, loads from DB if cache miss.",
      "ElastiCache (Redis/Memcached) reduces database load.",
      "Cost-effective solution.",
      "Write-through is better for write-heavy workloads.",
      "Connection pooling helps but doesn't cache data.",
      "Scaling database is more expensive."
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "12-5",
    "q": "A company is building a microservices architecture and needs to decouple services to handle traffic spikes without losing messages. Which AWS service pattern should be used?",
    "options": {
      "A": "Direct API calls between services",
      "B": "SQS queues between services",
      "C": "Shared database between services",
      "D": "File-based communication via S3"
    },
    "answer": [
      "B"
    ],
    "explanation": "• SQS provides loose coupling and buffering between services\n• Messages are persisted, not lost during traffic spikes\n• Services process at their own pace\n• Standard microservices pattern\n• Direct API calls create tight coupling\n• Shared database violates microservices principles\n• S3 file-based communication is inefficient for real-time",
    "module": "Architecture Patterns",
    "multi": false,
    "why": [
      "SQS provides loose coupling and buffering between services.",
      "Messages are persisted, not lost during traffic spikes.",
      "Services process at their own pace.",
      "Standard microservices pattern.",
      "Direct API calls create tight coupling.",
      "Shared database violates microservices principles.",
      "S3 file-based communication is inefficient for real-time."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "12-6",
    "q": "A solutions architect needs to design a system that processes events from multiple sources (S3, DynamoDB, custom applications) and routes them to different targets based on event content. Which service is MOST appropriate?",
    "options": {
      "A": "Amazon SQS",
      "B": "Amazon SNS",
      "C": "Amazon EventBridge",
      "D": "AWS Step Functions"
    },
    "answer": [
      "C"
    ],
    "explanation": "• EventBridge is an event bus for routing events\n• Supports multiple sources including AWS services and custom apps\n• Content-based filtering and routing\n• Built-in integration with 90+ AWS services\n• SQS is for point-to-point messaging\n• SNS is for pub/sub but limited filtering\n• Step Functions is for workflow orchestration",
    "module": "Architecture Patterns",
    "multi": false,
    "why": [
      "EventBridge is an event bus for routing events.",
      "Supports multiple sources including AWS services and custom apps.",
      "Content-based filtering and routing.",
      "Built-in integration with 90+ AWS services.",
      "SQS is for point-to-point messaging.",
      "SNS is for pub/sub but limited filtering.",
      "Step Functions is for workflow orchestration."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "12-7",
    "q": "A company wants to minimize costs for a batch processing workload that runs nightly and can tolerate interruptions. Which compute option should be used?",
    "options": {
      "A": "On-Demand EC2 instances",
      "B": "Reserved Instances",
      "C": "Spot Instances",
      "D": "Dedicated Hosts"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Spot Instances can save up to 90% compared to On-Demand\n• Batch processing is fault-tolerant (can handle interruptions)\n• Can checkpoint progress and resume\n• Most cost-effective for this use case\n• On-Demand is more expensive\n• Reserved requires 1-3 year commitment\n• Dedicated Hosts are most expensive",
    "module": "Architecture Patterns",
    "multi": false,
    "why": [
      "Batch processing is fault-tolerant (can handle interruptions)",
      "Can checkpoint progress and resume.",
      "Most cost-effective for this use case.",
      "On-Demand is more expensive.",
      "Reserved requires 1-3 year commitment.",
      "Dedicated Hosts are most expensive."
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "12-8",
    "q": "An application requires sub-millisecond latency for database queries. The data is accessed in a key-value pattern. Which database solution should be used?",
    "options": {
      "A": "Amazon RDS with read replicas",
      "B": "DynamoDB with DAX (DynamoDB Accelerator)",
      "C": "Amazon Aurora",
      "D": "Amazon Redshift"
    },
    "answer": [
      "B"
    ],
    "explanation": "• DAX provides microsecond latency for DynamoDB\n• In-memory cache specifically for DynamoDB\n• Key-value access pattern is perfect for DynamoDB\n• Meets sub-millisecond requirement\n• RDS/Aurora have millisecond latency\n• Redshift is for analytics, not operational workloads",
    "module": "Architecture Patterns",
    "multi": false,
    "why": [
      "DAX provides microsecond latency for DynamoDB.",
      "In-memory cache specifically for DynamoDB.",
      "Key-value access pattern is perfect for DynamoDB.",
      "Meets sub-millisecond requirement.",
      "RDS/Aurora have millisecond latency.",
      "Redshift is for analytics, not operational workloads."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "12-9",
    "q": "A global application needs to serve static content with the lowest possible latency worldwide. Which architecture should be implemented?",
    "options": {
      "A": "EC2 instances in multiple regions",
      "B": "S3 with CloudFront distribution",
      "C": "S3 with Cross-Region Replication",
      "D": "ALB in multiple regions"
    },
    "answer": [
      "B"
    ],
    "explanation": "• CloudFront is a CDN with 400+ edge locations globally\n• Caches content close to users worldwide\n• S3 origin for static content\n• Lowest latency for global distribution\n• EC2 requires management and doesn't cache at edge\n• CRR helps availability but doesn't reduce latency\n• ALB doesn't provide edge caching",
    "module": "Architecture Patterns",
    "multi": false,
    "why": [
      "CloudFront is a CDN with 400+ edge locations globally.",
      "Caches content close to users worldwide.",
      "S3 origin for static content.",
      "Lowest latency for global distribution.",
      "EC2 requires management and doesn't cache at edge.",
      "CRR helps availability but doesn't reduce latency.",
      "ALB doesn't provide edge caching."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "12-10",
    "q": "A three-tier web application has presentation, application, and database tiers. The database contains sensitive customer data. How should the tiers be deployed for security?",
    "options": {
      "A": "All tiers in public subnets",
      "B": "All tiers in private subnets",
      "C": "Presentation in public, application and database in private subnets",
      "D": "Presentation and application in public, database in private subnet"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Presentation tier (web servers) needs internet access - public subnet\n• Application tier doesn't need direct internet access - private subnet\n• Database tier must be isolated - private subnet\n• Follows defense-in-depth security principle\n• Application tier accesses internet via NAT Gateway\n• Database has no internet access\n• Minimizes attack surface",
    "module": "Architecture Patterns",
    "multi": false,
    "why": [
      "Presentation tier (web servers) needs internet access - public subnet.",
      "Application tier doesn't need direct internet access - private subnet.",
      "Database tier must be isolated - private subnet.",
      "Follows defense-in-depth security principle.",
      "Application tier accesses internet via NAT Gateway.",
      "Database has no internet access.",
      "Minimizes attack surface."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "12-11",
    "q": "A company needs to orchestrate a complex workflow with multiple Lambda functions, error handling, and retry logic. Which service should be used?",
    "options": {
      "A": "EventBridge",
      "B": "SNS with Lambda subscriptions",
      "C": "AWS Step Functions",
      "D": "SQS with Lambda triggers"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Step Functions orchestrates workflows with state machines\n• Built-in error handling and retry logic\n• Visual workflow designer\n• Integrates with Lambda and other AWS services\n• Best for complex, multi-step workflows\n• EventBridge routes events but doesn't orchestrate\n• SNS/SQS don't provide workflow orchestration",
    "module": "Architecture Patterns",
    "multi": false,
    "why": [
      "Step Functions orchestrates workflows with state machines.",
      "Built-in error handling and retry logic.",
      "Visual workflow designer.",
      "Integrates with Lambda and other AWS services.",
      "Best for complex, multi-step workflows.",
      "EventBridge routes events but doesn't orchestrate.",
      "SNS/SQS don't provide workflow orchestration."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "12-12",
    "q": "An application deployed across multiple regions needs a database that supports multi-region writes with automatic conflict resolution. Which database should be used?",
    "options": {
      "A": "RDS with cross-region read replicas",
      "B": "Aurora Global Database",
      "C": "DynamoDB Global Tables",
      "D": "Redshift with cross-region snapshots"
    },
    "answer": [
      "C"
    ],
    "explanation": "• DynamoDB Global Tables support multi-region active-active writes\n• Automatic conflict resolution (last-writer-wins)\n• Multi-master replication\n• RDS replicas are read-only\n• Aurora Global Database has one primary region for writes\n• Redshift is for analytics, not multi-region writes",
    "module": "Architecture Patterns",
    "multi": false,
    "why": [
      "Automatic conflict resolution (last-writer-wins)",
      "Multi-master replication.",
      "RDS replicas are read-only.",
      "Aurora Global Database has one primary region for writes.",
      "Redshift is for analytics, not multi-region writes."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "12-13",
    "q": "A company wants to implement a pub/sub messaging pattern where multiple consumers receive the same message. Which service should be used?",
    "options": {
      "A": "Amazon SQS Standard Queue",
      "B": "Amazon SQS FIFO Queue",
      "C": "Amazon SNS",
      "D": "Amazon Kinesis Data Streams"
    },
    "answer": [
      "C"
    ],
    "explanation": "• SNS is publish-subscribe messaging service\n• One message published to topic, multiple subscribers receive it\n• Fan-out pattern\n• Classic pub/sub use case\n• SQS is point-to-point (one consumer per message)\n• Kinesis allows multiple consumers but is for streaming data",
    "module": "Architecture Patterns",
    "multi": false,
    "why": [
      "SNS is publish-subscribe messaging service.",
      "One message published to topic, multiple subscribers receive it.",
      "Fan-out pattern.",
      "Classic pub/sub use case.",
      "SQS is point-to-point (one consumer per message)",
      "Kinesis allows multiple consumers but is for streaming data."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "12-14",
    "q": "An application needs to process uploaded images: resize, apply filters, and update database. The processing can take several minutes. Which architecture ensures reliable processing?",
    "options": {
      "A": "API Gateway → Lambda (process synchronously)",
      "B": "API Gateway → Lambda → S3 → Lambda (triggered by S3) → DynamoDB",
      "C": "EC2 instances polling S3",
      "D": "Upload directly to EC2 for processing"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Upload triggers first Lambda to save to S3\n• S3 event triggers second Lambda for processing (asynchronous)\n• Decoupled, reliable processing\n• Lambda can run up to 15 minutes\n• Option A: API Gateway has 29-second timeout\n• Option C: Inefficient polling\n• Option D: No auto-scaling, not serverless",
    "module": "Architecture Patterns",
    "multi": false,
    "why": [
      "Upload triggers first Lambda to save to S3.",
      "S3 event triggers second Lambda for processing (asynchronous)",
      "Decoupled, reliable processing.",
      "Lambda can run up to 15 minutes."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "API Gateway has 29-second timeout."
      },
      {
        "l": [
          "C"
        ],
        "t": "Inefficient polling."
      },
      {
        "l": [
          "D"
        ],
        "t": "No auto-scaling, not serverless."
      }
    ],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "12-15",
    "q": "A financial application requires ACID transactions across multiple tables. The database must scale for read traffic. Which database solution should be used?",
    "options": {
      "A": "DynamoDB",
      "B": "Amazon Aurora with Read Replicas",
      "C": "Amazon Redshift",
      "D": "ElastiCache"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Aurora supports ACID transactions (relational database)\n• Read Replicas scale read traffic (up to 15 replicas)\n• Better performance than standard RDS\n• DynamoDB doesn't support traditional ACID across multiple items\n• Redshift is for analytics, not transactional workloads\n• ElastiCache is for caching, not primary database",
    "module": "Architecture Patterns",
    "multi": false,
    "why": [
      "Aurora supports ACID transactions (relational database)",
      "Read Replicas scale read traffic (up to 15 replicas)",
      "Better performance than standard RDS.",
      "DynamoDB doesn't support traditional ACID across multiple items.",
      "Redshift is for analytics, not transactional workloads.",
      "ElastiCache is for caching, not primary database."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "12-16",
    "q": "A company needs to ensure their web application can handle a sudden 10x traffic increase during product launches. Which architectural pattern should be implemented?",
    "options": {
      "A": "Static capacity with manual scaling",
      "B": "Auto Scaling with target tracking based on CPU utilization",
      "C": "Pre-warming with scheduled scaling",
      "D": "Serverless architecture with Lambda and DynamoDB on-demand"
    },
    "answer": [
      "D"
    ],
    "explanation": "• Serverless scales automatically without pre-warming\n• Lambda scales to thousands of concurrent executions\n• DynamoDB on-demand scales with traffic\n• No capacity planning required\n• Option A doesn't scale\n• Option B has lag time for scaling\n• Option C requires predicting launch time\n• Serverless handles unpredictable spikes best",
    "module": "Architecture Patterns",
    "multi": false,
    "why": [
      "Serverless scales automatically without pre-warming.",
      "Lambda scales to thousands of concurrent executions.",
      "DynamoDB on-demand scales with traffic.",
      "No capacity planning required.",
      "Serverless handles unpredictable spikes best."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Doesn't scale."
      },
      {
        "l": [
          "B"
        ],
        "t": "Has lag time for scaling."
      },
      {
        "l": [
          "C"
        ],
        "t": "Requires predicting launch time."
      }
    ],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "12-17",
    "q": "An application uses CloudFront, ALB, EC2, and RDS. Users in a specific region experience slow performance. What is the MOST likely cause and solution?",
    "options": {
      "A": "Increase EC2 instance size",
      "B": "Deploy application stack in the user's region with Route 53 latency-based routing",
      "C": "Enable CloudFront compression",
      "D": "Upgrade to Provisioned IOPS for RDS"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Regional deployment reduces latency for local users\n• Route 53 latency-based routing directs to nearest region\n• CloudFront caches static content but dynamic content goes to origin\n• Multi-region deployment needed for dynamic content\n• Increasing instance size doesn't reduce network latency\n• Compression helps but doesn't solve regional latency\n• IOPS doesn't affect network latency",
    "module": "Architecture Patterns",
    "multi": false,
    "why": [
      "Regional deployment reduces latency for local users.",
      "Route 53 latency-based routing directs to nearest region.",
      "CloudFront caches static content but dynamic content goes to origin.",
      "Multi-region deployment needed for dynamic content.",
      "Increasing instance size doesn't reduce network latency.",
      "Compression helps but doesn't solve regional latency.",
      "IOPS doesn't affect network latency."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "12-18",
    "q": "A company wants to implement defense-in-depth security for their web application. Which combination of services should be used?",
    "options": {
      "A": "Security Groups only",
      "B": "WAF + Shield + Security Groups + NACLs + KMS encryption",
      "C": "IAM policies and Security Groups",
      "D": "CloudFront with HTTPS only"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Defense-in-depth requires multiple security layers\n• WAF: Application layer protection (OWASP Top 10)\n• Shield: DDoS protection\n• Security Groups: Instance-level firewall\n• NACLs: Subnet-level firewall\n• KMS: Data encryption\n• Layered approach provides comprehensive security\n• Single layer security is insufficient",
    "module": "Architecture Patterns",
    "multi": false,
    "why": [
      "Defense-in-depth requires multiple security layers.",
      "WAF: Application layer protection (OWASP Top 10)",
      "Shield: DDoS protection.",
      "Security Groups: Instance-level firewall.",
      "NACLs: Subnet-level firewall.",
      "KMS: Data encryption.",
      "Layered approach provides comprehensive security.",
      "Single layer security is insufficient."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "12-19",
    "q": "A batch processing application needs to read messages from a queue, process them, and only delete messages after successful processing. Which service and pattern should be used?",
    "options": {
      "A": "SNS with immediate deletion",
      "B": "SQS with visibility timeout and explicit deletion",
      "C": "Kinesis with checkpointing",
      "D": "EventBridge with Lambda"
    },
    "answer": [
      "B"
    ],
    "explanation": "• SQS supports visibility timeout (hides message during processing)\n• Message only deleted after explicit DeleteMessage call\n• Ensures message not lost if processing fails\n• If processing fails, message becomes visible again\n• SNS doesn't persist messages\n• Kinesis is for streaming, not queue pattern\n• EventBridge doesn't provide message persistence",
    "module": "Architecture Patterns",
    "multi": false,
    "why": [
      "SQS supports visibility timeout (hides message during processing)",
      "Message only deleted after explicit DeleteMessage call.",
      "Ensures message not lost if processing fails.",
      "If processing fails, message becomes visible again.",
      "SNS doesn't persist messages.",
      "Kinesis is for streaming, not queue pattern.",
      "EventBridge doesn't provide message persistence."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "12-20",
    "q": "A company wants to optimize costs for a development environment that runs Monday-Friday, 9 AM-6 PM. The environment uses EC2, RDS, and NAT Gateway. What should be done?",
    "options": {
      "A": "Use Reserved Instances",
      "B": "Use Instance Scheduler to start/stop resources outside business hours",
      "C": "Migrate to Serverless",
      "D": "Use Spot Instances"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Instance Scheduler automatically starts/stops resources on schedule\n• Saves costs during nights and weekends (65% of week)\n• Works with EC2 and RDS\n• Reserved Instances require 1-3 year commitment, doesn't stop resources\n• Serverless may not support all workloads\n• Spot Instances can be interrupted during work hours\n• Scheduled stop/start is most cost-effective for dev environments",
    "module": "Architecture Patterns",
    "multi": false,
    "why": [
      "Instance Scheduler automatically starts/stops resources on schedule.",
      "Saves costs during nights and weekends (65% of week)",
      "Works with EC2 and RDS.",
      "Reserved Instances require 1-3 year commitment, doesn't stop resources.",
      "Serverless may not support all workloads.",
      "Spot Instances can be interrupted during work hours.",
      "Scheduled stop/start is most cost-effective for dev environments."
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "13-1",
    "q": "A company has a web application running on 20 EC2 instances that operate 24/7 with consistent usage. The instances have been running for 2 years and are expected to run for at least 2 more years. What is the MOST cost-effective pricing model?",
    "options": {
      "A": "On-Demand Instances",
      "B": "1-year Reserved Instances with No Upfront payment",
      "C": "3-year Reserved Instances with All Upfront payment",
      "D": "Spot Instances"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Steady-state workload running 24/7 is perfect for Reserved Instances\n• 3-year term provides highest discount (up to 72%)\n• All Upfront payment provides maximum savings\n• Expected to run 2+ years, so 3-year commitment is justified\n• On-Demand is most expensive\n• Spot Instances can be interrupted\n• 1-year RI provides lower discount than 3-year",
    "module": "Cost Optimization",
    "multi": false,
    "why": [
      "Steady-state workload running 24/7 is perfect for Reserved Instances.",
      "3-year term provides highest discount (up to 72%)",
      "All Upfront payment provides maximum savings.",
      "Expected to run 2+ years, so 3-year commitment is justified.",
      "On-Demand is most expensive.",
      "Spot Instances can be interrupted.",
      "1-year RI provides lower discount than 3-year."
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "13-2",
    "q": "A company runs batch processing jobs that can be interrupted and resumed without data loss. The jobs run for 4-6 hours daily. What is the MOST cost-effective compute option?",
    "options": {
      "A": "On-Demand Instances",
      "B": "Reserved Instances",
      "C": "Spot Instances",
      "D": "Dedicated Hosts"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Spot Instances provide up to 90% savings vs On-Demand\n• Batch processing is fault-tolerant (can handle interruptions)\n• Jobs can checkpoint and resume\n• Perfect use case for Spot\n• On-Demand is too expensive\n• Reserved requires commitment (not needed for 4-6 hours daily)\n• Dedicated Hosts are most expensive",
    "module": "Cost Optimization",
    "multi": false,
    "why": [
      "Batch processing is fault-tolerant (can handle interruptions)",
      "Jobs can checkpoint and resume.",
      "Perfect use case for Spot.",
      "On-Demand is too expensive.",
      "Reserved requires commitment (not needed for 4-6 hours daily)",
      "Dedicated Hosts are most expensive."
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "13-3",
    "q": "A solutions architect needs to reduce S3 storage costs for 500 TB of log data. Logs older than 30 days are rarely accessed but must be retained for 7 years for compliance. What should be done?",
    "options": {
      "A": "Keep all data in S3 Standard",
      "B": "Use S3 lifecycle policies to transition data to S3 Glacier Deep Archive after 30 days",
      "C": "Delete logs after 30 days",
      "D": "Use S3 Intelligent-Tiering for all data"
    },
    "answer": [
      "B"
    ],
    "explanation": "• S3 Glacier Deep Archive is cheapest storage class ($0.00099/GB/month)\n• Lifecycle policies automatically transition objects\n• Meets 7-year retention requirement\n• Transition after 30 days when access becomes rare\n• S3 Standard costs $0.023/GB/month (23x more expensive)\n• Deleting violates compliance\n• Intelligent-Tiering costs more than Glacier Deep Archive\nSavings: 500 TB × ($0.023 - $0.00099) × 12 months = ~$132,000/year",
    "module": "Cost Optimization",
    "multi": false,
    "why": [
      "S3 Glacier Deep Archive is cheapest storage class ($0.00099/GB/month)",
      "Lifecycle policies automatically transition objects.",
      "Meets 7-year retention requirement.",
      "Transition after 30 days when access becomes rare.",
      "S3 Standard costs $0.023/GB/month (23x more expensive)",
      "Deleting violates compliance.",
      "Intelligent-Tiering costs more than Glacier Deep Archive.",
      "Savings: 500 TB × ($0.023 - $0.00099) × 12 months = ~$132,000/year."
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "13-4",
    "q": "An application uses a mix of EC2 instances (different families and sizes) across multiple regions, along with Fargate and Lambda. The usage is steady and predictable. Which pricing model provides the MOST flexibility and savings?",
    "options": {
      "A": "EC2 Reserved Instances",
      "B": "Compute Savings Plans",
      "C": "EC2 Instance Savings Plans",
      "D": "On-Demand Instances"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Compute Savings Plans apply to EC2, Fargate, and Lambda\n• Most flexible (any instance family, region, size)\n• Up to 66% discount\n• Automatically applies to eligible usage\n• EC2 RIs only cover EC2, not Fargate/Lambda\n• EC2 Instance Savings Plans limited to specific instance family\n• On-Demand provides no discount",
    "module": "Cost Optimization",
    "multi": false,
    "why": [
      "Most flexible (any instance family, region, size)",
      "Up to 66% discount.",
      "Automatically applies to eligible usage.",
      "EC2 RIs only cover EC2, not Fargate/Lambda.",
      "EC2 Instance Savings Plans limited to specific instance family.",
      "On-Demand provides no discount."
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "13-5",
    "q": "A company wants to identify which EC2 instances are underutilized and could be downsized to reduce costs. Which AWS tool provides this recommendation?",
    "options": {
      "A": "AWS Budgets",
      "B": "AWS Cost Explorer with Right-Sizing Recommendations",
      "C": "AWS Trusted Advisor",
      "D": "Both B and C"
    },
    "answer": [
      "D"
    ],
    "explanation": "• Cost Explorer provides right-sizing recommendations\n• Trusted Advisor also provides underutilized instance recommendations\n• Both analyze CloudWatch metrics (CPU, memory, network)\n• Both suggest smaller instance types and estimate savings\n• Budgets sets spending limits but doesn't analyze utilization\n• Using both tools provides comprehensive insights",
    "module": "Cost Optimization",
    "multi": false,
    "why": [
      "Cost Explorer provides right-sizing recommendations.",
      "Trusted Advisor also provides underutilized instance recommendations.",
      "Both analyze CloudWatch metrics (CPU, memory, network)",
      "Both suggest smaller instance types and estimate savings.",
      "Budgets sets spending limits but doesn't analyze utilization.",
      "Using both tools provides comprehensive insights."
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "13-6",
    "q": "A development team runs EC2 instances Monday-Friday, 9 AM-6 PM. The instances sit idle outside business hours. What is the MOST cost-effective approach?",
    "options": {
      "A": "Use Reserved Instances",
      "B": "Use Spot Instances",
      "C": "Use Instance Scheduler to automatically stop instances outside business hours",
      "D": "Manually stop instances daily"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Instance Scheduler automates start/stop based on schedules\n• Running only 45 hours/week instead of 168 hours saves ~73%\n• No manual intervention required\n• Reserved Instances charge 24/7 whether running or not\n• Spot Instances could be interrupted during work hours\n• Manual stopping is error-prone and requires effort\nSavings: Running 45/168 hours = 73% time savings",
    "module": "Cost Optimization",
    "multi": false,
    "why": [
      "Instance Scheduler automates start/stop based on schedules.",
      "Running only 45 hours/week instead of 168 hours saves ~73%.",
      "No manual intervention required.",
      "Reserved Instances charge 24/7 whether running or not.",
      "Spot Instances could be interrupted during work hours.",
      "Manual stopping is error-prone and requires effort.",
      "Savings: Running 45/168 hours = 73% time savings."
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "13-7",
    "q": "A company has multiple AWS accounts and wants to get volume discounts and consolidated billing. What should they implement?",
    "options": {
      "A": "AWS Budgets",
      "B": "AWS Cost Explorer",
      "C": "AWS Organizations with consolidated billing",
      "D": "AWS Marketplace"
    },
    "answer": [
      "C"
    ],
    "explanation": "• AWS Organizations enables consolidated billing\n• Combines usage across all accounts for volume discounts\n• Single bill for all accounts\n• Shared Reserved Instances and Savings Plans\n• Cost Explorer and Budgets are reporting tools\n• Marketplace is for purchasing software",
    "module": "Cost Optimization",
    "multi": false,
    "why": [
      "AWS Organizations enables consolidated billing.",
      "Combines usage across all accounts for volume discounts.",
      "Single bill for all accounts.",
      "Shared Reserved Instances and Savings Plans.",
      "Cost Explorer and Budgets are reporting tools.",
      "Marketplace is for purchasing software."
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "13-8",
    "q": "An application stores 1 PB of data in S3 with unpredictable access patterns. Some objects are accessed frequently, others rarely. What is the MOST cost-effective storage solution?",
    "options": {
      "A": "S3 Standard for all objects",
      "B": "S3 Intelligent-Tiering",
      "C": "Manually move objects to different storage classes",
      "D": "S3 Glacier for all objects"
    },
    "answer": [
      "B"
    ],
    "explanation": "• S3 Intelligent-Tiering automatically moves objects between access tiers\n• Optimizes costs without manual intervention\n• Monitoring fee: $0.0025/1000 objects\n• No retrieval fees for Frequent/Infrequent tiers\n• S3 Standard wastes money on infrequently accessed data\n• Manual management is operationally intensive\n• Glacier has retrieval delays for frequent access",
    "module": "Cost Optimization",
    "multi": false,
    "why": [
      "Optimizes costs without manual intervention.",
      "Monitoring fee: $0.0025/1000 objects.",
      "No retrieval fees for Frequent/Infrequent tiers.",
      "S3 Standard wastes money on infrequently accessed data.",
      "Manual management is operationally intensive.",
      "Glacier has retrieval delays for frequent access."
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "13-9",
    "q": "A company wants to forecast their AWS costs for the next 6 months based on current usage trends. Which tool should they use?",
    "options": {
      "A": "AWS Budgets",
      "B": "AWS Cost Explorer with forecasting",
      "C": "AWS Trusted Advisor",
      "D": "AWS Cost and Usage Report"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Cost Explorer provides cost forecasting up to 12 months\n• Based on historical usage patterns\n• Interactive graphs showing predictions\n• 80% confidence interval\n• Budgets sets alerts but doesn't forecast\n• Trusted Advisor provides recommendations\n• Cost and Usage Report is for detailed analysis",
    "module": "Cost Optimization",
    "multi": false,
    "why": [
      "Cost Explorer provides cost forecasting up to 12 months.",
      "Based on historical usage patterns.",
      "Interactive graphs showing predictions.",
      "80% confidence interval.",
      "Budgets sets alerts but doesn't forecast.",
      "Trusted Advisor provides recommendations.",
      "Cost and Usage Report is for detailed analysis."
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "13-10",
    "q": "A company has 50 m5.large instances running continuously in us-east-1 with consistent usage. They want to purchase Reserved Instances. What type provides the highest discount?",
    "options": {
      "A": "Standard RI, 1-year, No Upfront",
      "B": "Standard RI, 3-year, All Upfront",
      "C": "Convertible RI, 3-year, All Upfront",
      "D": "Convertible RI, 1-year, Partial Upfront"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Standard RIs provide higher discount than Convertible (up to 72%)\n• 3-year term provides higher discount than 1-year\n• All Upfront payment provides highest discount\n• Consistent usage makes 3-year commitment viable\n• Convertible RIs have lower discount (up to 54%)\n• Partial/No Upfront have lower discounts",
    "module": "Cost Optimization",
    "multi": false,
    "why": [
      "Standard RIs provide higher discount than Convertible (up to 72%)",
      "3-year term provides higher discount than 1-year.",
      "All Upfront payment provides highest discount.",
      "Consistent usage makes 3-year commitment viable.",
      "Convertible RIs have lower discount (up to 54%)",
      "Partial/No Upfront have lower discounts."
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "13-11",
    "q": "An RDS database runs continuously but only needs Multi-AZ during business hours for high availability. How can costs be optimized?",
    "options": {
      "A": "This is not possible; Multi-AZ cannot be toggled",
      "B": "Disable Multi-AZ outside business hours, re-enable during business hours",
      "C": "Use Aurora Serverless",
      "D": "Use read replicas instead of Multi-AZ"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Multi-AZ can be enabled/disabled (causes brief downtime)\n• For non-production databases, can disable outside business hours\n• Reduces costs by ~50% when disabled\n• Can be scripted/automated with Lambda\n• Aurora Serverless has different use case\n• Read replicas don't provide automatic failover\nNote: This is only suitable for non-production workloads",
    "module": "Cost Optimization",
    "multi": false,
    "why": [
      "Multi-AZ can be enabled/disabled (causes brief downtime)",
      "For non-production databases, can disable outside business hours.",
      "Reduces costs by ~50% when disabled.",
      "Can be scripted/automated with Lambda.",
      "Aurora Serverless has different use case.",
      "Read replicas don't provide automatic failover.",
      "Note: This is only suitable for non-production workloads."
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "13-12",
    "q": "A company wants to track costs by department (Engineering, Marketing, Finance). How should they implement this?",
    "options": {
      "A": "Create separate AWS accounts for each department",
      "B": "Use Cost Allocation Tags and activate them in the Billing console",
      "C": "Use different regions for each department",
      "D": "Create separate VPCs for each department"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Cost Allocation Tags enable tracking costs by custom dimensions\n• Tag resources with \"Department\" key and values\n• Activate tags in Billing console to appear in reports\n• View costs grouped by department in Cost Explorer\n• Separate accounts add management overhead\n• Regions don't affect cost tracking\n• VPCs don't enable cost tracking",
    "module": "Cost Optimization",
    "multi": false,
    "why": [
      "Cost Allocation Tags enable tracking costs by custom dimensions.",
      "Tag resources with \"Department\" key and values.",
      "Activate tags in Billing console to appear in reports.",
      "View costs grouped by department in Cost Explorer.",
      "Separate accounts add management overhead.",
      "Regions don't affect cost tracking.",
      "VPCs don't enable cost tracking."
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "13-13",
    "q": "A Lambda function is configured with 3008 MB memory but only uses 512 MB. The function runs 10 million times per month. What should be done to optimize costs?",
    "options": {
      "A": "Increase memory to 10 GB",
      "B": "Reduce memory allocation to 512 MB",
      "C": "Switch to EC2",
      "D": "Keep current configuration"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Lambda charges based on GB-seconds (memory × duration)\n• Allocating 3008 MB when only 512 MB is used wastes money\n• Reducing to 512 MB reduces costs ~6x\n• Right-sizing memory is critical for Lambda cost optimization\n• Increasing memory increases costs\n• EC2 adds operational overhead\n• Current configuration is wasteful\nCalculation: 3008 MB vs 512 MB = 5.86x cost reduction",
    "module": "Cost Optimization",
    "multi": false,
    "why": [
      "Lambda charges based on GB-seconds (memory × duration)",
      "Allocating 3008 MB when only 512 MB is used wastes money.",
      "Reducing to 512 MB reduces costs ~6x.",
      "Right-sizing memory is critical for Lambda cost optimization.",
      "Increasing memory increases costs.",
      "EC2 adds operational overhead.",
      "Current configuration is wasteful.",
      "Calculation: 3008 MB vs 512 MB = 5.86x cost reduction."
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "13-14",
    "q": "A company has Reserved Instances that are expiring soon. They want to know if they should renew. Which Cost Explorer feature helps with this decision?",
    "options": {
      "A": "Cost forecasting",
      "B": "Reserved Instance Utilization report",
      "C": "Right-sizing recommendations",
      "D": "Savings Plans recommendations"
    },
    "answer": [
      "B"
    ],
    "explanation": "• RI Utilization report shows how much Reserved capacity is used\n• High utilization (>80%) indicates RI should be renewed\n• Low utilization suggests downsizing or not renewing\n• Also shows RI Coverage (what % of usage is covered)\n• Cost forecasting predicts future costs\n• Right-sizing is for instance size optimization\n• Savings Plans recommendations compare to RIs",
    "module": "Cost Optimization",
    "multi": false,
    "why": [
      "RI Utilization report shows how much Reserved capacity is used.",
      "High utilization (>80%) indicates RI should be renewed.",
      "Low utilization suggests downsizing or not renewing.",
      "Also shows RI Coverage (what % of usage is covered)",
      "Cost forecasting predicts future costs.",
      "Right-sizing is for instance size optimization.",
      "Savings Plans recommendations compare to RIs."
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "13-15",
    "q": "Data transfer costs are high for a web application serving static content globally. How can data transfer costs be reduced?",
    "options": {
      "A": "Use S3 Transfer Acceleration",
      "B": "Use CloudFront as a CDN",
      "C": "Move data to Glacier",
      "D": "Use larger EC2 instances"
    },
    "answer": [
      "B"
    ],
    "explanation": "• CloudFront reduces data transfer from origin\n• Caches content at edge locations globally\n• Data transfer from CloudFront to users is cheaper than from EC2/S3\n• Free data transfer from S3/EC2 to CloudFront\n• S3 Transfer Acceleration accelerates uploads, doesn't reduce costs\n• Glacier is for archival, not active content\n• Instance size doesn't affect transfer costs",
    "module": "Cost Optimization",
    "multi": false,
    "why": [
      "CloudFront reduces data transfer from origin.",
      "Caches content at edge locations globally.",
      "Data transfer from CloudFront to users is cheaper than from EC2/S3.",
      "Free data transfer from S3/EC2 to CloudFront.",
      "S3 Transfer Acceleration accelerates uploads, doesn't reduce costs.",
      "Glacier is for archival, not active content.",
      "Instance size doesn't affect transfer costs."
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "13-16",
    "q": "A company wants to set a budget of $10,000/month and receive alerts at 80% and 100% of budget. Which service should be used?",
    "options": {
      "A": "AWS Cost Explorer",
      "B": "AWS Budgets",
      "C": "CloudWatch Alarms",
      "D": "AWS Trusted Advisor"
    },
    "answer": [
      "B"
    ],
    "explanation": "• AWS Budgets creates custom cost and usage budgets\n• Set thresholds (80%, 100%) for alerts\n• Sends SNS notifications when thresholds are exceeded\n• Can set monthly, quarterly, or annual budgets\n• Cost Explorer analyzes costs but doesn't alert\n• CloudWatch monitors resources, not costs\n• Trusted Advisor provides recommendations",
    "module": "Cost Optimization",
    "multi": false,
    "why": [
      "Set thresholds (80%, 100%) for alerts.",
      "Sends SNS notifications when thresholds are exceeded.",
      "Can set monthly, quarterly, or annual budgets.",
      "Cost Explorer analyzes costs but doesn't alert.",
      "CloudWatch monitors resources, not costs.",
      "Trusted Advisor provides recommendations."
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "13-17",
    "q": "A company has a mix of Convertible and Standard Reserved Instances. They want to change instance families due to application changes. Which RIs can be modified?",
    "options": {
      "A": "Only Standard RIs",
      "B": "Only Convertible RIs",
      "C": "Both can be modified",
      "D": "Neither can be modified"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Convertible RIs can change instance family, OS, and tenancy\n• Provides flexibility for changing requirements\n• Standard RIs cannot change instance family\n• Standard RIs can only change instance size within same family\n• Trade-off: Convertible RIs have lower discount (54% vs 72%)",
    "module": "Cost Optimization",
    "multi": false,
    "why": [
      "Convertible RIs can change instance family, OS, and tenancy.",
      "Provides flexibility for changing requirements.",
      "Standard RIs cannot change instance family.",
      "Standard RIs can only change instance size within same family.",
      "Trade-off: Convertible RIs have lower discount (54% vs 72%)"
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "13-18",
    "q": "A database requires 3000 IOPS consistently. Currently using GP3 with 16,000 IOPS provisioned. What should be done to optimize costs?",
    "options": {
      "A": "Switch to GP2",
      "B": "Reduce provisioned IOPS to 3000 on GP3",
      "C": "Switch to Magnetic storage",
      "D": "Keep current configuration"
    },
    "answer": [
      "B"
    ],
    "explanation": "• GP3 allows independent provisioning of IOPS\n• Reduce from 16,000 to 3,000 IOPS to reduce costs\n• Still provides required performance\n• GP2 IOPS scale with volume size (less flexible)\n• Magnetic storage has unpredictable performance\n• Current configuration over-provisions by 5x",
    "module": "Cost Optimization",
    "multi": false,
    "why": [
      "GP3 allows independent provisioning of IOPS.",
      "Reduce from 16,000 to 3,000 IOPS to reduce costs.",
      "Still provides required performance.",
      "GP2 IOPS scale with volume size (less flexible)",
      "Magnetic storage has unpredictable performance.",
      "Current configuration over-provisions by 5x."
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "13-19",
    "q": "A company wants to identify unused EBS volumes and old snapshots to reduce costs. Which tools can help?",
    "options": {
      "A": "AWS Trusted Advisor only",
      "B": "AWS Cost Explorer only",
      "C": "Both Trusted Advisor and custom scripts/AWS Config",
      "D": "AWS Budgets"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Trusted Advisor identifies unattached EBS volumes\n• Custom scripts can identify old snapshots\n• AWS Config Rules can detect unattached volumes\n• Combine multiple approaches for comprehensive cleanup\n• Cost Explorer shows costs but doesn't identify unused resources\n• Budgets sets limits but doesn't identify waste",
    "module": "Cost Optimization",
    "multi": false,
    "why": [
      "Trusted Advisor identifies unattached EBS volumes.",
      "Custom scripts can identify old snapshots.",
      "AWS Config Rules can detect unattached volumes.",
      "Combine multiple approaches for comprehensive cleanup.",
      "Cost Explorer shows costs but doesn't identify unused resources.",
      "Budgets sets limits but doesn't identify waste."
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "13-20",
    "q": "A company runs a web application with unpredictable traffic that can spike 10x instantly. They want to minimize costs while ensuring performance. What architecture should be used?",
    "options": {
      "A": "Fixed number of EC2 On-Demand instances",
      "B": "EC2 Auto Scaling with target tracking + Spot Instances",
      "C": "Large Reserved Instances",
      "D": "Manual scaling with CloudWatch alarms"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Auto Scaling automatically adjusts capacity based on demand\n• Target tracking scales based on metrics (CPU, requests, etc.)\n• Spot Instances reduce costs (up to 90%) for scale-out capacity\n• Can combine On-Demand (baseline) + Spot (spikes)\n• Fixed capacity wastes money during low traffic\n• Reserved Instances charge for capacity even if unused\n• Manual scaling is slow and error-prone",
    "module": "Cost Optimization",
    "multi": false,
    "why": [
      "Auto Scaling automatically adjusts capacity based on demand.",
      "Target tracking scales based on metrics (CPU, requests, etc.)",
      "Spot Instances reduce costs (up to 90%) for scale-out capacity.",
      "Can combine On-Demand (baseline) + Spot (spikes)",
      "Fixed capacity wastes money during low traffic.",
      "Reserved Instances charge for capacity even if unused.",
      "Manual scaling is slow and error-prone."
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "14-1",
    "q": "An Auto Scaling group isn't responding to CloudWatch alarms despite the alarm firing. What's the most likely cause?",
    "options": {
      "A": "Wrong CloudWatch metric configured",
      "B": "The Auto Scaling group is in cooldown period",
      "C": "Minimum size of ASG is 0",
      "D": "Desired size of ASG is 0"
    },
    "answer": [
      "B"
    ],
    "explanation": "Cooldown periods suppress scaling actions to let metrics stabilize after a scaling event.",
    "module": "Compute",
    "multi": false,
    "why": [
      "Cooldown periods suppress scaling actions to let metrics stabilize after a scaling event."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "14-2",
    "q": "You need to upgrade one EC2 instance in an ASG without receiving traffic. What should you do?",
    "options": {
      "A": "Hibernate the instance",
      "B": "Use cooldown timers",
      "C": "Put instance in Standby, upgrade, return to InService",
      "D": "Use lifecycle hooks"
    },
    "answer": [
      "C"
    ],
    "explanation": "Standby detaches from load balancing while retaining in ASG, preventing replacement.",
    "module": "Compute",
    "multi": false,
    "why": [
      "Standby detaches from load balancing while retaining in ASG, preventing replacement."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "14-3",
    "q": "How do you achieve WORM (Write Once Read Many) in S3?",
    "options": {
      "A": "Enable versioning",
      "B": "Enable Object Lock at bucket creation",
      "C": "Use S3 Glacier",
      "D": "Configure bucket policy"
    },
    "answer": [
      "B"
    ],
    "explanation": "Object Lock enforces WORM with retention periods; must be enabled at bucket creation.",
    "module": "Storage",
    "multi": false,
    "why": [
      "Object Lock enforces WORM with retention periods.",
      "Must be enabled at bucket creation."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "14-4",
    "q": "After deleting an S3 object (no versioning), what do you see immediately in a list-objects call?",
    "options": {
      "A": "Object still appears",
      "B": "Object is deleted",
      "C": "May appear or not depending on consistency",
      "D": "Object has a delete marker"
    },
    "answer": [
      "B"
    ],
    "explanation": "S3 provides strong consistency; object disappears immediately after successful delete.",
    "module": "Storage",
    "multi": false,
    "why": [
      "S3 provides strong consistency.",
      "Object disappears immediately after successful delete."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "14-5",
    "q": "What VPC feature provides private connectivity to S3 and DynamoDB without cost?",
    "options": {
      "A": "NAT Gateway",
      "B": "VPC Peering",
      "C": "Gateway Endpoints",
      "D": "Interface Endpoints"
    },
    "answer": [
      "C"
    ],
    "explanation": "Gateway endpoints for S3/DynamoDB are free and route-table based.",
    "module": "Networking",
    "multi": false,
    "why": [
      "Gateway VPC Endpoints for Amazon S3 and Amazon DynamoDB are completely free and use VPC route tables.",
      "NAT Gateway and Interface Endpoints incur hourly and per-GB data processing charges."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "14-6",
    "q": "Internet-facing ALB requests fail despite healthy targets. What's likely wrong?",
    "options": {
      "A": "ALB subnet route table lacks IGW route",
      "B": "Targets in public subnet",
      "C": "ALB has no Elastic IP",
      "D": "Cross-zone LB disabled"
    },
    "answer": [
      "A"
    ],
    "explanation": "ALB must be in public subnets with 0.0.0.0/0 → IGW route.",
    "module": "Networking",
    "multi": false,
    "why": [
      "ALB must be in public subnets with 0.0.0.0/0 → IGW route."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "14-7",
    "q": "Your read-heavy app hits 100% CPU on RDS. What helps scale reads? (Choose 3)",
    "options": {
      "A": "Add Read Replicas",
      "B": "Enable Storage Auto Scaling",
      "C": "Use SQS to throttle",
      "D": "Use ElastiCache",
      "E": "Shard across multiple RDS instances",
      "F": "Enable Multi-AZ"
    },
    "answer": [
      "A",
      "D",
      "E"
    ],
    "explanation": "Read replicas, caching, and sharding all reduce read load on primary.",
    "module": "Database",
    "multi": true,
    "why": [
      "Read replicas, caching, and sharding all reduce read load on primary."
    ],
    "others": [],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "14-8",
    "q": "Multi-AZ RDS deployment provides:",
    "options": {
      "A": "Read scaling",
      "B": "Automatic failover for high availability",
      "C": "Cross-region disaster recovery",
      "D": "Cost optimization"
    },
    "answer": [
      "B"
    ],
    "explanation": "Multi-AZ maintains synchronous standby for automatic failover, not for reads.",
    "module": "Database",
    "multi": false,
    "why": [
      "Multi-AZ maintains synchronous standby for automatic failover, not for reads."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "14-9",
    "q": "Lambda needs to write CloudWatch Logs. Which permissions required? (Choose 3)",
    "options": {
      "A": "logs:CreateLogGroup",
      "B": "logs:GetLogEvents",
      "C": "logs:CreateLogStream",
      "D": "logs:DescribeLogStreams",
      "E": "logs:PutLogEvents"
    },
    "answer": [
      "A",
      "C",
      "E"
    ],
    "explanation": "Lambda runtime needs all three to create log groups, streams, and write events.",
    "module": "Application Integration",
    "multi": true,
    "why": [
      "Lambda runtime needs all three to create log groups, streams, and write events."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "14-10",
    "q": "Which ECS networking mode provides task-level security groups?",
    "options": {
      "A": "Host",
      "B": "Bridge",
      "C": "awsvpc",
      "D": "Default"
    },
    "answer": [
      "C"
    ],
    "explanation": "awsvpc gives each task its own ENI, enabling task-level security groups.",
    "module": "Application Integration",
    "multi": false,
    "why": [
      "The awsvpc network mode allocates a dedicated Elastic Network Interface (ENI) to each ECS task, enabling task-level Security Groups.",
      "Bridge and Host modes share the underlying EC2 instance network namespace and security groups."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "14-11",
    "q": "How do you restrict S3 bucket access to specific IAM roles only?",
    "options": {
      "A": "Bucket policy with explicit deny for all except listed roles",
      "B": "Bucket policy with explicit deny for all users except listed",
      "C": "Bucket policy allowing only specific role; users assume role",
      "D": "Bucket policy with NotPrincipal"
    },
    "answer": [
      "C"
    ],
    "explanation": "Grant bucket access to a role; users authenticate then assume that role.",
    "module": "Security",
    "multi": false,
    "why": [
      "Grant bucket access to a role.",
      "Users authenticate then assume that role."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "14-12",
    "q": "CloudFront serves private content from S3. How do you grant access to multiple files?",
    "options": {
      "A": "S3 pre-signed URLs",
      "B": "CloudFront signed URLs",
      "C": "CloudFront signed cookies",
      "D": "CloudFront geo restrictions"
    },
    "answer": [
      "C"
    ],
    "explanation": "Signed cookies grant access to multiple objects without changing URLs.",
    "module": "Security",
    "multi": false,
    "why": [
      "Signed cookies grant access to multiple objects without changing URLs."
    ],
    "others": [],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "14-13",
    "q": "Which services identify underutilized EC2 instances? (Choose 2)",
    "options": {
      "A": "CloudWatch",
      "B": "SNS",
      "C": "Trusted Advisor",
      "D": "CloudTrail",
      "E": "Config"
    },
    "answer": [
      "A",
      "C"
    ],
    "explanation": "CloudWatch metrics and Trusted Advisor checks identify low-utilization instances.",
    "module": "Cost Optimization",
    "multi": true,
    "why": [
      "Amazon CloudWatch monitors CPU, network, and disk utilization metrics to detect idle or underutilized EC2 instances.",
      "AWS Trusted Advisor includes a dedicated Cost Optimization check for Low Utilization Amazon EC2 Instances."
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "14-14",
    "q": "Most cost-effective connectivity for small vendor team to VPC databases?",
    "options": {
      "A": "AWS Client VPN",
      "B": "Direct Connect",
      "C": "Site-to-Site VPN to VGW",
      "D": "Site-to-Site VPN to Transit Gateway"
    },
    "answer": [
      "A"
    ],
    "explanation": "Client VPN provides user-level auth, pay-as-you-go pricing, minimal setup.",
    "module": "Cost Optimization",
    "multi": false,
    "why": [
      "Client VPN provides user-level auth, pay-as-you-go pricing, minimal setup."
    ],
    "others": [],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "14-15",
    "q": "Serverless media processing pipeline with visual workflow and priority queues?",
    "options": {
      "A": "S3 → Lambda → SQS → DynamoDB",
      "B": "S3 → Lambda → SWF → DynamoDB",
      "C": "S3 → Lambda → process → DynamoDB",
      "D": "S3 → Lambda → Step Functions → DynamoDB"
    },
    "answer": [
      "D"
    ],
    "explanation": "Step Functions orchestrates with visual console, priority via separate entry points.",
    "module": "Architecture Patterns",
    "multi": false,
    "why": [
      "Step Functions orchestrates with visual console, priority via separate entry points."
    ],
    "others": [],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "rf-1",
    "q": "A software company is migrating a microservices application to AWS. Each microservice needs specific configurations including:\r\n- Container image from Amazon ECR\r\n- 1 vCPU and 2GB memory allocation\r\n- Environment variables for database connections\r\n- Port 8080 exposed for application traffic\r\n- IAM permissions to access S3 and DynamoDB\r\n\r\nWhich AWS component should the architect create to define these container specifications for ECS?",
    "options": {
      "A": "ECS Service definition with desired task count",
      "B": "ECS Cluster configuration with EC2 launch type",
      "C": "ECS Task Definition in JSON/YAML format",
      "D": "ECS Container Instance with user data script"
    },
    "answer": [
      "C"
    ],
    "explanation": "- **ECS Task Definition** is the blueprint that defines container specifications\r\n- Contains: image URL, CPU/memory, port mappings, environment variables, IAM roles\r\n- Format: JSON or YAML\r\n- Versioned (e.g., my-task:5 for revision 5)",
    "why": [
      "**ECS Task Definition** is the blueprint that defines container specifications",
      "Contains: image URL, CPU/memory, port mappings, environment variables, IAM roles",
      "Format: JSON or YAML",
      "Versioned (e.g., my-task:5 for revision 5)"
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "rf-2",
    "q": "A media streaming company has a primary website in us-east-1 and a disaster recovery site in eu-west-1. The architect needs to configure automatic DNS failover when the primary site becomes unhealthy. Health checks should monitor the primary site's availability.\r\n\r\nWhat is the correct Route 53 configuration?",
    "options": {
      "A": "Create two separate health checks - one for each site, and use latency-based routing",
      "B": "Create a health check for the primary site only, configure failover routing with primary and secondary records",
      "C": "Create a health check for the secondary site only, and use geolocation routing",
      "D": "Create calculated health checks combining both sites, use weighted routing 50/50"
    },
    "answer": [
      "B"
    ],
    "explanation": "- **Failover routing policy** requires:\r\n  - Health check on PRIMARY record only\r\n  - PRIMARY record (us-east-1)\r\n  - SECONDARY record (eu-west-1, no health check needed)\r\n- When primary fails health check, Route 53 automatically returns secondary\r\n\r\n**Configuration:**\r\n```\r\nPrimary Record:\r\n- Name: www.example.com\r\n- Type: A\r\n- Value: 1.2.3.4 (us-east-1 IP)\r\n- Routing: Failover - Primary\r\n- Health Check: HC-123 ✅\r\n\r\nSecondary Record:\r\n- Name: www.example.com\r\n- Type: A\r\n- Value: 5.6.7.8 (eu-west-1 IP)\r\n- Routing: Failover - Secondary\r\n- Health Check: None (not required)\r\n```",
    "why": [
      "**Failover routing policy** requires:",
      "- Health check on PRIMARY record only",
      "- PRIMARY record (us-east-1)",
      "- SECONDARY record (eu-west-1, no health check needed)",
      "When primary fails health check, Route 53 automatically returns secondary",
      "*Configuration:**",
      "```",
      "Primary Record:",
      "Name: www.example.com",
      "Type: A",
      "Value: 1.2.3.4 (us-east-1 IP)",
      "Routing: Failover - Primary",
      "Health Check: HC-123 ✅",
      "Secondary Record:",
      "Name: www.example.com",
      "Type: A",
      "Value: 5.6.7.8 (eu-west-1 IP)",
      "Routing: Failover - Secondary",
      "Health Check: None (not required)",
      "```"
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "rf-3",
    "q": "A financial services company has EC2 instances in private subnets that need to access Amazon S3 and Amazon SQS. The security team requires that all traffic must remain within the AWS network and not traverse the internet. The solution should be cost-effective.\r\n\r\nWhich VPC endpoint configuration should the architect implement?",
    "options": {
      "A": "Gateway endpoint for both S3 and SQS",
      "B": "Interface endpoint (PrivateLink) for both S3 and SQS",
      "C": "Gateway endpoint for S3, Interface endpoint for SQS",
      "D": "NAT Gateway with private routes to S3 and SQS"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Amazon S3 and Amazon DynamoDB support Gateway VPC Endpoints (which are completely FREE and configured via Route Tables).\n• Amazon SQS does NOT support Gateway Endpoints; it requires an Interface VPC Endpoint (powered by AWS PrivateLink).\n• Combining a Gateway Endpoint for S3 and an Interface Endpoint for SQS keeps all traffic inside the AWS private network at the lowest possible cost.",
    "why": [
      "Amazon S3 supports free Gateway VPC Endpoints via route table entries.",
      "Amazon SQS requires an Interface VPC Endpoint (AWS PrivateLink) for private VPC access without internet traversal."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "rf-4",
    "q": "A development team manages infrastructure using multiple CloudFormation stacks. The network stack creates a VPC with public and private subnets. The application stack needs to launch EC2 instances in the subnets created by the network stack.\r\n\r\nHow should the architect enable the application stack to reference the subnet IDs from the network stack?",
    "options": {
      "A": "Use CloudFormation StackSets to deploy both stacks together",
      "B": "Export subnet IDs using `Outputs` in network stack, import using `Fn::ImportValue` in application stack",
      "C": "Store subnet IDs in Parameter Store, retrieve in application stack using dynamic references",
      "D": "Use nested stacks with the network stack as parent"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Cross-Stack References allow one CloudFormation stack to export values (such as VPC IDs or Subnet IDs) in its `Outputs` section.\n• Dependent stacks import those values dynamically using the `Fn::ImportValue` intrinsic function.\n• StackSets are for multi-account/multi-region deployment, and nested stacks tightly couple lifecycles.",
    "why": [
      "Exporting values in the network stack's `Outputs` and importing them via `Fn::ImportValue` is the native CloudFormation cross-stack reference pattern."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "rf-5",
    "q": "A global enterprise has multiple offices connecting to AWS via Site-to-Site VPN. Each office requires high-throughput connectivity (up to 10 Gbps aggregate) to multiple VPCs in AWS. The current solution uses a single VPN connection per office (limited to 1.25 Gbps).\r\n\r\nWhich solution provides increased bandwidth while maintaining redundancy?",
    "options": {
      "A": "Use Direct Connect with multiple 10 Gbps connections",
      "B": "Create Transit Gateway with multiple VPN connections using ECMP (Equal-Cost Multi-Path routing)",
      "C": "Deploy multiple Virtual Private Gateways, one per VPC",
      "D": "Use VPN CloudHub for multi-site connectivity"
    },
    "answer": [
      "B"
    ],
    "explanation": "**Transit Gateway ECMP Architecture:**\r\n\r\n```\r\nOn-Premises Office\r\n├── Customer Gateway 1 ────┐\r\n│   (Public IP 1.2.3.4)     │\r\n└── Customer Gateway 2 ────┤  Multiple VPN Connections\r\n    (Public IP 5.6.7.8)     │  (ECMP enabled)\r\n                            │\r\n                            ▼\r\n                    Transit Gateway\r\n                    ├── VPN Connection 1: 1.25 Gbps\r\n                    ├── VPN Connection 2: 1.25 Gbps\r\n                    ├── VPN Connection 3: 1.25 Gbps\r\n                    └── VPN Connection 4: 1.25 Gbps\r\n                    Total: 5 Gbps aggregate ✅\r\n                            │\r\n                ┌───────────┴───────────┬───────────┐\r\n                ▼                       ▼           ▼\r\n            VPC-A                   VPC-B       VPC-C\r\n```\r\n\r\n**Key Features:**\r\n- **ECMP:** Distributes traffic across multiple VPN tunnels equally\r\n- **Scalability:** Add up to 50 VPN connections per Transit Gateway\r\n- **Bandwidth:** Each VPN = 1.25 Gbps; 4 VPNs = 5 Gbps aggregate\r\n- **High Availability:** If one tunnel fails, traffic redistributes to others\r\n\r\n**Configuration Requirements:**\r\n- Enable ECMP on Transit Gateway\r\n- Configure BGP on customer gateways\r\n- Use dynamic routing (BGP) with same AS path length",
    "why": [
      "*Transit Gateway ECMP Architecture:**",
      "```",
      "On-Premises Office",
      "├── Customer Gateway 1 ────┐",
      "│   (Public IP 1.2.3.4)     │",
      "└── Customer Gateway 2 ────┤  Multiple VPN Connections",
      "(Public IP 5.6.7.8)     │  (ECMP enabled)",
      "│",
      "▼",
      "Transit Gateway",
      "├── VPN Connection 1: 1.25 Gbps",
      "├── VPN Connection 2: 1.25 Gbps",
      "├── VPN Connection 3: 1.25 Gbps",
      "└── VPN Connection 4: 1.25 Gbps",
      "Total: 5 Gbps aggregate ✅",
      "│",
      "┌───────────┴───────────┬───────────┐",
      "▼                       ▼           ▼",
      "VPC-A                   VPC-B       VPC-C",
      "```",
      "*Key Features:**",
      "**ECMP:** Distributes traffic across multiple VPN tunnels equally",
      "**Scalability:** Add up to 50 VPN connections per Transit Gateway",
      "**Bandwidth:** Each VPN = 1.25 Gbps; 4 VPNs = 5 Gbps aggregate",
      "**High Availability:** If one tunnel fails, traffic redistributes to others",
      "*Configuration Requirements:**",
      "Enable ECMP on Transit Gateway",
      "Configure BGP on customer gateways",
      "Use dynamic routing (BGP) with same AS path length"
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "rf-6",
    "q": "A web application team wants to use their custom domain `app.company.com` with a CloudFront distribution for HTTPS traffic. They need to request an SSL/TLS certificate from AWS Certificate Manager (ACM).\r\n\r\nIn which AWS region must the ACM certificate be requested?",
    "options": {
      "A": "The same region as the S3 origin bucket",
      "B": "Any region where CloudFront has an edge location",
      "C": "us-east-1 (N. Virginia) only",
      "D": "The region closest to the majority of users"
    },
    "answer": [
      "C"
    ],
    "explanation": "• CRITICAL RULE: To use an AWS Certificate Manager (ACM) SSL/TLS certificate with Amazon CloudFront, the certificate MUST be requested or imported in the `us-east-1` (N. Virginia) Region.\n• Certificates for Regional services (such as ALB or API Gateway) must be in the same Region as the resource, but CloudFront is a global service managed from `us-east-1`.",
    "why": [
      "Amazon CloudFront requires all ACM SSL/TLS certificates to be provisioned in the us-east-1 (N. Virginia) Region regardless of where the origin resides."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "rf-7",
    "q": "An e-commerce application runs on EC2 instances behind an Application Load Balancer. The application has a custom health check endpoint at `/health` that returns HTTP 200 when healthy and HTTP 503 when the database connection fails.\r\n\r\nHow should the architect configure the ALB target group to properly detect unhealthy instances?",
    "options": {
      "A": "Use default health check on port 80 with path \"/\"",
      "B": "Configure health check on port 80 with path \"/health\", healthy threshold 2, unhealthy threshold 2",
      "C": "Use TCP health check on port 80",
      "D": "Configure health check on port 443 with SSL certificate verification"
    },
    "answer": [
      "B"
    ],
    "explanation": "**ALB Health Check Configuration:**\r\n\r\n```yaml\r\nHealth Check Settings:\r\n  Protocol: HTTP                    # or HTTPS\r\n  Port: 80                          # Application port\r\n  Path: /health                     # ✅ Custom health endpoint\r\n  Interval: 30 seconds              # How often to check\r\n  Timeout: 5 seconds                # Max time for response\r\n  Healthy Threshold: 2              # Consecutive successes to mark healthy\r\n  Unhealthy Threshold: 2            # Consecutive failures to mark unhealthy\r\n  Success Codes: 200                # Expected HTTP response code\r\n```\r\n\r\n**Health Check Flow:**\r\n\r\n```\r\nALB Target Group\r\n├── Target 1 (i-001): 10.0.1.10\r\n│   ├── Check 1: GET /health → 200 OK ✅\r\n│   ├── Check 2: GET /health → 200 OK ✅\r\n│   └── Status: Healthy (2 consecutive successes)\r\n│\r\n├── Target 2 (i-002): 10.0.1.11\r\n│   ├── Check 1: GET /health → 503 Error ❌\r\n│   ├── Check 2: GET /health → 503 Error ❌\r\n│   └── Status: Unhealthy (2 consecutive failures)\r\n│       └── ALB stops sending traffic to this target\r\n```\r\n\r\n**Best Practices:**\r\n- Use custom health check path that validates application health\r\n- Check database connectivity, dependencies, not just HTTP server\r\n- Set unhealthy threshold = 2 for faster failure detection\r\n- Return specific HTTP codes: 200 = healthy, 5xx = unhealthy",
    "why": [
      "*ALB Health Check Configuration:**",
      "```yaml",
      "Health Check Settings:",
      "Protocol: HTTP                    # or HTTPS",
      "Port: 80                          # Application port",
      "Path: /health                     # ✅ Custom health endpoint",
      "Interval: 30 seconds              # How often to check",
      "Timeout: 5 seconds                # Max time for response",
      "Healthy Threshold: 2              # Consecutive successes to mark healthy",
      "Unhealthy Threshold: 2            # Consecutive failures to mark unhealthy",
      "Success Codes: 200                # Expected HTTP response code",
      "```",
      "*Health Check Flow:**",
      "```",
      "ALB Target Group",
      "├── Target 1 (i-001): 10.0.1.10",
      "│   ├── Check 1: GET /health → 200 OK ✅",
      "│   ├── Check 2: GET /health → 200 OK ✅",
      "│   └── Status: Healthy (2 consecutive successes)",
      "│",
      "├── Target 2 (i-002): 10.0.1.11",
      "│   ├── Check 1: GET /health → 503 Error ❌",
      "│   ├── Check 2: GET /health → 503 Error ❌",
      "│   └── Status: Unhealthy (2 consecutive failures)",
      "│       └── ALB stops sending traffic to this target",
      "```",
      "*Best Practices:**",
      "Use custom health check path that validates application health",
      "Check database connectivity, dependencies, not just HTTP server",
      "Set unhealthy threshold = 2 for faster failure detection",
      "Return specific HTTP codes: 200 = healthy, 5xx = unhealthy"
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "rf-8",
    "q": "A security team needs to implement continuous threat detection for AWS accounts that can identify:\r\n- Compromised EC2 instances communicating with known malicious IPs\r\n- Unusual API calls indicating credential compromise\r\n- Cryptocurrency mining activity on EC2 instances\r\n\r\nThe solution should require minimal operational overhead and no agent installation.\r\n\r\nWhich AWS service should be implemented?",
    "options": {
      "A": "AWS Config with custom conformance packs",
      "B": "Amazon Macie for sensitive data detection",
      "C": "AWS GuardDuty for intelligent threat detection",
      "D": "Amazon Inspector for vulnerability scanning"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Amazon GuardDuty provides intelligent, continuous threat detection using machine learning and integrated threat intelligence feeds.\n• It automatically analyzes CloudTrail events, VPC Flow Logs, DNS query logs, and EKS audit logs with zero agent installation and zero performance impact.\n• Identifies cryptocurrency mining, communication with known malicious IPs, and compromised IAM credentials.",
    "why": [
      "Amazon GuardDuty is completely agentless and analyzes VPC Flow Logs, DNS logs, and CloudTrail events to detect compromised EC2 instances, crypto mining, and credential abuse."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "rf-9",
    "q": "A media company has 300 TB of video files in S3 Glacier Deep Archive. The marketing team now needs frequent access to these files for the next 6 months. The architect wants to move files to S3 Intelligent-Tiering for automatic cost optimization.\r\n\r\nWhat is the correct migration approach?",
    "options": {
      "A": "Change bucket default storage class to Intelligent-Tiering; existing objects automatically migrate",
      "B": "Create S3 Lifecycle policy to transition from Glacier Deep Archive to Intelligent-Tiering",
      "C": "Restore objects from Glacier Deep Archive, copy to Intelligent-Tiering during restoration, delete archived versions",
      "D": "Use AWS DataSync to transfer files from Glacier to Intelligent-Tiering"
    },
    "answer": [
      "C"
    ],
    "explanation": "**S3 Storage Class Transition Rules:**\r\n\r\n```\r\nAllowed Direct Transitions:\r\n├── Standard → Standard-IA ✅\r\n├── Standard → Intelligent-Tiering ✅\r\n├── Standard → Glacier Instant Retrieval ✅\r\n├── Standard → Glacier Flexible Retrieval ✅\r\n├── Standard → Glacier Deep Archive ✅\r\n│\r\n└── Glacier Deep Archive → Other classes ❌ BLOCKED\r\n    │\r\n    │ Must restore first!\r\n    └── Glacier Deep Archive → Temporary Restore → Copy to new class\r\n```\r\n\r\n**Correct Migration Process:**\r\n\r\n```\r\nStep 1: Restore from Glacier Deep Archive\r\n├── Retrieval Options:\r\n│   ├── Standard: 12-48 hours ($0.02/GB)\r\n│   └── Bulk: 48 hours ($0.0025/GB) ✅ Cost-effective\r\n├── Specify days accessible: 1-365 days\r\n└── Objects remain in Glacier + temporary accessible copy created\r\n\r\nStep 2: Copy During Restoration Window\r\n├── While objects are restored (accessible)\r\n├── Copy to Intelligent-Tiering\r\n└── Original Glacier copies still exist\r\n\r\nStep 3: Delete Glacier Versions\r\n└── Delete original Glacier Deep Archive versions to avoid double storage costs\r\n```\r\n\r\n**AWS CLI Commands:**\r\n\r\n```bash\r\n# Step 1: Initiate restore (bulk for cost savings)\r\naws s3api restore-object \\\r\n  --bucket media-archive \\\r\n  --key videos/video001.mp4 \\\r\n  --restore-request '{\"Days\":30,\"GlacierJobParameters\":{\"Tier\":\"Bulk\"}}'\r\n\r\n# Step 2: After restoration completes, copy to Intelligent-Tiering\r\naws s3 cp \\\r\n  s3://media-archive/videos/video001.mp4 \\\r\n  s3://media-archive/videos/video001.mp4 \\\r\n  --storage-class INTELLIGENT_TIERING \\\r\n  --metadata-directive COPY\r\n\r\n# Step 3: Delete original Glacier version (optional)\r\naws s3api delete-object \\\r\n  --bucket media-archive \\\r\n  --key videos/video001.mp4 \\\r\n  --version-id <glacier-version-id>\r\n```\r\n\r\n**Cost Calculation (300 TB):**\r\n- Restoration: 300 TB × $0.0025/GB = $768 (bulk tier)\r\n- Storage during transition: ~$3,840/month (30 days both copies)\r\n- Final cost: $0.0125/GB/month (Intelligent-Tiering Archive tier)",
    "why": [
      "*S3 Storage Class Transition Rules:**",
      "```",
      "Allowed Direct Transitions:",
      "├── Standard → Standard-IA ✅",
      "├── Standard → Intelligent-Tiering ✅",
      "├── Standard → Glacier Instant Retrieval ✅",
      "├── Standard → Glacier Flexible Retrieval ✅",
      "├── Standard → Glacier Deep Archive ✅",
      "│",
      "└── Glacier Deep Archive → Other classes ❌ BLOCKED",
      "│",
      "│ Must restore first!",
      "└── Glacier Deep Archive → Temporary Restore → Copy to new class",
      "```",
      "*Correct Migration Process:**",
      "```",
      "Step 1: Restore from Glacier Deep Archive",
      "├── Retrieval Options:",
      "│   ├── Standard: 12-48 hours ($0.02/GB)",
      "│   └── Bulk: 48 hours ($0.0025/GB) ✅ Cost-effective",
      "├── Specify days accessible: 1-365 days",
      "└── Objects remain in Glacier + temporary accessible copy created",
      "Step 2: Copy During Restoration Window",
      "├── While objects are restored (accessible)",
      "├── Copy to Intelligent-Tiering",
      "└── Original Glacier copies still exist",
      "Step 3: Delete Glacier Versions",
      "└── Delete original Glacier Deep Archive versions to avoid double storage costs",
      "```",
      "*AWS CLI Commands:**",
      "```bash",
      "# Step 1: Initiate restore (bulk for cost savings)",
      "aws s3api restore-object \\",
      "--bucket media-archive \\",
      "--key videos/video001.mp4 \\",
      "--restore-request '{\"Days\":30,\"GlacierJobParameters\":{\"Tier\":\"Bulk\"}}'",
      "# Step 2: After restoration completes, copy to Intelligent-Tiering",
      "aws s3 cp \\",
      "s3://media-archive/videos/video001.mp4 \\",
      "s3://media-archive/videos/video001.mp4 \\",
      "--storage-class INTELLIGENT_TIERING \\",
      "--metadata-directive COPY",
      "# Step 3: Delete original Glacier version (optional)",
      "aws s3api delete-object \\",
      "--bucket media-archive \\",
      "--key videos/video001.mp4 \\",
      "--version-id <glacier-version-id>",
      "```",
      "*Cost Calculation (300 TB):**",
      "Restoration: 300 TB × $0.0025/GB = $768 (bulk tier)",
      "Storage during transition: ~$3,840/month (30 days both copies)",
      "Final cost: $0.0125/GB/month (Intelligent-Tiering Archive tier)"
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "rf-10",
    "q": "A data analytics company needs to upload 10 TB video files to S3. Some files are 500 GB each. The uploads frequently fail after 3-4 hours due to network interruptions. The architect needs a reliable solution that can resume failed uploads without restarting from the beginning.\r\n\r\nWhat should the architect implement?",
    "options": {
      "A": "Use AWS CLI `aws s3 cp` command with automatic retries",
      "B": "Implement S3 Multipart Upload with parts of 100 MB each",
      "C": "Use AWS DataSync for large file transfers",
      "D": "Enable S3 Transfer Acceleration for faster uploads"
    },
    "answer": [
      "B"
    ],
    "explanation": "• S3 Multipart Upload splits large files into independent parts uploaded in parallel.\n• If a network interruption occurs, only the failed part needs to be re-uploaded rather than restarting the entire 500 GB transfer.\n• Multipart Upload is recommended for objects > 100 MB and mandatory for objects > 5 GB (max single PUT size is 5 GB).",
    "why": [
      "S3 Multipart Upload is required for files larger than 5 GB and enables parallel uploads with isolated part retries upon network failure."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "rf-11",
    "q": "A company runs a memory-intensive data processing application on EC2 instances managed by an Auto Scaling group. The application's performance degrades significantly when memory utilization exceeds 75%. The architect needs to configure Auto Scaling to scale out when average memory utilization across the ASG exceeds 70%.\r\n\r\nWhat is the correct solution?",
    "options": {
      "A": "Enable detailed monitoring on EC2 instances; CloudWatch automatically collects memory metrics",
      "B": "Install CloudWatch agent on instances; configure memory metric collection; create target tracking scaling policy using custom memory metric",
      "C": "Use AWS Systems Manager to collect memory metrics; create step scaling policy",
      "D": "Create Lambda function to query memory from EC2 instances; send metrics to CloudWatch"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Memory utilization is an OS-level metric and is NOT collected by EC2 default CloudWatch metrics (even with Detailed Monitoring enabled).\n• You must install the unified CloudWatch Agent on the EC2 instances to publish custom memory metrics (`mem_used_percent`), then configure a Target Tracking scaling policy on that custom metric.",
    "why": [
      "EC2 does not report RAM utilization by default; the CloudWatch Agent is required to publish memory metrics for Auto Scaling target tracking."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "rf-12",
    "q": "A company has the following workload characteristics:\r\n- **Web tier:** 20 t3.large instances, steady 24/7, may change to t3a.xlarge for better price\r\n- **Application tier:** 30 c5.xlarge instances, spiky usage (10-30 instances active)\r\n- **Database tier:** 5 r5.2xlarge RDS instances for PostgreSQL, steady 24/7\r\n\r\nThe architect needs to maximize cost savings while maintaining flexibility.\r\n\r\nWhich pricing strategy should be used?",
    "options": {
      "A": "EC2 Instance Savings Plan for all tiers (web + app + database)",
      "B": "Compute Savings Plan for all tiers",
      "C": "Compute Savings Plan for web and app tiers; RDS Reserved Instances for database tier",
      "D": "On-Demand for web tier; Spot Instances for app tier; RDS Reserved Instances for database tier"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Compute Savings Plans provide up to 66% discount and automatically apply across instance families (e.g., t3 to t3a, c5), regions, OS, and compute services (EC2, Fargate, Lambda).\n• Savings Plans do NOT cover Amazon RDS; therefore, steady-state 24/7 RDS PostgreSQL instances should use RDS Reserved Instances.",
    "why": [
      "Compute Savings Plans maximize flexibility across changing EC2 instance families (t3 to t3a) and tiers, while RDS Reserved Instances cover the steady 24/7 database tier."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "rf-13",
    "q": "A data warehouse team uses Amazon Redshift with automated daily snapshots retained for 35 days. Manual snapshots are taken monthly for compliance and must be kept for 7 years. The CFO wants to optimize snapshot storage costs.\r\n\r\nWhich solution reduces costs while meeting compliance requirements?",
    "options": {
      "A": "Reduce automated snapshot retention to 7 days; keep manual snapshots in Redshift for 7 years",
      "B": "Export automated snapshots to S3 after 7 days; delete from Redshift; keep manual snapshots in Redshift",
      "C": "Use automated snapshots for 35 days; copy manual snapshots to S3 after 1 year; delete from Redshift",
      "D": "Reduce automated snapshots to 7 days; copy manual snapshots to S3 Glacier immediately after creation"
    },
    "answer": [
      "D"
    ],
    "explanation": "• Redshift provides free snapshot storage up to 100% of the cluster size; beyond that, Redshift snapshot storage charges apply.\n• Reducing automated snapshot retention to 7 days frees up Redshift snapshot quota, while copying long-term 7-year compliance snapshots to Amazon S3 Glacier minimizes archival storage cost.",
    "why": [
      "Reducing automated snapshot retention to 7 days and exporting 7-year manual compliance snapshots to S3 Glacier minimizes long-term archival costs."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "rf-14",
    "q": "A manufacturing company needs to run containerized applications on-premises due to latency requirements (< 5ms) for IoT sensors. The applications must use AWS services and management tools. The company has deployed AWS Outposts in their data center.\r\n\r\nWhich ECS deployment option should be used?",
    "options": {
      "A": "ECS on EC2 launch type with Local Zones",
      "B": "ECS on EC2 launch type on AWS Outposts",
      "C": "ECS on Fargate with Outposts",
      "D": "ECS Anywhere with external instances"
    },
    "answer": [
      "B"
    ],
    "explanation": "• AWS Outposts supports Amazon ECS using the EC2 launch type (containers run on EC2 instances inside the local Outpost rack for < 5ms latency).\n• AWS Fargate is NOT supported on AWS Outposts. ECS Anywhere is for customer-owned hardware, not AWS Outposts.",
    "why": [
      "AWS Outposts supports Amazon ECS with the EC2 launch type to deliver sub-5ms local latency, whereas AWS Fargate is not supported on Outposts."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "rf-15",
    "q": "A social media application experiences frequent cache misses during peak hours, causing slow database queries. The database team wants to implement a caching layer with automatic failover to a standby cache node in another AZ if the primary fails.\r\n\r\nWhich ElastiCache configuration provides Multi-AZ automatic failover?",
    "options": {
      "A": "ElastiCache for Memcached with multiple nodes across AZs",
      "B": "ElastiCache for Redis with Cluster Mode disabled and Multi-AZ with automatic failover enabled",
      "C": "ElastiCache for Memcached with Auto Discovery enabled",
      "D": "ElastiCache for Redis with Cluster Mode enabled (multiple shards)"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Amazon ElastiCache for Redis supports Multi-AZ with Automatic Failover and read replicas (master-replica architecture).\n• ElastiCache for Memcached does NOT support replication, data persistence, or Multi-AZ automatic failover.",
    "why": [
      "ElastiCache for Redis with Multi-AZ enabled provides synchronous/asynchronous replica promotion and automatic failover when the primary node fails."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "rf-16",
    "q": "A research team processes large genomic datasets (20 TB) stored in S3. They need a high-performance file system for compute-intensive analysis that can:\r\n- Import data from S3 at the start of processing\r\n- Write results back to S3 after computation\r\n- Provide sub-millisecond latency for random access\r\n\r\nWhich solution meets these requirements cost-effectively?",
    "options": {
      "A": "FSx for Windows File Server with S3 backup",
      "B": "EFS with S3 lifecycle transition",
      "C": "FSx for Lustre with S3 data repository integration",
      "D": "Instance store volumes with AWS DataSync to S3"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Amazon FSx for Lustre is a high-performance parallel file system offering sub-millisecond latencies and hundreds of GB/s throughput.\n• It integrates natively with Amazon S3 as a data repository, lazily loading datasets from S3 and exporting computation results back to S3.",
    "why": [
      "Amazon FSx for Lustre provides sub-millisecond HPC performance and native two-way data repository integration with Amazon S3."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "rf-17",
    "q": "A company wants to establish a Site-to-Site VPN connection between their on-premises data center and AWS VPC. The architect needs to identify the required components.\r\n\r\nWhich components are mandatory for establishing the VPN connection? (Choose TWO)",
    "options": {
      "A": "NAT Gateway in the public subnet",
      "B": "Customer Gateway with public IP address",
      "C": "Virtual Private Gateway attached to the VPC",
      "D": "Transit Gateway for multi-VPC connectivity",
      "E": "Internet Gateway for outbound traffic"
    },
    "answer": [
      "B",
      "C"
    ],
    "explanation": "**Site-to-Site VPN Components:**\r\n\r\n```\r\nOn-Premises Data Center:\r\n├── VPN Device (Firewall/Router)\r\n│   ├── Public IP: 203.0.113.5 ✅\r\n│   ├── Supports IPsec\r\n│   └── BGP capable (for dynamic routing)\r\n│\r\n└── Customer Gateway (AWS resource)\r\n    ├── Logical representation of on-premises device\r\n    ├── Public IP: 203.0.113.5 ✅\r\n    └── BGP ASN: 65000\r\n\r\nAWS Cloud:\r\n├── Virtual Private Gateway (VGW) ✅\r\n│   ├── AWS-side VPN endpoint\r\n│   ├── Attached to VPC\r\n│   ├── Two tunnels (redundancy)\r\n│   └── Propagates routes to route tables\r\n│\r\n└── VPC\r\n    ├── Private subnets\r\n    └── Route table: 10.1.0.0/16 → VGW\r\n```\r\n\r\n**Minimal Required Configuration:**\r\n\r\n```\r\nStep 1: Create Customer Gateway\r\n├── Public IP of on-premises device: 203.0.113.5 ✅\r\n├── Routing: Static or Dynamic (BGP)\r\n└── BGP ASN: 65000 (if dynamic routing)\r\n\r\nStep 2: Create Virtual Private Gateway\r\n├── Attach to VPC ✅\r\n└── Type: VPN\r\n\r\nStep 3: Create VPN Connection\r\n├── Customer Gateway: cgw-12345\r\n├── Virtual Private Gateway: vgw-67890\r\n├── Routing: Dynamic (BGP) or Static\r\n└── Tunnel options: IKEv2, AES-256\r\n\r\nStep 4: Configure On-Premises Device\r\n├── Download configuration file from AWS\r\n├── Apply to firewall/router\r\n└── Establish IPsec tunnels\r\n```\r\n\r\n**Route Propagation:**\r\n\r\n```\r\nVPC Route Table (after VPN established):\r\n├── Local: 10.0.0.0/16 → local\r\n├── On-premises: 10.1.0.0/16 → vgw-67890 ✅ (propagated)\r\n└── Internet: 0.0.0.0/0 → igw-12345 (if needed)\r\n\r\nOn-Premises Route Table:\r\n├── Local: 10.1.0.0/16 → local\r\n└── AWS VPC: 10.0.0.0/16 → VPN tunnel ✅\r\n```\r\n\r\n**Why others are NOT required:**\r\n- **A (NAT Gateway):** Used for private subnet outbound internet access, NOT for VPN termination\r\n- **D (Transit Gateway):** Alternative to VGW for multi-VPC connectivity, not mandatory\r\n- **E (Internet Gateway):** For VPC internet access, separate from VPN connectivity\r\n\r\n**Alternative: Transit Gateway VPN**\r\n\r\n```\r\nModern Architecture (optional):\r\n├── Transit Gateway (instead of VGW)\r\n│   ├── Central hub for multiple VPCs\r\n│   ├── VPN attachment\r\n│   └── Supports ECMP (aggregate bandwidth)\r\n│\r\n└── Use case: Multi-VPC with VPN\r\n```\r\n\r\n**Key Concept:** Site-to-Site VPN = Customer Gateway (on-prem public IP) + Virtual Private Gateway (AWS endpoint)",
    "why": [
      "*Site-to-Site VPN Components:**",
      "```",
      "On-Premises Data Center:",
      "├── VPN Device (Firewall/Router)",
      "│   ├── Public IP: 203.0.113.5 ✅",
      "│   ├── Supports IPsec",
      "│   └── BGP capable (for dynamic routing)",
      "│",
      "└── Customer Gateway (AWS resource)",
      "├── Logical representation of on-premises device",
      "├── Public IP: 203.0.113.5 ✅",
      "└── BGP ASN: 65000",
      "AWS Cloud:",
      "├── Virtual Private Gateway (VGW) ✅",
      "│   ├── AWS-side VPN endpoint",
      "│   ├── Attached to VPC",
      "│   ├── Two tunnels (redundancy)",
      "│   └── Propagates routes to route tables",
      "│",
      "└── VPC",
      "├── Private subnets",
      "└── Route table: 10.1.0.0/16 → VGW",
      "```",
      "*Minimal Required Configuration:**",
      "```",
      "Step 1: Create Customer Gateway",
      "├── Public IP of on-premises device: 203.0.113.5 ✅",
      "├── Routing: Static or Dynamic (BGP)",
      "└── BGP ASN: 65000 (if dynamic routing)",
      "Step 2: Create Virtual Private Gateway",
      "├── Attach to VPC ✅",
      "└── Type: VPN",
      "Step 3: Create VPN Connection",
      "├── Customer Gateway: cgw-12345",
      "├── Virtual Private Gateway: vgw-67890",
      "├── Routing: Dynamic (BGP) or Static",
      "└── Tunnel options: IKEv2, AES-256",
      "Step 4: Configure On-Premises Device",
      "├── Download configuration file from AWS",
      "├── Apply to firewall/router",
      "└── Establish IPsec tunnels",
      "```",
      "*Route Propagation:**",
      "```",
      "VPC Route Table (after VPN established):",
      "├── Local: 10.0.0.0/16 → local",
      "├── On-premises: 10.1.0.0/16 → vgw-67890 ✅ (propagated)",
      "└── Internet: 0.0.0.0/0 → igw-12345 (if needed)",
      "On-Premises Route Table:",
      "├── Local: 10.1.0.0/16 → local",
      "└── AWS VPC: 10.0.0.0/16 → VPN tunnel ✅",
      "```",
      "*Why others are NOT required:**",
      "**A (NAT Gateway):** Used for private subnet outbound internet access, NOT for VPN termination",
      "**D (Transit Gateway):** Alternative to VGW for multi-VPC connectivity, not mandatory",
      "**E (Internet Gateway):** For VPC internet access, separate from VPN connectivity",
      "*Alternative: Transit Gateway VPN**",
      "```",
      "Modern Architecture (optional):",
      "├── Transit Gateway (instead of VGW)",
      "│   ├── Central hub for multiple VPCs",
      "│   ├── VPN attachment",
      "│   └── Supports ECMP (aggregate bandwidth)",
      "│",
      "└── Use case: Multi-VPC with VPN",
      "```",
      "*Key Concept:** Site-to-Site VPN = Customer Gateway (on-prem public IP) + Virtual Private Gateway (AWS endpoint)"
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": true,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "rf-18",
    "q": "An e-commerce application uses DynamoDB to store order data. The development team needs to capture all changes (inserts, updates, deletes) to orders in real-time and trigger downstream processing (inventory updates, notifications).\r\n\r\nWhich solution captures DynamoDB changes with minimal latency?",
    "options": {
      "A": "Query DynamoDB with timestamp filter every minute to find new/updated items",
      "B": "Enable DynamoDB Streams and process change records with Lambda",
      "C": "Export DynamoDB table to S3 every hour and process changes",
      "D": "Use CloudWatch Events to monitor DynamoDB API calls"
    },
    "answer": [
      "B"
    ],
    "explanation": "• DynamoDB Streams captures a time-ordered sequence of item-level modifications (INSERT, MODIFY, DELETE) in near real-time (milliseconds) and retains them for 24 hours.\n• Integrating DynamoDB Streams with an AWS Lambda event source mapping triggers downstream processing immediately without polling.",
    "why": [
      "DynamoDB Streams combined with AWS Lambda provides near real-time change data capture (CDC) for inserts, updates, and deletes."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "rf-19",
    "q": "A company has a Direct Connect connection with a public virtual interface to access AWS public services (S3, DynamoDB). To optimize routing and reduce data transfer costs, the network team wants to ensure that traffic to S3 in us-east-1 only uses AWS infrastructure within the us-east-1 region and does NOT traverse to other regions.\r\n\r\nWhich BGP configuration should be applied?",
    "options": {
      "A": "Configure NO_EXPORT BGP community tag",
      "B": "Configure local preference BGP community tag with value 200",
      "C": "Configure BGP community tag 7224:9100 (local region preference)",
      "D": "Configure BGP community tag 7224:9300 (global preference)"
    },
    "answer": [
      "C"
    ],
    "explanation": "**Direct Connect BGP Community Tags:**\r\n\r\n```\r\nAWS BGP Community Tags (Public VIF only):\r\n├── 7224:9100 → Local AWS region only ✅\r\n│   └── Use case: Keep traffic in same region as Direct Connect\r\n│\r\n├── 7224:9200 → All regions in same continent\r\n│   └── Use case: US regions, or EU regions, etc.\r\n│\r\n├── 7224:9300 → Global (all AWS regions) [default]\r\n│   └── Use case: Access any AWS region\r\n│\r\n└── NO_EXPORT → Don't advertise beyond AS\r\n    └── Use case: Prevent route propagation\r\n```\r\n\r\n**Scenario Architecture:**\r\n\r\n```\r\nOn-Premises Data Center (Virginia):\r\n├── Direct Connect Location (us-east-1)\r\n│   └── Public Virtual Interface\r\n│       ├── BGP community: 7224:9100 ✅\r\n│       └── VLAN: 100\r\n│\r\n└── Traffic Flow with 7224:9100:\r\n    ├── S3 us-east-1: Uses local region ✅ (lowest latency)\r\n    ├── S3 us-west-2: ❌ NOT advertised (must use internet)\r\n    └── DynamoDB us-east-1: Uses local region ✅\r\n\r\nWithout 7224:9100 (default 7224:9300):\r\n    ├── S3 us-east-1: Uses local region\r\n    ├── S3 us-west-2: Uses Direct Connect → Cross-region transfer $$\r\n    └── May route through longer path\r\n```\r\n\r\n**BGP Configuration (Cisco Example):**\r\n\r\n```cisco\r\nrouter bgp 65000\r\n neighbor 169.254.0.1 remote-as 7224\r\n neighbor 169.254.0.1 description AWS-Direct-Connect\r\n \r\n address-family ipv4\r\n  neighbor 169.254.0.1 activate\r\n  neighbor 169.254.0.1 soft-reconfiguration inbound\r\n  \r\n  ! Apply community tag 7224:9100 to routes advertised to AWS\r\n  neighbor 169.254.0.1 send-community\r\n  neighbor 169.254.0.1 route-map SET-AWS-LOCAL out\r\n exit-address-family\r\n\r\nroute-map SET-AWS-LOCAL permit 10\r\n set community 7224:9100    ! Local region only\r\n```\r\n\r\n**Cost Impact:**\r\n\r\n```\r\nScenario 1: Without 7224:9100 (default global)\r\n├── Direct Connect to S3 us-east-1: $0.02/GB (Data Transfer Out)\r\n├── Direct Connect to S3 us-west-2:\r\n│   ├── Data Transfer Out: $0.02/GB\r\n│   ├── Cross-region transfer: $0.02/GB\r\n│   └── Total: $0.04/GB ❌ (expensive)\r\n\r\nScenario 2: With 7224:9100 (local region)\r\n├── Direct Connect to S3 us-east-1: $0.02/GB ✅\r\n├── Direct Connect to S3 us-west-2: Uses internet instead\r\n│   └── May use VPN or public internet (application decides)\r\n```\r\n\r\n**Virtual Interface Types:**\r\n\r\n| VIF Type | Supports BGP Community Tags | Use Case |\r\n|----------|---------------------------|----------|\r\n| **Public VIF** | 7224:9100, 7224:9200, 7224:9300, NO_EXPORT ✅ | AWS public services (S3, DynamoDB) |\r\n| **Private VIF** | Local preference (NOT 7224:xxxx) | VPC resources |\r\n| **Transit VIF** | Local preference (NOT 7224:xxxx) | Transit Gateway |",
    "why": [
      "*Direct Connect BGP Community Tags:**",
      "```",
      "AWS BGP Community Tags (Public VIF only):",
      "├── 7224:9100 → Local AWS region only ✅",
      "│   └── Use case: Keep traffic in same region as Direct Connect",
      "│",
      "├── 7224:9200 → All regions in same continent",
      "│   └── Use case: US regions, or EU regions, etc.",
      "│",
      "├── 7224:9300 → Global (all AWS regions) [default]",
      "│   └── Use case: Access any AWS region",
      "│",
      "└── NO_EXPORT → Don't advertise beyond AS",
      "└── Use case: Prevent route propagation",
      "```",
      "*Scenario Architecture:**",
      "```",
      "On-Premises Data Center (Virginia):",
      "├── Direct Connect Location (us-east-1)",
      "│   └── Public Virtual Interface",
      "│       ├── BGP community: 7224:9100 ✅",
      "│       └── VLAN: 100",
      "│",
      "└── Traffic Flow with 7224:9100:",
      "├── S3 us-east-1: Uses local region ✅ (lowest latency)",
      "├── S3 us-west-2: ❌ NOT advertised (must use internet)",
      "└── DynamoDB us-east-1: Uses local region ✅",
      "Without 7224:9100 (default 7224:9300):",
      "├── S3 us-east-1: Uses local region",
      "├── S3 us-west-2: Uses Direct Connect → Cross-region transfer $$",
      "└── May route through longer path",
      "```",
      "*BGP Configuration (Cisco Example):**",
      "```cisco",
      "router bgp 65000",
      "neighbor 169.254.0.1 remote-as 7224",
      "neighbor 169.254.0.1 description AWS-Direct-Connect",
      "address-family ipv4",
      "neighbor 169.254.0.1 activate",
      "neighbor 169.254.0.1 soft-reconfiguration inbound",
      "! Apply community tag 7224:9100 to routes advertised to AWS",
      "neighbor 169.254.0.1 send-community",
      "neighbor 169.254.0.1 route-map SET-AWS-LOCAL out",
      "exit-address-family",
      "route-map SET-AWS-LOCAL permit 10",
      "set community 7224:9100    ! Local region only",
      "```",
      "*Cost Impact:**",
      "```",
      "Scenario 1: Without 7224:9100 (default global)",
      "├── Direct Connect to S3 us-east-1: $0.02/GB (Data Transfer Out)",
      "├── Direct Connect to S3 us-west-2:",
      "│   ├── Data Transfer Out: $0.02/GB",
      "│   ├── Cross-region transfer: $0.02/GB",
      "│   └── Total: $0.04/GB ❌ (expensive)",
      "Scenario 2: With 7224:9100 (local region)",
      "├── Direct Connect to S3 us-east-1: $0.02/GB ✅",
      "├── Direct Connect to S3 us-west-2: Uses internet instead",
      "│   └── May use VPN or public internet (application decides)",
      "```",
      "*Virtual Interface Types:**",
      "| VIF Type | Supports BGP Community Tags | Use Case |",
      "|----------|---------------------------|----------|",
      "| **Public VIF** | 7224:9100, 7224:9200, 7224:9300, NO_EXPORT ✅ | AWS public services (S3, DynamoDB) |",
      "| **Private VIF** | Local preference (NOT 7224:xxxx) | VPC resources |",
      "| **Transit VIF** | Local preference (NOT 7224:xxxx) | Transit Gateway |"
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "rf-20",
    "q": "A company is migrating an application from us-west-1 to eu-west-2. The application uses Amazon EFS with 50 TB of data. The architect needs a solution to transfer all EFS data to a new EFS file system in eu-west-2 with minimal operational overhead.\r\n\r\nWhich solution is most appropriate?",
    "options": {
      "A": "Use AWS Snowball Edge to export EFS data, ship to eu-west-2, import to new EFS",
      "B": "Set up S3 Cross-Region Replication as intermediate storage",
      "C": "Use AWS DataSync to transfer directly from source EFS to destination EFS",
      "D": "Write custom script using rsync over VPN between regions"
    },
    "answer": [
      "C"
    ],
    "explanation": "• AWS DataSync is a managed data transfer service that natively supports direct EFS-to-EFS transfers across AWS Regions over TLS.\n• It handles encryption in transit, incremental synchronization, and integrity verification with minimal operational overhead.",
    "why": [
      "AWS DataSync natively transfers data directly between source and destination Amazon EFS file systems across regions with built-in encryption and validation."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "rf-21",
    "q": "A company has a VPC with 3 Availability Zones. Private subnets in each AZ have EC2 instances that need internet access for software updates. Currently, all private subnets route to a single NAT Gateway in us-east-1a. The CFO has noticed high data transfer costs.\r\n\r\nWhich solution reduces data transfer costs while maintaining internet access?",
    "options": {
      "A": "Replace NAT Gateway with NAT Instance",
      "B": "Deploy a public NAT Gateway in each AZ; route each AZ's private subnets to the NAT Gateway in the same AZ",
      "C": "Deploy VPC endpoints for all AWS services",
      "D": "Deploy a private NAT Gateway in each AZ's public subnet"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Routing traffic from EC2 instances in AZ-b and AZ-c to a single NAT Gateway in AZ-a incurs cross-AZ data transfer charges ($0.01/GB each way) and creates a single point of failure.\n• Deploying a NAT Gateway in each AZ and routing each private subnet to its local AZ NAT Gateway eliminates cross-AZ data transfer fees and achieves Multi-AZ high availability.",
    "why": [
      "Deploying a public NAT Gateway in each Availability Zone and routing private subnets locally eliminates cross-AZ data transfer charges and single points of failure."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "rf-22",
    "q": "A data analytics team has an existing Amazon Redshift cluster (5 TB) with encryption disabled. Due to new compliance requirements, the security team requires encryption at rest using AWS KMS. The solution should minimize downtime.\r\n\r\nWhich solution enables encryption on the existing cluster?",
    "options": {
      "A": "Modify the cluster properties to enable encryption using AWS KMS; Redshift automatically migrates data",
      "B": "Create unload scripts to export data, create new encrypted cluster, reload data",
      "C": "Enable encryption using CloudHSM instead of KMS",
      "D": "Use AWS Database Migration Service to migrate to new encrypted cluster"
    },
    "answer": [
      "A"
    ],
    "explanation": "**Redshift Encryption Changes (2019+):**\r\n\r\n```\r\nLegacy Approach (Pre-2019): ❌\r\n├── Cannot enable encryption on existing cluster\r\n├── Required steps:\r\n│   ├── 1. Create new encrypted cluster\r\n│   ├── 2. Unload data from old cluster\r\n│   ├── 3. Load data into new cluster\r\n│   ├── 4. Switch application endpoints\r\n│   └── 5. Delete old cluster\r\n└── Downtime: Several hours for 5 TB\r\n\r\nModern Approach (2019+): ✅\r\n├── Enable encryption on existing cluster ✅\r\n├── Redshift automatically migrates data\r\n├── Process:\r\n│   ├── 1. Modify cluster → Enable encryption\r\n│   ├── 2. Select KMS key\r\n│   ├── 3. Redshift creates encrypted snapshots\r\n│   ├── 4. Redshift migrates data (background)\r\n│   └── 5. Cluster remains available (read-only during final cutover)\r\n└── Downtime: Minimal (minutes for final cutover)\r\n```\r\n\r\n**Implementation:**\r\n\r\n**AWS Console:**\r\n\r\n```\r\n1. Navigate to Redshift Console\r\n2. Select cluster: my-cluster\r\n3. Actions → Modify cluster\r\n4. Database configuration:\r\n   ├── Encryption: Enable ✅\r\n   ├── KMS key: aws/redshift (default) or custom key\r\n   └── Click \"Modify cluster\"\r\n5. Redshift migration process:\r\n   ├── Status: \"Modifying\"\r\n   ├── Progress: 0% → 100%\r\n   ├── Duration: ~2-4 hours for 5 TB\r\n   └── Final status: \"Available\" (encrypted)\r\n```\r\n\r\n**AWS CLI:**\r\n\r\n```bash\r\n# Modify existing cluster to enable encryption\r\naws redshift modify-cluster \\\r\n  --cluster-identifier my-cluster \\\r\n  --encrypted \\\r\n  --kms-key-id arn:aws:kms:us-east-1:123456789012:key/abc12345-6789-0def-gh12-3456789abcde\r\n\r\n# Check encryption status\r\naws redshift describe-clusters \\\r\n  --cluster-identifier my-cluster \\\r\n  --query 'Clusters[0].[Encrypted,KmsKeyId]' \\\r\n  --output table\r\n```\r\n\r\n**Migration Process:**\r\n\r\n```\r\nPhase 1: Snapshot Creation\r\n├── Redshift creates encrypted snapshot\r\n├── Uses specified KMS key\r\n└── Duration: ~30 minutes for 5 TB\r\n\r\nPhase 2: Data Migration (Background)\r\n├── Redshift copies data to encrypted storage\r\n├── Cluster remains AVAILABLE for queries ✅\r\n├── Performance may be slightly reduced\r\n└── Duration: 2-4 hours for 5 TB\r\n\r\nPhase 3: Final Cutover\r\n├── Brief read-only period (5-10 minutes)\r\n├── Switches to encrypted storage\r\n└── Cluster returns to AVAILABLE status\r\n\r\nTotal Downtime: ~10 minutes (minimal) ✅\r\n```\r\n\r\n**Encryption Options:**\r\n\r\n```\r\nAWS KMS (Recommended): ✅\r\n├── AWS-managed key: aws/redshift (default)\r\n├── Customer-managed key: Custom KMS key\r\n├── Benefits:\r\n│   ├── Automated key rotation\r\n│   ├── CloudTrail integration\r\n│   ├── Fine-grained access control\r\n│   └── Multi-tenant (AWS-managed infrastructure)\r\n└── Cost: $1/key/month + API requests\r\n\r\nAWS CloudHSM:\r\n├── Single-tenant hardware security module\r\n├── Benefits:\r\n│   ├── FIPS 140-3 Level 3 compliance\r\n│   ├── Customer manages keys\r\n│   └── High security requirements\r\n└── Cost: $1.60/hour per HSM (~$1,168/month) + setup\r\n```\r\n\r\n**What Gets Encrypted:**\r\n\r\n```\r\nRedshift Encrypted Cluster:\r\n├── Cluster data blocks ✅\r\n├── System tables ✅\r\n├── All snapshots (automated & manual) ✅\r\n├── Backups ✅\r\n└── In-transit data between nodes ✅\r\n\r\nNOT Encrypted (Without additional configuration):\r\n├── Connection to cluster (use SSL) ⚠️\r\n└── Query results downloaded to client ⚠️\r\n```\r\n\r\n**Verification:**\r\n\r\n```sql\r\n-- Check encryption status from Redshift query editor\r\nSELECT\r\n  current_database() as database,\r\n  encrypted\r\nFROM pg_database_info\r\nWHERE datname = current_database();\r\n\r\n-- Output:\r\n--  database | encrypted\r\n-- ----------+-----------\r\n--  dev      | true\r\n```",
    "why": [
      "*Redshift Encryption Changes (2019+):**",
      "```",
      "Legacy Approach (Pre-2019): ❌",
      "├── Cannot enable encryption on existing cluster",
      "├── Required steps:",
      "│   ├── 1. Create new encrypted cluster",
      "│   ├── 2. Unload data from old cluster",
      "│   ├── 3. Load data into new cluster",
      "│   ├── 4. Switch application endpoints",
      "│   └── 5. Delete old cluster",
      "└── Downtime: Several hours for 5 TB",
      "Modern Approach (2019+): ✅",
      "├── Enable encryption on existing cluster ✅",
      "├── Redshift automatically migrates data",
      "├── Process:",
      "│   ├── 1. Modify cluster → Enable encryption",
      "│   ├── 2. Select KMS key",
      "│   ├── 3. Redshift creates encrypted snapshots",
      "│   ├── 4. Redshift migrates data (background)",
      "│   └── 5. Cluster remains available (read-only during final cutover)",
      "└── Downtime: Minimal (minutes for final cutover)",
      "```",
      "*Implementation:**",
      "*AWS Console:**",
      "```",
      "1. Navigate to Redshift Console",
      "2. Select cluster: my-cluster",
      "3. Actions → Modify cluster",
      "4. Database configuration:",
      "├── Encryption: Enable ✅",
      "├── KMS key: aws/redshift (default) or custom key",
      "└── Click \"Modify cluster\"",
      "5. Redshift migration process:",
      "├── Status: \"Modifying\"",
      "├── Progress: 0% → 100%",
      "├── Duration: ~2-4 hours for 5 TB",
      "└── Final status: \"Available\" (encrypted)",
      "```",
      "*AWS CLI:**",
      "```bash",
      "# Modify existing cluster to enable encryption",
      "aws redshift modify-cluster \\",
      "--cluster-identifier my-cluster \\",
      "--encrypted \\",
      "--kms-key-id arn:aws:kms:us-east-1:123456789012:key/abc12345-6789-0def-gh12-3456789abcde",
      "# Check encryption status",
      "aws redshift describe-clusters \\",
      "--cluster-identifier my-cluster \\",
      "--query 'Clusters[0].[Encrypted,KmsKeyId]' \\",
      "--output table",
      "```",
      "*Migration Process:**",
      "```",
      "Phase 1: Snapshot Creation",
      "├── Redshift creates encrypted snapshot",
      "├── Uses specified KMS key",
      "└── Duration: ~30 minutes for 5 TB",
      "Phase 2: Data Migration (Background)",
      "├── Redshift copies data to encrypted storage",
      "├── Cluster remains AVAILABLE for queries ✅",
      "├── Performance may be slightly reduced",
      "└── Duration: 2-4 hours for 5 TB",
      "Phase 3: Final Cutover",
      "├── Brief read-only period (5-10 minutes)",
      "├── Switches to encrypted storage",
      "└── Cluster returns to AVAILABLE status",
      "Total Downtime: ~10 minutes (minimal) ✅",
      "```",
      "*Encryption Options:**",
      "```",
      "AWS KMS (Recommended): ✅",
      "├── AWS-managed key: aws/redshift (default)",
      "├── Customer-managed key: Custom KMS key",
      "├── Benefits:",
      "│   ├── Automated key rotation",
      "│   ├── CloudTrail integration",
      "│   ├── Fine-grained access control",
      "│   └── Multi-tenant (AWS-managed infrastructure)",
      "└── Cost: $1/key/month + API requests",
      "AWS CloudHSM:",
      "├── Single-tenant hardware security module",
      "├── Benefits:",
      "│   ├── FIPS 140-3 Level 3 compliance",
      "│   ├── Customer manages keys",
      "│   └── High security requirements",
      "└── Cost: $1.60/hour per HSM (~$1,168/month) + setup",
      "```",
      "*What Gets Encrypted:**",
      "```",
      "Redshift Encrypted Cluster:",
      "├── Cluster data blocks ✅",
      "├── System tables ✅",
      "├── All snapshots (automated & manual) ✅",
      "├── Backups ✅",
      "└── In-transit data between nodes ✅",
      "NOT Encrypted (Without additional configuration):",
      "├── Connection to cluster (use SSL) ⚠️",
      "└── Query results downloaded to client ⚠️",
      "```",
      "*Verification:**",
      "```sql",
      "- Check encryption status from Redshift query editor",
      "SELECT",
      "current_database() as database,",
      "encrypted",
      "FROM pg_database_info",
      "WHERE datname = current_database();",
      "- Output:",
      "-  database | encrypted",
      "- ----------+-----------",
      "-  dev      | true",
      "```"
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "rf-23",
    "q": "A financial services company has an RDS PostgreSQL database experiencing high read traffic during business hours. The development team wants to scale read capacity to improve application performance. The database also requires high availability with automatic failover.\r\n\r\nWhich solution provides both read scaling AND high availability?",
    "options": {
      "A": "Enable Multi-AZ deployment only",
      "B": "Create Read Replicas in multiple AZs only",
      "C": "Enable Multi-AZ deployment and create Read Replicas",
      "D": "Use Amazon Aurora with single instance"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Amazon RDS Multi-AZ provides high availability and automatic failover using a synchronous standby instance (which cannot serve read traffic).\n• Amazon RDS Read Replicas use asynchronous replication to offload and scale read-heavy traffic.\n• Enabling Multi-AZ AND creating Read Replicas satisfies both high availability and read scaling.",
    "why": [
      "RDS Multi-AZ provides automatic failover for high availability, while RDS Read Replicas offload and scale heavy read traffic."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "rf-24",
    "q": "A Lambda function executes successfully but no logs appear in CloudWatch Logs. What is the most likely cause?",
    "options": {
      "A": "Lambda function timeout is too short",
      "B": "Lambda execution role lacks CloudWatch Logs permissions",
      "C": "CloudWatch Logs retention period expired",
      "D": "Lambda function not using console.log() statements"
    },
    "answer": [
      "B"
    ],
    "explanation": "**Required CloudWatch Logs Permissions:**\r\n\r\n```json\r\n{\r\n  \"Effect\": \"Allow\",\r\n  \"Action\": [\r\n    \"logs:CreateLogGroup\",\r\n    \"logs:CreateLogStream\",\r\n    \"logs:PutLogEvents\"\r\n  ],\r\n  \"Resource\": \"arn:aws:logs:*:*:*\"\r\n}\r\n```\r\n\r\n**Common Mistake:**\r\n- Lambda executes successfully\r\n- BUT no logs appear due to missing permissions\r\n- Solution: Attach AWSLambdaBasicExecutionRole or equivalent\r\n\r\n**Key Concept:** All Lambda functions need CloudWatch Logs permissions for debugging",
    "why": [
      "*Required CloudWatch Logs Permissions:**",
      "```json",
      "{",
      "\"Effect\": \"Allow\",",
      "\"Action\": [",
      "\"logs:CreateLogGroup\",",
      "\"logs:CreateLogStream\",",
      "\"logs:PutLogEvents\"",
      "],",
      "\"Resource\": \"arn:aws:logs:*:*:*\"",
      "}",
      "```",
      "*Common Mistake:**",
      "Lambda executes successfully",
      "BUT no logs appear due to missing permissions",
      "Solution: Attach AWSLambdaBasicExecutionRole or equivalent",
      "*Key Concept:** All Lambda functions need CloudWatch Logs permissions for debugging"
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "rf-25",
    "q": "An Auto Scaling group scales out from 4 to 6 instances at 10:00 AM due to high CPU. At 10:02 AM, CPU is still high but no additional instances launch. The cooldown period is 300 seconds. Why?",
    "options": {
      "A": "New instances are still initializing",
      "B": "Cooldown period prevents scaling for 5 minutes after previous scale",
      "C": "Auto Scaling group reached maximum capacity",
      "D": "Target tracking policies don't support multiple scale events"
    },
    "answer": [
      "B"
    ],
    "explanation": "• The Auto Scaling cooldown period (300 seconds / 5 minutes) suspends additional simple scaling activities after a scaling event completes.\n• This gives newly launched instances time to boot, initialize, and start handling traffic so metrics stabilize before evaluating another alarm.",
    "why": [
      "The 300-second cooldown period blocks further scaling actions for 5 minutes to allow newly launched instances and metrics to stabilize."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "rf-26",
    "q": "A website uses CloudFront with S3 origin. When files are missing (404), display custom error page `/error.html` with HTTP 200 status. How to configure?",
    "options": {
      "A": "S3 bucket error document configuration",
      "B": "CloudFront custom error response: 404 → /error.html, status 200",
      "C": "Lambda@Edge to intercept 404 errors",
      "D": "CloudFront default error pages"
    },
    "answer": [
      "B"
    ],
    "explanation": "**CloudFront Custom Error Response:**\r\n\r\n```\r\nConfiguration:\r\n├── Error Code: 404\r\n├── Response Page: /error.html\r\n├── Response Code: 200 (not 404) ✅\r\n└── Cache TTL: 300 seconds\r\n```\r\n\r\n**Flow:**\r\n1. Client requests missing file\r\n2. Origin returns 404\r\n3. CloudFront fetches /error.html\r\n4. Returns to client as 200 OK\r\n\r\n**Key Concept:** CloudFront custom error response allows branded error pages with custom status codes",
    "why": [
      "*CloudFront Custom Error Response:**",
      "```",
      "Configuration:",
      "├── Error Code: 404",
      "├── Response Page: /error.html",
      "├── Response Code: 200 (not 404) ✅",
      "└── Cache TTL: 300 seconds",
      "```",
      "*Flow:**",
      "1. Client requests missing file",
      "2. Origin returns 404",
      "3. CloudFront fetches /error.html",
      "4. Returns to client as 200 OK",
      "*Key Concept:** CloudFront custom error response allows branded error pages with custom status codes"
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "rf-27",
    "q": "Database requires 20,000 IOPS consistent performance. Which EBS volume type?",
    "options": {
      "A": "gp3 with 20,000 provisioned IOPS",
      "B": "io2 with 20,000 provisioned IOPS",
      "C": "gp2 with large volume for 20,000 baseline",
      "D": "st1 for high throughput"
    },
    "answer": [
      "B"
    ],
    "explanation": "**EBS Volume Limits:**\r\n\r\n```\r\ngp3: Up to 16,000 IOPS max ❌\r\n├── Cannot provision 20,000 IOPS\r\n└── Need io2 instead\r\n\r\nio2: Up to 64,000 IOPS ✅\r\n├── Can provision 20,000 IOPS\r\n├── Sub-millisecond latency\r\n└── Cost: Higher than gp3\r\n```\r\n\r\n**Decision:**\r\n- Need > 16,000 IOPS → Use io2\r\n- Need ≤ 16,000 IOPS → Use gp3 (cheaper)\r\n\r\n**Key Concept:** gp3 max = 16,000 IOPS; io2 for higher IOPS requirements",
    "why": [
      "*EBS Volume Limits:**",
      "```",
      "gp3: Up to 16,000 IOPS max ❌",
      "├── Cannot provision 20,000 IOPS",
      "└── Need io2 instead",
      "io2: Up to 64,000 IOPS ✅",
      "├── Can provision 20,000 IOPS",
      "├── Sub-millisecond latency",
      "└── Cost: Higher than gp3",
      "```",
      "*Decision:**",
      "Need > 16,000 IOPS → Use io2",
      "Need ≤ 16,000 IOPS → Use gp3 (cheaper)",
      "*Key Concept:** gp3 max = 16,000 IOPS; io2 for higher IOPS requirements"
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "rf-28",
    "q": "To establish Site-to-Site VPN between on-premises and AWS VPC, which components are mandatory? (Choose TWO)",
    "options": {
      "A": "NAT Gateway",
      "B": "Customer Gateway with public IP",
      "C": "Virtual Private Gateway attached to VPC",
      "D": "Internet Gateway",
      "E": "Transit Gateway"
    },
    "answer": [
      "B",
      "C"
    ],
    "explanation": "**Required VPN Components:**\r\n\r\n```\r\nOn-Premises:\r\n└── Customer Gateway (public IP) ✅\r\n\r\nAWS:\r\n└── Virtual Private Gateway (attached to VPC) ✅\r\n\r\nOptional:\r\n├── Transit Gateway (alternative to VGW)\r\n├── NAT Gateway (for outbound internet, not VPN)\r\n└── IGW (for general internet, not VPN)\r\n```\r\n\r\n**Key Concept:** VPN = Customer Gateway (public IP) + Virtual Private Gateway (AWS endpoint)",
    "why": [
      "*Required VPN Components:**",
      "```",
      "On-Premises:",
      "└── Customer Gateway (public IP) ✅",
      "AWS:",
      "└── Virtual Private Gateway (attached to VPC) ✅",
      "Optional:",
      "├── Transit Gateway (alternative to VGW)",
      "├── NAT Gateway (for outbound internet, not VPN)",
      "└── IGW (for general internet, not VPN)",
      "```",
      "*Key Concept:** VPN = Customer Gateway (public IP) + Virtual Private Gateway (AWS endpoint)"
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": true,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "rf-29",
    "q": "Capture real-time changes (inserts, updates, deletes) from DynamoDB table. Which solution?",
    "options": {
      "A": "Query table every minute with timestamp filter",
      "B": "Enable DynamoDB Streams, process with Lambda",
      "C": "Export table to S3 hourly",
      "D": "CloudWatch Events for DynamoDB API calls"
    },
    "answer": [
      "B"
    ],
    "explanation": "**DynamoDB Streams:**\r\n\r\n```\r\nFeatures:\r\n├── Captures: INSERT, MODIFY, DELETE\r\n├── Latency: Milliseconds (near real-time) ✅\r\n├── Retention: 24 hours\r\n└── Consumer: Lambda, Kinesis, custom apps\r\n\r\nFlow:\r\nDynamoDB Table → Stream → Lambda → Process\r\n```\r\n\r\n**Why others wrong:**\r\n- A: Polling is inefficient, 1-minute latency\r\n- C: Hourly export = 1-hour latency\r\n- D: CloudWatch Events tracks API calls, not data changes\r\n\r\n**Key Concept:** DynamoDB Streams = Real-time change data capture",
    "why": [
      "*DynamoDB Streams:**",
      "```",
      "Features:",
      "├── Captures: INSERT, MODIFY, DELETE",
      "├── Latency: Milliseconds (near real-time) ✅",
      "├── Retention: 24 hours",
      "└── Consumer: Lambda, Kinesis, custom apps",
      "Flow:",
      "DynamoDB Table → Stream → Lambda → Process",
      "```",
      "*Why others wrong:**",
      "A: Polling is inefficient, 1-minute latency",
      "C: Hourly export = 1-hour latency",
      "D: CloudWatch Events tracks API calls, not data changes",
      "*Key Concept:** DynamoDB Streams = Real-time change data capture"
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "rf-30",
    "q": "Direct Connect public VIF to S3. Traffic should stay in local region only (us-east-1). Which BGP tag?",
    "options": {
      "A": "NO_EXPORT",
      "B": "Local preference 200",
      "C": "BGP community 7224:9100 (local region)",
      "D": "BGP community 7224:9300 (global)"
    },
    "answer": [
      "C"
    ],
    "explanation": "• AWS Direct Connect Public VIFs support BGP community tags to control the scope of route advertisements:\n  - `7224:9100`: Local AWS Region only\n  - `7224:9200`: All AWS Regions in the same continent\n  - `7224:9300`: Global (all public AWS Regions)",
    "why": [
      "BGP community tag 7224:9100 restricts Direct Connect Public VIF route advertisements to the local AWS Region (us-east-1) only."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "rf-31",
    "q": "A serverless application receives client requests in XML format but the backend Lambda function expects JSON. Which API Gateway feature transforms the request format?",
    "options": {
      "A": "Method Request validation models",
      "B": "Method Response models",
      "C": "Integration Request mapping templates using VTL",
      "D": "Lambda proxy integration"
    },
    "answer": [
      "C"
    ],
    "explanation": "**API Gateway Request/Response Flow:**\r\n\r\n```\r\nClient → Method Request → Integration Request → Backend\r\n                          (Mapping Template)\r\n                          \r\nBackend → Integration Response → Method Response → Client\r\n          (Mapping Template)\r\n```\r\n\r\n**Mapping Templates:**\r\n- Written in Velocity Template Language (VTL)\r\n- Transform payload format (XML ↔ JSON)\r\n- Located in Integration Request/Response\r\n- Access request data via `$input` variable\r\n\r\n**Example VTL Template:**\r\n\r\n```vtl\r\n#set($inputRoot = $input.path('$'))\r\n{\r\n  \"name\": \"$inputRoot.user.name\",\r\n  \"email\": \"$inputRoot.user.email\"\r\n}\r\n```\r\n\r\n**Why others wrong:**\r\n- A/B: Models validate schema, don't transform data\r\n- D: Proxy integration passes request as-is to Lambda\r\n\r\n**Key Concept:** Mapping Templates = Request/response transformation layer in API Gateway",
    "why": [
      "*API Gateway Request/Response Flow:**",
      "```",
      "Client → Method Request → Integration Request → Backend",
      "(Mapping Template)",
      "Backend → Integration Response → Method Response → Client",
      "(Mapping Template)",
      "```",
      "*Mapping Templates:**",
      "Written in Velocity Template Language (VTL)",
      "Transform payload format (XML ↔ JSON)",
      "Located in Integration Request/Response",
      "Access request data via `$input` variable",
      "*Example VTL Template:**",
      "```vtl",
      "#set($inputRoot = $input.path('$'))",
      "{",
      "\"name\": \"$inputRoot.user.name\",",
      "\"email\": \"$inputRoot.user.email\"",
      "}",
      "```",
      "*Why others wrong:**",
      "A/B: Models validate schema, don't transform data",
      "D: Proxy integration passes request as-is to Lambda",
      "*Key Concept:** Mapping Templates = Request/response transformation layer in API Gateway"
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "rf-32",
    "q": "An Auto Scaling group has instances from multiple launch templates. During scale-in, which termination policy terminates instances with the oldest launch template first?",
    "options": {
      "A": "OldestInstance",
      "B": "OldestLaunchConfiguration",
      "C": "OldestLaunchTemplate",
      "D": "Default termination policy"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Auto Scaling Termination Policies control which instances are terminated first during scale-in:\n  - `OldestLaunchTemplate`: Terminates instances launched from the oldest launch template version.\n  - `OldestInstance`: Terminates the oldest instance by launch time.",
    "why": [
      "The OldestLaunchTemplate termination policy ensures instances running older launch template versions are terminated first during scale-in."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "rf-33",
    "q": "A CloudFormation template needs to generate a unique database password and store it in Secrets Manager. Which resource type handles this dynamic value generation?",
    "options": {
      "A": "CloudFormation parameter with NoEcho",
      "B": "CloudFormation output exported value",
      "C": "Custom resource backed by Lambda function",
      "D": "CloudFormation intrinsic function"
    },
    "answer": [
      "C"
    ],
    "explanation": "**CloudFormation Custom Resource:**\r\n\r\n```\r\nWhen to use Custom Resources:\r\n├── Dynamic value generation (passwords, random strings)\r\n├── Call external APIs during stack operations\r\n├── Complex logic not supported by CloudFormation\r\n└── Cleanup of resources outside CloudFormation\r\n\r\nFlow:\r\nCloudFormation → Lambda (Custom Resource) → Generate password\r\n                                          → Store in Secrets Manager\r\n                                          → Return ARN to CloudFormation\r\n```\r\n\r\n**Example:**\r\n\r\n```yaml\r\nResources:\r\n  PasswordGenerator:\r\n    Type: Custom::PasswordGenerator\r\n    Properties:\r\n      ServiceToken: !GetAtt PasswordGenLambda.Arn\r\n      Length: 32\r\n\r\n  PasswordGenLambda:\r\n    Type: AWS::Lambda::Function\r\n    Properties:\r\n      Runtime: python3.11\r\n      Handler: index.handler\r\n      Code:",
    "why": [
      "*CloudFormation Custom Resource:**",
      "```",
      "When to use Custom Resources:",
      "├── Dynamic value generation (passwords, random strings)",
      "├── Call external APIs during stack operations",
      "├── Complex logic not supported by CloudFormation",
      "└── Cleanup of resources outside CloudFormation",
      "Flow:",
      "CloudFormation → Lambda (Custom Resource) → Generate password",
      "→ Store in Secrets Manager",
      "→ Return ARN to CloudFormation",
      "```",
      "*Example:**",
      "```yaml",
      "Resources:",
      "PasswordGenerator:",
      "Type: Custom::PasswordGenerator",
      "Properties:",
      "ServiceToken: !GetAtt PasswordGenLambda.Arn",
      "Length: 32",
      "PasswordGenLambda:",
      "Type: AWS::Lambda::Function",
      "Properties:",
      "Runtime: python3.11",
      "Handler: index.handler",
      "Code:"
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "rf-34",
    "q": "A company has Amazon EFS in us-east-1 and needs to access it from EC2 instances in eu-west-1. What networking configuration enables this access?",
    "options": {
      "A": "Same-region VPC peering",
      "B": "Inter-region VPC peering connection",
      "C": "EFS replication to eu-west-1",
      "D": "VPN connection between regions"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Amazon EFS file systems can be mounted across AWS Regions using an Inter-Region VPC Peering connection (or AWS Transit Gateway Peering).\n• EC2 instances in `eu-west-1` route NFS traffic (port 2049) privately over the inter-region peering link to the EFS mount targets in `us-east-1`.",
    "why": [
      "An inter-region VPC peering connection allows EC2 instances in eu-west-1 to mount and access EFS mount targets in us-east-1 privately."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "rf-35",
    "q": "A data analytics team has a 100 TB Redshift cluster with slow query performance on large scans. Which feature accelerates queries by pushing computation closer to storage?",
    "options": {
      "A": "Redshift Spectrum",
      "B": "AQUA (Advanced Query Accelerator)",
      "C": "Concurrency Scaling",
      "D": "Short Query Acceleration"
    },
    "answer": [
      "B"
    ],
    "explanation": "• AQUA (Advanced Query Accelerator) for Amazon Redshift is a distributed, hardware-accelerated cache layer on RA3 nodes.\n• It pushes filtering, encryption, compression, and aggregation operations closer to the storage layer, delivering up to 10x faster query performance on large table scans without extra cost.",
    "why": [
      "Redshift AQUA (Advanced Query Accelerator) runs hardware-accelerated filtering and aggregation near storage to speed up large scans up to 10x."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "rf-36",
    "q": "A company planning AWS migration needs to discover on-premises application dependencies without installing agents on VMware VMs. Which discovery method works?",
    "options": {
      "A": "Agentless discovery using AWS Application Discovery Service Connector",
      "B": "Agent-based discovery",
      "C": "AWS Migration Hub import",
      "D": "CloudWatch agent"
    },
    "answer": [
      "A"
    ],
    "explanation": "**AWS Application Discovery Service:**\r\n\r\n```\r\nAgentless (VMware): ✅\r\n├── Deploy: OVA appliance in vCenter\r\n├── Discovers: VMs, CPU, memory, network, dependencies\r\n├── No agent installation on VMs ✅\r\n└── Limitations: VMware only, less detailed metrics\r\n\r\nAgent-based:\r\n├── Install: Discovery Agent on each server\r\n├── Discovers: Detailed process info, network connections\r\n├── Supports: VMware, physical servers, Hyper-V\r\n└── More accurate dependency mapping\r\n```\r\n\r\n**When to Use Each:**\r\n\r\n```\r\nUse Agentless when:\r\n├── VMware environment ✅\r\n├── Cannot install agents (security policy)\r\n├── Quick initial discovery\r\n└── Proof of concept\r\n\r\nUse Agent-based when:\r\n├── Need detailed process-level data\r\n├── Physical servers or non-VMware\r\n├── Accurate network dependency mapping\r\n└── Migration planning\r\n```\r\n\r\n**Key Concept:** Agentless = VMware OVA appliance (no VM agent installation)",
    "why": [
      "*AWS Application Discovery Service:**",
      "```",
      "Agentless (VMware): ✅",
      "├── Deploy: OVA appliance in vCenter",
      "├── Discovers: VMs, CPU, memory, network, dependencies",
      "├── No agent installation on VMs ✅",
      "└── Limitations: VMware only, less detailed metrics",
      "Agent-based:",
      "├── Install: Discovery Agent on each server",
      "├── Discovers: Detailed process info, network connections",
      "├── Supports: VMware, physical servers, Hyper-V",
      "└── More accurate dependency mapping",
      "```",
      "*When to Use Each:**",
      "```",
      "Use Agentless when:",
      "├── VMware environment ✅",
      "├── Cannot install agents (security policy)",
      "├── Quick initial discovery",
      "└── Proof of concept",
      "Use Agent-based when:",
      "├── Need detailed process-level data",
      "├── Physical servers or non-VMware",
      "├── Accurate network dependency mapping",
      "└── Migration planning",
      "```",
      "*Key Concept:** Agentless = VMware OVA appliance (no VM agent installation)"
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "rf-37",
    "q": "An application queries DynamoDB table by user_id (partition key) and needs to query by email address. What should the architect add?",
    "options": {
      "A": "Local Secondary Index (LSI)",
      "B": "Global Secondary Index (GSI) with email as partition key",
      "C": "DynamoDB Scan operation",
      "D": "Add email to sort key"
    },
    "answer": [
      "B"
    ],
    "explanation": "**DynamoDB Index Types:**\r\n\r\n```\r\nLocal Secondary Index (LSI):\r\n├── Same partition key as base table\r\n├── Different sort key\r\n├── Created at table creation (cannot add later) ❌\r\n└── Limit: 5 LSIs per table\r\n\r\nGlobal Secondary Index (GSI): ✅\r\n├── Different partition key (email) ✅\r\n├── Can be created anytime (even after table exists)\r\n├── Has its own RCU/WCU capacity\r\n└── Limit: 20 GSIs per table\r\n```\r\n\r\n**Example:**\r\n\r\n```\r\nBase Table:\r\n├── Partition Key: user_id\r\n└── Attributes: email, name, created_at\r\n\r\nGSI (EmailIndex):\r\n├── Partition Key: email ✅\r\n├── Projected attributes: user_id, name\r\n└── Query by email now efficient\r\n```\r\n\r\n**Query Examples:**\r\n\r\n```python\r\n# Without GSI (SLOW - requires Scan)\r\nresponse = table.scan(\r\n    FilterExpression=Attr('email').eq('user@example.com')\r\n)  # Reads entire table ❌\r\n\r\n# With GSI (FAST - direct query)\r\nresponse = table.query(\r\n    IndexName='EmailIndex',\r\n    KeyConditionExpression=Key('email').eq('user@example.com')\r\n)  # Reads only matching items ✅\r\n```\r\n\r\n**Why others wrong:**\r\n- A: LSI requires same partition key as base table\r\n- C: Scan reads entire table (expensive, slow)\r\n- D: Sort key is for range queries, not alternate access pattern\r\n\r\n**Key Concept:** GSI = New partition key for alternate query pattern (can add anytime)",
    "why": [
      "*DynamoDB Index Types:**",
      "```",
      "Local Secondary Index (LSI):",
      "├── Same partition key as base table",
      "├── Different sort key",
      "├── Created at table creation (cannot add later) ❌",
      "└── Limit: 5 LSIs per table",
      "Global Secondary Index (GSI): ✅",
      "├── Different partition key (email) ✅",
      "├── Can be created anytime (even after table exists)",
      "├── Has its own RCU/WCU capacity",
      "└── Limit: 20 GSIs per table",
      "```",
      "*Example:**",
      "```",
      "Base Table:",
      "├── Partition Key: user_id",
      "└── Attributes: email, name, created_at",
      "GSI (EmailIndex):",
      "├── Partition Key: email ✅",
      "├── Projected attributes: user_id, name",
      "└── Query by email now efficient",
      "```",
      "*Query Examples:**",
      "```python",
      "# Without GSI (SLOW - requires Scan)",
      "response = table.scan(",
      "FilterExpression=Attr('email').eq('user@example.com')",
      ")  # Reads entire table ❌",
      "# With GSI (FAST - direct query)",
      "response = table.query(",
      "IndexName='EmailIndex',",
      "KeyConditionExpression=Key('email').eq('user@example.com')",
      ")  # Reads only matching items ✅",
      "```",
      "*Why others wrong:**",
      "A: LSI requires same partition key as base table",
      "C: Scan reads entire table (expensive, slow)",
      "D: Sort key is for range queries, not alternate access pattern",
      "*Key Concept:** GSI = New partition key for alternate query pattern (can add anytime)"
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "rf-38",
    "q": "A Lambda function needs to access RDS database credentials that rotate every 30 days. Which solution provides automatic credential updates?",
    "options": {
      "A": "Store credentials in environment variables",
      "B": "AWS Secrets Manager with automatic rotation enabled",
      "C": "AWS Systems Manager Parameter Store (standard)",
      "D": "Store credentials in S3 with versioning"
    },
    "answer": [
      "B"
    ],
    "explanation": "**Secrets Manager vs Parameter Store:**\r\n\r\n```\r\nSecrets Manager: ✅\r\n├── Automatic rotation (Lambda function)\r\n├── RDS/DocumentDB/Redshift integration\r\n├── Cross-region replication\r\n├── Cost: $0.40/secret/month + $0.05/10K API calls\r\n└── Use case: Database credentials, API keys\r\n\r\nParameter Store:\r\n├── Rotation: Manual only ❌\r\n├── Free tier: Standard parameters\r\n├── Advanced: Rotation with custom Lambda\r\n└── Use case: Configuration data, SSM integration\r\n```\r\n\r\n**Automatic Rotation Flow:**\r\n\r\n```\r\nDay 1:\r\nSecrets Manager: password123\r\nRDS Database: password123\r\n\r\nDay 30 (Rotation triggered):\r\n├── Secrets Manager invokes rotation Lambda\r\n├── Lambda creates new password: password456\r\n├── Lambda updates RDS password: password456\r\n├── Lambda updates Secrets Manager: password456\r\n└── Lambda tests new credentials ✅\r\n\r\nApplication:\r\n└── Always calls GetSecretValue (gets current password)\r\n```\r\n\r\n**Lambda Code:**\r\n\r\n```python\r\nimport boto3\r\n\r\nsecrets_client = boto3.client('secretsmanager')\r\n\r\ndef lambda_handler(event, context):\r\n    # Always get latest secret\r\n    response = secrets_client.get_secret_value(\r\n        SecretId='prod/db/password'\r\n    )\r\n    password = response['SecretString']\r\n    \r\n    # Connect to database with current password\r\n    # No code changes needed during rotation ✅\r\n```\r\n\r\n**Why others wrong:**\r\n- A: Environment variables are static (no rotation)\r\n- C: Parameter Store doesn't have automatic rotation\r\n- D: S3 requires manual updates and application logic\r\n\r\n**Key Concept:** Secrets Manager = Automatic rotation + RDS integration",
    "why": [
      "*Secrets Manager vs Parameter Store:**",
      "```",
      "Secrets Manager: ✅",
      "├── Automatic rotation (Lambda function)",
      "├── RDS/DocumentDB/Redshift integration",
      "├── Cross-region replication",
      "├── Cost: $0.40/secret/month + $0.05/10K API calls",
      "└── Use case: Database credentials, API keys",
      "Parameter Store:",
      "├── Rotation: Manual only ❌",
      "├── Free tier: Standard parameters",
      "├── Advanced: Rotation with custom Lambda",
      "└── Use case: Configuration data, SSM integration",
      "```",
      "*Automatic Rotation Flow:**",
      "```",
      "Day 1:",
      "Secrets Manager: password123",
      "RDS Database: password123",
      "Day 30 (Rotation triggered):",
      "├── Secrets Manager invokes rotation Lambda",
      "├── Lambda creates new password: password456",
      "├── Lambda updates RDS password: password456",
      "├── Lambda updates Secrets Manager: password456",
      "└── Lambda tests new credentials ✅",
      "Application:",
      "└── Always calls GetSecretValue (gets current password)",
      "```",
      "*Lambda Code:**",
      "```python",
      "import boto3",
      "secrets_client = boto3.client('secretsmanager')",
      "def lambda_handler(event, context):",
      "# Always get latest secret",
      "response = secrets_client.get_secret_value(",
      "SecretId='prod/db/password'",
      ")",
      "password = response['SecretString']",
      "# Connect to database with current password",
      "# No code changes needed during rotation ✅",
      "```",
      "*Why others wrong:**",
      "A: Environment variables are static (no rotation)",
      "C: Parameter Store doesn't have automatic rotation",
      "D: S3 requires manual updates and application logic",
      "*Key Concept:** Secrets Manager = Automatic rotation + RDS integration"
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "rf-39",
    "q": "A company stores millions of files in S3 with unpredictable access patterns. Some files are accessed frequently, others rarely. Which storage class automatically moves objects between tiers?",
    "options": {
      "A": "S3 Standard with lifecycle policies",
      "B": "S3 Intelligent-Tiering",
      "C": "S3 One Zone-IA",
      "D": "S3 Glacier with lifecycle policies"
    },
    "answer": [
      "B"
    ],
    "explanation": "• S3 Intelligent-Tiering monitors access patterns per object and automatically transitions objects that haven't been accessed for 30 consecutive days to the Infrequent Access tier (and after 90 days to Archive Instant Access).\n• There are no retrieval fees when objects are accessed again.",
    "why": [
      "S3 Intelligent-Tiering automatically moves objects between access tiers based on per-object usage patterns with zero retrieval fees."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "rf-40",
    "q": "A compliance team needs to retrieve 100 GB of archived data from S3 Glacier Flexible Retrieval. They need the data within 12 hours. Which retrieval option meets this requirement cost-effectively?",
    "options": {
      "A": "Expedited retrieval (1-5 minutes)",
      "B": "Standard retrieval (3-5 hours)",
      "C": "Bulk retrieval (5-12 hours)",
      "D": "Glacier Instant Retrieval"
    },
    "answer": [
      "C"
    ],
    "explanation": "**Glacier Flexible Retrieval Options:**\r\n\r\n```\r\nExpedited (1-5 minutes):\r\n├── Cost: $0.03/GB + $10 per 1,000 requests\r\n├── 100 GB cost: 100 × $0.03 + $10 = $13 (HIGH)\r\n└── Use: Urgent, small datasets\r\n\r\nStandard (3-5 hours):\r\n├── Cost: $0.01/GB + $0.05 per 1,000 requests\r\n├── 100 GB cost: 100 × $0.01 + $0.05 = $1.05 (MEDIUM)\r\n└── Use: Most common, balanced cost/speed\r\n\r\nBulk (5-12 hours): ✅\r\n├── Cost: $0.0025/GB + $0.025 per 1,000 requests\r\n├── 100 GB cost: 100 × $0.0025 + $0.025 = $0.275 (LOWEST)\r\n└── Use: Large datasets, non-urgent (meets 12-hour requirement)\r\n```\r\n\r\n**Cost Comparison:**\r\n\r\n```\r\n100 GB Retrieval:\r\n├── Expedited: $13.00 (overkill for 12-hour SLA)\r\n├── Standard: $1.05 (faster than needed)\r\n└── Bulk: $0.275 ✅ (meets 12-hour requirement at lowest cost)\r\n\r\nSavings: $13.00 - $0.275 = $12.725 (98% cheaper than Expedited)\r\n```\r\n\r\n**Why others wrong:**\r\n- A: Expedited too expensive for this use case\r\n- B: Standard works but costs 4x more than Bulk\r\n- D: Glacier Instant Retrieval is different storage class (ms retrieval)\r\n\r\n**Key Concept:** Bulk retrieval = Most cost-effective for large datasets with flexible timeline",
    "why": [
      "*Glacier Flexible Retrieval Options:**",
      "```",
      "Expedited (1-5 minutes):",
      "├── Cost: $0.03/GB + $10 per 1,000 requests",
      "├── 100 GB cost: 100 × $0.03 + $10 = $13 (HIGH)",
      "└── Use: Urgent, small datasets",
      "Standard (3-5 hours):",
      "├── Cost: $0.01/GB + $0.05 per 1,000 requests",
      "├── 100 GB cost: 100 × $0.01 + $0.05 = $1.05 (MEDIUM)",
      "└── Use: Most common, balanced cost/speed",
      "Bulk (5-12 hours): ✅",
      "├── Cost: $0.0025/GB + $0.025 per 1,000 requests",
      "├── 100 GB cost: 100 × $0.0025 + $0.025 = $0.275 (LOWEST)",
      "└── Use: Large datasets, non-urgent (meets 12-hour requirement)",
      "```",
      "*Cost Comparison:**",
      "```",
      "100 GB Retrieval:",
      "├── Expedited: $13.00 (overkill for 12-hour SLA)",
      "├── Standard: $1.05 (faster than needed)",
      "└── Bulk: $0.275 ✅ (meets 12-hour requirement at lowest cost)",
      "Savings: $13.00 - $0.275 = $12.725 (98% cheaper than Expedited)",
      "```",
      "*Why others wrong:**",
      "A: Expedited too expensive for this use case",
      "B: Standard works but costs 4x more than Bulk",
      "D: Glacier Instant Retrieval is different storage class (ms retrieval)",
      "*Key Concept:** Bulk retrieval = Most cost-effective for large datasets with flexible timeline"
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "rf-41",
    "q": "A high-frequency trading application requires single-digit millisecond latency between instances. Which placement group type should be used?",
    "options": {
      "A": "Cluster placement group",
      "B": "Spread placement group",
      "C": "Partition placement group",
      "D": "Default VPC placement"
    },
    "answer": [
      "A"
    ],
    "explanation": "• Cluster Placement Groups pack EC2 instances close together inside a single Availability Zone on non-blocking high-speed hardware.\n• Provides up to 100 Gbps network throughput and single-digit microsecond/millisecond latency for HPC and high-frequency trading.",
    "why": [
      "A Cluster Placement Group co-locates instances in a single Availability Zone to deliver the lowest possible network latency and highest throughput."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "rf-42",
    "q": "A simple webhook needs to trigger a Lambda function via HTTPS. The function doesn't require authentication or request transformation. What's the most cost-effective solution?",
    "options": {
      "A": "API Gateway REST API",
      "B": "API Gateway HTTP API",
      "C": "Lambda Function URL",
      "D": "Application Load Balancer"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Lambda Function URLs provide a dedicated HTTPS endpoint for a single Lambda function at no additional charge beyond standard Lambda invocation and duration rates.\n• Ideal for simple webhooks that do not need API Gateway's caching, VTL transformations, or complex authorizers.",
    "why": [
      "Lambda Function URLs provide a built-in HTTPS endpoint at zero additional API Gateway cost for simple webhooks."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "rf-43",
    "q": "A multi-step order processing workflow needs to coordinate Lambda functions with error handling and retry logic. Which service orchestrates this best?",
    "options": {
      "A": "SQS queue with Lambda",
      "B": "EventBridge rule with multiple targets",
      "C": "Step Functions state machine",
      "D": "SNS topic with Lambda subscriptions"
    },
    "answer": [
      "C"
    ],
    "explanation": "**Step Functions vs SQS:**\r\n\r\n```\r\nStep Functions: ✅\r\n├── Visual workflow orchestration\r\n├── Built-in error handling, retries\r\n├── Conditional branching (if/else)\r\n├── Parallel execution\r\n├── Wait states (delays)\r\n└── Use: Complex workflows, state management\r\n\r\nSQS:\r\n├── Simple message queue\r\n├── Decoupling services\r\n├── No built-in orchestration\r\n└── Use: Asynchronous job queues\r\n```\r\n\r\n**Step Functions Example:**\r\n\r\n```\r\nOrder Processing Workflow:\r\n\r\n┌─────────────┐\r\n│ Validate    │\r\n│ Order       │\r\n└──────┬──────┘\r\n       │\r\n       ▼\r\n┌─────────────┐     Error    ┌─────────────┐\r\n│ Check       │─────────────►│ Notify      │\r\n│ Inventory   │              │ Admin       │\r\n└──────┬──────┘              └─────────────┘\r\n       │ Success\r\n       ▼\r\n┌─────────────┐\r\n│ Charge      │\r\n│ Credit Card │\r\n└──────┬──────┘\r\n       │\r\n       ▼\r\n┌─────────────┐\r\n│ Ship Order  │\r\n└─────────────┘\r\n```\r\n\r\n**Key Features:**\r\n\r\n```\r\nStep Functions provides:\r\n├── Visual designer ✅\r\n├── Automatic retries with backoff\r\n├── Error handling (catch states)\r\n├── State persistence\r\n├── Execution history\r\n└── Integration with 200+ AWS services\r\n```\r\n\r\n**Why others wrong:**\r\n- A: SQS requires custom orchestration logic\r\n- B: EventBridge routes events, doesn't orchestrate workflows\r\n- D: SNS fan-out, no workflow orchestration\r\n\r\n**Key Concept:** Step Functions = Serverless workflow orchestration with visual designer",
    "why": [
      "*Step Functions vs SQS:**",
      "```",
      "Step Functions: ✅",
      "├── Visual workflow orchestration",
      "├── Built-in error handling, retries",
      "├── Conditional branching (if/else)",
      "├── Parallel execution",
      "├── Wait states (delays)",
      "└── Use: Complex workflows, state management",
      "SQS:",
      "├── Simple message queue",
      "├── Decoupling services",
      "├── No built-in orchestration",
      "└── Use: Asynchronous job queues",
      "```",
      "*Step Functions Example:**",
      "```",
      "Order Processing Workflow:",
      "┌─────────────┐",
      "│ Validate    │",
      "│ Order       │",
      "└──────┬──────┘",
      "│",
      "▼",
      "┌─────────────┐     Error    ┌─────────────┐",
      "│ Check       │─────────────►│ Notify      │",
      "│ Inventory   │              │ Admin       │",
      "└──────┬──────┘              └─────────────┘",
      "│ Success",
      "▼",
      "┌─────────────┐",
      "│ Charge      │",
      "│ Credit Card │",
      "└──────┬──────┘",
      "│",
      "▼",
      "┌─────────────┐",
      "│ Ship Order  │",
      "└─────────────┘",
      "```",
      "*Key Features:**",
      "```",
      "Step Functions provides:",
      "├── Visual designer ✅",
      "├── Automatic retries with backoff",
      "├── Error handling (catch states)",
      "├── State persistence",
      "├── Execution history",
      "└── Integration with 200+ AWS services",
      "```",
      "*Why others wrong:**",
      "A: SQS requires custom orchestration logic",
      "B: EventBridge routes events, doesn't orchestrate workflows",
      "D: SNS fan-out, no workflow orchestration",
      "*Key Concept:** Step Functions = Serverless workflow orchestration with visual designer"
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "rf-44",
    "q": "An organization has EC2, RDS, DynamoDB, and EFS across multiple accounts and needs centralized backup management with compliance policies. Which solution provides this?",
    "options": {
      "A": "Lambda scripts to snapshot each resource",
      "B": "AWS Backup with backup plans and vault lock",
      "C": "EBS snapshots + RDS automated backups + DynamoDB PITR",
      "D": "Third-party backup software"
    },
    "answer": [
      "B"
    ],
    "explanation": "• AWS Backup provides centralized, policy-based backup management across multiple AWS accounts (via AWS Organizations) for EC2, EBS, RDS, DynamoDB, EFS, FSx, and S3.\n• AWS Backup Vault Lock enforces WORM immutability to meet strict compliance mandates.",
    "why": [
      "AWS Backup with Backup Plans and Vault Lock centralizes cross-account backup governance and enforces compliance immutability."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "rf-45",
    "q": "A serverless application has 1,000 concurrent Lambda functions connecting to RDS MySQL, causing \"Too many connections\" errors. Which solution resolves this?",
    "options": {
      "A": "Increase RDS max_connections parameter",
      "B": "RDS Proxy to pool connections",
      "C": "ElastiCache in front of RDS",
      "D": "Read replicas"
    },
    "answer": [
      "B"
    ],
    "explanation": "**RDS Proxy:**\r\n\r\n```\r\nWithout RDS Proxy: ❌\r\nLambda (1,000 concurrent) → RDS (max 150 connections)\r\n└── Error: \"Too many connections\"\r\n\r\nWith RDS Proxy: ✅\r\nLambda (1,000 concurrent) → RDS Proxy → RDS (50 connections)\r\n└── Proxy pools and reuses connections\r\n```\r\n\r\n**RDS Proxy Features:**\r\n\r\n```\r\nConnection Pooling:\r\n├── Maintains pool of DB connections\r\n├── Lambda functions share connections\r\n├── Reduces connection overhead\r\n└── Prevents max_connections errors ✅\r\n\r\nAdditional Benefits:\r\n├── IAM authentication\r\n├── Secrets Manager integration\r\n├── Failover <30 seconds (vs 2+ minutes)\r\n└── Preserves connections during failover\r\n```\r\n\r\n**Architecture:**\r\n\r\n```\r\n┌──────────────┐\r\n│   Lambda     │───┐\r\n│  Function 1  │   │\r\n└──────────────┘   │\r\n                   │\r\n┌──────────────┐   │      ┌─────────────┐      ┌──────────┐\r\n│   Lambda     │───┼─────►│ RDS Proxy   │─────►│   RDS    │\r\n│  Function 2  │   │      │ (connection │      │ (MySQL)  │\r\n└──────────────┘   │      │  pooling)   │      │ 50 conn  │\r\n                   │      └─────────────┘      └──────────┘\r\n┌──────────────┐   │\r\n│   Lambda     │───┘\r\n│  Function N  │\r\n└──────────────┘\r\n\r\n1,000 Lambda invocations → 50 RDS connections (pooled)\r\n```\r\n\r\n**Why others wrong:**\r\n- A: Increasing max_connections uses more memory, doesn't solve Lambda scale\r\n- C: ElastiCache caches data, doesn't manage connections\r\n- D: Read replicas for read scaling, not connection management\r\n\r\n**Key Concept:** RDS Proxy = Connection pooling for serverless applications",
    "why": [
      "*RDS Proxy:**",
      "```",
      "Without RDS Proxy: ❌",
      "Lambda (1,000 concurrent) → RDS (max 150 connections)",
      "└── Error: \"Too many connections\"",
      "With RDS Proxy: ✅",
      "Lambda (1,000 concurrent) → RDS Proxy → RDS (50 connections)",
      "└── Proxy pools and reuses connections",
      "```",
      "*RDS Proxy Features:**",
      "```",
      "Connection Pooling:",
      "├── Maintains pool of DB connections",
      "├── Lambda functions share connections",
      "├── Reduces connection overhead",
      "└── Prevents max_connections errors ✅",
      "Additional Benefits:",
      "├── IAM authentication",
      "├── Secrets Manager integration",
      "├── Failover <30 seconds (vs 2+ minutes)",
      "└── Preserves connections during failover",
      "```",
      "*Architecture:**",
      "```",
      "┌──────────────┐",
      "│   Lambda     │───┐",
      "│  Function 1  │   │",
      "└──────────────┘   │",
      "│",
      "┌──────────────┐   │      ┌─────────────┐      ┌──────────┐",
      "│   Lambda     │───┼─────►│ RDS Proxy   │─────►│   RDS    │",
      "│  Function 2  │   │      │ (connection │      │ (MySQL)  │",
      "└──────────────┘   │      │  pooling)   │      │ 50 conn  │",
      "│      └─────────────┘      └──────────┘",
      "┌──────────────┐   │",
      "│   Lambda     │───┘",
      "│  Function N  │",
      "└──────────────┘",
      "1,000 Lambda invocations → 50 RDS connections (pooled)",
      "```",
      "*Why others wrong:**",
      "A: Increasing max_connections uses more memory, doesn't solve Lambda scale",
      "C: ElastiCache caches data, doesn't manage connections",
      "D: Read replicas for read scaling, not connection management",
      "*Key Concept:** RDS Proxy = Connection pooling for serverless applications"
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "rf-46",
    "q": "A DevOps team needs to query CloudWatch Logs to find all ERROR messages in the last hour. Which tool provides interactive log queries?",
    "options": {
      "A": "CloudWatch Logs Insights",
      "B": "Athena querying S3-exported logs",
      "C": "CloudWatch Logs filter patterns",
      "D": "Elasticsearch (OpenSearch)"
    },
    "answer": [
      "A"
    ],
    "explanation": "• CloudWatch Logs Insights enables interactive, real-time ad-hoc querying and filtering of log groups in CloudWatch Logs using a purpose-built query language.\n• Requires zero infrastructure setup and returns results in seconds.",
    "why": [
      "CloudWatch Logs Insights provides interactive, real-time query capabilities directly over CloudWatch log groups."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "rf-47",
    "q": "An ECS cluster runs tasks that should be evenly distributed across all EC2 instances for optimal resource utilization. Which task placement strategy achieves this?",
    "options": {
      "A": "binpack (CPU or memory)",
      "B": "spread (instanceId)",
      "C": "random",
      "D": "distinctInstance"
    },
    "answer": [
      "B"
    ],
    "explanation": "• The `spread` task placement strategy (`spread(instanceId)` or `spread(attribute:ecs.availability-zone)`) distributes ECS tasks evenly across all container instances in the cluster.\n• `binpack` packs tasks onto the fewest instances to save cost; `distinctInstance` places each task on a separate instance.",
    "why": [
      "The spread(instanceId) placement strategy distributes ECS tasks evenly across all available EC2 container instances."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "rf-48",
    "q": "A global application needs to upload large files (5 GB) to S3 from users worldwide with minimal latency. Which feature optimizes uploads?",
    "options": {
      "A": "S3 Transfer Acceleration",
      "B": "CloudFront with S3 origin",
      "C": "S3 Multipart Upload",
      "D": "S3 Cross-Region Replication"
    },
    "answer": [
      "A"
    ],
    "explanation": "• S3 Transfer Acceleration speeds up long-distance file uploads (and downloads) by routing traffic to the nearest Amazon CloudFront Edge Location and across AWS's private global backbone network to the target S3 bucket.",
    "why": [
      "S3 Transfer Acceleration routes global uploads through the nearest CloudFront Edge Location over the AWS global backbone."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "rf-49",
    "q": "An application needs protection against SQL injection and cross-site scripting attacks. Which AWS WAF configuration provides this quickest?",
    "options": {
      "A": "Create custom WAF rules using regular expressions",
      "B": "Use AWS Managed Rules for SQL injection and XSS",
      "C": "Enable GuardDuty for web application protection",
      "D": "Use AWS Shield Advanced"
    },
    "answer": [
      "B"
    ],
    "explanation": "**AWS WAF Managed Rules:**\r\n\r\n```\r\nAWS Managed Rules: ✅\r\n├── Pre-configured rule groups\r\n├── Maintained by AWS security team\r\n├── Free (included with WAF pricing)\r\n├── Rules:\r\n│   ├── SQL injection ✅\r\n│   ├── Cross-site scripting (XSS) ✅\r\n│   ├── Known bad inputs\r\n│   └── IP reputation lists\r\n└── Setup: 5 minutes (add to web ACL)\r\n\r\nCustom Rules:\r\n├── Manual regex patterns\r\n├── Maintenance overhead\r\n├── Testing required\r\n└── Use: Specific business logic protection\r\n```\r\n\r\n**Configuration:**\r\n\r\n```bash\r\n# Create Web ACL with managed rules\r\naws wafv2 create-web-acl \\\r\n  --name MyWebACL \\\r\n  --scope REGIONAL \\\r\n  --default-action Allow={} \\\r\n  --rules file://rules.json\r\n\r\n# rules.json\r\n[\r\n  {\r\n    \"Name\": \"AWSManagedRulesCommonRuleSet\",\r\n    \"Priority\": 0,\r\n    \"Statement\": {\r\n      \"ManagedRuleGroupStatement\": {\r\n        \"VendorName\": \"AWS\",\r\n        \"Name\": \"AWSManagedRulesCommonRuleSet\"\r\n      }\r\n    },\r\n    \"OverrideAction\": {\"None\": {}},\r\n    \"VisibilityConfig\": {...}\r\n  },\r\n  {\r\n    \"Name\": \"AWSManagedRulesSQLiRuleSet\",\r\n    \"Priority\": 1,\r\n    \"Statement\": {\r\n      \"ManagedRuleGroupStatement\": {\r\n        \"VendorName\": \"AWS\",\r\n        \"Name\": \"AWSManagedRulesSQLiRuleSet\"\r\n      }\r\n    },\r\n    \"OverrideAction\": {\"None\": {}},\r\n    \"VisibilityConfig\": {...}\r\n  }\r\n]\r\n```\r\n\r\n**Available Managed Rule Groups:**\r\n\r\n```\r\n├── Core Rule Set (CRS) - Common attacks\r\n├── SQL Database - SQL injection\r\n├── Known Bad Inputs - Malformed requests\r\n├── IP Reputation - Known malicious IPs\r\n├── Anonymous IP - Tor, VPN, proxies\r\n├── Linux/Windows - OS-specific exploits\r\n└── PHP/WordPress - Application-specific\r\n```\r\n\r\n**Why others wrong:**\r\n- A: Custom rules take longer to develop and maintain\r\n- C: GuardDuty detects threats, doesn't block web attacks\r\n- D: Shield protects against DDoS, not app-layer attacks\r\n\r\n**Key Concept:** AWS Managed Rules = Quick, pre-built protection (SQL injection, XSS)",
    "why": [
      "*AWS WAF Managed Rules:**",
      "```",
      "AWS Managed Rules: ✅",
      "├── Pre-configured rule groups",
      "├── Maintained by AWS security team",
      "├── Free (included with WAF pricing)",
      "├── Rules:",
      "│   ├── SQL injection ✅",
      "│   ├── Cross-site scripting (XSS) ✅",
      "│   ├── Known bad inputs",
      "│   └── IP reputation lists",
      "└── Setup: 5 minutes (add to web ACL)",
      "Custom Rules:",
      "├── Manual regex patterns",
      "├── Maintenance overhead",
      "├── Testing required",
      "└── Use: Specific business logic protection",
      "```",
      "*Configuration:**",
      "```bash",
      "# Create Web ACL with managed rules",
      "aws wafv2 create-web-acl \\",
      "--name MyWebACL \\",
      "--scope REGIONAL \\",
      "--default-action Allow={} \\",
      "--rules file://rules.json",
      "# rules.json",
      "[",
      "{",
      "\"Name\": \"AWSManagedRulesCommonRuleSet\",",
      "\"Priority\": 0,",
      "\"Statement\": {",
      "\"ManagedRuleGroupStatement\": {",
      "\"VendorName\": \"AWS\",",
      "\"Name\": \"AWSManagedRulesCommonRuleSet\"",
      "}",
      "},",
      "\"OverrideAction\": {\"None\": {}},",
      "\"VisibilityConfig\": {...}",
      "},",
      "{",
      "\"Name\": \"AWSManagedRulesSQLiRuleSet\",",
      "\"Priority\": 1,",
      "\"Statement\": {",
      "\"ManagedRuleGroupStatement\": {",
      "\"VendorName\": \"AWS\",",
      "\"Name\": \"AWSManagedRulesSQLiRuleSet\"",
      "}",
      "},",
      "\"OverrideAction\": {\"None\": {}},",
      "\"VisibilityConfig\": {...}",
      "}",
      "]",
      "```",
      "*Available Managed Rule Groups:**",
      "```",
      "├── Core Rule Set (CRS) - Common attacks",
      "├── SQL Database - SQL injection",
      "├── Known Bad Inputs - Malformed requests",
      "├── IP Reputation - Known malicious IPs",
      "├── Anonymous IP - Tor, VPN, proxies",
      "├── Linux/Windows - OS-specific exploits",
      "└── PHP/WordPress - Application-specific",
      "```",
      "*Why others wrong:**",
      "A: Custom rules take longer to develop and maintain",
      "C: GuardDuty detects threats, doesn't block web attacks",
      "D: Shield protects against DDoS, not app-layer attacks",
      "*Key Concept:** AWS Managed Rules = Quick, pre-built protection (SQL injection, XSS)"
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "rf-50",
    "q": "A global application uses Aurora Global Database with primary in us-east-1 and secondary in eu-west-1. The us-east-1 region fails. What's the recovery process?",
    "options": {
      "A": "Automatic failover to eu-west-1 (no action needed)",
      "B": "Promote eu-west-1 to primary (manual, <1 minute)",
      "C": "Restore from snapshot in eu-west-1",
      "D": "Wait for us-east-1 to recover"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Aurora Global Database replicates storage across regions with < 1 second lag (RPO < 1s).\n• If the primary region fails, you perform a managed failover / manual promotion of the secondary region (`eu-west-1`) to become the standalone primary read/write cluster in under 1 minute (RTO < 1 min).",
    "why": [
      "Aurora Global Database recovers from a full regional outage by promoting the secondary region to primary in under 1 minute."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "rf-51",
    "q": "A security team wants to access EC2 instances for troubleshooting without opening SSH port 22 or managing SSH keys. Which solution provides secure shell access?",
    "options": {
      "A": "EC2 Instance Connect",
      "B": "Systems Manager Session Manager",
      "C": "Bastion host with key management",
      "D": "Systems Manager Run Command"
    },
    "answer": [
      "B"
    ],
    "explanation": "• AWS Systems Manager Session Manager provides secure, auditable shell access to EC2 instances via the AWS Console or CLI without opening inbound port 22 (SSH), managing SSH keys, or deploying bastion hosts.",
    "why": [
      "Systems Manager Session Manager enables browser/CLI shell access via IAM and the SSM Agent with zero open inbound ports or SSH keys."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "rf-52",
    "q": "An application stores millions of small objects in S3 with SSE-KMS encryption. KMS costs are very high due to API request volume. Which feature reduces KMS costs?",
    "options": {
      "A": "Use SSE-S3 instead",
      "B": "Enable S3 Bucket Keys",
      "C": "Use client-side encryption",
      "D": "Reduce KMS key rotation frequency"
    },
    "answer": [
      "B"
    ],
    "explanation": "**S3 Bucket Keys:**\r\n\r\n```\r\nWithout Bucket Keys:\r\nEach object → Separate KMS API call → $0.03 per 10K requests\r\n├── 1 million objects = 1M KMS requests\r\n└── Cost: 1M ÷ 10K × $0.03 = $3.00\r\n\r\nWith Bucket Keys: ✅\r\nS3 requests bucket key from KMS → Uses bucket key for all objects\r\n├── 1 million objects = ~1 KMS request (reused key)\r\n└── Cost: ~$0.00003 (99% reduction!)\r\n```\r\n\r\n**How It Works:**\r\n\r\n```\r\nTraditional SSE-KMS:\r\nObject 1 → KMS API call (generate data key) → Encrypt → S3\r\nObject 2 → KMS API call (generate data key) → Encrypt → S3\r\nObject 3 → KMS API call (generate data key) → Encrypt → S3\r\n└── N objects = N KMS calls ❌\r\n\r\nWith S3 Bucket Keys:\r\nStep 1: S3 calls KMS once → Get bucket key\r\nStep 2: S3 generates data keys from bucket key (no KMS)\r\nObject 1 → Encrypt with bucket key-derived key → S3\r\nObject 2 → Encrypt with bucket key-derived key → S3\r\nObject 3 → Encrypt with bucket key-derived key → S3\r\n└── N objects = 1 KMS call ✅\r\n```\r\n\r\n**Cost Comparison:**\r\n\r\n```\r\n1 million PUTs per day:\r\nWithout Bucket Keys:\r\n├── KMS requests: 1,000,000\r\n├── Cost: 100 × $0.03 = $3.00/day\r\n└── Monthly: $90\r\n\r\nWith Bucket Keys: ✅\r\n├── KMS requests: ~1 (bucket key cached)\r\n├── Cost: ~$0.00003/day\r\n└── Monthly: ~$0.001\r\n\r\nSavings: 99.99% reduction in KMS costs\r\n```\r\n\r\n**Enable Bucket Keys:**\r\n\r\n```bash\r\n# New bucket\r\naws s3api create-bucket \\\r\n  --bucket my-bucket \\\r\n  --create-bucket-configuration LocationConstraint=us-west-2\r\n\r\naws s3api put-bucket-encryption \\\r\n  --bucket my-bucket \\\r\n  --server-side-encryption-configuration '{\r\n    \"Rules\": [{\r\n      \"ApplyServerSideEncryptionByDefault\": {\r\n        \"SSEAlgorithm\": \"aws:kms\",\r\n        \"KMSMasterKeyID\": \"arn:aws:kms:us-west-2:123456789012:key/abcd-1234\"\r\n      },\r\n      \"BucketKeyEnabled\": true\r\n    }]\r\n  }'\r\n\r\n# Existing bucket\r\naws s3api put-bucket-encryption \\\r\n  --bucket existing-bucket \\\r\n  --server-side-encryption-configuration '{\r\n    \"Rules\": [{\r\n      \"ApplyServerSideEncryptionByDefault\": {\r\n        \"SSEAlgorithm\": \"aws:kms\",\r\n        \"KMSMasterKeyID\": \"arn:aws:kms:us-west-2:123456789012:key/abcd-1234\"\r\n      },\r\n      \"BucketKeyEnabled\": true\r\n    }]\r\n  }'\r\n```\r\n\r\n**Trade-offs:**\r\n\r\n```\r\nBenefits:\r\n├── 99% reduction in KMS costs ✅\r\n├── Reduced KMS throttling risk\r\n├── No application changes needed\r\n└── Works with existing buckets\r\n\r\nConsiderations:\r\n├── Bucket key cached for 5 minutes (rotation delay)\r\n├── CloudTrail shows bucket ARN, not object ARN in KMS logs\r\n└── No downside for most use cases\r\n```\r\n\r\n**Why others wrong:**\r\n- A: SSE-S3 removes KMS control (not meeting encryption requirements)\r\n- C: Client-side encryption requires application changes\r\n- D: Key rotation doesn't affect per-request costs\r\n\r\n**Key Concept:** S3 Bucket Keys = Reuse KMS-generated key for multiple objects (99% cost reduction)",
    "why": [
      "*S3 Bucket Keys:**",
      "```",
      "Without Bucket Keys:",
      "Each object → Separate KMS API call → $0.03 per 10K requests",
      "├── 1 million objects = 1M KMS requests",
      "└── Cost: 1M ÷ 10K × $0.03 = $3.00",
      "With Bucket Keys: ✅",
      "S3 requests bucket key from KMS → Uses bucket key for all objects",
      "├── 1 million objects = ~1 KMS request (reused key)",
      "└── Cost: ~$0.00003 (99% reduction!)",
      "```",
      "*How It Works:**",
      "```",
      "Traditional SSE-KMS:",
      "Object 1 → KMS API call (generate data key) → Encrypt → S3",
      "Object 2 → KMS API call (generate data key) → Encrypt → S3",
      "Object 3 → KMS API call (generate data key) → Encrypt → S3",
      "└── N objects = N KMS calls ❌",
      "With S3 Bucket Keys:",
      "Step 1: S3 calls KMS once → Get bucket key",
      "Step 2: S3 generates data keys from bucket key (no KMS)",
      "Object 1 → Encrypt with bucket key-derived key → S3",
      "Object 2 → Encrypt with bucket key-derived key → S3",
      "Object 3 → Encrypt with bucket key-derived key → S3",
      "└── N objects = 1 KMS call ✅",
      "```",
      "*Cost Comparison:**",
      "```",
      "1 million PUTs per day:",
      "Without Bucket Keys:",
      "├── KMS requests: 1,000,000",
      "├── Cost: 100 × $0.03 = $3.00/day",
      "└── Monthly: $90",
      "With Bucket Keys: ✅",
      "├── KMS requests: ~1 (bucket key cached)",
      "├── Cost: ~$0.00003/day",
      "└── Monthly: ~$0.001",
      "Savings: 99.99% reduction in KMS costs",
      "```",
      "*Enable Bucket Keys:**",
      "```bash",
      "# New bucket",
      "aws s3api create-bucket \\",
      "--bucket my-bucket \\",
      "--create-bucket-configuration LocationConstraint=us-west-2",
      "aws s3api put-bucket-encryption \\",
      "--bucket my-bucket \\",
      "--server-side-encryption-configuration '{",
      "\"Rules\": [{",
      "\"ApplyServerSideEncryptionByDefault\": {",
      "\"SSEAlgorithm\": \"aws:kms\",",
      "\"KMSMasterKeyID\": \"arn:aws:kms:us-west-2:123456789012:key/abcd-1234\"",
      "},",
      "\"BucketKeyEnabled\": true",
      "}]",
      "}'",
      "# Existing bucket",
      "aws s3api put-bucket-encryption \\",
      "--bucket existing-bucket \\",
      "--server-side-encryption-configuration '{",
      "\"Rules\": [{",
      "\"ApplyServerSideEncryptionByDefault\": {",
      "\"SSEAlgorithm\": \"aws:kms\",",
      "\"KMSMasterKeyID\": \"arn:aws:kms:us-west-2:123456789012:key/abcd-1234\"",
      "},",
      "\"BucketKeyEnabled\": true",
      "}]",
      "}'",
      "```",
      "*Trade-offs:**",
      "```",
      "Benefits:",
      "├── 99% reduction in KMS costs ✅",
      "├── Reduced KMS throttling risk",
      "├── No application changes needed",
      "└── Works with existing buckets",
      "Considerations:",
      "├── Bucket key cached for 5 minutes (rotation delay)",
      "├── CloudTrail shows bucket ARN, not object ARN in KMS logs",
      "└── No downside for most use cases",
      "```",
      "*Why others wrong:**",
      "A: SSE-S3 removes KMS control (not meeting encryption requirements)",
      "C: Client-side encryption requires application changes",
      "D: Key rotation doesn't affect per-request costs",
      "*Key Concept:** S3 Bucket Keys = Reuse KMS-generated key for multiple objects (99% cost reduction)"
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "rf-53",
    "q": "A data processing application takes 10 minutes to load a 16 GB dataset into memory. The application runs intermittently. Which feature preserves memory state between sessions?",
    "options": {
      "A": "EC2 Stop/Start",
      "B": "EC2 Hibernate",
      "C": "EBS snapshot before stopping",
      "D": "Instance store persistence"
    },
    "answer": [
      "B"
    ],
    "explanation": "• EC2 Hibernation saves the in-memory (RAM) state of the instance to the encrypted root EBS volume before stopping the instance.\n• When restarted, the RAM state is restored directly into memory, avoiding the 10-minute dataset reload.",
    "why": [
      "EC2 Hibernate persists RAM contents to the encrypted EBS root volume so in-memory datasets resume immediately upon startup."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "rf-54",
    "q": "An ECS cluster on EC2 launch type needs to scale both the number of tasks and the underlying EC2 instances. What must be configured?",
    "options": {
      "A": "ECS Service Auto Scaling only",
      "B": "EC2 Auto Scaling only",
      "C": "Both ECS Service Auto Scaling AND EC2 Auto Scaling (Capacity Provider)",
      "D": "Kubernetes HPA"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Scaling an ECS on EC2 cluster requires two layers:\n  1. ECS Service Auto Scaling to adjust the desired task count.\n  2. ECS Cluster Auto Scaling (via an Auto Scaling group Capacity Provider) to scale the underlying EC2 instances based on task capacity demands.",
    "why": [
      "ECS on EC2 requires both ECS Service Auto Scaling (for tasks) and an EC2 Auto Scaling Capacity Provider (for underlying instances)."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "rf-55",
    "q": "A company has a Direct Connect connection and needs to access both VPCs (private subnets) and S3 (public service). Which virtual interfaces are required?",
    "options": {
      "A": "Private VIF only",
      "B": "Public VIF only",
      "C": "Both Private VIF and Public VIF",
      "D": "Transit VIF"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Direct Connect Virtual Interfaces (VIFs):\n  - Private VIF: Connects to private VPC resources via a Virtual Private Gateway (VGW) or Direct Connect Gateway.\n  - Public VIF: Connects to public AWS services (such as Amazon S3 and DynamoDB) without traversing the public internet.",
    "why": [
      "Accessing both private VPC subnets and public services like Amazon S3 over Direct Connect requires both a Private VIF and a Public VIF."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "rf-56",
    "q": "An application has deployments in us-east-1 (70% traffic) and us-west-2 (30% traffic) for A/B testing. Which Route 53 routing policy implements this?",
    "options": {
      "A": "Failover routing",
      "B": "Latency-based routing",
      "C": "Weighted routing",
      "D": "Geolocation routing"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Route 53 Weighted Routing Policy lets you split traffic across multiple endpoints based on assigned numerical weights (e.g., 70% to `us-east-1` and 30% to `us-west-2`), ideal for A/B testing and canary rollouts.",
    "why": [
      "Route 53 Weighted Routing distributes DNS responses across endpoints according to configured percentage weights (70/30)."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "rf-57",
    "q": "An application needs to store user session data with automatic failover. Which ElastiCache engine supports Multi-AZ replication?",
    "options": {
      "A": "Memcached (supports auto-discovery)",
      "B": "Redis with cluster mode disabled and Multi-AZ",
      "C": "Memcached with multiple nodes",
      "D": "Redis Cluster mode enabled"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Amazon ElastiCache for Redis supports replication, persistence, and Multi-AZ with Automatic Failover.\n• Memcached is a volatile, in-memory cache that does not support replication or Multi-AZ failover.",
    "why": [
      "ElastiCache for Redis with Multi-AZ enabled provides automatic failover to a replica node if the primary node fails."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "rf-58",
    "q": "A financial company must retain audit logs for 7 years and prevent anyone (including admins) from deleting them. Which S3 feature provides this?",
    "options": {
      "A": "S3 Versioning with lifecycle policy",
      "B": "S3 Object Lock in Compliance mode",
      "C": "S3 Glacier Vault Lock",
      "D": "IAM policy denying DeleteObject"
    },
    "answer": [
      "B"
    ],
    "explanation": "**S3 Object Lock:**\r\n\r\n```\r\nCompliance Mode: ✅\r\n├── Objects cannot be deleted by ANYONE (even root) ✅\r\n├── Retention period cannot be shortened\r\n├── Use: SEC 17a-4, HIPAA, GDPR compliance\r\n└── Example: Retain 7 years, immutable\r\n\r\nGovernance Mode:\r\n├── Objects protected from most users\r\n├── Special permission can override (s3:BypassGovernanceRetention)\r\n└── Use: Internal policies, can override if needed\r\n\r\nLegal Hold:\r\n├── Indefinite protection (no expiration)\r\n├── Removed manually when legal case resolves\r\n└── Use: Litigation, investigations\r\n```\r\n\r\n**S3 Object Lock vs Glacier Vault Lock:**\r\n\r\n```\r\nS3 Object Lock (Compliance): ✅\r\n├── Storage class: Any S3 class\r\n├── Granularity: Per-object or bucket default\r\n├── Use: Flexible compliance, any S3 class\r\n\r\nGlacier Vault Lock: ✅\r\n├── Storage class: Glacier only\r\n├── Granularity: Vault-level policy\r\n├── Use: Long-term archives, vault-level immutability\r\n```\r\n\r\n**Configuration:**\r\n\r\n```bash\r\n# Enable versioning (required for Object Lock)\r\naws s3api put-bucket-versioning \\\r\n  --bucket compliance-logs \\\r\n  --versioning-configuration Status=Enabled\r\n\r\n# Enable Object Lock\r\naws s3api put-object-lock-configuration \\\r\n  --bucket compliance-logs \\\r\n  --object-lock-configuration '{\r\n    \"ObjectLockEnabled\": \"Enabled\",\r\n    \"Rule\": {\r\n      \"DefaultRetention\": {\r\n        \"Mode\": \"COMPLIANCE\",\r\n        \"Days\": 2555\r\n      }\r\n    }\r\n  }'\r\n\r\n# Upload object (automatically locked for 7 years)\r\naws s3 cp audit-log.txt s3://compliance-logs/\r\n\r\n# Attempt to delete (will fail)\r\naws s3 rm s3://compliance-logs/audit-log.txt\r\n# Error: Access Denied (even as root user)\r\n```\r\n\r\n**Why others wrong:**\r\n- A: Versioning + lifecycle doesn't prevent deletion (with versions)\r\n- D: IAM policies can be changed by admins\r\n\r\n**Key Concept:** S3 Object Lock Compliance = Immutable retention (even root cannot delete)",
    "why": [
      "*S3 Object Lock:**",
      "```",
      "Compliance Mode: ✅",
      "├── Objects cannot be deleted by ANYONE (even root) ✅",
      "├── Retention period cannot be shortened",
      "├── Use: SEC 17a-4, HIPAA, GDPR compliance",
      "└── Example: Retain 7 years, immutable",
      "Governance Mode:",
      "├── Objects protected from most users",
      "├── Special permission can override (s3:BypassGovernanceRetention)",
      "└── Use: Internal policies, can override if needed",
      "Legal Hold:",
      "├── Indefinite protection (no expiration)",
      "├── Removed manually when legal case resolves",
      "└── Use: Litigation, investigations",
      "```",
      "*S3 Object Lock vs Glacier Vault Lock:**",
      "```",
      "S3 Object Lock (Compliance): ✅",
      "├── Storage class: Any S3 class",
      "├── Granularity: Per-object or bucket default",
      "├── Use: Flexible compliance, any S3 class",
      "Glacier Vault Lock: ✅",
      "├── Storage class: Glacier only",
      "├── Granularity: Vault-level policy",
      "├── Use: Long-term archives, vault-level immutability",
      "```",
      "*Configuration:**",
      "```bash",
      "# Enable versioning (required for Object Lock)",
      "aws s3api put-bucket-versioning \\",
      "--bucket compliance-logs \\",
      "--versioning-configuration Status=Enabled",
      "# Enable Object Lock",
      "aws s3api put-object-lock-configuration \\",
      "--bucket compliance-logs \\",
      "--object-lock-configuration '{",
      "\"ObjectLockEnabled\": \"Enabled\",",
      "\"Rule\": {",
      "\"DefaultRetention\": {",
      "\"Mode\": \"COMPLIANCE\",",
      "\"Days\": 2555",
      "}",
      "}",
      "}'",
      "# Upload object (automatically locked for 7 years)",
      "aws s3 cp audit-log.txt s3://compliance-logs/",
      "# Attempt to delete (will fail)",
      "aws s3 rm s3://compliance-logs/audit-log.txt",
      "# Error: Access Denied (even as root user)",
      "```",
      "*Why others wrong:**",
      "A: Versioning + lifecycle doesn't prevent deletion (with versions)",
      "D: IAM policies can be changed by admins",
      "*Key Concept:** S3 Object Lock Compliance = Immutable retention (even root cannot delete)"
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "rf-59",
    "q": "A FinOps team needs detailed cost data for custom analysis and wants to query it using Athena. Which AWS service provides this?",
    "options": {
      "A": "AWS Cost Explorer with API",
      "B": "AWS Budgets with alerts",
      "C": "Cost and Usage Report (CUR) delivered to S3",
      "D": "AWS Organizations consolidated billing"
    },
    "answer": [
      "C"
    ],
    "explanation": "• The AWS Cost and Usage Report (CUR) delivers the most comprehensive, granular billing dataset directly to an Amazon S3 bucket in Parquet or CSV format, ready for custom SQL analysis with Amazon Athena.",
    "why": [
      "The AWS Cost and Usage Report (CUR) exports granular hourly/daily billing data in Parquet format to S3 for native querying with Amazon Athena."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "rf-60",
    "q": "A security team needs to analyze all network traffic to/from EC2 instances for compliance. Which feature captures this data?",
    "options": {
      "A": "CloudTrail logs",
      "B": "VPC Flow Logs",
      "C": "CloudWatch Logs",
      "D": "AWS Config"
    },
    "answer": [
      "B"
    ],
    "explanation": "• VPC Flow Logs capture IP traffic metadata (source/destination IP, ports, protocol, byte counts, and ACCEPT/REJECT status) going to and from network interfaces (ENIs) in your VPC, sending logs to S3 or CloudWatch Logs.",
    "why": [
      "VPC Flow Logs capture accepted and rejected network traffic metadata across VPC network interfaces for security compliance."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "rf-61",
    "q": "A Lambda function needs database credentials that rotate monthly. What's the most secure way to provide these credentials?",
    "options": {
      "A": "Hardcode in Lambda function code",
      "B": "Store in environment variables",
      "C": "Retrieve from Secrets Manager using SDK",
      "D": "Pass as event parameter"
    },
    "answer": [
      "C"
    ],
    "explanation": "**Secrets Manager Integration:**\r\n\r\n```\r\nSecrets Manager: ✅\r\n├── Automatic rotation (Lambda function) ✅\r\n├── Encryption at rest (KMS)\r\n├── Fine-grained IAM access control\r\n├── Audit trail (CloudTrail)\r\n├── Cross-region replication\r\n└── Versioning (AWSCURRENT, AWSPREVIOUS)\r\n\r\nEnvironment Variables:\r\n├── Encrypted at rest (KMS) ✅\r\n├── No automatic rotation ❌\r\n├── Visible in Lambda console (encrypted)\r\n└── Use: Static config, not secrets that rotate\r\n```\r\n\r\n**Lambda Code:**\r\n\r\n```python\r\nimport boto3\r\nimport json\r\nfrom botocore.exceptions import ClientError\r\n\r\nsecrets_client = boto3.client('secretsmanager')\r\n\r\ndef get_secret():\r\n    try:\r\n        response = secrets_client.get_secret_value(\r\n            SecretId='prod/db/credentials'\r\n        )\r\n        secret = json.loads(response['SecretString'])\r\n        return secret\r\n    except ClientError as e:\r\n        raise e\r\n\r\ndef lambda_handler(event, context):\r\n    # Get fresh credentials (always current after rotation)\r\n    secret = get_secret()\r\n    username = secret['username']\r\n    password = secret['password']  # Rotated automatically\r\n    host = secret['host']\r\n    \r\n    # Connect to database with current credentials\r\n    # No code changes needed when credentials rotate ✅\r\n```\r\n\r\n**Comparison:**\r\n\r\n```\r\nMethod                     Security  Rotation  Cost\r\n───────────────────────────────────────────────────\r\nHardcoded                  ❌ Low    ❌ No     Free\r\nEnvironment Variables      ⚠️ Medium ❌ No     Free\r\nSecrets Manager            ✅ High   ✅ Yes    $0.40/secret/month ✅\r\nParameter Store Advanced   ✅ High   ⚠️ Custom $0.05/10K calls\r\n```\r\n\r\n**Key Concept:** Secrets Manager = Automatic rotation + secure retrieval for credentials",
    "why": [
      "*Secrets Manager Integration:**",
      "```",
      "Secrets Manager: ✅",
      "├── Automatic rotation (Lambda function) ✅",
      "├── Encryption at rest (KMS)",
      "├── Fine-grained IAM access control",
      "├── Audit trail (CloudTrail)",
      "├── Cross-region replication",
      "└── Versioning (AWSCURRENT, AWSPREVIOUS)",
      "Environment Variables:",
      "├── Encrypted at rest (KMS) ✅",
      "├── No automatic rotation ❌",
      "├── Visible in Lambda console (encrypted)",
      "└── Use: Static config, not secrets that rotate",
      "```",
      "*Lambda Code:**",
      "```python",
      "import boto3",
      "import json",
      "from botocore.exceptions import ClientError",
      "secrets_client = boto3.client('secretsmanager')",
      "def get_secret():",
      "try:",
      "response = secrets_client.get_secret_value(",
      "SecretId='prod/db/credentials'",
      ")",
      "secret = json.loads(response['SecretString'])",
      "return secret",
      "except ClientError as e:",
      "raise e",
      "def lambda_handler(event, context):",
      "# Get fresh credentials (always current after rotation)",
      "secret = get_secret()",
      "username = secret['username']",
      "password = secret['password']  # Rotated automatically",
      "host = secret['host']",
      "# Connect to database with current credentials",
      "# No code changes needed when credentials rotate ✅",
      "```",
      "*Comparison:**",
      "```",
      "Method                     Security  Rotation  Cost",
      "───────────────────────────────────────────────────",
      "Hardcoded                  ❌ Low    ❌ No     Free",
      "Environment Variables      ⚠️ Medium ❌ No     Free",
      "Secrets Manager            ✅ High   ✅ Yes    $0.40/secret/month ✅",
      "Parameter Store Advanced   ✅ High   ⚠️ Custom $0.05/10K calls",
      "```",
      "*Key Concept:** Secrets Manager = Automatic rotation + secure retrieval for credentials"
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "rf-62",
    "q": "An organization wants to right-size EC2 instances based on actual utilization data. Which AWS service analyzes usage and recommends optimal instance types?",
    "options": {
      "A": "AWS Cost Explorer with recommendations",
      "B": "AWS Compute Optimizer",
      "C": "AWS Trusted Advisor",
      "D": "CloudWatch metrics manual analysis"
    },
    "answer": [
      "B"
    ],
    "explanation": "• AWS Compute Optimizer uses machine learning to analyze historical CloudWatch utilization metrics and recommends optimal EC2 instance types, EBS volume settings, ECS Fargate configurations, and Lambda memory sizes.",
    "why": [
      "AWS Compute Optimizer analyzes historical utilization metrics via machine learning to provide automated EC2 right-sizing recommendations."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "rf-63",
    "q": "A DevOps team wants to proactively test API endpoint availability every 5 minutes and receive alerts if it returns errors. Which service provides this?",
    "options": {
      "A": "CloudWatch Logs with metric filters",
      "B": "CloudWatch Synthetics (Canary)",
      "C": "Route 53 health checks",
      "D": "Lambda function with EventBridge schedule"
    },
    "answer": [
      "B"
    ],
    "explanation": "**CloudWatch Synthetics:**\r\n\r\n```\r\nPurpose: Automated endpoint testing (like user) ✅\r\n├── Canaries: Scheduled scripts that monitor endpoints\r\n├── Frequency: 1 minute to 1 hour\r\n├── Protocols: HTTP/HTTPS, APIs, UI workflows\r\n├── Runtime: Node.js, Python\r\n├── Metrics: Availability, latency, screenshots\r\n└── Alerts: CloudWatch Alarms integration ✅\r\n\r\nUse Cases:\r\n├── API endpoint monitoring ✅\r\n├── Website availability testing\r\n├── Broken link checking\r\n├── UI workflow testing (Puppeteer/Selenium)\r\n└── Load time monitoring\r\n```\r\n\r\n**Canary Script Example:**\r\n\r\n```javascript\r\n// HTTP Canary (monitors API endpoint)\r\nconst synthetics = require('Synthetics');\r\nconst log = require('SyntheticsLogger');\r\nconst https = require('https');\r\n\r\nexports.handler = async () => {\r\n    const apiCanaryBlueprint = async function () {\r\n        const options = {\r\n            hostname: 'api.example.com',\r\n            path: '/health',\r\n            method: 'GET',\r\n            port: 443\r\n        };\r\n        \r\n        const requestBuilder = () => {\r\n            return new Promise((resolve, reject) => {\r\n                const req = https.request(options, (res) => {\r\n                    log.info(`Status Code: ${res.statusCode}`);\r\n                    \r\n                    if (res.statusCode !== 200) {\r\n                        reject(`Failed: ${res.statusCode}`);  // Triggers alarm ❌\r\n                    }\r\n                    \r\n                    res.on('data', (d) => {\r\n                        resolve(d);  // Success ✅\r\n                    });\r\n                });\r\n                \r\n                req.on('error', (error) => {\r\n                    reject(error);\r\n                });\r\n                \r\n                req.end();\r\n            });\r\n        };\r\n        \r\n        await requestBuilder();\r\n    };\r\n    \r\n    return await apiCanaryBlueprint();\r\n};\r\n```\r\n\r\n**Setup:**\r\n\r\n```bash\r\n# Create Canary\r\naws synthetics create-canary \\\r\n  --name api-health-check \\\r\n  --runtime-version syn-nodejs-puppeteer-3.9 \\\r\n  --artifact-s3-location s3://my-canary-results/ \\\r\n  --execution-role-arn arn:aws:iam::123456789012:role/CloudWatchSyntheticsRole \\\r\n  --schedule '{\r\n    \"Expression\": \"rate(5 minutes)\",\r\n    \"DurationInSeconds\": 0\r\n  }' \\\r\n  --code '{\r\n    \"Handler\": \"index.handler\",\r\n    \"S3Bucket\": \"my-canary-scripts\",\r\n    \"S3Key\": \"api-health-check.",
    "why": [
      "*CloudWatch Synthetics:**",
      "```",
      "Purpose: Automated endpoint testing (like user) ✅",
      "├── Canaries: Scheduled scripts that monitor endpoints",
      "├── Frequency: 1 minute to 1 hour",
      "├── Protocols: HTTP/HTTPS, APIs, UI workflows",
      "├── Runtime: Node.js, Python",
      "├── Metrics: Availability, latency, screenshots",
      "└── Alerts: CloudWatch Alarms integration ✅",
      "Use Cases:",
      "├── API endpoint monitoring ✅",
      "├── Website availability testing",
      "├── Broken link checking",
      "├── UI workflow testing (Puppeteer/Selenium)",
      "└── Load time monitoring",
      "```",
      "*Canary Script Example:**",
      "```javascript",
      "// HTTP Canary (monitors API endpoint)",
      "const synthetics = require('Synthetics');",
      "const log = require('SyntheticsLogger');",
      "const https = require('https');",
      "exports.handler = async () => {",
      "const apiCanaryBlueprint = async function () {",
      "const options = {",
      "hostname: 'api.example.com',",
      "path: '/health',",
      "method: 'GET',",
      "port: 443",
      "};",
      "const requestBuilder = () => {",
      "return new Promise((resolve, reject) => {",
      "const req = https.request(options, (res) => {",
      "log.info(`Status Code: ${res.statusCode}`);",
      "if (res.statusCode !== 200) {",
      "reject(`Failed: ${res.statusCode}`);  // Triggers alarm ❌",
      "}",
      "res.on('data', (d) => {",
      "resolve(d);  // Success ✅",
      "});",
      "});",
      "req.on('error', (error) => {",
      "reject(error);",
      "});",
      "req.end();",
      "});",
      "};",
      "await requestBuilder();",
      "};",
      "return await apiCanaryBlueprint();",
      "};",
      "```",
      "*Setup:**",
      "```bash",
      "# Create Canary",
      "aws synthetics create-canary \\",
      "--name api-health-check \\",
      "--runtime-version syn-nodejs-puppeteer-3.9 \\",
      "--artifact-s3-location s3://my-canary-results/ \\",
      "--execution-role-arn arn:aws:iam::123456789012:role/CloudWatchSyntheticsRole \\",
      "--schedule '{",
      "\"Expression\": \"rate(5 minutes)\",",
      "\"DurationInSeconds\": 0",
      "}' \\",
      "--code '{",
      "\"Handler\": \"index.handler\",",
      "\"S3Bucket\": \"my-canary-scripts\",",
      "\"S3Key\": \"api-health-check."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "rf-64",
    "q": "A development team has a database with highly variable workload (idle at night, busy during day). Which Aurora configuration optimizes cost?",
    "options": {
      "A": "Aurora Provisioned with largest instance",
      "B": "Aurora Provisioned with scheduled scaling",
      "C": "Aurora Serverless v2 with auto-scaling",
      "D": "Aurora Global Database"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Amazon Aurora Serverless v2 automatically scales compute capacity (in fine-grained 0.5 ACU increments) up and down in sub-seconds based on application load, charging only for the capacity consumed.",
    "why": [
      "Aurora Serverless v2 automatically scales database compute capacity up during active hours and down during idle nights to optimize cost."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "rf-65",
    "q": "A partner company needs to upload files to S3 using SFTP protocol (their legacy system requirement). Which AWS service provides SFTP access to S3?",
    "options": {
      "A": "S3 FTP endpoint",
      "B": "AWS Transfer Family for SFTP",
      "C": "DataSync with SFTP source",
      "D": "Storage Gateway File Gateway"
    },
    "answer": [
      "B"
    ],
    "explanation": "• AWS Transfer Family provides fully managed SFTP, FTPS, and FTP file transfers directly into and out of Amazon S3 or Amazon EFS, allowing legacy partner workflows to continue without code changes.",
    "why": [
      "AWS Transfer Family for SFTP provides a fully managed SFTP endpoint backed directly by Amazon S3."
    ],
    "others": [],
    "module": "Architecture Scenarios",
    "multi": false,
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "ia-1",
    "q": "A company wants to deploy a containerized application on AWS ECS. The application requires 2 GB of memory and 1 vCPU. The container should access AWS Secrets Manager to retrieve database credentials, and all container logs should be sent to CloudWatch Logs.\r\n\r\nWhat must be included in the ECS task definition to meet these requirements? (Choose THREE)",
    "options": {
      "A": "Task execution role with permissions to access Secrets Manager",
      "B": "Task role with permissions to access Secrets Manager",
      "C": "Container definition specifying memory and CPU requirements",
      "D": "Task role with permissions to write to CloudWatch Logs",
      "E": "Task execution role with permissions to write to CloudWatch Logs",
      "F": "Container definition with logConfiguration pointing to CloudWatch"
    },
    "answer": [
      "B",
      "C",
      "F"
    ],
    "explanation": "- **Task Role (B)**: Used by the application running inside the container to access AWS services (Secrets Manager in this case)\r\n- **Container Definition (C)**: Must specify memory (2048 MB) and CPU (1024 units = 1 vCPU) as required\r\n- **Log Configuration (F)**: Container definition needs logConfiguration to route logs to CloudWatch",
    "why": [
      "**Task Role (B)**: Used by the application running inside the container to access AWS services (Secrets Manager in this case)",
      "**Container Definition (C)**: Must specify memory (2048 MB) and CPU (1024 units = 1 vCPU) as required",
      "**Log Configuration (F)**: Container definition needs logConfiguration to route logs to CloudWatch"
    ],
    "others": [],
    "module": "Complex Scenarios",
    "multi": true,
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "ia-2",
    "q": "Your company has a web application running on Amazon EC2 instances behind an Application Load Balancer (ALB) in us-east-1. For disaster recovery, you have a secondary web server hosted in your on-premises data center. You need to configure DNS failover using Route 53 so that traffic automatically routes to the on-premises server if the AWS ALB becomes unhealthy.\r\n\r\nHow should you configure the Route 53 records?",
    "options": {
      "A": "Create a CNAME record for your domain pointing to the ALB, and another CNAME record pointing to your on-premises server IP",
      "B": "Create two failover records: primary as a CNAME pointing to the ALB with a health check, secondary as an A record for on-premises",
      "C": "Create two failover records: primary as an Alias record pointing to the ALB with \"Evaluate Target Health\" enabled, secondary as an A record for on-premises with a health check",
      "D": "Create an Alias record pointing to both the ALB and on-premises server with weighted routing policy"
    },
    "answer": [
      "C"
    ],
    "explanation": "**Primary Record (AWS)**:\r\n- Use **Alias record** (not CNAME) pointing to ALB\r\n- Enable **\"Evaluate Target Health\"** - Route 53 automatically checks ALB target health\r\n- Failover record type: Primary\r\n\r\n**Secondary Record (On-Premises)**:\r\n- Use **A record** (or CNAME for non-root) with IP address\r\n- Attach explicit Route 53 health check\r\n- Failover record type: Secondary\r\n\r\n**Why Other Options Are Wrong**:\r\n- **A**: Cannot use CNAME at domain apex; doesn't properly configure failover\r\n- **B**: Should use Alias for ALB (better performance, no DNS charges)\r\n- **D**: Weighted routing doesn't provide automatic failover on health failure\r\n\r\n**Key Exam Trap**: Alias records with \"Evaluate Target Health\" only work for AWS resources. For non-AWS (on-prem), you must use explicit health checks.",
    "why": [
      "*Primary Record (AWS)**:",
      "Use **Alias record** (not CNAME) pointing to ALB",
      "Enable **\"Evaluate Target Health\"** - Route 53 automatically checks ALB target health",
      "Failover record type: Primary",
      "*Secondary Record (On-Premises)**:",
      "Use **A record** (or CNAME for non-root) with IP address",
      "Attach explicit Route 53 health check",
      "Failover record type: Secondary",
      "*Why Other Options Are Wrong**:",
      "**A**: Cannot use CNAME at domain apex; doesn't properly configure failover",
      "**B**: Should use Alias for ALB (better performance, no DNS charges)",
      "**D**: Weighted routing doesn't provide automatic failover on health failure",
      "*Key Exam Trap**: Alias records with \"Evaluate Target Health\" only work for AWS resources. For non-AWS (on-prem), you must use explicit health checks."
    ],
    "others": [],
    "module": "Complex Scenarios",
    "multi": false,
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "ia-3",
    "q": "A developer deployed a Lambda function that processes records from a Kinesis Data Stream. The function is executing successfully (based on Kinesis metrics showing processed records), but no logs appear in CloudWatch Logs. What is the MOST likely cause?",
    "options": {
      "A": "Lambda functions triggered by Kinesis Data Streams do not support CloudWatch Logs",
      "B": "The Lambda execution role lacks permissions to create log groups and write log events",
      "C": "CloudWatch Logs is not enabled in the Lambda function configuration",
      "D": "The function must explicitly call CloudWatch Logs API to write logs"
    },
    "answer": [
      "B"
    ],
    "explanation": "Lambda automatically writes logs to CloudWatch Logs IF the execution role has these permissions:\r\n- `logs:CreateLogGroup`\r\n- `logs:CreateLogStream`  \r\n- `logs:PutLogEvents`\r\n\r\n**Why Other Options Are Wrong**:\r\n- **A**: FALSE - All Lambda functions support CloudWatch Logs regardless of trigger source\r\n- **C**: No such setting exists; logging is automatic if permissions exist\r\n- **D**: Lambda automatically captures console output; no explicit API calls needed\r\n\r\n**Fix**: Attach the `AWSLambdaBasicExecutionRole` managed policy to the execution role.\r\n\r\n**Exam Tip**: \"Lambda works but no logs\" = missing CloudWatch Logs permissions (99% of the time)",
    "why": [
      "Lambda automatically writes logs to CloudWatch Logs IF the execution role has these permissions:",
      "`logs:CreateLogGroup`",
      "`logs:CreateLogStream`",
      "`logs:PutLogEvents`",
      "*Why Other Options Are Wrong**:",
      "**A**: FALSE - All Lambda functions support CloudWatch Logs regardless of trigger source",
      "**C**: No such setting exists; logging is automatic if permissions exist",
      "**D**: Lambda automatically captures console output; no explicit API calls needed",
      "*Fix**: Attach the `AWSLambdaBasicExecutionRole` managed policy to the execution role.",
      "*Exam Tip**: \"Lambda works but no logs\" = missing CloudWatch Logs permissions (99% of the time)"
    ],
    "others": [],
    "module": "Complex Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "ia-4",
    "q": "An e-commerce application uses AWS Lambda functions to process user requests. Each Lambda invocation creates a new database connection to an Amazon RDS MySQL instance. During peak traffic, the application experiences \"too many connections\" errors and high database CPU utilization due to connection overhead.\r\n\r\nWhat is the MOST cost-effective solution to resolve this issue?",
    "options": {
      "A": "Increase the RDS instance size to handle more connections",
      "B": "Enable Multi-AZ deployment for the RDS instance",
      "C": "Create Read Replicas and distribute read traffic",
      "D": "Use Amazon RDS Proxy to pool and manage connections"
    },
    "answer": [
      "D"
    ],
    "explanation": "• Amazon RDS Proxy establishes and manages a shared connection pool between short-lived AWS Lambda functions and your RDS database.\n• It prevents `Too many connections` errors and reduces CPU/memory overhead from constant TCP/TLS handshakes without paying to oversize the RDS instance.",
    "why": [
      "Amazon RDS Proxy pools and reuses database connections from concurrent Lambda functions, preventing connection exhaustion cost-effectively."
    ],
    "others": [],
    "module": "Complex Scenarios",
    "multi": false,
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "ia-5",
    "q": "A restaurant management application uses multiple Lambda functions to process orders: ValidateOrder, ChargePayment, UpdateInventory, and NotifyRestaurant. Currently, these functions are invoked sequentially using custom orchestration code, which is difficult to maintain and debug. Failures in any step require manual intervention.\r\n\r\nWhich AWS service should you use to orchestrate this workflow with built-in error handling and visual monitoring?",
    "options": {
      "A": "Amazon SQS with Lambda triggers",
      "B": "AWS Step Functions",
      "C": "Amazon EventBridge with multiple rules",
      "D": "AWS Glue workflow"
    },
    "answer": [
      "B"
    ],
    "explanation": "**AWS Step Functions**:\r\n- **Visual Workflow**: See execution flow in AWS Console\r\n- **State Machine**: Define order of operations in JSON/YAML\r\n- **Error Handling**: Built-in retry and catch logic\r\n- **Service Integrations**: Direct integration with Lambda, DynamoDB, SQS, SNS, etc.\r\n- **Execution History**: Track every step of each workflow\r\n\r\n**State Machine Example**:\r\n```json\r\n{\r\n  \"StartAt\": \"ValidateOrder\",\r\n  \"States\": {\r\n    \"ValidateOrder\": {\r\n      \"Type\": \"Task\",\r\n      \"Resource\": \"arn:aws:lambda:...:ValidateOrder\",\r\n      \"Next\": \"ChargePayment\",\r\n      \"Catch\": [{\"ErrorEquals\": [\"ValidationError\"], \"Next\": \"HandleError\"}]\r\n    },\r\n    \"ChargePayment\": {...},\r\n    \"UpdateInventory\": {...},\r\n    \"NotifyRestaurant\": {...}\r\n  }\r\n}\r\n```\r\n\r\n**Why Not Others**:\r\n- **A (SQS)**: Requires custom orchestration; no visual workflow\r\n- **C (EventBridge)**: Good for event routing, not sequential orchestration\r\n- **D (Glue)**: For ETL workflows, not microservice orchestration\r\n\r\n**Exam Keywords**: \"orchestrate\", \"workflow\", \"multiple steps\", \"error handling\" → Step Functions",
    "why": [
      "*AWS Step Functions**:",
      "**Visual Workflow**: See execution flow in AWS Console",
      "**State Machine**: Define order of operations in JSON/YAML",
      "**Error Handling**: Built-in retry and catch logic",
      "**Service Integrations**: Direct integration with Lambda, DynamoDB, SQS, SNS, etc.",
      "**Execution History**: Track every step of each workflow",
      "*State Machine Example**:",
      "```json",
      "{",
      "\"StartAt\": \"ValidateOrder\",",
      "\"States\": {",
      "\"ValidateOrder\": {",
      "\"Type\": \"Task\",",
      "\"Resource\": \"arn:aws:lambda:...:ValidateOrder\",",
      "\"Next\": \"ChargePayment\",",
      "\"Catch\": [{\"ErrorEquals\": [\"ValidationError\"], \"Next\": \"HandleError\"}]",
      "},",
      "\"ChargePayment\": {...},",
      "\"UpdateInventory\": {...},",
      "\"NotifyRestaurant\": {...}",
      "}",
      "}",
      "```",
      "*Why Not Others**:",
      "**A (SQS)**: Requires custom orchestration; no visual workflow",
      "**C (EventBridge)**: Good for event routing, not sequential orchestration",
      "**D (Glue)**: For ETL workflows, not microservice orchestration",
      "*Exam Keywords**: \"orchestrate\", \"workflow\", \"multiple steps\", \"error handling\" → Step Functions"
    ],
    "others": [],
    "module": "Complex Scenarios",
    "multi": false,
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "ia-6",
    "q": "You need to configure DNS for your website `example.com` (root domain) and `www.example.com` (subdomain) to point to an Application Load Balancer in us-east-1.\r\n\r\nWhat is the correct Route 53 configuration?",
    "options": {
      "A": "Create a CNAME record for example.com and another CNAME record for www.example.com, both pointing to the ALB DNS name",
      "B": "Create an A record for example.com with the ALB IP address, and a CNAME record for www.example.com pointing to example.com",
      "C": "Create an Alias record for example.com pointing to the ALB, and a CNAME record for www.example.com pointing to the ALB DNS name",
      "D": "Create Alias records for both example.com and www.example.com pointing to the ALB"
    },
    "answer": [
      "C"
    ],
    "explanation": "| Record Type | At Root Domain (apex) | For Subdomain | DNS Query Charges | Points to ALB |\r\n|-------------|---------------------|---------------|-------------------|---------------|\r\n| **CNAME** | ❌ NOT ALLOWED | ✅ Allowed | Yes | Yes |\r\n| **Alias** | ✅ Allowed | ✅ Allowed | No (free) | Yes |\r\n| **A** | ✅ Allowed | ✅ Allowed | No | No (needs static IP) |\r\n\r\n**For Root Domain (`example.com`)**:\r\n- Must use Alias record (CNAME not allowed at apex)\r\n- Point to ALB, CloudFront, or other AWS resource\r\n- Free DNS queries\r\n\r\n**For Subdomain (`www.example.com`)**:\r\n- Can use either CNAME or Alias\r\n- CNAME is traditional choice\r\n- Alias is cheaper (no query charges)\r\n\r\n**Why A is Wrong**: CNAME cannot be used at the root domain (DNS standard restriction)\r\n\r\n**Exam Trap**: Any answer showing CNAME at root = WRONG",
    "why": [
      "| Record Type | At Root Domain (apex) | For Subdomain | DNS Query Charges | Points to ALB |",
      "|-------------|---------------------|---------------|-------------------|---------------|",
      "| **CNAME** | ❌ NOT ALLOWED | ✅ Allowed | Yes | Yes |",
      "| **Alias** | ✅ Allowed | ✅ Allowed | No (free) | Yes |",
      "| **A** | ✅ Allowed | ✅ Allowed | No | No (needs static IP) |",
      "*For Root Domain (`example.com`)**:",
      "Must use Alias record (CNAME not allowed at apex)",
      "Point to ALB, CloudFront, or other AWS resource",
      "Free DNS queries",
      "*For Subdomain (`www.example.com`)**:",
      "Can use either CNAME or Alias",
      "CNAME is traditional choice",
      "Alias is cheaper (no query charges)",
      "*Why A is Wrong**: CNAME cannot be used at the root domain (DNS standard restriction)",
      "*Exam Trap**: Any answer showing CNAME at root = WRONG"
    ],
    "others": [],
    "module": "Complex Scenarios",
    "multi": false,
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "ia-7",
    "q": "Company A has an SQS queue in account 111111 for analytics data. Company B (account 222222) needs to send messages to this queue. What is the MOST efficient way to enable this?",
    "options": {
      "A": "Create an IAM role in account 111111 that allows SQS:SendMessage, and have account 222222 assume this role",
      "B": "Configure an SQS queue policy in account 111111 to allow account 222222 to perform SQS:SendMessage",
      "C": "Share the AWS access keys from account 111111 with account 222222",
      "D": "Set up VPC peering between the two accounts"
    },
    "answer": [
      "B"
    ],
    "explanation": "**SQS Queue Policy (Recommended)**:\r\n```json\r\n{\r\n  \"Effect\": \"Allow\",\r\n  \"Principal\": {\"AWS\": \"arn:aws:iam::222222:root\"},\r\n  \"Action\": \"sqs:SendMessage\",\r\n  \"Resource\": \"arn:aws:sqs:region:111111:MyQueue\"\r\n}\r\n```\r\n- ✅ Simple and direct\r\n- ✅ No temporary credentials needed\r\n- ✅ Resource-based policy (attached to queue)\r\n- ✅ No AssumeRole overhead\r\n\r\n**IAM Role (Option A - More Complex)**:\r\n- Requires AssumeRole in every request\r\n- Need to manage trust relationships\r\n- Handle temporary credentials\r\n- More API calls = higher latency\r\n\r\n**Why Others Are Wrong**:\r\n- **C**: NEVER share access keys (security violation)\r\n- **D**: VPC peering is for network connectivity, not SQS permissions\r\n\r\n**Rule of Thumb**: For cross-account resource access in AWS, prefer resource-based policies over IAM roles when available (S3, SQS, SNS, Lambda).",
    "why": [
      "*SQS Queue Policy (Recommended)**:",
      "```json",
      "{",
      "\"Effect\": \"Allow\",",
      "\"Principal\": {\"AWS\": \"arn:aws:iam::222222:root\"},",
      "\"Action\": \"sqs:SendMessage\",",
      "\"Resource\": \"arn:aws:sqs:region:111111:MyQueue\"",
      "}",
      "```",
      "✅ Simple and direct",
      "✅ No temporary credentials needed",
      "✅ Resource-based policy (attached to queue)",
      "✅ No AssumeRole overhead",
      "*IAM Role (Option A - More Complex)**:",
      "Requires AssumeRole in every request",
      "Need to manage trust relationships",
      "Handle temporary credentials",
      "More API calls = higher latency",
      "*Why Others Are Wrong**:",
      "**C**: NEVER share access keys (security violation)",
      "**D**: VPC peering is for network connectivity, not SQS permissions",
      "*Rule of Thumb**: For cross-account resource access in AWS, prefer resource-based policies over IAM roles when available (S3, SQS, SNS, Lambda)."
    ],
    "others": [],
    "module": "Complex Scenarios",
    "multi": false,
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "ia-8",
    "q": "You have three CloudFormation stacks: SecurityStack, NetworkStack, and ApplicationStack. The SecurityStack creates a security group that must be used by resources in both NetworkStack and ApplicationStack.\r\n\r\nHow do you reference the security group across stacks?",
    "options": {
      "A": "Use CloudFormation Parameters to pass the security group ID",
      "B": "Hardcode the security group ID in each stack",
      "C": "Use CloudFormation Outputs with Export in SecurityStack, and ImportValue in other stacks",
      "D": "Use CloudFormation Mappings to store the security group ID"
    },
    "answer": [
      "C"
    ],
    "explanation": "**In SecurityStack** (creates and exports):\r\n```yaml\r\nOutputs:\r\n  SecurityGroupId:\r\n    Description: Security Group for web servers\r\n    Value: !Ref WebServerSecurityGroup\r\n    Export:\r\n      Name: MyApp-WebServer-SG\r\n```\r\n\r\n**In NetworkStack and ApplicationStack** (import):\r\n```yaml\r\nResources:\r\n  MyEC2Instance:\r\n    Type: AWS::EC2::Instance\r\n    Properties:\r\n      SecurityGroupIds:\r\n        - !ImportValue MyApp-WebServer-SG\r\n```\r\n\r\n**Why This Works**:\r\n- **Outputs**: Make values available from one stack\r\n- **Export**: Publish the value with a unique name\r\n- **ImportValue**: Reference the exported value in another stack\r\n- Automatic updates if the value changes\r\n\r\n**Why Others Are Wrong**:\r\n- **A**: Parameters require manual input; not dynamic\r\n- **B**: Breaks if security group is recreated\r\n- **D**: Mappings are for static data, not cross-stack references\r\n\r\n**Limitation**: Cannot delete a stack if its exported values are being imported elsewhere.",
    "why": [
      "*In SecurityStack** (creates and exports):",
      "```yaml",
      "Outputs:",
      "SecurityGroupId:",
      "Description: Security Group for web servers",
      "Value: !Ref WebServerSecurityGroup",
      "Export:",
      "Name: MyApp-WebServer-SG",
      "```",
      "*In NetworkStack and ApplicationStack** (import):",
      "```yaml",
      "Resources:",
      "MyEC2Instance:",
      "Type: AWS::EC2::Instance",
      "Properties:",
      "SecurityGroupIds:",
      "- !ImportValue MyApp-WebServer-SG",
      "```",
      "*Why This Works**:",
      "**Outputs**: Make values available from one stack",
      "**Export**: Publish the value with a unique name",
      "**ImportValue**: Reference the exported value in another stack",
      "Automatic updates if the value changes",
      "*Why Others Are Wrong**:",
      "**A**: Parameters require manual input; not dynamic",
      "**B**: Breaks if security group is recreated",
      "**D**: Mappings are for static data, not cross-stack references",
      "*Limitation**: Cannot delete a stack if its exported values are being imported elsewhere."
    ],
    "others": [],
    "module": "Complex Scenarios",
    "multi": false,
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "ia-9",
    "q": "A financial company needs to run Kubernetes workloads on-premises for regulatory reasons but wants to use the same tools and APIs as Amazon EKS in the cloud. They don't want to manage Kubernetes control plane components manually.\r\n\r\nWhich solution should they use?",
    "options": {
      "A": "Install open-source Kubernetes manually",
      "B": "Use Amazon EKS Anywhere",
      "C": "Use Amazon EKS Distro",
      "D": "Deploy EKS in AWS and connect via VPN"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Amazon EKS Anywhere enables you to create and operate Kubernetes clusters on your own on-premises infrastructure (VMware vSphere, bare metal) using the same AWS-supported EKS distribution, tooling, and console integration.",
    "why": [
      "Amazon EKS Anywhere provides an AWS-supported Kubernetes management lifecycle on customer-managed on-premises infrastructure."
    ],
    "others": [],
    "module": "Complex Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "ia-10",
    "q": "A SaaS company has a customer-facing application with highly unpredictable traffic patterns. During business hours, traffic spikes to 10,000 requests/min, but at night, it drops to near zero. The database is currently on RDS Aurora provisioned, which is expensive to run 24/7.\r\n\r\nWhat is the MOST cost-effective solution?",
    "options": {
      "A": "Use Aurora with scheduled vertical scaling",
      "B": "Migrate to Aurora Serverless",
      "C": "Use Aurora Multi-AZ with Auto Scaling read replicas",
      "D": "Switch to DynamoDB"
    },
    "answer": [
      "B"
    ],
    "explanation": "**Aurora Serverless**:\r\n- **Auto-scales** compute capacity (ACUs) based on load\r\n- **Starts/stops** automatically when inactive\r\n- **Pay per second** only when active\r\n- **Scales in seconds** without connection drops\r\n\r\n**Perfect For**:\r\n- Infrequent/unpredictable workloads\r\n- Development/test databases\r\n- Variable traffic patterns\r\n- Applications with long idle periods\r\n\r\n**Pricing**:\r\n- ~$0.06 per ACU-hour\r\n- Storage: $0.10/GB-month\r\n- No charges when paused\r\n\r\n**Why Not Others**:\r\n- **A**: Manual scaling; still pay for idle time\r\n- **C**: Read replicas for read scaling; doesn't address idle costs\r\n- **D**: Requires application rewrite; DynamoDB is NoSQL\r\n\r\n**Exam Clue**: \"Unpredictable traffic\" + \"cost-effective database\" + \"no manual management\" = Aurora Serverless",
    "why": [
      "*Aurora Serverless**:",
      "**Auto-scales** compute capacity (ACUs) based on load",
      "**Starts/stops** automatically when inactive",
      "**Pay per second** only when active",
      "**Scales in seconds** without connection drops",
      "*Perfect For**:",
      "Infrequent/unpredictable workloads",
      "Development/test databases",
      "Variable traffic patterns",
      "Applications with long idle periods",
      "*Pricing**:",
      "~$0.06 per ACU-hour",
      "Storage: $0.10/GB-month",
      "No charges when paused",
      "*Why Not Others**:",
      "**A**: Manual scaling; still pay for idle time",
      "**C**: Read replicas for read scaling; doesn't address idle costs",
      "**D**: Requires application rewrite; DynamoDB is NoSQL",
      "*Exam Clue**: \"Unpredictable traffic\" + \"cost-effective database\" + \"no manual management\" = Aurora Serverless"
    ],
    "others": [],
    "module": "Complex Scenarios",
    "multi": false,
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "ia-11",
    "q": "Your company uses custom AMIs for launching EC2 instances across multiple AWS accounts. Recently, a critical AMI was accidentally deleted by a team member, causing deployment failures. You need a solution to recover accidentally deleted AMIs without complex backup procedures.\r\n\r\nWhat should you implement?",
    "options": {
      "A": "Create AMI snapshots weekly and store in S3",
      "B": "Enable AWS Recycle Bin for EC2 AMIs",
      "C": "Use AWS Backup to backup all AMIs",
      "D": "Create a Lambda function to copy AMIs to another account"
    },
    "answer": [
      "B"
    ],
    "explanation": "**AWS Recycle Bin for EC2**:\r\n- Retains deleted EBS-backed AMIs for specified period (1 day to 1 year)\r\n- Simple recovery process (restore with one click)\r\n- No backup scripting needed\r\n- Works for both AMIs and EBS snapshots\r\n\r\n**How to Configure**:\r\n1. Create retention rule in Recycle Bin console\r\n2. Specify resource type: AMI\r\n3. Set retention period: e.g., 30 days\r\n4. Apply to specific tags or all AMIs\r\n\r\n**Recovery Process**:\r\n1. Go to Recycle Bin console\r\n2. Find deleted AMI\r\n3. Click \"Recover\"\r\n4. AMI is restored with same AMI ID\r\n\r\n**Why Not Others**:\r\n- **A**: Manual process; AMIs aren't stored in S3 directly\r\n- **C**: AWS Backup supports AMIs but is more complex\r\n- **D**: Adds operational overhead; doesn't prevent deletion\r\n\r\n**Limitations**:\r\n- Only for EBS-backed AMIs (not instance-store)\r\n- Must be enabled before deletion occurs\r\n- Storage costs still apply during retention",
    "why": [
      "*AWS Recycle Bin for EC2**:",
      "Retains deleted EBS-backed AMIs for specified period (1 day to 1 year)",
      "Simple recovery process (restore with one click)",
      "No backup scripting needed",
      "Works for both AMIs and EBS snapshots",
      "*How to Configure**:",
      "1. Create retention rule in Recycle Bin console",
      "2. Specify resource type: AMI",
      "3. Set retention period: e.g., 30 days",
      "4. Apply to specific tags or all AMIs",
      "*Recovery Process**:",
      "1. Go to Recycle Bin console",
      "2. Find deleted AMI",
      "3. Click \"Recover\"",
      "4. AMI is restored with same AMI ID",
      "*Why Not Others**:",
      "**A**: Manual process; AMIs aren't stored in S3 directly",
      "**C**: AWS Backup supports AMIs but is more complex",
      "**D**: Adds operational overhead; doesn't prevent deletion",
      "*Limitations**:",
      "Only for EBS-backed AMIs (not instance-store)",
      "Must be enabled before deletion occurs",
      "Storage costs still apply during retention"
    ],
    "others": [],
    "module": "Complex Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "ia-12",
    "q": "A company upgraded their REST API backend, changing the response field from `user_id` to `userId`. However, mobile clients still expect the old field name. The API is exposed through Amazon API Gateway. You need to transform responses to maintain backward compatibility without modifying the backend.\r\n\r\nWhat should you configure in API Gateway?",
    "options": {
      "A": "Enable API caching to store both response formats",
      "B": "Use mapping templates in the Integration Response",
      "C": "Create a Lambda function to transform responses",
      "D": "Define multiple API versions with different response models"
    },
    "answer": [
      "B"
    ],
    "explanation": "**Mapping Templates**:\r\n- Use **VTL (Velocity Template Language)**\r\n- Transform request/response payloads\r\n- Located in Integration Request/Response sections\r\n\r\n**Example VTL Mapping**:\r\n```vtl\r\n{\r\n  \"user_id\": $input.path('$.userId'),\r\n  \"name\": $input.path('$.name'),\r\n  \"email\": $input.path('$.email')\r\n}\r\n```\r\n\r\nThis transforms backend response:\r\n```json\r\n{\"userId\": \"123\", \"name\": \"John\"}\r\n```\r\nTo client-expected format:\r\n```json\r\n{\"user_id\": \"123\", \"name\": \"John\"}\r\n```\r\n\r\n**Where to Configure**:\r\n1. API Gateway → Resources → Method (GET/POST/etc.)\r\n2. Integration Response\r\n3. Mapping Templates\r\n4. Add content-type and VTL code\r\n\r\n**Why Not Others**:\r\n- **A**: Caching improves performance, doesn't transform data\r\n- **C**: Adds another Lambda invocation (higher cost, latency)\r\n- **D**: API versioning doesn't transform responses\r\n\r\n**Exam Tip**: \"Backward compatibility\" + \"response transformation\" + \"API Gateway\" = Mapping Templates",
    "why": [
      "*Mapping Templates**:",
      "Use **VTL (Velocity Template Language)**",
      "Transform request/response payloads",
      "Located in Integration Request/Response sections",
      "*Example VTL Mapping**:",
      "```vtl",
      "{",
      "\"user_id\": $input.path('$.userId'),",
      "\"name\": $input.path('$.name'),",
      "\"email\": $input.path('$.email')",
      "}",
      "```",
      "This transforms backend response:",
      "```json",
      "{\"userId\": \"123\", \"name\": \"John\"}",
      "```",
      "To client-expected format:",
      "```json",
      "{\"user_id\": \"123\", \"name\": \"John\"}",
      "```",
      "*Where to Configure**:",
      "1. API Gateway → Resources → Method (GET/POST/etc.)",
      "2. Integration Response",
      "3. Mapping Templates",
      "4. Add content-type and VTL code",
      "*Why Not Others**:",
      "**A**: Caching improves performance, doesn't transform data",
      "**C**: Adds another Lambda invocation (higher cost, latency)",
      "**D**: API versioning doesn't transform responses",
      "*Exam Tip**: \"Backward compatibility\" + \"response transformation\" + \"API Gateway\" = Mapping Templates"
    ],
    "others": [],
    "module": "Complex Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "ia-13",
    "q": "Your company uses Auto Scaling groups to deploy web servers across multiple AZs. After updating to a new AMI, you want to ensure that instances launched with old AMIs are terminated first during scale-in events.\r\n\r\nWhich Auto Scaling termination policy should you configure?",
    "options": {
      "A": "OldestInstance",
      "B": "OldestLaunchConfiguration",
      "C": "OldestLaunchTemplate",
      "D": "Default"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Auto Scaling Termination Policies:\n  - `OldestLaunchTemplate`: Terminates instances that were launched using the oldest launch template version first.\n  - `OldestInstance`: Terminates the instance that has been running the longest.\n• When updating AMIs in a Launch Template, `OldestLaunchTemplate` ensures instances on older revisions are phased out first.",
    "why": [
      "The OldestLaunchTemplate termination policy prioritizes terminating instances launched from older Launch Template revisions during scale-in."
    ],
    "others": [],
    "module": "Complex Scenarios",
    "multi": false,
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "ia-14",
    "q": "You're deploying EC2 instances across multiple regions using CloudFormation. Each region requires a different AMI ID for the same OS (Amazon Linux 2). Rather than hardcoding AMI IDs for each region, you want to dynamically look up the latest AMI during stack creation.\r\n\r\nWhat's the best approach?",
    "options": {
      "A": "Use CloudFormation Mappings with AMI IDs for each region",
      "B": "Use a Lambda-backed Custom Resource to query for AMI IDs",
      "C": "Use CloudFormation Parameters and manually enter AMI IDs",
      "D": "Use Systems Manager Parameter Store with regional parameters"
    },
    "answer": [
      "B"
    ],
    "explanation": "• A CloudFormation Custom Resource backed by an AWS Lambda function can invoke the `ec2:DescribeImages` API at stack creation/update time to dynamically look up the latest Amazon Linux 2 AMI ID in whichever Region the stack is deployed.",
    "why": [
      "A Lambda-backed Custom Resource dynamically queries the EC2 API at deployment time to retrieve the latest regional AMI ID."
    ],
    "others": [],
    "module": "Complex Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "ia-15",
    "q": "You have a CloudFormation template that deploys EC2 instances in multiple regions. Each region requires a specific AMI ID for Ubuntu 20.04. How do you store and retrieve region-specific AMI IDs in CloudFormation?",
    "options": {
      "A": "Use CloudFormation Parameters with default values",
      "B": "Use CloudFormation Mappings with region-based keys",
      "C": "Use CloudFormation Outputs to export AMI IDs",
      "D": "Use CloudFormation Conditions to select AMI IDs"
    },
    "answer": [
      "B"
    ],
    "explanation": "**CloudFormation Mappings**:\r\n\r\n```yaml\r\nMappings:\r\n  RegionToAMI:\r\n    us-east-1:\r\n      AMI: ami-0abcdef1234567890\r\n    us-west-2:\r\n      AMI: ami-0123456789abcdef0\r\n    eu-west-1:\r\n      AMI: ami-0fedcba9876543210\r\n```\r\n\r\n**Usage in Template**:\r\n```yaml\r\nResources:\r\n  MyEC2Instance:\r\n    Type: AWS::EC2::Instance\r\n    Properties:\r\n      ImageId: !FindInMap [RegionToAMI, !Ref \"AWS::Region\", AMI]\r\n      InstanceType: t3.micro\r\n```\r\n\r\n**Fn::FindInMap Syntax**:\r\n```\r\n!FindInMap [MapName, TopLevelKey, SecondLevelKey]\r\n```\r\n\r\n**Why Mappings**:\r\n- ✅ Static, region-specific values\r\n- ✅ Easy to maintain\r\n- ✅ Built-in CloudFormation feature\r\n- ✅ No external dependencies\r\n\r\n**Comparison**:\r\n\r\n| Method | Use Case | Example |\r\n|--------|----------|---------|\r\n| **Parameters** | User input at runtime | Environment (dev/prod) |\r\n| **Mappings** | Static lookups (region, env) | AMI IDs per region |\r\n| **Outputs** | Share values between stacks | Export VPC ID |\r\n| **Conditions** | Control resource creation | Create resource if prod |\r\n\r\n**Exam Tip**: \"Region-specific values\" + \"CloudFormation\" = Mappings",
    "why": [
      "*CloudFormation Mappings**:",
      "```yaml",
      "Mappings:",
      "RegionToAMI:",
      "us-east-1:",
      "AMI: ami-0abcdef1234567890",
      "us-west-2:",
      "AMI: ami-0123456789abcdef0",
      "eu-west-1:",
      "AMI: ami-0fedcba9876543210",
      "```",
      "*Usage in Template**:",
      "```yaml",
      "Resources:",
      "MyEC2Instance:",
      "Type: AWS::EC2::Instance",
      "Properties:",
      "ImageId: !FindInMap [RegionToAMI, !Ref \"AWS::Region\", AMI]",
      "InstanceType: t3.micro",
      "```",
      "*Fn::FindInMap Syntax**:",
      "```",
      "!FindInMap [MapName, TopLevelKey, SecondLevelKey]",
      "```",
      "*Why Mappings**:",
      "✅ Static, region-specific values",
      "✅ Easy to maintain",
      "✅ Built-in CloudFormation feature",
      "✅ No external dependencies",
      "*Comparison**:",
      "| Method | Use Case | Example |",
      "|--------|----------|---------|",
      "| **Parameters** | User input at runtime | Environment (dev/prod) |",
      "| **Mappings** | Static lookups (region, env) | AMI IDs per region |",
      "| **Outputs** | Share values between stacks | Export VPC ID |",
      "| **Conditions** | Control resource creation | Create resource if prod |",
      "*Exam Tip**: \"Region-specific values\" + \"CloudFormation\" = Mappings"
    ],
    "others": [],
    "module": "Complex Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "ia-16",
    "q": "A data analytics company uses Amazon Redshift for large-scale data warehouse queries. They're experiencing performance issues due to high network bandwidth and CPU usage on compute nodes, especially for large table scans. The company wants to improve query performance without significantly increasing infrastructure costs.\r\n\r\nWhat's the most effective solution?",
    "options": {
      "A": "Increase the number of compute nodes in the Redshift cluster",
      "B": "Enable Amazon Redshift AQUA (Advanced Query Accelerator)",
      "C": "Use Redshift Spectrum to offload queries to S3",
      "D": "Create materialized views for frequently accessed data"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Amazon Redshift AQUA (Advanced Query Accelerator) is a distributed hardware-accelerated cache available on RA3 nodes that pushes data filtering and aggregation down to the storage layer, boosting scan performance by up to 10x without adding compute nodes.",
    "why": [
      "Amazon Redshift AQUA offloads large table scans and filtering to hardware-accelerated storage cache, improving performance up to 10x."
    ],
    "others": [],
    "module": "Complex Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "ia-17",
    "q": "A company plans to migrate 500 VMware virtual machines from its on-premises data center to AWS. They need to collect CPU, memory, disk, and network utilization metrics to right-size EC2 instances. The VMs run various operating systems (Windows, Linux, custom apps). What's the most efficient approach?",
    "options": {
      "A": "Install AWS Discovery Agent on each VM",
      "B": "Deploy AWS Application Discovery Service Agentless Collector (OVA) in VMware",
      "C": "Use AWS Migration Hub without discovery",
      "D": "Manually document server specifications"
    },
    "answer": [
      "B"
    ],
    "explanation": "• AWS Application Discovery Service Agentless Collector deploys as a single VMware OVA virtual appliance connected to vCenter Server.\n• It collects CPU, memory, disk, and network utilization metrics across all 500 VMs without installing agents on individual guest operating systems.",
    "why": [
      "The AWS Application Discovery Service Agentless Collector (OVA) integrates with VMware vCenter to inventory and profile 500 VMs without per-VM agents."
    ],
    "others": [],
    "module": "Complex Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "ia-18",
    "q": "A company has an EFS file system in eu-west-1 (VPC A) that needs to be accessed by:\r\n1. EC2 instances in us-east-1 (VPC B)\r\n2. On-premises servers connected to us-east-1 via AWS Direct Connect\r\n\r\nThe solution must avoid internet exposure and minimize latency. What architecture should you implement?",
    "options": {
      "A": "Set up VPC peering between VPC A and VPC B, configure routing",
      "B": "Use AWS PrivateLink to connect VPCs and on-premises",
      "C": "Set up inter-region VPC peering between VPC A and VPC B, use Direct Connect to VPC B",
      "D": "Copy EFS data to S3 and access via S3 Transfer Acceleration"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Amazon EFS supports cross-region and on-premises mounting:\n  1. Establish an Inter-Region VPC Peering connection between VPC A (`eu-west-1`) and VPC B (`us-east-1`).\n  2. Connect on-premises servers to VPC B via AWS Direct Connect (or Direct Connect Gateway) so both EC2 and on-premises clients route privately to the EFS Mount Targets.",
    "why": [
      "Inter-region VPC peering between eu-west-1 and us-east-1 combined with Direct Connect provides private, low-latency EFS access."
    ],
    "others": [],
    "module": "Complex Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "ia-19",
    "q": "An e-commerce website needs to show personalized product recommendations in real-time based on user behavior. The recommendation engine must handle millions of read/write operations per second with sub-millisecond latency. Which database service should you use?",
    "options": {
      "A": "Amazon RDS with Read Replicas",
      "B": "Amazon DynamoDB with DAX",
      "C": "Amazon ElastiCache for Redis",
      "D": "Amazon Aurora Serverless"
    },
    "answer": [
      "C"
    ],
    "explanation": "• Amazon ElastiCache for Redis is an in-memory data store delivering sub-millisecond latency (< 1ms) and millions of operations per second.\n• It supports rich data structures (sorted sets, hashes) ideal for real-time personalized product recommendations and session state.",
    "why": [
      "Amazon ElastiCache for Redis delivers sub-millisecond read/write throughput and sorted-set data structures ideal for real-time recommendation engines."
    ],
    "others": [],
    "module": "Complex Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "ia-20",
    "q": "A wildlife conservation organization has 10,000 camera trap images stored in S3 containing various animal species. They want to automatically identify specific endangered species without building a machine learning model from scratch. What's the most efficient solution?",
    "options": {
      "A": "Use Amazon Rekognition's general Object Detection API",
      "B": "Use Amazon Rekognition Custom Labels to train a custom model",
      "C": "Use Amazon SageMaker to build a deep learning model",
      "D": "Use AWS Lambda with OpenCV for image processing"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Amazon Rekognition Custom Labels builds custom computer vision models on top of Rekognition's pre-trained deep learning foundation.\n• With only a small set of labeled training images in S3, it learns to detect domain-specific objects (such as specific endangered species) with zero ML coding.",
    "why": [
      "Amazon Rekognition Custom Labels trains custom object-detection models from a small labeled image dataset in S3 without building ML models from scratch."
    ],
    "others": [],
    "module": "Complex Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "ia-21",
    "q": "Your security team wants to prevent all member accounts in your AWS Organization from creating Internet Gateways or attaching them to VPCs, while allowing existing Internet Gateways to continue functioning. How should you implement this?",
    "options": {
      "A": "Create an SCP that denies `ec2:CreateInternetGateway` and `ec2:AttachInternetGateway` for all accounts",
      "B": "Create an SCP that denies `ec2:CreateInternetGateway` and `ec2:AttachInternetGateway` for all accounts including the management account",
      "C": "Create an IAM policy in each member account denying these actions",
      "D": "Use AWS Config rules to detect and delete newly created Internet Gateways"
    },
    "answer": [
      "A"
    ],
    "explanation": "• A Service Control Policy (SCP) attached to the AWS Organization root or OUs sets preventive guardrails across all member accounts.\n• Denying `ec2:CreateInternetGateway` and `ec2:AttachInternetGateway` prevents new IGWs from being created or attached while leaving existing IGWs operational.\n• Note: SCPs never affect the management account.",
    "why": [
      "An SCP denying ec2:CreateInternetGateway and ec2:AttachInternetGateway prevents member accounts from adding new IGWs without disrupting existing ones."
    ],
    "others": [],
    "module": "Complex Scenarios",
    "multi": false,
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "ia-22",
    "q": "A financial application runs on an EC2 instance with 64 GB of memory. The application loads a large dataset into memory at startup, which takes 20 minutes. During maintenance windows, the instance must be temporarily stopped and restarted quickly. What feature should you use to minimize startup time?",
    "options": {
      "A": "Create an AMI of the instance and launch from it",
      "B": "Use EC2 Stop/Start",
      "C": "Enable EC2 Hibernation",
      "D": "Use EC2 Instance Store backed AMI"
    },
    "answer": [
      "C"
    ],
    "explanation": "• EC2 Hibernation persists the contents of instance RAM to the encrypted EBS root volume when the instance is stopped.\n• Upon restart, the memory image is reloaded directly into RAM, allowing the 64 GB in-memory dataset to resume in under a minute instead of taking 20 minutes to reload.",
    "why": [
      "EC2 Hibernation saves the 64 GB RAM state to the encrypted EBS root volume so the application resumes rapidly after maintenance."
    ],
    "others": [],
    "module": "Complex Scenarios",
    "multi": false,
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "ia-23",
    "q": "A company has a Site-to-Site VPN connection between their on-premises data center and AWS. The VPN throughput is limited to 1.25 Gbps, but they need to transfer large datasets requiring 5 Gbps bandwidth. How can they increase VPN throughput cost-effectively?",
    "options": {
      "A": "Upgrade to AWS Direct Connect (10 Gbps)",
      "B": "Create multiple VPN connections and use Transit Gateway with ECMP enabled",
      "C": "Create multiple VPN connections to Virtual Private Gateway",
      "D": "Use VPN connection compression to increase throughput"
    },
    "answer": [
      "B"
    ],
    "explanation": "**Transit Gateway + ECMP**:\r\n- **ECMP** = Equal-Cost Multi-Path routing\r\n- Distributes traffic across multiple VPN tunnels\r\n- Aggregate throughput = Sum of all tunnels\r\n\r\n**Architecture**:\r\n```\r\nOn-premises --[VPN1 (1.25 Gbps)]--\\\r\n             --[VPN2 (1.25 Gbps)]----> Transit Gateway --[ECMP enabled]--> VPC A\r\n             --[VPN3 (1.25 Gbps)]--/                                   \\-> VPC B\r\n             --[VPN4 (1.25 Gbps)]--/\r\n                                        \r\nTotal throughput: 5 Gbps (4 x 1.25)\r\n```\r\n\r\n**Configuration**:\r\n1. Create Transit Gateway\r\n2. Create multiple Site-to-Site VPN connections (each has 2 tunnels)\r\n3. Enable dynamic routing (BGP)\r\n4. Configure Transit Gateway to use ECMP\r\n\r\n**Why ECMP Works**:\r\n- Multiple equal-cost paths to same destination\r\n- BGP advertises same routes via multiple VPNs\r\n- Transit Gateway load-balances traffic\r\n\r\n**Why Not Others**:\r\n- **A (Direct Connect)**: More expensive; requires physical installation\r\n- **C (VGW)**: Virtual Private Gateway does NOT support ECMP\r\n- **D**: VPN compression doesn't overcome tunnel limits\r\n\r\n**Key Point**: ECMP requires **Transit Gateway** (VGW doesn't support it)\r\n\r\n**Exam Tip**: \"Increase VPN throughput\" + \"cost-effective\" = Multiple VPNs + Transit Gateway + ECMP",
    "why": [
      "*Transit Gateway + ECMP**:",
      "**ECMP** = Equal-Cost Multi-Path routing",
      "Distributes traffic across multiple VPN tunnels",
      "Aggregate throughput = Sum of all tunnels",
      "*Architecture**:",
      "```",
      "On-premises --[VPN1 (1.25 Gbps)]--\\",
      "--[VPN2 (1.25 Gbps)]----> Transit Gateway --[ECMP enabled]--> VPC A",
      "--[VPN3 (1.25 Gbps)]--/                                   \\-> VPC B",
      "--[VPN4 (1.25 Gbps)]--/",
      "Total throughput: 5 Gbps (4 x 1.25)",
      "```",
      "*Configuration**:",
      "1. Create Transit Gateway",
      "2. Create multiple Site-to-Site VPN connections (each has 2 tunnels)",
      "3. Enable dynamic routing (BGP)",
      "4. Configure Transit Gateway to use ECMP",
      "*Why ECMP Works**:",
      "Multiple equal-cost paths to same destination",
      "BGP advertises same routes via multiple VPNs",
      "Transit Gateway load-balances traffic",
      "*Why Not Others**:",
      "**A (Direct Connect)**: More expensive; requires physical installation",
      "**C (VGW)**: Virtual Private Gateway does NOT support ECMP",
      "**D**: VPN compression doesn't overcome tunnel limits",
      "*Key Point**: ECMP requires **Transit Gateway** (VGW doesn't support it)",
      "*Exam Tip**: \"Increase VPN throughput\" + \"cost-effective\" = Multiple VPNs + Transit Gateway + ECMP"
    ],
    "others": [],
    "module": "Complex Scenarios",
    "multi": false,
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "ia-24",
    "q": "Your company has EC2 instances in three Availability Zones in us-east-1 that need internet access. Currently, all instances use a single NAT Gateway in us-east-1a. You notice high data transfer costs on your AWS bill. How can you reduce costs?",
    "options": {
      "A": "Replace NAT Gateway with NAT Instance",
      "B": "Use Internet Gateway directly",
      "C": "Deploy one Public NAT Gateway per AZ where you have instances",
      "D": "Use a single NAT Gateway but in a different AZ"
    },
    "answer": [
      "C"
    ],
    "explanation": "• When instances in `us-east-1b` and `us-east-1c` send traffic through a single NAT Gateway in `us-east-1a`, AWS charges Cross-AZ data transfer fees.\n• Deploying one public NAT Gateway in each Availability Zone and routing each AZ's private subnets to its local NAT Gateway eliminates cross-AZ transfer costs and improves fault tolerance.",
    "why": [
      "Deploying a public NAT Gateway in each Availability Zone eliminates cross-AZ data transfer charges and removes the single point of failure."
    ],
    "others": [],
    "module": "Complex Scenarios",
    "multi": false,
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "ia-25",
    "q": "A global SaaS company stores encrypted customer data in S3 buckets across multiple regions (us-east-1, eu-west-1, ap-southeast-1). Currently, they use separate KMS keys in each region, causing high latency when accessing data from other regions. How can they reduce latency while maintaining encryption?",
    "options": {
      "A": "Use a single KMS key in us-east-1 for all regions",
      "B": "Create multi-region KMS keys and replicate to all regions",
      "C": "Disable encryption to eliminate latency",
      "D": "Use AWS Secrets Manager instead of KMS"
    },
    "answer": [
      "B"
    ],
    "explanation": "**Multi-Region KMS Keys**:\r\n- **Primary key** in one region\r\n- **Replica keys** in other regions\r\n- Same key material across all regions\r\n- Independently manageable key policies\r\n\r\n**How It Works**:\r\n```\r\nPrimary Key (us-east-1): mrk-123abc...\r\nReplica Key (eu-west-1): mrk-123abc... (same key ID prefix)\r\nReplica Key (ap-southeast-1): mrk-123abc... (same key ID prefix)\r\n```\r\n\r\n**Encryption in us-east-1**:\r\n```python\r\nkms.encrypt(\r\n    KeyId='mrk-123abc...',  # Uses local key\r\n    Plaintext=b'customer data'\r\n)\r\n```\r\n\r\n**Decryption in eu-west-1**:\r\n```python\r\nkms.decrypt(\r\n    CiphertextBlob=encrypted_data  # Automatically uses local replica\r\n)\r\n```\r\n\r\n**Benefits**:\r\n- ✅ Low-latency encryption/decryption (local API calls)\r\n- ✅ Data encrypted in one region can be decrypted in another\r\n- ✅ Disaster recovery (automatic failover)\r\n- ✅ Compliance (data residency maintained)\r\n\r\n**Use Cases**:\r\n- Global applications\r\n- Multi-region databases (DynamoDB Global Tables, Aurora Global Database)\r\n- Disaster recovery\r\n- Data migration between regions\r\n\r\n**Why Not Others**:\r\n- **A**: Cross-region KMS calls add latency (~100-300ms)\r\n- **C**: Violates security requirements\r\n- **D**: Secrets Manager uses KMS under the hood; doesn't solve the problem\r\n\r\n**Exam Keyword**: \"Global\" + \"encryption\" + \"latency\" = Multi-Region KMS Keys",
    "why": [
      "*Multi-Region KMS Keys**:",
      "**Primary key** in one region",
      "**Replica keys** in other regions",
      "Same key material across all regions",
      "Independently manageable key policies",
      "*How It Works**:",
      "```",
      "Primary Key (us-east-1): mrk-123abc...",
      "Replica Key (eu-west-1): mrk-123abc... (same key ID prefix)",
      "Replica Key (ap-southeast-1): mrk-123abc... (same key ID prefix)",
      "```",
      "*Encryption in us-east-1**:",
      "```python",
      "kms.encrypt(",
      "KeyId='mrk-123abc...',  # Uses local key",
      "Plaintext=b'customer data'",
      ")",
      "```",
      "*Decryption in eu-west-1**:",
      "```python",
      "kms.decrypt(",
      "CiphertextBlob=encrypted_data  # Automatically uses local replica",
      ")",
      "```",
      "*Benefits**:",
      "✅ Low-latency encryption/decryption (local API calls)",
      "✅ Data encrypted in one region can be decrypted in another",
      "✅ Disaster recovery (automatic failover)",
      "✅ Compliance (data residency maintained)",
      "*Use Cases**:",
      "Global applications",
      "Multi-region databases (DynamoDB Global Tables, Aurora Global Database)",
      "Disaster recovery",
      "Data migration between regions",
      "*Why Not Others**:",
      "**A**: Cross-region KMS calls add latency (~100-300ms)",
      "**C**: Violates security requirements",
      "**D**: Secrets Manager uses KMS under the hood; doesn't solve the problem",
      "*Exam Keyword**: \"Global\" + \"encryption\" + \"latency\" = Multi-Region KMS Keys"
    ],
    "others": [],
    "module": "Complex Scenarios",
    "multi": false,
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "ia-26",
    "q": "Your compliance team needs to query 5 years of AWS API activity logs across 50 AWS accounts and 10 regions for audit reports. They need to run complex queries like \"Show all IAM policy changes by user X in the last 3 years.\" What's the most efficient solution?",
    "options": {
      "A": "Store CloudTrail logs in S3 and use Amazon Athena to query",
      "B": "Use CloudTrail Event History (90-day retention)",
      "C": "Enable CloudTrail Lake and run SQL queries",
      "D": "Export logs to CloudWatch Logs Insights"
    },
    "answer": [
      "C"
    ],
    "explanation": "**CloudTrail Lake**:\r\n- **Managed data lake** for CloudTrail events\r\n- **SQL-based querying** (not just log searching)\r\n- **Long-term retention** (up to 7 years)\r\n- **Multi-account, multi-region** aggregation\r\n- **Serverless** (no infrastructure to manage)\r\n\r\n**Example Query**:\r\n```sql\r\nSELECT\r\n  userIdentity.principalId,\r\n  eventName,\r\n  eventTime,\r\n  sourceIPAddress\r\nFROM\r\n  cloudtrail_events\r\nWHERE\r\n  eventName IN ('PutUserPolicy', 'PutRolePolicy', 'AttachUserPolicy')\r\n  AND eventTime >= '2023-01-01'\r\n  AND eventTime <= '2025-12-31'\r\n  AND userIdentity.principalId LIKE '%user-x%'\r\nORDER BY\r\n  eventTime DESC\r\n```\r\n\r\n**How to Use**:\r\n1. Create event data store in CloudTrail Lake\r\n2. Specify retention period (7 years)\r\n3. Run SQL queries in console or via API\r\n4. Export results to CSV/JSON\r\n\r\n**Pricing**:\r\n- **Ingestion**: $2.50 per GB\r\n- **Storage**: $0.023 per GB/month\r\n- **Queries**: $0.005 per GB scanned\r\n\r\n**vs S3 + Athena**:\r\n\r\n| Feature | CloudTrail Lake | S3 + Athena |\r\n|---------|----------------|-------------|\r\n| Setup | Simple (managed) | Complex (S3, Glue, Athena) |\r\n| Querying | Built-in SQL | Athena SQL |\r\n| Cost | Higher ingestion | Lower storage, pay per query |\r\n| Multi-account | Native | Manual aggregation |\r\n\r\n**Best For**: Compliance, audit reporting, security analysis\r\n\r\n**Exam Scenario**: \"Complex queries\" + \"multi-account\" + \"long-term\" = CloudTrail Lake",
    "why": [
      "*CloudTrail Lake**:",
      "**Managed data lake** for CloudTrail events",
      "**SQL-based querying** (not just log searching)",
      "**Long-term retention** (up to 7 years)",
      "**Multi-account, multi-region** aggregation",
      "**Serverless** (no infrastructure to manage)",
      "*Example Query**:",
      "```sql",
      "SELECT",
      "userIdentity.principalId,",
      "eventName,",
      "eventTime,",
      "sourceIPAddress",
      "FROM",
      "cloudtrail_events",
      "WHERE",
      "eventName IN ('PutUserPolicy', 'PutRolePolicy', 'AttachUserPolicy')",
      "AND eventTime >= '2023-01-01'",
      "AND eventTime <= '2025-12-31'",
      "AND userIdentity.principalId LIKE '%user-x%'",
      "ORDER BY",
      "eventTime DESC",
      "```",
      "*How to Use**:",
      "1. Create event data store in CloudTrail Lake",
      "2. Specify retention period (7 years)",
      "3. Run SQL queries in console or via API",
      "4. Export results to CSV/JSON",
      "*Pricing**:",
      "**Ingestion**: $2.50 per GB",
      "**Storage**: $0.023 per GB/month",
      "**Queries**: $0.005 per GB scanned",
      "*vs S3 + Athena**:",
      "| Feature | CloudTrail Lake | S3 + Athena |",
      "|---------|----------------|-------------|",
      "| Setup | Simple (managed) | Complex (S3, Glue, Athena) |",
      "| Querying | Built-in SQL | Athena SQL |",
      "| Cost | Higher ingestion | Lower storage, pay per query |",
      "| Multi-account | Native | Manual aggregation |",
      "*Best For**: Compliance, audit reporting, security analysis",
      "*Exam Scenario**: \"Complex queries\" + \"multi-account\" + \"long-term\" = CloudTrail Lake"
    ],
    "others": [],
    "module": "Complex Scenarios",
    "multi": false,
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "ia-27",
    "q": "Your application needs to:\r\n1. Encrypt data stored in S3 using AWS services\r\n2. Digitally sign software packages for distribution\r\n3. Never expose encryption keys outside AWS\r\n\r\nWhich KMS key types should you use?",
    "options": {
      "A": "Symmetric keys for both use cases",
      "B": "Asymmetric keys for both use cases",
      "C": "Symmetric key for S3 encryption, asymmetric key for digital signing",
      "D": "Asymmetric key for S3 encryption, symmetric key for digital signing"
    },
    "answer": [
      "C"
    ],
    "explanation": "**Symmetric Keys** (256-bit AES):\r\n- Same key for encryption and decryption\r\n- **Never leaves AWS KMS** unencrypted\r\n- Integrated with AWS services (S3, EBS, RDS, DynamoDB)\r\n- Fastest performance\r\n\r\n**Use Cases**:\r\n- ✅ Data at rest encryption (S3, EBS)\r\n- ✅ Database encryption (RDS, DynamoDB)\r\n- ✅ Secrets Manager, Parameter Store\r\n\r\n**API Operations**:\r\n```python\r\n# Encrypt\r\nresponse = kms.encrypt(\r\n    KeyId='alias/my-symmetric-key',\r\n    Plaintext=b'sensitive data'\r\n)\r\n\r\n# Decrypt\r\nresponse = kms.decrypt(\r\n    CiphertextBlob=encrypted_data\r\n)\r\n```\r\n\r\n**Asymmetric Keys** (RSA or ECC):\r\n- Public key (can be exported) + Private key (stays in KMS)\r\n- Different operations: Encrypt/decrypt, Sign/verify\r\n\r\n**Use Cases**:\r\n- ✅ Digital signatures (code signing, JWT tokens)\r\n- ✅ Public key encryption (offline encryption)\r\n- ✅ TLS certificate generation\r\n\r\n**API Operations**:\r\n```python\r\n# Sign\r\nresponse = kms.sign(\r\n    KeyId='alias/my-asymmetric-key',\r\n    Message=b'software package hash',\r\n    SigningAlgorithm='RSASSA_PSS_SHA_256'\r\n)\r\n\r\n# Get public key (for verification)\r\nresponse = kms.get_public_key(\r\n    KeyId='alias/my-asymmetric-key'\r\n)\r\n# Public key can be distributed to verify signatures\r\n```\r\n\r\n**Quick Decision Tree**:\r\n- Need to encrypt/decrypt in AWS? → **Symmetric**\r\n- Need to sign/verify? → **Asymmetric**\r\n- Need public key distribution? → **Asymmetric**\r\n\r\n**Exam Trap**: Digital signatures ALWAYS require asymmetric keys",
    "why": [
      "*Symmetric Keys** (256-bit AES):",
      "Same key for encryption and decryption",
      "**Never leaves AWS KMS** unencrypted",
      "Integrated with AWS services (S3, EBS, RDS, DynamoDB)",
      "Fastest performance",
      "*Use Cases**:",
      "✅ Data at rest encryption (S3, EBS)",
      "✅ Database encryption (RDS, DynamoDB)",
      "✅ Secrets Manager, Parameter Store",
      "*API Operations**:",
      "```python",
      "# Encrypt",
      "response = kms.encrypt(",
      "KeyId='alias/my-symmetric-key',",
      "Plaintext=b'sensitive data'",
      ")",
      "# Decrypt",
      "response = kms.decrypt(",
      "CiphertextBlob=encrypted_data",
      ")",
      "```",
      "*Asymmetric Keys** (RSA or ECC):",
      "Public key (can be exported) + Private key (stays in KMS)",
      "Different operations: Encrypt/decrypt, Sign/verify",
      "*Use Cases**:",
      "✅ Digital signatures (code signing, JWT tokens)",
      "✅ Public key encryption (offline encryption)",
      "✅ TLS certificate generation",
      "*API Operations**:",
      "```python",
      "# Sign",
      "response = kms.sign(",
      "KeyId='alias/my-asymmetric-key',",
      "Message=b'software package hash',",
      "SigningAlgorithm='RSASSA_PSS_SHA_256'",
      ")",
      "# Get public key (for verification)",
      "response = kms.get_public_key(",
      "KeyId='alias/my-asymmetric-key'",
      ")",
      "# Public key can be distributed to verify signatures",
      "```",
      "*Quick Decision Tree**:",
      "Need to encrypt/decrypt in AWS? → **Symmetric**",
      "Need to sign/verify? → **Asymmetric**",
      "Need public key distribution? → **Asymmetric**",
      "*Exam Trap**: Digital signatures ALWAYS require asymmetric keys"
    ],
    "others": [],
    "module": "Complex Scenarios",
    "multi": false,
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "ia-28",
    "q": "Your company has 20 AWS accounts in an AWS Organization. Each account has provisioned its own VPC, subnets, and Transit Gateway attachments to connect to the corporate network. This duplication is causing high costs and management overhead. How can you reduce costs and centralize resource management?",
    "options": {
      "A": "Use VPC peering between all accounts",
      "B": "Create resources in one account and share using AWS Resource Access Manager (RAM)",
      "C": "Use AWS Organizations consolidated billing only",
      "D": "Merge all accounts into one"
    },
    "answer": [
      "B"
    ],
    "explanation": "• AWS Resource Access Manager (RAM) enables VPC Subnet Sharing and Transit Gateway attachment sharing across accounts within an AWS Organization.\n• A central networking account provisions the VPC and Transit Gateway once and shares subnets via RAM, eliminating duplicate NAT Gateways, VPCs, and TGW attachments.",
    "why": [
      "AWS Resource Access Manager (RAM) allows sharing VPC subnets and Transit Gateway attachments across Organization accounts to eliminate duplication costs."
    ],
    "others": [],
    "module": "Complex Scenarios",
    "multi": false,
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "ia-29",
    "q": "You have EC2 instances in private subnets across three Availability Zones in us-east-1. Each AZ has approximately 500 GB of outbound internet traffic per month. Currently, all instances use a single NAT Gateway in us-east-1a. Your AWS bill shows high cross-AZ data transfer charges. How should you optimize costs?",
    "options": {
      "A": "Use NAT Instances instead of NAT Gateways",
      "B": "Deploy one Public NAT Gateway in each AZ",
      "C": "Use a single NAT Gateway but enable compression",
      "D": "Configure instances to use an Internet Gateway directly"
    },
    "answer": [
      "B"
    ],
    "explanation": "• Routing 500 GB/month from AZ-b and AZ-c across AZ boundaries to a single NAT Gateway in AZ-a incurs Cross-AZ data transfer charges.\n• Deploying one Public NAT Gateway per AZ keeps NAT traffic local to each AZ, eliminating cross-AZ data transfer charges and providing Multi-AZ resilience.",
    "why": [
      "Deploying one NAT Gateway in each Availability Zone keeps outbound traffic within the same AZ, eliminating cross-AZ data transfer charges."
    ],
    "others": [],
    "module": "Complex Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "ia-30",
    "q": "Your AWS Organization has 15 member accounts, each provisioning NAT Gateways independently. The CFO wants to see a consolidated report showing NAT Gateway costs by account, environment (prod/dev), and department. How should you configure this?",
    "options": {
      "A": "Member accounts tag their NAT Gateways; management account activates cost allocation tags and views in Cost Explorer",
      "B": "Management account tags all NAT Gateways across member accounts",
      "C": "Each member account views their own costs in their billing console",
      "D": "Use AWS Budgets to track costs per account"
    },
    "answer": [
      "A"
    ],
    "explanation": "• In AWS Organizations, member accounts apply user-defined tags (such as `Environment` and `Department`) to their NAT Gateways.\n• The management account activates those tags as Cost Allocation Tags in the Billing console and uses AWS Cost Explorer to view consolidated reports grouped by account and tag.",
    "why": [
      "Member accounts tag their resources while the management account activates Cost Allocation Tags to group and filter spend in AWS Cost Explorer."
    ],
    "others": [],
    "module": "Complex Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "ia-31",
    "q": "A company plans to migrate 100 on-premises Windows and Linux servers to AWS. The migration must be automated, have minimal downtime, and allow testing in AWS before final cutover. What AWS service should you use?",
    "options": {
      "A": "AWS Server Migration Service (SMS)",
      "B": "AWS Application Migration Service",
      "C": "AWS Database Migration Service (DMS)",
      "D": "AWS DataSync"
    },
    "answer": [
      "B"
    ],
    "explanation": "• AWS Application Migration Service (AWS MGN) is the primary lift-and-shift (rehost) service for migrating physical, VMware, or Hyper-V servers to AWS.\n• It uses continuous block-level replication into a low-cost staging area and supports non-disruptive test launches prior to final cutover.",
    "why": [
      "AWS Application Migration Service (MGN) automates block-level continuous replication and pre-cutover testing for Windows and Linux server migrations."
    ],
    "others": [],
    "module": "Complex Scenarios",
    "multi": false,
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "sb-official-01",
    "q": "The CIO of a company is concerned about the security of the root user of their AWS account. How can the CIO ensure that the root account follows best practices for securely logging in? (Select TWO)",
    "options": {
      "A": "Enforce the use of an Access Key ID and Secret Access Key for the root user logins.",
      "B": "Enforce the use of Multi-Factor Authentication (MFA) for the root user logins.",
      "C": "Enforce the root user to assume a role to access the root user's own resources.",
      "D": "Enforce the use of complex passwords for member account root user logins.",
      "E": "Enforce the deletion of the root account so that it cannot be used."
    },
    "answer": [
      "B",
      "D"
    ],
    "explanation": "• Enabling Multi-Factor Authentication (MFA) on the root user adds a critical second layer of defense beyond a password.\n• Enforcing strong, complex passwords across member account root logins prevents brute-force compromise in AWS Organizations.\n• Root access keys (Option A) should never be generated or used; programmatic access must use IAM roles.\n• The root user cannot assume a role to access its own account resources (Option C).\n• The root account cannot and must not be deleted (Option E), as it owns the account and all underlying resources.",
    "module": "IAM",
    "multi": true,
    "why": [
      "Enforcing MFA for root user logins provides essential defense-in-depth against unauthorized access.",
      "Enforcing complex passwords for member account root users aligns with AWS Organizations security benchmarks and root protection best practices."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Access keys provide programmatic access with unrestricted permissions that cannot be scoped down. Best practice is to delete root access keys, not enforce them."
      },
      {
        "l": [
          "C"
        ],
        "t": "The root user cannot assume an IAM role into its own account. Roles are assumed by IAM entities or cross-account principals."
      },
      {
        "l": [
          "E"
        ],
        "t": "Deleting the root account would permanently delete all AWS resources and terminate the AWS account environment entirely."
      }
    ],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "sb-official-02",
    "q": "A solutions architect is designing a multi-tier web application in a VPC. Application A (listening on HTTP port 80) and Application B (listening on HTTPS port 443) are hosted on separate EC2 instances within the same public subnet. The architect must ensure that only HTTP traffic is permitted to Application A, and only HTTPS traffic is permitted to Application B. Which solution meets these requirements?",
    "options": {
      "A": "Configure a Network Access Control List (NACL) associated with the subnet to filter ports 80 and 443.",
      "B": "Attach distinct Security Groups to each EC2 instance: one allowing inbound port 80 for Application A, and another allowing inbound port 443 for Application B.",
      "C": "Create a VPC Peering connection between the instances and filter traffic at the peering route table.",
      "D": "Modify the subnet Route Table to direct port 80 traffic to Application A and port 443 to Application B."
    },
    "answer": [
      "B"
    ],
    "explanation": "• Security Groups operate at the instance/ENI level, allowing granular traffic control between instances in the very same subnet.\n• Network ACLs (Option A) operate at the subnet boundary and apply uniformly to all traffic entering/leaving the subnet; they cannot differentiate between two instances inside the same subnet.\n• Route tables (Option D) direct IP CIDR destination blocks, not port-level application traffic.\n• VPC Peering (Option C) is for connecting distinct VPCs, not instances within the same subnet.",
    "module": "Networking",
    "multi": false,
    "why": [
      "Security Groups act as virtual firewalls at the instance (ENI) level, enabling distinct inbound rules for different instances residing in the exact same subnet."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Network ACLs operate at the subnet boundary and cannot filter or inspect traffic between instances within the same subnet."
      },
      {
        "l": [
          "C"
        ],
        "t": "VPC Peering connects two VPCs, not instances inside the same subnet."
      },
      {
        "l": [
          "D"
        ],
        "t": "Subnet route tables route by destination IP prefix (CIDR), not by TCP port numbers."
      }
    ],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "sb-official-03",
    "q": "A financial company needs to store and process sensitive regulatory data in AWS. Data keys must be protected using cryptographic controls that ensure strict separation of duties, automatic rotation, and access policies that define exactly which IAM principals can encrypt and decrypt data. Which AWS service and mechanism should the company use?",
    "options": {
      "A": "AWS Certificate Manager (ACM) with private certificates.",
      "B": "AWS Key Management Service (AWS KMS) customer managed keys with key policies.",
      "C": "Amazon EC2 Instance Store with host-level volume encryption.",
      "D": "Amazon S3 server-side encryption with Amazon S3 managed keys (SSE-S3) and S3 bucket policies."
    },
    "answer": [
      "B"
    ],
    "explanation": "• AWS KMS provides envelope encryption, customer managed keys (CMKs), key policies for fine-grained IAM separation of duties (key administrators vs key users), and annual automatic key rotation.\n• ACM (Option A) manages TLS/SSL x509 certificates for web endpoints, not cryptographic data keys for general application data.\n• EC2 Instance Store (Option C) is ephemeral block storage that loses data when an instance stops or terminates, unsuitable for persistent regulatory records.\n• SSE-S3 (Option D) uses AWS-owned master keys without customer key policy separation of duties or cross-service key access management.",
    "module": "Security",
    "multi": false,
    "why": [
      "AWS KMS Customer Managed Keys allow granular separation of duties via Key Policies and grant cryptographic protection for data keys with automatic rotation."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "ACM manages TLS certificates for HTTPS in transit, not symmetric data encryption keys."
      },
      {
        "l": [
          "C"
        ],
        "t": "Instance store volumes are ephemeral and not designed for secure, durable regulatory storage."
      },
      {
        "l": [
          "D"
        ],
        "t": "SSE-S3 does not provide customer-controlled key policies or separation of duties between key admins and key users."
      }
    ],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "sb-practice-01",
    "q": "A company is running an application on two Amazon EC2 instances. The company requires low latency for all users in the same AWS Region while maintaining a high level of fault tolerance. Which solution will meet these requirements?",
    "options": {
      "A": "Place each EC2 instance in a different Availability Zone.",
      "B": "Place each EC2 instance in a different VPC.",
      "C": "Place each EC2 instance in a different Region.",
      "D": "Place each EC2 instance in a different subnet."
    },
    "answer": [
      "A"
    ],
    "explanation": "• Availability Zones consist of one or more discrete data centers with redundant power, networking, and connectivity.\n• A failure in one Availability Zone will not cause an outage in another, providing high fault tolerance.\n• Multi-AZ placement within the same Region delivers low latency (single-digit ms) for regional users.\n• Different VPCs (Option B) do not guarantee separate physical AZs.\n• Different Regions (Option C) introduce high inter-region latency and violate the single-region low-latency requirement.\n• Different subnets (Option D) can reside in the same AZ, offering no physical isolation.",
    "module": "Compute",
    "multi": false,
    "why": [
      "Availability Zones consist of discrete data centers with redundant power, networking, and connectivity. Deploying instances across multiple AZs provides fault tolerance without sacrificing low-latency communication."
    ],
    "others": [
      {
        "l": [
          "B"
        ],
        "t": "VPCs isolate resources logically but do not dictate AZ placement. Two VPCs can easily end up in the exact same AZ."
      },
      {
        "l": [
          "C"
        ],
        "t": "Deploying across multiple Regions introduces significant inter-region latency and fails the requirement for low latency to regional users."
      },
      {
        "l": [
          "D"
        ],
        "t": "Subnets represent logical isolation within an AZ. Two distinct subnets can be mapped to the same Availability Zone, leaving the application vulnerable to a single data center outage."
      }
    ],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "sb-practice-02",
    "q": "A solutions architect must create a data store location that will be able to handle different file formats of unknown sizes. The data must be highly available and protected from being accidentally deleted. Which solution meets the requirements and is the MOST cost-effective?",
    "options": {
      "A": "Deploy an Amazon S3 bucket and enable object versioning.",
      "B": "Deploy an Amazon S3 bucket and activate Cross-Region Replication (CRR).",
      "C": "Deploy an Amazon DynamoDB table and activate global tables.",
      "D": "Deploy a database by using Amazon RDS and configure a Multi-AZ deployment for that database."
    },
    "answer": [
      "A"
    ],
    "explanation": "• Amazon S3 provides highly durable (99.999999999%) and available object storage supporting virtually any file format and unbounded object sizes (up to 5 TB per object).\n• Enabling Object Versioning protects against accidental deletion or overwrite by preserving all historical versions and placing delete markers instead of permanent removal.\n• Cross-Region Replication (Option B) incurs unnecessary inter-region data transfer and storage costs in a second Region when local versioning alone fulfills the requirement.\n• DynamoDB (Option C) is a NoSQL key-value/document store with a strict 400 KB item size limit, not a general file repository.\n• Amazon RDS (Option D) is a relational database management service, not suited for arbitrary unstructured file formats of arbitrary sizes.",
    "module": "Storage",
    "multi": false,
    "why": [
      "Amazon S3 with Object Versioning provides high availability, unlimited storage capacity for any file type/size, and protection from accidental deletion by inserting delete markers rather than permanently removing objects."
    ],
    "others": [
      {
        "l": [
          "B"
        ],
        "t": "Cross-Region Replication requires versioning and duplicates data across Regions, creating unnecessary extra storage and transfer costs."
      },
      {
        "l": [
          "C"
        ],
        "t": "DynamoDB has a 400 KB limit per item and is not designed for storing arbitrary files of unknown sizes."
      },
      {
        "l": [
          "D"
        ],
        "t": "Amazon RDS is a structured SQL database, not designed as a cost-effective arbitrary file store."
      }
    ],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "sb-practice-03",
    "q": "A financial company is developing a web application that will handle sensitive customer data. The application will be hosted on Amazon EC2 instances behind an internet-facing Application Load Balancer (ALB). The company requires that all data in transit must be encrypted. Additionally, SSL/TLS certificates must be managed with minimal manual intervention. A solutions architect must design a solution to meet the security requirements and to ensure efficient certificate renewal and rotation. Which solution will meet these requirements?",
    "options": {
      "A": "Purchase third-party SSL certificates. Import the SSL certificates into AWS Identity and Access Management (IAM). Associate the certificates with the ALB.",
      "B": "Use AWS Certificate Manager (ACM) to provision and manage a private SSL/TLS certificate. Configure the ALB to use the ACM managed certificate for HTTPS listeners.",
      "C": "Use AWS Certificate Manager (ACM) to provision and manage a public SSL/TLS certificate. Configure the ALB to use the ACM managed certificate for HTTPS listeners.",
      "D": "Use Amazon CloudFront with its default SSL certificate in front of the ALB. Configure CloudFront to forward HTTPS requests to the ALB over HTTP."
    },
    "answer": [
      "C"
    ],
    "explanation": "• AWS Certificate Manager (ACM) provisions, validates, and automatically renews public SSL/TLS certificates for internet-facing resources at no extra charge.\n• Integrating an ACM public certificate directly into an ALB HTTPS listener satisfies encryption in transit with zero manual certificate management.\n• IAM imported third-party certificates (Option A) require manual renewal, re-issuance, and re-importing.\n• ACM Private CA certificates (Option B) are not trusted by public web browsers and will produce untrusted certificate warning errors for public internet users.\n• Forwarding requests from CloudFront to ALB over HTTP (Option D) transmits unencrypted plain text between CloudFront and the origin, violating end-to-end encryption requirements.",
    "module": "Security",
    "multi": false,
    "why": [
      "AWS Certificate Manager (ACM) public certificates integrate natively with internet-facing ALBs, providing automated renewal/rotation and full in-transit encryption without manual intervention."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Third-party certificates imported into IAM lack automated rotation and renewal, requiring ongoing manual overhead."
      },
      {
        "l": [
          "B"
        ],
        "t": "Private certificates from AWS Private CA are only trusted within private internal networks; public internet browsers will throw severe security warning errors."
      },
      {
        "l": [
          "D"
        ],
        "t": "Forwarding requests from CloudFront to the ALB over HTTP breaks end-to-end encryption and transmits sensitive customer data in plain text."
      }
    ],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "sb-practice-04",
    "q": "A solutions architect needs to design a secure environment for AWS resources that are being deployed to Amazon EC2 instances in a VPC. The solution should support a three-tier architecture that consists of web servers, application servers, and a database cluster. The VPC needs to allow resources in the web tier to be accessible from the internet with only the HTTPS protocol. Which combination of actions would meet these requirements? (Select TWO)",
    "options": {
      "A": "Attach a virtual private gateway to the VPC. Create public subnets for the web and application tiers. Create private subnets for the database tier.",
      "B": "Attach an internet gateway to the VPC. Create public subnets for the web tier. Create private subnets for the application and database tiers.",
      "C": "Attach Amazon API Gateway to the VPC. Create private subnets for the web, application, and database tiers.",
      "D": "Create a web server security group that allows all traffic from the internet. Create an application server security group that allows requests from only the Amazon API Gateway on the application port. Create a database cluster security group that allows TCP connections from the application security group on the database port only.",
      "E": "Create a web server security group that allows HTTPS requests from the internet. Create an application server security group that allows requests from the web security group only. Create a database cluster security group that allows TCP connections from the application security group on the database port only."
    },
    "answer": [
      "B",
      "E"
    ],
    "explanation": "• Multi-tier architecture best practices require an Internet Gateway (IGW) with public subnets solely for the front-facing web tier, and private subnets for application and database tiers (Option B).\n• Security Groups must be chained: Web SG allows inbound port 443 (HTTPS) from 0.0.0.0/0; App SG permits traffic only from Web SG; Database SG permits traffic only from App SG (Option E).\n• A Virtual Private Gateway (Option A) connects private VPNs/Direct Connect, not public internet users, and application servers must not reside in public subnets.\n• API Gateway (Option C & D) is a managed REST/HTTP API service, not a VPC routing or ingress layer for EC2 instances.",
    "module": "Networking",
    "multi": true,
    "why": [
      "Attaching an Internet Gateway and assigning only the web tier to public subnets while isolating app and DB tiers in private subnets establishes proper physical/logical network segregation.",
      "Chaining Security Groups with Web SG restricted to HTTPS (443) and subsequent tiers referencing each other enforces the principle of least privilege at the transport layer."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "A Virtual Private Gateway is for VPN connections, not public internet ingress, and application servers should never be in public subnets."
      },
      {
        "l": [
          "C"
        ],
        "t": "API Gateway does not replace an Internet Gateway for multi-tier EC2 VPC architectures."
      },
      {
        "l": [
          "D"
        ],
        "t": "Allows all unencrypted traffic from the internet to the web tier, violating the requirement to restrict access to HTTPS only."
      }
    ],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "sb-practice-05",
    "q": "A solutions architect notices an abnormal amount of network traffic coming from an Amazon EC2 instance. The traffic is determined to be malicious, and the destination needs to be determined. What tool can the solutions architect use to identify the destination of the malicious network traffic?",
    "options": {
      "A": "Turn on AWS CloudTrail and filter the logs.",
      "B": "Consult the AWS Health Dashboard.",
      "C": "Turn on VPC Flow Logs and filter the logs.",
      "D": "Filter the logs from Amazon CloudWatch."
    },
    "answer": [
      "C"
    ],
    "explanation": "• VPC Flow Logs captures IP network traffic flow data entering and leaving network interfaces (ENIs), subnets, or VPCs.\n• Each log record includes source IP, destination IP, source port, destination port, protocol, packet count, and ACCEPT/REJECT status, allowing exact determination of malicious destination endpoints.\n• AWS CloudTrail (Option A) logs AWS management API calls and identity activities, not raw IP packet destinations.\n• AWS Health Dashboard (Option B) reports service outages and scheduled maintenance events affecting AWS infrastructure.\n• Amazon CloudWatch (Option D) collects OS and application logs/metrics, but does not capture raw network interface packet flow destinations without VPC Flow Logs enabled.",
    "module": "Networking",
    "multi": false,
    "why": [
      "VPC Flow Logs explicitly captures packet-level metadata including source and destination IP addresses and ports for all traffic traversing network interfaces."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "CloudTrail audits AWS control plane API calls and administrative operations, not raw network packet traffic."
      },
      {
        "l": [
          "B"
        ],
        "t": "AWS Health Dashboard provides notifications on AWS infrastructure health and service availability, not instance network traffic analysis."
      },
      {
        "l": [
          "D"
        ],
        "t": "CloudWatch provides monitoring metrics and log aggregation, but cannot capture network packet flow destinations without VPC Flow Logs."
      }
    ],
    "domain": "Domain 1: Design Secure Architectures"
  },
  {
    "id": "sb-d2-walkthrough-01",
    "q": "An API receives a high volume of sensor data. The data is written to a queue before being processed to produce trend analysis and forecasting reports. With the current architecture, some data records are being received and processed more than once. How can a solutions architect modify the architecture to ensure that duplicate records are not processed?",
    "options": {
      "A": "Configure the API to send the records to Amazon Kinesis Data Streams.",
      "B": "Configure the API to send the records to Amazon Kinesis Data Firehose.",
      "C": "Configure the API to send the records to Amazon Simple Notification Service (Amazon SNS).",
      "D": "Configure the API to send the records to an Amazon Simple Queue Service (Amazon SQS) FIFO queue."
    },
    "answer": [
      "D"
    ],
    "explanation": "• Amazon SQS FIFO (First-In-First-Out) queues guarantee strictly preserved message order and exactly-once processing with deduplication.\n• Messages are delivered once and remain available until processed and deleted by the consumer, ensuring duplicates are never introduced.\n• Amazon Kinesis Data Streams (Option A) can deliver duplicate records due to producer and consumer retries.\n• Amazon Kinesis Data Firehose (Option B) is a streaming delivery service that can also introduce duplicate records during retries.\n• Amazon SNS (Option C) is a pub/sub messaging service, not a queue; it does not buffer records for sequential processing.",
    "module": "Application Integration",
    "multi": false,
    "why": [
      "Amazon SQS FIFO queues provide built-in deduplication (via MessageDeduplicationId or content-based deduplication) and guarantee exactly-once processing, completely preventing duplicate sensor record processing."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Amazon Kinesis Data Streams can result in duplicate records delivered to downstream consumers due to producer/consumer retries and network hiccups."
      },
      {
        "l": [
          "B"
        ],
        "t": "Amazon Kinesis Data Firehose guarantees at-least-once delivery, which can introduce duplicate records during ingestion and transformation."
      },
      {
        "l": [
          "C"
        ],
        "t": "Amazon SNS is a push-based pub/sub notification service, not a queuing or buffering system capable of holding sensor records for controlled batch worker processing."
      }
    ],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "sb-d2-walkthrough-02",
    "q": "A gaming company is experiencing exponential growth. On multiple occasions, customers have been unable to access resources. To keep up with increased demand, management is considering deploying a cloud-based solution. The company is looking for a solution that can match on-premises resilience of multiple data centers and is robust enough to withstand the increased growth activity. What configuration should a solutions architect implement to deliver the desired results?",
    "options": {
      "A": "A VPC configured with an Application Load Balancer targeting an EC2 Auto Scaling group consisting of Amazon EC2 instances in one Availability Zone.",
      "B": "Multiple Amazon EC2 instances configured within peered VPCs across two Availability Zones.",
      "C": "A VPC configured with a Network Load Balancer targeting an EC2 Auto Scaling group consisting of Amazon EC2 instances spanning two Availability Zones.",
      "D": "A VPC configured with an Application Load Balancer targeting an EC2 Auto Scaling group consisting of Amazon EC2 instances spanning two AWS Regions."
    },
    "answer": [
      "C"
    ],
    "explanation": "• A Network Load Balancer (NLB) handles millions of requests per second with ultra-low latency at Layer 4 (TCP/UDP), ideal for extreme, spikey gaming traffic.\n• Targeting an EC2 Auto Scaling group spanning multiple Availability Zones ensures both high availability (resilience of multiple data centers) and elastic scalability to handle exponential user growth.\n• Single AZ deployment (Option A) lacks fault tolerance; a single data center outage takes down the entire gaming platform.\n• Peered VPCs without a load balancer and Auto Scaling (Option B) does not provide automated traffic distribution or automatic scaling.\n• An ALB cannot target EC2 instances across multiple AWS Regions (Option D); ALBs operate strictly within a single Region.",
    "module": "Compute",
    "multi": false,
    "why": [
      "A Network Load Balancer with an Auto Scaling group distributed across multiple Availability Zones provides ultra-high performance (millions of requests/sec) and fault tolerance equivalent to multiple physical data centers."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Deploying in a single Availability Zone creates a single point of failure and does not provide multi-data center resilience."
      },
      {
        "l": [
          "B"
        ],
        "t": "VPC Peering simply enables network routing between VPCs; it does not distribute incoming traffic or provide automated elasticity/high availability."
      },
      {
        "l": [
          "D"
        ],
        "t": "Application Load Balancer targets must reside within the same AWS Region where the ALB is deployed."
      }
    ],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "sb-d2-practice-01",
    "q": "A company runs a SQL Server database on-premises and wants to migrate to AWS. Due to compliance, the company requires operating system permission on the database server. The database architecture must be highly available. Which configuration meets these requirements?",
    "options": {
      "A": "Amazon Aurora Serverless.",
      "B": "A database installed on a single Amazon EC2 instance in an Availability Zone.",
      "C": "Amazon RDS Custom in a Multi-AZ configuration.",
      "D": "Amazon RDS with read replicas."
    },
    "answer": [
      "C"
    ],
    "explanation": "• Amazon RDS Custom is designed for applications that require privileged access and customization of the underlying operating system and database environment (such as Microsoft SQL Server and Oracle).\n• Configuring RDS Custom in a Multi-AZ deployment provides automatic replication and failover across Availability Zones, fulfilling high availability requirements.\n• Amazon Aurora Serverless (Option A) does not provide OS-level access and does not support SQL Server.\n• A single EC2 instance (Option B) is a single point of failure and does not provide high availability.\n• Standard Amazon RDS (Option D) is a fully managed service that strictly prohibits access to the underlying OS.",
    "module": "Database",
    "multi": false,
    "why": [
      "Amazon RDS Custom gives administrators root/admin privileges to the underlying OS and database software while maintaining managed Multi-AZ automated failover and backups."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Aurora Serverless does not support SQL Server engines and does not grant OS access."
      },
      {
        "l": [
          "B"
        ],
        "t": "A single EC2 instance has no redundancy and fails the high availability requirement."
      },
      {
        "l": [
          "D"
        ],
        "t": "Standard RDS abstracts the underlying operating system and does not permit OS login or customization."
      }
    ],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "sb-d2-practice-03",
    "q": "A company is deploying a production portal application on AWS. The database tier runs on a MySQL database. The company requires a highly available database solution that maximizes ease of management. How can the company meet these requirements?",
    "options": {
      "A": "Use Amazon DynamoDB with a DynamoDB Accelerator (DAX) cluster. Create periodic on-demand backups.",
      "B": "Deploy the database on multiple Amazon EC2 instances that are backed by Amazon Elastic Block Store (Amazon EBS) across multiple Availability Zones. Schedule periodic EBS snapshots.",
      "C": "Use Amazon RDS with a Single-AZ deployment. Schedule periodic database snapshots.",
      "D": "Use Amazon RDS with a Multi-AZ deployment. Schedule periodic database snapshots."
    },
    "answer": [
      "D"
    ],
    "explanation": "• Amazon RDS with a Multi-AZ deployment provides synchronous replication to a standby instance in a second AZ with automated failover (typically 60-120 seconds) without administrative intervention.\n• Being a managed service, RDS handles OS and engine patching, backups, and storage management, maximizing ease of management.\n• DynamoDB (Option A) is a NoSQL database requiring schema redesign and application rewrites for existing MySQL databases.\n• Self-hosting MySQL on EC2 (Option B) requires significant operational overhead for OS patching, custom replication scripts, and manual failover configuration.\n• Single-AZ RDS (Option C) lacks redundancy and is unsuitable for high-availability production workloads.",
    "module": "Database",
    "multi": false,
    "why": [
      "Amazon RDS Multi-AZ offers turnkey automated failover and managed backups for relational engines like MySQL, delivering maximum operational simplicity."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "DynamoDB is a NoSQL key-value store; migrating from relational MySQL introduces heavy redesign overhead."
      },
      {
        "l": [
          "B"
        ],
        "t": "Deploying databases directly on EC2 requires significant manual maintenance, patching, and custom failover automation."
      },
      {
        "l": [
          "C"
        ],
        "t": "Single-AZ deployment provides zero redundancy against data center failure."
      }
    ],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "sb-d2-practice-04",
    "q": "A solutions architect is designing an application that uses AWS Lambda. The application needs to handle unpredictable and increased spikes in traffic. The application processes user-uploaded images and resizes them. The upload rate can increase by a factor of 1,000 or more during peak usage. The periods of increased demand are often unpredictable and random. The solutions architect must design a solution that will scale with increased demand. Which solution will meet these requirements to provide the MOST scalability?",
    "options": {
      "A": "Configure the Lambda function with a high reserved concurrency setting. Use provisioned concurrency to keep instances warm. Trigger the Lambda function from an Amazon API Gateway endpoint.",
      "B": "Use Amazon S3 to store uploaded images and configure S3 Event Notifications to publish events to an Amazon SQS queue. Configure the SQS queue as an event source for the Lambda function.",
      "C": "Deploy the Lambda function in multiple AWS Regions. Use Amazon Route 53 with latency-based routing to distribute requests across Regions. Implement custom code to manage concurrency limits in each Region.",
      "D": "Use Amazon S3 to store uploaded images. Configure S3 Event Notifications to directly trigger the Lambda function for processing. Implement exponential backoff in the Lambda function."
    },
    "answer": [
      "B"
    ],
    "explanation": "• Decoupling image uploads from Lambda processing using Amazon SQS as an asynchronous buffer prevents concurrency exhaustion and throttling during sudden 1,000x traffic spikes.\n• SQS absorbs massive bursts of incoming messages durably, and Lambda scales automatically based on queue length (polling up to thousands of concurrent workers) at a manageable rate.\n• Direct API Gateway triggering with provisioned concurrency (Option A) cannot buffer massive sudden spikes and results in HTTP 429 throttling or dropped requests.\n• Multi-Region deployment (Option C) adds substantial architectural complexity without solving the fundamental need for queue buffering during spikes.\n• Direct S3 event notifications to Lambda (Option D) can overwhelm regional Lambda concurrency limits and drop events or trigger throttles.",
    "module": "Application Integration",
    "multi": false,
    "why": [
      "Amazon SQS acts as a durable shock absorber during sudden traffic spikes, queuing tasks safely while Lambda automatically scales execution based on queue depth."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Provisioned concurrency does not buffer incoming requests; unbuffered API Gateway calls will throttle or drop requests during 1,000x spikes."
      },
      {
        "l": [
          "C"
        ],
        "t": "Multi-Region routing introduces high complexity and does not provide request buffering."
      },
      {
        "l": [
          "D"
        ],
        "t": "Direct S3-to-Lambda invocation risks exceeding regional concurrency limits and dropping image processing events."
      }
    ],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "sb-d2-practice-05",
    "q": "A solutions architect wants to improve application reliability. The solutions architect wants to receive email alerts when disk space utilization on Amazon EC2 instances exceeds 85%. Which solution will meet this requirement with the LEAST operational overhead?",
    "options": {
      "A": "Install an Amazon CloudWatch agent on the EC2 instances to collect disk space utilization metrics. Create a CloudWatch alarm that triggers when the custom disk space utilization metric exceeds 85%. Create an Amazon SNS topic that sends email notifications. Subscribe the recipient to the SNS topic.",
      "B": "Create an Amazon CloudWatch alarm that triggers when the default EC2 disk space utilization CloudWatch metric exceeds 85%. Subscribe the recipient to the Amazon SNS topic that sends email notifications.",
      "C": "Create an Amazon CloudWatch alarm that triggers when the default EC2 disk space utilization CloudWatch metric exceeds 85%. Subscribe to the alarm by using an Amazon SQS topic that sends email notifications.",
      "D": "Create an IAM role that allows EC2 instances to write to an Amazon SQS queue. Attach the IAM role to the EC2 instances as instance profiles. Configure the EC2 instances to send disk space utilization metrics to the SQS queue. Create an AWS Lambda function that first processes the SQS queue. Then, the function sends email notifications by using Amazon SES when the disk utilization metric exceeds 85%."
    },
    "answer": [
      "A"
    ],
    "explanation": "• Disk space utilization (along with memory utilization) is an internal OS-level metric and is NOT collected by Amazon CloudWatch by default.\n• The unified Amazon CloudWatch agent must be installed on the EC2 instances to publish disk metrics to CloudWatch.\n• Once published, standard CloudWatch alarms evaluate the metric and trigger an Amazon SNS topic configured with email subscriptions, requiring no custom alerting code.\n• Options B and C are incorrect because disk space is not a default EC2 metric, and SQS cannot directly send emails.\n• Option D introduces excessive operational overhead by creating custom scripts, SQS queues, Lambda functions, and SES configurations.",
    "module": "Monitoring",
    "multi": false,
    "why": [
      "Disk utilization is an OS metric requiring the CloudWatch agent. Combining the agent with a CloudWatch alarm and an Amazon SNS email topic provides turnkey monitoring with minimal operational maintenance."
    ],
    "others": [
      {
        "l": [
          "B"
        ],
        "t": "Disk space utilization is an OS-level metric not captured by default CloudWatch metrics."
      },
      {
        "l": [
          "C"
        ],
        "t": "Disk space is not a default metric, and SQS is a queue, not a notification service that sends emails."
      },
      {
        "l": [
          "D"
        ],
        "t": "Building custom scripts, SQS queues, Lambda handlers, and SES templates requires immense operational overhead compared to the native CloudWatch agent + SNS solution."
      }
    ],
    "domain": "Domain 2: Design Resilient Architectures"
  },
  {
    "id": "sb-d3-walkthrough-01",
    "q": "A company has developed an application that processes photos and videos. When users upload photos and videos, a job processes the files. The job can take up to one hour to process long videos. The company is using Amazon EC2 On-Demand Instances to run web servers and processing jobs. The web layer and the processing layer have instances that run in an Auto Scaling group behind an Application Load Balancer. During peak hours, users report that the application is slow and that the application does not process some requests at all. During evening hours, the systems are idle. What should a solutions architect do so that the application will process all jobs in the most cost-effective manner?",
    "options": {
      "A": "Use a larger instance size in the Auto Scaling groups of the web layer and the processing layer.",
      "B": "Use Spot Instances for the Auto Scaling group of the web layer and the processing layer.",
      "C": "Use an Amazon SQS standard queue between the web layer and the processing layer. Use a custom queue metric to scale the Auto Scaling group in the processing layer.",
      "D": "Use AWS Lambda functions instead of EC2 Instances and Auto Scaling groups. Increase the service quota so that sufficient concurrent functions can run at the same time."
    },
    "answer": [
      "C"
    ],
    "explanation": "• Decoupling the web and processing layers using an Amazon SQS standard queue buffers incoming requests, preventing timeouts, dropped requests, and application slowdowns during traffic spikes.\n• Scaling the processing layer Auto Scaling group based on a custom backlog metric (such as BacklogPerInstance = ApproximateNumberOfMessagesVisible / running instances) ensures instances scale out promptly under load and scale down to zero/minimum when queues are idle at night, maximizing cost-effectiveness.\n• Option A fails because simply increasing instance sizes does not decouple the layers and still risks dropping requests during spikes while inflating costs during idle evening periods.\n• Option B does not decouple the layers, and Spot instances alone do not prevent request drops.\n• Option D is invalid because AWS Lambda has a maximum execution timeout of 15 minutes, whereas video processing jobs can take up to one hour.",
    "module": "Compute",
    "multi": false,
    "why": [
      "Decoupling via an SQS queue buffers spiky traffic so no requests are lost, and scaling the processing ASG via a custom queue backlog metric optimizes EC2 instance costs for peak and idle periods."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Using larger instance types increases idle costs at night and does not decouple the components to handle spikes gracefully."
      },
      {
        "l": [
          "B"
        ],
        "t": "Spot instances reduce per-hour pricing but do not resolve request buffering or decoupling, and are prone to interruptions during long 1-hour jobs."
      },
      {
        "l": [
          "D"
        ],
        "t": "AWS Lambda functions have a hard 15-minute execution limit and cannot execute jobs that take up to 1 hour."
      }
    ],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "sb-d3-walkthrough-02",
    "q": "A company is building a distributed application which will send sensor IoT data, including weather conditions and wind speed, from wind turbines to AWS for further processing. As the nature of the data is spiky, the application needs to be able to scale. It is important to store the streaming data in a key-value database and then send it to a centralized data lake, where it can be transformed, analyzed, and combined with diverse organizational datasets to derive meaningful insights and make predictions. Which combination of solutions would accomplish the business need with minimal operational overhead? (Select TWO.)",
    "options": {
      "A": "Configure Amazon Kinesis to deliver streaming data to an Amazon S3 data lake.",
      "B": "Use Amazon DocumentDB (with MongoDB compatibility) to store IoT sensor data.",
      "C": "Write AWS Lambda functions to deliver streaming data to Amazon S3.",
      "D": "Use Amazon DynamoDB to store the IoT sensor data and turn on Amazon Kinesis Data Streams.",
      "E": "Use Amazon Kinesis to deliver streaming data to Amazon Redshift and turn on Redshift Spectrum."
    },
    "answer": [
      "A",
      "D"
    ],
    "explanation": "• Amazon DynamoDB is a fully managed NoSQL key-value database that automatically scales throughput to handle spiky IoT telemetry with consistent single-digit millisecond latency.\n• Enabling Amazon Kinesis Data Streams for DynamoDB captures item-level changes automatically in a real-time streaming fashion with zero server management.\n• Amazon Kinesis can then be configured to deliver this streaming data directly to an Amazon S3-based data lake with minimal operational overhead.\n• Option B is incorrect because Amazon DocumentDB is a document database, not a key-value database, and requires managing cluster instances.\n• Option C introduces extra operational and maintenance overhead by requiring custom code and handling Lambda execution limits.\n• Option E is incorrect because the requirement is to store the centralized data lake in Amazon S3, not directly in Amazon Redshift, and Redshift Spectrum queries existing data in S3 rather than acting as a streaming ingestion target.",
    "module": "Database",
    "multi": true,
    "why": [
      "Amazon DynamoDB provides native serverless key-value storage that scales for spiky traffic, and turning on Kinesis Data Streams allows direct delivery to an Amazon S3 data lake with minimal operational overhead."
    ],
    "others": [
      {
        "l": [
          "B"
        ],
        "t": "Amazon DocumentDB is a document-oriented database, not a key-value store, and requires cluster management."
      },
      {
        "l": [
          "C"
        ],
        "t": "Custom AWS Lambda functions introduce code maintenance, retry logic handling, and operational overhead compared to native Kinesis delivery."
      },
      {
        "l": [
          "E"
        ],
        "t": "Redshift Spectrum queries external data residing in S3; it is not a streaming ingestion pipeline."
      }
    ],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "sb-d3-walkthrough-03",
    "q": "A global organization has over 50 AWS accounts, with four VPCs in each account across different regions. Communication among all VPCs is required, and all individual VPCs must access a shared services VPC that provides central services to all accounts. How can the member accounts access the shared services VPC with the LEAST operational overhead?",
    "options": {
      "A": "Create an Application Load Balancer with a target of the private IP address of the shared services VPC. Add a Certification Authority Authorization (CAA) record for the Application Load Balancer to Amazon Route 53. Point all requests for shared services in the VPCs routing tables to that CAA record.",
      "B": "Create a VPC peering connection between each of the VPCs and the shared services VPC.",
      "C": "Create a Network Load Balancer across Availability Zones in the shared services VPC. Create service consumer roles in AWS IAM, and set endpoint connection acceptance to automatically accept. Create consumer endpoints in each division VPC and point to the Network Load Balancer.",
      "D": "Create an AWS Site-to-Site VPN connection between each of the VPCs and the shared services VPC."
    },
    "answer": [
      "C"
    ],
    "explanation": "• AWS PrivateLink (VPC Endpoint Service powered by a Network Load Balancer) provides private, secure, uni-directional connectivity from consumer VPCs to services in the shared services provider VPC.\n• PrivateLink avoids complex CIDR overlapping issues and routing table management across 200+ VPCs (50+ accounts × 4 VPCs).\n• Option B (VPC Peering) is limited to a maximum of 125 active peering connections per VPC, making it impossible to peer 200+ VPCs directly to a single shared services VPC without complex hub-and-spoke transit networks.\n• Option A is invalid because CAA DNS records define authorized Certificate Authorities (CAs) for TLS certificates, not network routing targets.\n• Option D (Site-to-Site VPN) introduces massive operational overhead in managing hundreds of IPSec tunnels, customer gateways, encryption overhead, and bandwidth constraints.",
    "module": "Networking",
    "multi": false,
    "why": [
      "AWS PrivateLink using a Network Load Balancer and Interface Endpoints enables hundreds of consumer VPCs to securely consume shared services without IP conflicts, routing table sprawl, or hitting the 125 VPC peering connection limit."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "CAA DNS records control SSL/TLS certificate issuance authorities; they have no function in network packet routing."
      },
      {
        "l": [
          "B"
        ],
        "t": "A VPC can have a hard limit of only 125 VPC peering connections, which cannot scale to connect over 200 VPCs."
      },
      {
        "l": [
          "D"
        ],
        "t": "Setting up and maintaining 200+ Site-to-Site VPN tunnels introduces severe operational overhead and bandwidth limitations."
      }
    ],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "sb-d3-practice-01",
    "q": "A company is deploying an environment for a new data processing application. The application will be frequently accessed by 20 different departments across the globe seeking to run analytics. The company plans to charge each department for the cost of that department's access. Which solution will meet these requirements with the LEAST effort?",
    "options": {
      "A": "Amazon RDS for PostgreSQL, with read replicas for each department. Each department will query the read replica tagged for their department in the billing console.",
      "B": "Amazon Redshift, with clusters set up for each department. Each department will query the cluster tagged for their department in the billing console.",
      "C": "Amazon Athena with workgroups set up for each department. Each department will query through the workgroup tagged for their department in the billing console.",
      "D": "Amazon Aurora with global databases. Each department will query a database in a different Region, and the Region is tagged in the billing console."
    },
    "answer": [
      "C"
    ],
    "explanation": "• Amazon Athena enables serverless SQL querying directly on Amazon S3 data without provisioning or managing database infrastructure.\n• Athena Workgroups are purpose-built for cost allocation and query control, allowing administrators to enforce query limits, separate query execution histories, and tag each workgroup to track and allocate costs per department in the AWS Billing console with minimal administrative effort.\n• Option A is incorrect because RDS for PostgreSQL is an OLTP transactional database not suited for large-scale analytics, and it supports a maximum of 5 read replicas per DB instance (cannot support 20 departments).\n• Option B is incorrect because provisioning 20 separate Amazon Redshift clusters introduces massive infrastructure costs and administrative maintenance overhead.\n• Option D is incorrect because Aurora is an OLTP relational database with limited regional availability and per-instance-hour replica charges that quickly become expensive.",
    "module": "Analytics",
    "multi": false,
    "why": [
      "Amazon Athena provides serverless interactive analytics on S3, and Athena Workgroups are natively designed to isolate queries and allocate costs per department via cost allocation tags with minimal effort."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "RDS for PostgreSQL is an OLTP database limited to 5 read replicas, making it impossible to scale to 20 departments."
      },
      {
        "l": [
          "B"
        ],
        "t": "Managing and paying for 20 independent Amazon Redshift clusters requires substantial operational overhead and cost."
      },
      {
        "l": [
          "D"
        ],
        "t": "Aurora is an OLTP database charging per instance hour across regions, which does not scale well for departmental analytics cost allocation."
      }
    ],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "sb-d3-practice-02",
    "q": "A retail company is developing a new image processing application to analyze product images for defects. The application consists of a container that processes images that are uploaded to an Amazon S3 bucket. The application will be orchestrated by using Amazon ECS. Application usage fluctuates throughout the day. Which solution will deploy the application with the LEAST operational overhead?",
    "options": {
      "A": "Use the AWS Fargate launch type. Configure auto scaling for Fargate tasks based on historical Amazon CloudWatch metric utilization data. Configure Amazon S3 Event Notifications to invoke an AWS Lambda function. Configure the Lambda function to start an ECS on Fargate task on the cluster that references the S3 object URI.",
      "B": "Use the AWS Fargate launch type. Configure auto scaling for Fargate tasks based on historical Amazon CloudWatch metric utilization data. Use Amazon EventBridge to schedule an AWS Lambda function that scans the S3 bucket for uploaded objects. Configure the Lambda function to start a container on an EC2 instance in the cluster that references the S3 object URI.",
      "C": "Use the Amazon EC2 launch type. Configure auto scaling for the EC2 instances based on historical Amazon CloudWatch metric utilization data. Use Amazon EventBridge to schedule an AWS Lambda function that scans the S3 bucket for uploaded objects. Configure the Lambda function to start a container on an EC2 instance in the cluster that references the S3 object URI.",
      "D": "Use the Amazon EC2 launch type. Configure auto scaling for the EC2 instances based on historical Amazon CloudWatch metric utilization data. Configure Amazon S3 Event Notifications to invoke an AWS Lambda function. Configure the Lambda function to start a container on an EC2 instance in the cluster that references the S3 object URI."
    },
    "answer": [
      "A"
    ],
    "explanation": "• AWS Fargate is a serverless compute engine for Amazon ECS that removes the need to provision, configure, patch, or scale underlying EC2 instances, minimizing operational overhead.\n• Configuring Amazon S3 Event Notifications to trigger an AWS Lambda function that launches an ECS Fargate task on demand creates a true event-driven architecture that scales automatically with fluctuating workloads and incurs zero idle costs.\n• Options B and C rely on scheduled polling of S3 via EventBridge and Lambda, which introduces custom polling code, delay, and wasteful function invocations when no images are uploaded.\n• Options C and D rely on the EC2 launch type, which requires patching operating systems, managing AMIs, monitoring host instances, and cluster capacity planning.",
    "module": "Compute",
    "multi": false,
    "why": [
      "AWS Fargate provides serverless container execution without instance management, and S3 Event Notifications trigger Lambda to launch tasks on demand with zero polling overhead."
    ],
    "others": [
      {
        "l": [
          "B"
        ],
        "t": "Scanning S3 on a scheduled basis requires custom polling logic and incurs unnecessary execution costs during idle periods."
      },
      {
        "l": [
          "C"
        ],
        "t": "The EC2 launch type requires OS patching and instance maintenance, combined with inefficient scheduled S3 polling."
      },
      {
        "l": [
          "D"
        ],
        "t": "Using the EC2 launch type forces the operations team to maintain, patch, and manage underlying virtual servers."
      }
    ],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "sb-d3-practice-03",
    "q": "A solutions architect must redesign a company's database management and configuration solution. The solutions architect made changes to the parameter groups for the Amazon RDS databases. When testing the application, the solutions architect notices that a logging setting has not updated despite other settings updating. How should the solutions architect remediate this issue?",
    "options": {
      "A": "Disassociate the parameter group and recreate the parameter group with the current settings.",
      "B": "Set the logging settings as a dynamic parameter in the parameter group.",
      "C": "Adjust the IAM role to apply the required permissions and save the changes.",
      "D": "Reboot the database instances to apply the parameter changes."
    },
    "answer": [
      "D"
    ],
    "explanation": "• Amazon RDS DB parameter groups classify database parameters as either dynamic or static.\n• Dynamic parameters are applied immediately upon saving the parameter group without requiring a restart.\n• Static parameters (which typically include logging formats, shared libraries, and core engine memory buffers) require an explicit database reboot to take effect on the running DB instance.\n• Option A is unnecessary and does not apply static parameters to running instances.\n• Option B is incorrect because engine parameters are predefined by the database engine as either dynamic or static; administrators cannot arbitrarily change a static parameter into a dynamic parameter.\n• Option C is incorrect because IAM permissions govern AWS API actions, not the internal operating mechanisms of RDS parameter group modifications.",
    "module": "Database",
    "multi": false,
    "why": [
      "Static RDS parameters (such as logging settings) require a manual or maintenance reboot of the database instance to be applied to running databases."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Disassociating and recreating parameter groups will not force static parameters to apply without rebooting."
      },
      {
        "l": [
          "B"
        ],
        "t": "Database engine parameters are predefined as static or dynamic; their fundamental nature cannot be toggled in RDS."
      },
      {
        "l": [
          "C"
        ],
        "t": "IAM permissions govern access to the RDS API, not whether applied database engine parameters take effect."
      }
    ],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "sb-d3-practice-04",
    "q": "A solutions architect needs to perform deep packet inspection of network traffic to and from multiple Amazon VPCs. The traffic to inspect includes traffic between the VPCs and traffic to and from the internet. The solutions architect must ensure that workloads in the VPCs are able to connect to an Amazon S3 bucket for centralized logging purposes. Traffic cannot be sent over the internet. Which solution will meet these requirements?",
    "options": {
      "A": "Use AWS WAF to perform deep packet inspection of the network traffic. Use AWS PrivateLink to connect the VPCs to the S3 bucket.",
      "B": "Use AWS Network Firewall to perform deep packet inspection of the network traffic. Use VPC peering to connect the VPCs to the S3 bucket.",
      "C": "Use AWS WAF to perform deep packet inspection of the network traffic. Use VPC peering to connect the VPCs to the S3 bucket.",
      "D": "Use AWS Network Firewall to perform deep packet inspection of the network traffic. Use AWS PrivateLink to connect the VPCs to the S3 bucket."
    },
    "answer": [
      "D"
    ],
    "explanation": "• AWS Network Firewall is a managed network security service that provides Deep Packet Inspection (DPI), stateful protocol inspection, domain name filtering, and Intrusion Detection and Prevention (IDS/IPS) for east-west (VPC-to-VPC) and north-south (internet ingress/egress) traffic.\n• AWS PrivateLink for Amazon S3 (Interface VPC Endpoints) provides secure, private network connectivity between VPC workloads and Amazon S3 buckets using private IP addresses from the VPC subnet, ensuring no logging traffic traverses the public internet.\n• Options A and C are incorrect because AWS WAF is a Layer 7 web application firewall for HTTP/HTTPS filtering, not a deep packet inspection tool for general network traffic.\n• Options B and C are incorrect because VPC peering only inter-connects two Amazon VPCs; it cannot connect a VPC to an external AWS regional service such as Amazon S3.",
    "module": "Security",
    "multi": false,
    "why": [
      "AWS Network Firewall delivers Layer 3-7 deep packet inspection for VPC and internet traffic, while AWS PrivateLink (Interface Endpoints) provides private connectivity to S3 without internet exposure."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "AWS WAF filters Layer 7 HTTP/HTTPS web requests and does not perform deep packet inspection on network traffic."
      },
      {
        "l": [
          "B"
        ],
        "t": "VPC peering connects VPCs together and cannot connect a VPC directly to Amazon S3."
      },
      {
        "l": [
          "C"
        ],
        "t": "AWS WAF is not a network inspection firewall, and VPC peering cannot peer with Amazon S3."
      }
    ],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "sb-d3-practice-05",
    "q": "A company migrated a large amount of data to Amazon S3. A solutions architect needs to make this data accessible to an on-premises, data-intensive application that uses file protocol access. The solution must support local caching. Which solution will meet these requirements?",
    "options": {
      "A": "Launch an Amazon EC2 instance that runs Microsoft Windows Server. Create an Amazon FSx for Windows File Server file system for S3 access. Mount the file system on the on-premises server that runs the application.",
      "B": "Set up Amazon S3 File Gateway on an on-premises virtual machine. Create and configure a file share for the S3 bucket on the S3 File Gateway. Mount the file share on the application server over NFS.",
      "C": "Install AWS Outposts. Create a local S3 bucket. Use AWS DataSync to synchronize the original S3 bucket with an Amazon S3 on Outposts bucket. Mount the S3 on Outposts bucket on the application server by using a VPC endpoint.",
      "D": "Configure an AWS AppSync API endpoint. Choose an S3 bucket as the data source. Mount the file system on the on-premises server by using the AWS AppSync endpoint."
    },
    "answer": [
      "B"
    ],
    "explanation": "• Amazon S3 File Gateway (part of AWS Storage Gateway) is specifically designed to connect on-premises applications to Amazon S3 using industry-standard file protocols (NFS and SMB).\n• It maintains a local on-premises cache on the VM appliance to provide low-latency read and write access for data-intensive local applications.\n• Option A is incorrect because Amazon FSx for Windows File Server provides native Windows SMB shares backed by SSD/HDD storage, but does not natively present an Amazon S3 bucket as a file system or provide on-premises caching.\n• Option C is incorrect because S3 on Outposts provides object storage on-premises, not file protocol (NFS/SMB) file share mounting, and AWS Outposts involves significant hardware deployment overhead.\n• Option D is incorrect because AWS AppSync provides managed GraphQL APIs and cannot mount as an on-premises file system.",
    "module": "Storage",
    "multi": false,
    "why": [
      "Amazon S3 File Gateway deployed on an on-premises VM bridges file protocols (NFS/SMB) directly to Amazon S3 objects while providing a local cache for low-latency performance."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Amazon FSx for Windows File Server does not serve as an on-premises caching bridge for Amazon S3."
      },
      {
        "l": [
          "C"
        ],
        "t": "S3 on Outposts provides object storage rather than NFS/SMB file protocol mounts for application servers."
      },
      {
        "l": [
          "D"
        ],
        "t": "AWS AppSync is a serverless GraphQL API service, not a storage or file system gateway."
      }
    ],
    "domain": "Domain 3: Design High-Performing Architectures"
  },
  {
    "id": "sb-d4-walkthrough-01",
    "q": "A data processing facility wants to move a group of Microsoft Windows servers to the AWS Cloud. These servers require access to a shared file system that can integrate with the facility's existing Active Directory infrastructure for file and folder permissions. The solution needs to provide seamless support for shared files with AWS and on-premises servers and make the environment highly available. The chosen solution should provide added security by supporting encryption at rest and in transit. Which storage solution would meet these requirements?",
    "options": {
      "A": "An AWS S3 File Gateway joined to the existing Active Directory domain.",
      "B": "An Amazon FSx for Windows File Server file system joined to the existing Active Directory domain.",
      "C": "An Amazon Elastic File System (Amazon EFS) file system joined to an AWS Managed Microsoft AD domain.",
      "D": "An Amazon S3 bucket mounted on Amazon EC2 instances in multiple Availability Zones running Windows servers."
    },
    "answer": [
      "B"
    ],
    "explanation": "• Amazon FSx for Windows File Server provides a fully managed native Microsoft Windows file system built on Windows Server, offering native support for the SMB protocol, Windows NTFS file and folder permissions (ACLs), and integration with existing Active Directory domains.\n• It supports Multi-AZ deployments for high availability and provides built-in encryption at rest (AWS KMS) and in transit (SMB encryption 3.0+).\n• Option A is incorrect because Amazon S3 File Gateway authenticates with Active Directory on the on-premises side, but file and folder ACL permissions are not retained once objects are written to Amazon S3.\n• Option C is incorrect because Amazon EFS is designed specifically for Linux-based workloads using NFSv4 and does not support Windows Server instances.\n• Option D is incorrect because Amazon S3 is object storage and does not support native file system mounting or Windows NTFS file and folder permissions across EC2 instances.",
    "module": "Storage",
    "multi": false,
    "why": [
      "Amazon FSx for Windows File Server provides native SMB shared file storage, integrates directly with existing Active Directory for NTFS permissions, supports Multi-AZ high availability, and enforces encryption at rest and in transit."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "S3 File Gateway does not preserve Windows NTFS file/folder permissions once objects are stored in Amazon S3."
      },
      {
        "l": [
          "C"
        ],
        "t": "Amazon EFS is exclusively designed for Linux workloads using NFSv4 and is not supported on Windows Server."
      },
      {
        "l": [
          "D"
        ],
        "t": "Amazon S3 is an object store that does not natively mount as a shared file system for Windows EC2 instances."
      }
    ],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "sb-d4-walkthrough-02",
    "q": "A startup company is looking for a solution to cost-effectively run and access microservices without the operational overhead of managing infrastructure. The solution needs to be able to scale quickly and accommodate rapid changes in the volume of requests, and protect against common DDoS attacks. What is the most cost-effective solution that meets requirements?",
    "options": {
      "A": "Run the microservices in containers using AWS Elastic Beanstalk.",
      "B": "Run the microservices in AWS Lambda behind an Amazon API Gateway.",
      "C": "Run the microservices on Amazon EC2 instances in an Auto Scaling group.",
      "D": "Run the microservices in containers using Amazon Elastic Container Service (Amazon ECS) backed by EC2 instances."
    },
    "answer": [
      "B"
    ],
    "explanation": "• AWS Lambda and Amazon API Gateway are fully managed serverless services that require zero server management or OS maintenance, eliminating infrastructure operational overhead.\n• API Gateway and Lambda scale instantaneously from zero to thousands of concurrent requests, adapting smoothly to sudden traffic spikes, and you pay only per invocation and duration without paying for idle compute capacity.\n• API Gateway includes built-in protection against Layer 3/4 SYN floods and counterfeit requests, and allows configurable request throttling per method/client to prevent backend overloads.\n• Options A, C, and D are all based on Amazon EC2 instances, which incur idle compute costs during low-traffic periods and take several minutes to launch and scale cluster capacity during sharp request spikes.",
    "module": "Compute",
    "multi": false,
    "why": [
      "Amazon API Gateway fronting AWS Lambda provides instant serverless scaling with zero idle cost, built-in DDoS mitigation and throttling, and zero infrastructure maintenance overhead."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Elastic Beanstalk provisions EC2 instances that incur idle charges and require minutes to scale out during sudden spikes."
      },
      {
        "l": [
          "C"
        ],
        "t": "EC2 instances in an Auto Scaling group take minutes to boot up and incur ongoing baseline compute costs when idle."
      },
      {
        "l": [
          "D"
        ],
        "t": "ECS backed by EC2 requires cluster capacity management and incurs continuous idle instance costs."
      }
    ],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "sb-d4-walkthrough-03",
    "q": "A company is developing an application that runs on Amazon EC2 instances in a private subnet. The EC2 instances use a NAT gateway to access the internet. A solutions architect must provide a secure option so that developers can log into the instances. Which solution meets these requirements most cost-effectively?",
    "options": {
      "A": "Configure AWS Systems Manager Session Manager for the EC2 instances to enable login.",
      "B": "Configure a bastion host in a public subnet to log in to the EC2 instances in a private subnet.",
      "C": "Use the existing NAT gateway to log into the EC2 instances in a private subnet.",
      "D": "Configure AWS Site-to-Site VPN to log in directly to the EC2 instances."
    },
    "answer": [
      "A"
    ],
    "explanation": "• AWS Systems Manager Session Manager provides secure, auditable, browser-based or CLI-based shell access to EC2 instances without requiring inbound security group ports, public IP addresses, SSH keys, or bastion hosts.\n• Session Manager is available at no additional charge for managing EC2 instances, making it the most secure and most cost-effective option.\n• Option B is incorrect because running a bastion host incurs ongoing EC2 instance runtime and EBS volume costs, in addition to operational overhead for patching and SSH key management.\n• Option C is technically impossible because NAT gateways only support outbound (egress) traffic initiated by private instances; they do not permit inbound (ingress) connections from the internet.\n• Option D is incorrect because AWS Site-to-Site VPN incurs hourly connection fees and data transfer costs, making it far more expensive than Session Manager.",
    "module": "Security",
    "multi": false,
    "why": [
      "AWS Systems Manager Session Manager enables secure shell access to private EC2 instances with zero open inbound ports and at no additional cost."
    ],
    "others": [
      {
        "l": [
          "B"
        ],
        "t": "A bastion host introduces ongoing EC2 running costs, security surface exposure, and administrative overhead."
      },
      {
        "l": [
          "C"
        ],
        "t": "NAT gateways only allow outbound traffic from private instances and cannot accept inbound connections."
      },
      {
        "l": [
          "D"
        ],
        "t": "AWS Site-to-Site VPN incurs hourly connection charges and data transfer fees, which is much more expensive than Session Manager."
      }
    ],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "sb-d4-practice-01",
    "q": "A company uses Amazon EC2 instances in a test environment. The company has optimized the instances for their current workload. The company uses the instances only during business hours. The company uses Compute Savings Plans and Spot Instances. The company must retain control over the compute resources. A solutions architect must recommend a solution to reduce costs associated with the EC2 instances in the test environment. Which solution will meet these requirements?",
    "options": {
      "A": "Switch from EC2 instances to AWS Lambda functions to optimize the runtime environment.",
      "B": "Use AWS Compute Optimizer and change the instance type or size based on the recommendations.",
      "C": "Create a time-based Amazon CloudWatch alarm action to start and stop the instances.",
      "D": "Use Reserved Instances in addition to the Compute Savings Plan and Spot Instances."
    },
    "answer": [
      "C"
    ],
    "explanation": "• Test environments used only during business hours sit idle for ~128 hours per week (nights and weekends). Stopping the instances when not in use stops all EC2 per-second compute billing, slashing costs by over 60-70%.\n• Using automated time-based schedules (such as Amazon CloudWatch alarms, EventBridge rules, or AWS Systems Manager Quick Setup / Instance Scheduler) to start and stop instances preserves the existing EC2 configuration and full OS control while eliminating idle runtime charges.\n• Option A is incorrect because the company requires control over the underlying compute resources, which serverless AWS Lambda does not provide.\n• Option B is incorrect because the scenario states the instances are already optimized for the workload.\n• Option D is incorrect because Reserved Instances require 24/7 billing commitments for 1 or 3 years, which adds unnecessary expense for instances only needed during business hours.",
    "module": "Cost Optimization",
    "multi": false,
    "why": [
      "Automating the start and stop of EC2 instances during non-business hours (evenings and weekends) eliminates idle compute runtime costs while retaining full control over the compute resources."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Lambda does not provide server/OS level control over compute resources required by the company."
      },
      {
        "l": [
          "B"
        ],
        "t": "The instances have already been optimized for their workload, so Compute Optimizer will not yield further savings."
      },
      {
        "l": [
          "D"
        ],
        "t": "Reserved Instances charge continuously 24/7 and are counterproductive for instances used only during business hours."
      }
    ],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "sb-d4-practice-02",
    "q": "A company has a single page application deployed on Amazon S3. The application is making requests to a REST API deployed on an Amazon EC2 instance that returns links to video files stored on S3. A solutions architect wants to reduce data transfer costs. Which solution meets these requirements?",
    "options": {
      "A": "Move the REST API to Amazon Elastic Container Service (Amazon ECS).",
      "B": "Create a copy of the compute environment in another AWS Region.",
      "C": "Replicate Amazon S3 data to buckets in AWS Regions closer to the requester.",
      "D": "Create an Amazon CloudFront distribution with Amazon S3 as the origin."
    },
    "answer": [
      "D"
    ],
    "explanation": "• Amazon CloudFront is a global Content Delivery Network (CDN) that caches content at edge locations close to users worldwide.\n• Data transfer from an AWS origin (such as Amazon S3) to CloudFront edge locations is completely free ($0.00/GB).\n• Furthermore, data transfer out from CloudFront to the internet is significantly cheaper than direct Data Transfer Out from Amazon S3 to the internet, and cached video assets are served directly from edge caches without re-fetching from S3, dramatically reducing data transfer costs.\n• Option A does not reduce data transfer costs; migrating the API container to ECS leaves video data transfers from S3 unchanged.\n• Option B increases data transfer costs due to inter-region replication and multi-region compute fees.\n• Option C increases costs because cross-region S3 replication incurs inter-region data transfer charges and duplicate storage fees without lowering egress pricing.",
    "module": "Cost Optimization",
    "multi": false,
    "why": [
      "Amazon CloudFront caches video content at edge locations; data transfer from S3 to CloudFront is free, and CloudFront egress rates to the internet are significantly lower than direct S3 egress."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Moving the REST API to ECS changes container compute execution but does not lower video data transfer out of S3."
      },
      {
        "l": [
          "B"
        ],
        "t": "Duplicating compute environments in another region incurs additional cross-region data transfer and infrastructure costs."
      },
      {
        "l": [
          "C"
        ],
        "t": "Cross-region S3 bucket replication adds replication data transfer fees and duplicate storage costs."
      }
    ],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "sb-d4-practice-03",
    "q": "A company's application gives users the ability to upload image files to an Amazon S3 bucket. These files are accessed frequently for the first 30 days. After 30 days, these files are rarely accessed. However, the files need to be durably stored and available within milliseconds upon request. A solutions architect needs to configure a lifecycle policy that minimizes the overall cost while meeting the application requirements. Which solution will meet these requirements?",
    "options": {
      "A": "Configure a lifecycle policy to move the files to the S3 Glacier Flexible Retrieval storage class after 30 days.",
      "B": "Configure a lifecycle policy to move the files to the S3 Glacier Deep Archive storage class after 30 days.",
      "C": "Configure a lifecycle policy to move the files to the S3 One Zone-Infrequent Access (S3 One Zone-IA) storage class after 30 days.",
      "D": "Configure a lifecycle policy to move the files to the S3 Standard-Infrequent Access (S3 Standard-IA) storage class after 30 days."
    },
    "answer": [
      "D"
    ],
    "explanation": "• Amazon S3 Standard-Infrequent Access (S3 Standard-IA) is designed for data that is accessed less frequently, but requires rapid, millisecond retrieval when requested.\n• S3 Standard-IA maintains 99.999999999% (11 9's) data durability across multiple Availability Zones at a substantially lower storage price per GB than S3 Standard.\n• Options A and B are incorrect because S3 Glacier Flexible Retrieval (retrieval time from minutes to hours) and S3 Glacier Deep Archive (retrieval time from 12 to 48 hours) do not support immediate millisecond access.\n• Option C is incorrect because S3 One Zone-IA stores data in only a single Availability Zone and will lose data if that Availability Zone is destroyed; it is only suitable for easily recreatable or secondary backup data, failing the durable multi-AZ storage requirement.",
    "module": "Cost Optimization",
    "multi": false,
    "why": [
      "S3 Standard-IA provides millisecond retrieval and 11 9s of multi-AZ durability at lower storage cost for objects accessed rarely after 30 days."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "S3 Glacier Flexible Retrieval requires minutes to hours for data retrieval and cannot provide millisecond access."
      },
      {
        "l": [
          "B"
        ],
        "t": "S3 Glacier Deep Archive retrieval takes 12 to 48 hours, failing the millisecond availability requirement."
      },
      {
        "l": [
          "C"
        ],
        "t": "S3 One Zone-IA stores data in a single AZ and lacks multi-AZ fault tolerance and durability for irreplaceable images."
      }
    ],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "sb-d4-practice-04",
    "q": "A company is using an Amazon S3 bucket to store archived data for audits. The company needs long-term storage for the data. The data is rarely accessed and must be available for retrieval the next business day. After a quarterly review, the company wants to reduce the storage cost for the S3 bucket. A solutions architect must recommend the most cost-effective solution to store the archived data. Which solution will meet these requirements?",
    "options": {
      "A": "Use an S3 Lifecycle configuration rule to move the data to S3 Standard-Infrequent Access (S3 Standard-IA).",
      "B": "Store the data in another S3 bucket in a different AWS Region.",
      "C": "Store the data on an Amazon EC2 instance that uses Amazon Elastic Block Store (Amazon EBS).",
      "D": "Store the data in S3 Glacier Flexible Retrieval."
    },
    "answer": [
      "D"
    ],
    "explanation": "• Amazon S3 Glacier Flexible Retrieval is specifically designed for long-term archive data accessed rarely (a few times per year) with flexible retrieval options (Expedited: 1-5 mins, Standard: 3-5 hours, Bulk: 5-12 hours).\n• A retrieval timeframe of 'the next business day' is comfortably fulfilled by S3 Glacier Flexible Retrieval's free Bulk retrieval tier (5-12 hours) while offering storage costs that are roughly one-sixth the cost of S3 Standard-IA (~$0.0036/GB/month vs ~$0.0125/GB/month).\n• Option A is incorrect because S3 Standard-IA is significantly more expensive per GB than Glacier archive storage.\n• Option B is incorrect because simply moving data to another region does not optimize the storage class and can add inter-region transfer costs.\n• Option C is incorrect because Amazon EBS is high-performance block storage, costing dramatically more per GB (e.g. $0.08/GB/month for gp3) and requiring a running EC2 instance.",
    "module": "Cost Optimization",
    "multi": false,
    "why": [
      "S3 Glacier Flexible Retrieval offers extremely low-cost archive storage and easily satisfies next-business-day retrieval requirements (via Standard or free Bulk retrieval)."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "S3 Standard-IA is designed for millisecond access and costs significantly more per GB than S3 Glacier Flexible Retrieval."
      },
      {
        "l": [
          "B"
        ],
        "t": "Changing regions does not change the storage class to an archival tier and still incurs standard S3 storage rates."
      },
      {
        "l": [
          "C"
        ],
        "t": "Amazon EBS is expensive block storage that requires an attached EC2 instance, multiplying costs."
      }
    ],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  },
  {
    "id": "sb-d4-practice-05",
    "q": "A hospital is migrating from another cloud provider to AWS and wants to modernize as they migrate. The hospital has containerized applications that run on tablets. During spikes caused by increases in patient visits, the communications from the applications to the central database occasionally fail. As a result, the hospital currently has the applications try to write to the central database once. If that write fails, the application writes to a dedicated application PostgreSQL database run by the hospital IT team on-premises. Each of the PostgreSQL databases then sends batch information to the central database. The hospital is asking for recommendations on migrating or refactoring the database write process to lower operational overhead. What should the solutions architect recommend? (Select TWO)",
    "options": {
      "A": "Migrate the local databases to Amazon Aurora Serverless PostgreSQL-Compatible Edition.",
      "B": "Migrate the PostgreSQL databases to an Amazon RDS instance with a read replica that replaces each of the local databases.",
      "C": "Refactor the applications to use Amazon Simple Queue Service (Amazon SQS) and eliminate the local PostgreSQL databases.",
      "D": "Migrate the containerized applications to AWS Fargate.",
      "E": "Refactor the central database to add an Amazon ElastiCache lazy loading cache in front of the database."
    },
    "answer": [
      "A",
      "C"
    ],
    "explanation": "• Refactoring the applications to write messages to an Amazon Simple Queue Service (Amazon SQS) queue (Option C) completely decouples ingestion from database writes. Messages are durable, buffered during traffic spikes, and processed reliably without dropped writes or fragile local fallback databases, eliminating IT administrative overhead.\n• Migrating the database layer to Amazon Aurora Serverless PostgreSQL-Compatible Edition (Option A) automatically scales database compute capacity (ACUs) up during surges and down during quiet hours without manual intervention or managing database servers, dramatically reducing operational overhead.\n• Option B is incorrect because read replicas only process read queries; they cannot accept write operations to absorb database write bursts.\n• Option D is incorrect because changing the compute runtime of the tablet containers does not address the database communication failure or write bottleneck.\n• Option E is incorrect because caching with lazy loading accelerates read queries, not write operations.",
    "module": "Database",
    "multi": true,
    "why": [
      "Amazon SQS decouples writes and absorbs traffic spikes without losing requests, eliminating temporary fallback databases, while Amazon Aurora Serverless auto-scales database capacity seamlessly to minimize operational maintenance."
    ],
    "others": [
      {
        "l": [
          "B"
        ],
        "t": "Read replicas are strictly read-only and cannot process or absorb database write transactions."
      },
      {
        "l": [
          "D"
        ],
        "t": "AWS Fargate addresses container compute hosting but does not resolve database write failures during traffic spikes."
      },
      {
        "l": [
          "E"
        ],
        "t": "Lazy loading caching improves read latency and does not absorb or buffer database write requests."
      }
    ],
    "domain": "Domain 4: Design Cost-Optimized Architectures"
  }
];
