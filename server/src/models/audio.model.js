const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema(
    {
        title:{type: String, required: true},
        image: {type: String, required: true},
        audio: {type: String, required: true},
        language: {type: String, required: true},
        artist: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'artists',
            required: true
        },
    },{
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('artists',artistSchema)