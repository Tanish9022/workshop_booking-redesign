import React, { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Lazy load the Home component
const Home = lazy(() => import('./pages/Home'))

const LoadingSpinner = () => (
  <div className="flex-grow flex items-center justify-center min-h-[60vh]">
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 border-4 border-blue-50 rounded-full"></div>
      <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
    </div>
  </div>
);

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent selection:bg-blue-100 selection:text-blue-900 antialiased">
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <main className="flex-grow">
          <Home />
        </main>
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
