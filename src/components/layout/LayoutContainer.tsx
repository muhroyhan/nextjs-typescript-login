import { Container, styled } from '@nextui-org/react'
import Layout from './Layout'

const StyledContainer = styled(Container, {
    minHeight: '100vh',
    display: 'flex !important',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
})

const LayoutContainer = (props: any) => {
    const propStates = {
        ...props,
    }

    return (
        <StyledContainer>
            <Layout {...propStates} />
        </StyledContainer>
    )
}

export default LayoutContainer
