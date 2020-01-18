const User = require('../models/user');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {

        const { lagitude, longitude, techs } = request.query;

        const techsArray = parseStringAsArray(techs);

        const users = await User.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near:{
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude,lagitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });

        return response.json({users});
    }
}