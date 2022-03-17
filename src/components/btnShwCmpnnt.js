import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';

const ContentComponent = () => {
  return (
    <View>
      <Text>I am also a cat!</Text>
    </View>
  );
}

const Cafe = () => {
  const [show, setShow] = useState(false);

  return (
    <View>
      <Button title={'Show Component'} onPress={() => setShow(!show) } />
      {show && <ContentComponent />}
    </View>
  );
}

export default Cafe;