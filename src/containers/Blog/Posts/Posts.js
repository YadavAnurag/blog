import React from 'react';

import Post from '../../../components/Post/Post';
import axios from '../../../axios';
import './Posts.css';


class Posts extends React.Component{
  state = {
    posts: [],
    selectedPostId: null,
    error: false
  }

  componentDidMount(){
    axios.get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => ({...post, author: 'Anu'}));

        this.setState({posts: updatedPosts});
      })
      .catch(error => this.setState({error: true}));
  }

  postSelectedHandler = (id) => {
    this.props.history.push({pathname: '/' + id});
  }

  render(){
    let posts = <p style={{textAlign: 'center'}}>Something went wrong...!</p>;
    if(!this.state.error){
      posts = this.state.posts
        .map(post => (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
        )
      );
    }

    return (
      <section className="Posts">
        {posts}
      </section>
    );
  }
}

export default Posts;
