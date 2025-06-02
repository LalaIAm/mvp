# Cursor Rules for TarotLyfe

This document outlines the coding standards and style guidelines for all developers contributing to the TarotLyfe project. Adhering to these rules ensures consistency, readability, maintainability, and high quality across the codebase.

## 1. General Principles

*   **Readability over Performance:** Prioritize clear, understandable code. While performance is important, avoid overly complex or obscure optimizations that hinder readability.
*   **DRY (Don't Repeat Yourself):** Avoid duplicating code. Abstract common logic into reusable functions, components, or modules.
*   **Bug-Free & Fully Functional:** All code must be thoroughly tested and meet the specified functionality requirements.
*   **Completeness:** Leave no `TODO` comments, placeholders, or missing pieces in committed code. Ensure all requested functionality is fully implemented.
*   **Conciseness:** Minimize unnecessary prose, comments, or redundant code.

*NEVER USE TYPESCRIPT!!!! WE ONLY USE JAVASCRIPT!!!!*

## 2. Naming Conventions

Consistency in naming is crucial for navigating the codebase.

*   **Variables & Constants:** Use `camelCase` for variable and constant names. They should be descriptive and reflect their purpose.
    ```javascript
    // Good
    const userName = "Jane Doe";
    let totalCount = 0;
    const MAX_RETRIES = 3; // Use SCREAMING_SNAKE_CASE for global constants

    // Bad
    const u = "Jane Doe";
    let tc = 0;
    ```

*   **Functions & Methods:** Use `camelCase`. Event handler functions **must** be prefixed with `handle` (e.g., `handleClick`, `handleSubmit`, `handleKeyDown`).
    ```javascript
    // Good
    const calculateTotalPrice = (items: Item[]): number => { /* ... */ };
    const handleClick = (event: React.MouseEvent) => { /* ... */ };
    const handleSubmitForm = (data: FormData) => { /* ... */ };

    // Bad
    function getTotal() { /* ... */ }
    const click = () => { /* ... */ };
    ```

*   **React Components:** Use `PascalCase` for all React component names and their corresponding file names.
    ```javascript
    // Good
    import { Button } from "./Button";
    const UserProfileCard = () => { /* ... */ };

    // Bad
    const userProfileCard = () => { /* ... */ };
    ```

*   **Files & Folders:**
    *   Folders: Use `kebab-case` (e.g., `user-management`, `tarot-readings`).
    *   React Component Files: Use `PascalCase` (e.g., `Button.jsx`, `UserProfileCard.tsx`).
    *   Utility/Hook Files: Use `camelCase` (e.g., `apiService.js`, `useAuth.ts`).

## 3. Code Structure & Syntax

*   **Early Returns:** Use early returns to reduce nesting and improve readability, especially in conditional logic.
    ```javascript
    // Good
    const processData = (data: Data | null) => {
        if (!data) {
            return null; // Early return
        }
        // ... process data
        return processedData;
    };

    // Bad
    const processData = (data: Data | null) => {
        if (data) {
            // ... process data
            return processedData;
        } else {
            return null;
        }
    };
    ```

*   **Function Declarations:** Prefer `const` for function declarations using arrow functions, especially for React components and utility functions. 
    ```javascript
    // Good (for React components and general functions)
    const MyComponent: React.FC<MyComponentProps> = ({ prop1 }) => {
        // ...
    };

    const calculateSum = (a: number, b: number): number => {
        return a + b;
    };

    // Bad
    function calculateSum(a, b) {
        return a + b;
    }
    ```

*   **Imports:** Organize imports alphabetically and group them (e.g., external libraries, internal components, local files).

*   **Component Structure (Frontend):** Adhere to the Atomic Design principles and the specified folder structure:
    ```
    src/
    |--- components/
    | |--- atoms/
    | |--- molecules/
    | \--- organisms/
    |--- features/
    | |--- auth/
    | |--- tarot/
    | |--- journal/
    | \--- subscription/
    |--- store/
    |--- hooks/
    |--- utils/
    |--- assets/
    ```

## 4. Styling Guidelines (Tailwind CSS)

*   **Exclusive Use of Tailwind:** All styling for HTML elements **must** be done using Tailwind CSS classes. Avoid writing custom CSS files (`.css`, `.scss`) or using inline `<style>` tags.
    ```html
    <!-- Good -->
    <div className="flex items-center justify-center bg-purple-500 p-4 rounded-lg">
        <p className="text-white font-bold">Hello Tailwind!</p>
    </div>

    <!-- Bad -->
    <div style="display: flex; align-items: center;">
        <p class="my-custom-text">Hello CSS!</p>
    </div>
    <style>
        .my-custom-text { color: red; }
    </style>
    ```

*   **Conditional Classes:** Use the `:` syntax for conditional Tailwind classes whenever possible, instead of ternary operators within `className`.
    ```html
    <!-- Good -->
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            className={isActive ? "opacity-100" : "opacity-50 cursor-not-allowed"}>
        Click Me
    </button>

    <!-- Bad -->
    <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isActive ? "opacity-100" : "opacity-50 cursor-not-allowed"}`}>
        Click Me
    </button>
    ```

*   **Custom Design System Adherence:** Always refer to and use the defined custom design system (color palette, typography, spacing, etc.) configured in `tailwind.config.js`.

## 5. Accessibility (A11y)

Accessibility is a first-class citizen. All interactive elements must include appropriate ARIA attributes and support keyboard navigation.

*   **Interactive Elements:** For elements like `div` or `span` used as buttons or links, ensure they have:
    *   `tabIndex="0"`: Makes the element focusable via keyboard.
    *   `role`: Specifies the semantic meaning (e.g., `role="button"`, `role="link"`).
    *   `aria-label`: Provides a descriptive label for screen readers.
    *   `onClick` and `onKeyDown`: Ensure both mouse and keyboard interactions are handled.
    ```html
    <!-- Good -->
    <div
        tabIndex={0}
        role="button"
        aria-label="Close notification"
        onClick={handleCloseNotification}
        onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
                handleCloseNotification();
            }
        }}
        className="cursor-pointer"
    >
        X
    </div>
    ```

*   **Form Elements:** Use `htmlFor` with `id` for labels, `aria-describedby` for error messages, and `aria-invalid` for validation states.

*   **Image Alt Text:** All `<img>` tags must include a meaningful `alt` attribute.

*   **WCAG 2.1 AA Compliance:** Strive for compliance with WCAG 2.1 AA guidelines across the entire application.

## 6. Error Handling & Logging

*   **Frontend Error Boundaries:** Implement React Error Boundaries at appropriate levels to catch and display UI errors gracefully.
*   **Standardized Error Responses:** Backend APIs should return consistent error response formats (e.g., `{
    "message": "Error description",
    "code": "ERROR_CODE",
    "details": []
}`).
*   **Logging:** Use a consistent logging library (e.g., Winston for Node.js, console for frontend development, Sentry for production error tracking). Log relevant contextual information (user ID, request ID, timestamp, error stack).

## 7. Testing Requirements

*   **Unit Tests (Jest, React Testing Library):**
    *   All critical functions and utility modules must have unit test coverage.
    *   React components should be tested using React Testing Library, focusing on user interactions and component behavior rather than internal implementation details.
*   **Integration Tests (Jest, Supertest):**
    *   Backend API endpoints should have integration tests using Jest and Supertest to verify correct data flow and business logic.
*   **End-to-End Tests (Cypress):**
    *   Critical user flows (e.g., registration, login, tarot reading, journaling, subscription upgrade) must have comprehensive E2E test coverage.
    *   Cross-browser testing (Chrome, Firefox, Safari, Edge, mobile browsers) is required for E2E tests.

## 8. Performance Considerations (Coding Level)

*   **Code Splitting:** Implement route-based code splitting for optimal performance, especially for larger feature modules.
*   **Lazy Loading:** Use `React.lazy` and `Suspense` for lazy loading components that are not immediately needed.
*   **Efficient Data Fetching:** Leverage RTK Query's caching and revalidation mechanisms to minimize unnecessary API calls.
*   **Memoization:** Use `React.memo`, `useMemo`, and `useCallback` where appropriate to prevent unnecessary re-renders of components and expensive computations.

## 9. Documentation Standards

*   **Inline Comments:** Use comments for complex logic, non-obvious code, or to explain design decisions.
*   **JSDoc/TSDoc:** Use JSDoc or TSDoc for documenting functions, components, and types, especially for public APIs or reusable modules.
*   **READMEs:** Each major feature or module should have a `README.md` explaining its purpose, how to use it, and any specific considerations.
*   **API Documentation:** Maintain up-to-date OpenAPI (Swagger) documentation for all backend API endpoints.

By adhering to these cursor rules, we will collectively build a high-quality, maintainable, and scalable TarotLyfe platform.

*Don't forget to create a new GIT BRANCH FOR ANY MAJOR FEATURES*

ALWAYS COMMIT AND PUSH ANY CHANGES TO THE GITHUB REPOSITORY!!!!

- If you need help implementing something, don't forget to check the documentation with Context7!!!!