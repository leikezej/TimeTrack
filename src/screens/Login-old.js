import React from 'react';
import {SafeAreaView, Button, StyleSheet, View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
// import { Shadow, Neomorph } from 'react-native-neomorph-shadows';

import { NeuView, NeuButton, NeuInput   } from 'react-native-neu-element';

import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

// import Logo from '../assets/logo.png';

const Login = ({ navigation }) => {

    function navigate(){
        navigation.navigate('Register');
    } 
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#eef2f9' }}>
      
      {/* <View style={styles.TopView}>
                <Image 
                    style={styles.formLogo} 
                    source={{uri: 'https://i.postimg.cc/8Cw4CsFw/Time-Keeper-logo2.png' }} 
                />
            </View> */}

            <View style={styles.BottomView}>
            
                        <Text style={styles.formHeader}>
                                Login 
                                {/* {'\n'} 
                                Back!  */}
                            </Text>
                            <TouchableOpacity style={styles.logTxt} onPress={navigate}>
                                <Text style={styles.loginText}>Don't Have An Account Yet? Register Now!</Text>
                        </TouchableOpacity>
                        
                        <KeyboardAvoidingView>
                    <View style={[styles.container, styles.shadowProp]}>
                              <View style={styles.sectionStyles}>
                              <NeuInput
                                      color={'#eef2f9'}
                                      width= {350}
                                      height={55}
                                      borderRadius={16} 
                                      borderColor={'#ffffff'}
                                      placeholder={'Username or Email'}
                                      style={{marginTop: 30, marginBottom: 30}}
                                    />
                              </View>
                              
                                <View style={styles.sectionStyles}>
                                 <NeuInput
                                      color={'#eef2f9'}
                                      width= {350}
                                      height={55}
                                      borderRadius={16} 
                                      borderColor={'#ffffff'}
                                      placeholder={'Password *****'}
                                      style={{marginBottom: 30}}
                                    />  
                             
                               </View>
                    </View>   
                    </KeyboardAvoidingView>
                    
                              <NeuButton
                               onPress={navigate}
                                  color={'#eef2f9'}
                                  width={200}
                                  height={50}
                                  borderRadius={16}
                                  // justifyContent={'center'}
                                  style={{marginLeft: 90, marginTop: 20}}>
                        
                                <TouchableOpacity style={styles.LoginButton} onPress={navigate}>
                                  </TouchableOpacity>
                                      <Text style={styles.buttonText}>
                                        Login
                                      </Text>
                                 </NeuButton>  
                              
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
                    </View>
                    {/* <View style={styles.btmbtn}>
                    <Button
        title="Press me"
        onPress={() => Alert.alert('Cannot press this one')}
      />
                    </View> */}
            </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      // marginTop: 30,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 1,
      backgroundColor: '##eef2f9',
      // marginTop: 100
    },
    TopView: {
      // marginTop: 200,
        width: '100%',
        height: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        backgroundColor: '##eef2f9',
        // marginTop: 8,
        // // borderRadius: 50,
        // borderTopRightRadius: 120,
        // borderBottomStartRadius: 120
        // borderBottomLeftRadius: 20,
        // borderBottomRightRadius: 20
    },
    formLogo: {
        width: '100%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 100,
        resizeMode: 'contain',
    },
    formHeader:{
      marginTop: 100,
        fontWeight: 'bold',
        fontSize: 40,
        color: '#000',
        fontFamily: 'Poppins sans-serif',
        textAlign: 'center',
        letterSpacing: 1
    }, 
    BottomView: {
        width: '100%',
        // marginTop: 10,
        height: '75%',
        backgroundColor: '##eef2f9',
        // borderTopLeftRadius:50,
        // borderTopRightRadius: 50
    },
    sectionStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: '##eef2f9',
      height: 60,
      borderRadius: 15,
      margin: 16
    },
    imageStyle: {
      padding: 10,
      margin: 5,
      height: 40,
      width: 40,
      resizeMode: 'stretch',
      alignItems: 'center'
    },
    imageSocial:{
        height: 50,
        width: 50,
        margin: 5,
        marginTop: 5
    },
    buttonText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000',
     
    },
    RegisterButton: {
        width: '50%',
        height: 55,
        marginLeft: 95,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 1,
        borderRadius: 20,
        backgroundColor: '#eef2f9',
        

    },
    loginText:{
        textAlign: 'center',
        color: '#000'
    },
    logTxt: {
      color: '#000'
    },
    Footer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 30,
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity:  1.40,
        shadowRadius: 5.62,
    },
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
    ggSocial:{
      justifyContent: 'space-evenly',
      margin: 5,
      padding: 5,
      width: 55,
      height: 50,
      shadowColor: "#000",
      shadowOffset: {width: 20, height: 20},
      shadowOpacity: 4,
      borderRadius: 20,
      backgroundColor: '#eef2f9',
      borderWidth: 3,
      elevation: 15
    },
    shadowProp: {
      shadowColor: '#171717',
      shadowOffset: {width: 10, height: 15},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    btmbtn: {
      right: 10,
      left: 10,
      position: 'absolute',
      bottom: 10,
      background: '#fff'
    }
    
  });
  
  export default Login;