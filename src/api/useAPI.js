import { useState } from 'react'
import axios from 'axios'

export default function useAPI() {
    const [price, setPrice] = useState(null)
    console.log('Fui acionado')

    async function searchCoin(cripto) {
        if (cripto) {
            await axios.get(`https://www.mercadobitcoin.net/api/${cripto}/ticker/`)
                .then(res => {
                    return (
                        setPrice(res.data.ticker), console.log(res.data.ticker)
                    )
                })
        }
    }

    return [price, searchCoin]

}


