// Map strings to constants (better typo detection)
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

// Create a RECEIVE_CATEGORIES action
export const receiveCategories = (categories) => ({
  type: RECEIVE_CATEGORIES,
  categories
});