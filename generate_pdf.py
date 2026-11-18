import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether, ListFlowable, ListItem
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

def create_pdf():
    pdf_path = r"c:\Proyectos\saa-c03\AWS_SAA-C03_Resumen_Ultimo_Momento.pdf"
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()

    # Custom styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        textColor=colors.HexColor('#1F497D'),
        spaceAfter=4
    )

    sub_style = ParagraphStyle(
        'DocSub',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=11,
        leading=14,
        textColor=colors.HexColor('#555555'),
        spaceAfter=12
    )

    h1_style = ParagraphStyle(
        'SectionH1',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=13,
        leading=16,
        textColor=colors.HexColor('#1F497D'),
        spaceBefore=10,
        spaceAfter=6,
        keepWithNext=True
    )

    body_style = ParagraphStyle(
        'BodyDark',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13,
        textColor=colors.HexColor('#222222')
    )

    bullet_style = ParagraphStyle(
        'BulletText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13,
        textColor=colors.HexColor('#222222')
    )

    table_header_style = ParagraphStyle(
        'TableHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12,
        textColor=colors.white
    )

    table_cell_style = ParagraphStyle(
        'TableCell',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=colors.HexColor('#222222')
    )

    table_cell_bold = ParagraphStyle(
        'TableCellBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11.5,
        textColor=colors.HexColor('#1F497D')
    )

    story = []

    # Title & Subtitle
    story.append(Paragraph("AWS SAA-C03: Cheat Sheet de Último Momento", title_style))
    story.append(Paragraph("Guía Rápida de Supervivencia: Patrones, Reglas de Descarte y Palabras Clave", sub_style))

    # Section 1
    story.append(Paragraph("1. Los 12 Disparadores Automáticos (Trigger Words)", h1_style))
    story.append(Paragraph("Si ves estas palabras clave en el enunciado, la respuesta casi siempre es el servicio asociado:", body_style))
    story.append(Spacer(1, 4))

    raw_table = [
        ("Si el enunciado dice...", "La respuesta casi siempre es..."),
        ("'Preserve order' / 'Strict FIFO' / 'No duplicates'", "Amazon SQS FIFO (no standard queue)."),
        ("'Delete items older than X' en DynamoDB", "DynamoDB Time to Live (TTL) (gratis y automático)."),
        ("'Hot partition / Frequent repeated reads' en DynamoDB", "DynamoDB Accelerator (DAX) (caché en microsegundos)."),
        ("'Unpredictable traffic / Flash sales' en DynamoDB", "On-Demand Capacity Mode (escala instantáneo sin throttling)."),
        ("'UDP traffic' o '2 Static Anycast IPs' a nivel global", "AWS Global Accelerator (CloudFront no soporta UDP)."),
        ("'Shared POSIX file system across multiple AZs (Linux)'", "Amazon EFS (EBS es Single-AZ; S3 no es POSIX nativo)."),
        ("'Windows File Share / SMB / Active Directory'", "Amazon FSx for Windows File Server."),
        ("'HPC / High Performance Compute / Parallel file system'", "Amazon FSx for Lustre."),
        ("'Subir o descargar archivos privados sin saturar el servidor'", "S3 Presigned URLs."),
        ("'Long-running task (takes minutes) / Slow API endpoint'", "Amazon SQS + Lambda / Worker (desacople asíncrono)."),
        ("'User login, Sign-up, MFA for mobile/web app customers'", "Amazon Cognito User Pools (NUNCA crear usuarios IAM)."),
        ("'Aggregate VPN throughput > 1.25 Gbps with ECMP'", "AWS Transit Gateway + ECMP.")
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

    t = Table(table_flow, colWidths=[240, 300])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (1, 0), colors.HexColor('#1F497D')),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
        ('TOPPADDING', (0, 0), (-1, -1), 3),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.HexColor('#F2F5F8'), colors.white]),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#D0D7DE'))
    ]))
    story.append(t)
    story.append(Spacer(1, 8))

    def add_bullet(bold_txt, regular_txt):
        text = f"<b><font color='#1F497D'>• {bold_txt}:</font></b> {regular_txt}"
        story.append(Paragraph(text, bullet_style))
        story.append(Spacer(1, 2))

    # Section 2
    story.append(Paragraph("2. Trampas Clásicas de Descarte Inmediato", h1_style))
    add_bullet("Security Groups con regla 'DENY'", "FALSO. Los Security Groups SOLO tienen reglas ALLOW. Si una opción dice 'create a deny rule in the security group', descártala de inmediato.")
    add_bullet("EBS Multi-AZ", "FALSO. Un volumen EBS pertenece a UNA SOLA Availability Zone. No puede montarse en instancias de otra AZ.")
    add_bullet("Achicar volumen EBS con ModifyVolume", "FALSO. Los discos EBS se pueden expandir o cambiar de tipo (ej: io2 a gp3), pero NUNCA se pueden reducir de tamaño.")
    add_bullet("Cifrar RDS en caliente o crear Read Replica cifrada", "FALSO. No se puede cifrar una BD RDS viva ni crear una réplica cifrada de una primaria no cifrada.")
    add_bullet("S3 Glacier Deep Archive para 'Immediate access'", "FALSO. Deep Archive tarda 9 a 12 horas en devolver un archivo. Si piden acceso inmediato o en milisegundos, es S3 Standard-IA o Glacier Instant Retrieval.")
    add_bullet("NAT Gateway para tráfico privado", "FALSO. El NAT Gateway manda tráfico a Internet. Para hablar con servicios AWS sin salir a Internet se usa VPC Endpoint.")
    story.append(Spacer(1, 6))

    # Section 3
    story.append(Paragraph("3. Bases de Datos: Decisiones Rápidas", h1_style))
    add_bullet("Alta Disponibilidad (HA) en RDS", "Multi-AZ (réplica síncrona pasiva en otra AZ con failover automático de DNS).")
    add_bullet("Rendimiento de Lectura (Read performance)", "Read Replicas (réplicas asíncronas para descargar consultas/reportes).")
    add_bullet("Uso intermitente / Pocos minutos al día", "Aurora Serverless (escala a cero y pagas por segundo de uso).")
    add_bullet("Multi-Region RPO < 1s y RTO < 1 min", "Amazon Aurora Global Database.")
    add_bullet("Receta para cifrar RDS no cifrado", "1) Crear Snapshot -> 2) Copiar Snapshot marcando cifrado KMS -> 3) Restaurar nueva BD desde el snapshot cifrado.")
    add_bullet("DynamoDB para millones de usuarios", "NoSQL totalmente serverless ideal para videojuegos, perfiles de usuario, carritos de compras y sesiones web.")
    story.append(Spacer(1, 6))

    # Section 4
    story.append(Paragraph("4. Redes, VPC y Conectividad", h1_style))
    add_bullet("Gateway VPC Endpoints", "Son GRATUITOS y modifican la Route Table. Existen únicamente para Amazon S3 y DynamoDB.")
    add_bullet("Interface VPC Endpoints (PrivateLink)", "Usan una ENI con IP privada dentro de tu subred. Para todos los demás servicios (SQS, SNS, Secrets Manager, etc.).")
    add_bullet("Seguridad entre capas (Web -> DB)", "En el Security Group de la base de datos, configurar Inbound con Source = Security Group ID de los servidores Web (nunca CIDR IP abierto).")
    add_bullet("VPC Peering activo pero sin comunicación", "Falta actualizar las Route Tables en ambas VPCs agregando la ruta hacia el peering (pcx-xxxx).")
    add_bullet("NAT Gateway tolerante a fallos", "Desplegar UN NAT Gateway por cada Availability Zone (en su respectiva subred pública).")
    story.append(Spacer(1, 6))

    # Section 5
    story.append(Paragraph("5. Disaster Recovery (De menor a mayor costo)", h1_style))
    add_bullet("1. Backup & Restore", "Horas / días. La opción más económica. Snapshots periódicos en S3.")
    add_bullet("2. Pilot Light", "Decenas de minutos (~30 min). Base de datos replicada viva en tamaño mínimo; cómputo apagado hasta el desastre.")
    add_bullet("3. Warm Standby", "Minutos (~5-10 min). Toda la arquitectura corriendo en la otra región a escala mínima (ej: 1 t3.micro), lista para auto-escalar.")
    add_bullet("4. Multi-site Active/Active", "Segundos / Cero downtime. Tráfico atendido en tiempo real por ambas regiones simultáneamente (la más costosa).")
    story.append(Spacer(1, 6))

    # Section 6
    story.append(Paragraph("6. Seguridad y Almacenamiento", h1_style))
    add_bullet("S3 Bucket Policy con error de sintaxis", "Le falta el elemento 'Principal' (obligatorio en Resource-based policies).")
    add_bullet("Restringir acceso a S3 solo a través de CloudFront", "Origin Access Control (OAC) + S3 Bucket Policy permitiendo al servicio CloudFront.")
    add_bullet("Rotación automática de contraseñas de BD", "AWS Secrets Manager (soporta rotación nativa integrada con RDS; Parameter Store no).")
    add_bullet("Permisos para contenedores en ECS", "ECS Task Role asignado en la Task Definition (nunca usar el EC2 Instance Profile).")
    story.append(Spacer(1, 6))

    # Section 7
    story.append(Paragraph("7. Estrategia Mental durante el Examen", h1_style))
    add_bullet("Regla 1", "Lee primero la última frase de la pregunta para saber si priorizar costo ('most cost-effective'), esfuerzo operativo ('least operational overhead') o disponibilidad ('highest availability').")
    add_bullet("Regla 2", "Descarta siempre 2 opciones absurdas de inmediato y decide entre las 2 finalistas evaluando la restricción principal.")
    add_bullet("Regla 3", "Usa 'Flag for review' si dudas más de 45 segundos. No pierdas tiempo; avanza y revisa al final.")
    add_bullet("Regla 4", "No dejes ninguna pregunta sin responder (las incorrectas no restan puntos).")

    doc.build(story)
    print("PDF created successfully.")

if __name__ == '__main__':
    create_pdf()
