import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    workshop: 'react-hooks'
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      if (formData.name && formData.email) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="max-w-md mx-auto bg-white p-8 border border-green-100 rounded-2xl shadow-lg text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
        <p className="text-gray-600 mb-6">We've sent a confirmation email to {formData.email}.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-indigo-600 font-bold hover:text-indigo-700"
        >
          Book another workshop
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 border border-gray-100 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Book Your Spot</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="workshop" className="block text-sm font-semibold text-gray-700 mb-1">Select Workshop</label>
          <select
            id="workshop"
            value={formData.workshop}
            onChange={(e) => setFormData({...formData, workshop: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
          >
            <option value="">Select Workshop</option>
            <option value="react-hooks">Introduction to React Hooks</option>
            <option value="tailwind-css">Tailwind CSS Mastery</option>
            <option value="advanced-js">Advanced JavaScript Patterns</option>
          </select>
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full rounded-xl border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base p-3 border placeholder:text-gray-400"
            placeholder="e.g. John Smith"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full rounded-xl border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base p-3 border placeholder:text-gray-400"
            placeholder="john@example.com"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className={`w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-md text-base font-bold text-white transition-all transform hover:-translate-y-0.5 active:translate-y-0 ${
            status === 'loading' ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
          }`}
        >
          {status === 'loading' ? (
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : 'Secure My Spot'}
        </button>

        {status === 'error' && (
          <p className="text-red-600 text-sm text-center font-medium mt-2">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
      
      <p className="mt-6 text-xs text-gray-500 text-center px-4">
        By booking, you agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  );
};

export default Form;
