import React from 'react';
import Hero from '../components/Hero';
import WorkshopCard from '../components/WorkshopCard';
import Form from '../components/Form';

/**
 * UX IMPROVEMENTS:
 * 1. Layout Structure: Content only (Navbar/Footer handled in App.jsx).
 * 2. Visual Hierarchy: Clear sections with consistent vertical padding (py-24 to py-40).
 * 3. Accessibility: Semantic HTML tags used throughout.
 * 4. Premium Aesthetic: Modern typography and color palette.
 */
const Home = () => {
  const workshops = [
    {
      id: 1,
      title: "Introduction to React Hooks",
      description: "Master the basics of React Hooks and state management in this comprehensive beginner-friendly workshop.",
      date: "May 15, 2026",
      price: "$49",
      duration: "3 Hours"
    },
    {
      id: 2,
      title: "Tailwind CSS Mastery",
      description: "Learn how to build beautiful, responsive layouts at lightning speed using utility-first CSS.",
      date: "May 22, 2026",
      price: "$39",
      duration: "4 Hours"
    },
    {
      id: 3,
      title: "Advanced JavaScript Patterns",
      description: "Deep dive into closures, prototypes, and asynchronous programming to write cleaner code.",
      date: "June 05, 2026",
      price: "$59",
      duration: "5 Hours"
    }
  ];

  return (
    <>
      <Hero />

      {/* Featured Workshops Section */}
      <section id="workshops-grid" className="py-24 md:py-32 px-6 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
              Featured Workshops
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Curated learning experiences designed for real-world impact. Explore our most popular courses.
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {workshops.map((workshop) => (
              <WorkshopCard 
                key={workshop.id}
                title={workshop.title}
                description={workshop.description}
                date={workshop.date}
                price={workshop.price}
                duration={workshop.duration}
              />
            ))}
          </div>

          <div className="text-center mt-16 md:mt-24">
            <button className="inline-flex items-center gap-2 text-blue-600 font-bold text-lg hover:text-blue-700 transition-all group">
              View All Upcoming Workshops 
              <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
            </button>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking-section" className="py-24 md:py-40 px-6 bg-white border-t border-gray-100 overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          <div className="lg:w-1/2">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Take the Leap</span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tight leading-tight">
              Ready to Accelerate Your Career?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-medium">
              Our booking process is simple, secure, and built for students. Secure your spot today and join thousands of successful alumni.
            </p>
            
            <ul className="space-y-6">
              {[
                "Hands-on interactive project sessions",
                "Lifetime access to workshop resources",
                "Industry-recognized certificate of completion",
                "Direct mentorship from top developers"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4 text-gray-800 font-bold text-base md:text-lg">
                  <div className="w-6 h-6 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:w-1/2 w-full relative">
            {/* Form container with enhanced UI */}
            <div className="bg-white p-2 rounded-3xl border border-gray-100 shadow-2xl relative z-10">
              <Form />
            </div>
            {/* Background decorative element */}
            <div className="absolute -inset-10 bg-blue-50/50 rounded-full blur-3xl -z-10 animate-pulse"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
