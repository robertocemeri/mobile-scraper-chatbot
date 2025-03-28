# AI Chat Assistant

A modern chat interface built with Next.js that connects to OpenAI's API for intelligent conversations. This project features a sleek dark-mode design, real-time responses, and a user-friendly interface.

## Features

- 🎨 Modern dark mode UI with Tailwind CSS
- 🤖 OpenAI API integration
- ⚡ Real-time chat interactions
- 💬 Markdown link support
- 🔄 Loading states and animations
- 📱 Responsive design
- ⌨️ TypeScript support

## Prerequisites

Before you begin, ensure you have:
- Node.js 18.18.0 or higher
- An OpenAI API key
- An OpenAI Assistant ID

## Environment Setup

1. Create a `.env` file in the root directory
2. Add your OpenAI credentials:
```env
OPENAI_API_KEY=your_api_key_here
OPENAI_ASSISTANT_ID=your_assistant_id_here
```

## Getting Started

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── src/
│   ├── components/
│   │   └── ChatBox.tsx    # Main chat interface component
│   ├── pages/
│   │   ├── api/
│   │   │   └── chat.ts    # OpenAI API endpoint
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   └── index.tsx      # Home page
│   └── styles/
│       └── globals.css    # Global styles and Tailwind imports
├── public/
├── .env                   # Environment variables (create this)
└── package.json
```

## Technology Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [OpenAI API](https://openai.com/blog/openai-api) - AI integration
- [Geist Font](https://vercel.com/font) - Typography

## Development

The project uses:
- ESLint for code linting
- Prettier for code formatting
- TypeScript for type checking
- Next.js API routes for backend functionality

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to a GitHub repository
2. Import your repository to Vercel
3. Add your environment variables in Vercel's project settings
4. Deploy!

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [OpenAI API Documentation](https://platform.openai.com/docs/api-reference)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)