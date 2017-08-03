import React,{ Component, PropTypes } from 'react';
import { fetchPost, deletePost } from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class PostsShow extends Component {

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  // similar to props but defined in child context
  static contextTypes = {
    router: PropTypes.object
  };

  // method to delete post
  handleDelete() {
    // call our delete action
    this.props.deletePost(this.props.params.id)
    .then( () => {
      this.context.router.push('/');
    });
  }

  render() {
    const { post } = this.props;
    // waits for network request to come back before loading data twice or more times
    // avoids null request
    if(!post){
      return <div>Loading ...</div>;
    }

    return (
      <div>

        <div className="text-xs-right">
          <Link to="/" className="pull-xs-left">back to index</Link>
          <button className="btn btn-danger" onClick={this.handleDelete.bind(this)}>Delete Post</button>
        </div>
        <div className="list-group">
          <h2>{post.title}</h2>
          <h6 style={{marginTop: "10px"}}>Categories: </h6>
          <p className="list-group-item">{post.categories}</p>
          <h6 style={{marginTop: "10px"}}>Content: </h6>
          <p className="list-group-item">{post.content}</p>
        </div>
      </div>
    );
  }
}

//use mapStateToProps to fetch the state of the post and read data from the promise
function mapStateToProps(state) {
  return {
    //currently selected post
    post: state.posts.post
  };
}
export default connect(mapStateToProps, {fetchPost , deletePost})(PostsShow);
