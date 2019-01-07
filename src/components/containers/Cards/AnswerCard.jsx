import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import connect from 'react-redux';
import CommentCard from './CommentCard.jsx';
import manImg from '../../../../public/images/man.png';
// import { singleQuestionAction } from '../../../actions/singleQuestionAction';

class AnswerCard extends Component {
  // componentDidMount() {
  //   const {
  //     match: {
  //       params: {
  //         questionId
  //       }
  //     }
  //   } = this.props;
  //   this.props.singleQuestionAction(questionId);
  // }

  render() {
    const { answers } = this.props;
    return answers.map((answer, index) => {
      return (
        <div key={index}>
          <div className="answer-count">
            <h1>2 Answers</h1>
          </div>
          <div className="mt-1 answer-block py-1">
            <div className="justify-content-start">
              <div className="card-user">
                <img className="avatar" src={manImg} />
              </div>
              <div className="card-user__job flex">
                <span className="pl-2">Username</span>
                <span>
                  <small className="text-grey">Answered 1 minute ago</small>
                </span>
              </div>
            </div>
            <div className="answer-text">
              <p>{answer.answer_body}</p>
            </div>

            <div className="justify-content-start">
              <div className="card-upvote">
                <div className="card-reaction-icons" title="click to like">
                  <i className="fa fa-thumbs-up" /> Like
              </div>
              </div>
              <div className="card-views pl-1">
                <div className="card-reaction-icons"
                  title="click to add your comment">
                  <i className="fa fa-comments-o" /> Comment
              </div>
              </div>
            </div>
            <CommentCard />
          </div>
        </div>
      );
    })
  }
}

// const mapStateToProps = state => ({
//   questions: state.singleQuestion.questions,
// });
// AnswerCard.propTypes = {
//   question: PropTypes.object,
//   singleQuestionAction: PropTypes.func.isRequired,
//   match: PropTypes.object.isRequired
// };
// export default connect(mapStateToProps, { singleQuestionAction })(AnswerCard);
export default AnswerCard;
