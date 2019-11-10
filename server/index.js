// Main starting point of the application

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const cors = require('cors');

// App setup

app.use(morgan('combined')),
app.use(cors()),
app.use(bodyParser.json({type:'*/*'}));
router(app);

// Server setup

const port = process.env.PORT || 9004;
const server = http.createServer(app);
// server.listen(port,'157.245.209.85');
server.listen(port);
console.log('Server listening on:',port);