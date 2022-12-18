const express = require('express');
const {createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout} = require('../controllers/WorkoutController')
const router = express.Router();

//get all workout
router.get('/', getWorkouts);

//get single workout
router.get('/:id', getWorkout);

// post a new wprkout
router.post('/', createWorkout);

//delete a workout
router.delete('/:id', deleteWorkout);

//update a workout
router.patch('/:id',updateWorkout);




module.exports = router