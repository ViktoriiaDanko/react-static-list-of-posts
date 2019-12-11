import React from 'react';
import User from '../сomponents/User';
import CommentsList from '../сomponents/CommentsList';

const Post = ({post}) => {
  const {
    title, body, user, comments,
  } = post ;

  return (
    <div className="post">
      <h1>{title}</h1>
      <p>{body}</p>
      <User user={user} />
      <CommentsList comments={comments} />
    </div>
  );
};

export default Post;