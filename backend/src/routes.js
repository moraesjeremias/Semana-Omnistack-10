const { Router } = require('express');
const axios = require('axios');

const routes = Router();

routes.post('/users', async (request, response) =>{

    const { github_username, techs } = request.body;
    
    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
    const { name = login, avatar_url, bio } = apiResponse.data;

    const techsArray = techs.split(',').map(tech =>tech.trim());

    console.log(name, avatar_url, bio, github_username);

    return response.json({ message: 'Hello World'});
});

module.exports = routes;