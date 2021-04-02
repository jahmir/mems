import Activity from '../models/activityModel.js'
import asyncHandler from 'express-async-handler'


//get all activities
//GET /api/activities/
const getActivities = asyncHandler(async (req, res) => {

    const activities = await Activity.find({ user: req.user._id })

    res.status(200).json(activities)

})


// Create an Activity
// POST /api/activities/
const createActivity = asyncHandler(async (req, res) => {

    const activity = new Activity({
        user: req.user._id,
        name: req.body.name,
        description: req.body.description
    })

    const createdActivity = await activity.save()

    if (createdActivity) {
        res.status(201).json({
            createdActivity,
            type: 'success'
        })
    } else {
        res.status(400)
        throw new Error('Invalid activity data')
    }

})

//delete activity
//DELETE /api/activities/:id
const deleteActivity = asyncHandler(async (req, res) => {

    const activity = await Activity.findById(req.params.id)

    if (activity) {
        await activity.remove()
        res.json('Product removed')
    } else {
        res.status(404)
        throw new Error('Activity not found')
    }
})

const editActivity = asyncHandler(async (req, res) => {

    const {
        name,
        description
    } = req.body

    const activity = await Activity.findById(req.params.id)

    if (activity) {
        activity.name = name,
            activity.description = description

        const updatedActivity = await Activity.save()
        res.json(updatedActivity)

    } else {
        res.status(404)
        throw new Error('Activity not found')
    }
})


export { createActivity, getActivities, deleteActivity, editActivity }