import React from 'react';
import Post from './Post';



  class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPostId: [],
        }
    }

    render() {
      return (
        this.props.posts.map(post => <Post key={post.id} post={post} />)
      );
    };
  };




export default PostList;