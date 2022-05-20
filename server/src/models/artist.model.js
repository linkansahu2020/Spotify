const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema(
    {
        name:{type: String, required: true},
        display_picture: {type: String, required: true},
        color: {type: String, required: true}
    },{
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('artists',artistSchema)