import React from 'react';
import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import PostList from './components/PostList';
import PostDetails from './components/PostDetails';
import CommentsList from './components/CommentsList';

function Footer() {
  return (
    <div className="footer">
      <h1>Static list of posts</h1>
      <p>
        posts:
        {posts.length}
      </p>
      <p>
        comments:
        {comments.length}
      </p>
      <p>
        Users: 
        {users.length}
      </p>
    </div>
  );
}

const App = () => {
  const postsWithUsers = PostDetails(users, posts);
  const postList = CommentsList(postsWithUsers, comments);

  return (
    <div className="App">
      <PostList posts={postList} />
      <Footer />
    </div>
  );
};
  
export default App;