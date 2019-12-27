import {combineReducers} from 'redux';
import {triviaQuestionsReducer} from './triviaQuestionsReducer';

export const reducer = combineReducers({
    triviaQuestionsReducer,
})