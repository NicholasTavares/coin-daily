import axios from 'axios'
import React, { useEffect } from 'react'
import Back from '../back-animation/Back-animation'


const Top = () => {

    async function coin() {
        await axios.get('https://www.mercadobitcoin.net/api/ETH/ticker/').then(res => console.log(res))
    }

    useEffect(() => coin())

    return (
        <header className="container-top">

            <Back />

            <div className='container-top__coin container-top__coin__2'>

                <div className="container-top__head-background">
                </div>

                <div className="container-top__price-container">
                    <h1 className='container-top__price-container__price'>R$ 12,287.03</h1>

                    <div className='container-top__price-container__percentage-container'>
                        <span className='container-top__price-container__percentage-time'>
                            24h %
                        </span>
                        <span className="container-top__price-container__percentage-price">
                            &darr; 3.83%
                        </span>

                    </div>

                    <div className='container-top__price-container__percentage-container'>
                        <span className='container-top__price-container__percentage-time'>
                            7d %
                        </span>
                        <span className="container-top__price-container__percentage-price">
                            &uarr; 14.45%
                        </span>
                    </div>


                    <div className="container-top__price-container__history">
                        Dados
                    </div>

                </div>

                <div className="container-top__head">
                    <div className="container-top__preview">
                        <h1 className="container-top__top-level">2</h1>
                        <h2 className="container-top__title">Ethereum</h2>
                        <span className="container-top__price-title">R$ 12,287.03</span>
                    </div>
                </div>

            </div>

            <div className='container-top__coin container-top__coin__1'>

                <div className="container-top__head-background">
                </div>

                <div className="container-top__price-container">
                    <h1 className='container-top__price-container__price'>R$ 339,788.75</h1>

                    <div className='container-top__price-container__percentage-container'>
                        <span className='container-top__price-container__percentage-time'>
                            24h %
                        </span>
                        <span className="container-top__price-container__percentage-price">
                            &darr; 9.11%
                        </span>

                    </div>

                    <div className='container-top__price-container__percentage-container'>
                        <span className='container-top__price-container__percentage-time'>
                            7d %
                        </span>
                        <span className="container-top__price-container__percentage-price">
                            &uarr; 8.09%
                        </span>
                    </div>

                </div>

                <div className="container-top__head">
                    <div className="container-top__preview">
                        <h1 className="container-top__top-level">1</h1>
                        <h2 className="container-top__title">Bitcoin</h2>
                        <span className="container-top__price-title">R$ 339,788.75</span>
                    </div>
                </div>

            </div>

            <div className='container-top__coin container-top__coin__3'>

                <div className="container-top__head-background">
                </div>

                <div className="container-top__price-container">
                    <h1 className='container-top__price-container__price'>R$ 1,931.91</h1>

                    <div className='container-top__price-container__percentage-container'>
                        <span className='container-top__price-container__percentage-time'>
                            24h %
                        </span>
                        <span className="container-top__price-container__percentage-price">
                            &darr; 1.83%
                        </span>

                    </div>

                    <div className='container-top__price-container__percentage-container'>
                        <span className='container-top__price-container__percentage-time'>
                            7d %
                        </span>
                        <span className="container-top__price-container__percentage-price">
                            &uarr; 42.59%
                        </span>
                    </div>

                </div>

                <div className="container-top__head">
                    <div className="container-top__preview">
                        <h1 className="container-top__top-level">3</h1>
                        <h2 className="container-top__title">Litecoin</h2>
                        <span className="container-top__price-title">R$ 1,251.26</span>
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

