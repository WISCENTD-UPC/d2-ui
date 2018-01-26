import { createStore } from 'redux';
import { chartReducer } from './Reducer';

const reducer = chartReducer; 
export const store = createStore(reducer);


export default createStore(reducer);