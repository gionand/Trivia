import {SAVE_DATA} from '../types';

export const saveDataAction = (data) => {
    return {
        type: SAVE_DATA,
        payload: data
    }
}