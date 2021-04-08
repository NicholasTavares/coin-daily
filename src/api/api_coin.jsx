import React, { useEffect } from 'react'
import axios from 'axios'

const API = () => {

    async function Coin() {
        const URL = 'https://sandbox-api.coinmarketcap.com'
        try {
            await axios.get(URL).then(response => console.log(response))
        } catch (error) {
            console.log(error)
        }

    }
}



export default API
