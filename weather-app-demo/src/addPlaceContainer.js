// eslint-disable-next-line
import React from 'react';
import { connect } from 'react-redux';
import AddPlace from './addPlace';
import { addPlace } from './actions'

// const mapStateToProps = (state, ownProps) => {
//     console.log(state, ownProps)
//     return {}
// }

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(dispatch, ownProps);
    return {
        onSubmitPlace(e) {
            e.preventDefault();
            const form = e.nativeEvent.target;
            const place = form.elements[0].value;
            form.reset();
            dispatch(addPlace(place));
        }
    }
}


export default connect(undefined, mapDispatchToProps)(AddPlace);