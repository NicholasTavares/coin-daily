import React, { useState, useEffect } from 'react'
import useAPI from '../../api/useAPI.js'
import Price from './price/price.jsx'
import Preview from './preview/preview.jsx'
import BackgroundStatus from './background-status/background-status.jsx'

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

            <BackgroundStatus />

            <Price price={price} />

            <Preview coin_name='Litecoin (LTC)' price={price} logo='Procurar logo' />

        </div>
    )
}


export default LTC