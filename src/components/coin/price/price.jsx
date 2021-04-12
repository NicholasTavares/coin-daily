import React from 'react'

const Price = ({ price, coin_name }) => {

    return (
        <div className="container-top__price-container">
            <h1 className="container-top__price-container__principal-title">{coin_name}</h1>
            <h2 className='container-top__price-container__price'>{price ? `R$ ${parseFloat(price.buy).toLocaleString('pt-BR')}` : 'Loading'}</h2>

            <div className='container-top__price-container__percentage-container'>
                <span className='container-top__price-container__percentage-time'>
                    MAX
                </span>
                <span className="container-top__price-container__percentage-price">
                    {price ? <span style={{ color: 'white' }}>R$ {(price.high * 1).toLocaleString('pt-BR', { maximumFractionDigits: 2 })}</span> : 'Loading'}
                </span>
            </div>

            <div className='container-top__price-container__percentage-container'>
                <span className='container-top__price-container__percentage-time'>
                    MIN
                </span>
                <span className="container-top__price-container__percentage-price">
                    {price ? <span style={{ color: 'white' }}>R$ {(price.low * 1).toLocaleString('pt-BR')}</span> : 'Loading'}
                </span>
            </div>

        </div>
    )
}

export default Price