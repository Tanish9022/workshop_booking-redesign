import React, { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

// Lazy load the Home component
const Home = lazy(() => import('./pages/Home'))

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <Suspense fallback={
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        </div>
      }>
        <Home />
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
