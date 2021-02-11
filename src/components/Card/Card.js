import React from 'react'

const Card = ({ title, subtitle, img, }) => {
    return (
        <div class='card__container bg-secondary border-4 border-primary w-full p-6'>
            <h3 class='card__title text-5xl'>{title}</h3>
            <h5 class='card__subtitle'>{subtitle}</h5>
            <p></p>
        </div>
    )
}

export default Card