import React from 'react';

const Card = React.memo(({ title, description, date, price, duration }) => {
  return (
    <div className="group bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-2">
      <div className="h-56 bg-slate-900 relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-20 group-hover:scale-110 transition-transform duration-700" style={{backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center border border-blue-500/20 backdrop-blur-sm">
            <svg className="w-8 h-8 text-blue-500" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" />
            </svg>
          </div>
        </div>
        
        <div className="absolute top-6 right-6 bg-blue-600 text-white px-5 py-1.5 rounded-full text-sm font-black tracking-tight shadow-xl shadow-blue-500/30">
          {price}
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">{title}</h3>
        <p className="text-slate-500 mb-8 line-clamp-2 font-medium leading-relaxed">{description}</p>
        
        <div className="space-y-4 pt-6 border-t border-slate-50">
          <div className="flex items-center text-sm font-bold text-slate-600">
            <div className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center mr-4 group-hover:bg-blue-50 transition-colors">
              <svg className="w-4 h-4 text-blue-600" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            {date}
          </div>
          <div className="flex items-center text-sm font-bold text-slate-600">
             <div className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center mr-4 group-hover:bg-blue-50 transition-colors">
              <svg className="w-4 h-4 text-blue-600" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            {duration}
          </div>
        </div>
        
        <button className="mt-8 w-full bg-slate-50 text-blue-600 py-4.5 rounded-[1.25rem] font-black border border-blue-50 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-blue-100">
          Details & Application
        </button>
      </div>
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
