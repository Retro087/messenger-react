import { connect } from "react-redux";
import React from "react";
import { Navigate } from "react-router-dom";

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export let withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) {
        return <Navigate to="/login" />;
      }
      return <Component {...this.props} />;
    }
  }
  let connectedRedirectComponent = connect(mapStateToProps)(RedirectComponent);
  return connectedRedirectComponent;
};
