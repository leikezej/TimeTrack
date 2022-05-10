import React, { useState } from "react";

import { Button, Image, TextInput, TouchableOpacity, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import { NeuBorderView, NeuView, NeuInput, NeuButton } from 'react-native-neu-element';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Axios from 'axios';

export default function TimeIn() {
  const [datePicker, setDatePicker] = useState(false);
  const [timePicker, setTimePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date(Date.now()));
  const [name, setName] = useState('');

  function showDatePicker() {
    setDatePicker(true);
  };

  function showTimePicker() {
    setTimePicker(true);
  };

  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  };

  function onTimeSelected(event, value) {
    setTime(value);
    setTimePicker(false);
  };
  
  const timeIn = async() => {
    try {
      const {data} = await Axios.post('http://192.168.1.11/api/timein.php', {
        name: name,
        date: date,
        time: time,
      });    
      
      if (!name.trim()) {
        alert('Please Enter Name');
        return;
      } 
      else {
        alert('TimeIn SUCCESS');
      }
      // console.log(data)
    }catch(error) {
      console.error(error);
    };
  };

  return (
      <View style={styleSheet.MainContainer}>
      <View>
              <Image source={require('./timein.png')} style={{
                      width: 250,
                      // marginTop: 25,
                      // marginLeft: 50,
                      height: 60,
                      // backgroundColor: 'transparent'
                    }}></Image>
      </View>
                      
        <View  style={{ marginTop: 20}}>
            <NeuView
                          width={320}
                          height={60}
                          color={'#eef2f9'}
                          borderWidth={5}
                          borderRadius={10}
                        >
        <TextInput 
            value={name}
            onChangeText={(value) => setName(value)}
            placeholder={"Full Name"}
            height={190}
            autoFocus
            width={300}
            underlineColorAndroid="transparent"
            keyboardType={'email-address'}
            borderColor={'transparent'}
            returnKeyType="next"
            />
          </NeuView>
        </View>
      
        {/* DATE PICKER */}
        <View  style={{ flexDirection: 'row', marginTop: 20}}>
            <NeuButton
              onPress={showDatePicker} 
            color="#eef2f9"
            width={60}
            height={60}
            borderRadius={10}
            style={{marginRight: 10}}>
            <Ionicons name="calendar-outline" color={'#000'} size={50}/>
          </NeuButton>
            <NeuBorderView
              onPress={showDatePicker}
                          width={250}
                          height={60}
                          color={'#eef2f9'}
                          borderWidth={5}
                          borderRadius={10}
                        >
            <View style={{ flexDirection: "row"}}>
                {datePicker && (
                    <DateTimePicker
                      value={date}
                      format={'YYYY-MM-DD'}
                      mode={'date'}
                      display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                      is24Hour={true}
                      onChange={onDateSelected}
                      onChangeText={(text) => setDate(text)}
                      style={styleSheet.datePicker}
                    />
                    )}
                    {/* <Text style={styleSheet.text}>Date = {date.toDateString()}</Text> */}
                    {!datePicker && (
                <Text style={styleSheet.text}>{date.toDateString()}</Text>
            )}
                </View>
          </NeuBorderView>
        </View>
      
      
            {/* TIME PICKER */}
        <View style={{ flexDirection: 'row', marginTop: 20}}>
               <NeuButton
                onPress={showTimePicker} 
              color="#eef2f9"
              width={60}
              height={60}
              borderRadius={45}
              style={{marginRight: 9}}> 
              {/* style> */}
            <Ionicons name="time-outline" color={'#000'} size={50}/>
              </NeuButton>
              <NeuBorderView
              width={250}
              height={60}
              color={'#eef2f9'}
              borderWidth={5}
              borderRadius={10}
            >
            <View style={{ flexDirection: "row"}}>
                    {timePicker && (
                        <DateTimePicker
                          value={time}
                          mode={'time'}
                          format={'HH:mm:ss A'}
                          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                          is24Hour={false}
                          onChange={onTimeSelected}
                        onChangeText={(text) => setTime(text)}
                          // onChange={onChange
                          style={styleSheet.datePicker}
                          onDateChange={(time) => {
                            setDate(time);
                          }}
                        />
                        )}
                          {!timePicker && (
              <View>
              {/* <Button title="Pick Date" onPress={showDatePicker} /> */}
              </View>
              )}
              <Text>{time.toLocaleTimeString('en-US')}</Text>
              </View>
             </NeuBorderView>
        </View>
                              
                              
        {/* BUTTON */}
        <NeuButton
            onPress={timeIn}
            color="#eef2f9"
            width={330}
            height={60}
            borderRadius={10}
            style={{ marginTop: 20}}>
            <Text>TimeIn</Text>
          </NeuButton>

    </View>
        
  );
}

const styleSheet = StyleSheet.create({
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
  MainContainer: {
    // margin: 10,
    // padding: 10,0
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center'
  },


})