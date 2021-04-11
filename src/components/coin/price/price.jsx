import React from 'react'

const Price = ({ price, coin_name }) => {

    return (
        <div className="container-top__price-container">
            <h1 className="container-top__price-container__principal-title">{coin_name}</h1>
            <h2 className='container-top__price-container__price'>{price ? `R$ ${parseFloat(price.buy).toFixed(3)}` : 'Loading'}</h2>

            <div className='container-top__price-container__percentage-container'>
                <span className='container-top__price-container__percentage-time'>
                    24h %
                </span>
                <span className="container-top__price-container__percentage-price">
                    {price && ((price.high - price.low) * 100) / price.high > 0 ?
                        <span style={{ color: '#16C73A' }}>&uarr; {(((price.high - price.low) * 100) / price.high).toFixed(2)}%</span> :
                        <span style={{ color: '#ea3943' }}>&darr;{(((price.high - price.low) * 100) / price.high).toFixed(2)}%</span>

                    }
                </span>

            </div>

        </div>
    )
}

export default Price