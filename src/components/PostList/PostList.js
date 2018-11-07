import React from 'react';
import { connect } from 'react-redux';
import Post from '../Post/Post';
import { Container } from 'reactstrap';
import './PostList.min.css';

// Render list of posts
const renderPosts = (posts) => (
  Object.keys(posts).map(postKey => (
    <Post key={posts[postKey].id} post={posts[postKey]} />
  ))
);

// PostList component
const PostList = React.memo(({ posts }) => (
  <Container className="postList">
    {posts
      ? renderPosts(posts)
      : <span>loading</span>}
  </Container>
));

// Grab data from Redux store as props
const mapStateToProps = ({ posts }) => ({
  posts
});

// Connect component to Redux store
export default connect(mapStateToProps)(PostList);