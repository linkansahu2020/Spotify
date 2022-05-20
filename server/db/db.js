const mongoose = require('mongoose');

module.exports = ()=>{
    return mongoose.connect('mongodb+srv://linkan:linkan_1234@cluster0.nmama.mongodb.net/?retryWrites=true&w=majority')
}