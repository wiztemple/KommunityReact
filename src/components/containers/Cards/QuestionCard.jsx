import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import connect from 'react-redux';
// import CommentCard from './CommentCard.jsx';
import manImg from '../../../../public/images/man.png';

class QuestionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: ''
    };
  }

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = () => {
      const { answer } = this.state;
      const { id } = this.props;
      if (!answer.trim()) {
        return false;
      }
      this.props.postAnswerRequestAction(answer, id);
      this.setState({
        answer: ''
      });
    }

    render() {
      const { question } = this.props;
      const { answer } = this.state;
      return (
        <div className="card p-1 mt-5">
          <div className="card-question">
            <span>{question.title}</span>
          </div>
          <div className="justify-content-start">
            <div className="card-user">
              <img className="avatar" src={manImg} />
            </div>
            <div className="card-user__job flex">
              <span className="pl-2">Username</span>
              <span>
                <small className="text-grey">1 minute ago</small>
                <small className="text-grey">07-08-2018</small>
              </span>
            </div>
          </div>
          <div className="card-description">
            <p>{question.question_body}

            </p>
          </div>
          <div className="card-reaction justify-content-space-between">
            <div className="card-answer">
              <div className="text-grey mb-1">63 Answers <span><small>Posted 2 hrs ago.</small></span></div>
              <div className="card-btn ripple" title="Click to answer"> <i className="fa fa-pencil" />Answer
              </div>

            </div>
          </div>
          <div className="answer-box" id="answerBox">
            <div className="justify-content-start">
              <div>
                <img src={manImg} className="avatar" />
              </div>
              <div className="ml-1 answer-input">
                <textarea onChange={this.handleChange} name="answer" value={answer} className="box" placeholder="Answer" />
                <button onClick={this.handleSubmit} className="button ripple" type="button">Post</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

// const mapStateToProps = state => ({
//   questions: state.singleQuestion.questions,
// });
// QuestionCard.propTypes = {
//   question: PropTypes.object,
//   singleQuestionAction: PropTypes.func.isRequired,
//   match: PropTypes.object.isRequired
// };
// export default connect(mapStateToProps, { singleQuestionAction })(AnswerCard);
export default QuestionCard;
