import { useContext } from 'react'
import Context from '../../utils/context'
import Login from './Login'

const LoginContainer = (props: any) => {
    const reducer: any = useContext(Context)

    const propStates = {
        ...props,
        createUser: reducer.user.createUser,
        getUsers: reducer.user.getUsers,
        login: reducer.user.login,
        isActionLoading: reducer.user.isActionLoading,
        isActionSuccess: reducer.user.isActionSuccess,
        isActionError: reducer.user.isActionError,
    }

    return <Login {...propStates} />
}

export default LoginContainer
