import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id={4635636}
            title="The Lean Startup: How Constant Innovtion Creates Radically Successful Business Paperback"
            price={10.95}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={3}
          />
          <Product
            id={13435454}
            title="Dash Go Everyday Mixer"
            price={49.99}
            image="https://m.media-amazon.com/images/I/71aoMAXDY4L._AC_UY218_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={4903850}
            title="Apple iPad Mini (Wi-Fi, 64GB) - Space Gray (Latest Model)"
            price={349.99}
            image="https://m.media-amazon.com/images/I/71Ha06XS-VL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id={3568567}
            title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal"
            price={49.99}
            image="https://m.media-amazon.com/images/I/6182S7MYC2L._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id={1351354}
            title="Google Nest Learning Thermostat - Programmable Smart Thermostat for Home"
            price={199.99}
            image="https://m.media-amazon.com/images/I/61aDbihRmtL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id={7395862}
            title="LG 55NANO85UNA Alexa Built-In NanoCell 85 Series 55' 4K Smart UHD NanoCell TV (2020)"
            price={895.98}
            image="https://m.media-amazon.com/images/I/81THjLarYOL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
