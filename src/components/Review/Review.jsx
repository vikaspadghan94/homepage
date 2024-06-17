// import React from 'react';
import './Review.css';

const Review = () => {
    return (
        <div className='review'>
            <div className='choice'>
                <h4>Choice plan according your choice</h4>
                <h1>JAHA JAAO WAHA KHAO <span>PLANS</span></h1>
            </div>
            <div className='container'>
                <div className='container-left'>
                    <div className='price'>₹350</div>
                    <div className='image-container'>
                    <img className='thali' src="https://png.pngtree.com/png-clipart/20240126/original/pngtree-indian-happy-new-year-thali-clip-art-png-image_14159453.png" alt="" width={350} height={350} />
                    </div>
                    
                    <div className='user'>
                        <span>
                            <img src="https://img.freepik.com/free-psd/expressive-woman-gesturing_23-2150198673.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718236800&semt=ais_user" alt="" />
                            <img src="https://img.freepik.com/free-psd/studio-portrait-young-teenage-girl_23-2150162484.jpg" alt="" />
                            <img src="https://www.picng.com/upload/industrial_worker/png_industrial_worker_38107.png" alt="" />
                        </span>
                        <div className='rating'> &#9733;<span>(4.5)</span> </div>
                        <h3>10 Days | 7 Thali’s</h3>
                        <p>In this plan, you can take 7 meals over a duration of 10 days.</p>
                    </div>
                    <button>Purchase Now !</button>
                </div>
                <div className='container-center'>
                    <div className='price'>₹350</div>
                    <div className='image-container'>
                    <img className='thali' src="https://png.pngtree.com/png-clipart/20240126/original/pngtree-indian-happy-new-year-thali-clip-art-png-image_14159453.png" alt="" width={350} height={350} />
                    </div>
                    <div className='user'>
                        <span>
                            <img className='' src="https://img.freepik.com/free-psd/expressive-woman-gesturing_23-2150198673.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718236800&semt=ais_user" alt="" />
                            <img src="https://img.freepik.com/free-psd/studio-portrait-young-teenage-girl_23-2150162484.jpg" alt="" />
                            <img src="https://www.picng.com/upload/industrial_worker/png_industrial_worker_38107.png" alt="" />
                        </span>
                        <div className='rating'> &#9733;<span>(4.5)</span> </div>
                        <h3>10 Days | 7 Thali’s</h3>
                        <p>In this plan, you can take 7 meals over a duration of 10 days.</p>
                    </div>
                    <button>Purchase Now !</button>
                </div>
                <div className='container-right'>
                    <div className='price'>₹350</div>
                    <div className='image-container'>
                    <img className='thali' src="https://png.pngtree.com/png-clipart/20240126/original/pngtree-indian-happy-new-year-thali-clip-art-png-image_14159453.png" alt="" width={350} height={350} />
                    </div>
                    <div className='user'>
                        <span>
                            <img src="https://img.freepik.com/free-psd/expressive-woman-gesturing_23-2150198673.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718236800&semt=ais_user" alt="" />
                            <img src="https://img.freepik.com/free-psd/studio-portrait-young-teenage-girl_23-2150162484.jpg" alt="" />
                            <img src="https://www.picng.com/upload/industrial_worker/png_industrial_worker_38107.png" alt="" />
                        </span>
                        <div className='rating'> &#9733;<span>(4.5)</span> </div>
                        <h3>10 Days | 7 Thali’s</h3>
                        <p>In this plan, you can take 7 meals over a duration of 10 days.</p>
                    </div>
                    <button>Purchase Now !</button>
                </div>

                <div className="arrow arrow-left" style={{background:"#F54748"}}>←</div>
                <div className="arrow arrow-right" style={{background:"#F54748"}}>→</div>
            </div>
        </div>
    );
}

export default Review;
