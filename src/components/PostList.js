import React from 'react';
import Post from '../components/Post';

const PostList = (props) => {
  return (
    props.posts.map(post => <Post key={post.id} post={post} />)
  );
};

export default PostList;