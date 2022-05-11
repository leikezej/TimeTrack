import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

//Import library for AddCalendarEvent
import
  * as AddCalendarEvent
from 'react-native-add-calendar-event';

//Import moment.js to deal with time
import moment from 'moment';

const EVENT_TITLE = 'Lunch';
const TIME_NOW_IN_UTC = moment.utc();

const utcDateToString = (momentInUTC) => {
  let s = moment.utc(momentInUTC)
            .format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
  return s;
};

const addToCalendar = (title, startDateUTC) => {
  const eventConfig = {
    title,
    startDate: utcDateToString(startDateUTC),
    endDate: 
    utcDateToString(moment.utc(startDateUTC).add(1, 'hours')),
    notes: 'tasty!',
    navigationBarIOS: {
      tintColor: 'orange',
      backgroundColor: 'green',
      titleColor: 'blue',
    },
  };

  AddCalendarEvent.presentEventCreatingDialog(eventConfig)
    .then((eventInfo) => {
      alert('eventInfo -> ' + JSON.stringify(eventInfo));
    })
    .catch((error) => {
      // handle error such as when user rejected permissions
      alert('Error -> ' + error);
    });
};

const editCalendarEventWithId = (eventId) => {
  if (!eventId) {
    alert('Please Insert Event Id');
    return;
  }
  const eventConfig = {
    eventId,
  };

  AddCalendarEvent.presentEventEditingDialog(eventConfig)
    .then((eventInfo) => {
      alert('eventInfo -> ' + JSON.stringify(eventInfo));
    })
    .catch((error) => {
      alert('Error -> ' + error);
    });
};

const showCalendarEventWithId = (eventId) => {
  if (!eventId) {
    alert('Please Insert Event Id');
    return;
  }
  const eventConfig = {
    eventId,
    allowsEditing: true,
    allowsCalendarPreview: true,
    navigationBarIOS: {
      tintColor: 'orange',
      backgroundColor: 'green',
    },
  };

  AddCalendarEvent.presentEventViewingDialog(eventConfig)
    .then((eventInfo) => {
      alert('eventInfo -> ' + JSON.stringify(eventInfo));
    })
    .catch((error) => {
      alert('Error -> ' + error);
    });
};

const App = () => {
  const [text, setText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          Example to Add Event in Google Calendar
          from React Native App
        </Text>
        <Text style={styles.heading}>
          Event title: {EVENT_TITLE}
          {'\n'}
          Event Date Time: {
            moment.utc(TIME_NOW_IN_UTC).local().format('lll')
          }
        </Text>
        <TouchableOpacity
          style={[styles.buttonStyle, {minWidth: '100%'}]}
          onPress={() => {
            addToCalendar(EVENT_TITLE, TIME_NOW_IN_UTC);
          }}>
          <Text style={styles.buttonTextStyle}>
            Add Event to Calendar
          </Text>
        </TouchableOpacity>
        <TextInput
          style={styles.inputStyle}
          placeholder="enter event id"
          onChangeText={(text) => setText(text)}
          value={text}
        />
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              editCalendarEventWithId(text);
            }}>
            <Text style={styles.buttonTextStyle}>
              Edit Event
            </Text>
          </TouchableOpacity>
          <View style={{margin: 5}} />
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              showCalendarEventWithId(text);
            }}>
            <Text style={styles.buttonTextStyle}>
              View Event
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
    padding: 16,
  },
  heading: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  },
  buttonStyle: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#f5821f',
    margin: 15,
  },
  buttonTextStyle: {
    color: 'white',
    textAlign: 'center',
  },
  buttonHalfStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    flex: 1,
  },
  titleStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
  },
  inputStyle: {
    height: 40,
    minWidth: '100%',
    marginBottom: 10,
    marginTop: 30,
    padding: 10,
    backgroundColor: '#ffe6e6',
  },
});