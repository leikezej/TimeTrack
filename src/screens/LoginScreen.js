import React, { Component } from 'react';
import { View, Pressable, Text, TextInput, ScrollView, Image, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Button} from 'react-native';
// import styles from './style';
import BackIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/core';
import { NeuView, NeuButton } from 'react-native-neu-element';
import PropTypes from 'prop-types';

class AnimatedTypingText extends Component
{
    constructor()
    {
        super();
 
        this.index = 0;
 
        this.timer = -1;
 
        this.blinking_cursor = -1;
 
        this.state = { 

            text: '', 
            
            cursor_color: 'transparent' 

        }
    }
 
    StartAnimatedTyping = () =>
    {
        clearTimeout( this.timer );
 
        this.timer  = -1;
 
        if( this.index < this.props.text.length )
        {
            if( this.refs.animatedText )
            {
                this.setState({ text: this.state.text + this.props.text.charAt( this.index ) }, () =>
                {
                    this.index++;
 
                    this.timer = setTimeout(() =>
                    {
                        this.StartAnimatedTyping();
                        
                    }, this.props.AnimatedTypingDuration);
                });
            }
        }
    }
 
    AnimatedblinkingCursor = () =>
    {
        this.blinking_cursor = setInterval(() =>
        {
            if( this.refs.animatedText )
            {
                if( this.state.cursor_color == 'transparent' )
                {
                    this.setState({ cursor_color: this.props.color });
                }
                else
                {
                    this.setState({ cursor_color: 'transparent' });
                }
            }
        }, this.props.AnimatedBlinkingCursorDuration);
    }

    componentDidMount()
    {
        this.StartAnimatedTyping();

        this.AnimatedblinkingCursor();
    }
 
    componentWillUnmout()
    {
        clearTimeout( this.timer );
 
        this.timer = -1;
 
        clearInterval( this.blinking_cursor );
 
        this.blinking_cursor = -1;
    }
 
    render()
    {
        return(
            <View style = {{ alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-start' }}>

                <Text ref = "animatedText" style = {{ 
                    color: this.props.TextColor, 
                    fontSize: this.props.AnimatedTextSize, 
                    textAlign: 'center' }}>
                    
                    { this.state.text }                
                    
                    <Text style = {{ color: this.state.cursor_color }}>|</Text>

                </Text>
            </View>
        );
    }
}

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password : '',
      check_textInputChange : false,
      secureTextEntry : true,
    };
  }

  LoginUser=()=>{
    var Email = this.state.email;
    var Password = this.state.password;

    if ((Email.length==0) || (Password.length==0)){
      alert("Required Field Is Missing!");
    }else{
      var APIURL = "http://172.25.16.1/api/users/Login.php";

      var headers = {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      };
            
      var Data ={
        Email: Email,
        Password: Password
      };

      fetch(APIURL,{
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          Email: Email,
          Password: Password,
        })
      }).then((res) => {
        if(res.success === true){
        }
        else {
          alert('welcome');
        }
      })
       .done();
          this.props.navigation.navigate("HomeScreen")
      }
    }   
  //   function navigate(){
  //     navigation.navigate('RegisterScreen');    
  // }

  updateSecureTextEntry(){
    this.setState({
      ...this.state,
      secureTextEntry: !this.state.secureTextEntry
    });
  }

  render() {
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
                  
<View
  style={styles.Welcome2}
>
                  <AnimatedTypingText
                  style={styles.Welcome2}
                      text = "LOGIN"
                      TextColor = "#000"
                      AnimatedTextSize = {30}
                  />
</View>
                  {/* <Text style={styles.Welcome2}>
                      Log In
                  </Text> */}
    
                      
                  <View style={styles.FormView}>
                       {/* <TextInput placeholder={"Email Address"} placeholderTextColor={"#fff"} style={styles.TextInput}/>
                       <TextInput placeholder={"Passsword"} secureTextEntry={true} placeholderTextColor={"#fff"} style={styles.TextInput}/> */}
                            
                            {/* Username or Email */}
                            <View styles={{ marginTop: 20 }}>
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
                             
                             
                             {/* password  */}
                             <View style={{ flexDirection: 'row', marginTop: 20 }}>
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
                                  onPress={()=>{
                                    this.LoginUser()
                                  }}
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
                                      onPress={()=>{
                                        this.LoginUser()
                                      }}
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
                                    // onPress={() => navigation.navigate('Register')}
                                  // onPress={'RegisterScreen'}
                                        onPress={()=>{
                                          this.props.navigation.navigate("RegisterScreen");
                                        }}
                                >
                                <Text style={styles.link}>Register</Text>
                              </TouchableOpacity>
                             </View>
                </View>
             </KeyboardAvoidingView>
           </ScrollView>
      </View>
    );
  }
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
    imageStyle: {
      padding: 10,
      margin: 5,
      height: 30,
      width: 30,
      resizeMode: 'stretch',
      alignItems: 'center',
    },
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
      color: '#000',
      fontWeight: 'bold',
      display: 'flex',
      flex: 1,
      flexDirection:  'row'
    },
    ButtonText: {
      fontWeight: 'bold',
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
      alignItems: 'center',
      justifyContent: 'center',
      // marginBottom: 50,
      marginTop: 80,
      // marginLeft: 140,
      fontSize: 170,
      color: '#000',
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
AnimatedTypingText.propTypes =
{
  text: PropTypes.string,
  AnimatedTextSize: PropTypes.number,
  TextColor: PropTypes.string,
  AnimatedTypingDuration: PropTypes.number,
  AnimatedBlinkingCursorDuration: PropTypes.number
},
 
AnimatedTypingText.defaultProps =
{
  text: "Default Animated Typing Text.",
  TextColor: "#00E676",
  AnimatedTextSize: 25,
  AnimatedTypingDuration: 60,
  AnimatedBlinkingCursorDuration: 200
}