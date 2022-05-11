import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text
} from 'react-native';

//Import basic react native elements
import CircleButton from 'react-native-circle-button';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          Example of Expandable Circular Button in React Native
          using react-native-circle-button
        </Text>
        <CircleButton
          size={45}
          primaryColor="#41727E"
          secondaryColor="#459186"
          onPressButtonTop={
            () => alert('Top Button Clicked')
          }
          onPressButtonRight={
            () => alert('Right Button Clicked')
          }
          onPressButtonBottom={
            () => alert('Bottom Button Clicked')
          }
          onPressButtonLeft={
            () => alert('Left Button Clicked')
          }
        />
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
});