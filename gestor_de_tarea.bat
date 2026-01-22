@echo off
echo =======================================================
echo INSTALANDO ESTRUCTURA FULL STACK (CLEAN CODE + SOLID)
echo =======================================================

:: --- BACKEND ---
echo Creando estructura del BACKEND...
mkdir backend\src\api\controllers
mkdir backend\src\api\middlewares
mkdir backend\src\api\routes
mkdir backend\src\config
mkdir backend\src\repositories
mkdir backend\src\services
mkdir backend\docs

:: Archivos base Backend
type nul > backend\src\app.js
type nul > backend\src\config\swagger.js
type nul > backend\.env
type nul > backend\.gitignore

:: --- FRONTEND ---
echo Creando estructura del FRONTEND...
mkdir frontend\src\components
mkdir frontend\src\services
mkdir frontend\src\pages
mkdir frontend\src\hooks
mkdir frontend\public

:: Archivos base Frontend
type nul > frontend\src\main.js
type nul > frontend\index.html

echo =======================================================
echo ESTRUCTURA CREADA CON EXITO
echo =======================================================
pause