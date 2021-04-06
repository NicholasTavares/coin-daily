import React from 'react'
import Back from '../back-animation/Back-animation'

const Top = () => {

    return (
        <header className="container-top">


            <div className='container-top__coin container-top__coin__2'>

                <div className="container-top__head-background">
                </div>

                <div className="container-top__head">
                    <div className="container-top__data">
                        <h1 className="container-top__title">Ethereum</h1>
                        <span className="container-top__price">R$ 12,287.03</span>
                    </div>
                </div>

            </div>

            <div className='container-top__coin container-top__coin__1'>

                <div className="container-top__head-background">
                </div>

                <div className="container-top__head">
                    <div className="container-top__data">
                        <h1 className="container-top__title">Bitcoin</h1>
                        <span className="container-top__price">R$ 339,788.75</span>
                    </div>
                </div>

            </div>

            <div className='container-top__coin container-top__coin__3'>

                <div className="container-top__head-background">
                </div>

                <div className="container-top__head">
                    <div className="container-top__data">
                        <h1 className="container-top__title">Coin Binance</h1>
                        <span className="container-top__price">R$ 1,931.91</span>
                    </div>
                </div>

            </div>

        </header>
    )
}

export default Top;

/*const initial_state = {
        qs: {
            'start': '1',
            'limit': '5000',
            'convert': 'USD'
        },
        headers: {
            'X-CMC_PRO_API_KEY': 'eb4c1014-0ea6-435b-8e14-abe0d582d0c7'
        },
        json: true,
        gzip: true
    }

    async function SearchCoin(search = initial_state) {
        const BASE_URL = 'https://pro-api.coinmarketcap.com/'
        console.log('Objeto de requisição: ', search)
        try {
            await axios.get(BASE_URL, search).then(res => console.log(res))
        } catch (error) {
            console.log(error)
        }


    }

    useEffect(() => {
        SearchCoin()
    }, [])*/

