import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginRequestAction } from '../actions/loginAction';
import AlertBox from '../components/alerts/AlertBox.jsx';
import { getItem } from '../utils/localStorage';

class Signin extends Component {
  state = {
    username: '',
    password: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  clearInputs = () => {
    this.setState({
      ...this.state, username: '', password: ''
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { loginAction } = this.props;
    loginAction(this.state);
    this.clearInputs();
  }

  render() {
    const { loggingIn, error, success } = this.props;

    if (getItem('token')) {
      return <Redirect to="/" />;
    }
    return (
      <div className="app">
        {
          error
          && <AlertBox className="danger" message={error} />
        }
        {
          success
          && <AlertBox className="success" message={success} />
        }
        <div className="shelter">
          <div className="columns">
            <div className="col-4" />
            <div className="col-4">
              <div className="py-2">
                <h1 className="text-center">
                  <Link className="text-blue logo" to="/">Kommunity</Link>
                </h1>
                <h2 className="text-center text-grey">Sign in to Kommunity</h2>
                <div className="form-card">
                  <form onSubmit={this.handleSubmit}>
                    <div className="msg" />
                    <div className="form-row">
                      <label htmlFor="name">Username:</label>
                      <input type="text" className="form-control"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        placeholder="Enter your username" />
                    </div>
                    <div className="form-row">
                      <label htmlFor="name">Password</label>
                      <input type="password" className="form-control"
                        name="password" value={this.state.password}
                        onChange={this.handleChange} placeholder="password" />
                    </div>
                    {loggingIn ? (
                      <button className="btn btn-block btn-blue ripple"
                        disabled>
                        Signing In...
                      </button>
                    ) : (
                      <button className="btn btn-block btn-blue ripple">
                          Sign In
                      </button>
                    )}
                  </form>
                </div>
                <div className="other__option">
                    Don't have an account yet?
                  <Link className="text-blue" to="/signup">Create Account</Link>
                </div>
              </div>
            </div>
            <div className="col-4" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.login.error,
  success: state.login.success,
  payload: state.login.payload,
  loggingIn: state.login.loggingIn
});

const mapDispatchToProps = {
  loginAction: loginRequestAction
};

Signin.propTypes = {
  loginAction: PropTypes.func.isRequired,
  loggingIn: PropTypes.bool.isRequired,
  success: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(Signin);
