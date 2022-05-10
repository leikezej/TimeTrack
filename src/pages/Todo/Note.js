import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Image,
    TouchableOpacity 
} from 'react-native';


export default class Note extends React.Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.note}>
        <Text style={styles.noteText}>{this.props.val.date}</Text>
        <Text style={styles.noteText}>{this.props.val.note}</Text>

        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
            {/* <Text style={styles.noteDeleteText}>D</Text> */}
            <Image
                source={require('./del.png')}
                style={{
                  width: 60,
                  height: 20,
                  // backgroundColor: 'none',
                  // backgroundColor: '#ededed',
                  // backgroundColor: 'transparent',
                  height: 100,
                  resizeMode: 'contain',
                  // margin: 30,
                }}
              />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  note: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#ededed',
  },
  noteText: {
      paddingLeft: 20,
      borderLeftWidth: 10,
      borderLeftColor: '#E91E63',
  },
  noteDelete: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ededed',
      padding: 10,
      top: 10,
      bottom: 10,
      right: 10,
  },
  noteDeleteText: {
      color: 'white',
  }
});