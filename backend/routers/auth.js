const router = require("experss").Router();
const {User} = require('../models/user');
const joi = require('joi');

router.post("/", async(req, res) => {
    try{
        const{error} = validate(req.body);
        if(error)
            return res.status(400).send({message: error.details[0].message })

    } catch(error) {

    }
})

const validate = (data) => {
    const schema = joi.object({
        email:joi.string().email().required().label("Email"),
        password:joi.string().email().required().label("Password"),

    });
    return schema.validate(data);
}

