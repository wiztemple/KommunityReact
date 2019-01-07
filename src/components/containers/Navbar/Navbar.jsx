import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CreateQuestion from '../CreateQuestion/CreateQuestion.jsx';
import UserNav from './UserNav.jsx';
import GuestNav from './GuestNav.jsx';
import './Navbar.scss';

class Navbar extends Component {
  state = {
    showQuestionModal: false
  };

  openQuestionModal = () => this.setState({ showQuestionModal: true });

  closeQuestionModal = () => this.setState({ showQuestionModal: false });

  render() {
    const { isLoggedIn } = this.props;
    return (
      <div className="navbar fixed-top" id="navbar" >
        {this.state.showQuestionModal
            && <CreateQuestion handleClose={this.closeQuestionModal} />}
        <div className="shelter">
          <Link className="navbar__nav nav__logo nav__underline" to="/">
            <span className="link-title">
              <i className="icon ion-ios-contacts" />
              <span>K</span>ommunity
            </span>
          </Link>
          <div className="navbar__nav navbar__nav-toggle">
            <i className="fa fa-bars" />
          </div>
          <nav className="nav__items">
            <div className="navbar__nav nav__underline">
              <Link to="/" className="nav__link active">
                <i className="icon ion-md-home p-r-5" />
                      Home
              </Link>
            </div>
            <div className="navbar__nav nav__underline p__8">
              <button
                type="button"
                className="btn btn-blue ripple"
                id="modalBtn"
                title="click to ask question"
                onClick={this.openQuestionModal}
              >
                  Ask a Question
                <i className="icon ion-ios-add-circle-outline" />
              </button>
            </div>
          </nav>
          <nav className="nav__items nav__items-right">
            {isLoggedIn ? <UserNav /> : <GuestNav /> }
          </nav>
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};
export default Navbar;
