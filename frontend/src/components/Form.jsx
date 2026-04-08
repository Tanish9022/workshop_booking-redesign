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
      <div className="max-w-md mx-auto bg-white p-10 border border-emerald-100 rounded-[2.5rem] shadow-2xl shadow-emerald-500/5 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500"></div>
        <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-8 transform rotate-3 shadow-lg shadow-emerald-500/10">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Booking Confirmed!</h2>
        <p className="text-lg text-slate-500 mb-10 leading-relaxed font-medium">We've sent a confirmation email to <span className="text-slate-900 font-bold">{formData.email}</span>.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="bg-slate-900 text-white px-8 py-4 rounded-xl font-black hover:bg-slate-800 transition-all shadow-xl active:scale-95"
        >
          Book another workshop
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white p-10 border border-slate-100 rounded-[2.5rem] shadow-2xl shadow-blue-500/5 relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
      
      <h2 className="text-3xl font-black text-slate-900 mb-10 text-center tracking-tight">Secure Your Spot</h2>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label htmlFor="workshop" className="block text-sm font-black text-slate-700 mb-2.5 px-1 uppercase tracking-wider">Choose Workshop</label>
          <div className="relative">
            <select
              id="workshop"
              value={formData.workshop}
              onChange={(e) => setFormData({...formData, workshop: e.target.value})}
              className="w-full px-6 py-5 border-2 border-slate-50 rounded-2xl bg-slate-50 text-slate-800 font-bold focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all appearance-none cursor-pointer hover:bg-white hover:border-slate-100"
            >
              <option value="">Select a workshop...</option>
              <option value="react-hooks">Introduction to React Hooks</option>
              <option value="tailwind-css">Tailwind CSS Mastery</option>
              <option value="advanced-js">Advanced JavaScript Patterns</option>
            </select>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-black text-slate-700 mb-2.5 px-1 uppercase tracking-wider">Full Name</label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full px-6 py-5 border-2 border-slate-50 rounded-2xl bg-slate-50 text-slate-800 font-bold focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all placeholder:text-slate-400 hover:bg-white hover:border-slate-100"
            placeholder="e.g. John Smith"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-black text-slate-700 mb-2.5 px-1 uppercase tracking-wider">Email Address</label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full px-6 py-5 border-2 border-slate-50 rounded-2xl bg-slate-50 text-slate-800 font-bold focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all placeholder:text-slate-400 hover:bg-white hover:border-slate-100"
            placeholder="john@example.com"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className={`w-full flex justify-center py-5.5 px-8 border border-transparent rounded-[1.25rem] shadow-2xl shadow-blue-500/25 text-lg font-black text-white transition-all transform hover:-translate-y-1 active:scale-95 ${
            status === 'loading' ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 hover:shadow-blue-500/40'
          }`}
        >
          {status === 'loading' ? (
            <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : 'Secure My Spot'}
        </button>

        {status === 'error' && (
          <p className="text-red-500 text-sm text-center font-black mt-4">
            Validation failed. Please check your inputs.
          </p>
        )}
      </form>
      
      <p className="mt-10 text-[10px] text-slate-400 text-center px-4 uppercase tracking-[0.2em] font-black">
        Encrypted & Secure Booking 
      </p>
    </div>
  );
};

export default Form;
