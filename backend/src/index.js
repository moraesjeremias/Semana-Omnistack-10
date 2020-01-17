const express = require('express');

const App = express();

App.get('/', (request, response) => {
    return response.json({ message: "Hello Wolrds"});
});


App.listen(3000);