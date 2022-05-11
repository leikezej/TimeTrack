import React from 'react';

import { Alert, Button, SafeAreaView, StyleSheet, View } from 'react-native';

export default function App() {

  //Function with NO Arguments and NO Return Value.
  const NoArguments_NoReturn = () => {

    Alert.alert('Function Called...');

  }

  //Function with NO Arguments and With Return Value.
  const NoArguments_Return = () => {

    return (12 + 5);

  }

  const Call_NoArguments_Return = () => {

    let A = NoArguments_Return();

    Alert.alert(A.toString());
  }

  //Function with Arguments and NO Return Value.
  const Arguments_NoReturn = (value1, value2) => {

    let B = value1 + value2;

    Alert.alert(B.toString());

  }

  //Function with Arguments and With Return Value.
  const Arguments_Return = (temp1, temp2) => {

    return (temp1 + temp2);

  }

  const Call_Arguments_Return = () => {

    let C = Arguments_Return(52, 48);

    Alert.alert(C.toString());

  }

  return (

    <SafeAreaView style={styleSheet.MainContainer}>

      <Button onPress={NoArguments_NoReturn}
        title="Call Function with NO Arguments and NO Return Value"
      />

      <View style={{ margin: 10 }} />

      <Button onPress={Call_NoArguments_Return}
        title="Call Function with NO Arguments and With Return Value"
      />

      <View style={{ margin: 10 }} />

      <Button onPress={ ()=> Arguments_NoReturn(20, 5)}
        title="Call Function with Arguments and NO Return Value"
      />

      <View style={{ margin: 10 }} />

      <Button onPress={Call_Arguments_Return}
        title="Call Function with Arguments and With Return Value"
      />

    </SafeAreaView>

  );
}

const styleSheet = StyleSheet.create({

  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12
  },

});