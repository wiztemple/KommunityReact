import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { questionsAction } from '../../../actions/questionsAction';
import HomeSkeleton from '../../loaders/HomeSkeleton.jsx';
import manImg from '../../../../public/images/man.png';

class Card extends Component {
  componentDidMount() {
    this.props.questionsAction();
  }

  render() {
    const {
      questions: {
        questions, fetching,
      }
    } = this.props;
    if (fetching) {
      return null;
    }
    return (
      <div className="epic-shelter">
        {fetching ? (<HomeSkeleton />) : (
          questions && questions.length > 0 && questions.map(question => (
            <div className="card p-1" key={question.id}>
              <div className="card-question">
                <a className="card-question__title" href="answer.html">
                  {question.title}</a>
                <div className="card-hide">
                  <i className="icon ion-ios-keypad" />
                  <div className="card-drop">
                    <a className="editBtn">
                      <i className="fa fa-pencil" /> Edit Question
                    </a>
                    <a className="deleteBtn"><
                      i className="fa fa-times" /> Delete Question
                    </a>
                  </div>
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
                <p>
                  {question.question_body}
                </p>
              </div>
              <div className="card-reaction justify-content-space-between">
                <div className="card-answer ml-2">
                  <div className="card-btn">
                    <span>63 Answers</span> <i className="fa fa-pencil" />
                  </div>
                </div>

              </div>
            </div >
          ))
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.questions,
});

Card.propTypes = {
  questionsAction: PropTypes.func.isRequired,
  dispatch: PropTypes.func,
  questions: PropTypes.object,
  key: PropTypes.number,
  fetching: PropTypes.bool
};

export default connect(mapStateToProps, { questionsAction })(Card);
