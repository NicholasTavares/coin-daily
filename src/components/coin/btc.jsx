import React, { useEffect } from 'react'
import axios from 'axios'

const BTC = () => {

    async function coin() {
        await axios.get('https://www.mercadobitcoin.net/api/BTC/ticker/').then(res => console.log(res))
    }

    useEffect(() => coin())

    return (
        <div className='container-top__coin container-top__coin__1'>

            <div className="container-top__head-background">
            </div>

            <div className="container-top__price-container">
                <h1 className='container-top__price-container__price'>R$ 339,788.75</h1>

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
                    <span className="container-top__price-title">R$ 339,788.75</span>
                </div>
            </div>

        </div>
    )
}

export default BTC
