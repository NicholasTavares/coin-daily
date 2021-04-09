import React, { useState, useEffect } from 'react'
import axios from 'axios'

const BTC = ({ priceBTC }) => {

    return (
        <div className='container-top__coin container-top__coin__1'>

            <div className="container-top__head-background">
            </div>

            <div className="container-top__price-container">
                <h1 className='container-top__price-container__price'>R$ {priceBTC ? parseFloat(priceBTC.buy).toFixed(3) : 'Loading'}</h1>

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

            <div className="container-top__head">
                <div className="container-top__preview">
                    <h1 className="container-top__top-level">1</h1>
                    <h2 className="container-top__title">Bitcoin</h2>
                    <span className="container-top__price-title">R$ {priceBTC ? parseFloat(priceBTC.buy).toFixed(3) : 'Loading'}</span>
                </div>
            </div>

        </div>
    )
}

export default BTC
