import React from 'react';
import './Header.css';
import { FaPlay } from 'react-icons/fa';

const Header = () => {
    return (
        <div className='header'>
            <div className="header-main">
                <div className="header-contents">
                    <div>
                        <h2>Eat Any <br /> Where <br /> <span className='just'>at just </span><span className='price'> ₹350</span></h2>
                        <p>When you purchase Plan <span className='offer'> "Jaha Jao Waha Khao" </span> you can easily eat by only scan Qr Code in Restaurants.</p>
                    </div>
                </div>
                <div className='header-contents-left'>
                    <span className='pizza'>
                        <img src="https://static.vecteezy.com/system/resources/previews/022/149/342/non_2x/hot-italian-pizza-cutout-png.png" alt="Pizza" />
                    </span>
                    <img src="https://images.unsplash.com/photo-1564758564527-b97d79cb27c1?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Food" />
                </div>
            </div>
            <div className='download'>
                <button>Download App</button>
                <h3><FaPlay /> Watch Video</h3>
            </div>
            
        </div>
    );
}

export default Header;
