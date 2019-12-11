const getUserThatCreatedPost = (users, post) => {
  return (
    users.filter (user => user.id === post.userId)
  );
};

export default getUserThatCreatedPost;