import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

@connect(
  state => ({
    username: state.loginStatus.username
  }),
  null
)
class LoginRoute extends React.Component {
  render() {
    const { username,...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          !username ? <Component {...props} /> : <Redirect to="/user" />
        }
      />
    );
  }
}

export default LoginRoute;
