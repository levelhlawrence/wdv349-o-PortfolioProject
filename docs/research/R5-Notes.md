# Project & Portfolio

**Author:** Level Lawrence  
**Assignment:** 1.3 Research 1 - Project Initiation
**Date:** April 13, 2025

---

## Overview

This research note builds on previous documentation by reviewing key practices in front-end development with React, styling techniques, code quality assurance, and deployment methods.

---

## Key Comments

### 🧠 React Development Best Practices

**Thinking in React:**  
The material emphasized breaking UIs into isolated components, managing data flow via props and state, and designing based on hierarchy. This mirrors our existing modular approach and validates the structure used in the current project.

**React File Structure:**  
It reinforces the importance of organizing components, assets, and styles clearly—something already applied in our project layout. The article also introduced new folder naming conventions that may improve readability.

**MVC Design:**  
Following a Model-View-Controller (MVC) pattern promotes separation of concerns and code modularity. It enhances maintainability as the app scales, especially in this full-stack application.

---

### 🎨 Styling Techniques

**TailwindCSS & SchadCN UI:**  
This project will use a combination of TailwindCSS and SchadCN. I'll be using a mobile first design pattern due to the way Tailwind classes work. Adding subclasses such as md: lg: xl: forces one to think of the default or mobile state of the application.

---

### 🧹 Code Quality

**ESLint and TypeScript:**  
Already integrated in our development workflow, ESLint enforces a consistent coding style and flags issues before they reach production. I'll be implementing Typescript to aid in keeping good code quality.

---

### 🚀 Deployment

**Deployment Strategy: TBD**  
While Heroku was originally considered, deployment will be determined after evaluating alternatives such as Vercel, Netlify, and Docker-based hosting solutions.

**Node.js with TypeScript & Docker:**  
The backend leverages Node.js with TypeScript for type safety and improved development tooling. Docker is used to containerize the application, ensuring consistency across development, staging, and production environments.

---

## References

- [Thinking in React](https://react.dev/learn/thinking-in-react)
- [React Folder Structure Guide](https://infinitejs.com/posts/mastering-react-folder-structure/)
- [Heroku Deployment Guide](https://devcenter.heroku.com/start)

## Project Changes

[See project changes for more details on how this project is evolving](/docs/changeOrder/changeOrder.md)
