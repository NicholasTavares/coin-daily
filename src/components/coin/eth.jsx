import React, { useState, useEffect } from 'react'
import useAPI_PriceCoin from '../../api/useAPI_PriceCoin.js'
import Preview from './preview/preview.jsx'
import Price from './price/price.jsx'
import BackgroundStatus from './background-status/background-status.jsx'
import Book from './book/book.jsx'
import { FaEthereum } from 'react-icons/fa'

const ETH = () => {

    const [price, searchPrice] = useAPI_PriceCoin()
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

            <BackgroundStatus calcStatus={price} />

            <Price price={price} coin_name='Ethereum (ETH)' />

            <Preview coin_name='Ethereum (ETH)' price={price} logo={<FaEthereum />} />

            <Book coin='ETH' />

        </div>
    )
}

export default ETH