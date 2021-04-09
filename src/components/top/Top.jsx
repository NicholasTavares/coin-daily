import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Back from '../back-animation/Back-animation'
import BTC from '../coin/btc'
import ETH from '../coin/eth'
import LTC from '../coin/ltc'


const Top = () => {

    const [priceBTC, setPriceBTC] = useState(null)


    async function coinAPI() {
        await axios.get('https://www.mercadobitcoin.net/api/BTC/ticker/')
            .then(res => {
                return (
                    setPriceBTC(res.data.ticker), console.log(res.data.ticker)
                )
            })
    }

    useEffect(() => coinAPI())

    return (
        <header className="container-top">

            <Back />
            <ETH />
            <BTC priceBTC={priceBTC} />
            <LTC />

        </header>
    )
}

export default Top;
