import React, { useState, useEffect } from 'react'
import useAPI from '../../api/useAPI.js'
import Price from './price/price.jsx'

const ETH = () => {

    const [price, searchPrice] = useAPI()
    const [time, setTime] = useState(0)
    useEffect(() => {
        searchPrice('ETH')
        const interval = setInterval(() => {
            setTime(time + 1);
        }, 5000);

        return () => clearInterval(interval)

    }, [time])

    return (
        <div className='container-top__coin container-top__coin__2'>

            <div className="container-top__head-background">
            </div>

            <Price price={price} />

            <div className="container-top__head">
                <div className="container-top__preview">
                    <h1 className="container-top__top-level">2</h1>
                    <h2 className="container-top__title">Ethereum</h2>
                    <span className="container-top__price-title">R$ {price ? parseFloat(price.buy).toFixed(3) : 'Loading'}</span>
                </div>
            </div>

        </div>
    )
}

export default ETH