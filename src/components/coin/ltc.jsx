import React, { useState, useEffect } from 'react'
import useAPI_PriceCoin from '../../api/useAPI_PriceCoin.js'
import Price from './price/price.jsx'
import Preview from './preview/preview.jsx'
import BackgroundStatus from './background-status/background-status.jsx'
import Book from './book/book.jsx'
import { SiLitecoin } from 'react-icons/si'

const LTC = () => {

    const [price, searchPrice] = useAPI_PriceCoin()
    const [time, setTime] = useState(0)
    useEffect(() => {
        searchPrice('LTC')
        const interval = setInterval(() => {
            setTime(time + 1);
        }, 5000);

        return () => clearInterval(interval)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [time])

    return (
        <div className='container-top__coin container-top__coin__3'>

            <BackgroundStatus calcStatus={price} />

            <Price price={price} coin_name='Litecoin (LTC)' />

            <Preview coin_name='Litecoin (LTC)' price={price} logo={<SiLitecoin />} colorLogo="#a1a1a1" />

            <Book coin='LTC' />

        </div>
    )
}


export default LTC