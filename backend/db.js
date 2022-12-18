const mongoose = require('mongoose');



const database = () => {
    const uri = process.env.ATLAS_URI;
    mongoose.set('strictQuery', false);
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    const db = mongoose.connection;

    db.on('error', (err) => {
        console.log("error is ", err);
    })
    db.once('open', () => {
        console.log("database connected");
    })
};


module.exports = database;