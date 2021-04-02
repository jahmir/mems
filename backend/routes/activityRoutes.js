import express from 'express'
const router = express.Router()
import { createActivity, getActivities, deleteActivity, editActivity } from '../controllers/activityControllers.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(protect, createActivity).get(protect, getActivities)
router.route('/:id').delete(protect, deleteActivity).put(protect, editActivity)

export default router