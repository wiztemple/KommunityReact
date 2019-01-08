import React, { Component } from 'react';

class AnswerCard extends Component {
  render() {
    const { answers } = this.props;
    return answers.map((answer, index) => {
      return (
        <div key={index}>
          <div className="mt-1 answer-block py-1">
            <div className="justify-content-start">
              <div className="card-user card-user-span">
                <i className="icon ion-ios-person" />
              </div>
              <div className="card-user__job flex">
                <span className="pl-1">Username</span>
                <span>
                  <small className="text-grey">Answered 1 minute ago</small>
                </span>
                <div className="answer-text">
                  <p>{answer.answer_body}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
}

export default AnswerCard;
