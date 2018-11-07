import { _getPosts, _getCategories } from '../utils/api';
import { receiveCategories } from './categories';
import { receivePosts } from './posts';

// Retrieve initial data from database
export const handleInitialData = () => (
  async (dispatch) => {
    const [categories, posts] = await Promise.all([
      _getCategories(),
      _getPosts()
    ]);

    dispatch(receiveCategories(categories));
    dispatch(receivePosts(posts));
  }
);