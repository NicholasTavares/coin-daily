import React, { useState } from 'react'
import axios from 'axios'

async function coinAPI({ cripto }) {
    const [price, setPrice] = useState(null)
    await axios.get(`https://www.mercadobitcoin.net/api/${cripto}/ticker/`)
        .then(res => {
            return (
                setPrice(res.data.ticker), console.log(res.data.ticker)
            )
        })

    return price
}

export default coinAPI


