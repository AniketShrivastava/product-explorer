#  Product Explorer Dashboard

A modern, production-style **Product Explorer Dashboard** built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.  
The application fetches products from a public API, supports filtering, sorting, pagination, favorites, dark mode, and responsive UI.

---

##  Live Demo
 (Optional) Add Vercel / Netlify link here

---

##  Tech Stack

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Fake Store API**
- **LocalStorage** (Favorites persistence)

---

## Features

###  Core Features

-  **Product Listing Page**
  - Fetches data from public API
  - Responsive product grid
  - Loading skeleton & error handling

-  **Search & Filtering**
  - Search by product title (client-side)
  - Filter by category
  - Combined filtering logic

-  **Product Details Page**
  - Dynamic route: `/products/[id]`
  - Large image, title, description, price, category
  - Always-visible close button (navigate back to home)

-  **Favorites**
  - Mark / unmark products as favorites
  - Persist favorites in `localStorage`
  - Filter to show only favorite products

-  **Responsive Design**
  - Mobile-first layout
  - Works on mobile, tablet, and desktop

---

###  Bonus Features

-  **Server Components**
  - Data fetching done on the server
  - Client components only where interaction is required

-  **Sorting**
  - Sort by price: Low → High / High → Low

-  **Pagination**
  - Client-side pagination
  - Works seamlessly with filters & sorting

-  **Dark / Light Mode**
  - Tailwind class-based dark mode
  - Persisted in localStorage

-  **Basic Accessibility**
  - Semantic HTML
  - ARIA labels
  - Keyboard-friendly buttons

---

##  Folder Structure

src/
├── app/
│ ├── page.tsx
│ ├── layout.tsx
│ ├── loading.tsx
│ ├── error.tsx
│ └── products/
│ └── [id]/
│ └── page.tsx
│
├── components/
│ ├── product/
│ ├── filters/
│ └── ui/
│
├── hooks/
│ └── useFavorites.ts
│
├── lib/
│ └── api.ts
│
├── types/
│ └── product.ts
│
└── styles/
└── globals.css

## Install dependencies
npm install


## Run development server
npm run dev
Open  http://localhost:3000