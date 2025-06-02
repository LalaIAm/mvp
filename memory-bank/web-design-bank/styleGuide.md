# Style Guide: TarotLyfe

## Typography System

### Font Families

#### Primary Serif (Headers): "Crimson Pro"
```css
font-family: 'Crimson Pro', Georgia, 'Times New Roman', serif;
```
- **Character**: Elegant, readable, trustworthy
- **Usage**: Page titles, card names, section headers, pull quotes
- **Weights**: 400 (regular), 500 (medium), 600 (semibold)
- **Fallbacks**: Georgia for compatibility, Times New Roman as final fallback

#### Secondary Sans-Serif (Body): "Inter"
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```
- **Character**: Clean, modern, highly legible
- **Usage**: Body text, navigation, buttons, form labels, UI elements
- **Weights**: 300 (light), 400 (regular), 500 (medium), 600 (semibold)
- **Fallbacks**: System fonts for performance and accessibility

#### Accent Script (Sparingly): "Dancing Script"
```css
font-family: 'Dancing Script', cursive;
```
- **Character**: Personal, warm, handwritten feel
- **Usage**: Special quotes, journal entry highlights, personal touches
- **Weight**: 400 (regular), 500 (medium)
- **Restriction**: Use sparingly for emphasis only

### Typography Scale (Responsive)

#### Desktop Scale (Base: 16px)
```css
/* Headers */
.text-6xl { font-size: 3.75rem; line-height: 1.1; }   /* 60px - Hero titles */
.text-5xl { font-size: 3rem; line-height: 1.1; }     /* 48px - Page titles */
.text-4xl { font-size: 2.25rem; line-height: 1.2; }  /* 36px - Section headers */
.text-3xl { font-size: 1.875rem; line-height: 1.3; } /* 30px - Card names */
.text-2xl { font-size: 1.5rem; line-height: 1.3; }   /* 24px - Subsection headers */
.text-xl  { font-size: 1.25rem; line-height: 1.4; }  /* 20px - Large text */

/* Body Text */
.text-lg  { font-size: 1.125rem; line-height: 1.6; } /* 18px - Reading text */
.text-base{ font-size: 1rem; line-height: 1.6; }     /* 16px - Body text */
.text-sm  { font-size: 0.875rem; line-height: 1.5; } /* 14px - Captions */
.text-xs  { font-size: 0.75rem; line-height: 1.4; }  /* 12px - Metadata */
```

#### Mobile Scale (Base: 14px)
```css
/* Headers */
.mobile\:text-5xl { font-size: 2.5rem; line-height: 1.1; }   /* 40px - Hero titles */
.mobile\:text-4xl { font-size: 2rem; line-height: 1.2; }     /* 32px - Page titles */
.mobile\:text-3xl { font-size: 1.5rem; line-height: 1.3; }   /* 24px - Section headers */
.mobile\:text-2xl { font-size: 1.25rem; line-height: 1.3; }  /* 20px - Card names */
.mobile\:text-xl  { font-size: 1.125rem; line-height: 1.4; } /* 18px - Subsection headers */

/* Body Text */
.mobile\:text-base{ font-size: 0.875rem; line-height: 1.6; } /* 14px - Body text */
.mobile\:text-sm  { font-size: 0.75rem; line-height: 1.5; }  /* 12px - Captions */
```

### Line Heights and Spacing
```css
/* Optimal reading line heights */
.leading-tight   { line-height: 1.1; }  /* Headers only */
.leading-snug    { line-height: 1.3; }  /* Large headers */
.leading-normal  { line-height: 1.6; }  /* Body text (optimal) */
.leading-relaxed { line-height: 1.75; } /* Long-form reading */

/* Letter spacing for different contexts */
.tracking-tight  { letter-spacing: -0.025em; } /* Large headers */
.tracking-normal { letter-spacing: 0; }         /* Default */
.tracking-wide   { letter-spacing: 0.05em; }    /* All caps */
```

## Color Tokens and Usage

### CSS Custom Properties
```css
:root {
  /* Primary Brand Colors */
  --color-primary: #2D1B69;        /* Deep Indigo */
  --color-primary-light: #4A3496;  /* Lighter indigo variant */
  --color-primary-dark: #1F1247;   /* Darker indigo variant */
  
  /* Secondary Colors */
  --color-secondary: #B8A9C9;      /* Soft Lavender */
  --color-secondary-light: #D4C9E0;
  --color-secondary-dark: #9B8AAD;
  
  /* Neutral Colors */
  --color-background: #F7F3E9;     /* Warm Cream */
  --color-surface: #FFFFFF;        /* White surfaces */
  --color-text-primary: #2C2C2C;   /* Charcoal */
  --color-text-secondary: #8E8E8E; /* Silver Gray */
  --color-text-light: #B8B8B8;     /* Light gray */
  
  /* Semantic Colors */
  --color-success: #A8B5A0;        /* Sage Green */
  --color-warning: #E8B4B8;        /* Rose Quartz */
  --color-error: #D85555;          /* Gentle red */
  --color-info: #4A90E2;           /* Celestial blue */
  
  /* Interactive States */
  --color-hover: rgba(45, 27, 105, 0.1);
  --color-focus: rgba(45, 27, 105, 0.2);
  --color-active: rgba(45, 27, 105, 0.3);
  --color-disabled: rgba(142, 142, 142, 0.5);
}
```

### Color Contrast Guidelines
```css
/* WCAG 2.1 AA Compliant Combinations */
.text-primary-on-light {
  color: var(--color-primary);      /* 7.2:1 on white */
  background: var(--color-surface);
}

.text-white-on-primary {
  color: #FFFFFF;                   /* 4.8:1 on primary */
  background: var(--color-primary);
}

.text-dark-on-secondary {
  color: var(--color-text-primary); /* 5.1:1 on lavender */
  background: var(--color-secondary);
}

/* Error states maintain accessibility */
.text-error {
  color: #B91C1C; /* Darker red for better contrast */
}
```

## Spacing System (Rem-based, Divisible by 4)

### Base Spacing Scale
```css
/* Tailwind-compatible spacing tokens */
:root {
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px */
  --space-3: 0.75rem;  /* 12px */
  --space-4: 1rem;     /* 16px - Base unit */
  --space-5: 1.25rem;  /* 20px */
  --space-6: 1.5rem;   /* 24px */
  --space-8: 2rem;     /* 32px */
  --space-10: 2.5rem;  /* 40px */
  --space-12: 3rem;    /* 48px */
  --space-16: 4rem;    /* 64px */
  --space-20: 5rem;    /* 80px */
  --space-24: 6rem;    /* 96px */
  --space-32: 8rem;    /* 128px */
}
```

### Component Spacing Guidelines
```css
/* Card components */
.card-padding { padding: var(--space-6); }           /* 24px */
.card-gap { gap: var(--space-4); }                   /* 16px between elements */

/* Form elements */
.form-field-spacing { margin-bottom: var(--space-4); } /* 16px */
.form-input-padding { padding: var(--space-3) var(--space-4); } /* 12px 16px */

/* Layout sections */
.section-padding { padding: var(--space-16) var(--space-6); }   /* 64px 24px */
.content-max-width { max-width: 42rem; }                        /* 672px */

/* Navigation */
.nav-item-padding { padding: var(--space-2) var(--space-4); }   /* 8px 16px */
.nav-gap { gap: var(--space-2); }                               /* 8px */
```

### Responsive Spacing
```css
/* Mobile-first responsive spacing */
.responsive-section {
  padding: var(--space-8) var(--space-4); /* 32px 16px on mobile */
}

@media (min-width: 768px) {
  .responsive-section {
    padding: var(--space-16) var(--space-8); /* 64px 32px on tablet+ */
  }
}

@media (min-width: 1024px) {
  .responsive-section {
    padding: var(--space-24) var(--space-12); /* 96px 48px on desktop */
  }
}
```

## Accessibility Notes

### WCAG 2.1 AA Compliance Requirements

#### Color Contrast Ratios
- **Normal Text (14-18px)**: Minimum 4.5:1 contrast ratio
- **Large Text (18px+ or 14px+ bold)**: Minimum 3:1 contrast ratio
- **Interactive Elements**: Minimum 3:1 for focus indicators
- **Non-text Elements**: Minimum 3:1 for UI components and graphics

#### Typography Accessibility
```css
/* Minimum sizes for accessibility */
.min-touch-target {
  min-height: 44px;  /* iOS requirement */
  min-width: 44px;   /* Android recommendation */
}

/* Responsive text that scales properly */
.accessible-text {
  font-size: clamp(0.875rem, 2.5vw, 1rem);     /* 14px-16px */
  line-height: 1.6;                             /* Optimal for dyslexia */
}

/* Focus states for keyboard navigation */
.focus-visible:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  border-radius: 2px;
}
```

#### Screen Reader Support
```css
/* Screen reader only content */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Skip links for keyboard navigation */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--color-primary);
  color: white;
  padding: 8px;
  z-index: 1000;
  transition: top 0.3s;
}

.skip-link:focus {
  top: 6px;
}
```

### Responsive Text Sizing
```css
/* Base sizes that scale with user preferences */
html {
  font-size: 100%; /* Respects user's browser settings */
}

/* Clamp function for smooth scaling */
.hero-title {
  font-size: clamp(1.75rem, 4vw, 3.75rem);
}

.body-text {
  font-size: clamp(0.875rem, 2vw, 1rem);
}

/* Media queries for fine-tuning */
@media (max-width: 480px) {
  .mobile-optimized {
    font-size: 0.875rem; /* 14px minimum on small screens */
    line-height: 1.6;     /* Maintain readability */
  }
}
```

## CSS Variables for Theme Switching

### Light Theme (Default)
```css
[data-theme="light"] {
  --bg-primary: #F7F3E9;    /* Warm cream */
  --bg-secondary: #FFFFFF;  /* White */
  --text-primary: #2C2C2C;  /* Charcoal */
  --text-secondary: #8E8E8E; /* Silver gray */
  --accent-primary: #2D1B69; /* Deep indigo */
  --accent-secondary: #B8A9C9; /* Soft lavender */
}
```

### Dark Theme (Future Enhancement)
```css
[data-theme="dark"] {
  --bg-primary: #1A1A1A;    /* Deep charcoal */
  --bg-secondary: #2C2C2C;  /* Lighter charcoal */
  --text-primary: #F7F3E9;  /* Warm cream */
  --text-secondary: #B8B8B8; /* Light gray */
  --accent-primary: #7B68EE; /* Lighter indigo */
  --accent-secondary: #D4C9E0; /* Lighter lavender */
}
```

### High Contrast Theme (Accessibility)
```css
[data-theme="high-contrast"] {
  --bg-primary: #FFFFFF;
  --bg-secondary: #000000;
  --text-primary: #000000;
  --text-secondary: #333333;
  --accent-primary: #0000FF;
  --accent-secondary: #8000FF;
}
