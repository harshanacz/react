import React from 'react';
import PropTypes from 'prop-types';

function StudentCard (props){
    return (
        <div>
            <h2>Student Card</h2>
            <p>Student Name: {props.name}</p>
            <p>Student Age: {props.age}</p>
            <p>Student Address: {props.address}</p>
        </div>
    );
}

StudentCard.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    address: PropTypes.string
}

StudentCard.defaultProps = {
    name: "####",
    age: 0,
    address: "123 Main St"
}

export default StudentCard;