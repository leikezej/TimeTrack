import React from 'react';
import { View, StatusBar, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import {Colors} from '../../src/constants';
import { NeuBorderView, NeuButton } from 'react-native-neu-element';


const Welcome = ({navigation}) => {
    return(
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar barStyle='dark-content' backgroundColor='#fff' />
                
            <View style={styles.welcom}>
                <ImageBackground source={require('../assets/images/logos/timim.png')} style={styles.welcome} />
            </View>
                    
            <View style={styles.imgTxt} >
            
                    <View style={styles.txt}>
                        <Text style={styles.txt1}> TimeShit </Text>
                        <Text style={styles.txt2}> Employee Activity Time Tracker App </Text>
                    </View>
                    
                    <View style={styles.btn}>
                        {/* <TouchableOpacity style={styles.tchbl}
                        // onPress={() => {
                        //     alert('Going To Login')
                        // }}
                            onPress={() => navigation.navigate("Home")}
                        >
                            
                            <Text style={styles.btntxt}> Get Started </Text>
                        </TouchableOpacity> */}
                                                      <NeuButton
                              // onPress={() => Alert.alert('Time In pressed')}
                            //   onPress={navigate}
                            onPress={() => navigation.navigate("Home")}
                                  color={'#eef2f9'}
                                  // color="#841584"
                                  width={250} 
                                  fontSize={100}
                                  height={60}
                                  fontWeight={'bold'}
                                  borderRadius={16}
                                  style={{marginLeft: 20, marginBottom: 40}}>
                                      <Text style={styles.buttonText}>
                                            Get Started
                                      </Text>
                              </NeuButton>
                    </View>
            </View>
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    welcom: {
        flex: 3,
        flexDirection: 'column',
        backgroundColor: '#e0e5ec',
        // borderRadius: 340
        
    },
    welcome: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#e0e5ec',
        // borderRadius: 340
    },
    imgTxt: {
        flex: 2,
        backgroundColor: '#e0e5ec'
    },
    txt: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#e0e5ec'
    },
    txt1: {
        fontFamily: 'OpenSans-Bold',
        color: Colors.black,
        fontSize: 30
    },
    txt2: {
        maxWidth: '50%',
        fontFamily: 'OpenSans-Medium',
        color: '#999',
        fontSize: 14,
        textAlign: 'center',
        paddingTop: 10
    },
    btn: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    tchbl: {
        justifyContent: 'center',
        width: '90%',
        backgroundColor: Colors.primary,
        height: 50, 
        marginBottom: 30,
        borderRadius: 10
    },
    btntxt:{
        fontSize: 15,
        letterSpacing: 1.5,
        textAlign: 'center',
        position: 'relative',
        fontFamily: 'OpenSans-SemiBold',
        color:Colors.white
    }
})