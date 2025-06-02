# Layout Patterns: TarotLyfe

## Grid Layouts and Breakpoint Definitions

### Responsive Breakpoint System
```css
/* Mobile-first breakpoint approach */
:root {
  --breakpoint-sm: 640px;   /* Small devices (landscape phones) */
  --breakpoint-md: 768px;   /* Medium devices (tablets) */
  --breakpoint-lg: 1024px;  /* Large devices (desktops) */
  --breakpoint-xl: 1280px;  /* Extra large devices (large desktops) */
  --breakpoint-2xl: 1536px; /* 2X large devices (very large desktops) */
}

/* Tailwind CSS breakpoints for consistency */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

### Grid System Foundation
```css
/* 12-column responsive grid */
.container {
  width: 100%;
  max-width: 1280px;  /* xl breakpoint */
  margin: 0 auto;
  padding: 0 var(--space-4); /* 16px */
}

/* Mobile-first grid */
.grid {
  display: grid;
  gap: var(--space-4); /* 16px */
}

/* Responsive grid templates */
.grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }

@media (min-width: 768px) {
  .md\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
  .md\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
  .md\:grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
}

@media (min-width: 1024px) {
  .lg\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
  .lg\:grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
  .lg\:grid-cols-5 { grid-template-columns: repeat(5, 1fr); }
}
```

### Content Width Constraints
```css
/* Optimal reading widths */
.prose {
  max-width: 65ch; /* ~520px for optimal reading */
  margin: 0 auto;
}

.prose-wide {
  max-width: 80ch; /* ~640px for wider content */
  margin: 0 auto;
}

/* Content containers */
.content-narrow { max-width: 28rem; /* 448px */ }
.content-medium { max-width: 42rem; /* 672px */ }
.content-wide { max-width: 56rem; /* 896px */ }
.content-full { max-width: 80rem; /* 1280px */ }
```

## Section Blueprints

### Hero Section Layout
```css
.hero-section {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: var(--space-16) var(--space-4);
  background: linear-gradient(135deg, var(--color-background) 0%, var(--color-secondary-light) 100%);
}

.hero-content {
  max-width: 42rem;
  margin: 0 auto;
}

.hero-title {
  font-family: 'Crimson Pro', serif;
  font-size: clamp(2rem, 5vw, 3.75rem);
  font-weight: 600;
  line-height: 1.1;
  color: var(--color-primary);
  margin-bottom: var(--space-6);
}

.hero-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-8);
}

.hero-cta {
  display: flex;
  gap: var(--space-4);
  justify-content: center;
  flex-wrap: wrap;
}
```

### Dashboard Layout Pattern
```css
.dashboard-layout {
  display: grid;
  gap: var(--space-6);
  padding: var(--space-6);
  min-height: 100vh;
  grid-template-areas:
    "header"
    "main"
    "sidebar";
}

@media (min-width: 768px) {
  .dashboard-layout {
    grid-template-columns: 1fr 300px;
    grid-template-areas:
      "header header"
      "main sidebar";
  }
}

@media (min-width: 1024px) {
  .dashboard-layout {
    grid-template-columns: 250px 1fr 300px;
    grid-template-areas:
      "nav header header"
      "nav main sidebar";
  }
}

.dashboard-header { grid-area: header; }
.dashboard-nav { grid-area: nav; }
.dashboard-main { grid-area: main; }
.dashboard-sidebar { grid-area: sidebar; }
```

### Card Grid Layout
```css
.card-grid {
  display: grid;
  gap: var(--space-6);
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  padding: var(--space-4);
}

.tarot-card-layout {
  aspect-ratio: 2/3; /* Traditional tarot card proportions */
  min-height: 300px;
  max-height: 450px;
  display: flex;
  flex-direction: column;
  background: var(--color-surface);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(45, 27, 105, 0.1);
  padding: var(--space-4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tarot-card-layout:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(45, 27, 105, 0.15);
}

.card-image-container {
  flex: 1;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: var(--space-3);
}

.card-content {
  padding-top: var(--space-3);
  border-top: 1px solid var(--color-secondary-light);
}
```

### Form Layout Patterns
```css
.form-container {
  max-width: 28rem; /* 448px */
  margin: 0 auto;
  padding: var(--space-8) var(--space-6);
}

.form-section {
  margin-bottom: var(--space-8);
}

.form-group {
  margin-bottom: var(--space-4);
}

.form-row {
  display: grid;
  gap: var(--space-4);
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .form-row-2 {
    grid-template-columns: 1fr 1fr;
  }
}

.form-actions {
  display: flex;
  gap: var(--space-3);
  justify-content: flex-end;
  flex-wrap: wrap;
  margin-top: var(--space-6);
}

@media (max-width: 640px) {
  .form-actions {
    flex-direction: column;
  }
}
```

### Journal Entry Layout
```css
.journal-layout {
  display: grid;
  gap: var(--space-6);
  max-width: 56rem;
  margin: 0 auto;
  padding: var(--space-6);
}

.journal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-4);
  padding-bottom: var(--space-4);
  border-bottom: 1px solid var(--color-secondary-light);
}

.journal-content {
  min-height: 400px;
  background: var(--color-surface);
  border-radius: 8px;
  padding: var(--space-6);
  box-shadow: 0 2px 8px rgba(45, 27, 105, 0.05);
}

.journal-metadata {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-secondary-light);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}
```

## Gestalt Rules and Visual Hierarchy

### Proximity Principles
```css
/* Related elements grouped closely */
.related-group {
  margin-bottom: var(--space-8); /* Large gap between sections */
}

.related-group > * {
  margin-bottom: var(--space-2); /* Small gap within groups */
}

.related-group > *:last-child {
  margin-bottom: 0;
}

/* Content hierarchy spacing */
.content-section {
  margin-bottom: var(--space-12); /* Extra large gap between major sections */
}

.subsection {
  margin-bottom: var(--space-6); /* Medium gap between subsections */
}

.paragraph-group {
  margin-bottom: var(--space-4); /* Standard paragraph spacing */
}
```

### Similarity and Consistency
```css
/* Consistent interactive elements */
.interactive-element {
  border-radius: 6px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

.interactive-element:hover {
  transform: translateY(-1px);
}

.interactive-element:active {
  transform: translateY(0);
}

/* Consistent card styling */
.card-base {
  background: var(--color-surface);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(45, 27, 105, 0.08);
  padding: var(--space-6);
  transition: box-shadow 0.3s ease;
}

.card-base:hover {
  box-shadow: 0 4px 16px rgba(45, 27, 105, 0.12);
}
```

### Visual Hierarchy Through Typography
```css
/* Typographic hierarchy */
.heading-primary {
  font-family: 'Crimson Pro', serif;
  font-size: clamp(1.875rem, 4vw, 3rem);
  font-weight: 600;
  line-height: 1.1;
  color: var(--color-primary);
  margin-bottom: var(--space-6);
}

.heading-secondary {
  font-family: 'Crimson Pro', serif;
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 500;
  line-height: 1.2;
  color: var(--color-text-primary);
  margin-bottom: var(--space-4);
}

.heading-tertiary {
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  font-weight: 600;
  line-height: 1.3;
  color: var(--color-text-primary);
  margin-bottom: var(--space-3);
}
```

### Figure-Ground Relationships
```css
/* Primary content emphasis */
.content-primary {
  background: var(--color-surface);
  border: 1px solid var(--color-secondary-light);
  border-radius: 8px;
  padding: var(--space-6);
  position: relative;
  z-index: 1;
}

/* Background content de-emphasis */
.content-secondary {
  background: var(--color-background);
  border: 1px solid transparent;
  border-radius: 6px;
  padding: var(--space-4);
  opacity: 0.9;
}

/* Modal and overlay patterns */
.modal-overlay {
  background: rgba(44, 44, 44, 0.6);
  backdrop-filter: blur(4px);
}

.modal-content {
  background: var(--color-surface);
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(45, 27, 105, 0.3);
  max-width: 90vw;
  max-height: 90vh;
  z-index: 1000;
}
```

## Responsive Layout Patterns

### Mobile-First Navigation
```css
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-4);
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-secondary-light);
}

.nav-brand {
  font-family: 'Crimson Pro', serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-primary);
}

.nav-menu {
  display: none; /* Hidden on mobile */
}

.nav-toggle {
  display: block;
  background: none;
  border: none;
  cursor: pointer;
}

@media (min-width: 768px) {
  .nav-menu {
    display: flex;
    gap: var(--space-6);
  }
  
  .nav-toggle {
    display: none;
  }
}

.nav-menu-mobile {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-secondary-light);
  padding: var(--space-4);
  transform: translateY(-100%);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.nav-menu-mobile.open {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}
```

### Responsive Content Layouts
```css
/* Stack on mobile, side-by-side on larger screens */
.content-split {
  display: grid;
  gap: var(--space-6);
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .content-split {
    grid-template-columns: 1fr 1fr;
  }
}

/* 3-column layout that stacks progressively */
.content-three-col {
  display: grid;
  gap: var(--space-4);
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .content-three-col {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .content-three-col {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

/* Sidebar layout that stacks on mobile */
.content-with-sidebar {
  display: grid;
  gap: var(--space-6);
  grid-template-columns: 1fr;
}

@media (min-width: 1024px) {
  .content-with-sidebar {
    grid-template-columns: 1fr 300px;
  }
}
```

### Container Query Patterns (Future Enhancement)
```css
/* When container queries are fully supported */
@container (min-width: 400px) {
  .card-container .card-content {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: var(--space-4);
  }
}

@container (min-width: 600px) {
  .dashboard-widget {
    grid-template-columns: 1fr 1fr;
  }
}
