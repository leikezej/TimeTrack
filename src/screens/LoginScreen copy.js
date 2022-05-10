// import React from 'react';
import React, {useState, useContext} from 'react';
import {SafeAreaView, Alert, ImageBackground, Button, ScrollView, StyleSheet, View, Text, TextInput, Image, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

import BackIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import { NeuView, NeuButton } from 'react-native-neu-element';
import { useNavigation } from '@react-navigation/core';

const image = { uri: "https://i.postimg.cc/1tNkKS7P/bg.jpg" };

import Axios from 'axios';

// const API_URL = Platform.OS === 'ios' ? 'http://localhost:272/api/auth/signin' : 'http://localhost:272/api/auth/signin';

// import '../assets/images/logos/logo.jpg';   

// const Login = () =>  {
export default function Login() {
  // const [name, setName] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // var checkEmail = RegExp(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i);
  
  // const [isPasswordvisible, setIsPasswordvisible] = useState(false);
  // const [input, setInput] = useState('');
  
  const navigation = useNavigation();
  
  const loginUser = async() => {
    try {
      // console.log("email =>", email);
      // console.log("password =>", password);
      const {data} = await Axios.get('http://192.168.1.11/api/login2.php', {
        email: email,
        password: password,
      });    
      
      // const _goBack = () => console.log('Went back');
      if (!email.trim(), !password.trim()){
        alert('You Idiot!?! Logging in without Credentials?')
        return;
      }
      if (!email.trim()) {
        alert('Cant Login Without Email');
        return;
      } 
      if (!password.trim()) {
        alert('Password Please!?');
        return;
      }
      if (data.status === 'success') {
        // navigation.navigate("HomeScreen"); 
          this.props.navigation.navigate('HomeScreen');
        alert('User Login Successfully');
          // this.props.navigation.navigate('HomeScreen');
      } else {
        alert('User/Email Not Registered');
      }
      console.log(data);
    }catch(error) {
      console.error(error);
    };
  };
      function navigate(){
        navigation.navigate('RegisterScreen');    
    }
    
     return(
      <View style={styles.container}>
           <ScrollView keyboardShouldPersistTaps="handled"
          //  justifyContent={center}
          //  alignItems={center}
           style={styles.mainView}>
            <KeyboardAvoidingView>
               {/* <View style={styles.TopView}>
                  <Image source={require('../assets/images/logos/morph.png')}/>
               </View> */}
               
               <View style={styles.BottomView}>
                   {/* <BackIcon onPress={navigate} name="chevron-left" style={styles.Icon} size={60} color={"#000"}/> 
                    <Text style={styles.Welcome1}>
                      Welcome Back
                  </Text>  */}
                  
                  <Text style={styles.Welcome2}>
                      Log In
                  </Text>
    
                      
                  <View style={styles.FormView}>
                       {/* <TextInput placeholder={"Email Address"} placeholderTextColor={"#fff"} style={styles.TextInput}/>
                       <TextInput placeholder={"Passsword"} secureTextEntry={true} placeholderTextColor={"#fff"} style={styles.TextInput}/> */}
                            
                            {/* Username or Email */}
                            <View style={{
                            }}>
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
                                          // onChangeText={firstName => setFirstNameText(firstName)}
                                          autoFocus
                                          width={100}
                                          underlineColorAndroid="transparent"
                                          keyboardType={'email-address'}
                                          style={styles.TextInput} 
                                          borderColor={'transparent'}
                                          value={email}
                                          onChangeText={(value) => setEmail(value)}
                                          // onChangeText={(text) => setEmail(text)}
                                          // onChangeText={(text) => this.handleText(text)}
                                          // value={this.state.text}
                                          // autoCapitalize={false} 
                                          // autoCorrect={false}
                                          returnKeyType="next"
                                          // onSubmitEditing={this.nextFieldFocus}
                                 />
                                     {/* <Text style={{fontSize:32,color:'green'}}>
                                        Your email is :{this.state.email}
                                      </Text> */}
                               </NeuView>
                             </View>
                             
                             
                             {/* password  */}
                            <View 
                              style={{ marginTop: 20}}
                            >
                               <NeuView 
                                    color='#eef2f9' 
                                    height={70} 
                                    width={350}
                                    marginTop={50}
                                    borderRadius={16}
                                      inset
                                      >
                                      
                                      <TextInput 
                                          secureTextEntry
                                          // secureTextEntry={"hidePass ? true : false"}
                                          placeholder={"Enter Password"}
                                          height={190}
                                          width={100}
                                          // keyboardType={'visible-password'} 
                                          style={styles.TextInput} 
                                          borderColor={'transparent'}
                                          value={password}
                                          onChangeText={(text) => setPassword(text)}
                                          // autoCapitalize={false} 
                                          // autoCorrect={false}
                                          returnKeyType="next"
                                          // onSubmitEditing={this.nextFieldFocus}
                                 />
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
                                  // onPress={() => {
                                  //   loginUser();
                                  // }}
                                  onPress={loginUser}
                                  // onPress={this.loginUser} 
                                    //  onPress={() => submit() }
                                  // onPress={() => Alert.alert('Time In pressed')}
                                  // onPress={'navigate'}
                                  // onPress={navigate}
                                  // onPress={'RegisterScreen'}
                                  // onPress={() => navigation.navigate('RegisterScreen')}
                                      color={'#eef2f9'}
                                      // color="#841584"
                                      width={280}  
                                      height={70}
                                      fontSize={70}
                                      fontWeight={'bold'}
                                      borderRadius={16}
                                      style={{marginLeft: 5, marginTop: 50}}
                                  >
                                    <TouchableOpacity
                                     onPress={loginUser}
                                      // onPress={() => navigation.navigate('HomeScreen')}
                                      // onPress={this.login}
                                    >
                                    <Text style={styles.buttonText}>
                                            LOGIN
                                          </Text>
                                    </TouchableOpacity>
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
                                      <Text style={styles.Mem}> Don't Have An Account Yet?</Text>
                              <TouchableOpacity
                                onPress={() => navigation.navigate('RegisterScreen')}
                                //   onPress={navigate}
                                >
                                <Text style={styles.link}>Register</Text>
                              </TouchableOpacity>
                             </View>
                </View>
             </KeyboardAvoidingView>
           </ScrollView>
      </View>
    )
 }


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    opacity: .8,
    flex: 1,
    justifyContent: "center"
  },
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
    marginTop: 10,
    marginLeft: 230
  },
  BottomView: {
    // width: '100%',
    // height: '100%',
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
  ButtonText: {
    // color: "#000",
    color: 'black',
    size: 50,
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
    color: 'black',
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
    width: 65,
    height:60,
    shadowColor: "#000",
    shadowOffset: {width: 90, height: 50},
    shadowOpacity: 120,
    // backgroundColor: '#ffffff',
    // borderRadius: 10,
    // borderWidth: 10
    // elevation: 15
  },
  link: {
    color: 'blue',
    marginLeft: 5
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

// export default Login;
