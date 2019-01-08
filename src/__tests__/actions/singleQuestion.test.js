import {
    singleQuestionAction,
    singleQuestionActionFailure,
    singleQuestionActionSuccess
} from '../../actions/singleQuestionAction.js';

import {
    SINGLE_QUESTION_REQUEST,
    SINGLE_QUESTION_SUCCESS,
    SINGLE_QUESTION_FAILURE
} from '../../actionTypes/singleQuestionActionType';

const id = 1;

describe('Single question Action', () => {
    it('should return the correct action', () => {
        expect(singleQuestionAction(id)).toEqual({
            type: SINGLE_QUESTION_REQUEST,
            payload: id
        });
    });
});

describe('Single question Action', () => {
    it('should return the correct action', () => {
        expect(singleQuestionActionFailure(id)).toEqual({
            type: SINGLE_QUESTION_FAILURE,
            payload: id
        });
    });
});

describe('Single question Action', () => {
    it('should return the correct action', () => {
        expect(singleQuestionActionSuccess(id)).toEqual({
            type: SINGLE_QUESTION_SUCCESS,
            payload: id
        });
    });
});
