require('dotenv').config();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const joi = require('joi');
const passwordComplexity = require('joi-password-complexity');
const Schema = mongoose.schema;

const userSchema = new Schema({
    firstname: {type: String, require: true},
    lastname: {type:String, require:true},
    email: {type:String, require: true},
    password:{type:String, require: true},
});

userSchema.methods.generateAuthToken = () => {
    const token = jwt.sign({_id:this._id}, process.env.JWTPRIVATEKEY, {expiresIn: "7d"})
    return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) =>{
     const schema = joi.object({
        firstname: joi.string().required().label("FIrst name"),
        lastname: joi.string().required().label("Last name"),
        email: joi.string().required().label("Email"),
        password:passwordComplexity().required().label('password')
     });
     return schema.validate(data);
};

module.exports = {User, validate};