import React, { Component } from 'react';

import { Route, NavLink, withRouter } from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';



class Blog extends Component {
  render () {
    console.log(this.props.match.url);
    return (
      <div>
        <header className='Blogs'>
          <nav>
            <ul>
              <li><NavLink to='/' exact >Home</NavLink></li>
              <li><NavLink to={{
                pathname: '/new-post',
                hash: '#submit',
                search: '?quick-submit=true'
              }}>New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        {/* <Route path='/' exact render={() => <h1>Home</h1>} />
        <Route path='/new-post' exact render={() => <h1>New Post</h1>} /> */}
        <Route path='/' exact component={Posts} />
        <Route path='/new-post' component={NewPost} />
      </div>
    );
  }
}

export default withRouter(Blog);
