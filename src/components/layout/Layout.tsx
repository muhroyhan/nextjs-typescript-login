import { Container, Navbar, Spacer } from '@nextui-org/react'
import Head from 'next/head'
import { Fragment, useState } from 'react'
import LoginContainer from '../login/LoginContainer'
import SignUpContainer from '../sign_up/SignUpContainer'
import UserTableContainer from '../user_table/UserTableContainer'

interface TabIdentifier {
    signUp: string
    login: string
}

const tabValues: TabIdentifier = {
    signUp: 'signup',
    login: 'login',
}

const Layout = () => {
    const [tabActive, setTabActive] = useState(tabValues.login)

    const isSignupPage = tabActive === tabValues.signUp
    const isLoginPage = tabActive === tabValues.login

    return (
        <Fragment>
            <Head>
                <title>Muhroyhan NextJs Project</title>
                <meta name="description" content="Muhroyhan NextJs Project" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container xs>
                <Navbar css={{ borderRadius: '20px' }}>
                    <Navbar.Content css={{ borderRadius: '20px' }}>
                        <Navbar.Item
                            isActive={isSignupPage}
                            onClick={() => setTabActive(tabValues.signUp)}
                            css={{ borderRadius: '20px', cursor: 'pointer' }}
                        >
                            Sign Up
                        </Navbar.Item>
                    </Navbar.Content>
                    <Navbar.Content css={{ borderRadius: '20px' }}>
                        <Navbar.Item
                            isActive={isLoginPage}
                            onClick={() => setTabActive(tabValues.login)}
                            css={{ borderRadius: '20px', cursor: 'pointer' }}
                        >
                            Login
                        </Navbar.Item>
                    </Navbar.Content>
                </Navbar>
                {isSignupPage && <SignUpContainer />}
                {isLoginPage && <LoginContainer />}
                <Spacer y={1} />
                <UserTableContainer />
            </Container>
        </Fragment>
    )
}

export default Layout
