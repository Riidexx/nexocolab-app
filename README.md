# NexoColab

Aplicación móvil P2P para compartir **objetos subutilizados** dentro de una comunidad.

Proyecto desarrollado como **MVP académico** utilizando **React Native + Expo + Supabase**.

---

# 🚀 Requisitos

Antes de ejecutar el proyecto asegúrate de tener instalado:

- Node.js LTS
- Git
- Visual Studio Code (recomendado)
- Expo Go (instalado en tu celular Android)

---

# ⚙️ Configuración del entorno

Clonar el repositorio:

git clone https://github.com/Riidexx/nexocolab-app.git

Entrar al proyecto:

cd nexocolab-app/app

Instalar dependencias:

npm install

---

# ▶️ Ejecutar la aplicación

Iniciar Expo:

npm run start

Luego:

1. Abrir **Expo Go** en el celular
2. Escanear el **QR**
3. La aplicación se cargará automáticamente

---

# 📱 Funcionalidades del MVP

El MVP actualmente permite:

- Registro e inicio de sesión de usuarios
- Publicación de objetos
- Visualización de objetos disponibles
- Envío de solicitudes de préstamo
- Gestión de solicitudes (aprobar / rechazar)
- Actualización automática de disponibilidad de objetos

---

# 🧱 Arquitectura

Frontend:
React Native + Expo

Backend:
Supabase

Base de datos:
PostgreSQL

Seguridad:
Row Level Security (RLS)

---

# 📁 Estructura del proyecto

app/
└── app/(tabs)
├── home.tsx
├── publish.tsx
├── requests.tsx
├── profile.tsx
└── _layout.tsx

lib/
└── supabase.ts

---

# 👥 Trabajo colaborativo

Reglas del repositorio:

- No trabajar directamente en `main`
- Crear ramas tipo `feature/...`
- Hacer Pull Request hacia `dev`
- Al menos una aprobación antes de merge

---

# 🎯 Objetivo del proyecto

Desarrollar una plataforma P2P que permita a los usuarios **prestar y solicitar objetos de forma segura**, fomentando el uso de recursos subutilizados dentro de comunidades locales.

---

Proyecto desarrollado como parte del **Semillero de Investigación SIIANTEC – Ingeniería de Sistemas (TEINCO)**.