import { Button, Input, Spacer, styled } from '@nextui-org/react'
import { useEffect } from 'react'
import Form from '../Form'

interface LoginProps {
    isActionLoading: boolean
    isActionSuccess: boolean
    isActionError: boolean
    login: Function
}

const { Password } = Input

const StyledButton = styled(Button, {
    width: '100% !important',
})

const Login = (props: LoginProps) => {
    const { isActionLoading, isActionSuccess, isActionError, login } = props

    useEffect(() => {
        console.log('isActionLoading', 'isActionSuccess', 'isActionError')
        console.log(isActionLoading, isActionSuccess, isActionError)
    }, [isActionLoading, isActionSuccess, isActionError])

    const handleSubmit = async (values: object) => {
        return login(values)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                name="email"
                width="100%"
                label="Email / Username"
                placeholder="Email"
            />
            <Spacer y={1} />
            <Password
                name="password"
                width="100%"
                label="Password"
                placeholder="Password"
            />
            <Spacer y={1} />
            <StyledButton type="submit">Login</StyledButton>
        </Form>
    )
}

export default Login
