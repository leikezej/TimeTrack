import React, { useRef, useState } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, Text, ImageBackground, TouchableOpacity, View } from 'react-native';
// import { NeuView } from 'react-native-neu-element';
import { NeuButton, NeuView, NeuInput, NeuBorderView } from 'react-native-neu-element'

import Icon from 'react-native-vector-icons/FontAwesome';

import profile from '../assets/images/icons/medusa.png';

// Tab ICons...
import home from '../assets/images/icons/home.png';
import search from '../assets/images/icons/search.png';
import notifications from '../assets/images/b-icons/ios-notification.png';
import settings from '../assets/images/icons/settings.png';
import logout from '../assets/images/icons/logout.png';

// Menu
import menu from '../assets/images/icons/menu.png';
import close from '../assets/images/icons/close.png';

// HomeStack Screens
import TodoScreen from '../screens/pages/Todo/TodoScreen';
import TimeSheet from './pages/TimeSheet/TimeSheetScreen';
import CalendarScreen from '../screens/pages/Calendar/CalendarScreen';
import TasksScreen from '../screens/pages/Tasks/TasksScreen';
import ClockScreen from '../screens/pages/Clock/ClockScreen';
import NotesScreen from '../screens/pages/Notes/NotesScreen';


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
    navigation.navigate('CalendarScreen');
  }
  
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: 'flex-start', padding: 15 }}>
        <Image source={profile} style={{
          width: 100,
          height: 100,
          borderRadius: 10,
          // marginTop: 8
        }}></Image>

        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
          // marginTop: 10
        // }}>{profile.name}</Text>
        }}>Master Jep</Text>
  
  <View style={{ flexDirection: 'row' }}>
  <TouchableOpacity>
          <Text style={{
            marginTop: 6,
            color: 'black'
          }}>Edit Profile</Text>
           <Image style={styles.drawerImage} source={require('../assets/images/icons/fbc.png')} />
           <Image style={styles.drawerImage} source={require('../assets/images/icons/g3.png')} />
           {/* <Image style={styles.drawerImage} source={require('../assets/images/icons/ig3.png')} />
           <Image style={styles.drawerImage} source={require('../assets/images/icons/tw2.png')} />
           <Image style={styles.drawerImage} source={require('../assets/images/icons/git3.png')} /> */}
        </TouchableOpacity>

  </View>
        <View style={{ flexGrow: 1, marginTop: 20 }}>
          {
            // Tab Bar Buttons....
          <>
            <TouchableOpacity style={styles.drawer}>
              <Image style={styles.drawerImage} source={require('../assets/images/icons/home.png')} />
              <Text style={styles.drawerText}>Home</Text> 
               {/* onPress={()=>console.log('dhjksds')}
               onPress={this.onPress}
               <Icon style={styles.icon} name="circle-thin" color="#31C283" size={moderateScale(20)}/> */}
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.drawer}>
              {/* <Image style={styles.drawerImage} source={require('../assets/images/icons/messages')} /> */}
              <Text style={styles.drawerText}>Messages</Text> 
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.drawer}>
              <Image style={styles.drawerImage} source={require('../assets/images/icons/settings.png')} />
              <Text style={styles.drawerText}>Statistics</Text> 
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.drawer}>
              <Image style={styles.drawerImage} source={require('../assets/images/icons/settingss.png')} />
              <Text style={styles.drawerText}>Activity Logs</Text> 
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.drawer}>
              <Image style={styles.drawerImage} source={require('../assets/images/icons/settingss.png')} />
              <Text style={styles.drawerText}>Revenue</Text> 
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.drawer}> 
              <Text style={styles.drawerText}>TimeSheet</Text> 
            </TouchableOpacity>
          </>
          }

          {/* {TabButton(currentTab, setCurrentTab, "MainScreen", MainScreen, component={SettingsStack})} */}
          {/* {TabButton(currentTab, setCurrentTab, "Home", home)} */}
          {TabButton(currentTab, setCurrentTab, "Privacy & Policy", search)}
          {TabButton(currentTab, setCurrentTab, "Terms & notifications", notifications)}
          {TabButton(currentTab, setCurrentTab, "Helps & Feedback", settings)}

        </View>

        <View>
          {TabButton(currentTab, setCurrentTab, "LogOut", logout)}
        </View>

      </View>

      {
        // Over lay View...
      }

      <Animated.View style={{
        flexGrow: 1,
        backgroundColor: '#eef2f9',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: showMenu ? 10 : 0,
        // Transforming View...
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
          
       {/* <NeuView
        width={370}
        height={900}
        color={'#eef2f9'}
        containerStyle={{
          borderRadius: 10,
          // flexDirection: 'row'
          // width: '500',
          // height: '500',
        }}
      > */}
          
      <View style={styles.header}>
            <Image source={showMenu ? close : menu} style={{
              // width: 150,
              // height: 70,
              alignItems:'flex-end',
              justifyContent: 'flex-end',
              // tintColor: 'black',
              // marginBottom: 20,
              // background: '#eef2f9',
              borderRadius: 20,
              // marginLeft: 0,
              onPress: () => console.warn("haha"),
            }}></Image>
            
              {/* <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginRight: 50,
            textAlign: 'center',
            // , paddingTop: 15,
            paddingBottom: 15,
            justifyContent: 'center',
            alignItems: 'center'
          // }}>{profile.name}</Text>
          }}>Master Jezekiel</Text> */}
          
          {/* LOGO */}
          <View>
            <ImageBackground source={require('../assets/images/icons/clocks.png')} style={{
              width: 120,
              marginLeft: 50,
              // marginBottom: 50,
              // margin: 5,
              // padding: 5,
              justifyContent: 'center',
              alignContent: 'center',
              height: 80,
            }}></ImageBackground>
            </View>
            {/* <Image source={require('../assets/images/icons/search.png')} style={{
              width: 40,
              height: 40,
            }}></Image> */}
            
            <Image source={require('../assets/images/icons/notification.png')} style={{
              width: 0,
              marginRight: 60,
              height: 30,
            }}></Image>
            
            <Image source={require('../assets/images/icons/noti.png')} style={{
              width: 110,
              marginRight: 10,
              height: 100,
              backgroundColor: 'transparent'
            }}></Image>
      
      </View> 
      </TouchableOpacity>
      
      <NeuBorderView
           onPress={() => navigation.navigate('CalendarScreen')}
        width={360}
        height={720}
        color='#eef2f9'
        borderWidth={6}
        borderRadius={5}
        marginTop={15}
        style={{
        }}
      >
      <ScrollView
         indicatorStyle="none"
      >
      <View style={styles.box}>
          <NeuButton
            color="#eef2f9"
            width={150}
            height={100}
            borderRadius={16}
            // margin={5}
            // padding={5}
            style={styles.button}
            onPress={navigate} 
            >
          <Text>Calendar Screen</Text>
          <Image source={require('../assets/images/icons/nice-cal.png')} style={{
            width: 110,
            height: 90,
          }}>
          </Image>
          
          </NeuButton>
          
          <NeuButton
            color="#eef2f9"
            width={150}
            height={100}
            borderRadius={16}
            // margin={5}
            // padding={5}
           onPress={() => navigation.navigate('ClockScreen')}
            style={styles.button}>
        <Text>Clock Manager</Text>
    <Image source={require('../assets/images/icons/sheet.png')} style={{
          onPress: ('i was pressed'),
          backgroundColor: '#eef2f9',
            width: 110,
            height: 90,
          }}>
          </Image>
          
          </NeuButton>
          
    </View>
      <View style={styles.box}>
          <NeuButton
            color="#eef2f9"
            width={150}
            height={100}
            borderRadius={16}
            onPress={() => navigation.navigate('TodoScreen')}
            // onPress={navigate}
            style={styles.button}>
            {/* onPress={navigate}  */}
            <Text>Todo List</Text>
          <Image source={require('../assets/images/icons/plus.png')} style={{
            width: 100,
            height: 100,
          }}></Image>
          </NeuButton>
          
          <NeuButton
            color="#eef2f9"
            width={150}
            height={100}
            borderRadius={16}
            // margin={5}
            // padding={5}
            onPress={() => navigation.navigate('TasksScreen')}
            style={styles.button}>
              <Text>Tasks</Text>
              <ImageBackground source={require('../assets/images/icons/todo.png')} style={{
            width: 140,
            height: 80,
          }}>
          
          <ImageBackground source={require('../assets/images/icons/todo.png')} style={{
            width: 140,
            height: 80,
          }}>
          </ImageBackground>
          </ImageBackground>
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
            style={styles.button}
            onPress={() => navigation.navigate('NotesScreen')}
            >
              <Text>Notes</Text>
      <Image source={require('../assets/images/icons/soft.jpg')} style={{
            width: 150,
            height: 100,
            borderRadius: 20
          }}>

          </Image>
          
            {/* <Text>Projects</Text> */}
          </NeuButton>
          
          <NeuButton
            color="#eef2f9"
            width={150}
            height={100}
            borderRadius={16}
            // margin={5}
            // padding={5}
            style={styles.button
            }
            onPress={() => navigation.navigate('TimeSheetScreen')}
            >
              <Text>TimeSheet</Text>
        <Image source={require('../assets/images/icons/clokc.png')} style={{
            width: 120,
            height: 120,
          }}></Image>
            {/* <Text>TimeSheet</Text> */}
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
            style={styles.button}>
              <Image source={require('../assets/images/icons/invest.png')} style={{
            width: 120,
            height: 120,
          }}></Image>
            {/* <Text>Expenses</Text> */}
          </NeuButton>
          
          <NeuButton
            color="#eef2f9"
            width={150}
            height={100}
            borderRadius={16}
            // margin={5}
            // padding={5}
            style={styles.button}>
    <Image source={require('../assets/images/icons/people.png')} style={{
              width: 120,
              height: 120,
            }}></Image>
            {/* <Text>My Team</Text> */}
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
            style={styles.button}>
            {/* <Text>Notes</Text> */}
            <Image source={require('../assets/images/icons/clokc.png')} style={{
              width: 120,
              height: 120,
            }}></Image>
          </NeuButton>
          
          <NeuButton
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
      <View style={styles.box}>
          <NeuButton
            color="#eef2f9"
            width={150}
            height={100}
            borderRadius={16}
            // margin={5}
            // padding={5}
            style={styles.button}>
            {/* <Text>Attendance Manager</Text> */}
      <Image source={require('../assets/images/cyan/line-chart.png')} style={{
              width: 80,
              height: 80,
            }}></Image>
          </NeuButton>
          
          <NeuButton
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
            {/* <Text>My Notes</Text> */}
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
            style={styles.button}>
              <Image source={require('../assets/images/cyan/walllet.png')} style={{
              width: 80,
              height: 80,
            }}></Image>
            {/* <Text>Normal Btn</Text> */}
          </NeuButton>
          
          <NeuButton
            color="#eef2f9"
            width={150}
            height={100}
            borderRadius={16}
            // margin={5}
            // padding={5}
            style={styles.button}>
            {/* <Text>Normal Btn</Text> */}
            <Image source={require('../assets/images/cyan/support.png')} style={{
              width: 80,
              height: 80,
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
    </View>
     
    </ScrollView>
    </NeuBorderView>
          {/* </NeuView> */}
          {/* <Text style={{
          }}>Techie, YouTuber, PS Lover, Apple Sheep's Sister</Text> */}
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
        backgroundColor: currentTab == title ? 'black' : 'transparent',
        paddingLeft: 13,
        paddingRight: 20,
        borderRadius: 8,
        marginTop: 10
      }}>

        <Image source={image} style={{
          width: 25, height: 25,
          tintColor: currentTab == title ? "#e3e3e3" : "black"
        }}></Image>

        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          color: currentTab == title ? "#e3e3e3" : "black"
        }}>{title}</Text>

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dedede',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  drawer: {
    backgroundColor: '#999',
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'center',
    height: 40,
    margin: 3,
    padding: 3,
    marginTop: 8,
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
    backgroundColor: '#dedede',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  box: {
    // flex: 1,
    backgroundColor: '#dedede',
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
    marginRight: 10
  }
});

