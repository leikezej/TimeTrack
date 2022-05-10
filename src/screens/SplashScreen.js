import React, { useRef, useEffect } from 'react';
import { Animated, View, Text, StyleSheet, ImageBackground, StatusBar, Image } from 'react-native';
// import { Colors } from '../constants';

const image = { uri: "https://i.postimg.cc/qvjkj2vz/bg.jpg" };

// para logo intro animation
const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
  
    useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        }
      ).start();
    }, [fadeAnim])
  
    return (
      <Animated.View                 // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {props.children}
      </Animated.View>
    );
  }

const Splash = ({ navigation }) => {
    setTimeout(() => {
        navigation.replace('WelcomeScreen')
    },3000)
     
    return(
        <FadeInView style={styles.splash}>
                <StatusBar barstyle="light-content" hidden={false} backgroundColor="#7fffd4" />
                
            <Image source={require('../assets/images/logos/late.jpg')}
                style={{
                    width: '80%',
                    height: '40%',
                    borderRadius: 400,
                    marginBottom: 50
                }}/>
                <Text style={styles.qoute}>  Welcome Jim </Text>
        </FadeInView>
    )
}

export default Splash

const styles = StyleSheet.create({
    splash: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eef2f9'
        // backgroundColor: Colors.white
    },
    qoute: {
        // fontFamily: 'OpenSans-Bold',
        // fontSize: 50,
        // fontWeight: '800',
        // color: '#343a40',
        //   textShadowColor: 'rgba(255, 255, 255, 0)',
        //   textShadowOffset: {width: -1, height: 1},
        //   textShadowRadius: 10
        marginTop: 10,
        fontSize: 55,
        fontStyle: 'italic',
        fontFamily: 'Digital-7',
        fontFamily: 'Digital',
        textShadowRadius: 10,
        textTransform: 'uppercase',
        includeFontPadding : false,
        fontFamily: 'Digital-7',
        textAlignVertical : 'top',
        fontFamily: 'digital',
        fontFamily: 'digital-7',
        fontWeight: '900',
        lineHeight: 100,
        marginRight: 5,
        // textDecorationLine: 'underline',
        textShadowColor: '#5f6368',
        textAlign: 'center',
        color: '#000',
        textShadowOffset: {width: 5, height: 5},
    }
})