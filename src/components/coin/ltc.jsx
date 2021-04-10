import React, { useState, useEffect } from 'react'
import useAPI from '../../api/useAPI.js'

const LTC = () => {

    const [price, searchPrice] = useAPI()
    const [time, setTime] = useState(0)
    useEffect(() => {
        searchPrice('LTC')
        const interval = setInterval(() => {
            setTime(time + 1);
        }, 5000);

        return () => clearInterval(interval)

    }, [time])

    return (
        <div className='container-top__coin container-top__coin__3'>

            <div className="container-top__head-background">
            </div>

            <div className="container-top__price-container">
                <h1 className='container-top__price-container__price'>R$ {price ? parseFloat(price.buy).toFixed(3) : 'Loading'}</h1>

                <div className='container-top__price-container__percentage-container'>
                    <span className='container-top__price-container__percentage-time'>
                        24h %
                        </span>
                    <span className="container-top__price-container__percentage-price">
                        &darr; 1.83%
                        </span>

                </div>

                <div className='container-top__price-container__percentage-container'>
                    <span className='container-top__price-container__percentage-time'>
                        7d %
                        </span>
                    <span className="container-top__price-container__percentage-price">
                        &uarr; 42.59%
                        </span>
                </div>

            </div>

            <div className="container-top__head">
                <div className="container-top__preview">
                    <h1 className="container-top__top-level">3</h1>
                    <h2 className="container-top__title">Litecoin</h2>
                    <span className="container-top__price-title">R$ {price ? parseFloat(price.buy).toFixed(3) : 'Loading'}</span>
                </div>
            </div>

        </div>
    )
}


export default LTC