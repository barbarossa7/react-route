import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Route from './route'
import commentsReducer from './reducers/comments'

const store = createStore(commentsReducer)

ReactDOM.render(
  <Provider store={store}>
     <Route />
  </Provider>,
  document.getElementById('root')
);
