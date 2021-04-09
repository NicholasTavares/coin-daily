import React, { useEffect } from 'react'
import axios from 'axios'

const API = () => {

    async function APIData() {
        let qs = `?start=1&limit=5000&convert=USD`

        try {
            let res = await axios.get('https://api.coinmarketcap.com/v1/ticker/bitcoin/' + qs, {
                headers: {
                    'Accept': 'application/json',
                    'X-CMC_PRO_API_KEY': 'eb4c1014-0ea6-435b-8e14-abe0d582d0c7',
                }
            });
            console.log(res)
        } catch (error) {
            console.log(error);
        }

    }
}



export default API
