import React from 'react';
import Card from '../components/Cards';
import Form from '../components/Form';

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

  const scrollToBooking = () => {
    const element = document.getElementById('booking-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-[#020617] text-white py-24 px-6 md:py-48 md:px-12 relative">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center px-4 py-1.5 rounded-lg bg-white/5 border border-gray-700 text-gray-300 text-xs font-medium mb-8">
                Now Booking for Summer 2026
              </div>
              
              <div className="max-w-2xl">
                <h1 className="text-5xl font-bold text-white leading-tight">
                  Modern Engineering.
                </h1>
                <p className="text-gray-400 mt-4 max-w-xl leading-relaxed">
                  Join elite workshops led by industry pioneers. Hands-on projects, expert mentorship, and a world-class curriculum designed for high-performers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-10">
                  <button 
                    onClick={() => document.getElementById('workshops-grid')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition text-center"
                  >
                    Explore Workshops
                  </button>
                  <button 
                    onClick={scrollToBooking}
                    className="bg-transparent border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition text-center"
                  >
                    Secure Your Spot
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Workshops */}
        <section id="workshops-grid" className="py-32 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center mb-24 px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#020617] mb-6 tracking-tight">Featured Workshops</h2>
            <div className="w-16 h-1 bg-gray-800 mx-auto mb-10"></div>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
              Curated, high-impact learning experiences designed for immediate real-world application.
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
            {workshops.map((workshop) => (
              <Card 
                key={workshop.id}
                title={workshop.title}
                description={workshop.description}
                date={workshop.date}
                price={workshop.price}
                duration={workshop.duration}
              />
            ))}
          </div>
          
          <div className="text-center mt-24">
            <button className="text-[#020617] font-bold text-xl hover:text-gray-600 transition-all flex items-center justify-center mx-auto group">
              View All Workshops 
              <span className="ml-3 group-hover:translate-x-2 transition-transform">&rarr;</span>
            </button>
          </div>
        </section>

        {/* Booking Section */}
        <section id="booking-section" className="py-40 px-4 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24 px-4 sm:px-6 lg:px-8">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-6xl font-bold text-[#020617] mb-10 tracking-tight leading-tight">Ready to level up?</h2>
              <p className="text-xl text-gray-500 mb-12 leading-relaxed font-medium">
                Take the first step towards mastery. Our booking process is streamlined, secure, and built for your success.
              </p>
              <ul className="space-y-6">
                {[
                  "Expert-led interactive sessions",
                  "Comprehensive curriculum & resources",
                  "Industry-recognized certification",
                  "Private Discord community access"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-[#020617] font-semibold text-lg">
                    <div className="w-8 h-8 bg-gray-50 text-gray-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 border border-gray-100">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 w-full relative">
              <div className="absolute -inset-8 bg-gray-100/50 rounded-lg blur-3xl -z-10"></div>
              <Form />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
