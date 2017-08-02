import React, {Component} from 'react';
// handles form data
import {reduxForm} from 'redux-form';
// action creator method to post data to server
import {createPost} from '../actions/index';



// need an action creato to create a post
class PostsNew extends Component {

  // action creator to handle submission of post
  // sending data to backend server
  onSubmit(props) {
    this.props.createPost(props);
  }


  render() {
    // helper properties in object fields given to us by reduc form containing
    // the fields we gave it to keep an eye out for
    // handleSubmit function gven to us by redux form when user submits form
    const {fields: {title, categories, content }, handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New Post</h3>
        <div className="form-group">
          <label>Title</label>
          {/* pass property from redux form to let our form know of the fields that
          need to be submited using {...title}: destructs object to pass all properties of title to input */}
          <input type="text" className="form-control" {...title} />
        </div>

        <div className="form-group">
          <label>Category</label>
          <input type="text" className="form-control" {...categories}/>
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea type="text" className="form-control" {...content}/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

// connect: first arg is mapStateToProps, 2nd arg is mapDispatchToProps
// reduxForm: first arg  is object in shape of form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

// pulling state from component lvl to app lvl
export default reduxForm({
  // form name; form matches the name in the reducer index.js
  form: 'PostsNewForm',
  // tells redux form the different pieces to watch for
  fields: ['title', 'categories', 'content'],
}, null, {createPost})(PostsNew);
