import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './combineReducers';
import promise from './promise';

export default function configureStore() {
  const enhancer = compose(
    applyMiddleware(thunk, promise),
  );
  
  return createStore(reducer, enhancer);
}