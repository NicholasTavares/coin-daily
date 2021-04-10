import React from 'react'
import { FiChevronDown } from 'react-icons/fi';

const Book = () => {

    return (
        <div className="container-top__price-container__container-book">
            <span className="container-top__price-container__container-book__arrow">
                <FiChevronDown />
            </span>

            <div className="container-top__price-container__container-book__book">

            </div>
        </div>
    )
}

export default Book

