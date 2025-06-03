import { useState } from 'react'
import './index.css'
import Button from './components/atoms/Button'
import Input from './components/atoms/Input'
import Typography from './components/atoms/Typography'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [emailError, setEmailError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setEmailError('')

    // Simulate validation
    if (!email.includes('@')) {
      setEmailError('Please enter a valid email address')
      setLoading(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      console.log('Form submitted:', { email, password })
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <Typography.H1 className="mb-4">TarotLyfe</Typography.H1>
          <Typography.ScriptLarge className="mb-8">
            Your Journey to Inner Wisdom
          </Typography.ScriptLarge>
          
          <div className="max-w-2xl mx-auto">
            <Typography.BodyLarge className="mb-6">
              Welcome to TarotLyfe, your personal sanctuary for tarot readings, 
              mindful journaling, and spiritual growth. Connect with your inner wisdom 
              through the ancient art of tarot.
            </Typography.BodyLarge>
          </div>
        </div>

        {/* Component Testing Section */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Typography Testing */}
          <section className="bg-surface p-8 rounded-lg shadow-md">
            <Typography.H2 className="mb-6">Typography System</Typography.H2>
            <div className="space-y-4">
              <Typography.H3>Heading 3 - Serif Font</Typography.H3>
              <Typography.H4>Heading 4 - Serif Font</Typography.H4>
              <Typography.Body>
                Body text using Inter font. This shows how readable text appears 
                with proper line spacing and font weight.
              </Typography.Body>
              <Typography.Script className="text-2xl">Mystical Script Text</Typography.Script>
              <Typography.BodySmall>
                Small body text for captions and helper text.
              </Typography.BodySmall>
            </div>
          </section>

          {/* Button Testing */}
          <section className="bg-surface p-8 rounded-lg shadow-md">
            <Typography.H2 className="mb-6">Button Components</Typography.H2>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="sm">Primary Small</Button>
                <Button variant="primary" size="md">Primary Medium</Button>
                <Button variant="primary" size="lg">Primary Large</Button>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger">Danger</Button>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button disabled>Disabled</Button>
                <Button loading>Loading</Button>
              </div>
            </div>
          </section>

          {/* Form Testing */}
          <section className="bg-surface p-8 rounded-lg shadow-md">
            <Typography.H2 className="mb-6">Authentication Form Test</Typography.H2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                required
                helperText="We'll use this for your account"
              />
              
              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                helperText="Must be at least 8 characters"
              />
              
              <Button 
                type="submit" 
                variant="primary" 
                size="lg" 
                loading={loading}
                className="w-full"
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </Button>
            </form>
          </section>

          {/* Features Grid */}
          <section>
            <Typography.H2 className="text-center mb-8">Core Features</Typography.H2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-surface p-6 rounded-lg shadow-md">
                <Typography.H4 className="mb-3">Daily Readings</Typography.H4>
                <Typography.Body className="text-gray-600">
                  Receive personalized tarot insights to guide your day with clarity and purpose.
                </Typography.Body>
              </div>
              
              <div className="bg-surface p-6 rounded-lg shadow-md">
                <Typography.H4 className="mb-3">Mindful Journaling</Typography.H4>
                <Typography.Body className="text-gray-600">
                  Reflect on your readings and track your spiritual growth with guided prompts.
                </Typography.Body>
              </div>
              
              <div className="bg-surface p-6 rounded-lg shadow-md">
                <Typography.H4 className="mb-3">Personal Growth</Typography.H4>
                <Typography.Body className="text-gray-600">
                  Discover patterns in your life and unlock deeper self-understanding.
                </Typography.Body>
              </div>
            </div>
          </section>

          {/* Database Status */}
          <section className="bg-success/10 border border-success/20 p-8 rounded-lg">
            <Typography.H3 className="text-success mb-4">✅ Phase 2 Complete!</Typography.H3>
            <div className="space-y-2">
              <Typography.Body>
                <strong>Database:</strong> PostgreSQL + Redis running successfully
              </Typography.Body>
              <Typography.Body>
                <strong>Tarot Deck:</strong> 78 cards seeded (22 Major + 56 Minor Arcana)
              </Typography.Body>
              <Typography.Body>
                <strong>Components:</strong> Button, Input, Typography atoms ready
              </Typography.Body>
              <Typography.Body>
                <strong>Next:</strong> Phase 3 - Authentication System
              </Typography.Body>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default App
