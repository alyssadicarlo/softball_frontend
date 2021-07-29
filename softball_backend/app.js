'use strict';

const http = require('http');
const hostname = '127.0.0.1';
const port = 3333;
const cors = require('cors');

const express = require('express');
const app = express();

// middleware for security
const helmet = require('helmet');
app.use(helmet());

// middleware that helps with console logging info
const morgan = require('morgan');
const logger = morgan('tiny');
app.use(logger);

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

app.use(cors());

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});

const hittesController = require('./routes/hitters');

app.use(hittesController);