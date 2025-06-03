const asyncHandler = require('express-async-handler')

const Goal = require('../model/goalModel')

// Set goal
// /api/goals
// /Public
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()

    res.status(200).json(goals)
})

// Set goal
// /api/goals
// /Private
const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }


    res.status(200).json({message: 'Set goal'})
})

// Update goal
// /api/goals/id
// /Private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})
// Delete goal
// /api/goals/id
// /Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}