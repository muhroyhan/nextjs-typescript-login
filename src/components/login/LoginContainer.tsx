import Login from './Login'

const LoginContainer = (props: any) => {
    const propStates = {
        ...props,
    }

    return <Login {...propStates} />
}

export default LoginContainer
