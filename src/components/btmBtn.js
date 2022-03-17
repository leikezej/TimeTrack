import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const App = () => (
    <View style={styles.container}>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Cannot press this one')}
      />
    </View>
);

const styles = StyleSheet.create({
  container: {
    right: 10,
    left: 10,
    position: 'absolute',
    bottom: 10,
  }
});

export default App;