const axios = require('axios');
const User = require('../models/user');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {

    async index(request, response){
        const allUsers = await User.find();

        return response.json(allUsers);
    },

    async store(request, response) {

        const { github_username, techs, latitude, longitude } = request.body;

        try{
            if(await User.findOne({github_username}))
                return response.status(401).send('Esse usuário já foi cadastrado!');
        } catch (error){
            return response.status(400).send('Não foi possível cadastrar o usuário')
        }
        
        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
        
        const { name = login, avatar_url, bio } = apiResponse.data;
    
        const techsArray = parseStringAsArray(techs);
    
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