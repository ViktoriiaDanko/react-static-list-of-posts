import React from 'react';
import Comment from '../components/Comment';

const CommentsList = (comments) => {
  return (
    comments.map(comment => <Comment key={comment.id} comment={comment} />)
 );
};

export default CommentsList;