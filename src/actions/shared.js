import { receivePosts } from './posts';

// Retrieve initial data from database
export const handleInitialData = () => (
  async (dispatch) => {
    try {
      const response = await fetch(
        'http://localhost:3001/posts',
        {
          headers: { 'Authorization': 'vrrajkum' }
        }
      );
      if (response.ok) {
        const posts = await response.json();
        dispatch(receivePosts(posts));
      }
    } catch (err) {
      console.error(err);
    }
  }
);