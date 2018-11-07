// Posts reducer
const posts = (state = {}, action) => {
  const postsReducer = {
    RECEIVE_POSTS: {
      ...state,
      ...action.posts
    },

    default: state
  };

  return postsReducer[action.type] 
    ? postsReducer[action.type]
    : postsReducer['default'];
};

export default posts;