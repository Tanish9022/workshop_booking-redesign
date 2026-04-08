import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero section will go here */}
        <section className="py-20 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Workshop Booking</h1>
          <p className="text-xl text-gray-600 mb-8">Discover and book modern workshops easily.</p>
        </section>
        
        {/* Workshop listing will go here */}
      </main>
    </div>
  );
};

export default Home;
