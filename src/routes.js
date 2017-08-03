import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

export default (
  // Root path and as children are the other pages
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex}/>
    <Route path="/posts/new" component={PostsNew} />
    {/* use :id to add a param based on the post id */}
    {/* access with this.props.params.id // done by react-router for us */}
    <Route path="/posts/:id" component={PostsShow} />
  </Route>
);
