import { actionInterface } from '../../interfaces/actionInterface'
import * as ACTION_TYPES from '../action_type'

export const initialState = {
    isActionLoading: false,
    isActionSuccess: false,
    isActionError: false,

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

        case ACTION_TYPES.CREATE_USER.request:
            return {
                ...state,
                isActionLoading: true,
                isActionSuccess: false,
                isActionError: false,
            }

        case ACTION_TYPES.CREATE_USER.success:
            return {
                ...state,
                isActionLoading: false,
                isActionSuccess: true,
                isActionError: false,
            }

        case ACTION_TYPES.CREATE_USER.error:
            return {
                ...state,
                isActionLoading: false,
                isActionSuccess: false,
                isActionError: true,
            }

        case ACTION_TYPES.LOGIN.request:
            return {
                ...state,
                isActionLoading: true,
                isActionSuccess: false,
                isActionError: false,
            }

        case ACTION_TYPES.LOGIN.success:
            return {
                ...state,
                isActionLoading: false,
                isActionSuccess: true,
                isActionError: false,
            }

        case ACTION_TYPES.LOGIN.error:
            return {
                ...state,
                isActionLoading: false,
                isActionSuccess: false,
                isActionError: true,
            }

        default:
            return state
    }
}
