import LayoutContainer from '../src/components/layout/LayoutContainer'
import UserContextState from '../src/contexts/user_context'
import Context from '../src/utils/context'

const Index = () => {
    return (
        <Context.Provider value={{ ...UserContextState() }}>
            <LayoutContainer />
        </Context.Provider>
    )
}

export default Index
