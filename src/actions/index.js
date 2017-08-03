// using axios and redux promis to fetch data from api
import axios from 'axios';
// action types
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api/posts';
const API_KEY = '?key=williamcaballero';

// action creator to fetch posts
export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

//action creator to fetch a single post
export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/${id}${API_KEY}`);
    return {
      type: FETCH_POST,
      payload: request
    };
}

// action creator to creat a post
// takes object that contains title, categories, and content as props
export function createPost(props) {
  // 2nd arg is what is passed to the server
  const request = axios.post(`${ROOT_URL}${API_KEY}`, props);
  return {
    type: CREATE_POST,
    payload: request
  };
}

//action creator to delete a post
// don't need to react to delete so do not need a reducer
// however it is good practice to add a reducer
export function deletePost(id) {
  const request = axios.delete(`${ROOT_URL}/${id}${API_KEY}`);
  return {
    type: DELETE_POST,
    payload: request
  };
}
