import React, { useState, useEffect } from 'react'
import useAPI from '../../api/useAPI.js'
import Price from './price/price.jsx'
import Preview from './preview/preview.jsx'
import BackgroundStatus from './background-status/background-status.jsx'
import Book from './book/book.jsx'

const BTC = () => {
    const [price, searchPrice] = useAPI()
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

            <BackgroundStatus calcStatus="Passar dois valores para calcular porcentagem de valorização ou desvalorização" />

            <Price price={price} />

            <Preview coin_name='Bitcoin (BTC)' price={price} logo='Procurar logo' />

            <Book />


        </div>
    )
}

export default BTC
