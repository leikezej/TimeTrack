import React from 'react';
import RNSchedule from 'rnschedule';
 
const data = [
    {
      title: 'Lunch Appointment',
      subtitle: 'With Harry',
      start: new Date(2022, 11, 12, 13, 14, 15),
      end: new Date(2023, 11, 2, 14, 20),
      color: '#390099',
    }
  ]
 
const App = () =>
  <RNSchedule
    dataArray={data}
    onEventPress={(appt) => console.log(appt)}
  />
 
export default App