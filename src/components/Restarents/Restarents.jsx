import React, { useState } from 'react';
import './Restarents.css';
import { menu_list } from '../../assets/assets';

const ITEMS_PER_PAGE = 3;

const Restarents = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    if ((currentPage + 1) * ITEMS_PER_PAGE < menu_list.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const selectedItems = menu_list.slice(startIndex, endIndex);

  return (
    <div className='explore-restaurent'>
      <h4>Partners</h4>
      <h1>Featured Restaurants</h1>
      <div className='pagination-controls'>
        <button onClick={handlePrevPage} disabled={currentPage === 0} className='pagination-prev'>&#9664;</button>
        <div className='restarents-list'>
          {selectedItems.map((item, index) => (
            <div key={index} className='explore-restarants-list'>
              <div className='restarent-image-container'>
                <img src={item.menu_image} alt={item.restaurent_name} className='restarent-image' />
                <div className='restarent-overlay'>
                  <div className='restarent-rating'>⭐ 4.5 (25+)</div>
                </div>
              </div>
              <div className='rest-offer'>
                <span className='restarent-slogan'>{item.restaurent_offer}</span>
                <div className='additional-images'>
                  <img src={item.rest_plate} alt="Plate" />
                  <img src={item.rest_tiffin} alt="Tiffin" />
                </div>
              </div>
              <div className='additional-info'>
                <div className='rest-name'>
                  <p>
                    {item.restaurent_name}
                    <span className='vegetarian-icon' title='Vegetarian'>&#9679;</span>
                    <span className='nonvegetarian-icon' title='Non-Vegetarian'>&#9679;</span>
                  </p>
                  <p className='rest-price'>
                    <span className='thali-first'><img src="https://png.pngtree.com/png-vector/20231219/ourmid/pngtree-indian-happy-new-year-thali-clip-art-png-image_11372902.png" alt="" />Price: ₹1500</span>
                  </p>
                  <p className='rest-price'>
                    <span className='thali-first'><img src="https://png.pngtree.com/png-vector/20231219/ourmid/pngtree-indian-happy-new-year-thali-clip-art-png-image_11372902.png" alt="" />Price: ₹1500</span>                  
                  </p>
                  <p className='rest-price'>
                    <span className='thali-first'><img src="https://png.pngtree.com/png-vector/20231219/ourmid/pngtree-indian-happy-new-year-thali-clip-art-png-image_11372902.png" alt="" />Price: ₹1500</span>                  
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleNextPage} disabled={(currentPage + 1) * ITEMS_PER_PAGE >= menu_list.length} className='pagination-next'>&#9654;</button>
      </div>
      <button className='btn'>See All Restaurants <span>  >   </span></button>
    </div>
  );
};

export default Restarents;
