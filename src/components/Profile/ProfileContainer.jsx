import React from "react"
import s from './Profile.module.css'
import Profile from "./Profile"
import { connect } from "react-redux"
import { getProfile, setUserProfile } from "../../redux/profile-reducer"
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { withAuthRedirect } from "../hoc/withAuthRedirect"
import { compose } from "redux"


class ProfileContainer extends React.Component {
    componentDidMount() {
        let profileId = this.props.router.params.profileId
        if(!profileId){
            profileId = 2
        }
        this.props.getProfile(profileId)
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }


}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.userProfile,
    }
}



function withRouter(Component) {

    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default compose(connect(mapStateToProps, { setUserProfile, getProfile }), withRouter, withAuthRedirect)(ProfileContainer)