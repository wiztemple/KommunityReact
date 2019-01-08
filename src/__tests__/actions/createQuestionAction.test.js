import {
  createQuestionRequestAction,
  createQuestionActionSuccess,
  createQuestionActionFailure
} from '../../actions/createQuestionAction.js';

import {
  CREATE_QUESTION_REQUEST,
  CREATE_QUESTION_SUCCESS,
  CREATE_QUESTION_FAILURE
} from '../../actionTypes/createQuestionActionType.js';

const question = {
  title: 'Guantanamera',
  questionBody: 'dont get it twisted',
  tag: 'dollar'
};

describe('Create question Action', () => {
  it('should return the correct action', () => {
    expect(createQuestionRequestAction(question)).toEqual({
      type: CREATE_QUESTION_REQUEST,
      payload: question
    });
  });
});
describe('Create Question Action Success', () => {
  it('should return the correct action', () => {
    expect(createQuestionActionSuccess({ message: 'success' })).toEqual({
      type: CREATE_QUESTION_SUCCESS,
      success: 'success'
    });
  });
});
describe('Create Question Action Failure', () => {
  it('should return the correct action', () => {
    expect(createQuestionActionFailure({ message: 'Bad request' })).toEqual({
      type: CREATE_QUESTION_FAILURE,
      error: 'Bad request'
    });
  });
});
