# System Patterns: TarotLyfe

## System Architecture

### High-Level Architecture
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend API   │    │   External      │
│   (React/Vite)  │◄──►│  (Node/Express) │◄──►│   Services      │
│                 │    │                 │    │                 │
│ • Web App       │    │ • REST APIs     │    │ • OpenAI GPT-4  │
│ • Electron App  │    │ • JWT Auth      │    │ • Stripe        │
│ • Redux State   │    │ • Rate Limiting │    │ • SendGrid      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                │
                       ┌─────────────────┐
                       │   Data Layer    │
                       │                 │
                       │ • PostgreSQL    │
                       │ • Redis Cache   │
                       │ • SQLite (Local)│
                       └─────────────────┘
```

### Component Architecture (Frontend)
```
src/
├── components/          # Atomic Design Structure
│   ├── atoms/          # Basic building blocks
│   │   ├── Button/
│   │   ├── Input/
│   │   └── Typography/
│   ├── molecules/      # Simple combinations
│   │   ├── FormField/
│   │   ├── TarotCard/
│   │   └── MoodSelector/
│   └── organisms/      # Complex UI sections
│       ├── Header/
│       ├── Dashboard/
│       └── ReadingDisplay/
├── features/           # Domain-specific modules
│   ├── auth/          # Authentication flow
│   ├── tarot/         # Card reading logic
│   ├── journal/       # Journaling system
│   └── subscription/  # Payment/billing
├── store/             # Redux state management
├── hooks/             # Custom React hooks
├── utils/             # Shared utilities
└── assets/            # Static resources
```

## Key Technical Decisions

### State Management Pattern
- **Redux Toolkit** for global state management
- **RTK Query** for API state and caching
- **React Hook Form** for form state management
- **Local storage** for user preferences and offline data

### Authentication Architecture
```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  Login Flow │    │ JWT Tokens  │    │ Protected   │
│             │    │             │    │ Routes      │
│ 1. Verify   │───►│ Access      │───►│ Dashboard   │
│ 2. Issue JWT│    │ Refresh     │    │ Features    │
│ 3. Store    │    │ HTTP-Only   │    │ Profile     │
└─────────────┘    └─────────────┘    └─────────────┘
```

### AI Integration Pattern
```
User Request ──► Prompt Engineering ──► OpenAI API ──► Response Caching ──► User Display
     │                    │                  │              │                   │
     │                    │                  │              │                   │
  Context          Structured           Rate Limited    Redis Cache      Formatted
 Collection        Templates            Requests        (24h TTL)       Response
```

### Database Design Patterns

#### User Data Model
```sql
Users
├── Authentication (email, password_hash, oauth_tokens)
├── Profile (name, preferences, subscription_tier)
├── Settings (notifications, privacy, themes)
└── Timestamps (created_at, updated_at, last_login)

Tarot_Readings
├── User_ID (foreign key)
├── Cards_Drawn (JSON array)
├── Spread_Type (1-card, 3-card)
├── AI_Interpretation (text)
├── User_Question (optional)
└── Reading_Date

Journal_Entries
├── User_ID (foreign key)
├── Reading_ID (optional foreign key)
├── Content (encrypted text)
├── Tags (JSON array)
├── Mood_Data (JSON object)
└── Timestamps
```

## Design Patterns in Use

### Frontend Patterns

#### Atomic Design
- **Atoms**: Button, Input, Typography, Icon
- **Molecules**: FormField, TarotCard, NotificationToast
- **Organisms**: Header, Dashboard, ReadingInterface
- **Templates**: PageLayout, AuthLayout, DashboardLayout
- **Pages**: LoginPage, DashboardPage, ReadingPage

#### Component Composition
```javascript
// Higher-order component pattern
const withAuth = (Component) => {
  return (props) => {
    const { user, isLoading } = useAuth();
    if (isLoading) return <LoadingSpinner />;
    if (!user) return <Navigate to="/login" />;
    return <Component {...props} />;
  };
};

// Compound component pattern
<TarotReading>
  <TarotReading.CardDisplay />
  <TarotReading.Interpretation />
  <TarotReading.JournalPrompt />
</TarotReading>
```

#### Custom Hooks Pattern
```javascript
// Data fetching hook
const useReadingHistory = (userId) => {
  return useQuery(['readings', userId], fetchReadings);
};

// Business logic hook
const useTarotReading = () => {
  const [cards, setCards] = useState([]);
  const [interpretation, setInterpretation] = useState('');
  
  const drawCards = useCallback((spreadType) => {
    // Card drawing logic
  }, []);
  
  return { cards, interpretation, drawCards };
};
```

### Backend Patterns

#### Repository Pattern
```javascript
class UserRepository {
  async findById(id) { /* database query */ }
  async create(userData) { /* insert logic */ }
  async update(id, updates) { /* update logic */ }
}

class TarotService {
  constructor(userRepo, aiService) {
    this.userRepo = userRepo;
    this.aiService = aiService;
  }
  
  async generateReading(userId, spreadType) {
    // Business logic
  }
}
```

#### Middleware Chain Pattern
```javascript
app.use(cors());
app.use(helmet());
app.use(rateLimit());
app.use(authMiddleware);
app.use(loggingMiddleware);
app.use('/api/v1', apiRoutes);
app.use(errorHandler);
```

## Component Relationships

### Data Flow Pattern
```
User Action ──► Component ──► Redux Action ──► RTK Query ──► API Call
     │              │              │              │            │
     │              │              │              │            │
   onClick       dispatch       middleware      HTTP         Database
     │              │              │              │            │
     ▼              ▼              ▼              ▼            ▼
UI Update ◄── State Update ◄── Response ◄── API Response ◄── Data
```

### Error Handling Pattern
```javascript
// React Error Boundary
class ErrorBoundary extends Component {
  componentDidCatch(error, errorInfo) {
    logError(error, errorInfo);
    this.setState({ hasError: true });
  }
}

// API Error Handling
const apiSlice = createApi({
  transformErrorResponse: (response) => ({
    status: response.status,
    message: response.data?.message || 'An error occurred'
  })
});
```

## Critical Implementation Paths

### User Onboarding Flow
1. **Registration** → Email verification → Profile setup
2. **First Reading** → AI interpretation → Journaling prompt
3. **Dashboard Setup** → Preferences configuration → Feature discovery

### Reading-to-Journal Flow
1. **Card Selection** → Shuffle animation → Card reveal
2. **AI Processing** → Interpretation generation → Prompt creation
3. **Journal Integration** → Auto-populated prompt → Rich text editing

### Subscription Upgrade Path
1. **Usage Tracking** → Session counting → Feature access attempts
2. **Prompt Triggering** → Subtle notifications → Value demonstration
3. **Payment Processing** → Stripe integration → Feature unlocking

### Offline Synchronization
1. **Data Detection** → Local storage check → Sync queue creation
2. **Connection Restoration** → Queue processing → Conflict resolution
3. **State Reconciliation** → Local/remote merge → User notification

## Performance Optimization Patterns

### Code Splitting
```javascript
// Route-based splitting
const Dashboard = lazy(() => import('./features/dashboard'));
const TarotReading = lazy(() => import('./features/tarot'));

// Component-based splitting
const HeavyChart = lazy(() => import('./components/Analytics/HeavyChart'));
```

### Caching Strategy
- **Redis**: AI responses, user sessions, frequently accessed data
- **Browser**: Static assets, user preferences, offline journal drafts
- **Service Worker**: Critical app shell, offline functionality

### Database Optimization
- **Indexing**: User queries, reading history, journal searches
- **Connection Pooling**: Prisma connection management
- **Query Optimization**: Eager loading, select field limiting
