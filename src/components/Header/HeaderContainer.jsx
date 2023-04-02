import React from "react"
import s from './/Header.module.css'
import Header from "./Header"
import { connect } from "react-redux"
import { setAuthData, setAuthProfile} from "../../redux/auth-reducer"
import axios from "axios"

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, login, email } = response.data.data
                    this.props.setAuthData(id, login, email)
                    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + id)
                        .then(response => {
                            this.props.setAuthProfile(response.data)
                        })
                }

            })
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

export default connect(mapStateToProps, { setAuthData, setAuthProfile })(HeaderContainer)