import React from 'react'

const BackgroundStatus = ({ calcStatus }) => {

    return (
        <div className={`container-top__background-status 
        ${calcStatus && (calcStatus.high - calcStatus.low) > 0 ? 'background-status-up' : 'background-status-down'}`}>
        </div>
    )
}

export default BackgroundStatus