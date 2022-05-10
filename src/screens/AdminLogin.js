import React from 'react';
import {Text,View, AsyncStorage, TextInput, TouchableOpacity} from 'react-native';

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
            <View style={{marginTop:50}}>
                <Text>
                Login page!
                </Text>
                    <View>
                    <TextInput placeholder="Enter email" value={this.state.email} onChangeText={(value)=>this.setState({email:value})}/>
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
export default Login;