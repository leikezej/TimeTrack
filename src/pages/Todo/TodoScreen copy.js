// import React from 'react';
// import {
//   StyleSheet,
//   SafeAreaView,
//   View,
//   TextInput,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// import { AsyncStorage } from 'react-native';
// // import AsyncStorage from '@react-native-community/async-storage';
// const COLORS = {primary: '#3d3d3d', white: '#eef2f9'};

// const App = () => {
//   const [todos, setTodos] = React.useState([]);
//   const [textInput, setTextInput] = React.useState('');

//   React.useEffect(() => {
//     getTodosFromUserDevice();
//   }, []);

//   React.useEffect(() => {
//     saveTodoToUserDevice(todos);
//   }, [todos]);

//   const addTodo = () => {
//     if (textInput == '') {
//       Alert.alert('Error', 'Please input todo');
//     } else {
//       const newTodo = {
//         id: Math.random(),
//         task: textInput,
//         completed: false,
//       };
//       setTodos([...todos, newTodo]);
//       setTextInput('');
//     }
//   };

//   const saveTodoToUserDevice = async todos => {
//     try {
//       const stringifyTodos = JSON.stringify(todos);
//       await AsyncStorage.setItem('todos', stringifyTodos);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getTodosFromUserDevice = async () => {
//     try {
//       const todos = await AsyncStorage.getItem('todos');
//       if (todos != null) {
//         setTodos(JSON.parse(todos));
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const markTodoComplete = todoId => {
//     const newTodosItem = todos.map(item => {
//       if (item.id == todoId) {
//         return {...item, completed: true};
//       }
//       return item;
//     });

//     setTodos(newTodosItem);
//   };

//   const deleteTodo = todoId => {
//     const newTodosItem = todos.filter(item => item.id != todoId);
//     setTodos(newTodosItem);
//   };

//   const clearAllTodos = () => {
//     Alert.alert('Confirm', 'Clear todos?', [
//       {
//         text: 'Yes',
//         onPress: () => setTodos([]),
//       },
//       {
//         text: 'No',
//       },
//     ]);
//   };

//   const ListItem = ({todo}) => {
//     return (
//       <View style={styles.listItem}>
//         <View style={{flex: 1}}>
//           <Text
//             style={{
//               fontWeight: 'bold',
//               fontSize: 15,
//               color: COLORS.primary,
//               textDecorationLine: todo?.completed ? 'line-through' : 'none',
//             }}>
//             {todo?.task}
//           </Text>
//         </View>
//         {!todo?.completed && (
//           <TouchableOpacity onPress={() => markTodoComplete(todo.id)}>
//             <View style={[styles.actionIcon, {backgroundColor: '#dadce0'}]}>
//               <Icon name="done" size={20} color="#3c4043" />
//             </View>
//           </TouchableOpacity>
//         )}
//         <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
//           <View style={styles.actionIcon}>
//             <Icon name="delete" size={20} color="#3c4043" />
//           </View>
//         </TouchableOpacity>
//       </View>
//     );
//   };
//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//         backgroundColor: '#f8f9fa',
//       }}>
//       <View style={styles.header}>
//         <Text
//           style={{
//             fontWeight: 'bold',
//             fontSize: 20,
//             // color: COLORS.primary,
//             color: '#202124',
//           }}>
//           TODO APP
//         </Text>
//         <Icon name="delete" size={25} color="#202124" onPress={clearAllTodos} />
//       </View>
//       <FlatList
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{padding: 20, paddingBottom: 100}}
//         data={todos}
//         renderItem={({item}) => <ListItem todo={item} />}
//       />

//       <View style={styles.footer}>
//         <View style={styles.inputContainer}>
//           <TextInput
//             value={textInput}
//             placeholder="Add Todo"
//             onChangeText={text => setTextInput(text)}
//           />
//         </View>
//         <TouchableOpacity onPress={addTodo}>
//           <View style={styles.iconContainer}>
//             <Icon name="add" color="#202124" size={40} />
//           </View>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   footer: {
//     position: 'absolute',
//     bottom: 0,
//     width: '100%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     // backgroundColor: COLORS.white,
//     // backgroundColor: '#f8f9f1'
//     backgroundColor: '#c1c1c1'
//   },
//   inputContainer: {
//     height: 50,
//     paddingHorizontal: 20,
//     elevation: 40,
//     // backgroundColor: COLORS.primary,
//     backgroundColor: '#f8f9fa',
//     flex: 1,
//     marginVertical: 20,
//     marginRight: 20,
//     borderRadius: 30,
//   },
//   iconContainer: {
//     height: 50,
//     width: 50,
//     backgroundColor: '#9aa0a6',
//     // backgroundColor: COLORS.primary,
//     elevation: 40,
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   listItem: {
//     padding: 20,
//     // backgroundColor: COLORS.white,
//     backgroundColor: '#e8eaed',
//     flexDirection: 'row',
//     elevation: 12,
//     borderRadius: 7,
//     marginVertical: 10,
//   },
//   actionIcon: {
//     height: 25,
//     width: 25,
//     // backgroundColor: COLORS.primary,
//     backgroundColor: '#f1f3f4',
//     justifyContent: 'center',
//     alignItems: 'center',
//     // backgroundColor: 'red',
//     backgroundColor: '#dadce0',
//     marginLeft: 5,
//     borderRadius: 3,
//   },
//   header: {
//     padding: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
// });

// export default App;



import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    ScrollView, 
    TouchableOpacity,
    Image
} from 'react-native';

import Note from './Note';
import Delete  from './del.png';

export default class Main extends React.Component {

constructor(props){
    super(props);
    this.state = {
        noteArray: [],
        noteText: '', 
    }
}

  render() {

    let notes = this.state.noteArray.map((val, key) => {
        return <Note key={key} keyval={key} val={val}
                 deleteMethod={ () => this.deleteNote(key) } 
                />
    });

    return (
      <View style={styles.container}>
         <View style={styles.header}>
          <Text style={styles.headerText}>Todo Notes</Text>   
          <Image 
                source={require('./del.png')}
                style={{
                  width: '40%',
                  height: '80%',
                  elevate: 5,
                  borderRadius: 120,
                  resizeMode: 'contain',
                  margin: 30,
                }}
              />
        </View>

        <ScrollView style={styles.scrollContainer}>
            {notes}
        </ScrollView>

        <View style={styles.footer}>
            <TextInput 
            style={styles.textInput} 
            placeholder='> Enter Your Notes Here'
            onChangeText={(noteText) => this.setState({noteText})}
            value={this.state.noteText}
            placeholderTextColor='white'
            underlineColorAndroid='transparent'
            >
           </TextInput>
        </View>

        <TouchableOpacity onPress={ this.addNote.bind(this) } style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>

      </View>
    );
  }

  addNote(){
      if (this.state.noteText) {

          var d = new Date();
          this.state.noteArray.push({
              'date': d.getFullYear() +
              "/" + (d.getMonth() + 1) +
              "/" + d.getDate(),
              'note': this.state.noteText
          });
          this.setState({ noteArray: this.state.noteArray })
          this.setState({ noteText: '' });

      }
  }

  deleteNote(key){
      this.state.noteArray.splice(key, 1);
      this.setState({ noteArray: this.state.noteArray })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#00A2FF',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    flexDirection: 'row'
  },
  headerText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    padding: 18,
    marginTop: 20
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    backgroundColor: '#0069A5',
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#00A2FF',
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  },
});