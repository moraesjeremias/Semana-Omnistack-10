const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const App = express();

mongoose.connect('mongodb+srv://admin:admin@semana-omnistack-10-8gdyq.mongodb.net/users?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

App.use(express.json());
App.use(routes);


App.listen(3000);