// WeeklySchedule.js

import React from 'react';

  const WeeklySchedule = ({ scheduleData }) => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const currentDate = new Date();
  // const currentDay = daysOfWeek[currentDate.getDay()]; //  Get the current day as a string
  const times = Array.from({ length: 16 }, (_, index) => index + 8); // Generate times from 8 AM to 11 PM

     // Filter schedule data for the current day and upcoming working days
  const filteredScheduleData = scheduleData.filter((entry) => {
    const entryDay = new Date(entry.Date).toLocaleDateString(undefined, { weekday: 'long' });
    // return daysOfWeek.includes(entryDay) && daysOfWeek.indexOf(entryDay) >= daysOfWeek.indexOf(currentDay);
  })

    // Get unique days from the filtered schedule data
    const uniqueDays = [...new Set(filteredScheduleData.map((entry) => entry.Date))];

  return (
    <div>
      <h2 className="text-xl font-weight-900 font-extrabold mb-10 text-center  text-purple-500 box-border  hover:text-gray-900 underline text-shadow">Weekly Routing</h2>
      <div className="grid grid-cols-1 gap-2 ">
        {days.map((day) => (
          <div key={day} className="flex flex-nowrap items-center mb-2">
            <div className="font-semibold mr-2">{day}</div>
            {times.map((time) => {
              const dateTime = `${day}-${time}`;
              const entry = scheduleData.find((item) => item.Date === dateTime);

              return (
                <div key={dateTime} className="text-center">
                  <input type="checkbox" id={dateTime} className="mr-1" defaultChecked={entry !== undefined} />
                  <label htmlFor={dateTime}>{`${time}:00`}</label>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklySchedule;

// WeeklySchedule.js

// import React from 'react';

// const WeeklySchedule = ({ scheduleData }) => {
//   const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
//   const currentDate = new Date();
//   const currentDay = daysOfWeek[currentDate.getDay()]; // Get the current day as a string

//   // Filter schedule data for the current day and upcoming working days
//   const filteredScheduleData = scheduleData.filter((entry) => {
//     const entryDay = new Date(entry.Date).toLocaleDateString(undefined, { weekday: 'long' });
//     return daysOfWeek.includes(entryDay) && daysOfWeek.indexOf(entryDay) >= daysOfWeek.indexOf(currentDay);
//   });

//   // Get unique days from the filtered schedule data
//   const uniqueDays = [...new Set(filteredScheduleData.map((entry) => entry.Date))];

//   // Generate an array of time slots from 8 AM to 11 PM
//   const times = Array.from({ length: 16 }, (_, index) => index + 8);

//   return (
//     <div>
//       <h2 className="text-xl font-semibold mb-2">Weekly Schedule</h2>
//       <div className="grid grid-cols-1 gap-2">
//         {uniqueDays.map((day) => (
//           <div key={day} className="flex flex-row items-center mb-2">
//             <div className="font-semibold mr-2">{day}</div>
//             {times.map((time) => (
//               <div key={`${day}-${time}`} className="text-center">
//                 <input
//                   type="checkbox"
//                   id={`${day}-${time}`}
//                   className="mr-1"
//                   defaultChecked={filteredScheduleData.some(
//                     (entry) => entry.Date === day && parseInt(entry.Time, 10) === time
//                   )}
//                 />
//                 <label htmlFor={`${day}-${time}`}>{`${time}:00`}</label>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WeeklySchedule;





