import React from "react";

const OffCanvas = () => {
  return (
    <>
      <div className="offcanvas-menu">
        <ul className="offmenu" id="menuParent">
          <a href="/#" className="offcanvas-close">
            <i className="fa fa-times"></i>
          </a>
          <li>
            <a className="active" href="/#">
              Home
            </a>
          </li>
          <li>
            <a href="/#">Token</a>
          </li>
          <li>
            <a href="/#">Vault</a>
          </li>
          <li className="d-flex justify-content-center">
            <a href="/#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/#">
              <i className="fab fa-reddit-alien"></i>
            </a>
            <a href="/#">
              <i className="fab fa-telegram-plane"></i>
            </a>
          </li>
          <li>
            <a
              href="/#"
              className="default-button py-0 align-items-center d-flex color-white"
            >
              <i className="fa fa-plus first-icon"></i>
              <span>Connect</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="offcanvas-overlay"></div>
    </>
  );
};

export default OffCanvas;
