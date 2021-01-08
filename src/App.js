import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from 'redux';
import reducers  from "./reducers";
import sagas  from "./sagas";
const sagaMiddleware = createSagaMiddleware();
const action = (type) => store.dispatch({ type });
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);// after createStore
function App() {
  return (
    <div className="App">
      <Counter value={store.getState()} increase={()=> action('INCREASE')}></Counter>
    </div>
  );
}

export default App;
