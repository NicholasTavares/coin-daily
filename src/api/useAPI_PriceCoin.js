import { useState } from 'react'
import axios from 'axios'

export default function useAPI_PriceCoin() {
    const [price, setPrice] = useState(null)

    async function searchCoin(cripto) {
        if (cripto) {
            await axios.get(`https://www.mercadobitcoin.net/api/${cripto}/ticker/`)
                .then(res => setPrice(res.data.ticker))
        }
    }

    return [price, searchCoin]

}



