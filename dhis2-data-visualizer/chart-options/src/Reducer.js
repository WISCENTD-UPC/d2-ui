import * as actionTypes from './ActionTypes';
//import { expect } from 'chai';
//import  deepFreeze from 'deep-freeze';

const initialState = {
    currentTab: 0,
    tabContents: [ //prøvde med initialState som empty array, results in undefined (se i DataOptions)
        {
            category: '',
            //
            trendline: '',
            targetLineValue: '',
            targetLineTitle: '',
            baseLineValue: '',
            baseLineTitle: '',
            sortorder: '',
            showValues: ''
        }
    ]
}

export function chartReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.TOGGLE_TAB:
            return {...state, currentTab: action.id};
        case actionTypes.TOGGLE_SELECTFIELD:
            return {...state,tabContents: [updateTabContent(state, action)]};
        default:
            return state;
    }
};


const updateTabContent = (state, action) => {
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