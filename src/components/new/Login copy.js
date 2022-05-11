import React, { useState, useEffect } from 'react';
// import React, {useState} from 'react';
import {SafeAreaView, ImageBackground, Button, ScrollView, StyleSheet, View, Text, TextInput, Image, TouchableOpacity} from 'react-native';

// import BackIcon from 'react-native-vector-icons/FontAwesome';
// import Email from 'react-native-vector-icons/Feather';
// import Github from 'react-native-vector-icons/Feather';
// import Facebook from 'react-native-vector-icons/Feather';

import { NeuBorderView, NeuView, NeuInput, NeuButton } from 'react-native-neu-element';

// import '../assets/images/logos/logo.jpg';   

const Login = ({ navigation }) =>  {
  // const [secure, setSecure] = React.useState(props.secure);

  // {
  //   props.secure &&
  //   <Icon style={{ paddingRight: 15, }}
  //   name={secure ? "eye" : 'eye-slash'}
  //   size={20} color='gray' 
  //   onPress={() => setSecure(!secure)} />
  //   }

      function  navigate(){
        navigation.navigate('Register');    
    }
    
     return(
       <View style={styles.mainView}>
           <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      {/* <Text style={styles.text}>TimeSheet</Text> */}
           <ScrollView style={styles.BottomView}>
               {/* <Text style={styles.Welcome1}>
                  Welcome
              </Text> */}
                        <View style={styles.logo}>
                          <Image source={require('../assets/images/icons/clocks.png')} style={{
                            width: 300,
                            height: 200,
                          }}></Image>
                        </View>
              {/* <Text style={styles.Welcome2}>
                  Login
              </Text> */}

              <View style={styles.FormView}>
                      {/* <Text style={styles.InputLabel}>Email</Text>
        <TextInput placeholderTextColor={"#000"} borderColor={"#00ffff"} style={styles.TextInput} onChangeText={(email) => setEmail(email)}
                   /> */}
                      
                      <View>
                          <Text style={styles.InputLabel}>Email</Text>
                      <NeuView color='#eef2f9' height={70} width={350} borderRadius={16}
                        inset                   
                      >  
                          {/* <TextInput placeholderTextColor={"#000"} borderColor={"#00ffff"} style={styles.TextInput} onChangeText={(email) => setEmail(email)} */}
              
                  <View>
                  {/* <TextInput placeholderTextColor={"#fffdf7"} labell="" borderColor={"#00ffff"} style={styles.TextInput} */}
                  <TextInput
                          inlineImageLeft="user"
                          placeholder='Email Address'
                          underlineColorAndroid="transparent"
                          />
                      {/* <>

                      </> */}
               
                  </View>

            </NeuView>
                  </View>
                      
                      
                          <Text style={styles.InputLabel}>Password</Text>
                  <View style={{ marginLeft: 0 }}>
                      <NeuView color='#eef2f9' height={70} width={350} borderRadius={16}
                        inset                   
                      >  
                          <TextInput style={styles.TextInput}  
                          placeholder='Password'
                          underlineColorAndroid="transparent"
                          // <TextInput style={styles.TextInput} placeholder={props.placeholder} 
                          // <TextInput placeholderTextColor={"#000"} borderColor={"#00ffff"} style={styles.TextInput} onChangeText={(password) => setPassword(password)}
                          // inlineImageLeft="user"
                          // secure="true"
                          // setFocus={focus}onChangeText={text => props.onChangeText(text)}
                          // onFocus={() => setFocus(true)}
                          // onBlur={() => setFocus(false)}
                          // secureTextEntry={secure}
                          // placeholder='Password'
                          // underlineColorAndroid="transparent"
                          // onChangeText={(value) => console.log(value)}

                      />
            </NeuView>
                  </View>
                  
                  <View>
                      <TouchableOpacity>
                          <Text>
                              Forgot Password?
                          </Text>
                      </TouchableOpacity>
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
                                        Login Now
                                      </Text>
                              </NeuButton>
              </View>
              <View style={styles.SocialContainer}>
                                            <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}>
                                       <Image 
                                        source={require('../assets/images/icons/fbs.png')}
                                        style={styles.ImageIconStyle} 
                                        />
                                       <View style={styles.SeparatorLine} />
                                       <Text style={styles.TextStyle}> Login Using Facebook </Text>
                                      </TouchableOpacity>
                                      
                                      <TouchableOpacity style={styles.GooglePlusStyle} activeOpacity={0.5}>
                                       <Image 
                                        source={require('../assets/images/icons/g1.png')} 
                                        style={styles.ImageIconStyle} 
                                        />
                                       <View style={styles.SeparatorLine} />
                                       <Text style={styles.TextStyle}> Login Using Google Plus </Text>
                                      </TouchableOpacity>
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
                                      
               <View style={styles.SignUps}>
                <TouchableOpacity>
                    <Text style={styles.Signs}> Don't Have An Account Yet? Sign Up </Text>
                </TouchableOpacity>
              </View>
              
           </ScrollView>
    </ImageBackground>
       </View>
    )
 }
 
export default Login;
 
const image = { uri: "https://i.postimg.cc/4y3kyZ62/bg-gray.jpg" };


const styles = StyleSheet.create({
  logo: {
    justifyContent: 'center',
    alignItems:'center',
    flex: 1
  },
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
  Logins: {
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
    width: '97%',
    backgroundColor: '#ebf5fc',
    // borderWidth: 1,
    borderColor: '#000',
    height: 60,
    justifyContent: 'center',
    fontSize: 18,
    alignItems: 'center',
    borderRadius: 10,
    // paddingLeft: 2,
    marginTop: 1,
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
  color: "#08090a",
    // marginBottom: 50,
    marginLeft: 90,
    fontSize: 80,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    shadowColor: "#fff",
shadowOffset: {
	width: 0,
	height: 4,
  shadowColor: '#171717',
  shadowOffset: {width: -2, height: 4},
  shadowOpacity: 0.2,
  shadowRadius: 3,
},
shadowOpacity: 0,
shadowRadius: 4.65,

elevation: 8,
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
SocialContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  margin: 10,
  flexDirection: 'column'
},

GooglePlusStyle: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#dc4e41',
  borderWidth: .5,
  borderColor: '#fff',
  height: 40,
  borderRadius: 5 ,
  margin: 5,

},

FacebookStyle: {
 flexDirection: 'row',
 alignItems: 'center',
 backgroundColor: '#485a96',
 borderWidth: .5,
 borderColor: '#fff',
 height: 40,
 borderRadius: 5 ,
 margin: 5,

},

ImageIconStyle: {
  padding: 10,
  margin: 5,
  height: 25,
  width: 25,
  resizeMode : 'stretch',

},

TextStyle :{

 color: "#fff",
 marginBottom : 4,
 marginRight :20,
 
},

SeparatorLine :{

backgroundColor : '#fff',
width: 1,
height: 40

}
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