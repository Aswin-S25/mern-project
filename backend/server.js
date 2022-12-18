require('dotenv').config();
const express = require('express');
const cors = require('cors');
const workoutRouter = require('./routers/user');
const port = process.env.PORT;
const connection = require('./db');

//express app
const app =express();

//middleware
app.use(express.json());
app.use(cors());


//routes
app.use('/api/workouts', workoutRouter);

//connect to database
connection();

//listens for request
app.listen(port, ()=>{
    console.log(`listeningn to port ${port}`);
})

