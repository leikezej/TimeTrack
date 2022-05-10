import React from 'react';
import DataTable, { COL_TYPES } from 'react-native-datatable-component';
import { View, Text, TouchableOpacity } from 'react-native';
import { List } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';

    function navigate(){
        navigation.navigate('TimeInScreen');
        navigation.navigate('TimeOutScreen');
    } 

const TimeSheet = ({ props, navigation }) => {
    return (
      <View style={{margin: 15, height: '100%' }}> 
      
          <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                // style={{ marginLeft: 50 }}
                onPress={() => navigation.navigate('TimeInScreen')}
              >
                  <Text style={{ color: '#900',
                    fontWeight: 'bold',
                    fontSize: 35,
                  }}>
                    TimeIn
                  </Text>
              </TouchableOpacity>
          </View>
          
          <View>
              <DataTable
                data={[ 
                    { name: 'Jezekiel Rafeh', in: '07:30 AM', out: '06:30 PM', doHighlight: '#ccc'},
                    { name: 'Jeprox Akif', in: '07:30 AM', out: '06:30 PM', doHighlight: '#9ac9ac'},
                    { name: 'Jezekiel Umar', in: '07:30 AM', out: '06:30 PM', doHighlight: '#ccc' },
                    { name: 'Jeps Shakeel', in: '07:30 AM', out: 'fe06:30 PM', doHighlight: '#9ac9ac'},
                    { name: 'Jezekiel Ammar', in: '07:30 AM', out: '06:30 PM', doHighlight: '#ccc' },
                    { name: 'Jezekiel Ammar', in: '07:30 AM', out: '06:30 PM', doHighlight: '#ccc' },
                    { name: 'Jeprox Rafeh', in: '07:30 AM', out: '06:30 PM', doHighlight: '#ccc'},
                    { name: 'Jezekiel Akif', in: '07:30 AM', out: '06:30 PM', doHighlight: '#9ac9ac'},
                    { name: 'Jeprox Umar', in: '07:30 AM', out: '06:30 PM', doHighlight: '#ccc' },
                    { name: 'Jeps Shakeel', in: '07:30 AM', out: 'fe06:30 PM', doHighlight: '#9ac9ac' },
                    { name: 'Jeprox Moiz', in: 13, out: '06:30 PM', doHighlight: { backgroundColor: '#f34', textColor: '#' } }
                ]} 
                onPress={(item) => {console.log('data')}}
                colNames={['name', 'in', 'out']} 
                colSettings={[{ name: 'name', type: COL_TYPES.STRING }, { name: 'in', type: COL_TYPES.INT }, {name: 'out', type: COL_TYPES.STRING}]}//List of Objects
                noOfPages={2} 
                backgroundColor={'rgba(255,255,255,0.1)'}
            />
          </View>
      
          <View>
              <TouchableOpacity
                    // style={{ marginLeft: 50 }}
                    onPress={() => navigation.navigate('TimeOutScreen')}
                  >
                      <Text style={{ color: '#900',
                        fontWeight: 'bold',
                        fontSize: 35,
                      }}>
                        TimeOut
                      </Text>
                  </TouchableOpacity>
              <DataTable
                data={[ 
                    { name: 'Jezekiel Rafeh', time: '07:30 AM', out: '06:30 PM', doHighlight: '#ccc'},
                    { name: 'Jeprox Akif', time: '07:30 AM', out: '06:30 PM', doHighlight: '#9ac9ac'},
                    { name: 'Jezekiel Ammar', time: '07:30 AM', out: '06:30 PM', doHighlight: '#ccc' },
                    { name: 'Jezekiel Akif', time: '07:30 AM', out: '06:30 PM', doHighlight: '#9ac9ac'},
                    { name: 'Jeprox Umar', time: '07:30 AM', out: '06:30 PM', doHighlight: '#ccc' },
                    { name: 'Jeps Shakeel', time: '07:30 AM', out: 'fe06:30 PM', doHighlight: '#9ac9ac' },
                    { name: 'Jezekiel Ammar', time: '07:30 AM', out: '06:30 PM', doHighlight: '#ccc' },
                    { name: 'Jeprox Moiz', time: '08:02 AM', out: '06:30 PM', doHighlight: { backgroundColor: '#f34', textColor: '#' } }
                ]} 
                onPress={(item) => {console.log('name')}}
                colNames={['name', 'time', 'out']} 
                colSettings={[{ name: 'name', type: COL_TYPES.STRING }, { name: 'time', type: COL_TYPES.INT }, {name: 'out', type: COL_TYPES.STRING}]}//List of Objects
                noOfPages={2} 
                backgroundColor={'rgba(255,255,255,0.1)'}
            />

          </View>
      </View>
    );
}

export default TimeSheet;

// DATA FETCH USERS List
{ 
// import React, { Component } from "react";
// import { Text, View,StyleSheet} from 'react-native';
// import { Provider ,Appbar,Card,IconButton,Avatar,DataTable} from 'react-native-paper';

// const TimeEntry = () => {
//   const itemsPerPage = 2;
//   const [page, setPage] = React.useState(0);
//   const from = page * itemsPerPage;
//   const to = (page + 1) * itemsPerPage;
//   const [data, setData] = React.useState([]);
//   const [isLoading, setLoading] = React.useState(true);
  
//    React.useEffect(() => {
//     fetch('http://api.mywebtuts.com/api/users')
//       .then((response) => response.json())
//       .then((json) => setData(json.data))
//       .catch((error) => console.error(error))
//       .finally(() => setLoading(false));
//   }, []);
  
//   const _goBack = () => console.log('Went back');
//   const _handleSearch = () => console.log('Searching');
//   const _handleMore = () => console.log('Show more');
//   return (
//     <Provider>
//     <Appbar.Header style={styles.header}>
//       <Appbar.BackAction onPress={_goBack} />
//       <Appbar.Content title="TimeLogs" subtitle="Subtitle" />
//       <Appbar.Action icon="magnify" onPress={_handleSearch} />
//       <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
//     </Appbar.Header>
//       <View style={styles.mainbox}>
//        <Card>
//          <DataTable>
//           <DataTable.Header style={styles.databeHeader}>
//             <DataTable.Title>Photo</DataTable.Title>
//             <DataTable.Title>Full Name</DataTable.Title>
//             <DataTable.Title>TimeIn</DataTable.Title>
//             <DataTable.Title >TimeOut</DataTable.Title>
//           </DataTable.Header>
//            { 
//                 data.map((l, i) => (
//                 <DataTable.Row style={styles.databeBox} key={i}>
//                   <DataTable.Cell><Avatar.Image size={45} source={{ uri: l.avatar }} /></DataTable.Cell>
//                   <DataTable.Cell>{l.full_name}</DataTable.Cell>
//                   <DataTable.Cell>{l.time_in}</DataTable.Cell>
//                   <DataTable.Cell>{l.time_out}</DataTable.Cell>
//                 </DataTable.Row>
//              ))
//            }
//         </DataTable>
//      </Card>
//       </View>
//     </Provider>
//   );
// };
// const styles = StyleSheet.create({
//   title:{
//     margin: 10,
//     fontSize: 15,
//     fontSize: 35
//   },
//   mainbox:{
//     textAlign:'center',
//     margin: 15,
//     flex: 1,
//     justifyContent: 'space-between',
//   },
//   databeBox:{
//     margin: 10,
//     textAlign: 'center',
//   },
//   databeHeader:{
//     margin: 10,
//     textAlign: 'left', 
//   }
// });
// export default TimeEntry;



}

// import React, { useState } from 'react';
// import { Text, View, Button, StyleSheet } from 'react-native';

// const TimeSheetScreen = () => {
//     // const [timeLogs, setTimeLogs] = useState(
//     const [fullData, setFullData] = useState(
//         [
//           {
//               "Name": 1,
//               "Timein": '08:'07:30 AM' AM',
//               "Timeout":  " ",
//               "Overtime": 0
//           },
//             {
//               "Name": 1,
//               "Timein": '08:'07:30 AM' AM',
//               "Timeout":  " ",
//               "Overtime": 0
//           },
//           {
//               "Name": 1,
//               "Timein": '08:'07:30 AM' AM',
//               "Timeout":  " ",
//               "Overtime": 0
//           },
//           {
//             "Name": 1,
//             "Timein": '08:'07:30 AM' AM',
//             "Timeout":  " ",
//             "Overtime": 0
//         },
//         ]
//     )
    
//     return (
//         <View>
//             <View style={{ flex: 1, backgroundColor: '#f2f2f2', padding: 10 }}>
//                 <View style={{ width: '100%', flexDirection: 'row', borderRadius: 10, backgroundColor: '#c9c9c9', padding: 6 }}>
//                      <View style={{ width: '25%' }}>
//                           <Text style={[ styles.text, { height: 30, color: '#000', fontSize: 18 }]}>Name</Text>
//                       </View>
//                      <View style={{ width: '25%' }}>
//                          <Text style={[ styles.text, { height: 30, color: '#000', fontSize: 18 }]}>Timein</Text>
//                      </View>
//                      <View style={{ width: '25%' }}>
//                          <Text style={[ styles.text, { height: 30, color: '#000', fontSize: 18 }]}>Timeout</Text>
//                     </View>
//                       <View style={{ width: '25%' }}>
//                          <Text style={[ styles.text, { height: 30, color: '#000', fontSize: 18 }]}>Overtime</Text>
//                      </View>
//                   </View>
//              </View>
//             {
//               fullData.map((item, index) =>
//                 <View style={[{ width: '100%', flexDirection: 'row', borderRadius: 10, padding: 10, marginTop: 8}, (index % 2 == 0) ? {backgroundColor: '#c3c3c3'} : { backgroundColor: '#1c1c1c'}]} key={index}>
//                     <View style={{ width: '25%'}}>
//                         <Text style={[ styles.text, {height: 30, color: '#000', fontSize: 18}]}>{item.Name}</Text>
//                     </View>
//                     <View style={{ width: '25%'}}>
//                         <Text style={[ styles.text, {height: 30, color: '#000', fontSize: 18}]}>{item.Timein}</Text>
//                     </View>
//                     <View style={{ width: '25%'}}>
//                         <Text style={[ styles.text, {height: 30, color: '#000', fontSize: 18}]}>{item.Timeout}</Text>
//                     </View>
//                     <View style={{ width: '25%'}}>
//                         <Text style={[ styles.text, {height: 30, color: '#000', fontSize: 18}]}>{item.Overtime}</Text>
//                     </View>
//                 </View>
//               )
//           }
//       </View>
//     )
// }

// export default TimeSheetScreen();  