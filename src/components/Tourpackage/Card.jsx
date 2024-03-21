import React from 'react'
import './Tourpackage.css'
import { useState } from 'react';

const Card = ({ id, name, description, image, price }) => {

    const [readmore, setreadmore] = useState(false);
    const info = readmore ? description :`${description.substring(0, 100)}...`

    function readmoreHandler() {
        setreadmore(!readmore);
    }
  

    function readmoreHandler() {
        setreadmore(!readmore);
    }

    return (

        <div class="packages-box">
            <div class="image">
                <img src={image} alt="place_img" />
            </div>
            <div class="info">
                <h3><i class="fas fa-map-marker-alt"></i>{name}</h3>
                <p>
                    {info}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `Show less` : 'Read-more'}
                    </span>
                   
                </p>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
                <div class="price">${price} <span> $120.00</span></div>
                <button className='book-btn'>Book Now</button>
            </div>
        </div>

    )
}

export default Card