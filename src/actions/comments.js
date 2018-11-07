// Map strings to constants (better typo detection)
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

// Create a RECEIVE_COMMENTS action
export const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments
});