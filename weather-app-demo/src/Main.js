import React, { Component } from 'react';
import  { Link } from 'react-router';
import logo from './logo.svg';
import './Main.css';
import AddPlace from './addPlaceContainer';

class Main extends Component {
  constructor(props){
    super(props)
  }
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <nav>
          <Link to="/">Places</Link>{' '}
          <Link to="/about">About</Link>
        </nav>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <AddPlace />
          {React.cloneElement(this.props.children, this.props)}
          <div style={{textAlign: "justify"}}>
          {this.props.weather.isLoading &&
          <span>Loading...</span>
          }
          {this.props.weather.error &&
          <span>{this.props.weather.error}</span>
          }
          <pre>
          {!(this.props.weather.isLoading || this.props.weather.error) && JSON.stringify(this.props.weather, null, " ")}
          </pre>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
