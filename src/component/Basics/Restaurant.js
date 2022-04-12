import React, { useState } from 'react';
import "./style.css";
import Menu from './menuApi';

const Restaurant = () => {
    // const [menuData, setMenuData] = useState(intialdata);
  return (
    <>
    <div className="card-container">
        <div className="card">
            <div className="card-body">
                <span className="card-number card-circle subtle">1</span>
                <span className="card-author subtle">Breakfast</span>
                <h2 className='card-title'>maggi</h2>
                <span className="card-description subtle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quasi dolore adipisci ducimus quidem, autem dolorum eos placeat hic assumenda beatae illum repudiandae? Ducimus similique est eligendi reprehenderit ipsam ut voluptatum cum voluptatibus dignissimos vitae?
                </span>
                <div className="card-read">Read</div>
            </div>
            {/* <img src={image} alt="images" className="card-media" /> */}
            <span className="card-tag subtle">Order Now</span>
        </div>
    </div>
    </>
  )
}

export default Restaurant;