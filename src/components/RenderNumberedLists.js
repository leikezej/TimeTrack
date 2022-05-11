import React from 'react';
 
import { View, StyleSheet, SafeAreaView, FlatList, Text } from 'react-native';
 
export default function App() {
 
  // Generating Dummy Data
  const DATA = Array.from({ length: 100 }, (v, i) => i);
 
  const ItemRender = ({ item }) => (
    <View style={{ padding: 12 }}>
      <Text style={styleSheet.itemText}> Item : {item} </Text>
    </View>
  );
 
  const Divider = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: 'black',
        }}
      />
    );
  }
 
  return (
    <SafeAreaView style={styleSheet.MainContainer}>
 
      <FlatList
        data={DATA}
        renderItem={(itemData) => <ItemRender item={itemData.item} />}
        ItemSeparatorComponent={Divider}
      />
 
    </SafeAreaView>
  );
}
 
const styleSheet = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
 
  itemText: {
    fontSize: 24,
    color: 'black'
  },
 
});