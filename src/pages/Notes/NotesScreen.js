import React, { useState, useCallback, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Modal,
  TextInput,
  BackHandler,
  Alert,
} from "react-native";
import { AsyncStorage } from 'react-native';

import * as Animatable from "react-native-animatable";
import Ionicons from 'react-native-vector-icons/Ionicons';
import TaskList from "./TaskList";

const AnimateBtn = Animatable.createAnimatableComponent(TouchableOpacity);

export default function App({ navigation }) {
  const [task, SetTask] = useState([]);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState(" ");

  function navigate(){
    navigation.navigate('HomeScreen');    
}

  useEffect(() => {
    const backAction = () => {
      Alert.alert("You Sure?", "Exit Application", [
        {
          text: "No",
          onPress: () => null,
          style: "cancel",
        },
        { text: "Yes", onPress: () => navigation.goBack() },
        // { text: "Yes", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    async function loadTasks() {
      const taskStorage = await AsyncStorage.getItem("@task");
      if (taskStorage) {
        SetTask(JSON.parse(taskStorage));
      }
    }
    loadTasks();
  }, []);

  useEffect(() => {
    async function saveTasks() {
      await AsyncStorage.setItem("@task", JSON.stringify(task));
    }
    saveTasks();
  }, [task]);

  function handleAdd() {
    if (input === "") return;

    const data = {
      key: input,
      task: input,
    };

    SetTask([...task, data]);
    setOpen(false);
    setInput("");
  }

  const handleDelete = useCallback((data) => {
    const find = task.filter((r) => r.key !== data.key);
    SetTask(find);
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#404040" barStyle="light-content" />

      <View styles={styles.content}>
        <Text style={styles.title}>Notes Taker</Text>
      </View>
      <FlatList
        marginHorizontal={10}
        showsHorizontalScrollIndicator={false}
        data={task}
        keyExtractor={(item) => String(item.key)}
        renderItem={({ item }) => (
          <TaskList data={item} handleDelete={handleDelete} />
        )}
      />

      <Modal animationType="slide" transparent={false} visible={open}>
        <SafeAreaView style={styles.modal}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setOpen(false)}>
              <Ionicons
                style={{ marginLeft: 5, marginRight: 5 }}
                name="md-arrow-back"
                size={40}
                color="#fff"
              />
            </TouchableOpacity>
            <Text style={styles.modalTitle}> Add New Notes </Text>
          </View>

          <Animatable.View
            style={styles.modalBody}
            animation="fadeInUp"
            useNativeDriver
          >
            <TextInput
              multiline={true}
              placeholder="whats up? Madugang ka?"
              style={styles.input}
              value={input}
              onChangeText={(text) => setInput(text)}
            />
            <TouchableOpacity style={styles.handleAdd} onPress={handleAdd}>
              <Text style={styles.handleAddText}>Add</Text>
            </TouchableOpacity>
          </Animatable.View>
        </SafeAreaView>
      </Modal>

      <AnimateBtn
        style={styles.fab}
        useNativeDriver
        animation="bounceInUp"
        duration={1500}
        onPress={() => setOpen(true)}
      >
        <Ionicons name="ios-add" size={35} color="#FFFFFD" />
      </AnimateBtn>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    // backgroundColor: "#404040",
  },
  title: {
    // color: "#FFFFFD",
    color: "#3d3d3d",
    fontSize: 25,
    textAlign: "center",
    paddingTop: 10,
    marginBottom: 10,
  },
  fab: {
    position: "absolute",
    alignItems: "center",
    width: 60,
    height: 60,
    backgroundColor: "#3d3d3d",
    justifyContent: "center",
    borderRadius: 30,
    bottom: 25,
    right: 25,
    elevation: 2,
    zIndex: 9,
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
  modal: {
    flex: 1,
    backgroundColor: "#dadce0",
    // backgroundColor: "#404040",
  },
  modalHeader: {
    marginLeft: 10,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  modalTitle: {
    marginLeft: 15,
    fontSize: 25,
    color: "#000",
  },
  modalBody: {
    marginTop: 15,
  },
  input: {
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    backgroundColor: "#fffffd",
    padding: 9,
    height: 85,
    textAlignVertical: "top",
    color: "#000",
    borderRadius: 10,
  },
  handleAdd: {
    backgroundColor: "#c3c3c3",
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderRadius: 5,
  },
  handleAddText: {
    color: "#000",
    fontSize: 15,
  },
});
































{
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
  
  // const COLORS = {primary: '#1f145c', white: '#fff'};
  
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
  //             <View style={[styles.actionIcon, {backgroundColor: 'green'}]}>
  //               <Icon name="done" size={20} color="white" />
  //             </View>
  //           </TouchableOpacity>
  //         )}
  //         <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
  //           <View style={styles.actionIcon}>
  //             <Icon name="delete" size={20} color="white" />
  //           </View>
  //         </TouchableOpacity>
  //       </View>
  //     );
  //   };
  //   return (
  //     <SafeAreaView
  //       style={{
  //         flex: 1,
  //         backgroundColor: 'white',
  //       }}>
  //       <View style={styles.header}>
  //         <Text
  //           style={{
  //             fontWeight: 'bold',
  //             fontSize: 20,
  //             color: COLORS.primary,
  //           }}>
  //           NOTES SCREEN
  //         </Text>
  //         <Icon name="delete" size={25} color="red" onPress={clearAllTodos} />
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
  //             <Icon name="add" color="white" size={30} />
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
  //     backgroundColor: COLORS.white,
  //   },
  //   inputContainer: {
  //     height: 50,
  //     paddingHorizontal: 20,
  //     elevation: 40,
  //     backgroundColor: COLORS.white,
  //     flex: 1,
  //     marginVertical: 20,
  //     marginRight: 20,
  //     borderRadius: 30,
  //   },
  //   iconContainer: {
  //     height: 50,
  //     width: 50,
  //     backgroundColor: COLORS.primary,
  //     elevation: 40,
  //     borderRadius: 25,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //   },
  
  //   listItem: {
  //     padding: 20,
  //     backgroundColor: COLORS.white,
  //     flexDirection: 'row',
  //     elevation: 12,
  //     borderRadius: 7,
  //     marginVertical: 10,
  //   },
  //   actionIcon: {
  //     height: 25,
  //     width: 25,
  //     backgroundColor: COLORS.white,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     backgroundColor: 'red',
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
  
  
  // import React from 'react';
  // import { 
  //     StyleSheet, 
  //     Text, 
  //     View, 
  //     TextInput, 
  //     ScrollView, 
  //     TouchableOpacity,
  //     Image
  // } from 'react-native';
  
  // import Note from './Note';
  
  // // import { delete } from '../../../assets/images/icons/';
  // export default class Main extends React.Component {
  
  // constructor(props){
  //     super(props);
  //     this.state = {
  //         noteArray: [],
  //         noteText: '',
  //     }
  // }
  
  //   render() {
  
  //     let notes = this.state.noteArray.map((val, key) => {
  //         return <Note key={key} keyval={key} val={val}
  //                  deleteMethod={ () => this.deleteNote(key) } 
  //                 />
  //     });
  
  //     return (
  //       <View style={styles.container}>
  //          <View style={styles.header}>
  //           <Text style={styles.headerText}>My Notes Taker</Text>   
  //           {/* <Image 
  //                 source={require('./sqiare.png')}
  //                 style={{
  //                   width: '40%',
  //                   height: '80%',
  //                   elevate: 5,
  //                   borderRadius: 120,
  //                   resizeMode: 'contain',
  //                   margin: 30,
  //                 }}
  //               /> */}
  //         </View>
  
  //         <ScrollView style={styles.scrollContainer}>
  //             {notes}
  //         </ScrollView>
  
  //         <View style={styles.footer}>
  //             <TextInput 
  //             style={styles.textInput} 
  //             placeholder='> Enter Your Notes Here'
  //             onChangeText={(noteText) => this.setState({noteText})}
  //             value={this.state.noteText}
  //             placeholderTextColor='white'
  //             underlineColorAndroid='transparent'
  //             >
  //            </TextInput>
  //         </View>
  
  //         <TouchableOpacity onPress={ this.addNote.bind(this) } style={styles.addButton}>
  //           <Text style={styles.addButtonText}>+</Text>
  //         </TouchableOpacity>
  
  //       </View>
  //     );
  //   }
  
  //   addNote(){
  //       if (this.state.noteText) {
  
  //           var d = new Date();
  //           this.state.noteArray.push({
  //               'date': d.getFullYear() +
  //               "/" + (d.getMonth() + 1) +
  //               "/" + (d.getDate() + 1) +
  //               "/" + (d.getHours() + 1) +
  //               "/" + d.getMinutes(),
  //               'note': this.state.noteText
  //           });
  //           this.setState({ noteArray: this.state.noteArray })
  //           this.setState({ noteText: '' });
  
  //       }
  //   }
  
  //   deleteNote(key){
  //       this.state.noteArray.splice(key, 1);
  //       this.setState({ noteArray: this.state.noteArray })
  //   }
  // }
  
  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //   },
  //   header: {
  //     backgroundColor: '#00A2FF',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     elevation: 10,
  //     flexDirection: 'row'
  //   },
  //   headerText: {
  //     color: 'white',
  //     fontSize: 28,
  //     fontWeight: 'bold',
  //     padding: 18,
  //     marginTop: 20
  //   },
  //   scrollContainer: {
  //     flex: 1,
  //     marginBottom: 100,
  //   },
  //   footer: {
  //     position: 'absolute',
  //     bottom: 0,
  //     left: 0,
  //     right: 0,
  //     zIndex: 10,
  //   },
  //   textInput: {
  //     alignSelf: 'stretch',
  //     color: '#fff',
  //     padding: 20,
  //     backgroundColor: '#0069A5',
  //   },
  //   addButton: {
  //     position: 'absolute',
  //     zIndex: 11,
  //     right: 20,
  //     bottom: 90,
  //     backgroundColor: '#00A2FF',
  //     width: 90,
  //     height: 90,
  //     borderRadius: 50,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     elevation: 8,
  //   },
  //   addButtonText: {
  //     color: '#fff',
  //     fontSize: 24,
  //   },
  // });
}