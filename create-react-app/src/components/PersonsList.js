import React, {Component, PropTypes} from 'react';
import './PersonsList.css';

const PersonsList  = ({persons}) => {
        return (
            <ul>{persons.length && persons.map(person => {
                return (
                    <li key={person.id}>
                        <div className="person-data">
                            <h2>{person.Name}</h2>
                            <img src={person.Avatar} role="presentation" />
                        </div>
                    </li>
                    )
                })}
            </ul>
        );
}

PersonsList.propTypes = {
    persons: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            Name: PropTypes.string.isRequired,
            Avatar: PropTypes.string.isRequired
        })
    ).isRequired
}


export default PersonsList;