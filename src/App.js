import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is my biography</p>
        <Person name="Max" age="21" />
        <Person name="Manu" age="24" >My Hobbies: Racing</Person>
      </div>
    );
  }
}

export default App;
