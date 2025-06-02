# Pre.dev Master Plan for TarotLyfe

## 1. Executive Summary

TarotLyfe is an innovative AI-powered personal growth platform combining tarot card readings with reflective journaling. This master plan outlines the comprehensive development roadmap for building responsive web and Electron desktop applications, a scalable backend, robust AI integration, secure user authentication, and a subtle subscription model. Our goal is to deliver a seamless, engaging, and private experience that fosters self-reflection and emotional growth.

## 2. Technical Stack Overview

This project will strictly adhere to the following technical stack:

*   **Frontend:**
    *   **React 18+:** Mandated for building the responsive web application and aligns with atomic design and component-driven architecture.
    *   **Vite:** Required as the build tool for fast development and optimized production builds.
    *   **Redux Toolkit:** Required for state management and RTK Query for API state, as per architecture preferences.
    *   **React Router:** Needed for client-side routing and navigation in the web app.
    *   **Tailwind CSS:** Required for styling and implementing the custom design system and emotional color palettes.
    *   **Framer Motion:** For implementing smooth, subtle animations and micro-interactions as per UX guidelines.
    *   **React Hook Form:** For robust form handling and validation in authentication and journaling features.
    *   **Jest & React Testing Library:** For unit and integration testing of React components.
    *   **Cypress:** For end-to-end testing of critical user flows and cross-browser compatibility.

*   **Backend:**
    *   **Node.js 18+:** Required backend runtime environment as specified in the RFP.
    *   **Express.js:** Mandated backend framework for building RESTful APIs.
    *   **PostgreSQL:** Required as the primary relational database for scalable, structured data storage.
    *   **Prisma:** ORM for type-safe database access and migrations with PostgreSQL.
    *   **Redis:** For session management and caching frequently accessed data, including AI response caching.
    *   **JWT:** For secure authentication and session management, including refresh tokens.
    *   **AWS S3:** For file storage, user exports, and asset management.
    *   **Jest & Supertest:** For unit and integration testing of backend code.

*   **Desktop Application:**
    *   **Electron:** Required for building the cross-platform desktop application with offline capabilities.
    *   **SQLite:** For local data storage and offline journaling in the Electron app.

*   **AI Services:**
    *   **OpenAI GPT-4 API:** For AI-powered tarot card interpretations, journaling prompts, and sentiment analysis.

*   **Payment Processing:**
    *   **Stripe:** For subscription and payment processing as required by the monetization model.

## 3. Architecture Overview

### 3.1 Frontend Architecture

*   **Component Structure:** Atomic design principles (atoms, molecules, organisms, templates, pages) will be strictly followed for a modular and scalable UI.
*   **State Management:** Redux Toolkit with RTK Query will manage global and API-related state, ensuring predictable state changes and efficient data fetching.
*   **Folder Structure:**

    ```
    src/
    |--- components/ (reusable UI components)
    | |--- atoms/
    | |--- molecules/
    | \--- organisms/
    |--- features/ (feature-specific modules)
    | |--- auth/
    | |--- tarot/
    | |--- journal/
    | \--- subscription/
    |--- store/ (Redux store configuration)
    |--- hooks/ (custom React hooks)
    |--- utils/ (utility functions)
    |--- assets/ (static assets)
    ```

*   **Code Splitting:** Route-based code splitting will be implemented using React Router to optimize initial page load times.
*   **Error Boundaries:** Comprehensive error handling will be implemented using React Error Boundaries to gracefully manage UI errors.

### 3.2 Backend Architecture

*   **API Design:** RESTful endpoints with consistent naming conventions (e.g., `/api/v1/users`, `/api/v1/readings`). OpenAPI documentation will be maintained.
*   **Middleware Stack:** Authentication (JWT validation), rate limiting, CORS, and request logging will be implemented as Express middleware.
*   **Database Design:** Normalized PostgreSQL schema with proper indexing for performance. Prisma ORM will be used for type-safe database interactions and migrations.
*   **Caching Strategy:** Redis will be used for session management, frequently accessed data (e.g., tarot card definitions), and AI response caching for identical card combinations.
*   **Background Jobs:** A queue system (e.g., BullMQ with Redis) will be used for asynchronous tasks like AI processing (for complex interpretations or sentiment analysis) and email notifications (e.g., password resets, subscription reminders).

### 3.3 AI Integration Architecture

*   **Prompt Engineering:** Structured prompts with consistent formatting will be used for OpenAI GPT-4 API calls to ensure high-quality and relevant interpretations.
*   **Response Caching:** AI responses for identical card combinations and contexts will be cached in Redis to reduce API costs and improve response times.
*   **Fallback Strategy:** Graceful degradation will be implemented when AI services are unavailable (e.g., displaying generic interpretations or a message indicating temporary unavailability).
*   **Rate Limiting:** User-based rate limiting for AI requests will be implemented to prevent abuse and manage API quotas.

### 3.4 Security Architecture

*   **Authentication Flow:** JWT with refresh tokens will be used for authentication, stored in secure HTTP-only cookies. OAuth 2.0 (Google) will be integrated.
*   **Data Encryption:** AES-256 encryption for sensitive data at rest (e.g., journal entries in the database). HTTPS will be enforced for data in transit.
*   **API Security:** Comprehensive input validation, SQL injection prevention (via Prisma ORM), and XSS protection will be implemented. CORS will be configured securely.
*   **Privacy by Design:** Minimal data collection, explicit consent mechanisms (GDPR compliant), and clear privacy policy will be prioritized. User content will *not* be used for AI model training.

## 4. Detailed Development Roadmap & Task Breakdown

This section outlines the development plan, breaking down each milestone into user stories and atomic implementation tasks. Dependencies are identified to maximize parallel development.

### Milestone 1: Foundation (Weeks 1-2)

**Goal:** Set up the core environment, design system, and initial authentication.

*   **User Stories & Tasks:**
    *   **Initialize Project Repository and Basic Environment Setup:**
        *   Create monorepo structure (if applicable) with `package.json`, `.gitignore`, `README.md`.
        *   Configure Vite for React frontend and Node.js/Express backend.
        *   Set up ESLint, Prettier, and Husky for code quality and pre-commit hooks.
        *   Define and document environment variables (e.g., `DATABASE_URL`, `JWT_SECRET`, `OPENAI_API_KEY`) with placeholders in `.env.example`.
        *   Configure basic CI/CD pipeline (GitHub Actions) for linting and testing.
    *   **Setup Design System and Component Library:**
        *   Configure Tailwind CSS with custom theme (color palette, typography, spacing).
        *   Implement atomic design folder structure (`atoms`, `molecules`, `organisms`).
        *   Create initial `Button`, `Input`, `Typography` (atoms) components.
        *   Document design system usage and component API.
    *   **User Registration with Email and Password:**
        *   Frontend: Create registration form using React Hook Form with validation.
        *   Backend: Implement `/api/v1/auth/register` endpoint to handle user creation, password hashing (Bcrypt), and database storage (Prisma/PostgreSQL).
        *   Integrate email verification service (SendGrid) for sending verification emails.
    *   **Email Verification Process:**
        *   Backend: Implement email verification token generation and validation endpoint.
        *   Frontend: Create email verification success/failure pages.
    *   **User Login with Email and Password:**
        *   Frontend: Create login form with React Hook Form.
        *   Backend: Implement `/api/v1/auth/login` endpoint for credential validation and JWT generation.
        *   Implement secure HTTP-only cookie handling for JWT and refresh tokens.
    *   **Google OAuth Login Integration:**
        *   Backend: Configure Google OAuth 2.0 strategy for Passport.js (or similar) to handle authentication flow.
        *   Frontend: Implement Google login button and handle redirects.
    *   **Password Reset Flow:**
        *   Frontend: Implement 