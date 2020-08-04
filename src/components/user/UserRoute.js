import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

@connect(
  state => ({
    username: state.loginStatus
  })
)
class UserRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }
  componentWillMount() {
    const user = this.props.username;
    if (!user) {
      this.setState({ username: "" });
    } else {
      this.setState({ username: user.username });
    }
  }
  render() {
    const { component: Component, ...rest } = this.props;
    const { username } = this.state;
    return (
      <Route
        {...rest}
        render={props =>
          !username ? <Redirect to={{
            pathname:'/login',
            state:"这是在userRoute里面"
          }} /> : <Component {...props} />
        }
      />
    );
  }
}

export default UserRoute;
