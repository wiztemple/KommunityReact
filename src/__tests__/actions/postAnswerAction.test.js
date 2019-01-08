import {
  postAnswerRequestAction,
  postAnswerActionSuccess,
  postAnswerActionFailure
} from '../../actions/postAnswerAction';

import {
  POST_ANSWER_REQUEST,
  POST_ANSWER_SUCCESS,
  POST_ANSWER_FAILURE
} from '../../actionTypes/postAnswerActionType';

const answer = '';
const id = 1;

describe('Post answer Action', () => {
  it('should return the correct action', () => {
    expect(postAnswerRequestAction(answer, id)).toEqual({
      type: POST_ANSWER_REQUEST,
      payload: { answer, id }
    });
  });
});
describe('Post answer Action Success', () => {
  it('should return the correct action', () => {
    expect(postAnswerActionSuccess({ message: 'success' })).toEqual({
      type: POST_ANSWER_SUCCESS,
      payload: {
        message: 'success'
      }
    });
  });
});
describe('POST answer Action Failure', () => {
  it('should return the correct action', () => {
    expect(postAnswerActionFailure({ message: 'Bad request' })).toEqual({
      type: POST_ANSWER_FAILURE,
      error: 'Bad request'
    });
  });
});
