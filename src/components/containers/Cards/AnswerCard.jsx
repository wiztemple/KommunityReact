import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import connect from 'react-redux';
import CommentCard from './CommentCard.jsx';
import manImg from '../../../../public/images/man.png';
// import { singleQuestionAction } from '../../../actions/singleQuestionAction';

class AnswerCard extends Component {
  componentDidMount() {
    const {
      match: {
        params: {
          questionId
        }
      }
    } = this.props;
    this.props.singleQuestionAction(questionId);
  }

  render() {
    const { questions } = this.props;
    return (
      <div>
        <div className="card p-1">
          <div className="card-question">
            <a className="card-question__title">{questions.title}</a>
            <div className="card-hide">
              <i className="fa fa-ellipsis-h" />
              <div className="card-drop">
                <a className="editBtn">
                  <i className="fa fa-pencil" /> Edit Question
                </a>
                <a className="deleteBtn"><
                  i className="fa fa-times" /> Delete Question
                </a>
              </div>
            </div>
            <div className="justify-content-start">
              <div className="card-user">
                <img className="avatar" src={manImg} />
              </div>
              <div className="card-user__job flex">
                <span className="pl-2">Lorem ipsum dolor sit amet.</span>
                <span>
                  <small className="text-grey">1 minute ago</small>
                  <small className="text-grey">ter</small>
                </span>
              </div>
            </div>
            <div className="card-description">
              <p />
            </div>
            <div className="card-reaction justify-content-space-between">
              <div className="card-answer ml-2">
                <div className="card-btn">
                  <span>63 Answers</span> <i className="fa fa-pencil" />
                </div>
              </div>

            </div>
          </div>
          <div className="answer" />
          <div className="answer-box">
            <div className="justify-content-start">
              <div>
                <img src="./assets/images/girl.png" className="avatar" />
              </div>
              <div className="ml-1 answer-input">
                <textarea className="box" placeholder="Answer" />
                <button className="button ripple" type="button">Post</button>
              </div>
            </div>
          </div>

          <div className="answer-count">
            <h1>2 Answers</h1>
          </div>
          <div className="mt-1 answer-block py-1">
            <div className="justify-content-start">
              <div className="card-user">
                <img className="avatar" src="./assets/images/girl.png" />
              </div>
              <div className="card-user__job flex">
                <span className="pl-2">Lorem ipsum dolor sit amet.</span>
                <span>
                  <small className="text-grey">Answered 1 minute ago</small>
                </span>
              </div>
            </div>
            <div className="answer-text">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Nisi consectetur nobis consequatur numquam reiciendis
                 necessitatibus accusamus dolore,
                dolor laborum enim corrupti et vel praesentium similique
               veniet iste dicta dolorem! Repellendus.</p>
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
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   questions: state.singleQuestion.questions,
// });
AnswerCard.propTypes = {
  question: PropTypes.object,
  singleQuestionAction: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
};
// export default connect(mapStateToProps, { singleQuestionAction })(AnswerCard);
export default AnswerCard;
