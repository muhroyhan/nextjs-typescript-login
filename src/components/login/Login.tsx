import { Button, Input, Spacer, styled } from '@nextui-org/react'
import { useRef } from 'react'

const { Password } = Input

const StyledButton = styled(Button, {
    width: '100% !important',
})

const Login = () => {
    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const handleSubmit = () => {
        console.log(usernameRef.current?.value)
        console.log(passwordRef.current?.value)
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                handleSubmit()
            }}
        >
            <Input
                width="100%"
                label="Username"
                ref={usernameRef}
                placeholder="Username"
            />
            <Spacer y={1} />
            <Password
                width="100%"
                label="Password"
                ref={passwordRef}
                placeholder="Password"
            />
            <Spacer y={1} />
            <StyledButton type="submit">Sign In</StyledButton>
        </form>
    )
}

export default Login
