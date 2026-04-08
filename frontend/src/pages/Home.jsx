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
                <button 
                  onClick={scrollToBooking}
                  className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-bold text-lg hover:bg-indigo-50 transition-all transform hover:scale-105 active:scale-95 shadow-lg"
                >
                  Book a Workshop
                </button>
                <button className="bg-indigo-600 text-white border border-indigo-400 px-8 py-3 rounded-lg font-bold text-lg hover:bg-indigo-500 transition-all">
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

        {/* Featured Workshops */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Workshops</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our curated list of high-quality workshops led by industry experts.
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
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
          
          <div className="text-center mt-16">
            <button className="text-indigo-600 font-bold text-lg hover:text-indigo-700 underline-offset-8 hover:underline decoration-2 transition-all">
              View All Workshops &rarr;
            </button>
          </div>
        </section>

        {/* Booking Section */}
        <section id="booking-section" className="py-24 px-4 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Ready to start your journey?</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Take the first step towards mastering new skills. Our booking process is quick, secure, and easy.
              </p>
              <ul className="space-y-4">
                {[
                  "Expert-led hands-on training",
                  "Comprehensive study materials",
                  "Official certification upon completion",
                  "Lifetime access to community forum"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700 font-medium">
                    <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 w-full">
              <Form />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
