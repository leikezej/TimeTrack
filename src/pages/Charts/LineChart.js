import { LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
    } from 'react-native-chart-kit'
    
    import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react- native';
import {
LineChart,
BarChart,
PieChart,
ProgressChart,
ContributionGraph,
StackedBarChart,
} from 'react-native-chart-kit';
export default class App extends React.Component {
render() {
return (
<ScrollView>
<View style={styles.container}>
<View>
{/*It is an Example of LineChart*/}
<Text
style={{
textAlign: 'center', fontSize: 18,
padding: 16,
marginTop: 16,
}}>
Line Chart
</Text>
<LineChart data={{
labels: [ 'Jan',
'Feb',
'Mar',
'Apr',
'May',
'Jun',
],
datasets: [
{
data: [20, 45, 28, 80, 99, 43],
strokeWidth: 2,
},
],
}}
width={Dimensions.get('window').width - 16}
height={220}
chartConfig={{
backgroundColor: '#c92ac7',
backgroundGradientFrom: '#7bede2',
backgroundGradientTo: '#dbb8cd',
decimalPlaces: 2,
color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
style: {
borderRadius: 16,
},
}}
style={{ marginVertical: 8,
borderRadius: 16,
}}
/>
</View>
</View>
</ScrollView>
);
}
}
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center', padding: 8,
paddingTop: 30,
backgroundColor: '#ecf0f1',
},
});