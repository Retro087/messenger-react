import React from "react";
import s from ".//Header.module.css";
import Header from "./Header";
import { connect } from "react-redux";
import {
  auth,
  logOut,
  setAuthData,
  setAuthProfile,
} from "../../redux/auth-reducer.ts";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuthorized: state.auth.isAuth,
    userProfile: state.auth.userProfile,
  };
};

export default connect(mapStateToProps, {
  setAuthData,
  setAuthProfile,
  auth,
  logOut,
})(HeaderContainer);
