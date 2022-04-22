import React from 'react';
// import React, {useState} from 'react';
import {SafeAreaView, Button, ScrollView, StyleSheet, View, Text, TextInput, Image, TouchableOpacity} from 'react-native';

import BackIcon from 'react-native-vector-icons/FontAwesome';
import Email from 'react-native-vector-icons/Feather';
import Github from 'react-native-vector-icons/Feather';
import Facebook from 'react-native-vector-icons/Feather';

import { NeuBorderView, NeuView, NeuInput, NeuButton } from 'react-native-neu-element';


// import '../assets/images/logos/logo.jpg';   

const Login = ({ navigation }) =>  {

      function  navigate(){
        navigation.navigate('Register');    
    }
    
     return(
       <View style={styles.mainView}>
           {/* <View style={styles.TopView}>
              <Image source={require('../assets/images/logos/morph.png')}/>
           </View> */}
           
           <ScrollView style={styles.BottomView}>
              {/* <BackIcon onPress={navigate} name="chevron-left" style={styles.Icon} size={60} color={"#000"}/> */}
               <Text style={styles.Welcome1}>
                  Welcome
              </Text>
              <Text style={styles.Welcome2}>
                  Log In
              </Text>
              <TouchableOpacity>
                            <Text style={styles.Forgot}>
                              Forgot Password?
                            </Text>
                      </TouchableOpacity>
                  
              <View style={styles.FormView}>
                   {/* <TextInput placeholder={"Email Address"} placeholderTextColor={"#fff"} style={styles.TextInput}/>
                   <TextInput placeholder={"Passsword"} secureTextEntry={true} placeholderTextColor={"#fff"} style={styles.TextInput}/> */}
                      <Text style={styles.InputLabel}>Email</Text>
                          <TextInput placeholderTextColor={"#000"} borderColor={"none"} style={styles.TextInput}
                   />
                      <Text style={styles.InputLabel}>Password</Text>
                   <TextInput secureTextEntry={true} placeholderTextColor={"#000"} style={styles.TextInput}/>
                  

                  {/* <TouchableOpacity style={styles.Button} onPress={navigate}>
                      <Text style={styles.RegButtonTxt}> Log In </Text>
                  </TouchableOpacity> */}
                  
                  
                  {/* <TouchableOpacity style={styles.RegsTxt} onPress={'navigate'}>
                      <Text style={{ alignItems: 'center', textDecorationLine: 'underline' }}>
                          Sign Up
                      </Text>
                  </TouchableOpacity> */}
                  
                  
                  <NeuButton
                              // onPress={() => Alert.alert('Time In pressed')}
                              onPress={navigate}
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
                              

   
              </View>
              
              {/* <View style={styles.socialIcons}>
                    <Facebook onPress={() => navigation.navigate('Login')} name="facebook" style={styles.Icon} size={60} color={"#000"}/>
                    <Github onPress={() => navigation.navigate('Login')} name="github" style={styles.Icon} size={60} color={"#000"}/>
                    <Email onPress={() => navigation.navigate('Login')} name="email" style={styles.Icon} size={60} color={"#000"}/>
                </View> */}

              <Text 
                                style={styles.socialDivider}>
                                    OR Use
                                </Text>
                                
              <View style={styles.Footer}>
                                 <Image
                                   source={{
                                    uri:
                                     'https://img.icons8.com/ios/344/email-sign.png',
                                     }}
                                  style={styles.ggSocial}
                                />
                                
                                <Image
                                   source={{
                                    uri:
                                      'https://img.icons8.com/ios/2x/facebook-circled.png',
                                     }}
                                  style={styles.ggSocial}
                                />
                                
                                <Image
                                   source={{
                                    uri:
                                      'https://img.icons8.com/ios/344/github--v1.png',
                                     }}
                                  style={styles.ggSocial}
                                />
                                <Image
                                   source={{
                                    uri:
                                      'https://img.icons8.com/ios/344/sms.png',
                                     }}
                                  style={styles.ggSocial}
                                />
                        </View>
                                      
               <View style={styles.SignUps}>
                 <Text style={styles.Signe}> Don't Have An Account Yet? Sign Up </Text>
              </View>
              
           </ScrollView>
       </View>
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
    justifyContent: 'center',
    alignItems: 'center',
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
    marginLeft: 20,
    fontSize: 30,
    fontWeight: 'bold'
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
    // borderRadius: 10,
    backgroundColor: '#ffffff',
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

// import FormError from '../Components/FormError';
// import '../assets/images/logos/emit.jpg';
    // const [email,setEmail] = useState('');
    // const [password,setPassword] = useState('');
    // const [errorMessage,setErrorMessage] = useState('');
    // const [DisplayFormErr,setDisplayFormErr] = useState('');
    
    
    // const validateInput = () =>  {  
    //     var form_inputs = [email, password];
        
    //     if(form_inputs.includes('') || form_inputs.includes(undefined)){
    //       setErrorMessage("Please Fill in all the fields");
    //       return setDisplayFormErr(true);
    //   }
    // }
//     return (
//       <View style={styles.mainView}>
//           <View style={styles.TopView}>
//               <Image style={styles.ImageStyle} source={require('../assets/images/logos/emit.jpg')}/>
//           </View>
          
//           <View style={styles.BottomView}>
//               <Text style={styles.Heading}>
//                   Welcome{'\n'}
//                   back
//               </Text>
//               <View style={styles.FormView}>
//                     <TextInput placheholder={"Full Name"} placeholderTextColor={"#fff"} style={styles.TextInput}/>
//                     <TextInput placheholder={"Password"} placeholderTextColor={"#fff"} style={styles.TextInput}/>
                    
//                   {/* <TextInput onChangeText={(val)=>setEmail(val)} value={email} placheholder={"Email Address*"} placeholderTextColor={#fff} style={styles.email}/>
//                   <TextInput onChangeText={(val)=>setPassword(val)} value={password} placheholder={"Enter Password*"} secureTextEntry={true} placeholderTextColor={#fff} style={styles.email}/>
//                   <TextInput placeholder={"Password*"} placeholderTextColor={#fff} style={styles.email}/> */}
//                     <TouchableOpacity style={styles.Button} onPress={validateInput}>
//                         <Text style={styles.ButtonText}>Log In</Text>
//                     </TouchableOpacity>
//               </View>
              
//               <TouchableOpacity style={styles.TextButton} onPress={navigate}>
//                   <Text style={styles.RegisterText}>Register</Text>
//               </TouchableOpacity>
//           </View>
//           {/* {displayFormErr == true?
//                 <FormError  hideOverlay={setDisplayFormErr} err={errorMessage}/>
//                 :
//                 null
//             } */}
//       </View>
//     )
// }