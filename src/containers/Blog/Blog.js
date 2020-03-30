import React, { Component } from 'react';

import { Route, NavLink, withRouter, Switch } from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
import './Blog.css';



class Blog extends Component {
  render () {

    return (
      <div>
        <header className='Blogs'>
          <nav>
            <ul>
              <li>
                <NavLink
                  to='/' exact activeClassName='active'
                  activeStyle={{color: '#fa923f', textDecoration: 'underline'}}
                >Posts</NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: '/new-post',
                    hash: '#submit',
                    search: '?quick-submit=true'
                  }}
                >New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        {/* <Route path='/' exact render={() => <h1>Home</h1>} />
        <Route path='/new-post' exact render={() => <h1>New Post</h1>} /> */}
        <Switch>
          <Route path='/' exact component={Posts} />
          <Route path='/new-post' component={NewPost} />
          <Route path='/:id' exact component={FullPost} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Blog);
