import React from 'react';
import { Route } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
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
    this.props.history.push({pathname: '/posts/' + id});
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
      <div>
        <section className="Posts">
          {posts}
        </section>
        <Route path={this.props.match.url + '/:id'} exact component={FullPost} /> {/* nested route must have absolute path  */}
      </div>
    );
  }
}

export default Posts;
