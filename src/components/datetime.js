import React, {useState} from 'react';
import { Text, Button, SafeAreaView, TextInput, View } from 'react-native';
import DatePicker from 'react-native-date-picker'
import TimeInput from '@tighten/react-native-time-input';


export default () => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [time, setTime] = useState();

  const handleTimeChange = (time, validTime) => {
    if (!validTime) return;
    setTime(time);
  }
  
  return (
    <>
      <Button title="Open" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      <Text style={styles.timeText} >Time:</Text>
        <TextInput style={styles.timeInp} keyboardType={"numeric"} 
        value={this.state.time} onChange={(time) => this.setState({time})} />

      <Text> Date Picked : {Date} </Text>
    </>
  )
}

