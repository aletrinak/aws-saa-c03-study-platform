# Script para crear la instancia Compute Engine en GCP
# Proyecto: <YOUR_GCP_PROJECT_ID>
# Tipo de máquina: e2-medium (2 vCPUs, 4 GB RAM)

$PROJECT_ID = "<YOUR_GCP_PROJECT_ID>"
$ZONE = "us-east1-b"
$INSTANCE_NAME = "vm-aws-saa-c03-portal"
$MACHINE_TYPE = "e2-medium"
$SUBNET = "projects/<YOUR_VPC_HOST_PROJECT_ID>/regions/us-east1/subnetworks/<YOUR_SUBNET_NAME>"

Write-Host "Creando instancia $INSTANCE_NAME en $PROJECT_ID ($ZONE)..." -ForegroundColor Cyan

gcloud compute instances create $INSTANCE_NAME `
    --project=$PROJECT_ID `
    --zone=$ZONE `
    --machine-type=$MACHINE_TYPE `
    --subnet=$SUBNET `
    --no-address `
    --image-family=debian-12 `
    --image-project=debian-cloud `
    --boot-disk-size=30GB `
    --boot-disk-type=pd-balanced `
    --tags=http-server,https-server,web-portal `
    --metadata-from-file=startup-script=deploy/startup-script.sh

Write-Host "Instancia creada exitosamente." -ForegroundColor Green
