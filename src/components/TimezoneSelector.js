// TimezoneSelector.js

import React from 'react';

const TimezoneSelector = ({ selectedTimezone, onTimezoneChange }) => {
  const timezones = ['Time Zone in Mumbai, Maharashtra, India (Bombay) UTC-0', 'Time Zone in Kolkata, West Bengal, India (Calcutta)  UTC-1']; // Replace with your desired timezones

  return (
    <div className="mb-4">
      <label className="block text-medium font-extrabold  text-yellow-700">Timezone:</label>
      <select
        value={selectedTimezone}
        onChange={(e) => onTimezoneChange(e.target.value)}
        className="border p-2 w-full hover:border-shadow hover:text-blue-300"
      >
        {timezones.map((timezone) => (
          <option key={timezone} value={timezone}>
            {timezone}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimezoneSelector;
