#!/bin/bash
set -e

echo "=== Iniciando sincronización del Portal AWS SAA-C03 en VM ==="

# Instalar unzip si no está presente
if ! command -v unzip >/dev/null 2>&1; then
    apt-get update -y && apt-get install -y unzip curl
fi

# Descargar bundle desde GCS usando token de servicio de la VM
TMP_DIR=$(mktemp -d)
cd "$TMP_DIR"

TOKEN=$(curl -s "http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/token" -H "Metadata-Flavor: Google" | grep -o '"access_token":"[^"]*' | cut -d'"' -f4)

GCS_BUCKET="<YOUR_GCS_BUCKET>"
curl -s -H "Authorization: Bearer $TOKEN" "https://storage.googleapis.com/storage/v1/b/${GCS_BUCKET}/o/vm-sync%2Fportal_bundle.zip?alt=media" -o portal_bundle.zip

if [ -s portal_bundle.zip ]; then
    echo "Bundle descargado exitosamente. Extrayendo en /var/www/html..."
    mkdir -p /var/www/html
    unzip -o portal_bundle.zip -d /var/www/html/
    chown -R www-data:www-data /var/www/html
    chmod -R 755 /var/www/html
    systemctl restart nginx
    echo "=== Sincronización completada con éxito. Nginx reiniciado. ==="
else
    echo "ERROR: No se pudo descargar el bundle de Cloud Storage."
fi

rm -rf "$TMP_DIR"
