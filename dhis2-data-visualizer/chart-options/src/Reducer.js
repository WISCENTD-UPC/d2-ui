import * as actionTypes from './ActionTypes';
import { expect } from 'chai';
import  deepFreeze from 'deep-freeze';

//TODO: Default state til alle tabs
const initialState = {
    currentTab: 0,
    tabContents: [
        {
            id:0,
            name: 'Data',
        }
    ]
}

const testobj = {id: 5, name: 'test', tabToggled: true};

export function chartReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.TOGGLE_TAB:
            let newArr = 
            state.currentTab = action.id;
            return {
                ...state,
                tabContents: updateTab(state.tabContents, action)
            };
        default:
            return state;
    }
};
const updateTab = (arr, action) => {
    if (typeof arr === "undefined" || arr.length === 0){
        return [...arr, {id:action.id, name:action.name, tabToggled: true}]
    }
    if (!exist(arr, action.name)) {
        return [...arr, {id:action.id, name: action.name, tabToggled: true}]
    }
    return arr;
}

const exist = (arr, name) => {
    let retval = false;
    arr.forEach(input => {
        if (input.name === name) {
            retval = true;
        }
    })
    return retval;
}

export default chartReducer;