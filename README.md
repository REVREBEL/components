# components

REVREBEL Component Library Using Builder.io, Xano and Devlink Stack > Webflow



### ⚙️ Project Tech Stack Overview

This project integrates **Webflow’s visual design system** with a modern **Next.js + Builder.io** frontend architecture and a **headless backend on Xano**. The goal is to create a scalable, component-driven platform that allows both designers and developers to collaborate efficiently.

---

### 🔧 Tools & Architecture

#### 1. **Webflow + DevLink**

- Webflow is our source of truth for design.
    
- Components are created visually in Webflow and converted into React components using **DevLink**.
    
- These components are synced into the codebase (`src/devlink/components/`) via the Webflow CLI.
    

#### 2. **Next.js (with TypeScript)**

- Used as the core frontend framework.
    
- Supports server-side rendering and static site generation.
    
- DevLink components are imported and rendered in a Next.js app.
    
- Tailwind CSS (optional) can be used for utility-first styling beyond Webflow.
    

#### 3. **Builder.io**

- Visual CMS and page builder.
    
- Connects to our component registry (`src/builder/registry.ts`) to allow non-developers to build pages using pre-defined Webflow components.
    
- Builder pages are served dynamically in Next.js using a catch-all route.
    

#### 4. **Xano (optional but planned)**

- Acts as the backend database and business logic layer.
    
- Provides RESTful APIs consumed by the frontend (e.g., dynamic content, user data, filters, etc.).
    

---

### 📁 Key Project Folders

- `src/devlink/components/` – DevLink-synced Webflow components (React)
    
- `src/builder/` – Builder.io component registry and integration logic
    
- `pages/[...page].tsx` – Dynamic route for Builder pages
    
- `scripts/` – CLI tools (e.g. for generating Builder component registry)
    
- `.webflowrc` + `webflow.json` – Webflow DevLink project config
    

---

### 🚀 Workflow Summary

1. **Designers** build components in Webflow.
    
2. **DevLink** syncs components into the Next.js codebase.
    
3. **Developers** wire up props and register components for Builder.io.
    
4. **Content editors** use Builder.io’s visual editor to create pages using real components.
    
5. **Xano** (optional) provides backend data as needed for dynamic use cases.
    



****Other Notes****

**How the Builder AI should use our design system:**

- **Our components are stored in:**  
    `src/devlink/components/`  
    (These are synced directly from Webflow via DevLink)
    
- **All registered components are declared in:**  
    `src/builder/registry.ts`  
    (This file maps each component with its props for use in Builder.io)
    
- **Prop patterns follow naming conventions like:**
    
    - `heading`, `subHeadline`, `description`
        
    - `buttonLabel`, `buttonLink`, `buttonVisible`
        
    - `socialIconImage`, `iconAltText`, `visible`
        
- **Use props from the design system** as defined in the registry — Builder.io AI should reference that file as the source of truth when placing or configuring components.
    
- **Use the `@/devlink/components/` alias** when referencing components in code.
    
- **Pages using these components are rendered via Next.js** using dynamic Builder routes. You can assume a catch-all route like `pages/[...page].tsx` handles them.
    
- **Layout and styling follow Webflow conventions**, so prefer using pre-built sections and components instead of freehand layouts.
