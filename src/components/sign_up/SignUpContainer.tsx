import { useContext } from 'react'
import Context from '../../utils/context'
import SignUp from './SignUp'

const SignUpContainer = (props: any) => {
    const reducer: any = useContext(Context)

    const propStates = {
        ...props,
        createUser: reducer.user.createUser,
        getUsers: reducer.user.getUsers,
        isActionLoading: reducer.user.isActionLoading,
        isActionSuccess: reducer.user.isActionSuccess,
        isActionError: reducer.user.isActionError,
    }

    return <SignUp {...propStates} />
}

export default SignUpContainer
