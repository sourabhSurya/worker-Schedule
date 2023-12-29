// import "./App.css";
import React, { useState, useEffect } from 'react';
import DateSelector from './components/dateSelector';
import TimezoneSelector from './components/TimezoneSelector';
import WeeklySchedule from './components/weeklySchedule';

const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedTimezone, setSelectedTimezone] = useState('UTC-0');
  const [scheduleData, setScheduleData] = useState([]);
  // const [data , setDate] = useState([]);

  // const getData =()=>{
  //    // Fetch data from JSON file
    // fetch('components/data.json') 
    // .then((response) => response.json())
    // .then((data) => setScheduleData(data))

  //   .catch((error) => console.error('Error fetching data:', error));
  // }

  useEffect(() => {
    // Fetch data from JSON file
    // fetch('src/components/data.json') 
    // .then((response) => response.json())
    // .then((data) => setScheduleData(data))
     // Fetch data from the JSON server
     fetch('data.json')
     .then((response) => response.json())
     .then((data) => setScheduleData(data))
     .catch((error) => console.error('Error fetching data:', error));


    // Handle date or timezone changes
    console.log('Date or timezone changed:', currentDate, selectedTimezone);
  }, [currentDate, selectedTimezone]);

  const handleDateChange = (direction) => {
    const newDate = new Date(currentDate);
    direction === 'next' ? newDate.setDate(newDate.getDate() + 7) : newDate.setDate(newDate.getDate() - 7);
    setCurrentDate(newDate);
  };
  

  return (
    <div className="container mx-auto mt-8 bg-gray-100">
      <h1 className="text-3xl font-extrabold mb-4 text-center underline decoration-4">Weekly Scheduler</h1>
      <DateSelector currentDate={currentDate} onDateChange={handleDateChange} />
      <TimezoneSelector selectedTimezone={selectedTimezone} onTimezoneChange={setSelectedTimezone} />
      <WeeklySchedule scheduleData={scheduleData} />

    </div>
  );
};

export default App;

