import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authAction';

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

  handleSubmit = (e) => {
    e.preventDefault();
    const { signUp } = this.props;
    signUp(this.state);
  }
  render() {
    return (
      <div className="app">
        <div className="shelter">
          <div className="columns">
            <div className="col-4" />
            <div className="col-4">
              <div className="py-2">
                <h1 className="text-center logo"><Link className="text-blue" to="/">Kommunity</Link></h1>
                <h2 className="text-center text-grey">Sign up to Kommunity</h2>
                <div className="form-card">
                  <form onSubmit={this.handleSubmit}>
                    <div className="msg" />
                    <div className="form-row">
                      <label htmlFor="name">Username:</label>
                      <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Enter your username" />
                    </div>
                    <div className="form-row">
                      <label htmlFor="name">Email:</label>
                      <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter your email" />
                    </div>
                    <div className="form-row">
                      <label htmlFor="name">Password</label>
                      <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} placeholder="password" />
                    </div>
                    <button id="signupBtn"
                      className="btn btn-block btn-blue ripple id"> Create Account
                    </button>
                  </form>
                </div>
                <div className="other__option">
                                Already have an account?
                  <Link className="text-blue" to="/signin"> Sign In</Link>
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
  signing_up: state.auth.signing_up,
  user: state.auth.user,
  error: state.auth.error,
});

const actions = {
  signUp
}

export default connect(mapStateToProps, actions)(Signup);

