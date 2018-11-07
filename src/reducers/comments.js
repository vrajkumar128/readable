// Comments reducer
const comments = (state = {}, action) => {
  const commentsReducer = {
    RECEIVE_COMMENTS: {
      ...state,
      ...action.comments
    },

    default: state
  };

  return commentsReducer[action.type] 
    ? commentsReducer[action.type]
    : commentsReducer['default'];
};

export default comments;