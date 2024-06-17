import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
    
    return (
        <footer className="footer">
            <div className="footer-section">
                <div className="footer-logo">
                    <img src="https://play-lh.googleusercontent.com/joxfj1gkug2ZWkWZT-t6VkhBgm3cafwyb748rQo3yQi9gCxzxjzcCrsQ66Cpdg8DNJqa=w600-h300-pc0xffffff-pd" alt="Logo" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    <div className="social-icons">
                        <a href="#"><img src={assets.facebook_icon} alt="Facebook" /></a>
                        <a href="#"><img src="https://i.pinimg.com/736x/24/37/73/2437730f7e3a5705e205e67fa2cd1020.jpg" alt="Instagram" /></a>
                        <a href="#"><img src={assets.twitter_icon} alt="Twitter" /></a>
                    </div>
                </div>
                <div className="footer-links">
                    <h4>About Us</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Restaurant Contact</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Company</a></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">Partnership</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Sitemap</a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h4>Get in Touch</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    <input type="email" placeholder="Your Email Address" />
                    <button>Subscribe</button>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-logo-img">
                    <img className='inline' src="https://w7.pngwing.com/pngs/970/445/png-transparent-punjabi-cuisine-north-indian-cuisine-vegetarian-cuisine-thali-vegetable-food-breakfast-recipe-thumbnail.png" alt="Logo" />
                    <p className='para'>&copy; 2022 Foodhut. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
