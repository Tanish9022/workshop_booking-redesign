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
        <section className="bg-slate-900 text-white py-24 px-4 md:py-40 overflow-hidden relative">
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
          
          <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
            <div className="md:w-3/4 lg:w-2/3">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-8">
                <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-3 animate-pulse"></span>
                Now Booking for Summer 2026
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1]">
                Master the Art of <span className="text-blue-500">Modern Engineering.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed max-w-2xl font-medium">
                Join elite workshops led by industry pioneers. Hands-on projects, expert mentorship, and a world-class curriculum.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <button 
                  onClick={scrollToBooking}
                  className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-extrabold text-lg shadow-2xl shadow-blue-500/30 hover:bg-blue-700 transition-all transform hover:scale-105 active:scale-95 text-center"
                >
                  Book Your Spot
                </button>
                <button className="bg-slate-800 text-white border border-slate-700 px-10 py-4 rounded-2xl font-extrabold text-lg hover:bg-slate-700 transition-all text-center">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          
          {/* Gradient Orb */}
          <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] hidden lg:block"></div>
        </section>

        {/* Featured Workshops */}
        <section className="py-24 px-4 bg-slate-50/50">
          <div className="max-w-7xl mx-auto text-center mb-20 px-4">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Featured Workshops</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
              Curated, high-impact learning experiences designed for real-world application.
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 sm:px-6 lg:px-8">
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
          
          <div className="text-center mt-20">
            <button className="text-blue-600 font-extrabold text-xl hover:text-blue-700 transition-all flex items-center justify-center mx-auto group">
              View All Workshops 
              <span className="ml-2 group-hover:translate-x-2 transition-transform">&rarr;</span>
            </button>
          </div>
        </section>

        {/* Booking Section */}
        <section id="booking-section" className="py-32 px-4 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 px-4 sm:px-6 lg:px-8">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">Ready to level up?</h2>
              <p className="text-xl text-slate-500 mb-10 leading-relaxed font-medium">
                Take the first step towards mastery. Our booking process is streamlined, secure, and designed for your success.
              </p>
              <ul className="space-y-6">
                {[
                  "Expert-led interactive sessions",
                  "Comprehensive curriculum & resources",
                  "Industry-recognized certification",
                  "Private Discord community access"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-slate-700 font-bold text-lg">
                    <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
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
               {/* Background Glow for Form */}
              <div className="absolute -inset-4 bg-blue-100/50 rounded-[2.5rem] blur-2xl -z-10"></div>
              <Form />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
