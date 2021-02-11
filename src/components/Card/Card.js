import React from 'react'

const Card = ({ children }) => {
    return (
        <div class='card__container bg-secondary border-2 border-primary w-full'>
            { children }
        </div>
    )
}

export default Card