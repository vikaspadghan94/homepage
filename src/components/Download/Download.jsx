import { assets } from '../../assets/assets'
import './Download.css'

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <div className='download'>
                <h1>It’s Now <span>More Easy </span> to<br /> <span>Purchase Plan </span>by Our <br /> Mobile <span>App</span></h1>
                <p className='para'>All you need to do is download one of the best delivery apps, make an order, and most companies are opting for mobile app development for food delivery.</p>
                <div className="app-download-platforms">
                    <img src={assets.play_store} alt="Play Store" />
                    <img src={assets.app_store} alt="App Store" />
                </div>
            </div>
            
            <div className='image'>
                <img className='mob' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlZdkkrAU0Rd1SOx_R2MmcYoA1AU2CW3gj-w&s" alt="Mobile App" />
            </div>
        </div>
    )
}

export default AppDownload
