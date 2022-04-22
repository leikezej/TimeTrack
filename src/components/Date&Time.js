import React, {Component} from 'react';
import {View, Button, Platform, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default class App extends Component {
  state = {
    date: new Date('2021-01-12T14:42:42'),
    mode: 'date',
    show: false,
  }

  setDate = (event, date) => {
    date = date || this.state.date;

    this.setState({
      show: Platform.OS === 'ios' ? true : false,
      date,
    });
  }

  show = mode => {
    this.setState({
      show: true,
      mode,
    });
  }

  datepicker = () => {
    this.show('date');
  }

  timepicker = () => {
    this.show('time');
  }

  render() {
    const { show, date, mode } = this.state;

    return (
      <View style={styles.wrapper}>
        <View style={styles.datestimes} styles={{ flex: 1 }}>
          <Button style={styles.datetime} onPress={this.datepicker} title="Show date picker!" />
        </View>
        <View style={styles.datestimes} styles={{ flex: 1 }} >
          <Button style={styles.datetime} onPress={this.timepicker} title="Show time picker!" />
        </View>
        { show && <DateTimePicker 
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={this.setDate}
                    onConfirm={(date) => {
                      setIsDatePickerVisible(false);
                      setDate(date);
                    }}
                    />
             }
      </View>
    );
  }
}


const styles = StyleSheet.create({
  wrapper: {
  flexDirection: 'row',
  },

  datestimes:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 400,
    alignItems: 'center',
    margin: 1,
    left: 0,
    bottom: 0,
    top: 0,
    marginLeft: 30
  },
  // time: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   margin: 3,
  //   marginTop: 400,
  //   padding: 3,
  //   flexDirection: 'row'
  //   // borderWidth: 1,
  //   // borderRadius: 5,
  //   // borderColor: "#dddddd",
  //   // borderBottomWidth: 0,
  //   // shadowColor: "#000000",
  //   // shadowOffset: { width: 0, height: 2 },
  //   // shadowOpacity: 0.9,
  // },
  datetime: {
    background: '#fff',
    color: '#000',
    backgroundColor: '##eef2f9',
    width: '50%',
    position: 'absolute'
  }
})


// import React, {Component} from 'react';
// import {View, Button, Platform, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';

// export default class App extends Component {
//   // const [isDatePickerVisible, setIsDatePickerVisible] = useState(true);
//   // const [date, setDate] = useState(new Date());
  
// //   useEffect(()=>{
// //     const ticker = setInterval(()=> setTick(tick +1), 1000);
// //     return ()=> clearInterval(ticker);
// //  }, [])
  
//   state = {
//     date: new Date('2021-01-12T14:42:42'),
//     mode: 'date',
//     show: false,
//   }

//   setDate = (event, date) => {
//     date = date || this.state.date;

//     this.setState({
//       show: Platform.OS === 'ios' ? true : false,
//       date,
//     });
//   }

//   show = mode => {
//     this.setState({
//       show: true,
//       mode,
//     });
//   }

//   datepicker = () => {
//     this.show('date');
//   }

//   timepicker = () => {
//     this.show('time');
//   }

//   showDateTimePicker = () => {
//     this.setState({isDateTimePickerVisible: true})
// };
// hideDateTimePicker = () => this.setState({isDateTimePickerVisible: false});
  
//   handleDatePicked = (date) => {
//     this.hideDateTimePicker(date);
//     this.props.onDateChange(date);

//   };

//   render() {
//     const { show, date, mode } = this.state;

//     return (
//       <View style={styles.wrapper}>
//         <View style={styles.datestimes} styles={{ flex: 1 }}>
//           <Button style={styles.datetime} onPress={this.datepicker} title="Show date picker!" />
//         </View>
//         <View style={styles.datestimes} styles={{ flex: 1 }} >
//           <Button style={styles.datetime} onPress={this.timepicker} title="Show time picker!" />
//         </View>
//         <TouchableOpacity onPress={this.showDateTimePicker.bind(this)}
//                               style={[styles.dateContainerStyle, this.props.backgroundContainerStyle]}>
//                 <Text style={[styles.dateTextStyle, this.props.placeholderTextStyle]}>
//                     {/* {convertDate(this.props.date)} */}
//                 </Text>
//             </TouchableOpacity>
//         { show && <DateTimePicker 
//                     value={date}
//                     date={this.props.date}
//                     mode={mode}
//                     is24Hour={true}
//                     display="default"
//                     onConfirm={this.handleDatePicked}
//                     onCancel={this.hideDateTimePicker}
//                     // onChange={this.setDate}
//                     // onConfirm={(date) => {
//                     //   setIsDatePickerVisible(false);
//                     //   setDate(date);
//                     // }}
//                 // onCancel={() => setIsDatePickerVisible(false)} 
//                />
//              }
//       </View>
//     );
//   }
// }


// const styles = StyleSheet.create({
//   wrapper: {
//   flexDirection: 'row',
//   },

//   datestimes:{
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     backgroundColor: '#F5FCFF',
//     marginTop: 400,
//     alignItems: 'center',
//     margin: 1,
//     left: 0,
//     bottom: 0,
//     top: 0,
//     marginLeft: 30
//   },
//   // time: {
//   //   display: 'flex',
//   //   flexDirection: 'column',
//   //   justifyContent: 'center',
//   //   alignItems: 'center',
//   //   margin: 3,
//   //   marginTop: 400,
//   //   padding: 3,
//   //   flexDirection: 'row'
//   //   // borderWidth: 1,
//   //   // borderRadius: 5,
//   //   // borderColor: "#dddddd",
//   //   // borderBottomWidth: 0,
//   //   // shadowColor: "#000000",
//   //   // shadowOffset: { width: 0, height: 2 },
//   //   // shadowOpacity: 0.9,
//   // },
//   datetime: {
//     background: '#fff',
//     color: '#000',
//     backgroundColor: '##eef2f9',
//     width: '50%',
//     position: 'absolute'
//   }
// })