import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';

export default class Contacts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      calls: [
        {id:1,  name: "Mark Doe",    status:"active", image:"https://bootdey.com/img/Content/avatar/avatar7.png"},
        {id:2,  name: "Clark Man",   status:"active", image:"https://bootdey.com/img/Content/avatar/avatar6.png"} ,
        {id:3,  name: "Jaden Boor",  status:"active", image:"https://bootdey.com/img/Content/avatar/avatar5.png"} ,
        {id:4,  name: "Srick Tree",  status:"active", image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
        {id:5,  name: "Erick Doe",   status:"active", image:"https://bootdey.com/img/Content/avatar/avatar3.png"} ,
        {id:6,  name: "Francis Doe", status:"active", image:"https://bootdey.com/img/Content/avatar/avatar2.png"} ,
        {id:8,  name: "Matilde Doe", status:"active", image:"https://bootdey.com/img/Content/avatar/avatar1.png"} ,
        {id:9,  name: "John Doe",    status:"active", image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
        {id:10, name: "Fermod Doe",  status:"active", image:"https://bootdey.com/img/Content/avatar/avatar7.png"} ,
        {id:11, name: "Danny Doe",   status:"active", image:"https://bootdey.com/img/Content/avatar/avatar1.png"},
      ]
    };
  }

  renderItem = ({item}) => {
    return (
      <TouchableOpacity>
        <View style={styles.row}>
          <Image source={{ uri: item.image }} style={styles.pic} />
          <View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
              <Text style={styles.mblTxt}>Timein</Text>
            </View>
            <View style={styles.msgContainer}>
              <Text style={styles.msgTxt}>{item.status}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return(
      <View style={{ flex: 1 }} >
        <FlatList 
          extraData={this.state}
          data={this.state.calls}
          keyExtractor = {(item) => {
            return item.id;
          }}
          renderItem={this.renderItem}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#DCDCDC',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 18,
    width:170,
  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  msgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgTxt: {
    fontWeight: '400',
    color: '#008B8B',
    fontSize: 12,
    marginLeft: 15,
  },
});

// import React, { Component } from 'react';
// import DatePicker from 'react-native-datepicker'

// import { View, Text, TouchableOpacity, FlatList } from 'react-native';
// import { createStackNavigator } from 'react-navigation-stack'
// import { createAppContainer } from 'react-navigation'
// import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Item, } from 'native-base';

// class DataSearch extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             date:"",
//             isLoading: false
//         }
//     }

//     componentDidMount() {
//         var that = this;
//         var date = new Date().getDate();
//         var month = new Date().getMonth() + 1;
//         var year = new Date().getFullYear();
//         that.setState({
//             date: date + '-' + month + '-' + year,
//         });
//     }

//     DataShowProcess = () =>{
//         const { date }  = this.state ;
//         this.setState({
//             dataSource: [], 
//             isLoading: true
//         });
//         fetch('https://example.com/item_group.php', {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 dateSearch: date,
//             })
//         })
//         .then((response) => response.json())
//         .then((responseJson) => {
//             this.setState({
//                 isLoading: false,
//                 dataSource: responseJson
//             });
//             this.props.navigation.navigate('Second', this.state.dataSource);
//         })
//         .catch((error) => {
//             console.error(error);
//         });
//     }   

//     render(){
//         return (
//             <View>
//                 <DatePicker
//                     style={{width: 200}}
//                     date={this.state.date}
//                     mode="date"
//                     placeholder="select date"
//                     format="DD-MM-YYYY"
//                     confirmBtnText="Confirm"
//                     cancelBtnText="Cancel"
//                     customStyles={{
//                         dateIcon: {
//                             position: 'absolute',
//                             left: 200,
//                             top: 0,
//                             marginLeft: 0
//                         },
//                         dateInput: {
//                             marginLeft: 100
//                         },
//                     }}
//                     onDateChange={(date) => {this.setState({date: date})}}
//                 />
//                 <TouchableOpacity 
//                     style={{ alignItems: 'center'}} 
//                     onPress={this.DataShowProcess} 
//                 >
//                     <Icon name='search' size={35} color='black'/>
//                 </TouchableOpacity>   
//             </View>
//         )
//     }
// }

// class DataShow extends React.Component {
//     render(){
//     const { navigation } = this.props;
//     return (
//       <View style={{flex: 1, paddingTop:20}}>
//         <FlatList
//           data={this.state.responseJson}
//           renderItem={({item}) => <Text>{item.group}, {item.name}</Text>}
//           keyExtractor={({id}, index) => id}
//         />
//       </View>
//     )};
// }
