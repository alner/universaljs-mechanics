import React from 'react'

export default function({ defaultValue, onPost }) {
    return (
        <p>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" defaultValue={defaultValue} />
            <button onClick={onPost}>Save</button>
        </p>
    )
}