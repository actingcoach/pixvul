import React from "react";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        <a href="/#" className="footer-logo">
          <img src="images/Logo_Big-white.svg" alt="" />
        </a>
        <div className="footer-social">
          <ul>
            <li>
              <a href="/#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="/#">
                <i className="fab fa-reddit-alien"></i>
              </a>
            </li>
            <li>
              <a href="/#">
                <i className="fab fa-telegram-plane"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Pixel Vault Banking Resolution 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
