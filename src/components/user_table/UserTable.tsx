import { Loading, Table } from '@nextui-org/react'
import { useEffect } from 'react'

interface UserTableProps {
    getUsers: Function
    isLoading: boolean
    users: Array<any>
}

const UserTable = (props: UserTableProps) => {
    const { getUsers, isLoading, users } = props
    const { Header, Body, Column, Row, Cell } = Table

    useEffect(() => {
        getUsers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (isLoading) {
        return <Loading />
    }

    return (
        <Table>
            <Header>
                <Column>ID</Column>
                <Column>Username</Column>
                <Column>Password</Column>
            </Header>
            <Body>
                {users.map((user) => {
                    return (
                        <Row key={user._id}>
                            <Cell>{user._id}</Cell>
                            <Cell>{user.username}</Cell>
                            <Cell>{user.password}</Cell>
                        </Row>
                    )
                })}
            </Body>
        </Table>
    )
}

export default UserTable
