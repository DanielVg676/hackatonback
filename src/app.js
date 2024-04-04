const express = require('express');
const morgan = require('morgan');

const userRoutes = require('./routes/users.routes');
const trafficRoutes = require('./routes/traffic.routes');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/traffic', trafficRoutes);
/* app.use('/api/pictures', profilePictureRoutes); */


module.exports = app;