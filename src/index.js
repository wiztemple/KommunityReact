import React from 'react';
import 'babel-polyfill';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';
import rootSaga from './saga';
import AppRouter from './routes/AppRouter';
import history from './history';
import './styles/App.css'

const sagaMiddleware = createSagaMiddleware();
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);

sagaMiddleware.run(rootSaga);

const App = () => (
  <Router history={history}>
    <AppRouter />
  </Router>
);

const root = document.getElementById('root');

render(<Provider store={store}><App /></Provider>, root);


