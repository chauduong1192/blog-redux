import { combineReducers } from 'redux';
import posts from './posts';

const todoApp = combineReducers({
    posts,
  })
  
export default todoApp;