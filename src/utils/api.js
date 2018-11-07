// Retrieve categories from database
export const _getCategories = async () => {
  try {
    const response = await fetch(
      'http://localhost:3001/categories',
      {
        headers: { 'Authorization': 'vrrajkum' }
      }
    );
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (err) {
    console.error(err);
    alert('There was an error retrieving categories from the database. Please try reloading the page.')
  }
}

// Retrieve posts from database
export const _getPosts = async () => {
  try {
    const response = await fetch(
      'http://localhost:3001/posts',
      {
        headers: { 'Authorization': 'vrrajkum' }
      }
    );
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (err) {
    console.error(err);
    alert('There was an error retrieving posts from the database. Please try reloading the page.');
  }
};

// Retrieve comments from database
export const _getComments = async () => {
  try {
    const response = await fetch(
      'http://localhost:3001/comments',
      {
        headers: { 'Authorization': 'vrrajkum' }
      }
    );
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (err) {
    console.error(err);
    alert('There was an error retrieving comments from the database. Please try reloading the page.');
  }
}