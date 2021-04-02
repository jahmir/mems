import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { createActivityAction } from '../actions/activityActions'

const AddActivityScreen = () => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const createActivity = useSelector(state => state.createActivity)
    const { loading, activity, error } = createActivity

    const dispatch = useDispatch()



    const submitHandler = (e) => {
        const activityData = {
            name,
            description
        }

        e.preventDefault()
        dispatch(createActivityAction(activityData))
    }

    return (
        <div>
            <Form onSubmit={submitHandler}>
                <h1 className='mb-3'>Add Activity</h1>
                {activity && activity.type ? (<Message variant={activity.type}>{activity.createdActivity.name} is successfully created</Message>) : ''}
                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='description'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>
                    Save
        </Button>
            </Form>
        </div>
    )
}

export default AddActivityScreen
