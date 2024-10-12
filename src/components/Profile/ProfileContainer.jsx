import React from "react";
import s from "./Profile.module.css";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getProfile,
  getStatus,
  setStatus,
  setUserProfile,
  updatePhoto,
  updateStatus,
} from "../../redux/profile-reducer.ts";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.userProfile,
    status: state.profilePage.userStatus,
    id: state.auth.id,
  };
};

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    getProfile,
    getStatus,
    updateStatus,
    updatePhoto,
  }),
  withRouter,
  withAuthRedirect
)(Profile);
