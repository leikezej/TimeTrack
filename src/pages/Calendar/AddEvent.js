import React, { useState } from 'react';

import { Alert, StyleSheet, SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native';

import moment from 'moment';

import * as AddCalendarEvent from 'react-native-add-calendar-event';

export default function App() {

  const [eventName, setEventName] = useState('');

  const CURRENT_TIME = moment.utc();

  const currentTimeToString = (momentInUTC) => {
    var temp = moment.utc(momentInUTC).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
    return temp;
  };

  const addEventToCalendar = (title, currentTime) => {
    const eventConfig = {
      title,
      startDate: currentTimeToString(currentTime),
      endDate: currentTimeToString(moment.utc(currentTime).add(1, 'hours')),
      notes: 'Party Time...',
      navigationBarIOS: {
        tintColor: 'black',
        backgroundColor: 'blue',
        titleColor: 'pink',
      },
    };

    AddCalendarEvent.presentEventCreatingDialog(eventConfig)
      .then((eventInfo) => {
        Alert.alert('eventInfo -> ' + JSON.stringify(eventInfo));
      })
      .catch((error) => {
        // handle error such as when user rejected permissions
        Alert.alert('Error -> ' + error);
      });
  };

  return (
    <SafeAreaView style={styleSheet.MainContainer}>

      <Text style={styleSheet.title_1}>
        React Native Add Calendar Event Example
      </Text>

      <Text style={styleSheet.title_2}>
        Event Date Time: {moment.utc(CURRENT_TIME).local().format('lll')}
      </Text>

      <TextInput
        value={eventName}
        onChangeText={
          (value) => setEventName(value)
        }
        placeholder={'Enter Event Name'}
        style={styleSheet.textInput}
      />

      <TouchableOpacity
        style={styleSheet.button}
        onPress={() => { addEventToCalendar(eventName, CURRENT_TIME) }}>
        <Text style={styleSheet.buttonText}>
          Add Event to Calendar
        </Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

const styleSheet = StyleSheet.create({

  MainContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },

  textInput: {
    height: 44,
    borderColor: '#4CAF50',
    borderRadius: 7,
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 8,
  },

  title_1: {
    color: 'red',
    fontSize: 24,
    textAlign: 'center',
    margin: 6,
  },

  title_2: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    margin: 12,
  },

  button: {
    width: '80%',
    height: 44,
    backgroundColor: '#00BFA5',
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18
  }

});