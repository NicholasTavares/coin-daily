import React from 'react'

const Preview = ({ coin_name, price, logo }) => {

    return (
        <div className="container-top__head">
            <div className="container-top__preview">
                <h1 className="container-top__logo">{logo}</h1>
                <h2 className="container-top__title">{coin_name}</h2>
                <span className="container-top__price-title">R$ {price ? parseFloat(price.buy).toFixed(3) : 'Loading'}</span>
            </div>
        </div>
    )
}

export default Preview