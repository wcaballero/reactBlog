import React, {Component} from 'react';
// import redux to manage data flow (network request)
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {

  // lifecycle method that runs before this is mounted to dom
  componentWillMount(){
    this.props.fetchPosts();
  }

  // read the data collected from the reducers stored in object post
  renderPosts(){
    // map over the array of objects to get a single post
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <span className="pull-xs-right">{post.categories}</span>
          <h6>{post.title}</h6>
        </li>
      );
    });
  }

  render() {
    return(
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">Add Post</Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}
// long hand for binding action creators props
// import { bindActionCreator } from 'redux'
/*functino mapDispatchToProps(props) {
  return bindActionCreator({ fetchPosts }, dispatch);
}*/


// use mapStateToProps to render the get request information to this container
function mapStateToProps(state) {
  // create a object (posts:) to hold all the data collected from our reducer
  return {posts: state.posts.all};
}


// binds the action creator fetchPosts to this container
// and is available as this.props.fetchPosts
// because of redux promise this network request is interpreted
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
