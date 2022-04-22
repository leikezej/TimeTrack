import React, {Component} from 'react';

import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import SendSMS from 'react-native-sms'
 
export default class App extends Component {

  smsSendFunction() {

    SendSMS.send({
        body: 'Please follow us on https://reactnativecode.com',
        recipients: ['0987654321'],
        successTypes: ['sent', 'queued']
    }, (completed, cancelled, error) => {
        if(completed){
          Alert.alert('SMS Sent Successfully.')
        }else if(cancelled){
          console.log('SMS Sent Cancelled.');
        }else if(error){
          console.log('Some error occured.');
        }
    });
  }
  render() {
    return (
      <View style={styles.MainContainer}>

         <TouchableOpacity 
         onPress={this.smsSendFunction} 
         activeOpacity={0.6} 
         style={styles.button} >

          <Text style={styles.TextStyle}>
             Click Here To Send SMS
          </Text>
        
        </TouchableOpacity>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },

  button: {
    width: '100%',
    paddingTop:12,
    paddingBottom:12,
    backgroundColor: '#00BCD4',
    borderRadius:7,
  },
   
  TextStyle:{
      color:'#fff',
      textAlign:'center',
      fontSize: 20
  }

});