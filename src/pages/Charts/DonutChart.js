import * as React from 'react';
import { View, Text } from 'react-native';
import Svg, { G, Circle } from 'react-native-svg';

// import * as Svg from 'react-native-svg';

export default function Donut ({
    percentage = 75,
    radius = 40,
    strokeWidth = 10,
    duration = 500,
    color = 'tomato',
    delay = 0,
    textColor,
    max = 100,
}) {
    
    const halfCircle = radius + strokeWidth;
    return (
        <View>
            <Svg width={radius * 2} height={radius * 2} viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
                <G>
                    <Circle 
                        cx='50%'
                        cy='50%'
                        stroke={color }
                        strokeWidth={strokeWidth}
                        r={radius}
                        strokeOpacity={0.2}
                    />
                    <Circle />
                </G>
            </Svg>
        </View>
    )
}