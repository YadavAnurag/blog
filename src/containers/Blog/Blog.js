import React, { Component } from 'react';

import { Route, NavLink, withRouter, Switch, Redirect } from 'react-router-dom';
import asyncComponent from '../../hoc/asyncComponent';
import Posts from './Posts/Posts';
import './Blog.css';

const AsyncNewPost = asyncComponent(() => {
  return import('./NewPost/NewPost');
});


class Blog extends Component {
  render () {

    return (
      <div>
        <header className='Blogs'>
          <nav>
            <ul>
              <li>
                <NavLink
                  to='/posts' exact activeClassName='active'
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
          <Route path='/new-post' component={AsyncNewPost} />
          <Route path='/posts' component={Posts} />
          <Redirect from='/' to='/posts' />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Blog);
