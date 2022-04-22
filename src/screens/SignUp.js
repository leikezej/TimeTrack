
import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './style';
import Feather from 'react-native-vector-icons/Feather';

export default class signUp extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email : '',
      password : '',
      confirmPw : '',
      check_textInputChange : false,
      secureTextEntry : true,
      confirmSecureTextEntry : true
    };
  }
  
  InsertRecord=()=>{
    var Email = this.state.email;
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
      var InsertAPIURL = "http://10.0.2.2:80/SignIn/SignUp.php";   //API to render signup

      var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };
      
      var Data ={
        Email: Email,
        Password: Password
      };

    // FETCH func ------------------------------------
    fetch(InsertAPIURL,{
        method:'POST',
        headers:headers,
        body: JSON.stringify(Data) //convert data to JSON
    })
    .then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
    .then((response)=>{
      alert(response[0].Message);       // If data is in JSON => Display alert msg
      this.props.navigation.navigate("SignInScreen"); //Navigate to next screen if authentications are valid
    })
    .catch((error)=>{
        alert("Error Occured" + error);
    })
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
      <View style={styles.viewStyle}>
        <TextInput
                placeholder="Enter Email"
                placeholderTextColor="#ff0000"
                style={styles.textInput}
                onChangeText={email=>this.setState({email})}
                />
            <TextInput
                placeholder="Enter Password"
                placeholderTextColor="#ff0000"
                secureTextEntry={this.state.secureTextEntry ? true : false}
                style={styles.textInput}
                onChangeText={password=>this.setState({password})}
                />
                <TouchableOpacity
                  onPress={this.updateSecureTextEntry.bind(this)}    
                  >
                  {this.state.secureTextEntry ?
                      <Feather
                      name="eye-off"
                      color="grey"
                      size={20}
                      />
                  :
                      <Feather
                      name="eye"
                      color="black"
                      size={20}
                      />
                  }
                </TouchableOpacity>  
            <TextInput
                placeholder="Confirm Password"
                placeholderTextColor="#ff0000"
                style={styles.textInput}
                onChangeText={confirmPw=>this.setState({confirmPw})}
                secureTextEntry={this.state.confirmSecureTextEntry ? true : false}
            /> 
            <TouchableOpacity
                  onPress={this.updateConfirmSecureTextEntry.bind(this)}    
                  >
                  {this.state.confirmSecureTextEntry ?
                      <Feather
                      name="eye-off"
                      color="grey"
                      size={20}
                      />
                  :
                      <Feather
                      name="eye"
                      color="black" 
                      size={20}
                      />
                  }
                </TouchableOpacity>  
            <Button
                title="Register"
                onPress={()=>{
                  this.InsertRecord()
                }}
                />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    viewStyle:{
        flex: 1,
        padding: 20,
        marginTop: 50,
    },
    textInput:{
        borderBottomColor: '#ff0000',
        borderBottomWidth: 1,
        marginBottom: 50,
        height: 40,
        fontSize: 20

    }
})

export default signUp;