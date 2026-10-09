# Your CR — আপনার সেমিস্টার, গুছিয়ে।

Your CR is a comprehensive semester management platform designed for students and Class Representatives (CRs) in Bangladesh. Manage classes, exams, assignments, and notices all in one organized place.

## 🚀 Tech Stack

This project is built with modern, high-performance web technologies:

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [Shadcn UI](https://ui.shadcn.com/) (Accessible & Customizable)
- **Language:** [TypeScript](https://www.typescriptlang.org/) for strict type safety
- **Icons:** [Lucide React](https://lucide.dev/)
- **Linting & Formatting:** ESLint & Prettier
- **Deployment:** Cloudflare Pages (via OpenNext)

## 📁 Project Structure (Strict Architecture)

We follow a modular, scalable architecture to keep the codebase clean:

```
src/
├── actions/         # Next.js Server Actions (Forms & Mutations)
├── services/        # External API fetch calls (Axios/Fetch)
├── validations/     # Zod/Yup Schemas for form validation
├── components/      # UI Components (Grouped strictly by feature)
│   ├── auth/        # Auth-specific client components
│   ├── dashboard/   # Dashboard-specific components (Charts, Sidebar)
│   ├── main/        # Public landing page components
│   ├── layout/      # Global layout elements (Navbar, Footer)
│   ├── shared/      # Reusable components across routes
│   └── ui/          # Generic Shadcn or base components
├── app/             # Next.js App Router (Pages & Layouts)
│   ├── (auth)/      # Route Group for Authentication
│   ├── (dashboard)/ # Route Group for User Dashboard
│   └── (main)/      # Route Group for Public Landing Pages
```

## 🛠️ Code Conventions & Best Practices

1. **Units (rem vs px):** Always use `rem` for margins, paddings, and typography to ensure accessibility.
2. **Path Aliasing:** Use `@/` for absolute imports (e.g., `@/components/ui/button`).
3. **Container:** Use the `.container` class from `globals.css` instead of hardcoding max-widths and paddings.
4. **Icons:** Use `lucide-react` instead of raw SVGs for standard UI icons.

## 💻 Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
