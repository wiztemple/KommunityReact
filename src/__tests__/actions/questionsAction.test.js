import {
  questionsAction,
  questionsActionSuccess,
  questionsActionFailure
} from '../../actions/questionsAction';

import {
  QUESTIONS_REQUEST,
  QUESTIONS_SUCCESS,
  QUESTIONS_FAILURE
} from '../../actionTypes/questionsActionType';

describe('get all question action', () => {
  it('should return the predefined action', () => {
    expect(questionsAction()).toEqual({
      type: QUESTIONS_REQUEST,
    });
  });
});
describe('Fetch questions Success action', () => {
  it('should return the correct action type and payload', () => {
    expect(questionsActionSuccess(
      { question: 'just hope you are calm?' }
    )).toEqual({
      type: QUESTIONS_SUCCESS,
      questions: {
        question: 'just hope you are calm?'
      },
    });
  });
});
describe('Fetch questions failure action', () => {
  it('should return the correct action type and payload', () => {
    expect(questionsActionFailure({ error: 'Bad response' })).toEqual({
      type: QUESTIONS_FAILURE,
      error: {
        error: 'Bad response'
      },
    });
  });
});
