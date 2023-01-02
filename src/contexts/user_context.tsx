import { useReducer } from 'react'
import * as userAction from '../store/actions/user'
import * as ACTION_TYPES from '../store/action_type'
import * as UserReducer from '../store/reducers/userReducer'

const UserContextState = () => {
    const [state, dispatch] = useReducer(
        UserReducer.UserReducer,
        UserReducer.initialState
    )

    const getUsers = async () => {
        dispatch({ type: ACTION_TYPES.USERS.request, data: {} })
        dispatch(await userAction.getUsers())
    }

    const createUser = async (data: object) => {
        dispatch({ type: ACTION_TYPES.USERS.request, data: {} })
        dispatch(await userAction.createUser(data))
    }

    const login = async (data: object) => {
        dispatch({ type: ACTION_TYPES.LOGIN.request, data: {} })
        dispatch(await userAction.login(data))
    }

    return { user: { ...state, createUser, getUsers, login } }
}

export default UserContextState
