# Iniciar el servidor web local y abrir el portal de estudio en el navegador predeterminado
$port = 5500
$portalDir = Join-Path $PSScriptRoot "portal"

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "  AWS SAA-C03 Learning Portal (Desbloqueo Progresivo)" -ForegroundColor Yellow
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "Iniciando servidor local en http://localhost:$port ..." -ForegroundColor Green

# Iniciar servidor en segundo plano
$process = Start-Process python -ArgumentList "-m http.server $port --directory `"$portalDir`"" -PassThru -WindowStyle Hidden

# Abrir el navegador
Start-Sleep -Seconds 1
Start-Process "http://localhost:$port"

Write-Host "¡Portal iniciado con exito en http://localhost:$port!" -ForegroundColor Green
Write-Host "Presiona Ctrl+C o cierra la ventana para detener el servidor cuando termines de estudiar." -ForegroundColor Gray
Write-Host "Proceso PID: $($process.Id)" -ForegroundColor DarkGray

try {
    $process.WaitForExit()
} finally {
    if (-not $process.HasExited) {
        Stop-Process -Id $process.Id -Force -ErrorAction SilentlyContinue
    }
}
