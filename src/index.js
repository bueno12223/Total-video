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
    'data': [],
    'query': {
    popularity: 'sort_by=popularity.desc',
    key: 'api_key=b89fc45c2067cbd33560270639722eae',
    language: 'language=es',
    gender: 'with_genres',
    certification: 'certification_country=US&&certification=R'
    }
}

const store = createStore(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
        
   
        
    , 
    document.getElementById('app'));