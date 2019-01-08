import questionsReducer from '../../reducers/questionsReducer';
import * as types from '../../actionTypes/questionsActionType';

describe('All questions', () => {
  it('should have a default state', () => {
    expect(questionsReducer(undefined, {
      type: 'non-existent type'
    })).toEqual({
      fetching: false,
      error: null,
      questions: null
    });
  });

  it('should update questions state while loading', () => {
    expect(questionsReducer(undefined, {
      type: types.QUESTIONS_REQUEST
    })).toEqual({
      fetching: true,
      questions: null,
      error: null
    });
  });

  it('should update questions state', () => {
    expect(questionsReducer(undefined, {
      type: types.QUESTIONS_SUCCESS,
      questions: []
    })).toEqual({
      fetching: false,
      questions: [],
      error: null
    });
  });
});
