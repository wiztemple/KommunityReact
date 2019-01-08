import React, { Component } from 'react';
import { getItem } from '../../../utils/localStorage';

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
    const { question, deleteQuestion } = this.props;
    const { answer } = this.state;
    return (
      <div className="card p-1 mt-5">
        <div className="card-question">
          <div className="card-question__title">
            {question.title}
          </div>
          <div>
            {
              question && question.user_id.toString() === getItem('id') && (
                <div className="card-hide">
                  <i className="icon ion-ios-keypad" />
                  <div className="card-drop">
                    {/* <a className="editBtn">
                      <i className="icon ion-ios-create" /> Edit Question
                    </a> */}
                    <a onClick={deleteQuestion} className="deleteBtn">
                      <i className="icon ion-ios-close" /> Delete Question
                    </a>
                  </div>
                </div>
              )
            }
          </div>
        </div>
        <div className="justify-content-start">
          <div className="card-user">
            <i className="icon ion-ios-person" />
          </div>
          <div className="card-user__job flex">
            {/* <span className="pl-2">Username</span> */}
            <span />
          </div>
        </div>
        <div className="card-description">
          <p>{question.question_body}

          </p>
        </div>
        <div className="answer-box" id="answerBox">
          <div className="justify-content-start">
            <div>
              <i className="icon ion-ios-person" />
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
export default QuestionCard;
