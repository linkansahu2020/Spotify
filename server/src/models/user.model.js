const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
    {
        email: {type: String, required: true},
        password: {type: String, required: true},
        display_picture: {type: String, required:false},
        display_name: {type: String, required: true}
    },{
        versionKey: false,
        timestamps: true
    }
)

userSchema.pre("save",function(next){
    if(!this.isModified("password")) return next()

    const hash = bcrypt.hashSync(this.password,8)
    this.password = hash
    return next()
})

userSchema.methods.check = function (password){
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('users',userSchema)