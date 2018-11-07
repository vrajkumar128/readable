import React from 'react';

const Post = React.memo(({ post }) => (
  <div>
    {post.title}
  </div>
));

export default Post;