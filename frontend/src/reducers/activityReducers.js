import { CREATE_ACTIVITY_REQUEST, CREATE_ACTIVITY_SUCCESS, CREATE_ACTIVITY_FAIL, GET_ACTIVITIES_REQUEST, GET_ACTIVITIES_FAIL, GET_ACTIVITIES_SUCCESS, DELETE_ACTIVITY_REQUEST, DELETE_ACTIVITY_SUCCESS, DELETE_ACTIVITY_FAIL } from '../constants/activityConstants'

export const createActivityReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_ACTIVITY_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case CREATE_ACTIVITY_SUCCESS:
            return {
                ...state,
                loading: false,
                activity: action.payload,
            }
        case CREATE_ACTIVITY_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export const getActivitiesReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ACTIVITIES_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_ACTIVITIES_SUCCESS:
            return {
                ...state,
                loading: false,
                activities: action.payload,
            }
        case GET_ACTIVITIES_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export const deleteActivityReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_ACTIVITY_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case DELETE_ACTIVITY_SUCCESS:
            return {
                ...state,
                loading: false,
                activity: action.payload,
            }
        case DELETE_ACTIVITY_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}