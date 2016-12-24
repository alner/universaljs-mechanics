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

    static PropTypes = {
        persons: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                Name: PropTypes.string.isRequired,
                Avatar: PropTypes.string.isRequired
            })
        ).isRequired
    }

    handleFilter(filterText) {
        this.setState({filterText});
    }

    render(){
        const filteredPersons = this.props.persons.filter(person => {
            return person.Name.indexOf(this.state.filterText) !== -1;
        });
        return (
            <div className="persons-app">
                <h1>Persons App</h1>
                <SearchBar filterText={this.state.filterText} 
                    onUserInput={this.handleFilter} />
                <PersonsList persons={filteredPersons}/>
            </div>
        )
    }
}

export default PersonsApp;