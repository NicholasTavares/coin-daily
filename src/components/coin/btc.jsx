import React, { useState, useEffect } from 'react'
import useAPI_PriceCoin from '../../api/useAPI_PriceCoin.js'
import Price from './price/price.jsx'
import Preview from './preview/preview.jsx'
import BackgroundStatus from './background-status/background-status.jsx'
import Book from './book/book.jsx'
import { FaBitcoin } from 'react-icons/fa'

const BTC = () => {
    const [price, searchPrice] = useAPI_PriceCoin()
    const [time, setTime] = useState(0)
    useEffect(() => {
        searchPrice('BTC')
        const interval = setInterval(() => {
            setTime(time + 1);
        }, 5000);

        return () => clearInterval(interval)

    }, [time])

    return (
        <div className='container-top__coin container-top__coin__1'>

            <BackgroundStatus calcStatus={price} />

            <Price coin_name='Bitcoin (BTC)' price={price} />

            <Preview coin_name='Bitcoin (BTC)' price={price} logo={<FaBitcoin />} colorLogo="goldenrod" />

            <Book coin='BTC' />

        </div>
    )
}

export default BTC
