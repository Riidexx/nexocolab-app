# NexoColab

App móvil P2P para compartir objetos subutilizados (MVP académico).

Proyecto desarrollado con React Native + Expo.

---

## 🚀 Requisitos

Antes de empezar asegúrate de tener:

- Node.js LTS\
- Git\
- Expo Go (instalado en tu celular Android)

---

## ▶️ Ejecutar el proyecto

Clona el repositorio:

git clone https://github.com/Riidexx/nexocolab-app.git

Entra al proyecto:

cd nexocolab-app/app

Instala dependencias:

npm install

Inicia Expo (modo tunnel recomendado):

npx expo start --tunnel

Luego:

- Abre Expo Go en tu celular
- Escanea el QR

---

## 📱 Pantallas del MVP

Actualmente el MVP incluye:

Home\
Listado de objetos subutilizados (mock).

Publicar\
Formulario simple para publicar un objeto (mock).

Solicitudes\
Listado de préstamos/solicitudes (mock).

Perfil\
Información de usuario + login/logout simulado.

---

## 📁 Estructura básica

app/ └── app/(tabs) ├── home.tsx ├── publish.tsx ├── requests.tsx ├──
profile.tsx └── \_layout.tsx

---

## 🧪 Estado actual

Todo funciona con datos simulados (mock).

Pendiente para siguientes sprints:

- Autenticación real
- Backend (Supabase/Firebase)
- Subida de imágenes
- Persistencia de objetos
- Sistema de calificaciones
- Solicitudes reales

---

## 👥 Trabajo colaborativo

Reglas:

- No trabajar directo en main
- Usar ramas (feature/...)
- Hacer Pull Request hacia dev
- 1 aprobación mínima

---

## 🎯 Objetivo del proyecto

Crear una plataforma P2P que permita compartir objetos subutilizados de
forma segura y colaborativa.

---

MVP desarrollado como proyecto académico.
