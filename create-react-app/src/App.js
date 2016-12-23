import React, { Component } from 'react';
import 'whatwg-fetch';
import logo from './logo.svg';
import PersonsApp from './components/PersonsApp'
import './App.css';

class App extends Component {
  state = { persons:[] }

  componentDidMount() {
    fetch('/api/persons').then((response) => {
      return response.json();
    })
    .then((data) => data.map(person => ({
      id: person.id,
      Name: person.Name,
      Avatar: person.Avatar
    })))
    .then(persons => {
      this.setState({persons});
    })
    .catch((err) => { console.log(err) });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <PersonsApp persons={this.state.persons} />
      </div>
    );
  }
}

export default App;
