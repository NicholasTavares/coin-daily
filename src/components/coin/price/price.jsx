import React from 'react'

const Price = ({ price }) => {

    return (
        <div className="container-top__price-container">
            <h1 className='container-top__price-container__price'>{price ? `R$ ${parseFloat(price.buy).toFixed(3)}` : 'Loading'}</h1>

            <div className='container-top__price-container__percentage-container'>
                <span className='container-top__price-container__percentage-time'>
                    24h %
                        </span>
                <span className="container-top__price-container__percentage-price">
                    &darr; 9.11%
                        </span>

            </div>

            <div className='container-top__price-container__percentage-container'>
                <span className='container-top__price-container__percentage-time'>
                    7d %
                        </span>
                <span className="container-top__price-container__percentage-price">
                    &uarr; 8.09%
                        </span>
            </div>

        </div>
    )
}

export default Price