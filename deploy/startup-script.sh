#!/bin/bash

# Actualizar e instalar dependencias básicas
apt-get update -y
apt-get install -y nginx git curl

# Habilitar Nginx
systemctl enable nginx
systemctl start nginx

# Limpiar directorio web por defecto
rm -rf /var/www/html/*

# Crear página provisional mientras se sincroniza
echo "<h1>Iniciando Portal AWS SAA-C03...</h1>" > /var/www/html/index.html

# Clonar repositorio público
cd /opt
if git clone https://github.com/aletrinak/aws-saa-c03-study-platform.git 2>/dev/null; then
    cd aws-saa-c03-study-platform
    git checkout main
    cp -r portal/* /var/www/html/
    mkdir -p /var/www/html/simulator
    cp -r simulator/* /var/www/html/simulator/
fi

chown -R www-data:www-data /var/www/html
chmod -R 755 /var/www/html
systemctl restart nginx

echo "Startup script finalizado."
