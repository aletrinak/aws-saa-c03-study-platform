import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether, PageBreak
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

def create_complete_master_pdf():
    pdf_path = r"c:\Proyectos\saa-c03\AWS_SAA-C03_Guia_Maestra_Repaso_Final.pdf"
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=30,
        rightMargin=30,
        topMargin=28,
        bottomMargin=28
    )

    styles = getSampleStyleSheet()

    # Tipografías y Estilos
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=17,
        leading=21,
        textColor=colors.HexColor('#0F2C59'),
        spaceAfter=2
    )

    sub_style = ParagraphStyle(
        'DocSub',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=9.5,
        leading=12,
        textColor=colors.HexColor('#4F6F52'),
        spaceAfter=7
    )

    h1_style = ParagraphStyle(
        'SectionH1',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=colors.HexColor('#0F2C59'),
        spaceBefore=6,
        spaceAfter=3,
        keepWithNext=True
    )

    bullet_style = ParagraphStyle(
        'BulletText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.2,
        leading=11,
        textColor=colors.HexColor('#222222'),
        spaceAfter=2
    )

    table_header_style = ParagraphStyle(
        'TableHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8,
        leading=10.5,
        textColor=colors.white
    )

    table_cell_style = ParagraphStyle(
        'TableCell',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.8,
        leading=10,
        textColor=colors.HexColor('#222222')
    )

    table_cell_bold = ParagraphStyle(
        'TableCellBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=7.8,
        leading=10,
        textColor=colors.HexColor('#0F2C59')
    )

    story = []

    def add_bullet(bold_txt, regular_txt):
        text = f"<b><font color='#0F2C59'>• {bold_txt}:</font></b> {regular_txt}"
        story.append(Paragraph(text, bullet_style))

    # Encabezado
    story.append(Paragraph("AWS SAA-C03: Guía Maestra Definitiva Pre-Examen", title_style))
    story.append(Paragraph("Cheat Sheet Completo: Seguridad, Almacenamiento, Bases de Datos, Redes, SQS/SNS y Reglas de Descarte.", sub_style))

    # 1. SUITE DE SEGURIDAD
    story.append(Paragraph("1. Suite de Seguridad AWS: ¿Cuándo usar cada servicio?", h1_style))
    add_bullet("Amazon Macie", "Descubrimiento de datos sensibles (PII - Personally Identifiable Information, tarjetas de crédito, pasaportes) usando Machine Learning dentro de BUCKETS S3. Descarte: Solo analiza S3; no analiza bases de datos ni redes.")
    add_bullet("Amazon GuardDuty", "Detección inteligente de amenazas y comportamiento anómalo (ej: minería de criptomonedas, accesos inusuales) analizando logs sin agentes (VPC Flow Logs, DNS Logs, CloudTrail Events, S3 data events). Descarte: No bloquea por sí solo; genera hallazgos (findings) que disparan EventBridge -> Lambda para remediar.")
    add_bullet("AWS WAF (Web Application Firewall)", "Protección Capa 7 (HTTP/HTTPS) contra SQL Injection, Cross-Site Scripting (XSS), rate limiting por IP, y bloqueos por país. Se asocia a: CloudFront, Application Load Balancer (ALB), API Gateway o AppSync. Descarte: NO protege capas de red 3/4 ni instancias EC2 directas.")
    add_bullet("AWS Shield (Standard vs Advanced)", "Protección contra ataques DDoS. Shield Standard es GRATUITO y automático para todos los clientes (capas 3 y 4 SYN floods). Shield Advanced es de PAGO ($3000/mes) con soporte del equipo SRT 24/7 y protección contra picos de costos por DDoS.")
    add_bullet("AWS Network Firewall", "Inspección de paquetes con estado (Stateful inspection), filtrado de URL/dominio saliente y prevención de intrusiones (IPS/IDS) a nivel de TODA la VPC (capas 3 a 7 de red pura). Se despliega como endpoints de subred.")
    add_bullet("Amazon Inspector", "Escaneo automatizado de VULNERABILIDADES (CVEs) y parches de seguridad en instancias EC2, imágenes de contenedores en ECR y funciones Lambda.")
    add_bullet("AWS Security Hub", "Panel central unificado (single pane of glass) que consolida alertas de GuardDuty, Inspector, Macie, IAM Access Analyzer y evalúa cumplimiento de estándares de seguridad (CIS, PCI-DSS).")
    add_bullet("AWS Secrets Manager vs Parameter Store", "Secrets Manager rota automáticamente contraseñas de bases de datos RDS con Lambda nativo ($). Parameter Store guarda configuraciones y secretos simples pero NO rota automáticamente.")

    # 2. ALMACENAMIENTO
    story.append(Paragraph("2. Almacenamiento: EBS vs EFS vs FSx vs S3", h1_style))
    add_bullet("Amazon EBS", "Disco en bloque para UNA sola instancia EC2 en UNA sola AZ (Single-AZ). NUNCA se puede reducir de tamaño (ModifyVolume solo expande o cambia tipo a gp3).")
    add_bullet("Amazon EFS (NFS/POSIX)", "Carpeta compartida en red para CIENTOS de servidores LINUX concurrentes en MULTIPLE AZs.")
    add_bullet("Amazon FSx for Windows", "Archivos compartidos vía SMB integrados con Microsoft Active Directory nativo de Windows.")
    add_bullet("Amazon FSx for Lustre", "HPC (High Performance Computing), procesamiento masivo de datos ultra rápido y Machine Learning.")
    add_bullet("Amazon S3", "Objetos regional. Para compartir archivos privados sin saturar el servidor -> S3 Presigned URLs. S3 Glacier Deep Archive tarda 9 a 12 horas (NUNCA para acceso inmediato).")

    # 3. BASES DE DATOS
    story.append(Paragraph("3. Bases de Datos: Árbol de Decisión", h1_style))
    add_bullet("DynamoDB (NoSQL)", "Clave-valor, JSON simple, latencia de milisegundos. Para gaming, perfiles, carritos y sesiones. Lecturas pesadas / Hot keys -> DAX. Borrar datos viejos sin costo -> TTL. Picos repentinos -> On-Demand.")
    add_bullet("RDS Multi-AZ vs Read Replicas", "Multi-AZ = Alta Disponibilidad / Failover pasivo síncrono. Read Replicas = Rendimiento de lecturas analíticas asíncronas.")
    add_bullet("Amazon Aurora", "6 copias en 3 AZs. Uso intermitente pocos minutos al día -> Aurora Serverless. Multi-Región con RPO < 1s y RTO < 1 min -> Aurora Global Database.")
    add_bullet("Cifrar RDS no cifrado", "Snapshot -> Copy Snapshot (marcando KMS) -> Restore nueva BD desde el snapshot cifrado (No se puede cifrar en caliente ni crear read replica cifrada).")
    add_bullet("Redshift", "Data Warehouse (OLAP) columnar para análisis SQL complejo sobre petabytes y reportes BI.")
    add_bullet("ElastiCache", "Caché en memoria (Redis/Memcached) para acelerar lecturas de bases relacionales a microsegundos.")

    # 4. REDES Y VPC
    story.append(Paragraph("4. Redes, Conectividad y VPC", h1_style))
    add_bullet("Gateway VPC Endpoint (Gratis)", "ÚNICAMENTE para Amazon S3 y Amazon DynamoDB. Modifica la Route Table para no salir a Internet ni pagar NAT Gateway.")
    add_bullet("Interface VPC Endpoint / PrivateLink ($)", "Para todos los demás servicios (SQS, SNS, Secrets Manager, etc.). Usa una ENI con IP privada.")
    add_bullet("NAT Gateway", "Para que instancias privadas salgan a Internet. Para alta disponibilidad Multi-AZ: UN NAT Gateway por cada Availability Zone.")
    add_bullet("Transit Gateway (TGW)", "Router central estrella (Hub & Spoke) para conectar decenas de VPCs y on-premise con enrutamiento transitivo y ECMP (> 1.25 Gbps en VPN).")
    add_bullet("AWS Global Accelerator", "2 IPs fijas Anycast globales para tráfico UDP, VoIP, gaming o apps no-HTTP (CloudFront solo soporta HTTP/HTTPS).")
    add_bullet("Security Groups", "Regla Inbound de la BD con Source = Security Group ID de la App (no CIDR). Los Security Groups SOLO tienen ALLOW (NUNCA reglas DENY).")

    # 5. SQS VS SNS
    story.append(Paragraph("5. Desacoplamiento: SQS vs SNS", h1_style))
    add_bullet("Amazon SQS (Pull)", "Buffer duradero. 1 mensaje -> 1 consumidor. Tareas lentas que bloquean la web -> SQS + Lambda/Workers. Orden estricto -> SQS FIFO. Errores tras X reintentos -> DLQ.")
    add_bullet("Amazon SNS (Push)", "NO almacena. Entrega inmediata 1 a Muchos (Pub/Sub - Fan-out) o alertas por SMS/Email.")
    add_bullet("Patrón Fan-Out (SNS + SQS)", "1 SNS Topic recibe un evento y lo replica a múltiples colas SQS diferentes para procesamiento asíncrono en paralelo.")

    # 6. TABLA DE TRIGGERS Y TRAMPAS
    story.append(Paragraph("6. Tabla Rápida de Disparadores y Trampas", h1_style))

    raw_table = [
        ("Si lees en el enunciado...", "La respuesta correcta casi siempre es..."),
        ("'PII / Credit cards / Sensitive data in S3'", "Amazon Macie"),
        ("'Compromised instances / Cryptocurrency mining / Anomaly logs'", "Amazon GuardDuty"),
        ("'SQL Injection / Cross-site scripting (XSS) / Layer 7'", "AWS WAF"),
        ("'DDoS attack mitigation with cost protection'", "AWS Shield Advanced"),
        ("'Software vulnerabilities / CVEs in EC2, ECR, Lambda'", "Amazon Inspector"),
        ("'Unified security compliance dashboard (CIS benchmarks)'", "AWS Security Hub"),
        ("'Preserve order / Strict FIFO / No duplicates'", "Amazon SQS FIFO"),
        ("'Delete items older than X in DynamoDB'", "DynamoDB Time to Live (TTL)"),
        ("'Hot partition / Repeated reads in DynamoDB'", "DynamoDB Accelerator (DAX)"),
        ("'Unpredictable spikes / Flash sales in DynamoDB'", "DynamoDB On-Demand Mode"),
        ("'UDP traffic / 2 Static Anycast IPs globally'", "AWS Global Accelerator"),
        ("'Shared POSIX / NFS file system across multiple AZs'", "Amazon EFS (Linux)"),
        ("'SMB / Windows Active Directory file share'", "Amazon FSx for Windows"),
        ("'HPC / Parallel distributed file system'", "Amazon FSx for Lustre"),
        ("'Long running tasks / Slow API endpoint timeouts'", "Amazon SQS + Lambda / Worker"),
        ("'User login, Sign-up, MFA for mobile/web apps'", "Amazon Cognito User Pools (NUNCA IAM)"),
        ("'Aggregate VPN bandwidth > 1.25 Gbps with ECMP'", "AWS Transit Gateway + ECMP"),
        ("'Access S3/DynamoDB privately with zero NAT cost'", "Gateway VPC Endpoint"),
        ("'Automated DB password rotation'", "AWS Secrets Manager"),
        ("'Evaluate & remediate compliance across AWS Organizations'", "AWS Config Conformance Packs")
    ]

    table_flow = []
    for idx, (c0, c1) in enumerate(raw_table):
        if idx == 0:
            p0 = Paragraph(c0, table_header_style)
            p1 = Paragraph(c1, table_header_style)
        else:
            p0 = Paragraph(c0, table_cell_bold)
            p1 = Paragraph(c1, table_cell_style)
        table_flow.append([p0, p1])

    t = Table(table_flow, colWidths=[240, 310])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (1, 0), colors.HexColor('#0F2C59')),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 2),
        ('TOPPADDING', (0, 0), (-1, -1), 2),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.HexColor('#F5F7F8'), colors.white]),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#D0D7DE'))
    ]))
    story.append(t)
    story.append(Spacer(1, 5))

    # 7. REGLAS DE DESCARTE Y ESTRATEGIA
    story.append(Paragraph("7. Reglas de Descarte Inmediato y Estrategia", h1_style))
    add_bullet("Descarte 1 (Security Groups)", "NUNCA tienen reglas DENY (solo allow). Si dice 'deny in security group', es falsa.")
    add_bullet("Descarte 2 (EBS)", "EBS es Single-AZ (no cruza AZs) y NUNCA se puede achicar con ModifyVolume.")
    add_bullet("Descarte 3 (Glacier Deep Archive)", "Tarda 9 a 12 horas. Si piden 'immediate retrieval', descártalo al instante.")
    add_bullet("Descarte 4 (IAM para clientes)", "NUNCA crear usuarios IAM para clientes de apps web/móviles -> Usar Amazon Cognito.")
    add_bullet("Descarte 5 (RDS Encryption)", "No se puede cifrar una base RDS en caliente ni crear Read Replica cifrada de base sin cifrar.")
    add_bullet("Estrategia", "Lee primero la última frase de la pregunta -> descarta 2 opciones de inmediato -> si dudas más de 45 seg, marca tu mejor opción, pon Flag y avanza.")

    doc.build(story)
    print("Master PDF with Security Suite created successfully.")

if __name__ == '__main__':
    create_complete_master_pdf()
