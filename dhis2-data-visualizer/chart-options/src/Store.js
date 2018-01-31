import { createStore } from 'redux';
import { chartReducer } from './Reducer';

const reducer = chartReducer; 
export const store = createStore(chartReducer);


export default createStore(reducer);