// Categories reducer
const categories = (state = {}, action) => {
  const categoriesReducer = {
    RECEIVE_CATEGORIES: {
      ...state,
      ...action.categories
    },

    default: state
  };

  return categoriesReducer[action.type] 
    ? categoriesReducer[action.type]
    : categoriesReducer['default'];
};

export default categories;