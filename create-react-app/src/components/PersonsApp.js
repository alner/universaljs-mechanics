import React, {Component, PropTypes} from 'react';
import PersonsList from './PersonsList';

class PersonsApp extends Component {
    render(){
        return (
            <div className="persons-app">
                <h1>Persons App</h1>
                <PersonsList persons={this.props.persons}/>
            </div>
        )
    }
}

export default PersonsApp;