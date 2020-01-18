const mongoose = require('mongoose');
const GeoSchema = require('./utils/GeoSchema');

const UserSchema = new mongoose.Schema({
    name: String,
    github_username: {
        type: String,
        unique: true,
    },
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: GeoSchema,
        createIndexes: '2dshpere'
    }
});

module.exports = mongoose.model('User', UserSchema);