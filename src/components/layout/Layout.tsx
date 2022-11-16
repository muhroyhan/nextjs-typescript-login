import { Container, Spacer, styled } from '@nextui-org/react'
import Head from 'next/head'
import { Fragment } from 'react'
import LoginContainer from '../login/LoginContainer'
import UserTableContainer from '../user_table/UserTableContainer'

const StyledContainer = styled(Container, {
    width: '50%',
})

const Layout = () => {
    return (
        <Fragment>
            <Head>
                <title>Muhroyhan NextJs Project</title>
                <meta name="description" content="Muhroyhan NextJs Project" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <StyledContainer>
                <LoginContainer />
                <Spacer y={1} />
                <UserTableContainer />
            </StyledContainer>
        </Fragment>
    )
}

export default Layout
