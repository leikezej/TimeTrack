
import React, { Component } from 'react';

import { Platform, StyleSheet, Text, View } from 'react-native';

import CardView from 'react-native-cardview' ;

export default class App extends Component<{}> {

  render() {

    return (

      <View style={styles.MainContainer}>

        <CardView
          cardElevation={5}
          cardMaxElevation={5}
          cornerRadius={5}
          style={styles.cardViewStyle}>

                <Text style={styles.cardView_InsideText}> Simple CardView </Text>

        </CardView>
        
      </View>

    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {

    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center',

  },

  cardViewStyle:{

    width: 250, 
    height: 150,

  },

  cardView_InsideText:{

    fontSize: 20, 
    color: '#000', 
    textAlign: 'center', 
    marginTop: 50    

  }

});
