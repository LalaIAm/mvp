# Tech Context: TarotLyfe

## Technologies Used

### Frontend Stack
- **React 18+**: Component-based UI framework for web and desktop
- **Vite**: Fast build tool and development server
- **Redux Toolkit**: State management with RTK Query for API calls
- **React Router**: Client-side routing and navigation
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Framer Motion**: Animation library for smooth micro-interactions
- **React Hook Form**: Form management and validation
- **React Testing Library**: Component testing framework
- **Cypress**: End-to-end testing for critical user flows

### Backend Stack
- **Node.js 18+**: JavaScript runtime environment
- **Express.js**: Web application framework for REST APIs
- **PostgreSQL**: Primary relational database for user data
- **Prisma**: Type-safe ORM for database operations and migrations
- **Redis**: In-memory cache for sessions and AI response caching
- **JWT**: JSON Web Tokens for authentication with refresh token support
- **Bcrypt**: Password hashing and security
- **AWS S3**: File storage for user exports and assets
- **Jest + Supertest**: Backend testing framework

### Desktop Application
- **Electron**: Cross-platform desktop app framework
- **SQLite**: Local database for offline journaling and data sync
- **Node.js Integration**: Shared codebase with web application

### External Services
- **OpenAI GPT-4**: AI-powered tarot interpretations and journaling prompts
- **Stripe**: Payment processing and subscription management
- **SendGrid**: Email delivery for authentication and notifications

### Development Tools
- **ESLint**: Code linting and style enforcement
- **Prettier**: Code formatting
- **Husky**: Git hooks for pre-commit validation
- **GitHub Actions**: CI/CD pipeline for automated testing and deployment

## Development Setup

### Environment Requirements
```bash
# Required versions
Node.js: 18.x or higher
npm: 9.x or higher
PostgreSQL: 14.x or higher
Redis: 6.x or higher

# Development tools
Git: Latest stable
VSCode: Recommended IDE
Docker: For containerized development (optional)
```

### Project Structure
```
tarot-lyfe/
├── frontend/                 # React web application
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── backend/                  # Node.js API server
│   ├── src/
│   ├── prisma/
│   ├── package.json
│   └── .env.example
├── desktop/                  # Electron application
│   ├── src/
│   ├── package.json
│   └── electron.config.js
├── shared/                   # Shared utilities and types
│   ├── types/
│   └── utils/
└── docs/                     # Documentation
    ├── api/
    └── deployment/
```

### Environment Variables
```bash
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/tarotlyfe"
REDIS_URL="redis://localhost:6379"

# Authentication
JWT_SECRET="your-jwt-secret-key"
JWT_REFRESH_SECRET="your-refresh-secret-key"
JWT_EXPIRE_TIME="15m"
JWT_REFRESH_EXPIRE_TIME="7d"

# External APIs
OPENAI_API_KEY="your-openai-api-key"
STRIPE_SECRET_KEY="your-stripe-secret-key"
STRIPE_PUBLISHABLE_KEY="your-stripe-publishable-key"
SENDGRID_API_KEY="your-sendgrid-api-key"

# AWS
AWS_ACCESS_KEY_ID="your-aws-access-key"
AWS_SECRET_ACCESS_KEY="your-aws-secret-key"
AWS_S3_BUCKET="your-s3-bucket-name"
AWS_REGION="us-east-1"

# Application
NODE_ENV="development"
PORT="3001"
FRONTEND_URL="http://localhost:3000"
CORS_ORIGIN="http://localhost:3000"
```

## Technical Constraints

### Performance Requirements
- **Page Load Time**: <3 seconds for initial load
- **API Response Time**: <500ms for standard operations
- **AI Response Time**: <5 seconds for interpretations
- **Database Query Time**: <200ms for most queries
- **Bundle Size**: <500KB initial JavaScript bundle

### Security Requirements
- **HTTPS Enforcement**: All production traffic encrypted
- **JWT Security**: Secure token storage in HTTP-only cookies
- **Input Validation**: Comprehensive sanitization and validation
- **Rate Limiting**: API endpoints protected against abuse
- **SQL Injection Prevention**: Parameterized queries via Prisma
- **XSS Protection**: Content Security Policy and sanitization
- **Data Encryption**: AES-256 encryption for sensitive journal content

### Accessibility Requirements
- **WCAG 2.1 AA Compliance**: Full accessibility standard adherence
- **Keyboard Navigation**: Complete keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Color Contrast**: Minimum 4.5:1 ratio for normal text
- **Focus Management**: Clear focus indicators and logical tab order

### Browser Compatibility
- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile 90+
- **Progressive Enhancement**: Graceful degradation for older browsers
- **Responsive Design**: Mobile-first approach with breakpoints

## Dependencies

### Frontend Dependencies
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.8.0",
  "@reduxjs/toolkit": "^1.9.3",
  "react-redux": "^8.0.5",
  "tailwindcss": "^3.2.7",
  "framer-motion": "^10.5.0",
  "react-hook-form": "^7.43.5",
  "@hookform/resolvers": "^3.0.0",
  "yup": "^1.0.2"
}
```

### Backend Dependencies
```json
{
  "express": "^4.18.2",
  "prisma": "^4.11.0",
  "@prisma/client": "^4.11.0",
  "redis": "^4.6.5",
  "jsonwebtoken": "^9.0.0",
  "bcryptjs": "^2.4.3",
  "helmet": "^6.0.1",
  "cors": "^2.8.5",
  "express-rate-limit": "^6.7.0",
  "express-validator": "^6.14.3",
  "openai": "^3.2.1",
  "stripe": "^11.15.0",
  "@sendgrid/mail": "^7.7.0",
  "aws-sdk": "^2.1329.0"
}
```

### Development Dependencies
```json
{
  "eslint": "^8.36.0",
  "prettier": "^2.8.4",
  "husky": "^8.0.3",
  "lint-staged": "^13.2.0",
  "jest": "^29.5.0",
  "supertest": "^6.3.3",
  "cypress": "^12.7.0",
  "@testing-library/react": "^14.0.0",
  "@testing-library/jest-dom": "^5.16.5"
}
```

## Tool Usage Patterns

### Development Workflow
```bash
# Start development environment
npm run dev:all          # Starts frontend, backend, and database
npm run dev:frontend     # React development server (port 3000)
npm run dev:backend      # Express API server (port 3001)
npm run dev:desktop      # Electron app development

# Testing
npm run test             # Run all tests
npm run test:unit        # Unit tests only
npm run test:integration # Integration tests
npm run test:e2e         # Cypress end-to-end tests

# Building
npm run build:frontend   # Production frontend build
npm run build:backend    # Backend compilation
npm run build:desktop    # Electron app compilation

# Database operations
npx prisma migrate dev   # Run database migrations
npx prisma generate      # Generate Prisma client
npx prisma studio        # Open database GUI
```

### Code Quality Tools
```bash
# Linting and formatting
npm run lint             # ESLint check
npm run lint:fix         # Auto-fix ESLint issues
npm run format           # Prettier formatting
npm run format:check     # Check formatting without changes

# Pre-commit hooks (via Husky)
- ESLint check on staged files
- Prettier formatting
- Type checking (if TypeScript)
- Unit test execution
```

### Debugging Setup
- **React Developer Tools**: Browser extension for React debugging
- **Redux DevTools**: State inspection and time-travel debugging
- **VSCode Debugger**: Configured for Node.js backend debugging
- **Chrome DevTools**: Network monitoring and performance profiling
- **Prisma Studio**: Database content visualization and editing

## Deployment Configuration

### Production Environment
- **Frontend**: Static hosting (Vercel/Netlify recommended)
- **Backend**: Container deployment (Docker + AWS ECS/Railway)
- **Database**: Managed PostgreSQL (AWS RDS/Railway)
- **Cache**: Managed Redis (AWS ElastiCache/Railway)
- **CDN**: CloudFlare for static asset delivery
- **Monitoring**: Sentry for error tracking, DataDog for performance

### Environment-Specific Settings
```javascript
// Configuration by environment
const config = {
  development: {
    apiUrl: 'http://localhost:3001',
    enableDebugLogs: true,
    aiCacheTTL: 300 // 5 minutes for faster testing
  },
  staging: {
    apiUrl: 'https://api-staging.tarotlyfe.com',
    enableDebugLogs: false,
    aiCacheTTL: 3600 // 1 hour
  },
  production: {
    apiUrl: 'https://api.tarotlyfe.com',
    enableDebugLogs: false,
    aiCacheTTL: 86400 // 24 hours
  }
};
