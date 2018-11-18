import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {
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
                  <form id="signup">
                    <div className="msg" />
                    <div className="form-row">
                      <label htmlFor="name">Username:</label>
                      <input type="text" className="form-control" id="username" name="username" placeholder="Enter your username" />
                    </div>
                    <div className="form-row">
                      <label htmlFor="name">Email:</label>
                      <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" />
                    </div>
                    <div className="form-row">
                      <label htmlFor="name">Password</label>
                      <input type="password" className="form-control" id="password" name="password" required placeholder="password" />
                    </div>
                    <button
                      type="submit"
                      id="signupBtn"
                      className="btn btn-block btn-blue ripple id"> Create Account </button>
                  </form>
                </div>
                <div className="other__option">
                                Already have an account?
                  <Link className="text-blue" to="/signin">Sign In</Link>
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

export default Signup;
