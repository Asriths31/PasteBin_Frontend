# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Pastebin‐Lite App

Pastebin Lite is a lightweight web application that allows users to create and share text pastes easily.  
The project focuses on simplicity, fast performance.


---

## Tech Stack

- Frontend: React.js
- Backend: Node.js, Express
- Database: MongoDB Atlas
- Deployment: Render(backend),netlify(frontend)

---


---

### Deployed Backend URL

[https://pastebin-backend-8cl7.onrender.com/](https://pastebin-backend-8cl7.onrender.com/)

---

### Deployed Frontend URL

[https://verdant-phoenix-c09c73.netlify.app/](https://verdant-phoenix-c09c73.netlify.app/)


---

### Backend Repository Link


[https://github.com/Asriths31/PasteBin_Backend](https://github.com/Asriths31/PasteBin_Backend)


---

## How to Run the App Locally

### Prerequisites
- **Node.js** (v18 or later recommended)
- **npm** or **yarn**

### Load Environment variables
- VITE_API_BASE_URL(backend url)


---

### Steps

```bash
# Clone the repository
git clone <your-repo-url>
cd <project-folder>

# Install dependencies
npm install


#Start Application
npm run dev
