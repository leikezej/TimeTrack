import React, { useRef, useState, useEffect } from 'react';
import { Animated, Badge, Image, SafeAreaView, Button, Alert, Modal, Pressable, StyleSheet, Text, ImageBackground, TouchableOpacity, View } from 'react-native';
// import { NeuView } from 'react-native-neu-element';
import { NeuButton, NeuView, NeuInput, NeuBorderView, NeuSpinner } from 'react-native-neu-element'
import moment from 'moment'
import Icon from 'react-native-vector-icons/FontAwesome';
import {AlertBox} from 'react-native-alertbox';
import profile from '../assets/images/icons/medusa.png';
import DateTimePicker from '@react-native-community/datetimepicker';

// import HomeTabs from '../../App';

// Tab ICons...
// import home from '../assets/images/b-icons/home.png';
import search from '../assets/images/b-icons/ios-search.png';
import notifications from '../assets/images/b-icons/ios-notification.png';
import settings from '../assets/images/b-icons/ios-setting.png';
import logout from '../assets/images/b-icons/logout.png';

// Menu
import menu from '../assets/images/b-icons/menu2.png';
import close from '../assets/images/b-icons/ios-closes.png';

// HomeStack Screens
// import TodoScreen from '../screens/pages/Todo/TodoScreen';
// import TimeSheet from './pages/TimeSheet/TimeSheetScreen';
// import CalendarScreen from './pages/Calendar/CalendarScreen';
// import TasksScreen from '../screens/pages/Tasks/TasksScreen';
// import ClockScreen from '../screens/pages/Clock/ClockScreen';
// import NotesScreen from './pages/Notes/NotesScreen';

// import BottomNavigator from '../screens/bottom/BottomNavigator';
// import CircleButton from 'react-native-circle-button';

// Photo
import photo from '../assets/images/logos/emit.jpg';
import { Row } from 'react-native-table-component';
import { ScrollView } from 'react-native-gesture-handler';

export default function App({ navigation }) {
  const [currentTab, setCurrentTab] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);
                               
// } onPress={() => navigation.navigate('HomeScreen')}
  function navigate(){
    // navigation.navigate('TodoScreen');
    navigation.navigate('RegisterScreen');
  }
  
  const [currentDate, setcurrentDate] = useState();
  
  const ref = useRef();
  
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
  // const [modalVisible, setModalVisible] = useState(false);
  
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
    };
  }, []
  
  )
  return (
    <SafeAreaView style={styles.container}>
      <View style={{  }}>
        <Image source={profile} style={{
          width: 100,
          height: 100,
          borderRadius: 10,
          // marginTop: 8
        }}></Image>

        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
          // marginTop: 10
        // }}>{profile.name}</Text>
        }}>Master Jep</Text>
  
  
  {/* // drawer social media */}
  <View style={{ flexDirection: 'row' }}>
          <Text style={{
            marginTop: 6,
            color: 'black'
          }}>Edit Profile</Text>

  </View>
  
  <View style={{ flexDirection: 'row' }}>
           <Image style={styles.drawerImage} source={require('../assets/images/icons/fbc.png')} />
           <Image style={styles.drawerImage} source={require('../assets/images/icons/fbc.png')} />
           <Image style={styles.drawerImage} source={require('../assets/images/icons/fbc.png')} />
           <Image style={styles.drawerImage} source={require('../assets/images/icons/g3.png')} />
  </View>
  
  {/* Drawer Buttons  */}
        <View style={{ flexGrow: 1, marginTop: 15, backgroundColor: '#eef2f9' }}>
          {
            // Tab Bar Buttons....
            
            // DRAWER BUTTONS
          <Animated.View>
            <TouchableOpacity style={styles.drawer}>
              <Image style={styles.drawerImage} source={require('../assets/images/icons/home.png')} />
              <Text style={styles.drawerText}>Dashboard</Text> 
               {/* onPress={()=>console.log('dhjksds')}
               onPress={this.onPress}
               <Icon style={styles.icon} name="circle-thin" color="#31C283" size={moderateScale(20)}/> */}
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.drawer}>
              {/* <Image style={styles.drawerImage} source={require('../assets/images/icons/messages')} /> */}
              <Text style={styles.drawerText}>Messages</Text> 
            </TouchableOpacity>
            {/* activeTintColor: '#fff', */}
         {/* inactiveTintColor: 'lightgray', */}
            
            <TouchableOpacity style={styles.drawer}>
              <Image style={styles.drawerImage} source={require('../assets/images/icons/settings.png')} />
              <Text style={styles.drawerText}>Statistics</Text> 
            </TouchableOpacity>
            
            {/* <TouchableOpacity style={styles.drawer}>
              <Image style={styles.drawerImage} source={require('../assets/images/icons/settings.png')} />
              <Text style={styles.drawerText}>Revenue</Text> 
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.drawer}> 
              <Text style={styles.drawerText}>TimeSheet</Text> 
            </TouchableOpacity> */}
          </Animated.View>
          
          
          }
          {/* {TabButton(currentTab, setCurrentTab, "MainScreen", MainScreen, component={SettingsStack})} */}
          {/* {TabButton(currentTab, setCurrentTab, "Home", home)} */}
          {TabButton(currentTab, setCurrentTab, "Privacy & Policy", search)}
          {TabButton(currentTab, setCurrentTab, "Terms & notifications", notifications)}
          {TabButton(currentTab, setCurrentTab, "Helps & Feedback", settings)}
          <View style={{ marginTOp: 20}}>
          {TabButton(currentTab, setCurrentTab, "LogOut", logout)}
          </View>
        </View>
      </View>
      

    {/* HomeScreen Neuborder Background */}
      <Animated.View style={{
        // flexGrow: 1, 
        // marginTop:
        backgroundColor: '#dadce0',
        position: 'absolute',
        width: '100%',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: showMenu ? 20 : 0,
        transform: [
          { scale: scaleValue },
          { translateX: offsetValue }
        ]
      }}>

        {
          // Menu Button...
        }

        <Animated.View style={{
          transform: [{
            translateY: closeButtonOffset
          }]
        }}>
          <TouchableOpacity onPress={() => {
            Animated.timing(scaleValue, {
              toValue: showMenu ? 1 : 0.9,
              duration: 60,
              useNativeDriver: true
            })
              .start()

            Animated.timing(offsetValue, {
              toValue: showMenu ? 0 : 250,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(closeButtonOffset, {
              toValue: !showMenu ? 10 : 0,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            setShowMenu(!showMenu);
          }}>

            
      <View style={styles.header}>
      <Image source={showMenu ? close : menu} style={{
                    // width: 150,
                    // height: 70,
                    margin: 2,
                    marginTop: 5,
                    marginLeft: 5,
                    borderRadius: 20,
                    padding: 2,
                    // alignItems:'flex-end',
                    // justifyContent: 'flex-end',
                    // marginBottom: 20,
                    // marginLeft: 0,
                  }}></Image>
     
        {/* LOGO */}
          <View>
            <Image source={require('../assets/images/icons/clocks.png')} style={{
              width: 120,
              marginLeft: 50,
              // marginBottom: 50,
              // margin: 5,
              // padding: 5,
              justifyContent: 'center',
              alignContent: 'center',
              height: 80
            }}>
            </Image>
          </View>
          
          {needsBadge && <View>
                <TouchableOpacity>
                    <Image source={require('../assets/images/b-icons/ios-notification-b.png')} style={{
                      width: 40,
                      marginTop: 10,
                      marginLeft: 120,
                      height: 40,
                      backgroundColor: 'transparent'
                    }}></Image>
                </TouchableOpacity>
            </View> }
            
      </View> 
      </TouchableOpacity>
          
          <NeuBorderView
            width={360}
            color={'#eef2f9'}
            height={720}
            borderWidth={4}
            borderRadius={5}
            // marginTop={15}
            style={{
            }}
          >
          {/* tab icons */}
          <ScrollView
             indicatorStyle="none"
          >
    
    {/* F I R S T MENU */}
        <View style={styles.box1}>
        
    {/* tasks */}
    <View>
        <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 16, textAlign: 'center' }}>Tasks</Text>  
          <NeuButton
          onPress={() => navigation.navigate('TaskScreen')}
            color={"#eef2f9"}
            width={70}
            is Convex
            height={70}
            borderRadius={85}
            style={{marginRight:5}}>
            <Image source={require('../assets/images/b-icons/ios-todo-w.png')} style={{
            width: 40,
            height: 40,
          }}></Image>
          </NeuButton>
    </View>
    
    {/* todos */}
      <View>
        <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 16, textAlign: 'center' }}>Todos</Text>
          <NeuButton
        onPress={() => navigation.navigate('TodoScreen')}
          // color="#f2f2f2"
          color={"#eef2f9"}
          width={70}
          is Convex
          height={70}
          borderRadius={85}
          style={{marginRight:5}}>
          {/* <Image source={require('../assets/images/b-icons/todo-list.png')} style={{ */}
          <Image source={require('../assets/images/b-icons/todo-list.png')} style={{
          width: 40,
          height: 40,
        }}></Image>
        </NeuButton>
      </View>
      
      {/* notes */}
    <View styles={{ flexDirection: 'row' }}>
          <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 16, textAlign: 'center' }}>Notes</Text>
            <NeuButton
            onPress={() => navigation.navigate('NoteScreen')}
            color="#eef2f9"
            width={75}
            height={75}
            // marginBottom={80}
            borderRadius={85}>
            {/* style={{ marginTop:15 }}> */}
              {/* <Text>Notes</Text> */}
            {/* <Image source={require('../assets/images/icons/tasks.png')} style={{ */}
            <Image source={require('../assets/images/b-icons/ios-notes.png')} style={{
              width: 50,
              height: 50,
              marginLeft: 10
              // marginBottom: 20,
              // marginTop: 5,
              // marginLeft: 7,
            }}></Image>
          </NeuButton>
    </View>
        </View>
        
        
        
        
    {/* S E C O N D  MENU */}
        <View style={styles.box2}>
        
        
        {/* T I M E IN */}
        <View
            style={{
              marginLeft: 20
            }}
         >
            {/* <View>
              <AlertBox />
              <Button
                title="Click Me"
                onPress={() => ref.current.fire({title: 'Title', message: 'Some text message'})}
              />
            </View>
            
             */}
            <TouchableOpacity>
               <View
                style={styles.innerView}
                onStartShouldSetResponder={
                  () => Alert.alert('Express TimeIN',
                        currentDate,
                    [
                      {text: 'Timein Now', onPress: () => console.log('TimeIn Successfully', {currentDate})},
                      {text: 'Cancel', onPress: () => console.log('Cancel clicked'), style: 'cancel'},
                      {text: 'Done', onPress: () => console.log('Done clicked')},
                    ],
                    { 
                      cancelable: true 
                    }
                  )
                }>
                
            <Text
              style={{ color: '#000000', fontWeight: 'bold', fontSize: 16, marginRight: 15, textAlign: 'center' }}
              >Time</Text>
            <View>
                <Image source={require('../assets/images/icons/in.png')} style={{
                  width: 80,
                  height: 80,
                  // marginTop: 30,
                  // marginLeft: 40,
                  borderRadius: 10,
                  // tintColor: '#000000',
                  // color: '#000000',
                }}></Image>
                </View>
                </View>  
            </TouchableOpacity>
         </View> 
        
                {/* T I M E OUT */}
                <View
              style={{
                marginLeft: 20
              }}
            >
            <TouchableOpacity>
               <View
                style={styles.innerView}
                onStartShouldSetResponder={
                  () => Alert.alert('Express TimeOUT',
                        currentDate,
                    [
                      {text: 'TimeOut Now', onPress: () => console.log('TimeOUT Successfully')},
                      {text: 'Cancel', onPress: () => console.log('Cancel clicked'), style: 'cancel'},
                      // {text: 'Done', onPress: () => console.log('Done clicked')},
                    ],
                    { 
                      cancelable: true 
                    }
                  )
                }>
                
            <Text
              style={{ color: '#000000', fontWeight: 'bold', fontSize: 16, marginRight: 15, textAlign: 'center' }}
              >Time</Text>
            <View>
                <Image source={require('../assets/images/icons/out.png')} style={{
                  width: 80,
                  height: 80,
                  // marginTop: 30,
                  // marginLeft: 40,
                  borderRadius: 10,
                  // tintColor: '#000000',
                  // color: '#000000',
                }}></Image>
                </View>
                </View>  
            </TouchableOpacity>
           </View>  
        
   
                    {/* timecard */}
    <View styles={{ flexDirection: 'row' }}>
      <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 16, textAlign: 'center' }}>TimeLogs</Text>
        <NeuButton
          onPress={() => navigation.navigate('TimeSheetScreen')}
          color="#eef2f9"
          width={75}
          height={75}
          borderRadius={85}>
          {/* style={{marginRight:60}}> */}
          <Image source={require('../assets/images/b-icons/timecard.png')} style={{
          width: 55,
          height: 55,
        }}></Image>
        </NeuButton>
    </View>
    
        </View>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        {/* THIRD MENU */}
          <View style={styles.box}>
    
              {/* Clock Area */}
              <NeuButton
                color="#eef2f9"
                width={150}
                height={100}
                borderRadius={16}
                // margin={5}
                // padding={5}
               onPress={() => navigation.navigate('ClockScreen')}
                style={styles.button}>
            <Text>Clock</Text>
            <Image source={require('../assets/images/b-icons/meeting.png')} style={{
                width: 55,
                height: 55,
                marginTop: 7
              }}></Image>
              </NeuButton>
    
          {/* Calendar Area */}
          <NeuButton
               onPress={() => navigation.navigate('CalendarScreen')}
                color="#eef2f9"
                width={150}
                height={100}
                borderRadius={16}
                // margin={5}
                // padding={5}
                style={styles.button}
                // onPress={navigate} 
                >
              <Text>Calendar</Text>
              <Image source={require('../assets/images/b-icons/calendar-schedule.png')} style={{
                  marginTop: 10,
                  width: 50,
                  height: 50,
                  tintColor: '#000',
                }}></Image>
              </NeuButton>
              
    
        </View>
        
        
        
        {/* FOURTH SCREEN */}
          <View style={styles.box}>
              {/* timesheet screen */}
              <NeuButton
                color="#eef2f9"
                width={150}
                height={100}
                borderRadius={16}
                // margin={5}
                // padding={5}
                onPress={() => navigation.navigate('TimeSheetScreen')}
                style={styles.button}>
                  <Text>TimeSheets</Text>
                  <Image source={require('../assets/images/b-icons/timesheet1.png')} style={{
                width: 50,
                marginTop: 5,
                height: 50,
              }}>
              </Image>
              </NeuButton>
              
          {/* Attendance Section */}
              <NeuButton
      color="#eef2f9"
      width={150}
      height={100}
      borderRadius={16}
      // margin={5}
      // padding={5}
      onPress={() => navigation.navigate('AttendanceScreen')}
      // onPress={navigate}
      style={styles.button}>
      {/* onPress={navigate}  */}
      <Text>Attendance</Text>
    <Image source={require('../assets/images/b-icons/register.png')} style={{
      width: 50,
      height: 50,
    }}></Image>
              </NeuButton>
        </View>
        
        
          
          <View style={styles.box}>
              <NeuButton
                color="#eef2f9"
                width={150}
                height={100}
                borderRadius={16}
                // margin={5}
                // padding={5}
                onPress={() => navigation.navigate('InvestScreen')}
                style={styles.button}>
                  <Image source={require('../assets/images/icons/invest.png')} style={{
                width: 120,
                height: 120,
              }}></Image>
                {/* <Text>Expenses</Text> */}
              </NeuButton>
              
              <NeuButton
                onPress={() => navigation.navigate('TeamsScreen')}
                color="#eef2f9"
                width={150}
                height={100}
                borderRadius={16}
                // margin={5}
                // padding={5}
                style={styles.button}>
                  {/* <Text>My Team</Text> */}
        <Image source={require('../assets/images/icons/people.png')} style={{
                  width: 120,
                  height: 120,
                }}></Image>
              </NeuButton>
        </View>
        
          <View style={styles.box}>
              <NeuButton
                onPress={() => navigation.navigate('NotificationsScreen')}
                color="#eef2f9"
                width={150}
                height={100}
                borderRadius={16}
                // margin={5}
                // padding={5}
                style={styles.button}>
                {/* <Text>Notes</Text> */}
                <Image source={require('../assets/images/b-icons/ios-notification-b.png')} style={{
                  width: 70,
                  height: 70,
                }}></Image>
              </NeuButton>
              
              <NeuButton
                onPress={() => navigation.navigate('MailScreen')}
                color="#eef2f9"
                width={150}
                height={100}
                borderRadius={16}
                // margin={5}
                // padding={5}
                style={styles.button}>
          <Image source={require('../assets/images/icons/maill.png')} style={{
                  width: 120,
                  height: 120,
                }}></Image>
                {/* <Text>Expenses</Text> */}
              </NeuButton>
        </View>
        
          {/* <View style={styles.box}>
              <NeuButton
                onPress={() => navigation.navigate('LineChart')}
                color="#eef2f9"
                width={150}
                height={100}
                borderRadius={16}
                // margin={5}
                // padding={5}
                style={styles.button}>
          <Image source={require('../assets/images/cyan/line-chart.png')} style={{
                  width: 80,
                  height: 80,
                }}></Image>
              </NeuButton>
              
              <NeuButton
                onPress={() => navigation.navigate('DonutChart')}
                color="#eef2f9"
                width={150}
                height={100}
                borderRadius={16}
                // margin={5}
                // padding={5}
                style={styles.button}>
      <Image source={require('../assets/images/cyan/pie-chart.png')} style={{
                  width: 80,
                  height: 80,
                }}></Image>
              </NeuButton>
        </View> */}
        
        
          {/* <View style={styles.box}>
              <NeuButton
                color="#eef2f9"
                width={150}
                height={100}
                borderRadius={16}
                // margin={5}
                // padding={5}
                style={styles.button}>
                <Text>Normal Btn</Text>
              </NeuButton>
              
              <NeuButton
                color="#eef2f9"
                width={150}
                height={100}
                borderRadius={16}
                // margin={5}
                // padding={5}
                style={styles.button}>
                <Text>Normal Btn</Text>
              </NeuButton>
        </View> */}
          </ScrollView>
        </NeuBorderView>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
}


// For multiple Buttons...
const TabButton = (currentTab, setCurrentTab, title, image) => {
  return (

    <TouchableOpacity onPress={() => {
      if (title == "LogOut") {
        // Do your Stuff...
      } else {
        setCurrentTab(title)
      }
    }}>
      <View style={{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: currentTab == title ? 'black' : '#ccc',
        paddingLeft: 13,
        paddingRight: 20,
        borderRadius: 8,
        marginTop: 10
      }}>

        <Image source={image} style={{
          width: 25, height: 25,
          tintColor: currentTab == title ? "#eef2f9" : "black"
        }}></Image>

        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          color: currentTab == title ? "#eef2f9" : "black"
        }}>{title}</Text>

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  timein: {
    width: 50,    
    height: 50    
  },
// side drawer
  container: {
    backgroundColor: '#eef2f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  containers: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
  },
  //drawer icons
  drawer: {
    backgroundColor: '#c1c1c1',
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'center',
    height: 40,
    margin: 3,
    padding: 3,
    marginTop: 6,
    // color: 'white',
    flexDirection: 'row'
  },
  drawerText:{
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 35,
    color: 'black'
  },
  drawerImage:{
    color: 'black',
    width: 25, 
    height: 25,
    alignItems: "flex-start",
    marginRight: 15
    // justifyContent: 'center'
  },
  header: {
  marginBottom: 10,
    flexDirection: 'row',
    marginRight: 250,
    backgroundColor: '#eef2f9',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  box: {
    // flex: 1,
    // backgroundColor: '#c1c1c1',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 15,
    margin: 5,
    marginBottom: 30,
    marginTop: 20,
    padding: 5
  },
  
  box1: {
    flex: 1,
    backgroundColor: '#eef2f9',
    // backgroundColor: '#fcfcfc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    marginTop: 20,
    padding: 5
  },
  
  box2: {
    flex: 1,
    backgroundColor: '#eef2f9',
    // backgroundColor: '#fcfcfc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    marginTop: 20,
    padding: 5
  },
  button: {
    // marginTop: 20,
    // flexDirection: 'row',
    marginLeft: 10,
    backgroundColor: '#dedede',
    // marginRi: 10
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13,
  },
  // card: {
  //   backgroundColor: '#f2f2f2',
  //   borderRadius: 8,
  //   paddingVertical: 45,
  //   paddingHorizontal: 25,
  //   width: '50%',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginLeft: 40,
  //   marginVertical: 10,
  // },
  // elevation: {
  //   elevation: 20,
  // }

});

