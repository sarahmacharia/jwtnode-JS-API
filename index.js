const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
//import routes
const authRoute = require('./routes/auth');

dotenv.config();

console.log(process.env.DB_CONNECT);
//connect to D
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
    console.log('connected to db!')
);

//middleware
app.use(express.json());
//Route middlewares
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('server is up and running'));
