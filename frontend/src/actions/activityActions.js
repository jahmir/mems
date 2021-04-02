import { CREATE_ACTIVITY_REQUEST, CREATE_ACTIVITY_SUCCESS, CREATE_ACTIVITY_FAIL, GET_ACTIVITIES_REQUEST, GET_ACTIVITIES_SUCCESS, GET_ACTIVITIES_FAIL, DELETE_ACTIVITY_FAIL, DELETE_ACTIVITY_SUCCESS, DELETE_ACTIVITY_REQUEST } from '../constants/activityConstants'
import axios from 'axios'

export const createActivityAction = (activityData) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CREATE_ACTIVITY_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            }
        }

        const { data } = await axios.post(
            '/api/activities',
            activityData,
            config
        )

        dispatch({
            type: CREATE_ACTIVITY_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CREATE_ACTIVITY_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const getActivitiesAction = (activityData) => async (dispatch, getState) => {
    try {
        dispatch({
            type: GET_ACTIVITIES_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }


        const { data } = await axios.get(
            '/api/activities',
            config
        )

        dispatch({
            type: GET_ACTIVITIES_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GET_ACTIVITIES_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const deleteActivityAction = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: DELETE_ACTIVITY_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }


        const { data } = await axios.delete(
            `/api/activities/${id}`,
            config
        )

        dispatch({
            type: DELETE_ACTIVITY_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: DELETE_ACTIVITY_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}