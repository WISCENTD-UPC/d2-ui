import * as actionTypes from './ActionTypes';
import { expect } from 'chai';

const initialState = {
    tabIndex: 0,
}

export function chartReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SHOW_DATA_TAB:    
            return 0;
        case actionTypes.SHOW_AXES_TAB: 
            return 1;
        case actionTypes.SHOW_STYLES_TAB: 
            return 2;
        default:
            return state;
    };
}

expect(
    chartReducer(0, {type: actionTypes.SHOW_DATA_TAB})
).equal(0);

expect(
    chartReducer(0, {type: actionTypes.SHOW_AXES_TAB})
).equal(1);

expect(
    chartReducer(0, {type: actionTypes.SHOW_STYLES_TAB})
).equal(2);

export default chartReducer;