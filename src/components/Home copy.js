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

function navigate({ navigation }){
  navigation.navigate('Events');
}

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Profile",      color:"#ebf5fc", members:8,  image:"https://img.icons8.com/color/70/000000/name.png"},
        {id:1, title: "Home",     color:"#ebf5fc", members:6,  image:"https://img.icons8.com/office/70/000000/home.png"},
        {id:2, title: "Todo",     color:"#ebf5fc", members:12, image:"https://img.icons8.com/color/70/000000/to-do.png"} ,
        {id:3, title: "Team",   color:"#ebf5fc", members:5,  image:"https://img.icons8.com/color/70/000000/team.png"} ,
        {id:4, title: "Alarms",  color:"#ebf5fc", members:6,  image:"https://img.icons8.com/color/70/000000/alarm-clock.png"} ,
        {id:5, title: "Calendar Events",   color:"#ebf5fc", members:7,  image:"https://img.icons8.com/color/70/000000/calendar.png"} ,
        {id:6, title: "Task List",   color:"#ebf5fc", members:8,  image:"https://img.icons8.com/dusk/70/000000/timeline-week.png"} ,
        {id:8, title: "TimeSheet Logs",    color:"#ebf5fc", members:23, image:"https://img.icons8.com/color/2x/time-card.png"} ,
        {id:9, title: "TimeIn", color:"#ebf5fc", members:45, image:"https://img.icons8.com/office/344/add-time.png"} ,
        {id:9, title: "TimeOut",     color:"#ebf5fc", members:13, image:"https://img.icons8.com/color/2x/kill_time.png"} ,
      ]
    };
  }

  clickEventListener(item) {
    Alert.Alert(item.title)
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              // <TouchableOpacity style={[styles.card, {backgroundColor:item.color}]} onPress={navigate}>
              <TouchableOpacity style={[styles.card, {backgroundColor:item.color}]} onPress={navigate}>
                <View style={styles.cardHeader}>
                  <Text style={styles.title}>{item.title}</Text>
                  {/* <Image style={styles.icon} source={{uri:"https://img.icons8.com/ios/40/000000/settings.png"}}/> */}
                </View>
                <Image style={styles.cardImage} source={{uri:item.image}}/>
                <View style={styles.cardFooter}>
                  <Text style={styles.subTitle}>{item.members} members</Text>
                </View>
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    backgroundColor: "#ffffff",
  },
  list: {
    //paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
    alignItems:'center'
  },
  /******** card **************/
  card:{
    marginHorizontal:2,
    marginVertical:2,
    flexBasis: '48%',
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    height: 70,
    width: 70,
    alignSelf:'center'
  },
  title:{
    fontSize:16,
    flex:1,
    color:"#000",
    fontWeight:'bold'
  },
  subTitle:{
    fontSize:12,
    flex:1,
    color:"#333",
  },
  icon:{
    height: 20,
    width: 20, 
  }
});    