import React from 'react'

const Card = ({ title }) => {
    return (
        <div class='card__container bg-gray-400'>
            <p class='card__title text-5xl'>{title}</p>
        </div>
    )
}

export default Card