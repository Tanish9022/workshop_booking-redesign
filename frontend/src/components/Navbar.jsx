import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-indigo-600">WorkshopPortal</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Home</a>
            <a href="/workshops" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Workshops</a>
          </div>
          <div className="md:flex items-center">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">Book Workshop</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
