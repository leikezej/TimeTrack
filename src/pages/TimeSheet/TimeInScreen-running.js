import React, { Component } from 'react';
import { TimePicker } from 'react-native-simple-time-picker';
import dayjs from 'dayjs';

import { StyleSheet, View, TextInput, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
 
export default class Timein extends Component{
    constructor()
    {
        super();
        this.state = { 
        seconds: '',
        minutes: '',
        hours: '',
          name: '', 
          date: '', 
          time: '',
          ActivityIndicator_Loading: false, 

        };
    }
    

    Insert_TimeIn = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('http://192.168.1.102/api/timein.php',
            {
                method: 'POST',
                headers: 
                {
                    'Accept': 'Timeinlication/json',
                    'Content-Type': 'Timeinlication/json',
                },
                body: JSON.stringify(
                {
                  hours : this.state.hours,
                  minutes : this.state.minutes,
                  seconds : this.state.seconds,
                  name : this.state.name,
                  date : this.state.date,
                  time : this.state.time
                })
 
            }).then((response) => response.text()).then((responseJsonFromServer) =>
            {
                alert(responseJsonFromServer);

                this.setState({ ActivityIndicator_Loading : false });

            }).catch((error) =>
            {
                console.error(error);
                this.setState({ ActivityIndicator_Loading : false});
            });
        });
    }
    
    render()
    {
        return(

            <View style = { styles.MainContainer }>
            
                <TextInput 
                  placeholder = "Name"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "tgransparent"
                  // onChangeText = {(TextInputText) => this.setState({ Name: TextInputText })} />
                  onChangeText={name => this.setState({name})}
                  value={this.state.name}
                />
            
            <TextInput 
                  placeholder = "Date"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  // onChangeText = {(TextInputText) => this.setState({ Name: TextInputText })} />
                  onChangeText={date => this.setState({date})}
                  value={this.state.date}
                />
            
                 {/* <View style={{ flex: 1, width: 400, justifyContent: 'center', alignItems: 'center' }}> */}
                  <View style={{ width: 200 }}>
                      <TimePicker 
                        // isAmpm
                        // selectedHours={this.selectedHours}
                        // selectedMinutes={this.selectedMinutes}
                        // onChange={(hours, minutes) =>
                        //   this.setState({ selectedHours: hours, selectedMinutes: minutes })
                        // }
                        // onChange={time => this.setState({time})}
                        value={this.state.time}
                        onChange={this.state.time}
                        zeroPadding />
                    </View>
                 
                <TouchableOpacity 
                  activeOpacity = { 0.5 } 
                  style = { styles.TouchableOpacityStyle } 
                  onPress = { this.Insert_TimeIn}>

                    <Text style = { styles.TextStyle }>TimeIn Now</Text>

                </TouchableOpacity>

                {
        
                this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#009688' size='large'style={styles.ActivityIndicatorStyle} /> : null
                
                }
                
            </View>
        );
    }
}
 
const styles = StyleSheet.create(
{
    MainContainer:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20

    },
    TextInputStyleClass:
    {
      textAlign: 'center',
      height: 40,
      backgroundColor : "#fff",
      borderWidth: 1,
      borderColor: '#009688',
      borderRadius: 7 ,
      marginBottom: 10,
      width: '95%'
    },
 
    TouchableOpacityStyle:
   {
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#009688',
      marginBottom: 20,
      width: '90%'
 
    },
 
    TextStyle:
    {
       color: '#fff',
        textAlign: 'center',
        fontSize: 18
    },

    ActivityIndicatorStyle:{
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    
  }
});