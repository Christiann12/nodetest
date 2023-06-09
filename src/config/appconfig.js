const express = require('express');
const dotenv = require('dotenv');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();    
}

const PORT = process.env.PORT || 3001;

exports.appconfig = {
    app,
    PORT
}