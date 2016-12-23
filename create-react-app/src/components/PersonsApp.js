import React, {Component, PropTypes} from 'react';
import PersonsList from './PersonsList';
import SearchBar from './SearchBar';

class PersonsApp extends Component {

    constructor(props) {
        super(props);
        this.handleFilter = this.handleFilter.bind(this);
    }

    state = {
        filterText: ''
    }

    handleFilter(filterText) {
        this.setState({filterText});
    }

    render(){
        return (
            <div className="persons-app">
                <h1>Persons App</h1>
                <SearchBar filterText={this.state.filterText} 
                    onUserInput={this.handleFilter} />
                <PersonsList persons={this.props.persons}/>
            </div>
        )
    }
}

export default PersonsApp;