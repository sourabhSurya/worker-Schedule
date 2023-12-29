// DateSelector.js

import React from 'react';

const DateSelector = ({ currentDate, onDateChange }) => {
  const formattedDate = currentDate.toDateString();

  return (
    <div className="mb-4">
      <label className="block text-medium font-bold font-wieght-bold text-gray-700">Date:</label>
      
      <div className="flex justify-between mt-2">
        <button onClick={() => onDateChange('previous')} className="bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-blue-600">
          Previous Week
        </button>
        <button onClick={() => onDateChange('next')} className="bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-blue-600">
          Next Week
        </button>
      </div>
      <input type="text" value={formattedDate} readOnly className="border p-2 w-full" />
    </div>
  );
};

export default DateSelector;
