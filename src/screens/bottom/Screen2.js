import React, { useEffect, useState } from 'react';

import { ActivityIndicator, View, StyleSheet, SafeAreaView, FlatList, Text } from 'react-native';

export default function App() {

  const [JSON_DATA, setJSON_DATA] = useState('');

  const [showIndicator, setShowIndicator] = useState(true);

  useEffect(() => {
    async function fetchData() {
      fetch('https://jsonplaceholder.typicode.com/todos/')
        .then((response) => response.json())
        .then((responseJson) => {
          setJSON_DATA(responseJson);
          setShowIndicator(false);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    fetchData();

  }, []);

  const ItemRender = ({ title }) => (
    <View style={styleSheet.listItem}>
      <Text style={styleSheet.itemText}> {title} </Text>
    </View>
  );

  const header = () => {
    return (
      <View style={{
        height: 50,
        width: "100%",
        backgroundColor: "#00B8D4",
        justifyContent: 'center',
        alignItems: 'center'
      }}>

        <Text style={{ fontSize: 24, color: 'white' }}> JSON FlatList in React Native </Text>

      </View>
    );
  }

  const divider = () => {
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

      <ActivityIndicator
        size="large"
        color="red"
        animating={showIndicator}
        style={styleSheet.activityIndicator} />

      <FlatList
        data={JSON_DATA}
        renderItem={({ item }) => <ItemRender title={item.title} />}
        ItemSeparatorComponent={divider}
        keyExtractor={item => item.id}
        ListHeaderComponent={header}
      />

    </SafeAreaView>
  );
}

const styleSheet = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },

  listItem: {
    paddingLeft: 12,
    paddingTop: 10,
    paddingBottom: 10,
  },

  itemText: {
    fontSize: 24,
    color: 'black',
  },

  activityIndicator: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  }

});
