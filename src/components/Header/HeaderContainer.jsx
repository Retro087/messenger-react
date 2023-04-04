import React from "react"
import s from './/Header.module.css'
import Header from "./Header"
import { connect } from "react-redux"
import { auth, setAuthData, setAuthProfile} from "../../redux/auth-reducer"

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.auth()
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {

    return {
        login: state.auth.login,
        isAuthorized: state.auth.isAuthorized,
        userProfile: state.auth.userProfile
    }
}

export default connect(mapStateToProps, { setAuthData, setAuthProfile, auth })(HeaderContainer)