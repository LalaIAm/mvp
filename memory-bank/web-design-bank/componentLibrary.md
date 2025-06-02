# Component Library: TarotLyfe

## Reusable UI Components

### Button Components

#### Primary Button
```css
.btn-primary {
  /* Base styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  
  /* Typography */
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2;
  text-decoration: none;
  
  /* Spacing */
  padding: var(--space-3) var(--space-6);
  min-height: 44px; /* Accessibility requirement */
  min-width: 44px;
  
  /* Visual */
  background: var(--color-primary);
  color: #FFFFFF;
  border: 2px solid var(--color-primary);
  border-radius: 6px;
  
  /* Interactions */
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  /* Accessibility */
  outline: none;
}

.btn-primary:hover {
  background: var(--color-primary-dark);
  border-color: var(--color-primary-dark);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(45, 27, 105, 0.3);
}

.btn-primary:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(45, 27, 105, 0.2);
}

.btn-primary:disabled {
  background: var(--color-disabled);
  border-color: var(--color-disabled);
  color: rgba(255, 255, 255, 0.7);
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}
```

#### Secondary Button
```css
.btn-secondary {
  /* Inherits most styles from primary */
  background: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-secondary);
}

.btn-secondary:hover {
  background: var(--color-secondary-light);
  border-color: var(--color-secondary-dark);
  color: var(--color-primary-dark);
}

.btn-secondary:focus-visible {
  outline: 2px solid var(--color-secondary);
  outline-offset: 2px;
}
```

#### Ghost Button
```css
.btn-ghost {
  background: transparent;
  color: var(--color-text-primary);
  border: 2px solid transparent;
  padding: var(--space-2) var(--space-4);
}

.btn-ghost:hover {
  background: var(--color-hover);
  color: var(--color-primary);
}
```

#### Button Sizes
```css
.btn-sm {
  padding: var(--space-2) var(--space-4);
  font-size: 0.875rem;
  min-height: 36px;
}

.btn-lg {
  padding: var(--space-4) var(--space-8);
  font-size: 1.125rem;
  min-height: 52px;
}

.btn-icon-only {
  padding: var(--space-3);
  width: 44px;
  height: 44px;
}
```

### Input Components

#### Text Input
```css
.input-text {
  /* Base styles */
  display: block;
  width: 100%;
  
  /* Typography */
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  
  /* Spacing */
  padding: var(--space-3) var(--space-4);
  
  /* Visual */
  background: var(--color-surface);
  color: var(--color-text-primary);
  border: 2px solid var(--color-secondary-light);
  border-radius: 6px;
  
  /* Interactions */
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  
  /* Accessibility */
  outline: none;
}

.input-text::placeholder {
  color: var(--color-text-light);
}

.input-text:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(45, 27, 105, 0.1);
}

.input-text:disabled {
  background: var(--color-background);
  border-color: var(--color-disabled);
  color: var(--color-disabled);
  cursor: not-allowed;
}

.input-text:invalid {
  border-color: var(--color-error);
}

.input-text:invalid:focus {
  box-shadow: 0 0 0 3px rgba(216, 85, 85, 0.1);
}
```

#### Form Field Container
```css
.form-field {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
}

.form-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-primary);
  cursor: pointer;
}

.form-label.required::after {
  content: " *";
  color: var(--color-error);
}

.form-help {
  font-size: 0.75rem;
  color: var(--color-text-secondary);
  line-height: 1.4;
}

.form-error {
  font-size: 0.75rem;
  color: var(--color-error);
  line-height: 1.4;
  display: flex;
  align-items: center;
  gap: var(--space-1);
}
```

#### Textarea
```css
.textarea {
  /* Inherits from input-text */
  min-height: 120px;
  resize: vertical;
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
}
```

#### Select Input
```css
.select {
  /* Inherits from input-text */
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right var(--space-3) center;
  background-repeat: no-repeat;
  background-size: 16px 16px;
  padding-right: var(--space-10);
  cursor: pointer;
}
```

### Card Components

#### Base Card
```css
.card {
  /* Structure */
  display: flex;
  flex-direction: column;
  
  /* Visual */
  background: var(--color-surface);
  border: 1px solid var(--color-secondary-light);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(45, 27, 105, 0.08);
  
  /* Spacing */
  padding: var(--space-6);
  
  /* Interactions */
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(45, 27, 105, 0.12);
}

.card-header {
  margin-bottom: var(--space-4);
  padding-bottom: var(--space-4);
  border-bottom: 1px solid var(--color-secondary-light);
}

.card-title {
  font-family: 'Crimson Pro', serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0;
}

.card-subtitle {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  margin-top: var(--space-1);
}

.card-content {
  flex: 1;
  color: var(--color-text-primary);
  line-height: 1.6;
}

.card-footer {
  margin-top: var(--space-4);
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-secondary-light);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-2);
}
```

#### Tarot Card Component
```css
.tarot-card {
  /* Inherits from .card */
  aspect-ratio: 2/3;
  max-width: 280px;
  padding: var(--space-4);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.tarot-card-image {
  width: 100%;
  height: 60%;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: var(--space-3);
  background: var(--color-background);
  display: flex;
  align-items: center;
  justify-content: center;
}

.tarot-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tarot-card-name {
  font-family: 'Crimson Pro', serif;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  color: var(--color-primary);
  margin-bottom: var(--space-2);
}

.tarot-card-position {
  font-size: 0.75rem;
  text-align: center;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.tarot-card.reversed {
  transform: rotate(180deg);
}

.tarot-card.selected {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px var(--color-primary);
}
```

### Modal Components

#### Modal Overlay
```css
.modal-overlay {
  /* Positioning */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  
  /* Visual */
  background: rgba(44, 44, 44, 0.6);
  backdrop-filter: blur(4px);
  
  /* Interactions */
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  
  /* Layout */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-4);
}

.modal-overlay.open {
  opacity: 1;
  visibility: visible;
}
```

#### Modal Content
```css
.modal-content {
  /* Structure */
  background: var(--color-surface);
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(45, 27, 105, 0.3);
  
  /* Sizing */
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  
  /* Layout */
  display: flex;
  flex-direction: column;
  
  /* Interactions */
  transform: scale(0.9) translateY(20px);
  transition: transform 0.3s ease;
}

.modal-overlay.open .modal-content {
  transform: scale(1) translateY(0);
}

.modal-header {
  padding: var(--space-6) var(--space-6) var(--space-4);
  border-bottom: 1px solid var(--color-secondary-light);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-title {
  font-family: 'Crimson Pro', serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0;
}

.modal-close {
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-1);
  border-radius: 4px;
  color: var(--color-text-secondary);
  transition: background-color 0.2s ease;
}

.modal-close:hover {
  background: var(--color-hover);
  color: var(--color-text-primary);
}

.modal-body {
  padding: var(--space-6);
  flex: 1;
  overflow-y: auto;
}

.modal-footer {
  padding: var(--space-4) var(--space-6) var(--space-6);
  border-top: 1px solid var(--color-secondary-light);
  display: flex;
  justify-content: flex-end;
  gap: var(--space-3);
}
```

### Navigation Components

#### Primary Navigation
```css
.nav-primary {
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-secondary-light);
  padding: var(--space-4) 0;
}

.nav-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-4);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  font-family: 'Crimson Pro', serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-primary);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.nav-menu {
  display: flex;
  gap: var(--space-6);
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-primary);
  text-decoration: none;
  padding: var(--space-2) var(--space-3);
  border-radius: 6px;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.nav-link:hover {
  background: var(--color-hover);
  color: var(--color-primary);
}

.nav-link.active {
  background: var(--color-primary);
  color: #FFFFFF;
}
```

#### Breadcrumb Navigation
```css
.breadcrumb {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-4);
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.breadcrumb-link {
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color 0.2s ease;
}

.breadcrumb-link:hover {
  color: var(--color-primary);
}

.breadcrumb-separator {
  color: var(--color-text-light);
  font-size: 0.75rem;
}
```

## Emphasis Patterns

### Shadow System
```css
/* Elevation levels */
.shadow-sm {
  box-shadow: 0 1px 2px rgba(45, 27, 105, 0.05);
}

.shadow-md {
  box-shadow: 0 4px 8px rgba(45, 27, 105, 0.1);
}

.shadow-lg {
  box-shadow: 0 8px 24px rgba(45, 27, 105, 0.15);
}

.shadow-xl {
  box-shadow: 0 20px 60px rgba(45, 27, 105, 0.25);
}

/* Interactive shadows */
.shadow-hover {
  transition: box-shadow 0.3s ease;
}

.shadow-hover:hover {
  box-shadow: 0 8px 32px rgba(45, 27, 105, 0.2);
}
```

### Gradient Patterns
```css
.gradient-primary {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
}

.gradient-secondary {
  background: linear-gradient(135deg, var(--color-secondary-light) 0%, var(--color-secondary) 100%);
}

.gradient-hero {
  background: linear-gradient(135deg, var(--color-background) 0%, var(--color-secondary-light) 100%);
}

.gradient-text {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary-dark) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Hover and Focus States
```css
.hover-lift {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(45, 27, 105, 0.15);
}

.hover-glow {
  transition: box-shadow 0.3s ease;
}

.hover-glow:hover {
  box-shadow: 0 0 20px rgba(45, 27, 105, 0.3);
}

.focus-ring:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  border-radius: 4px;
}
```

## Accessibility Features

### ARIA Roles and Labels
```css
/* Screen reader only content */
.sr-only {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

/* Focus management */
.focus-trap {
  position: relative;
}

.focus-trap:focus {
  outline: none;
}

/* Skip links */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--color-primary);
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 4px;
  z-index: 1000;
  transition: top 0.3s ease;
}

.skip-link:focus {
  top: 6px;
}
```

### Focus Indicators
```css
/* Enhanced focus indicators for better visibility */
.enhanced-focus:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(45, 27, 105, 0.2);
}

/* Focus within containers */
.focus-within:focus-within {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(45, 27, 105, 0.1);
}
```

### Keyboard Interactions
```css
/* Interactive elements keyboard support */
.keyboard-interactive {
  cursor: pointer;
}

.keyboard-interactive:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Custom checkbox/radio accessibility */
.custom-checkbox {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  cursor: pointer;
}

.custom-checkbox input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.custom-checkbox .checkmark {
  width: 20px;
  height: 20px;
  border: 2px solid var(--color-secondary);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.custom-checkbox input:checked + .checkmark {
  background: var(--color-primary);
  border-color: var(--color-primary);
}

.custom-checkbox input:focus-visible + .checkmark {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

### High Contrast Support
```css
@media (prefers-contrast: high) {
  .btn-primary {
    border-width: 3px;
  }
  
  .input-text {
    border-width: 3px;
  }
  
  .card {
    border-width: 2px;
  }
  
  .nav-link.active {
    outline: 2px solid currentColor;
    outline-offset: -2px;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Loading States
```css
.loading {
  position: relative;
  color: transparent;
  pointer-events: none;
}

.loading::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin: -10px 0 0 -10px;
  border: 2px solid var(--color-primary);
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.skeleton {
  background: linear-gradient(90deg, var(--color-background) 25%, var(--color-secondary-light) 50%, var(--color-background) 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
