// boiler plate: create an initial, then export a function with a state an action
// followed by a switch statement to choose the action

// import action type
import {FETCH_POSTS, CREATE_POST} from '../actions/index';



const INITIAL_STATE = {
  // initial all to be an array to hold all the posts and post
  // reads a single post
  all: [],
  post: null
};

export default function(state= INITIAL_STATE, action ){
  switch(action.type) {
    // return the app state
    // data is available in action.payload.data
    // reducer needs to return a new state
    // ...state returns a new state and concats to all:action.payload.data
    case FETCH_POSTS:
      return { ...state, all: action.payload.data};
    case CREATE_POST:
      return {...state, post: action.payload.data};
    default:
      return state;
  }
}
