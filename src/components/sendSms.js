https://dev.to/merlier/how-to-send-happy-new-year-sms-using-react-native-on-android-2le4

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState} from 'react';
 import {
   StyleSheet,
   SafeAreaView,
   View,
   Button,
   Text,
   TextInput,
 } from 'react-native';
 import {check, request, RESULTS, PERMISSIONS} from 'react-native-permissions';
 import SmsAndroid from 'react-native-get-sms-android';
 
 const App: () => React$Node = () => {
   const [phoneNumber, setPhoneNumber] = useState('');
   const [message, setMessage] = useState('Happy new year!');
 
   const getSMSPermission = async () => {
     try {
       const checkResult = await check(PERMISSIONS.ANDROID.SEND_SMS);
       switch (checkResult) {
         case RESULTS.DENIED:
           const requestResult = await request(PERMISSIONS.ANDROID.SEND_SMS);
           return Promise.resolve(requestResult);
         case RESULTS.GRANTED:
           return Promise.resolve(checkResult);
         default:
           return Promise.reject();
       }
     } catch (err) {
       // console.log(err);
     }
   };
 
   const sendSMS = async () => {
     try {
       await getSMSPermission();
       SmsAndroid.autoSend(
         phoneNumber,
         message,
         (fail) => {
           console.log('Failed with this error: ' + fail);
         },
         (success) => {
           console.log('SMS sent successfully');
         },
       );
     } catch (err) {
       // console.log(err)
     }
   };
 
   return (
     <SafeAreaView style={styles.container}>
       <View style={styles.form}>
         <Text style={styles.title}>Send SMS using react-native on Android</Text>
         <TextInput
           style={styles.textInput}
           placeholder={'Phone number'}
           onChangeText={setPhoneNumber}
           value={phoneNumber}
         />
         <TextInput
           style={styles.textInput}
           placeholder={'Message'}
           onChangeText={setMessage}
           value={message}
         />
         <Button onPress={sendSMS} title="Send SMS" />
       </View>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#eee',
   },
   form: {
     padding: 20,
   },
   title: {
     fontSize: 20,
     marginBottom: 20,
   },
   textInput: {
     backgroundColor: '#fff',
     marginBottom: 5,
   },
 });
 
 export default App;

// import React, {Component} from 'react';

// import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// import SendSMS from 'react-native-sms'
 
// export default class App extends Component {

//   smsSendFunction() {

//     SendSMS.send({
//         body: 'Please follow us on https://reactnativecode.com',
//         recipients: ['0987654321'],
//         successTypes: ['sent', 'queued']
//     }, (completed, cancelled, error) => {
//         if(completed){
//           Alert.alert('SMS Sent Successfully.')
//         }else if(cancelled){
//           console.log('SMS Sent Cancelled.');
//         }else if(error){
//           console.log('Some error occured.');
//         }
//     });
//   }
//   render() {
//     return (
//       <View style={styles.MainContainer}>

//          <TouchableOpacity 
//          onPress={this.smsSendFunction} 
//          activeOpacity={0.6} 
//          style={styles.button} >

//           <Text style={styles.TextStyle}>
//              Click Here To Send SMS
//           </Text>
        
//         </TouchableOpacity>

//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   MainContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20
//   },

//   button: {
//     width: '100%',
//     paddingTop:12,
//     paddingBottom:12,
//     backgroundColor: '#00BCD4',
//     borderRadius:7,
//   },
   
//   TextStyle:{
//       color:'#fff',
//       textAlign:'center',
//       fontSize: 20
//   }

// });