# CurioLab

CurioLab is a Next.js app for evidence-informed self-assessments, quick mind games, and short lab notes.

## Features

- CurioLab Assessments for personality, well-being, stress, social energy, decision style, and motivation.
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
src/components/   Shared UI and interactive assessment/game components
src/data/         Content definitions for assessments, games, and notes
src/types/        Shared TypeScript types
```

## Notes

Environment files are ignored by Git. Use `.env.example` or `.env.local.example` for committed examples if needed.
