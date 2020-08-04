import React from "react";
import LoginBtn from "./LoginBtn";
import LoginInput from "./LoginInput";

class LoginForm extends React.Component {
  render() {
    const isEasy = Boolean(this.props.type === "easy");
    return (
      <div className="container">
        <LoginInput isEasy={isEasy} />
        <LoginBtn
          easy={isEasy}
          handleClick={this.props.handleClick}
          userInfo={{ ...this.state }}
        />
        <style jsx>{`
          .container {
            margin-top: 20px;
            background: rgb(252, 252, 252);
          }
        `}</style>
      </div>
    );
  }
}

export default LoginForm;
