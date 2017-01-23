import React, { Component } from 'react';
import  { Link } from 'react-router';
import logo from './logo.svg';
import './Main.css';

class Main extends Component {
  constructor(props){
    super(props)
  }
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <nav>
          <Link to="/">Places</Link>
          <Link to="/about">About</Link>
        </nav>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          {React.cloneElement(this.props.children, this.props)}
          <div style={{textAlign: "justify"}}>
          <pre>
          {JSON.stringify(this.props.weather, null, " ")}
          </pre>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
