import { Button, Input, Spacer, styled } from '@nextui-org/react'
import { useEffect } from 'react'
import Form from '../Form'
interface LoginProps {
    createUser: Function
    getUsers: Function
    login: Function
    isActionLoading: boolean
    isActionSuccess: boolean
    isActionError: boolean
}

const { Password } = Input

const StyledButton = styled(Button, {
    width: '100% !important',
})

const Login = (props: LoginProps) => {
    const {
        createUser,
        getUsers,
        isActionLoading,
        isActionSuccess,
        isActionError,
    } = props

    useEffect(() => {
        console.log('isActionLoading', 'isActionSuccess', 'isActionError')
        console.log(isActionLoading, isActionSuccess, isActionError)
    }, [isActionLoading, isActionSuccess, isActionError])

    const handleSubmit = async (values: object) => {
        console.log(values)
        await createUser(values)
        return getUsers()
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                name="email"
                width="100%"
                label="Email"
                placeholder="Email"
            />
            <Spacer y={1} />
            <Input
                name="name"
                width="100%"
                label="Username"
                placeholder="Username"
            />
            <Spacer y={1} />
            <Password
                name="password"
                width="100%"
                label="Password"
                placeholder="Password"
            />
            <Spacer y={1} />
            <StyledButton type="submit">Sign Up</StyledButton>
        </Form>
    )
}

export default Login
