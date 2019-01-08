import {
  deleteQuestionActionRequest,
  deleteQuestionActionSuccess,
  deleteQuestionActionFailure
} from '../../actions/deleteAction';

import {
  DELETE_QUESTION_REQUEST,
  DELETE_QUESTION_SUCCESS,
  DELETE_QUESTION_FAILURE
} from '../../actionTypes/deleteActionType';

const id = 1;

describe('Delete question Action', () => {
  it('should return the correct action', () => {
    expect(deleteQuestionActionRequest(id)).toEqual({
      type: DELETE_QUESTION_REQUEST,
      payload: id
    });
  });
});
describe('Delete question Success', () => {
  it('should return the correct action', () => {
    expect(deleteQuestionActionSuccess({ question: 'question' })).toEqual({
      type: DELETE_QUESTION_SUCCESS,
      payload: {
        question: 'question'
      }
    });
  });
});
describe('Register Action Failure', () => {
  it('should return the correct action', () => {
    expect(deleteQuestionActionFailure({ error: 'error' })).toEqual({
      type: DELETE_QUESTION_FAILURE,
      payload: {
        error: 'error'
      }
    });
  });
});
