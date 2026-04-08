import React from 'react';

const Card = ({ title, description, date }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{date}</span>
          <button className="text-indigo-600 font-medium hover:text-indigo-700">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
