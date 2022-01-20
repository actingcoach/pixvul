import React from "react";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-left">
          <h1>Portfolio In Pixel</h1>
          <h5>
            Pre- Sale Is <span className="status">Live</span>
          </h5>
          <div className="hero-clock">
            <div data-countdown="2022/02/12"></div>
          </div>
          <p>
            Perspiciatis unde omnis iste natus error sit voluptatem <br />
            accusantium doloremque laudantium, totam rem <br />
            aperiam, eaque ipsa quae ab illo
          </p>
          <a href="/#" className="text-button">
            <span>Learn More</span>
            <i className="fal fa-long-arrow-right icon-right"></i>
          </a>
        </div>
        <div className="hero-right">
          <div className="exchange-wrapper">
            <h2>Exchange</h2>
            <div className="exchange-wrap">
              <a href="/#" className="middle-button">
                <i className="fal fa-sync"></i>
              </a>
              <div className="exchange-box">
                <select className="top" id="exchange-select1"></select>
                <div className="bottom">
                  <h4>You Send</h4>
                  <h3>0.05</h3>
                </div>
              </div>
              <div className="exchange-box">
                <select className="top" id="exchange-select2"></select>
                <div className="bottom">
                  <h4>You Get</h4>
                  <h3>1.2546466</h3>
                </div>
              </div>
            </div>
            <a
              href="/#"
              className="exchange-confirm-button d-flex default-button"
            >
              <span className="ms-auto">Exchange</span>
              <i className="fal fa-long-arrow-right arrow-right ms-auto w-0"></i>
            </a>
            <div className="bottom-text">
              <p>
                Estimated rate: 1 BTC = 15.658987 ETH
                <br />
                No extra fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
