import sys
import docx
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml import OxmlElement
from docx.oxml.ns import qn

def set_cell_background(cell, hex_color):
    tcPr = cell._tc.get_or_add_tcPr()
    shd = OxmlElement('w:shd')
    shd.set(qn('w:val'), 'clear')
    shd.set(qn('w:color'), 'auto')
    shd.set(qn('w:fill'), hex_color)
    tcPr.append(shd)

def create_word():
    doc = Document()
    
    # Page setup
    for section in doc.sections:
        section.top_margin = Inches(0.8)
        section.bottom_margin = Inches(0.8)
        section.left_margin = Inches(0.8)
        section.right_margin = Inches(0.8)

    # Styles
    normal_style = doc.styles['Normal']
    normal_style.font.name = 'Calibri'
    normal_style.font.size = Pt(11)
    normal_style.font.color.rgb = RGBColor(0x22, 0x22, 0x22)

    # Title
    p_title = doc.add_paragraph()
    p_title.paragraph_format.space_before = Pt(0)
    p_title.paragraph_format.space_after = Pt(4)
    run_title = p_title.add_run("AWS SAA-C03: Cheat Sheet de Último Momento")
    run_title.font.name = 'Calibri'
    run_title.font.size = Pt(22)
    run_title.bold = True
    run_title.font.color.rgb = RGBColor(0x1F, 0x49, 0x7D)

    p_sub = doc.add_paragraph()
    p_sub.paragraph_format.space_after = Pt(14)
    run_sub = p_sub.add_run("Guía Rápida de Supervivencia: Patrones, Reglas de Descarte y Palabras Clave")
    run_sub.font.size = Pt(12)
    run_sub.font.italic = True
    run_sub.font.color.rgb = RGBColor(0x55, 0x55, 0x55)

    def add_h1(text):
        h = doc.add_paragraph()
        h.paragraph_format.space_before = Pt(14)
        h.paragraph_format.space_after = Pt(6)
        r = h.add_run(text)
        r.font.size = Pt(15)
        r.bold = True
        r.font.color.rgb = RGBColor(0x1F, 0x49, 0x7D)
        return h

    def add_bullet(bold_prefix, text):
        p = doc.add_paragraph(style='List Bullet')
        p.paragraph_format.space_before = Pt(2)
        p.paragraph_format.space_after = Pt(2)
        r_bold = p.add_run(bold_prefix + ": ")
        r_bold.bold = True
        r_bold.font.color.rgb = RGBColor(0x1F, 0x49, 0x7D)
        p.add_run(text)
        return p

    # Section 1
    add_h1("1. Los 12 Disparadores Automáticos (Trigger Words)")
    p_desc = doc.add_paragraph("Si ves estas palabras clave en el enunciado, la respuesta casi siempre es el servicio asociado:")
    p_desc.paragraph_format.space_after = Pt(6)

    table_data = [
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

    t = doc.add_table(rows=len(table_data), cols=2)
    t.alignment = WD_TABLE_ALIGNMENT.CENTER
    t.autofit = False

    for row_idx, (col0, col1) in enumerate(table_data):
        row = t.rows[row_idx]
        cell0, cell1 = row.cells[0], row.cells[1]
        cell0.width = Inches(3.2)
        cell1.width = Inches(3.6)
        
        p0 = cell0.paragraphs[0]
        p0.paragraph_format.space_before = Pt(3)
        p0.paragraph_format.space_after = Pt(3)
        r0 = p0.add_run(col0)
        
        p1 = cell1.paragraphs[0]
        p1.paragraph_format.space_before = Pt(3)
        p1.paragraph_format.space_after = Pt(3)
        r1 = p1.add_run(col1)
        
        if row_idx == 0:
            set_cell_background(cell0, '1F497D')
            set_cell_background(cell1, '1F497D')
            r0.bold = True
            r0.font.color.rgb = RGBColor(0xFF, 0xFF, 0xFF)
            r1.bold = True
            r1.font.color.rgb = RGBColor(0xFF, 0xFF, 0xFF)
        else:
            bg_color = 'F2F5F8' if row_idx % 2 == 1 else 'FFFFFF'
            set_cell_background(cell0, bg_color)
            set_cell_background(cell1, bg_color)
            r0.bold = True

    # Section 2
    add_h1("2. Trampas Clásicas de Descarte Inmediato")
    add_bullet("Security Groups con regla 'DENY'", "FALSO. Los Security Groups SOLO tienen reglas ALLOW. Si una opción dice 'create a deny rule in the security group', se descarta de inmediato.")
    add_bullet("EBS Multi-AZ", "FALSO. Un volumen EBS pertenece estrictamente a UNA SOLA Availability Zone. No puede montarse en instancias de otra AZ.")
    add_bullet("Achicar volumen EBS con ModifyVolume", "FALSO. Los discos EBS se pueden expandir en caliente o cambiar de tipo (ej: io2 a gp3), pero NUNCA se pueden reducir de tamaño.")
    add_bullet("Cifrar RDS en caliente o crear Read Replica cifrada", "FALSO. No se puede cifrar una BD RDS existente viva ni crear una réplica cifrada de una primaria no cifrada.")
    add_bullet("S3 Glacier Deep Archive para 'Immediate access'", "FALSO. Deep Archive tarda 9 a 12 horas en devolver un archivo. Si piden acceso inmediato o en milisegundos, es S3 Standard-IA o Glacier Instant Retrieval.")
    add_bullet("NAT Gateway para tráfico privado", "FALSO. El NAT Gateway manda tráfico a Internet. Para hablar con servicios AWS sin salir a Internet se usa VPC Endpoint.")

    # Section 3
    add_h1("3. Bases de Datos: Decisiones Rápidas")
    add_bullet("Alta Disponibilidad (HA) en RDS", "Multi-AZ (réplica síncrona pasiva en otra AZ con failover automático de DNS).")
    add_bullet("Rendimiento de Lectura (Read performance)", "Read Replicas (réplicas asíncronas para descargar consultas/reportes).")
    add_bullet("Uso intermitente / Pocos minutos al día", "Aurora Serverless (escala a cero y pagas por segundo de uso).")
    add_bullet("Multi-Region RPO < 1s y RTO < 1 min", "Amazon Aurora Global Database.")
    add_bullet("Receta para cifrar RDS no cifrado", "1) Crear Snapshot -> 2) Copiar Snapshot marcando cifrado KMS -> 3) Restaurar nueva BD desde el snapshot cifrado.")
    add_bullet("DynamoDB para millones de usuarios", "NoSQL totalmente serverless ideal para videojuegos, perfiles de usuario, carritos de compras y sesiones web.")

    # Section 4
    add_h1("4. Redes, VPC y Conectividad")
    add_bullet("Gateway VPC Endpoints", "Son GRATUITOS y modifican la Route Table. Existen únicamente para Amazon S3 y DynamoDB.")
    add_bullet("Interface VPC Endpoints (PrivateLink)", "Usan una ENI con IP privada dentro de tu subred. Para todos los demás servicios (SQS, SNS, Secrets Manager, etc.).")
    add_bullet("Seguridad entre capas (Web -> DB)", "En el Security Group de la base de datos, configurar Inbound con Source = Security Group ID de los servidores Web (nunca CIDR IP abierto).")
    add_bullet("VPC Peering activo pero sin comunicación", "Falta actualizar las Route Tables en ambas VPCs agregando la ruta hacia el peering (pcx-xxxx).")
    add_bullet("NAT Gateway tolerante a fallos", "Desplegar UN NAT Gateway por cada Availability Zone (en su respectiva subred pública).")

    # Section 5
    add_h1("5. Disaster Recovery (De menor a mayor costo)")
    add_bullet("1. Backup & Restore", "Horas / días. La opción más económica. Snapshots periódicos en S3.")
    add_bullet("2. Pilot Light", "Decenas de minutos (~30 min). Base de datos replicada viva en tamaño mínimo; cómputo apagado hasta el desastre.")
    add_bullet("3. Warm Standby", "Minutos (~5-10 min). Toda la arquitectura corriendo en la otra región a escala mínima (ej: 1 t3.micro), lista para auto-escalar.")
    add_bullet("4. Multi-site Active/Active", "Segundos / Cero downtime. Tráfico atendido en tiempo real por ambas regiones simultáneamente (la más costosa).")

    # Section 6
    add_h1("6. Seguridad y Almacenamiento")
    add_bullet("S3 Bucket Policy con error de sintaxis", "Le falta el elemento 'Principal' (obligatorio en Resource-based policies).")
    add_bullet("Restringir acceso a S3 solo a través de CloudFront", "Origin Access Control (OAC) + S3 Bucket Policy permitiendo al servicio CloudFront.")
    add_bullet("Rotación automática de contraseñas de BD", "AWS Secrets Manager (soporta rotación nativa integrada con RDS; Parameter Store no).")
    add_bullet("Permisos para contenedores en ECS", "ECS Task Role asignado en la Task Definition (nunca usar el EC2 Instance Profile).")

    # Section 7
    add_h1("7. Estrategia Mental durante el Examen")
    add_bullet("Regla 1", "Lee primero la última frase de la pregunta para saber si priorizar costo ('most cost-effective'), esfuerzo operativo ('least operational overhead') o disponibilidad ('highest availability').")
    add_bullet("Regla 2", "Descarta siempre 2 opciones absurdas de inmediato y decide entre las 2 finalistas evaluando la restricción principal.")
    add_bullet("Regla 3", "Usa 'Flag for review' si dudas más de 45 segundos. No pierdas tiempo; avanza y revisa al final.")
    add_bullet("Regla 4", "No dejes ninguna pregunta sin responder (las incorrectas no restan puntos).")

    doc.save(r"c:\Proyectos\saa-c03\AWS_SAA-C03_Resumen_Ultimo_Momento.docx")
    print("DOCX created successfully.")

if __name__ == '__main__':
    create_word()
