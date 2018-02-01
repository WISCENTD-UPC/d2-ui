import * as actionTypes from './ActionTypes';
//import { expect } from 'chai';
//import  deepFreeze from 'deep-freeze';

const initialState = {
    currentTab: 0,
    tabContents: []
}

export function chartReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.TOGGLE_TAB:
            state.currentTab = action.id;
            return state;
        case actionTypes.TOGGLE_SELECTFIELD:
            return {...state,tabContents: [updateContent(state, action)]};
        default:
            return state;
    }
};


const updateContent = (state, action) => {
    if (action.name === "trendline") {
        return{...state.tabContents[state.currentTab],
            trendline: action.value
        }   
    }
    if (action.name === "category") {
        return{...state.tabContents[state.currentTab],
            category: action.value
        }   
    }
    if (action.name === "targetLineValue") {
        return{...state.tabContents[state.currentTab],
            targetLineValue: action.value
        };       
    }
    if (action.name === "targetLineTitle") {
        return{...state.tabContents[state.currentTab],
            targetLineTitle: action.value
        };       
    }
    if (action.name === "baseLineValue") {
        return{...state.tabContents[state.currentTab],
            baseLineValue: action.value
        };       
    }
    if (action.name === "baseLineTitle") {
        return{...state.tabContents[state.currentTab],
            baseLineTitle: action.value
        };       
    }
    if (action.name === "sortorder") {
        return{...state.tabContents[state.currentTab],
            sortorder: action.value
        };       
    }
}


export default chartReducer;