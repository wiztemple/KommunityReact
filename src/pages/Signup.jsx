import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signupRequestAction } from '../actions/signupActions';
import AlertBox from '../components/alerts/AlertBox.jsx';

class Signup extends Component {
    state = {
      username: '',
      email: '',
      password: '',
    }

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

    clearInputs = () => {
      this.setState({
        ...this.state, email: '', username: '', password: ''
      });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const { signupAction } = this.props;
      signupAction(this.state);
      this.clearInputs();
    }

    render() {
      const { signingUp, error, success } = this.props;
      return (
        <div className="app">
          {
            error
            && <AlertBox className="danger" message={error} />
          }
          {
            success
            && <AlertBox className="success" message={success.split('.')[1]} />
          }
          <div className="shelter">
            <div className="columns">
              <div className="col-4" />
              <div className="col-4">
                <div className="py-2">
                  <h1 className="text-center logo">
                    <Link className="text-blue" to="/">Kommunity</Link>
                  </h1>
                  <h2 className="text-center text-grey">
                        Sign up to Kommunity
                  </h2>
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
                        <label htmlFor="name">Email:</label>
                        <input type="email" className="form-control"
                          name="email" value={this.state.email}
                          onChange={this.handleChange}
                          placeholder="Enter your email" />
                      </div>
                      <div className="form-row">
                        <label htmlFor="name">Password</label>
                        <input type="password" className="form-control"
                          name="password" value={this.state.password}
                          onChange={this.handleChange} placeholder="password" />
                      </div>
                      {signingUp ? (
                        <button className="btn btn-block btn-blue ripple"
                          disabled>
                            Creating Account...
                        </button>
                      ) : (
                        <button className="btn btn-block btn-blue ripple">
                            Create Account
                        </button>
                      )}
                    </form>
                  </div>
                  <div className="other__option">
                      Already have an account?
                    <Link className="text-blue" to="/login"> Sign In</Link>
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
  error: state.signup.error,
  success: state.signup.success,
  payload: state.signup.payload,
  signingUp: state.signup.signingUp
});

const mapDispatchToProps = {
  signupAction: signupRequestAction
};

Signup.propTypes = {
  signupAction: PropTypes.func.isRequired,
  signingUp: PropTypes.bool.isRequired,
  success: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(Signup);
