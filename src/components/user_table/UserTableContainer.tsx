import { useContext } from 'react'
import Context from '../../utils/context'
import UserTable from './UserTable'

const UserTableContainer = (props: any) => {
    const reducer: any = useContext(Context)

    const propStates = {
        ...props,
        getUsers: reducer.user.getUsers,
        isLoading: reducer.user.isLoading,
        users: reducer.user.users,
    }

    return <UserTable {...propStates} />
}

export default UserTableContainer
