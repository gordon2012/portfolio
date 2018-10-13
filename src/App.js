import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  state = {
    name: 'Gordon'
  };

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <h2>My name is {this.state.name}</h2>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
