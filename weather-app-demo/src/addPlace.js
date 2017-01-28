import React from 'react';

// { onSubmitPlace }
export default ({ onSubmitPlace }) => {
    console.log(onSubmitPlace);
    return (
        <form onSubmit={onSubmitPlace}>
            <input type="text" name="place" placeholder="Add place"/>
            <button type="submit" hidden />
        </form>
    )
}