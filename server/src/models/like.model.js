const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema(
    {
        user_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
            required: true
        },
        audio_ids:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'audios',
            required: true
        }]
    },{
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('likes',likeSchema)