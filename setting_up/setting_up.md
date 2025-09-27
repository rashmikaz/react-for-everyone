## Setting Up

Before you start building React apps, you need to set up your development environment. This section will guide you through creating your first React project and running it locally.

There are a few common ways to start a React project. In small demos or learning scenarios, you can include React directly in your HTML using a CDN (Content Delivery Network). This is quick and requires no setup, but it’s not suitable for real projects and lacks modern development tools.

For full-fledged projects, the traditional approach is Create React App (CRA). Released in 2016, CRA automatically generates a complete React project with all necessary configurations, letting developers focus on building the app instead of spending time setting up tools like Webpack or Babel.

The modern approach is using Vite, a lightweight and fast alternative to CRA. Vite offers instant server start, hot module replacement, and minimal configuration, making it ideal for modern React projects.

## Requirements for Creating a React Project

Before you can create a React project using Create React App (CRA), Vite, or any modern setup, you need the following tools installed on your system:

###### 1. Node.js

- React requires Node.js because it comes with npm (Node Package Manager) or yarn, which are used to install dependencies.
- Recommended version: Node 18+.

###### 2. Package Manager (npm or Yarn)

- npm comes with Node.js.
- yarn is an alternative package manager that can also be used to manage dependencies.

###### 3. Code Editor

- Use a text editor like VS Code for editing React code.
- VS Code supports JSX syntax highlighting, extensions, and debugging tools.

###### 3. Web Browser

- Modern browsers like Chrome, Firefox, or Edge are required to view and test your React apps.

## Creating a React Project with Vite

Vite is a modern and fast tool for setting up React projects. It automatically creates a ready-to-use project structure with all the necessary configurations, allowing you to start coding immediately. With Vite, you get a lightweight development environment, a fast development server, and hot module replacement, so any changes you make in your code are instantly reflected in the browser.

### 1. Create a New React Project

Open your terminal and run:

```bash
npm create vite@latest my-app
```

- my-app is the folder name for your project.
- Vite will ask you to select a framework → choose React.
- Then it will ask for JavaScript or TypeScript → choose according to your preference.

### 2. Move into the Project Folder

```bash
cd my-app
```

### 3. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

- This starts a local development server.
- The terminal will show a URL (usually http://localhost:5173) where you can see your React app live.
