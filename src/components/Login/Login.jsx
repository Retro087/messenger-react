import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { authorized } from "../../redux/auth-reducer";
import { compose } from "redux";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { Navigate } from "react-router";

let Login = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  let onSubmit = (data) => {
    props.authorized(data.login, data.password);
  };

  if (props.isAuth) {
    return <Navigate to="/profile" />;
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            placeholder="Login"
            {...register("login", { required: true })}
          />
        </div>
        <div>
          <input
            placeholder="password"
            type="password"
            {...register("password", { required: true, maxLength: 15 })}
          />
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};
let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

let LoginContainer = compose(connect(mapStateToProps, { authorized }))(Login);

export default LoginContainer;
