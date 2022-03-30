import React, { useState , useEffect } from 'react';
import { StatusBar, SafeAreaView, StyleSheet, View, Dimensions, Text, onPress, TouchableHighlight } from 'react-native';
const { width } = Dimensions.get('screen');
// import dayjs from 'dayjs';
const SIZE = width * 0.9;
import { NeuBorderView, NeuButton } from 'react-native-neu-element';

const App = ({ navigation }) => {
  
  function navigate(){
    navigation.navigate('Login');
} 

//   function navigate(){
//     navigation.navigate('TimeOut');
// } 
  
  const [currentDate, setcurrentDate] = useState('')
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  
  const rotateSeconds = '25deg';
  const transformSeconds = {
    transform: [{ rotate: rotateSeconds }]
  };
  
  const rotateMinutes = '125deg';
  const transformMinutes = {
    transform: [{ rotate: rotateMinutes }]
  };
  
  const rotateHours = '65deg';
  const transformHours = {
    transform: [{ rotate: rotateHours }]
  };
  
  useEffect(() => {
    var date = new Date().getDate() //current Date  
    var month = new Date().getMonth() + 1 //current Month  
    // var year = new Date().getYear() //current Year  
    var year = new Date().getFullYear() // get current full year
    var hours = new Date().getHours() //current Hours  
    var min = new Date().getMinutes() //current Minutes  
    var sec = new Date().getSeconds() //current Seconds  
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    setcurrentDate(
      date + '/' + month + '/' + year + ' | ' + hours + ':' + min + ':' +  sec + ' ' + ampm
    )
    return () => {
    }
  }, []
  )
  
  // useEffect(() => {
  //   date = moment()
  //     .utc0ffset('+05:30')
  //     .format(' hh:mm:ss a');
  //   setcurrentDate(date);
  //  }, []);
  
  return(
    <SafeAreaView style={styles.body}>
      <View style={styles.container}>
      {/* <Button title="Show Current Date" onPress={this.ShowCurrentDate} /> */}
        {/* <Text style={styles.textStyle}>
          Current Date & Time  
        </Text>
        <Text style={styles.textStyle}>
          {currentDate}
        </Text> */}
      <NeuBorderView style={styles.wrap}
        width={380}
        height={765}
        color={'#eef2f9'}
        borderWidth={2}
        borderRadius={16}
      >
                            {/* <NeuSpinner
                        color='#eef2f9'
                        size={150}
                        indicatorColor='#aaffc3' 
                        duration={1000}
                      /> */}
                      
                      <View style={styles.wrapper}>
                        <StatusBar hidden={true} />
                        <View style={styles.bigQuadran} />
                          <View style={styles.mediumQuadran} />
                                
                                <View style={[styles.mover, transformHours]}>
                                  <View style={styles.hours}/>
                                </View>
                                
                                <View style={[styles.mover, transformMinutes]}>
                                  <View style={styles.minutes}/>
                                </View>
                                
                                <View style={[styles.mover, transformSeconds]}>
                                  <View style={styles.seconds}/>
                                </View>
                            <View style={styles.smallQuadran} />
                      </View>
                      {/* <Text style={styles.baseText}>
                        Current
                        <Text style={styles.innerText}> Date </Text>
                        <Text style={styles.outerText}> Time</Text>
                      </Text> */}
                      <Text style={styles.baseText}>
                        <Text> Current DateTime </Text>
                      </Text>
        
        <Text style={styles.textStyle1}>
          {currentDate}
        </Text>
{/*         
        <Text>Count: {count}</Text> */}
        <View style={styles.buttons}>
                              <NeuButton
                              // onPress={() => Alert.alert('Time In pressed')}
                              onPress={navigate}
                              // onPress={() => navigation.navigate('navigate')}
                                  color={'#eef2f9'}
                                  // color="#841584"
                                  width={330}  
                                  height={70}
                                  fontSize={70}
                                  fontWeight={'bold'}
                                  borderRadius={16}
                                  style={{marginLeft: 20, marginTop: 50}}>
                                      <Text style={styles.buttonText}>
                                        Get Started
                                      </Text>
                              </NeuButton>
                              {/* <NeuButton
                              // onPress={navigate}
                              onPress={() => navigation.navigate('TimeOut')}
                                  color={'#eef2f9'}
                                  width={160}
                                  height={60}
                                  borderRadius={16}
                                  style={{marginLeft: 20, marginTop: 50}}>
                                      <Text style={styles.buttonText}>
                                        Time Out
                                      </Text>
                              </NeuButton> */}
    </View>
      </NeuBorderView>
      </View>
      
      
      {/* <TouchableHighlight
  style={styles.submit}
  onPress={() => this.submitSuggestion(this.props)}
    <Text style={[styles.submitText]}>Submit</Text>
</TouchableHighlight> */}


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
body: {
  // backgroundColor: '#000',
  height: '100%'
  
},
baseText: {
  fontWeight: 'bold',
  color: '#000',
  fontSize: 35
},
_innerText: {
  // color: 'red'
  color: '#000'
},
get innerText() {
  return this._innerText;
},
set innerText(value) {
  this._innerText = value;
},
outerText: {
  // color: 'blue'
  color: '#000'
},
wrap: {
  // backgroundColor: '#909',
  height: '100%'
},
buttons:{
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  display: 'flex',
  fontWeight: 'bold',
  marginBottom: 50
  // marginTop: 10
},
container: {
  // backgroundColor: '#000',
  height: '100%',
  flex:  1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 5
},
textStyle: {
  textAlign: 'center',
  fontSize: 35,
  color: '#000',
  fontFamily: "Poppins",
  fontWeight: 'bold',
  marginTop: -40
},
textStyle1: {
  marginBottom: 100,
  textAlign: 'center',
  fontSize: 28,
  color: '#3d3d3d',
  fontFamily: "Poppins",
  fontWeight: 'bold'
  
},
// clock { 
  //   // width: 300,
  //   // height:  300,
  //   borderRadius: 50%,
  //   position: absolute,
  //   top: 50%,
  //   left: 50%,
  //   transform: translate(-50%, -50%);
  //   box-shadow 0 2px 30px rgba(0, 0, 0, 0.2),
  //   font-size: 24px,
  //   color: #4444,
  //   textAlign: center,
  // },
//   submit:{
//     // marginRight:20,
//     // marginLeft:20,
//     // marginTop:10,
// },
// submitText:{
//     // paddingTop:20,
//     paddingBottom:20,
//     color:'#fff',
//     textAlign:'center',
//     backgroundColor:'#68a0cf',
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#fff'
// },  

wrapper : {
  flex: 1,
  backgroundColor: '#ffff',
  alignItems: 'center',
  justifyContent: 'center'
},
mover: {
  position: 'absolute',
  width: SIZE,
  height: SIZE,
  borderRadius: SIZE / 2,
  alignItems: 'center',
  justifyContent: 'flex-start'
},
hours: {
  // position: 'absolute',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  height: '35%',
  marginTop: '15%',
  width: 4,
  borderRadius: 4
},
minutes: {
  // position: 'absolute',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  height: '45%',
  marginTop: '5%',
  width: 3,
  borderRadius: 3
},
seconds: {
  // position: 'absolute',
  backgroundColor: 'rgba(227, 71, 134, 1)',
  height: '50%',
  width: 2,
  borderRadius: 2
},
bigQuadran: {
  width: SIZE * 0.8,
  height: SIZE * 0.8,
  borderRadius: SIZE * 0.4,
  backgroundColor: 'rgba(200, 200, 200, 0.2)',
  position: 'absolute'
},
mediumQuadran:{
  width: SIZE * 0.5,
  height: SIZE * 0.5,
  borderRadius: SIZE * 0.25,
  backgroundColor: 'rgba(200, 200, 200, 0.4)',
  position: 'absolute'
},
smallQuadran: {
  width: 10,
  height: 10,
  borderRadius: 5,
  backgroundColor: 'rgba(227, 71, 134, 1)',
  position: 'absolute'
}

});

export default App;