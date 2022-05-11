import React from 'react';
import {Text,View, AsyncStorage, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

class AdminLogin extends React.Component{
    state = {
    username:'',
    password:''
    }
        LoginAdmin = () =>{
        if(this.state.username==='admin' && this.state.password==='admin'){
        AsyncStorage.setItem('userToken','admin');
        this.props.navigation.navigate('DashboardScreen');
        }
    }
    render(){
       return(
        <View>
            <View style={styles.container}>
                <Text>
                Admin Login!
                </Text>
                    <View>
                    <TextInput placeholder="Enter username" value={this.state.username} onChangeText={(value)=>this.setState({username:value})}/>
                    </View>
                    
                    <View>
                    <TextInput placeholder="Enter password" value={this.state.password} onChangeText={(value)=>this.setState({password:value})}/>
                    </View>
                
                   <View style={{justifyContent:'center'}}>
                   
                    <TouchableOpacity onPress={()=>this.LoginAdmin()}>
                      <Text>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      )
     }
    }
export default AdminLogin;