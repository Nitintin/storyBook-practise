import React from 'react'
import './input.css'
import PropTypes from 'prop-types'

const Input = ({ size = 'small', borderColor = "black", ...rest }) => {
    return (
        <input className={`input ${size} ${borderColor}`} {...rest} />
    )
}

Input.propTypes = {
    size: PropTypes.oneOf(["small", "medium", "large"]).isRequired,
    borderColor: PropTypes.oneOf(["red", "green", "blue"])
}
export default Input
