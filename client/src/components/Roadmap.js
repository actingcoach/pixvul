import React from "react";

const Roadmap = () => {
  return (
    <section className="roadmap-section">
      <img src="images/road-map-shape.png" alt="" className="roadmap-shape" />
      <div className="container">
        <div className="section-title text-center">
          <h3 className="h3">Roadmap</h3>
          <h2>
            Winter <br />
            Roadmap <br />
            Highlights
          </h2>
        </div>
        <div className="roadmap-wrap">
          <div className="single-roadmap top first-top">
            <div className="dec-part">
              <div className="ellipse"></div>
              <span className="line"></span>
            </div>
            <div className="text-part">
              <h3>Token Listing</h3>
              <p>
                Perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo
              </p>
            </div>
          </div>
          <div className="single-roadmap top">
            <div className="dec-part">
              <div className="ellipse"></div>
              <span className="line"></span>
            </div>
            <div className="text-part">
              <h3>ICO</h3>
              <p>
                Perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo
              </p>
            </div>
          </div>
          <div className="single-roadmap top last-top">
            <div className="dec-part">
              <div className="ellipse"></div>
              <span className="line"></span>
            </div>
            <div className="text-part">
              <h3>Vault Ready</h3>
              <p>
                Perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo
              </p>
            </div>
          </div>
          <div className="single-roadmap bottom">
            <div className="dec-part">
              <div className="ellipse"></div>
              <span className="line"></span>
            </div>
            <div className="text-part">
              <h3>Pixel Ready</h3>
              <p>
                Perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo
              </p>
            </div>
          </div>
          <div className="single-roadmap bottom">
            <div className="dec-part">
              <div className="ellipse"></div>
              <span className="line"></span>
            </div>
            <div className="text-part">
              <h3>Auction Ready</h3>
              <p>
                Perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
