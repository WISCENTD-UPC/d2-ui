import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './Store';

import App from './App';
import registerServiceWorker from './registerServiceWorker';



const render = () => {
    
    ReactDOM.render(<App appState={store.getState()}/>, document.getElementById('root'));
    registerServiceWorker();

}

render();
store.subscribe(render);