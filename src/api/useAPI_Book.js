import { useState } from 'react'
import axios from 'axios'

export default function useAPI_Book() {
    const [book, setBook] = useState(null)

    async function searchBook(cripto) {
        console.log(cripto)
        if (cripto) {
            await axios.get(`https://www.mercadobitcoin.net/api/${cripto}/orderbook/`)
                .then(res => { return (setBook(res.data), console.log(res.data)) })
        }
    }

    return [book, searchBook]

}


