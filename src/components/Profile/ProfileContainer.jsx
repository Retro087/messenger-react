import React from "react"
import s from './Profile.module.css'
import Profile from "./Profile"
import { connect } from "react-redux"
import { getProfile, getStatus, setUserProfile, updateStatus } from "../../redux/profile-reducer"
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
            profileId = this.props.id
        }
        this.props.getProfile(profileId)
        this.props.getStatus(profileId)
    }


    render() {
        return <Profile profile={this.props.profile} status={this.props.status} myId={this.props.id} onStatusChange={this.props.updateStatus}/>
    }


}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.userProfile,
        status: state.profilePage.userStatus,
        id: state.auth.id,
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

export default compose(connect(mapStateToProps, { setUserProfile, getProfile, getStatus, updateStatus}), withRouter, withAuthRedirect)(ProfileContainer)