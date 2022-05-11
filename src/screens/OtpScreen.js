import React, {Component} from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, SafeAreView } from 'react-native';

import { NeuBorderView, NeuView, NeuInput, NeuButton } from 'react-native-neu-element';

export default class App extends Component{

  constructor(props){
    super(props)
    this.state={
      pin1 : "",
      pin2 : "",
      pin3 : "",
      pin4 : ""
    }
  }

  componentDidMount = () => {
    this.refs.nameref.focus()
  }
 
 
 render(){
  const { pin1, pin2, pin3, pin4 } = this.state
  return (
    <View style={{ flex: 1 }}>
        
          <View style={{ flex: 0.6, justifyContent: 'space-evenly', flexDirection: 'row' }}>
            
            {/* pin1 */}
              <View
                style={{  fontWeight: "600", alignSelf: 'center', padding: 20, fontSize: 20, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} 
                >
                <NeuBorderView
                  //Required
                  width={45}
                  borderRadius={10}
                  height={60}
                  color={'#eef2f9'}
                  borderWidth={5}

                >
            <TextInput
            textAlign={"center"}
            alignItems={"center"}
            onChangeText={(pin1) => { this.setState({ pin1 : pin1 })
              if(pin1 != ""){
                this.ref.pin2ref.focus()
              }
            }}
            value={pin1}
            ref={"pin1ref"}
              maxLength={1}
                autoFocus={true}
                style={{ fontWeight: "600", alignSelf: 'center'}} 
              />
                </NeuBorderView>
              </View>
              
            {/* pin2 */}
              <View
                style={{  fontWeight: "600", alignSelf: 'center', padding: 20, fontSize: 20, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} 
                >
                <NeuBorderView
                  //Required
                  width={45}
                  borderRadius={10}
                  height={60}
                  color={'#eef2f9'}
          
                  //Optional
                  //Specify the width of the border
                  //Default: 10
                  borderWidth={5}
          
                  //Optional
                  //Specify the radius of the border
                  //Default: 0
                  // borderRadius={16}
                >
                                            <TextInput
                                            textAlign={"center"}
                                            alignItems={"center"}
                                            onChangeText={(pin2) => this.setState({ pin2 : pin2 })}
                                            value={pin2}
                                            ref={"pin2ref"}
              maxLength={1}
                autoFocus={true}
                style={{ fontWeight: "600", alignSelf: 'center'}} 
              />
                </NeuBorderView>
              </View>
              
            {/* pin3 */}
              <View
                style={{  fontWeight: "600", alignSelf: 'center', padding: 20, fontSize: 20, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} 
                >
                <NeuBorderView
                  //Required
                  width={45}
                  borderRadius={10}
                  height={60}
                  color={'#eef2f9'}
          
                  //Optional
                  //Specify the width of the border
                  //Default: 10
                  borderWidth={5}
          
                  //Optional
                  //Specify the radius of the border
                  //Default: 0
                  // borderRadius={16}
                >
                                            <TextInput
                                            textAlign={"center"}
                                            alignItems={"center"}
                                            onChangeText={(pin3) => this.setState({ pin3 : pin3 })}
                                            value={pin3}
                                            ref={"pin3ref"}
              maxLength={1}
                autoFocus={true}
                // ref={"ref"}
                style={{ fontWeight: "600", alignSelf: 'center'}} 
              />
                </NeuBorderView>
              </View>
              
            {/* pin4 */}
              <View
                style={{  fontWeight: "600", alignSelf: 'center', padding: 20, fontSize: 20, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} 
                >
                <NeuBorderView
                  //Required
                  width={45}
                  borderRadius={10}
                  height={60}
                  color={'#eef2f9'}
          
                  //Optional
                  //Specify the width of the border
                  //Default: 10
                  borderWidth={5}
          
                  //Optional
                  //Specify the radius of the border
                  //Default: 0
                  // borderRadius={16}
                >
                                            <TextInput
                                            textAlign={"center"}
                                            alignItems={"center"}
                                            onChangeText={(pin4) => this.setState({ pin4 : pin4 })}
                                            value={pin4}
                                            ref={"pin4ref"}
              maxLength={1}
                autoFocus={true}
                style={{ fontWeight: "600", alignSelf: 'center'}} 
              />
                </NeuBorderView>
              </View>
              
          </View>
          
    </View>
  )
 }
}