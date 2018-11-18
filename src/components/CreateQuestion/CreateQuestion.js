import React from 'react';
import PropTypes from 'prop-types';
import './CreateQuestion.css';

const CreateQuestion = (props) => (
    <section>
        <div id="modal" className="modal">
            <div className="columns">
                <div className="col-4" />
                <div className="col-4">
                    <div className="modal-content">
                        <div className="modal-header">
                            <span className="closeBtn" onClick={props.handleClose}>&times;</span>
                            <h2 className="text-blue">Ask Question</h2>
                        </div>
                        <div className="modal-body">
                            <form id="postQst">
                                <div className="form-row">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" className="form-control" name="title" id="title" placeholder="title" />
                                </div>
                                <div className="form-row">
                                    <label htmlFor="questionBody">Question</label>
                                    <textarea className="box" id="questionBody" name="questionBody" placeholder="ask a question" />
                                </div>
                                <div className="form-row">
                                    <input type="text" className="form-control" name="tag" id="tag" placeholder="tag" />
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-blue ripple" id="askBtn">Ask Question<i className="fa fa-question" /></button>
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

CreateQuestion.propTypes = {
    handleClose: PropTypes.func.isRequired
};

export default CreateQuestion;
