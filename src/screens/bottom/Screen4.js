import moment from "moment";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Button, View, Text } from "react-native";
import DateRangePicker from "rnv-date-range-picker";
import { TimePicker } from 'react-native-simple-time-picker';

const Screen4 = () => {
  const [selectedRange, setRange] = useState({});
  const [selectedTime, setTime] = useState({});
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
    <SafeAreaView>
      <View style={styles.container}>
        <DateRangePicker
          onSelectDateRange={(range) => {
            setRange(range);
          }}
          responseFormat="YYYY-MM-DD"
          maxDate={moment()}
          minDate={moment().subtract(100, "days")}
        />
        <View style={styles.container}>
          <Text>first date: {selectedRange.firstDate}</Text>
          <Text>second date: {selectedRange.secondDate}</Text>
        </View>
        
        <View style={{ marginRight: 50, justifyContent: 'center', width: 400 }}>
            <TimePicker 
                    onSelectedDayTime={(time) => {
                        setTime(selected);
                      }}
            responseFormat="hh:mm:ss:a"
            value={{ hours, minutes, seconds }} 
            isAmpm
            // ampmLocalization={{
            //   am: 'AM',
            //   pm: 'PM'
            // }}            
            zeroPadding
          onChange={handleChange} />
            </View>
            <Text> selected time: {selectedTime.time}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 50,
  },
});

export default Screen4;

