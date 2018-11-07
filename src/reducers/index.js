import { combineReducers } from 'redux';
import categories from './categories';
import posts from './posts';

// Create root reducer
const reducer = combineReducers({
  categories,
  posts
});

export default reducer;
