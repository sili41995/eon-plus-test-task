# 📦 React App

A project based on **React**, written in **TypeScript**, using **Vite**,
**Zustand**, **Axios**, and **React Router DOM**.

---

## Getting Started

1. Make sure you have the LTS version of Node.js installed on your machine. Run
   `node -v` in your terminal. If it shows a version (e.g., v20.10.0), Node.js
   is installed. [Download and install Node.js](https://nodejs.org/en/) if
   needed.
2. Clone this repository.
3. Open the project in VSCode and launch the terminal.
4. Install project dependencies by running `npm install`.
5. Fill in the .env file based on .env.example.
6. Start the development server with `npm run dev`.
7. Open your browser and go to [http://localhost:5173](http://localhost:5173).
   The page will automatically reload when you make changes to the project
   files.

## 🚀 Technologies

- **React** — JS-library
- **TypeScript** — strict typing
- **Vite** — modern build tool
- **Axios** — HTTP client
- **React Router DOM** — routing
- **Zustand** — state management
- **ESLint** — code linter

---

## 📁 Project Structure

- my-app/
- ├── public/ # Public files (favicon, etc.)
- ├── src/
- │ ├── components/ # Reusable UI components
- │ ├── constants/ # Constants, enums, and configurations
- │ ├── hooks/ # Custom React hooks
- │ ├── pages/ # Application pages (routes)
- │ ├── services/ # API logic (axios)
- │ ├── store/ # Zustand store
- │ ├── types/ # Shared types and interfaces
- │ └── utils/ # Utility functions
- ├── tsconfig.json # TypeScript configuration
- ├── vite.config.ts # Vite configuration
- ├── .eslintrc # Linting configuration
- ├── package.json # Scripts and dependencies
- └── README.md

## 📦 Scripts

```bash
# Start the development server
npm run dev

# Build the project
npm run build

# Preview the production build
npm run preview

# Lint TypeScript and TSX files
npm run lint
```
