# AI Chat Assistant Documentation

## Table of Contents
- [Overview](#overview)
- [Architecture](#architecture)
- [Components](#components)
- [API Integration](#api-integration)
- [Styling Guide](#styling-guide)
- [State Management](#state-management)
- [Error Handling](#error-handling)
- [Performance Optimization](#performance-optimization)
- [Testing](#testing)
- [Security](#security)

## Overview

The AI Chat Assistant is a Next.js application that provides a real-time chat interface powered by OpenAI's API. It supports markdown formatting, link parsing, and maintains chat history using OpenAI's thread system.

## Architecture

### Project Structure
```
src/
├── components/          # React components
├── pages/              # Next.js pages and API routes
├── styles/             # Global styles and Tailwind configuration
├── types/              # TypeScript type definitions
└── utils/              # Utility functions and helpers
```

### Key Technologies
- Next.js 15.2.1
- React 19.0.0
- OpenAI API v4.86.2
- TypeScript 5
- Tailwind CSS 4

## Components

### ChatBox Component
The main chat interface component (`src/components/ChatBox.tsx`).

#### Props
None

#### State
```typescript
interface State {
  messages: Message[];
  input: string;
  threadId: string | null;
  isLoading: boolean;
}
```

#### Key Functions
- `handleSubmit`: Processes and sends messages to the OpenAI API
- `parseLinks`: Converts markdown links to clickable elements
- `scrollToBottom`: Automatically scrolls to the latest message

## API Integration

### OpenAI Configuration
Located in `src/pages/api/chat.ts`

```typescript
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
```

### API Endpoints

#### POST /api/chat
Handles chat message processing and OpenAI communication.

Request Body:
```typescript
{
  message: string;
  threadId?: string;
}
```

Response:
```typescript
{
  messages: Message[];
  threadId: string;
}
```

## Styling Guide

### Theme Configuration
The application uses a dark theme by default with the following color scheme:

```css
--background: #0a0a0a
--foreground: #ededed
--chat-bg: #111111
--border-color: rgb(31 41 55)
```

### Component Classes
- Chat container: `flex flex-col h-[700px] w-full max-w-3xl`
- Message bubbles: `max-w-[80%] rounded-2xl p-4 shadow-sm`
- Input field: `flex-1 px-4 py-3 rounded-xl border`

## State Management

### Message Structure
```typescript
interface Message {
  role: 'user' | 'assistant';
  content: [{ text: { value: string } }];
}
```

### Thread Management
- Threads are created and maintained via OpenAI's API
- Thread IDs are stored in component state
- Messages are fetched and updated based on thread context

## Error Handling

### API Errors
```typescript
try {
  // API calls
} catch (error) {
  console.error('Error:', error);
  // Error handling logic
}
```

### Common Error Scenarios
1. API Key validation
2. Network connectivity issues
3. Rate limiting
4. Invalid message format

## Performance Optimization

### Implemented Optimizations
1. Message batching
2. Debounced input handling
3. Optimized re-renders
4. Lazy loading of components

### Best Practices
- Use `useCallback` for event handlers
- Implement proper cleanup in `useEffect`
- Optimize images and assets
- Minimize bundle size

## Testing

### Unit Tests
Create tests for:
- Message parsing
- Link formatting
- Error handling
- Component rendering

### Integration Tests
Test:
- API communication
- Thread management
- User interactions
- Error scenarios

## Security

### Environment Variables
Required variables:
```env
OPENAI_API_KEY=your_api_key_here
OPENAI_ASSISTANT_ID=your_assistant_id_here
```

### Security Best Practices
1. API key protection
   - Never expose keys in client-side code
   - Use environment variables
   - Implement rate limiting

2. Input Validation
   - Sanitize user input
   - Validate message format
   - Implement length restrictions

3. Error Handling
   - Never expose sensitive information in error messages
   - Log errors securely
   - Implement proper error boundaries

### CORS Configuration
```typescript
// next.config.ts
{
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          // Add other necessary headers
        ],
      },
    ]
  }
}
```

## Deployment

### Vercel Deployment
1. Configure environment variables in Vercel dashboard
2. Enable automatic deployments
3. Configure custom domains if needed

### Production Considerations
- Enable caching where appropriate
- Configure proper logging
- Set up monitoring
- Implement analytics

## Updates and Maintenance

### Version Control
- Follow semantic versioning
- Maintain a changelog
- Document breaking changes

### Regular Maintenance
- Update dependencies
- Monitor API usage
- Review security advisories
- Optimize performance

## Support

For technical support or questions:
1. Create an issue in the GitHub repository
2. Review existing documentation
3. Check the OpenAI API documentation

## Contributing

See CONTRIBUTING.md for detailed contribution guidelines.

## License

This project is licensed under the MIT License. See LICENSE file for details.