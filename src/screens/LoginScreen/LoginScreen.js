import React from "react";
import logo from "../../images/logo.jpeg";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { login } from "../../moduels/actions/authActions";

import "./LoginScreen.scss";

class LoginScreen extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, meta, placeholder }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <input
          {...input}
          autoComplete="off"
          className="inline-form"
          placeholder={placeholder}
        />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    // this.props.authActions.login(formValues);
    this.props.login(formValues);
  };

  render() {
    return (
      <div className="login-page">
        <div className="login-form">
          <div className="login-form-left">
            <div className="left-content">
              <h2>Welcome to a better standard of commercial cleaning</h2>
            </div>
          </div>
          <div className="login-form-right">
            <div className="logo">
              <img src={logo} alt="westferry logo" />
            </div>

            <form
              action=""
              className="ui form error center aligned"
              onSubmit={this.props.handleSubmit(this.onSubmit)}
            >
              <Field
                name="username"
                component={this.renderInput}
                placeholder="Enter Your ID"
              />
              <Field
                name="password"
                type="password"
                component={this.renderInput}
                placeholder="Enter Your Password"
              />
              <p>{this.props.message}</p>
              <button className="ui primary button w-100">LOG IN</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.username) {
    errors.username = "You must enter a username";
  }

  if (!formValues.password) {
    errors.password = "You must enter a password";
  }

  return errors;
};

export default connect(
  state => ({
    error: state.auth.get("error"),
    message: state.auth.get("message")
  }),
  { login }
)(reduxForm({ form: "loginForm", validate })(LoginScreen));
