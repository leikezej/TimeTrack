// import React from 'react';
import React, {useState, useRef, Component, useReducer} from 'react';
import {SafeAreaView, KeyboardAvoidingView, Keyboard, Button, ScrollView, StyleSheet, View, Text, TextInput, Image, TouchableOpacity} from 'react-native';

import BackIcon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/core';

import Axios from 'axios';

import { NeuBorderView, NeuView, NeuInput, NeuButton } from 'react-native-neu-element';

import PhoneInput from 'react-native-phone-number-input';

// import '../assets/images/logos/logo.jpg';   

export default class Register extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      name : '',
      email : '',
      phone : '',
      password : '',
      confirmPw : '',
      check_textInputChange : false,
      secureTextEntry : true,
      secureTextEntry_ConfirmPass : true
    };
  } 
  RegisterUser = () =>{
    var Name = this.state.name;
    var Email = this.state.email;
    var Phone = this.state.phone;
    var Password = this.state.password;
    var ConfirmPw = this.state.confirmPw;
    var checkEmail = RegExp(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i);
  
    if ((Email.length==0) || (Password.length==0) || (ConfirmPw.length==0)){
      alert("Required Field Is Missing!!!");
    }else if (!(checkEmail).test(Email)){
      alert("invalid email!!!");
    }
    // Password validations
    else if (Password.length<8){
      alert("Minimum 08 characters required!!!");
    }else if (!((/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/).test(Password))){
      alert("Use atleast 01 special character!!!");
    }else if (((/[ ]/).test(Password))){
      alert("Don't include space in password!!!");
    }else if(Password !== ConfirmPw){
      alert("Password doesnot match!!!");
    }
     
    else{
      var InsertAPIURL = "http://172.25.16.1/api/users/Register.php";   //API to render signup

      var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };
      
      var Data ={
        Name: Name,
        Email: Email,
        Phone: Phone,
        Password: Password
      };

    fetch(InsertAPIURL,{
        method:'POST',
        headers:headers,
        body: JSON.stringify({
          Name: Name,
          Email: Email,
          Phone: Phone,
          Password: Password,
          ConfirmPw: ConfirmPw
        })
        
        
      }).then((res) => {
        if(res.success === true){
            // AsyncStorage.setItem('users',res.users);
          // this.props.navigation.navigate('HomeScreen');
        }
        else {
          alert('welcome' +   Name);
        }
      })
       .done();
          this.props.navigation.navigate("LoginScreen")
      }
    }  
  updateSecureTextEntry(){
    this.setState({
        ...this.state,
        secureTextEntry: !this.state.secureTextEntry
    });
  }

  updateConfirmSecureTextEntry(){
    this.setState({
        ...this.state,
        confirmSecureTextEntry: !this.state.confirmSecureTextEntry
    });
}

  render() {
    return (
        <KeyboardAvoidingView enabled>
            <ScrollView style={styles.mainView}>
                
                <View style={{ backgroundColor: '#eef2f9' }}>
                          <TouchableOpacity
                              marginTop={20}
                            //   onPress={() => {navigation.goBack()}}
                            onPress={() => navigation.navigate('LoginScreen')}
                            
                          >
                              <Image source={require('../assets/images/b-icons/back.png')}
                                style={{ marginTop: 10, height: 30, width: 30}}
                              />
                          </TouchableOpacity>
                </View>
                
              <View marginTop={5} style={styles.BottomView}>
    {/* <BackIcon onPress={navigate} name="chevron-left" style={styles.Icon} size={60} color={"#000"}/> */}
                       {/* <Text style={styles.Welcome1}>
                          Welcome
                      </Text> */}
                      <Text style={styles.Welcome2}>
                      Be  A Member!
                      </Text>
                      
                      {/* <TouchableOpacity 
                            onPress={() => navigation.navigate('LoginScreen')}>
                              <Text style={styles.Welcome1}> Alreay A Member? Login </Text>
                      </TouchableOpacity> */}
                
                
                      <View style={styles.FormView}>
                      
                                   {/* NAME */}
                                    <View style={{ marginTop: 10, marginBottom: 20 }}>
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
                                                'https://img.icons8.com/fluency-systems-regular/2x/user.png',
                                            }}
                                            style={styles.imageStyle}
                                            />
                                            <TextInput
                                            style={{flex: 1}}
                                            placeholder="Enter Your Name Here"
                                            underlineColorAndroid="transparent"
                                            borderColor="transparent"
                                            onChangeText={name => this.setState({name})}
                                            // value={this.state.name}
                                            // onChangeText={name=>this.setState({name})}
                                            // value={name}
                                            // onChangeText={(text) => setName(text)}
                                            />
                                            </View>
                        
                        </NeuView>
                    
                                      </View> 
                              
                                  {/* EMAIL */}
                                        <View styles={{ marginTop: 30 }}>
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
                                                        'https://img.icons8.com/ios/344/email-sign.png',
                                                    }}
                                                    style={styles.imageStyle}
                                                  />
                                                  <TextInput
                                                    onChangeText={email=>this.setState({email})}
                                                    // onChangeText={(text) => setEmail(text)}
                                                    // value={this.state.email}
                                                    activeUnderlineColor="black"
                                                    style={{flex: 1}}
                                                    placeholder="Email Address"
                                                    underlineColorAndroid="transparent"
                                                    borderColor="transparent"
                                                    keyboardType='email-address'
                                                  />
                                                </View>
                                          </NeuView>
                                       </View>
                        
                                     {/* MOBILE */}
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
                                                <PhoneInput
                                                            // backgroundColor="#eef2f9"
                                                            // ref={phoneInput}
                                                            // defaultValue={phone}
                                                            height="50"
                                                            keyboardType="phone-pad"
                                                            width="350"
                                                            defaultCode="PH"
                                                            // layout="first"
                                                            borderRadius="16"
                                                            // withShadow
                                                            // color={"#eef2f9"}
                                                            // autoFocus
                                                            containerStyle={styles.phoneNumberView}
                                                            textContainerStyle={{ paddingVertical: 0 }}
                                                            onChangeText={phone=>this.setState({phone})}
                                                            // onChangeText={(text) => setPhone(text)}
                                                            // value={this.state.phone}
                                                            // onChangeFormattedText={text => {
                                                            // setPhone(text);
                                                          // }}
                                                        />
                                             </View>
                                                
                                                </NeuView>
                                      </View>
                                      
                                    {/* PASSWORD   */}
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
                                            'https://img.icons8.com/ios/344/password--v1.png',
                                        }}
                                        style={styles.imageStyle}
                                      />
                                      <TextInput
                                activeUnderlineColor="black"
                                      // secureTextEntry
                                        style={{flex: 1}}
                                        placeholder="Password"
                                        underlineColorAndroid="transparent"
                                        secureTextEntry={this.state.secureTextEntry ? true : false}
                                        borderColor="transparent"
                                        // value={password}
                                        // value={this.state.password}
                                        onChangeText={password=>this.setState({password})}
                                        // onChangeText={(text) => setPassword(text)}
                                      />
                                      <TouchableOpacity
                                        onPress={() =>this.setState({secureTextEntry: !this.state.secureTextEntry})}
                                        // onPress={this.updateSecureTextEntry.bind(this)}    
                                      >     
                                          <Feather name={true ? "eye-off" : "eye"}  size={25} />
                                      </TouchableOpacity> 
                                        </View>
                                                
                                                </NeuView>
                                      </View>
                                    
                                     {/* CONFIRM PASSWORD */}
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
                                            'https://img.icons8.com/ios/344/password--v1.png',
                                            // 'https://img.icons8.com/ios/344/forgot-password.png',
                                        }}
                                        style={styles.imageStyle}
                                      />
                                      <TextInput
                                           activeUnderlineColor="black"
                                      // secureTextEntry
                                      secureTextEntry={this.state.secureTextEntry ? true : false}
                                        style={{flex: 1}}
                                        placeholder="Confirm Password"
                                        underlineColorAndroid="transparent"
                                        borderColor="transparent"
                                        // value={passwordConfirm}
                                        // value={this.state.passwordConfirm}
                                      onChangeText={confirmPw=>this.setState({confirmPw})}
                                        // onChangeText={passwordConfirm=>this.setState({passwordConfirm})}
                                        // onChangeText={(text) => setconfirmPassword(text)}
                                      />
                                      <TouchableOpacity
                                        onPress={() =>this.setState({secureTextEntry: !this.state.secureTextEntry})}>     
                                          <Feather name={true ? "eye-off" : "eye"}  size={25} />
                                      </TouchableOpacity> 
                                        </View>
                                                
                                                </NeuView>
                                      </View>
                                      
                                      <View style={styles.Member}>
                                  

                                  
                                  <NeuButton
                                        // onPress={() => {this.registerUser();
                                        // }}
                                        onPress={()=>{
                                          this.RegisterUser()
                                        }}
                                        // onPress={this.registerUser}
                                        // onPress={() => Alert.alert('Time In pressed')}
                                        // onPress={navigate}
                                        // onPress={'RegisterScreen'}
                                        // onPress={() => navigation.navigate('HomeScreen')}
                                        // onPress={() => navigation.navigate(RegisterScreen)}
                                            color={'#eef2f9'}
                                            // color="#841584"
                                            width={280}  
                                            height={60}
                                            fontSize={70}
                                            fontWeight={'bold'}
                                            borderRadius={16}
                                            style={{marginLeft: 20, marginTop: 20}}>
                                          <TouchableOpacity
                                              // onPress={() => {registerUser();
                                              // }}
                                              onPress={()=>{
                                                this.RegisterUser()
                                              }}
                                        // onPress={this.registerUser}
                                          >
                                          <Text style={styles.RegButtonText}>
                                                  Register
                                                </Text>
                                          </TouchableOpacity>
                                  </NeuButton>
                                      </View>
                              </View>
                              
                        <Text 
                    style={styles.socialDivider}>
                        OR Use
                      </Text>
                      
                      <View style={styles.Footer}>
                                        <TouchableOpacity onPress={() => navigation.navigate('OtpScreen')}>
                                         <Image
                                           source={{
                                            uri:
                                             'https://img.icons8.com/ios/344/google-logo--v1.png',
                                             }}
                                          style={styles.ggSocial}
                                        />
                                        </TouchableOpacity>
                                        
                                        
                                        <TouchableOpacity onPress={() => navigation.navigate('OtpScreen')}>
                                        <Image
                                           source={{
                                            uri:
                                              'https://img.icons8.com/ios/2x/facebook-circled.png',
                                             }}
                                          style={styles.ggSocial}
                                        />
                                        </TouchableOpacity>
                                        
                                        
                                        <TouchableOpacity onPress={() => navigation.navigate('OtpScreen')}>
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
                                  
                                  <View flexDirection={'row'} marginLeft={70} marginTop={15}
                                  color={'#000000'}
                                  style={styles.Membs}>
                                      <Text style={styles.Mem}> Already Have an Account? </Text>
                              <TouchableOpacity
                                onPress={() => navigation.navigate('LoginScreen')}
                                //   onPress={navigate}
                                >
                                <Text style={styles.link}>Login</Text>
                              </TouchableOpacity>
                             </View>
  
                {/* <View style={styles.ButtonView}>
                    <Pressable
                      style={styles.Button} 
                      onPress={()=>{this.userRegister()}}
                      >
                      <Text style={styles.text}>Register</Text>
                    </Pressable>
                </View> */}
              </View>
              
            </ScrollView>
        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eef2f9',
    borderWidth: 0.5,
    borderColor: 'transparent',
    height: 40,
    borderRadius: 5,
    margin: 10,
    height: 50,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 30,
    width: 30,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  SignUps: {
    marginTop: 60,
    alignItems: 'center',
  },
  link: {
    marginLeft: 5,
    color: '#000'
  },
  mainView: {
    // marginTop: 10,
    // flex: 1,
    // flexDirection: 'column',
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
  Members: {
    marginTop: 20
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
  
  input: {
    marginTop: 20
  
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
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: '900',
    color: '#000'
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
  phoneNumberView: {
    marginTop: 10,
    width: 330,
    backgroundColor: '#eef2f9',
    height: 60,
    marginBottom: 5,
    borderRadius: 15
    // backgroundColor: 'white'
  },
  Welcome1: {
    marginLeft: 20,
    marginTop: 30,
    fontSize: 25,
    // marginBottom: 50,
    
  },
  Welcome2:{
    // marginBottom: 50,
    marginLeft: 20,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000'
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
    // borderRadius: 10,
    // backgroundColor: '#ffffff',
    // borderWidth: 10
    // elevation: 15
  },
  Footer:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 10,
    // shadowColor: "#000000",
    // shadowOffset: {
    //   width: 0,
    //   height: 6,
    // },
    // shadowOpacity:  1.40,
    // shadowRadius: 5.62,
},
})



// AppRegistry.registerComponent('register', () => register);