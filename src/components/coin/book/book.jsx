import React, { useState } from 'react'
import { traverseTwoPhase } from 'react-dom/test-utils';
import { FiChevronDown } from 'react-icons/fi';

const Book = () => {

    const [slide, setSlide] = useState(false)

    return (
        <div className="container-top__price-container__container-book">
            <span className={`container-top__price-container__container-book__arrow ${slide ? 'arrowRotate' : ''}`} onClick={() => setSlide(!slide)}>
                <FiChevronDown />
            </span>

            <div className={`container-top__price-container__container-book__book ${slide ? 'slide' : ''}`}>

            </div>
        </div>
    )
}

export default Book

