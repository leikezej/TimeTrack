import React from 'react';
 
import { View, StyleSheet, Text, Image } from 'react-native';
 
export default function App() {
 
  return (
    <View style={styleSheet.MainContainer}>
 
      <Text style={styleSheet.text}> Display GIF and WEBP Image in React Native </Text>
 
      <Image source={{ uri: 'https://phpionline.co.uk/wp-content/uploads/TimeManagement.gif' }}
        style={{ height: 350, resizeMode: 'contain', margin: 10 }} />
 
      <Image source={{ uri: 'https://smallbiztrends.com/ezoimgfmt/media.smallbiztrends.com/2016/10/time-tracker-2-850x476.png?ezimgfmt=rs:840x470/rscb12/ng:webp/ngcb12.webp' }}
        style={{ height: 180, resizeMode: 'contain', margin: 10 }} />
 
    </View>
  );
}
 
const styleSheet = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    paddingTop: 12
  },
 
  text: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
  },
 
});