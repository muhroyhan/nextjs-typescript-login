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

    return { user: { ...state, getUsers } }
}

export default UserContextState
