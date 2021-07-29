import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware, compose} from 'redux'
import MyReducers from './reducers/index'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
const store = createStore(
  MyReducers,
  compose( applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)
ReactDOM.render(
  <Provider store = {store} >
     <App />
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
