const axios = require('axios');
const User = require('../models/user');


module.exports = {
    async store(request, response) {

        const { github_username, techs, latitude, longitude } = request.body;
        
        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
        
        const { name = login, avatar_url, bio } = apiResponse.data;
    
        const techsArray = techs.split(',').map(tech =>tech.trim());
    
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        }
    
        const user = await User.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location,
        })
    
        console.log(name, avatar_url, bio, github_username);
    
        return response.json(user);
    }
}