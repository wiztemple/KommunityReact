import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createQuestionRequestAction } from
  '../../../actions/createQuestionAction';
import './CreateQuestion.scss';
// import { getItem } from '../../../utils/localStorage';

class CreateQuestion extends Component {
  state = {
    title: '',
    questionBody: '',
    tag: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { createQuestionAction, handleClose } = this.props;
    createQuestionAction(this.state);
    handleClose();
  }

  render() {
    // if (!getItem()) {
    //   return (<Redirect to="/signup" />);
    // }
    return (
      <section>
        <div id="modal" className="modal">
          <div className="columns">
            <div className="col-4" />
            <div className="col-4">
              <div className="modal-content">
                <div className="modal-header">
                  <span className="closeBtn"
                    onClick={this.props.handleClose}>&times;</span>
                  <h2 className="text-blue">Ask Question</h2>
                </div>
                <div className="modal-body">
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                      <label htmlFor="title">Title</label>
                      <input type="text" className="form-control"
                        name="title" value={this.state.title}
                        onChange={this.handleChange} placeholder="title" />
                    </div>
                    <div className="form-row">
                      <label htmlFor="questionBody">Question</label>
                      <textarea className="box"
                        name="questionBody" value={this.state.questionBody}
                        onChange={this.handleChange}
                        placeholder="ask a question" />
                    </div>
                    <div className="form-row">
                      <input type="text" className="form-control"
                        name="tag" value={this.state.tag}
                        onChange={this.handleChange} placeholder="tag" />
                    </div>
                    <div className="modal-footer">
                      <button type="submit" className="btn btn-blue ripple"
                      >Ask Question <i className="icon ion-ios-add" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-4" />
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  error: state.create.error,
  success: state.create.success,
  payload: state.create.payload,
});

const mapDispatchToProps = {
  createQuestionAction: createQuestionRequestAction
};

CreateQuestion.propTypes = {
  createQuestionAction: PropTypes.func.isRequired,
  success: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestion);
