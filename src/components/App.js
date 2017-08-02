import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        {/* Allows for the children to be display below parent ("/")*/}
        {/* Good place to add a header and footer that will load on all child paths */}
        {this.props.children}
      </div>
    );
  }
}

export default App;
