import React from 'react'
import "./Location.css"

const Location = ({location}) => {
    return (
        <article className='Location_card'>
            <h1>{location?.name}</h1>
            <ul className='Location_card_items2'>
                <li><span>Type </span>{location?.type}</li>
                <li>{location?.dimension}</li>
                <li><span>Population </span>{location?.residents.length}</li>
            </ul>

        </article>
    )
}

export default Location