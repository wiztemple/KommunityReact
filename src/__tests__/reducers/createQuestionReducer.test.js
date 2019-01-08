import createQuestionReducer from '../../reducers/createQuestionReducer';
import * as types from '../../actionTypes/createQuestionActionType';


const payload = {
  title: 'blue sky by common the black dude',
  questionBody: 'blue can be seen through my window',
  tag: 'sky'
};

const initialState = {
  creating: false,
  error: '',
  success: '',
  payload: {}
};


describe('Create question reducer: ', () => {
  it('should have a default state', () => {
    expect(createQuestionReducer(undefined, {
      type: 'non-existent type'
    })).toEqual(initialState);
  });

  it('should update the reducer state', () => {
    expect(createQuestionReducer(undefined, {
      type: types.CREATE_QUESTION_REQUEST,
      payload,
    })).toEqual({
      ...initialState,
      creating: true,
      payload,
    });
  });

  it('should update the questions', () => {
    expect(createQuestionReducer(undefined, {
      type: types.CREATE_QUESTION_SUCCESS,
      success: 'questions'
    })).toEqual({
      ...initialState,
      success: 'questions'
    });
  });

  it('should add error to create question state', () => {
    expect(createQuestionReducer(undefined, {
      type: types.CREATE_QUESTION_FAILURE,
      error: 'error'
    })).toEqual({
      ...initialState,
      error: 'error',
    });
  });
});
