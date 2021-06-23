import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_img" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Image not found" />
            
            <div className="home_row">
                <Product id="12345678" title="APPLE iPad Air (4th Gen) 64 GB ROM 10.9 inch with Wi-Fi Only (Rose Gold)" price={29.99} image="https://images.pexels.com/photos/2320369/pexels-photo-2320369.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" rating={5} />
                
                <Product id="12345679" title="APPLE iPhone 11 (Black, 64 GB)" price={39.99} image="https://images.pexels.com/photos/5053841/pexels-photo-5053841.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" rating={3} />
            </div>
            <div className="home_row">
                <Product id="12345670" title="APPLE Watch Series 3 GPS - 38 mm Space Grey Aluminium Case with Black Sport Band  (Black Strap, Regular)" price={20.99} image="https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" rating={4} />
                <Product id="12345671" title="Apple AirPods with Charging Case Bluetooth Headset with Mic  (White, True Wireless)" price={15.99} image="https://images.pexels.com/photos/6031535/pexels-photo-6031535.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" rating={5} />
                <Product id="12345672" title="APPLE MacBook Pro M1 - (8 GB/256 GB SSD/Mac OS Big Sur) MYDA2HN/A  (13.3 inch, Silver, 1.4 kg)" price={45.99} image="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" rating={5} />
            </div>
            <div className="home_row">
                <Product id="12345673" title="APPLE M1 (8 GB Unified/512 GB SSD/Mac OS Big Sur/24 Inch Screen/MGPN3HN/A)  (Pink, 461 mm x 547 mm x 130 mm, 4.48 kg)" price={40.99} image="https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" rating={4} />
            </div>
            </div>
        </div>
    )
}

export default Home
