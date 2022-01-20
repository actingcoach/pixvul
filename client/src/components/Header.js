import React from "react";
import Web3 from "web3";

const Header = () => {

  const connect = async(event) => {

    // Check for Metamask
    if (typeof window.ethereum == 'undefined') {
      return
    }

    // Connect
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        // Request account access if needed
        await window.ethereum.enable();
        // Accounts now exposed
      } catch (error) {

      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      // Use Mist/MetaMask's provider.
      const web3 = window.web3;
      console.log("Injected web3 detected.");
    }
    // Fallback to localhost; use dev console port by default...
    else {
      const provider = new Web3.providers.HttpProvider(
        "http://127.0.0.1:8545"
      );
      const web3 = new Web3(provider);
      console.log("No web3 instance injected, using Local web3.");
    }

  }

  return (
    <header className="header-section">
      <div className="container">
        <a href="/#" className="logo">
          <img src="images/Logo-white.svg" alt="" />
        </a>
        <div className="main-menu d-xl-block d-none">
          <ul>
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
          </ul>
        </div>
        <div className="header-social ms-auto d-xl-block d-none">
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
        <a
          href="/#"
          className="header-button default-button header-last-button d-xl-flex d-none"
          onClick={connect}
        >
          <i className="fa fa-plus first-icon"></i>
          <span>Connect</span>
        </a>
        <a href="/#" className="offcanvas-open d-xl-none d-block">
          <i className="fal fa-bars"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
