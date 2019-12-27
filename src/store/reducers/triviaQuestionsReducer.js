import {SAVE_DATA} from '../types';

const initialState = {
    data: [],
}

export const triviaQuestionsReducer = (state=initialState, action) => {
    switch (action.type) {
        case SAVE_DATA: {
            const newState = {...state};
            newState.data = [...action.payload];
            return newState
        }
        default:
            return state
    }
}