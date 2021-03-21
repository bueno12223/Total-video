import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from "./reducers";
import App from "./app";

let initialState = {
    'user': {email: null, password: null, userId: null},
    'myList':[],
    'popular': [],
    'kids': [],
    'rated': [],
    'comedy': [],
    'data': []
}

const store = createStore(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
        
   
        
    , 
    document.getElementById('app'));