import React, {Component, PropTypes} from 'react';

const getInput = (event) => event.target.value;

const SearchBar = ({ filterText, onUserInput }) => {
    return (<input 
        type="search" 
        placeholder="Search" 
        value={filterText}
        onChange={event => onUserInput(getInput(event))}
        />);
};

SearchBar.propTypes = {
    onUserInput: PropTypes.func.isRequired,
    filterText: PropTypes.string.isRequired
};

export default SearchBar;