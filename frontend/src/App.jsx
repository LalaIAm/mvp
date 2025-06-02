import React from 'react'

const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-surface shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-script text-primary">TarotLyfe</h1>
            </div>
            <nav className="flex space-x-4">
              <button className="btn-primary">
                Get Started
              </button>
            </nav>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">
            Discover Your Inner Wisdom
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            AI-powered tarot readings and reflective journaling for personal growth and mindfulness.
          </p>
          
          <div className="card max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-primary mb-4">
              Welcome to TarotLyfe Foundation
            </h3>
            <p className="text-gray-600 mb-4">
              This is the foundation setup for our mindful personal growth platform.
            </p>
            <div className="flex justify-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <div className="w-3 h-3 bg-success rounded-full"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
