const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '134.122.22.176',
    user: 'yannb_9',
    password: 'yannb_9',
    database: 'tiomanGrow'
});

// Starting our app.
const app = express();

connection.connect((err) => {
    if (err) {
        console.log('Connection error message: ' + err.message);
        return;
    }
    console.log('Connected!')
    // Creating a GET route that returns data from the 'users' table.
    app.get('/', function (req, res) {
        // Connecting to the database.
        // Executing the MySQL query (select all data from the 'users' table).
        connection.query('SELECT * FROM farmers', function (error, results, fields) {
            // If some error occurs, we throw an error.
            if (error) throw error;
            // Getting the 'response' from the database and sending it to our route. This is were the data is.
            res.send(results)
        });
    });
});

// Starting our server.
app.listen(3000, () => {

    console.log('Go to http://localhost:3000/farmers so you can see the data.');
});
Up until now everything's great! you can click on the http://localhost:3000/farmers and you'll see the data when you run the file.

Here's where I get stuck: I was to display the data on my app and i have no idea how to possibly do that. I did a few researches and saw a possible solution which didn't work. it actually gave me a "Network request failed"

import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { HeaderImg } from '../components/HeaderImg';
import { Button } from '../components/Button';

export default class DB extends React.Component {
    state = {
        email: "",
        password: "",
        errorMessage: null
    };

    fetchData = async() => {
        fetch('http://134.122.22.176:3000/farmers')
        .then(response => response.json())
        .then(users => console.dir(users))
        .catch(error=> console.log(error))
    }


    render() {
        return (
        <View style={styles.container}>
            <HeaderImg />

            <View style={styles.errorMessage}>
            {this.state.errorMessage && (
                <Text style={styles.error}>{this.state.errorMessage}</Text>
            )}
            </View>
            <Button 
            onPress={this.fetchData}
            />
        </View>
        );
    }
}
const styles = StyleSheet.create({      
});