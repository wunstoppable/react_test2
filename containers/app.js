import { connect } from 'react-redux'
import { test } from '../actions'
import App from '../components/app'

const mapStateToProps = state => ({
    test : state.status
})

const mapDispatchToProps = dispatch =>({
    clickButton : topic => {
        dispatch(test(topic));
    }

})

export default connect(
    mapStateToProps,mapDispatchToProps
)(App)
