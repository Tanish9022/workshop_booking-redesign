import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-indigo-700 text-white py-20 px-4 md:py-32 overflow-hidden relative">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="md:w-2/3 lg:w-1/2">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                Master New Skills with Our Expert Workshops
              </h1>
              <p className="text-xl md:text-2xl text-indigo-100 mb-10 leading-relaxed">
                Join thousands of students and professionals in our hands-on booking platform designed for modern learners.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-bold text-lg hover:bg-indigo-50 transition-colors shadow-lg">
                  Explore Workshops
                </button>
                <button className="bg-indigo-600 text-white border border-indigo-400 px-8 py-3 rounded-lg font-bold text-lg hover:bg-indigo-500 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 hidden lg:block opacity-20">
            <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="200" cy="200" r="200" fill="white" />
            </svg>
          </div>
        </section>

        {/* Featured Workshops (Step 5 will enhance this) */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Workshops</h2>
            <p className="text-lg text-gray-600">Discover our most popular courses starting soon.</p>
          </div>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Placeholders for cards */}
            <div className="p-8 border border-gray-100 rounded-xl bg-gray-50 h-40 animate-pulse"></div>
            <div className="p-8 border border-gray-100 rounded-xl bg-gray-50 h-40 animate-pulse"></div>
            <div className="p-8 border border-gray-100 rounded-xl bg-gray-50 h-40 animate-pulse"></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
