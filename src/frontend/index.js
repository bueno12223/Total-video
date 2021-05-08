import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from "./reducers";
import App from "./app";

const store = createStore(initialState , reducer);
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
        
   
        
    , 
    document.getElementById('app'));