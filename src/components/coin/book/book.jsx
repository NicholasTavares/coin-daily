import React, { useState, useEffect } from 'react'
import useAPI_Book from '../../../api/useAPI_Book'
import { FiChevronDown } from 'react-icons/fi';

const Book = ({ coin }) => {

    const [slide, setSlide] = useState(true)
    const [book, searchBook] = useAPI_Book()
    const [time, setTime] = useState(0)
    useEffect(() => {
        searchBook(coin)
        const interval = setInterval(() => {
            setTime(time + 1);
        }, 5000);

        return () => clearInterval(interval)

    }, [time])

    return (
        <div className="container-top__price-container__container-book">
            <span className={`container-top__price-container__container-book__arrow ${slide ? 'arrowRotate' : ''}`} onClick={() => setSlide(!slide)}>
                <FiChevronDown />
            </span>

            <div className={`container-top__price-container__container-book__book ${slide ? 'slide' : ''}`}>
                <div className='container-top__price-container__container-book__book__title'>
                    Livro de ofertas
                </div>
                <div className='container-top__price-container__container-book__book__orders'>
                    <div className="container-top__price-container__container-book__book__sell">

                        <div className="container-top__price-container__container-book__book__prices">
                            <span><strong>R$</strong> {book ? book.asks[0][0] : 'Loading'}</span>
                            <span><strong>{coin}</strong> {book ? book.asks[0][1] : 'Loading'}</span>
                        </div>

                    </div>
                    <div className="container-top__price-container__container-book__book__buy">

                        <div className="container-top__price-container__container-book__book__prices">
                            <span><strong>R$</strong> {book ? book.bids[0][0] : 'Loading'}</span>
                            <span><strong>{coin}</strong> {book ? book.bids[0][1] : 'Loading'}</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Book

