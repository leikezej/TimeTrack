const express = require('express');
// const path = require('path');
// const morgan = require('morgan');
// const dotenv = require('dotenv');
const http = require('http');
// const socketio = require('socketio');

const app = express();

const server = http.createServer(app);
// const io = socketio(server).sockets;


const db = require('./config/database');