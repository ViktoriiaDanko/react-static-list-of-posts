import React from 'react';
import User from './User';

const Comment = ({comment}) => {
  const {
    body, user,
  } = comment;
  
  return (
    <div className="comment">
      <User user={user} />
      <p>{body}</p>
    </div>
  );
};

export default Comment;