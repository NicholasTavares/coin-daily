import React from 'react'
import Back from '../back-animation/Back-animation'
import BTC from '../coin/btc'
import ETH from '../coin/eth'
import LTC from '../coin/ltc'


const Top = () => {
    return (
        <header className="container-top">

            <Back />
            <ETH />
            <BTC />
            <LTC />

        </header>
    )
}

export default Top;
