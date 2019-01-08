import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from '../components/containers/Navbar/Navbar.jsx';
import AnswerCard from '../components/containers/Cards/AnswerCard.jsx';
import QuestionCard from '../components/containers/Cards/QuestionCard.jsx';
import { isLoggedIn } from '../utils/localStorage';
import { singleQuestionAction } from '../actions/singleQuestionAction';
import { postAnswerRequestAction } from '../actions/postAnswerAction';
import { deleteQuestionActionRequest } from '../actions/deleteAction';


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

  handleDelete = () => {
    const {
      match: {
        params: {
          id,
        }
      },
      deleteQuestion
    } = this.props;

    deleteQuestion(id);
  }

  render() {
    const {
      question,
      answers,
      postAnswerRequestAction,
      deleted,
      match: {
        params: {
          id
        }
      },
    } = this.props;
    if (!question) {
      return <div>Loading</div>;
    }

    if (deleted) {
      return <Redirect to="/" />;
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
                  deleteQuestion={this.handleDelete}
                  id={id}
                />
                <div className="answer-count">
                  <h1>Answers</h1>
                </div>
                <AnswerCard answers={answers} />
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
  answers: state.singleQuestion.answers,
  deleted: state.deleteQuestion.deleted,
});

const actions = {
  singleQuestionAction,
  postAnswerRequestAction,
  deleteQuestion: deleteQuestionActionRequest,
};

export default connect(mapStateToProps, actions)(AnswerPage);
