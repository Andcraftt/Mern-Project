// Set goal
// /api/goals
// /Public
const getGoals = (req, res) => {
    res.status(200).json({message: 'Get goals'})
}

// Set goal
// /api/goals
// /Private
const setGoal = (req, res) => {
    if(!req.body.text){
        res.status(400).json({message: 'Please add a text field'})
    }
    res.status(200).json({message: 'Set goal'})
}

// Update goal
// /api/goals/id
// /Private
const updateGoal = (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
}

// Delete goal
// /api/goals/id
// /Private
const deleteGoal = (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}