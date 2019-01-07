import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import connect from 'react-redux';
// import CommentCard from './CommentCard.jsx';
import manImg from '../../../../public/images/man.png';
// import { singleQuestionAction } from '../../../actions/singleQuestionAction';

class QuestionCard extends Component {
  componentDidMount() {
//     const {
//       match: {
//         params: {
//           questionId
//         }
//       }
//     } = this.props;
      console.log(this.props);
    // this.props.singleQuestionAction(questionId);
  }

  render() {
    const { question } = this.props;
    return (
      <div className="card p-1 mt-4">
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
          <p>{question.questionBody}
            <a href="#" className="card-description__link">Read more <i className="fa fa-angle-double-right" /></a>
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
              <textarea className="box" placeholder="Answer" />
              <button className="button ripple" type="button">Post</button>
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
