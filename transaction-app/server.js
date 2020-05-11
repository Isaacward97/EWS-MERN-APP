
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./conf/db');

// const config = require('config');
//morgan and colors used to highlight console lines

//tells dotenv where the config file is
dotenv.config({ path: './conf/config.env' });

connectDB();

const transactions = require('./routes/transactions');
// const users = require('./routes/users');
// const auth = require('./routes/auth');

//initialise express app
const app = express();

app.use(express.json());

if(process.env.NODE_ENV = 'development') {
app.use(morgan('dev'));
}

app.use('/api/v1/transactions', transactions);
// app.use('/api/v1/users', users);
// app.use('/api/v1/auth', auth);

//build static assets if in production

if(process.env.NODE_ENV = 'production') {
app.use(express.static('client/build'));

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

//sets the port
const PORT = process.env.PORT || 5000;

//runs the server PORT
//uses colours module to show server message
app.listen(PORT, console.log(`Server running on ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
