import React, { Component } from 'react';
import { StyleSheet, View, Alert, Text, Image } from 'react-native';
import ActionButton from 'react-native-action-button';


class App extends Component {

  render() {
    return (
      <View style={{flex:1, backgroundColor: '#f3f3f3'}}>

        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="Add" onPress={() => Alert.alert("Add tapped")}>
            <Image source={{ uri: 'https://img.icons8.com/material-outlined/2x/add.png', }} style={styles.itemButton} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => Alert.alert("Notifications tapped")}>
            <Image source={{ uri: 'https://img.icons8.com/material-outlined/2x/appointment-reminders.png', }} style={styles.itemButton} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#fff' title="Tasks" onPress={() => {}}>
            <Image source={{ uri: 'https://img.icons8.com/material-outlined/2x/details-popup.png', }} style={styles.itemButton} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemButton: {
    left:0, right:0,
    top:0,
    bottom:0,
    position:'absolute',
    alignSelf:'stretch',
  },
});

export default App;