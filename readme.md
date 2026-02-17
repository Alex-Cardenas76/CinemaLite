# 🎬 CinemaLite — Sprint 1: Orquestación de Agentes con IA

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

> **Actividad 3:** Construcción paralela e integración guiada de funcionalidades.
> **Curso:** Antigravity — Sprint 1

## 📄 Descripción del Proyecto

**CinemaLite** es un buscador de películas minimalista y moderno desarrollado con **React + Vite**. Más allá de su funcionalidad, este proyecto sirve como demostración técnica de **flujo de trabajo paralelo** utilizando Inteligencia Artificial (Antigravity) para simular una célula de desarrollo completa.

El objetivo fue orquestar múltiples contextos de IA para dividir tareas de diseño, lógica y depuración sin "contaminación de contexto" (Context Switching).

## ✨ Características Principales

-   **Búsqueda en Tiempo Real**: Conexión directa a la API de OMDb.
-   **Diseño Responsivo**: Grid adaptable para móviles, tablets y escritorio.
-   **UI Moderna**: Estilización con Tailwind CSS, modo oscuro y animaciones suaves.
-   **Manejo de Errores**: Feedback visual para cargas, errores de red y resultados vacíos.
-   **Seguridad**: Gestión de API Keys mediante variables de entorno.

## 🤖 Arquitectura de Agentes (Roles Simulados)

Para cumplir con el requisito de **Tareas Paralelas Reales**, el desarrollo se delegó a 3 agentes especializados:

1.  **🎨 Agente de Diseño (UI/UX):**
    *   **Responsabilidad:** Identidad visual, Logo SVG y maquetación con Tailwind CSS.
    *   **Técnica aplicada:** *Visual Feedback* (Video 21) para ajustar márgenes y tamaños del Header mediante capturas de pantalla.

2.  **⚙️ Agente de Backend (Lógica & API):**
    *   **Responsabilidad:** Integración de **OMDb API**.
    *   **Seguridad:** Implementación de API Keys mediante variables de entorno (`.env`) para no exponer credenciales (Video 14).

3.  **🐛 Agente de QA (Debugging):**
    *   **Responsabilidad:** Análisis de errores críticos.
    *   **Técnica aplicada:** *Debugging Guiado* (Video 16) analizando Stack Traces para resolver fallos de conexión intencionales.

## 🚀 Stack Tecnológico

*   **Frontend:** React 19 + Vite 7
*   **Lenguaje:** JavaScript (ES6+)
*   **Estilos:** Tailwind CSS 3.4 (Mobile First)
*   **Datos:** OMDb API (Open Movie Database)
*   **Tooling:** ESLint 9

## 🛠️ Instalación y Configuración

Sigue estos pasos para ejecutar el proyecto localmente:

1.  **Clonar el repositorio (opcional) e instalar dependencias:**

    ```bash
    npm install
    ```

2.  **Configurar Variables de Entorno:**

    Obtén tu API Key gratuita en [OMDb API](https://www.omdbapi.com/apikey.aspx).
    Crea un archivo `.env` en la raíz del proyecto y agrega tu clave:

    ```env
    VITE_OMDB_API_KEY=tu_api_key_aqui
    ```

    > **Nota:** La clave proporcionada en el ejemplo anterior (`a6f281d`) parece incompleta. Asegúrate de usar una clave válida de 8 caracteres.

3.  **Ejecutar el servidor de desarrollo:**

    ```bash
    npm run dev
    ```

    Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## 📸 Evidencias del Sprint

Las capturas de pantalla que demuestran el proceso se encuentran en la carpeta `/evidence`:

*   `visual-feedback.png`: Muestra al Agente de Diseño corrigiendo el Logo basado en una imagen subida.
*   `api-integration.png`: Muestra la configuración segura del `.env` y el componente `MovieSearch`.
*   `debugging-log.png`: Muestra al Agente de QA diagnosticando y resolviendo el error de conexión.

## 🧠 Decisiones Técnicas (Reflexión)

*   **Por qué separar chats:** Se utilizaron pestañas independientes para el "Diseñador" y el "Backend" para evitar que la IA mezclara instrucciones de CSS con lógica de fetch, manteniendo el código más limpio.
*   **Manejo de API Key:** Se optó por `import.meta.env` en lugar de hardcodear la clave para cumplir con los estándares de seguridad de producción.
*   **Uso de SVG:** Se pidió un logo SVG en código (no imagen externa) para mejorar la performance y escalabilidad visual.
