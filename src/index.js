import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Counter';
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from 'redux';
import reducers from "./reducers";
import sagas from "./sagas";
const sagaMiddleware = createSagaMiddleware();
const action = (type) => store.dispatch({ type });
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);// after createStore
function render() {
  ReactDOM.render(
    <React.StrictMode>
      <Counter value={store.getState()} increase={() => action('INCREASE')}></Counter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
render();
store.subscribe(render)
