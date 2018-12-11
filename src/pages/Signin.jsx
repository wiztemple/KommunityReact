import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signin extends Component {
  render() {
    return (
      <div className="app">
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
                  <form id="signin">
                    <div className="msg" />
                    <span className="js__errormsg" />
                    <div className="form-row">
                      <label htmlFor="name">Username:</label>
                      <input type="text" className="form-control"
                        name="username" id="username"
                        placeholder="Enter your username" />
                    </div>
                    <div className="form-row">
                      <label htmlFor="name">Password</label>
                      <input type="password" className="form-control"
                        name="password" id="password"
                        required placeholder="password" />
                    </div>
                    <button type="submit"
                      className="btn btn-block btn-blue ripple"
                      id="login">Sign In</button>
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

export default Signin;
