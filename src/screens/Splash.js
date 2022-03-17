import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import { Colors } from '../../src/constants';


const Splash = ({ navigation }) => {

    setTimeout(() => {
        navigation.replace('Welcome')
    },3000)
     
    return(
<View style={styles.splash}>
<StatusBar barstyle="light-content" hidden={false} backgroundColor="#c5c5c5" />
            
            <Image source={require('../assets/images/logos/late.jpg')}
                style={{
                    width: '80%',
                    height: '40%',
                    borderRadius: 400,
                    marginBottom: 50
                }}/>
                <Text style={styles.qoute}>  Welcome Jim </Text>
                
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    splash: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary
    },
    qoute: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 30,
        color: Colors.white
    }
})