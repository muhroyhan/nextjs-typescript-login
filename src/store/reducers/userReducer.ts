import { actionInterface } from '../../interfaces/actionInterface'
import * as ACTION_TYPES from '../action_type'

export const initialState = {
    isLoading: false,
    users: [],
}

export const UserReducer = (state = initialState, action: actionInterface) => {
    const data = action.data

    switch (action.type) {
        case ACTION_TYPES.USERS.request:
            return {
                ...state,
                isLoading: true,
                users: [],
            }

        case ACTION_TYPES.USERS.success:
            return {
                ...state,
                isLoading: false,
                users: data.users,
            }

        case ACTION_TYPES.USERS.error:
            return {
                ...state,
                isLoading: false,
                users: [],
            }

        default:
            return state
    }
}
