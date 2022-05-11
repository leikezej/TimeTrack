import React from 'react';
// import React, {useState} from 'react';
import {SafeAreaView, ImageBackground, Button, ScrollView, StyleSheet, View, Text, TextInput, Image, TouchableOpacity} from 'react-native';

import BackIcon from 'react-native-vector-icons/FontAwesome';

import { NeuBorderView, NeuView, NeuInput, NeuButton } from 'react-native-neu-element';

const image = { uri: "https://reactjs.org/logo-og.png" };

const API_URL = Platform.OS === 'ios' ? 'http://localhost:272/api/auth/signin' : 'http://localhost:272/api/auth/signin';

// import '../assets/images/logos/logo.jpg';   

const Login = ({ navigation }) =>  {
      function navigate(){
        navigation.navigate('RegisterScreen');    
    }
    
     return(
       <ScrollView
      //  justifyContent={center}
      //  alignItems={center}
       style={styles.mainView}>
           {/* <View style={styles.TopView}>
              <Image source={require('../assets/images/logos/morph.png')}/>
           </View> */}
       <ImageBackground source={image} resizeMode="cover" style={styles.image}>
           
           <View style={styles.BottomView}>
              {/* <BackIcon onPress={navigate} name="chevron-left" style={styles.Icon} size={60} color={"#000"}/> */}
               
               {/* <Text style={styles.Welcome1}>
                  Welcome Back
              </Text> */}
              
              <Text style={styles.Welcome2}>
                  Log In
              </Text>

                  
              <View style={styles.FormView}>
                   {/* <TextInput placeholder={"Email Address"} placeholderTextColor={"#fff"} style={styles.TextInput}/>
                   <TextInput placeholder={"Passsword"} secureTextEntry={true} placeholderTextColor={"#fff"} style={styles.TextInput}/> */}
                        
                        {/* Username or Email */}
                        <View style={ styles.SectionStyle}>
                           <NeuView 
                                color='#eef2f9' 
                                height={70} 
                                width={350}
                                marginTop={20}
                                borderRadius={16}
                                  inset
                                  >
                                  
                                  <TextInput 
                                      placeholder={"Email Address"}
                                      height={190}
                                      width={100}
                                      keyboardType={'email-address'}
                                      secureTextEntry={true} 
                                      style={styles.TextInput} 
                                      borderColor={'transparent'}
                             />
                           </NeuView>
                         </View>
                   
                   
                         {/* password  */}
                         <View style={{ marginTop: 20 }}>
                                <NeuView  
                                        color='#eef2f9' 
                                        height={70} 
                                        width={350}
                                        marginTop={20}
                                        borderRadius={16}
                                          inset
                                          >
                                    <View style={styles.sectionStyle}>
                          <Image
                            source={{
                              uri:
                                'https://img.icons8.com/ios/344/forgot-password.png',
                            }}
                            style={styles.imageStyle}
                          />
                          <TextInput
                    activeUnderlineColor="black"
                          secureTextEntry
                            style={{flex: 1}}
                            placeholder="Password"
                            underlineColorAndroid="transparent"
                            borderColor="transparent"
                          />
                            </View>
                                    
                                    </NeuView>
                         </View>
                   
                      {/* <Text style={styles.InputLabel}>Password</Text>
                   <TextInput secureTextEntry={true} placeholderTextColor={"#000"} style={styles.TextInput}/> */}
                      
                      <TouchableOpacity
                        onPress={() => navigation.navigate('ForgotPassScreen')}
                      >
                          <Text style={styles.forgot}> 
                            Forgot Password? 
                          </Text>
                      </TouchableOpacity>
                      
                      
                      
                  <NeuButton
                              // onPress={() => Alert.alert('Time In pressed')}
                              // onPress={'navigate'}
                              onPress={navigate}
                              // onPress={'RegisterScreen'}
                              // onPress={() => navigation.navigate('RegisterScreen')}
                                  color={'#eef2f9'}
                                  // color="#841584"
                                  width={300}  
                                  height={70}
                                  fontSize={70}
                                  fontWeight={'bold'}
                                  borderRadius={16}
                                  style={{marginLeft: 20, marginTop: 50}}>
                                      <Text style={styles.buttonText}>
                                        LOGIN
                                      </Text>
                              </NeuButton>
              </View>
              
              {/* <View style={styles.socialIcons}>
                    <Facebook onPress={() => navigation.navigate('Login')} name="facebook" style={styles.Icon} size={60} color={"#000"}/>
                    <Github onPress={() => navigation.navigate('Login')} name="github" style={styles.Icon} size={60} color={"#000"}/>
                    <Email onPress={() => navigation.navigate('Login')} name="email" style={styles.Icon} size={60} color={"#000"}/>
                </View> */}

              <Text 
                                style={styles.socialDivider}>
                                    OR 
                                </Text>
                                
              <View style={styles.Footer}>
                          <TouchableOpacity>
                          <Image
                                   source={{
                                    uri:
                                     'https://img.icons8.com/ios/344/email-sign.png',
                                     }}
                                  style={styles.ggSocial}
                                />
                            
                          </TouchableOpacity>
                                
                          <TouchableOpacity>
                                <Image
                                   source={{
                                    uri:
                                      'https://img.icons8.com/ios/2x/facebook-circled.png',
                                     }}
                                  style={styles.ggSocial}
                                />
                          </TouchableOpacity>
                                
                          <TouchableOpacity>
                                <Image
                                   source={{
                                    uri:
                                      'https://img.icons8.com/ios/344/github--v1.png',
                                     }}
                                  style={styles.ggSocial}
                                />
                          </TouchableOpacity>
                                
                          <TouchableOpacity onPress={() => navigation.navigate('OtpScreen')}>
                              <Image
                                source={{
                                  uri:
                                    'https://img.icons8.com/ios/344/sms.png',
                                  }}
                                style={styles.ggSocial}
                              />
                          </TouchableOpacity>
                        </View>
                                      
                        <View flex={1} flexDirection={'row'} marginLeft={70} marginTop={125}
                              color={'#000000'}
                              style={styles.Membs}>
                              
                          <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                             <Text style={styles.Mem}> Don't Have An Account Yet? Register Here!</Text>
                          </TouchableOpacity>
                         </View>
           </View>
    </ImageBackground>
       </ScrollView>
       
    )
 }


const styles = StyleSheet.create({
  SignUps: {
    marginTop: 60,
    alignItems: 'center',
  },
  mainView: {
    // marginTop: 10,
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'gray',
  },
  // TopView:{
  //   alignItems: 'center',
  //   width: '100%',
  //   height: '30%',
  //   display: 'flex',
  //   justifyContent: 'center'
  //   // backgroundColor: '#c5c5c5',
  // },
  forgot: {
    marginTop: 20,
    marginLeft: 180
  },
  BottomView: {
    width: '100%',
    height: '100%',
    backgroundColor: '#eef2f9',
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30
  },
  // ImageStyle: {
  //   width: '60%',
  //   resizeMode: 'contain'  
  // },
  socialDivider: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 3,
    marginTop: 30,
    color: '#000',
    textAlign: 'center',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    textShadowColor: 'rgba(255,255,255,.1)',
    // textShadowRadius: 10
  },
  Logins: {
    color: '#0f0f0f',
    fontSize: 100,
    fontWeight: 'bold',
    marginLeft: 40,
    marginTop: 100
  },
  SignUp: {
    display: 'flex',
    // right: 10,
    width: '80%',
    left: 90,
    backgroundColor: '#e0e5ec',
    // backgroundColor: 'none',
    // rigt: 10,
    flexDirection: 'column',
    marginTop: 190,
    flex: 1,
    color: '#ccc',
    textDecorationLine: 'underline',
    bottom: 0
    // position: 'absolute',
  },
  FormView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10
  },
  
  image: {
    flex: 1,
    justifyContent: "center"
  },
  
  TextInput: {
    width: '95%',
    borderWidth: 1,
    borderColor: '#e0e5ec',
    height: 55,
    borderRadius: 10,
    // paddingLeft: 2,
    // marginTop: 5,
    color: '#000'
  },
  RegButtonText: {
    display: 'flex',
    flex: 1,
    flexDirection:  'row'
    
  },
  Button: {
    width: '90%',
    // color: '#fff',
    height: 52,
    backgroundColor: '#eef2f9',
    borderRadius: 10,
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  // RegTxt: {
  //   fontWeight: 'bold',
  //   fontSize: 18
  // },
  Membs: {
    flexDirection: 'row'
  },
  Mem: {
    flexDirection: 'row'
  },
  ber: {
    flexDirection: 'row'
  },
  RegisterText: {
    color: 'gray',
  },
  RegsTxt: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 30
  },
  Icon: {
    marginLeft: 5,
    marginTop: 10
  },
  Welcome1: {
    marginLeft: 20,
    marginTop: 110,
    fontSize: 25,
    // marginBottom: 50,
    
  },
  Welcome2:{
    // marginBottom: 50,
    marginTop: 80,
    marginLeft: 140,
    fontSize: 40,
    color: '#000',
    fontWeight: '900'
  },
  InputLabel:{
    marginLeft:0,
      fontSize: 13,
      fontWeight: 'bold',
    // alignItems: 'left',
    // left: 0,
    marginRight: 310,
    // marginBottom:0,
    marginTop: 15,
    // display: "flex-end",
    // right: 0,
    // paddingRight:20
  },
  Forgot: {
    marginTop: 1,
    fontSize: 13,
    marginLeft: 245
  },
  Signs:{
    // display: 'flex',
    // flex: 1,\
    textDecorationLine: 'underline'
    // flexDirection:  'row'
  },
  ggSocial:{
    justifyContent: 'space-evenly',
    margin: 3,
    padding: 3,
    width: 55,
    height:60,
    shadowColor: "#000",
    shadowOffset: {width: 90, height: 50},
    shadowOpacity: 120,
    backgroundColor: '#ffffff',
    // borderRadius: 10,
    // borderWidth: 10
    // elevation: 15
  },
  Footer:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 30,
    // shadowColor: "#000000",
    // shadowOffset: {
    //   width: 0,
    //   height: 6,
    // },
    // shadowOpacity:  1.40,
    // shadowRadius: 5.62,
},
})

export default Login;
