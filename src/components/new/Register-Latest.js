// import React, {useState, createRef} from 'react';



import React from 'react';
// import React, {useState} from 'react';
import {SafeAreaView, ImageBackground, Button, ScrollView, StyleSheet, View, Text, TextInput, Image, TouchableOpacity} from 'react-native';

// import BackIcon from 'react-native-vector-icons/FontAwesome';
// import Email from 'react-native-vector-icons/Feather';
// import Github from 'react-native-vector-icons/Feather';
// import Facebook from 'react-native-vector-icons/Feather';

import { NeuBorderView, NeuView, NeuInput, NeuButton } from 'react-native-neu-element';


// import '../assets/images/logos/logo.jpg';   

const image = { uri: "https://i.postimg.cc/JzZg1Gw4/bg-grayd.jpg" };

const RegisterScreen = ({ navigation }) =>  {

      function  navigate(){
        navigation.navigate('HomeScreen');    
    }
    
     return(
       <View style={styles.mainView}>
           <ImageBackground source={image} resizeMode="cover" opacity={.3} style={styles.image}>
           
           <ScrollView style={styles.BottomView}>
               <Text style={styles.Welcome1}>
                  {/* Welcome */}
              </Text>
              <Text style={styles.Welcome2}>
                  Sign In
              </Text>
                     <TouchableOpacity>
                            <Text style={styles.Forgot}>
                              Forgot Password?
                            </Text>
                      </TouchableOpacity>
                  
              <View style={styles.FormView}>
                      {/* <Text style={styles.InputLabel}>Email</Text>
        <TextInput placeholderTextColor={"#000"} borderColor={"#00ffff"} style={styles.TextInput} onChangeText={(email) => setEmail(email)}
                   /> */}
                      
                      <View>
                          <Text style={styles.InputLabel}>Name</Text>
                      <NeuView color='#eef2f9' height={70} width={350} borderRadius={16}
                        inset                   
                      >  
                          {/* <TextInput placeholderTextColor={"#000"} borderColor={"#00ffff"} style={styles.TextInput} onChangeText={(email) => setEmail(email)} */}
                          <TextInput placeholderTextColor={"#fffdf7"} borderColor={"#00ffff"} style={styles.TextInput} 
                      />
                 </NeuView>
                  </View>
                      
                      <View>
                          <Text style={styles.InputLabel}>Email</Text>
                      <NeuView color='#eef2f9' height={70} width={350} borderRadius={16}
                        inset                   
                      >  
                          {/* <TextInput placeholderTextColor={"#000"} borderColor={"#00ffff"} style={styles.TextInput} onChangeText={(email) => setEmail(email)} */}
                          <TextInput placeholderTextColor={"#fffdf7"} borderColor={"#00ffff"} style={styles.TextInput} 
                      />
            </NeuView>
                  </View>
                  
                  <View>
                          <Text style={styles.InputLabel}>Contact</Text>
                      <NeuView color='#eef2f9' height={70} width={350} borderRadius={16}
                        inset                   
                      >  
                          {/* <TextInput placeholderTextColor={"#000"} borderColor={"#00ffff"} style={styles.TextInput} onChangeText={(email) => setEmail(email)} */}
                          <TextInput placeholderTextColor={"#fffdf7"} borderColor={"#00ffff"} style={styles.TextInput} 
                      />
            </NeuView>
                  </View>
                      
                      
                          <Text style={styles.InputLabel}>Password</Text>
                  <View style={{ marginLeft: 0 }}>
                      <NeuView color='#eef2f9' height={70} width={350} borderRadius={16}
                        inset                   
                      >  
                          <TextInput style={styles.TextInput} 
                          // <TextInput placeholderTextColor={"#000"} borderColor={"#00ffff"} style={styles.TextInput} onChangeText={(password) => setPassword(password)}
                      />
            </NeuView>
                  </View>
                  
                  <Text style={styles.InputLabel}>Confirm</Text>
                  <View style={{ marginLeft: 0, marginTop: 0 }}>
                  
                      <NeuView color='#eef2f9' height={70} width={350} borderRadius={16}
                        inset                   
                      >  
                          <TextInput style={styles.TextInput} 
                           placeholder="Confirm Password"
                      />
            </NeuView>
                  </View>
                      
                      
                  <NeuButton
                              onPress={navigate}
                                  color={'#eef2f9'}
                                  width={330}  
                                  height={70}
                                  fontSize={70}
                                  fontWeight={'bold'}
                                  borderRadius={16}
                                  onChangeText={(password) => setPassword(password)}
                                  style={{marginLeft: 20, marginTop: 50}}>
                                      <Text style={styles.buttonText}>
                                        Register Now
                                      </Text>
                              </NeuButton>
              </View>
              
                                <Text 
                                   style={{marginLeft: 160, fontSize: 20, fontWeight: '900', marginTop: 25}}>
                                    OR Use
                                </Text>
                                
              <View style={styles.Footer}>
                                 {/* <Image
                                   source={{
                                    uri:
                                     'https://img.icons8.com/ios/344/email-sign.png',
                                     }}
                                  style={styles.ggSocial}
                                /> */}
                              <TouchableOpacity>
                                  <Image source={require('../assets/images/icons/g3.png')} style={{
                                      width: 70,
                                      height: 70,
                                    }}></Image>
                              </TouchableOpacity>
                                
                              <TouchableOpacity>
                                  <Image source={require('../assets/images/icons/fbc.png')} style={{
                                      width: 70,
                                      height: 70,
                                    }}></Image>
                              </TouchableOpacity>
                                
                              <TouchableOpacity>
                                <Image source={require('../assets/images/icons/git3.png')} style={{
                                    width: 70,
                                    height: 70,
                                  }}></Image>
                              </TouchableOpacity>
                                
                              <TouchableOpacity>
                                  <Image source={require('../assets/images/icons/tw2.png')} style={{
                                      width: 70,
                                      height: 70,
                                    }}></Image>
                              </TouchableOpacity>
                                
                              <TouchableOpacity>
                                  <Image source={require('../assets/images/icons/sms.png')} style={{
                                      width: 70,
                                      height: 70,
                                    }}></Image>
                              </TouchableOpacity>
                              
                        </View>
                                      
           </ScrollView>
    </ImageBackground>
       </View>
    )
 }
 
export default RegisterScreen;
 


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
    backgroundColor: '#fbfbff',
    alignItems: 'center',
    
    // backgroundColor: 'gray',
  },
  TopView:{
    backgroundColor: '#fbfbff'
  },
  BottomView: {
    // width: '100%',
    // height: '100%',
    backgroundColor: '#fbfbff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    // borderTopRadius: 20
  },
  Registers: {
    color: '#0f0f0f',
    fontSize: 100,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 100
  },
  SignUp: {
    display: 'flex',
    // right: 10,
    width: '80%',
    left: 90,
    backgroundColor: '#fbfbff',
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
    marginTop: 10,
   backgroundColor: '#c5c5c5'
    
  },
  
  TextInput: {
    width: '97%',
    // backgroundColor: '#fbfbff',
    // borderWidth: 1,
    borderColor: '#000',
    height: 60,
    justifyContent: 'center',
    fontSize: 18,
    alignItems: 'center',
    borderRadius: 10,
    // paddingLeft: 2,
    // marginTop:5,
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
      fontSize: 13.5,
      fontWeight: 'bold',
    // alignItems: 'left',
    // left: 0,
    marginRight: 320,
    // marginBottom:0,
    marginTop: 15,
    marginBottom: 8,
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
    marginTop: 20,
    // shadowColor: "#000000",
    // shadowOffset: {
    //   width: 0,
    //   height: 6,
    // },
    // shadowOpacity:  1.40,
    // shadowRadius: 5.62,
},
})


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
// import {
//   StyleSheet,
//   TextInput,
//   View,
//   Text,
//   Image,
//   KeyboardAvoidingView,
//   Keyboard,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';

// import { NeuButton } from 'react-native-neu-element';
// // import { NavigationContainer } from '@react-navigation/native';

// import Loader from './Loader';

// const RegisterScreen = ({navigation, props}) => {
//   // const [userName, setUserName] = useState('');
//   const [userfullName, setUserfullName] = useState('');
//   const [userEmail, setUserEmail] = useState('');
//   const [userContact, setUserContact] = useState('');
//   // const [userAddress, setUserAddress] = useState('');
//   const [userPassword, setUserPassword] = useState('');
//   // const [userConfirmPassword, setUserConfirmPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [errortext, setErrortext] = useState('');
//   const [
//     isRegistraionSuccess,
//     setIsRegistraionSuccess
//   ] = useState(false);
  
//   // function GoToButton({ HomeScreen }) {
//   //   const navigation = useNavigation();

//   // function navigate(){
//   //   navigation.navigate('HomeScreen');    
    
//   const fullNameInputRef = createRef();
//   const emailInputRef = createRef();
//   const contactInputRef = createRef();
//   const passwordInputRef = createRef();
//   // const confirmPasswordInputRef = createRef();

//   const handleSubmitButton = () => {
//     setErrortext('');
//     if (!userFullName) {
//       alert('Enter Full Name');
//       return;
//     }
//     if (!userEmail) {
//       alert('Please fill Email');
//       return;
//     }
//     if (!userContact) {
//       alert('Please Input Contact Number');
//       return;
//     }
//     if (!userPassword) {
//       alert('Please fill Password');
//       return;
//     }
//     // if (!userConfirmPassword) {
//     //   alert('Please Confirm Your Password');
//     //   return;
//     // }
//     //Show Loader
//     setLoading(true);
//     var dataToSend = {
//       name: userFullName,
//       email: userEmail,
//       contact: userContact,
//       password: userPassword,
//       // confirmPassword: userConfirmPassword,
//     };
//     var formBody = [];
//     for (var key in dataToSend) {
//       var encodedKey = encodeURIComponent(key);
//       var encodedValue = encodeURIComponent(dataToSend[key]);
//       formBody.push(encodedKey + '=' + encodedValue);
//     }
//     formBody = formBody.join('&');

//     fetch('http://localhost:3000/api/user/Register', {
//       method: 'POST',
//       body: formBody,
//       headers: {
//         //Header Defination
//         'Content-Type':
//         'application/x-www-form-urlencoded;charset=UTF-8',
//       },
//     })
//       .then((response) => response.json())
//       .then((responseJson) => {
//         //Hide Loader
//         setLoading(false);
//         console.log(responseJson);
//         // If server response message same as Data Matched
//         if (responseJson.status === 'success') {
//           setIsRegistraionSuccess(true);
//           console.log(
//             'Registration Successful. Please Register to proceed'
//           );
//         } else {
//           setErrortext(responseJson.msg);
//         }
//       })
//       .catch((error) => {
//         //Hide Loader
//         setLoading(false);
//         console.error(error);
//       });
//   };
//   if (isRegistraionSuccess) {
//     return (
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: '#eef2f9',
//           justifyContent: 'center',
//         }}>
//         <Image
//           source={require('../assets/images/social-icons/circbg.jpg')}
//           style={{
//             height: 150,
//             resizeMode: 'contain',
//             alignSelf: 'center'
//           }}
//         />
//         <Text style={styles.successTextStyle}>
//           Registration Successful
//         </Text>
//         <TouchableOpacity
//           style={styles.buttonStyle}
//           activeOpacity={0.5}
//           // onPress{() => props.navigation.navigate('navigate')}>
//           onPress={() => props.navigation.navigate('navigate')}>
//           <Text style={styles.buttonTextStyle}>Register Now</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
//   return (
//     <View style={{flex: 1, backgroundColor: '#eef2f9'}}>
//       <Loader loading={loading} />
//       <ScrollView
//         keyboardShouldPersistTaps="handled"
//         contentContainerStyle={{
//           justifyContent: 'center',
//           alignContent: 'center',
//         }}>
//         <View style={{alignItems: 'center'}}>
//           <Image
//             source={require('../assets/images/icons/clock1.png')}
//             style={{
//               width: 450,
//               height: 300,
//               resizeMode: 'contain',
//               // margin: 30,
//             }}
//           />
//         </View>
//         <KeyboardAvoidingView enabled>
//           <View style={styles.SectionStyle}>
//             <TextInput
//               style={styles.inputStyle}
//               onChangeText={(UserFullName) => setUserFullName(UserFullName)}
//               underlineColorAndroid="#f000"
//               placeholder="Enter Full Name"
//               placeholderTextColor="#8b9cb5"
//               autoCapitalize="sentences"
//               returnKeyType="next"
//               onSubmitEditing={() =>
//                 emailInputRef.current && emailInputRef.current.focus()
//               }
//               blurOnSubmit={false}
//             />
//           </View>
//           <View style={styles.SectionStyle}>
//             <TextInput
//               style={styles.inputStyle}
//               onChangeText={(UserEmail) => setUserEmail(UserEmail)}
//               underlineColorAndroid="#f000"
//               placeholder="Enter Email"
//               placeholderTextColor="#8b9cb5"
//               keyboardType="email-address"
//               ref={emailInputRef}
//               returnKeyType="next"
//               onSubmitEditing={() =>
//                 contactInputRef.current &&
//                 contactInputRef.current.focus()
//               }
//               blurOnSubmit={false}
//             />
//           </View>
//           {/* <View style={styles.SectionStyle}>
//             <TextInput
//               style={styles.inputStyle}
//               onChangeText={(UserEmail) => setUserEmail(UserEmail)}
//               underlineColorAndroid="#f000"
//               placeholder="Enter Email"
//               placeholderTextColor="#8b9cb5"
//               keyboardType="email-address"
//               ref={emailInputRef}
//               returnKeyType="next"
//               onSubmitEditing={() =>
//                 passwordInputRef.current &&
//                 passwordInputRef.current.focus()
//               }
//               blurOnSubmit={false}
//             />
//           </View> */}
//           <View style={styles.SectionStyle}>
//             <TextInput
//               style={styles.inputStyle}
//               onChangeText={(UserContact) => setUserContact(UserContact)}
//               underlineColorAndroid="#f000"
//               placeholder="Contact Number"
//               placeholderTextColor="#8b9cb5"
//               keyboardType="numeric"
//               ref={contactInputRef}
//               returnKeyType="next"
//               onSubmitEditing={() =>
//                 passwordInputRef.current &&
//                 passwordInputRef.current.focus()
//               }
//               blurOnSubmit={false}
//             />
//           </View>
//           <View style={styles.SectionStyle}>
//             <TextInput
//               style={styles.inputStyle}
//               onChangeText={(UserPassword) =>
//                 setUserPassword(UserPassword)
//               }
//               underlineColorAndroid="#f000"
//               placeholder="Enter Password"
//               placeholderTextColor="#8b9cb5"
//               ref={passwordInputRef}
//               returnKeyType="next"
//               secureTextEntry={true}
//               onSubmitEditing={Keyboard.dismiss}
//               blurOnSubmit={false}
//             />
//           </View>
          
//           {/* <View style={styles.SectionStyle}>
//             <TextInput
//               style={styles.inputStyle}
//               onChangeText={(UserPassword) =>
//                 setUserPassword(UserPassword)
//               }
//               underlineColorAndroid="#f000"
//               placeholder="Confirm Password"
//               placeholderTextColor="#8b9cb5"
//               ref={passwordInputRef}
//               returnKeyType="next"
//               secureTextEntry={true}
//               onSubmitEditing={() =>
//                 confirmPassword.current &&
//                 confirmPasswordInputRef.current.focus()
//               }
//               blurOnSubmit={false}
//             />
//           </View> */}
//           {errortext != '' ? (
//             <Text style={styles.errorTextStyle}>
//               {errortext}
//             </Text>
//           ) : null}
//           {/* <TouchableOpacity
//             style={styles.buttonStyle}
//             activeOpacity={0.5}
//             onPress={handleSubmitButton}>
//             <Text style={styles.buttonTextStyle}>Register</Text>
//           </TouchableOpacity> */}
//              </KeyboardAvoidingView>
//       </ScrollView>
             
//                             <NeuButton style={styles.buttonStyle}
//                               // onPress={() => Alert.alert('Time In pressed')}
//                               onPress={() => navigation.navigate('HomeScreen')}
//                             //   <Button
//                             //   title={`Go to ${screenName}`}
//                               // onPress={() => navigation.navigate(screenName)}
//                             // />
//                                   color={'#eef2f9'}
//                                   width={330}  
//                                   height={70}
//                                   fontSize={70}
//                                   fontWeight={'bold'}
//                                   // marginLeft={35}
//                                   // marginTop={16}
//                                   borderRadius={16}
//                                   // onPress={handleSubmitButton}
//                                   >
//                                   {/* style={{marginLeft: 35, marginTop: 50}} */}
//                                       <Text style={styles.buttonTextStyle}>
//                                         Submit Registration
//                                       </Text>
//                               </NeuButton>
//     </View>
//   );
// };
// export default RegisterScreen;

// const styles = StyleSheet.create({
//   SectionStyle: {
//     flexDirection: 'row',
//     height: 40,
//     marginTop: 25,
//     marginLeft: 35,
//     marginRight: 35,
//     margin: 10,
//   },
//   buttonStyle: {
//     // backgroundColor: '#7DE24E',
//     borderWidth: 0,
//     color: '#FFFFFF',
//     // borderColor: '#7DE24E',
//     height: 90,
//     alignItems: 'center',
//     borderRadius: 30,
//     marginLeft: 35,
//     marginRight: 35,
//     marginTop: 55,
//     // marginBottom: 50,
//   },
//   buttonTextStyle: {
//     color: '#000',
//     paddingVertical: 10,
//     fontSize: 16,
//   },
//   inputStyle: {
//     flex: 1,
//     // color: 'white',
//     paddingLeft: 15,
//     paddingRight: 15,
//     borderWidth: 1,
//     height: 65,
//     // marginTop:  20,
//     // margin: 'r3px',
//     borderRadius: 10,
//     borderColor: '#dadae8',
//   },
//   errorTextStyle: {
//     color: 'red',
//     textAlign: 'center',
//     fontSize: 14,
//   },
//   successTextStyle: {
//     color: 'white',
//     textAlign: 'center',
//     fontSize: 18,
//     padding: 10,
//   },
// });