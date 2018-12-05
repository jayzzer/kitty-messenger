const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');

const mongoose = require('mongoose');
// const MongoStore = require('connect-mongo');

const config = require('./config');

mongoose.connect('mongodb://localhost/dataBase');


// app.use (
//     session ({
//         secret: config.SESSION_SECRET,
//         key: 'sid',
//         cookie: {
//             path: '/',
//             maxAge: null
//         },
//         resave: true,
//         saveUninitialized: false,
//         store: new MongoStore ({
//             mongooseConnection: mongoose.connection
//         })
//     })
// );

app.use(
    express.static(__dirname + '/src'),
    bodyParser.urlencoded({ extended: true }),
    bodyParser.json()
);

app.use('/', require('./router'));

nunjucks.configure(__dirname + '/src/view', {
    autoescape: true,
    cache: false,
    express: app
});

app.listen( config.port, () => {
    console.log(`Server is running at port ${config.port}!`);
} );