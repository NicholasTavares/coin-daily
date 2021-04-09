import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ETH = () => {


    return (
        <div className='container-top__coin container-top__coin__2'>

            <div className="container-top__head-background">
            </div>

            <div className="container-top__price-container">
                <h1 className='container-top__price-container__price'>R$ {priceETH ? parseFloat(priceETH.buy).toFixed(3) : 'Loading'}</h1>

                <div className='container-top__price-container__percentage-container'>
                    <span className='container-top__price-container__percentage-time'>
                        24h %
                        </span>
                    <span className="container-top__price-container__percentage-price">
                        &darr; 3.83%
                        </span>

                </div>

                <div className='container-top__price-container__percentage-container'>
                    <span className='container-top__price-container__percentage-time'>
                        7d %
                        </span>
                    <span className="container-top__price-container__percentage-price">
                        &uarr; 14.45%
                        </span>
                </div>


                <div className="container-top__price-container__history">
                    Dados
                    </div>

            </div>

            <div className="container-top__head">
                <div className="container-top__preview">
                    <h1 className="container-top__top-level">2</h1>
                    <h2 className="container-top__title">Ethereum</h2>
                    <span className="container-top__price-title">R$ {priceETH ? parseFloat(priceETH.buy).toFixed(3) : 'Loading'}</span>
                </div>
            </div>

        </div>
    )
}

export default ETH