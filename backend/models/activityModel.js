import mongoose from 'mongoose'

const activitySchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    description: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

const Activity = mongoose.model('Activity', activitySchema)

export default Activity

