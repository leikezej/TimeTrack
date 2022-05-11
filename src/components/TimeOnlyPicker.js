import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { TimePicker } from 'react-native-simple-time-picker';

const TimeOnly = () => {
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);
  const handleChange = (value: { hours: 0, minutes: 0, seconds: 0 }) => {
    setHours(value.hours);
    setMinutes(value.minutes);
    setSeconds(value.seconds);
  };
  const handleReset = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };
  return (
    <View style={{ flex: 1, width: 400, justifyContent: 'center', alignItems: 'center' }}>
      
      <Text>Selected Time</Text>
      <TimePicker 
        value={{ hours, minutes, seconds }} 
        isAmpm
        // ampmLocalization={{
        //   am: 'AM',
        //   pm: 'PM'
        // }}            
        zeroPadding
      onChange={handleChange} />

    </View>
  );
};

export default YourApp;