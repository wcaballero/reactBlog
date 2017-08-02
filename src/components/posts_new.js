import React, {Component, PropTypes} from 'react';
// handles form data
import {reduxForm} from 'redux-form';
// action creator method to post data to server
import {createPost} from '../actions/index';
import {Link} from 'react-router';

//fyi: react router uses push to add a navigate to a different url


// form validation; params values is form values
// need to make sure redux form knows about function
// redux form returns object with the fields: ['title', 'categories', 'content']
function validate(values) {
  // object holds key (title, ...) and stores a error statement
  // checks for
  const error = {};
  // check if titles value is defined
  if (!values.title) {
    error.title = 'Enter a username';
  }
  if (!values.categories) {
    error.categories   = 'Enter a Category';
  }
  if (!values.content) {
    error.content   = 'Enter content';
  }
  // if object has a key that matches one of our field names and has a true value attatched
  // redux form assume the form is NOT valid and adds properties to the fields ['title', 'categories', ..]
  return error;
}


// need an action creato to create a post
class PostsNew extends Component {
  // context is like props, we pass information from parent comp to child
  // difference is context doesn't have to be passed form parent to child
  // child can just access the parents info with context (warning do not abuse)
  // gives access to property: this.context.router
  static contextTypes = {
    router: PropTypes.object,
  };


  // action creator to handle submission of post
  // after a successful submit we want to go back to index use .then
  onSubmit(props) {
    // sending data to backend server
    this.props.createPost(props)
    .then(() => {
      // we can use this.context.router.method because we call it with contextTypes
      this.context.router.push('/');
    });
  }

  render() {
    // helper properties in object fields given to us by reduc form containing
    // the fields we gave it to keep an eye out for
    // handleSubmit function gven to us by redux form when user submits form
    const {fields: {title, categories, content }, handleSubmit} = this.props;

    return (
      // use push to navigate to a new url
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New Post</h3>

        {/* key.invalid just says if the it is valid or valid form (true/false)*/}
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : "" }`}>
          <label>Title</label>
          {/* pass property from redux form to let our form know of the fields that
          need to be submited using {...title}: destructs object to pass all properties of title to input */}
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            {title.touched ? title.error : "" }
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : "" }`}>
          <label>Category</label>
          <input type="text" className="form-control" {...categories}/>
          <div className="text-help">
            {categories.touched ? categories.error : ""}
          </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : "" }`}>
          <label>Content</label>
          <textarea type="text" className="form-control" {...content}/>
          <div className="text-help">
            {content.touched ? content.error : ""}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger" style={{marginLeft: "5px"}}>Cancel</Link>
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
  //lets redux form know we have a function named 'validate'
  validate
}, null, {createPost})(PostsNew);
