// Map strings to constants (better typo detection)
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

// Create a RECEIVE_POSTS action
export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});