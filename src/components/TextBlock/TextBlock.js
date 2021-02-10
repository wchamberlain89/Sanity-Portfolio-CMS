import React from 'react'
import PropTypes from 'prop-types'

const TextBlock = ({ body }) => {
    return (
        <div className='text-block-container py-20'>
            { body && <p className='text-block-body text-4xl text-center mb-0'>{body}</p> } 
        </div>
    )
}

TextBlock.propTypes = {
    body: PropTypes.string
}

export default TextBlock