import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CreateQuestion from '../../CreateQuestion/CreateQuestion';
import './Navbar.css';

class Navbar extends Component {
    state = {
        showQuestionModal: false
    };

    openQuestionModal = () => this.setState({ showQuestionModal: true });

    closeQuestionModal = () => this.setState({ showQuestionModal: false });

    render() {
        return (
            <div className="navbar fixed-top" id="navbar">
                {this.state.showQuestionModal && <CreateQuestion handleClose={this.closeQuestionModal} /> }
                <div className="shelter">
                    <Link className="navbar__nav nav__logo nav__underline" to="/">
                        <span className="link-title"><i className="fa fa-users" />
                            <span>K</span>ommunity
                        </span>
                    </Link>
                    <div className="navbar__nav navbar__nav-toggle">
                        <i className="fa fa-bars" />
                    </div>
                    <nav className="nav__items">
                        <div className="navbar__nav nav__underline">
                            <Link to="/" className="nav__link active">
                                <i className="fa fa-home p-r-5" />
                            Home
                            </Link>
                        </div>
                        <div className="navbar__nav nav__underline p__8">
                            <div className="search">
                                <input className="form-control" type="text" placeholder="Search for Questions" />
                            </div>
                        </div>
                        <div className="navbar__nav nav__underline p__8">
                            <button
                                type="button"
                                className="btn btn-blue ripple"
                                id="modalBtn"
                                title="click to ask question"
                                onClick={this.openQuestionModal}
                            >
                                Ask a Question <i className="fa fa-plus" />
                            </button>
                        </div>
                    </nav>

                    {
                        !this.props.user &&
                        <nav className="nav__items nav__items-right js__AuthButton">
                            <div className="navbar__nav pr-0 p__8">
                                <Link to="/signup">
                                    <button type="button" className="btn btn-colorless" id="signBtn">Sign Up <i className="fa fa-dashcube" /></button>
                                </Link>
                            </div>
                            <div className="navbar__nav pr-0 p__8">
                                <Link to="/signin">
                                    <button type="button" className="btn btn-colorless" id="loginBtn">Login <i className="fa fa-chevron-circle-right" /></button>
                                </Link>
                            </div>
                        </nav>
                    }
                    
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

export default connect(mapStateToProps)(Navbar);


