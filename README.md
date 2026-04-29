# CurioLab

CurioLab is a Next.js app for bite-sized psychology tests, quick mind games, and short lab notes.

## Features

- Psychology-style tests for mood, thinking style, social energy, decisions, and rest.
- Quick browser games for reaction speed, memory, and attention.
- Lab notes that explain the ideas behind the content.
- Responsive UI built with reusable cards, navigation, and content data modules.

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- ESLint

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project Structure

```text
src/app/          App Router pages and global styles
src/components/   Shared UI and interactive game/test components
src/data/         Content definitions for tests, games, and notes
src/types/        Shared TypeScript types
```

## Notes

Environment files are ignored by Git. Use `.env.example` or `.env.local.example` for committed examples if needed.
