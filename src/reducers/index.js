// must combine all reducers to a single combinedReducers page
import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
// used to handle the form in posts_new.js
import {reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
  // passes the state to all containers as props
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
