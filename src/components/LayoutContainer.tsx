import { useContext } from 'react'
import Context from '../utils/context'
import Layout from './Layout'

const LayoutContainer = (props: any) => {
    const reducer: any = useContext(Context)

    const propStates = {
        ...props,
        getUsers: reducer.user.getUsers,
        isLoading: reducer.user.isLoading,
        users: reducer.user.users,
    }

    return <Layout {...propStates} />
}

export default LayoutContainer
