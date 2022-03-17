import React from 'react';
import { Text, Button, View, styles, StyleSheet } from 'react-native';

const TimeSheet = ({ navigation }) => {
    function navigate(){
        navigation.navigate('TimeIn');
    }
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'red'}}>   
                <View>
                    <Text>
                        Welcome to TimeSheet SCREEN
                    </Text>
                </View>
                <Button 
                    title="Go to TimeIn Screen"  
                    onPress={() => navigation.navigate('TimeIn')}  
            />  
            </View>
        );
    }
export default TimeSheet;
