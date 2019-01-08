import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/containers/Navbar/Navbar.jsx';
import AnswerCard from '../components/containers/Cards/AnswerCard.jsx';
import QuestionCard from '../components/containers/Cards/QuestionCard.jsx';
import { isLoggedIn } from '../utils/localStorage';
import { singleQuestionAction } from '../actions/singleQuestionAction';
import { postAnswerRequestAction } from '../actions/postAnswerAction';


class AnswerPage extends PureComponent {

  componentDidMount() {
    const {
      match: {
        params: {
          id
        }
      }
    } = this.props;
    this.props.singleQuestionAction(id);
  }

  render() {
    const {
      question,
      answers,
      postAnswerRequestAction,
      match: {
        params: {
          id
        }
      }
    } = this.props;
    if (!question) {
      return <div>Loading</div>;
    }
    return (
      <div className="app">
        <div className="header">
          <Navbar isLoggedIn={isLoggedIn()} />
        </div>
        <section>
          <div className="shelter">
            <div className="columns">
              <div className="col-7">
                <QuestionCard
                  question={question}
                  postAnswerRequestAction={postAnswerRequestAction}
                  id={id}
                />
                <div className="answer-count">
                  <h1>Answers</h1>
                </div>
                <AnswerCard answers={answers}/>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  question: state.singleQuestion.question,
  answers: state.singleQuestion.answers
});

export default connect(mapStateToProps, { singleQuestionAction, postAnswerRequestAction })(AnswerPage);
