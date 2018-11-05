import { combineReducers } from 'redux';
import posts from './posts';

// Create root reducer
const reducer = combineReducers({
  posts
});

export default reducer;
