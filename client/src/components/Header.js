import { useEffect, useState } from "react";
import React from "react";
import { useMetamask } from "use-metamask";
import { ethers } from "ethers";

function Header() {
  const { connect, metaState } = useMetamask();

  useEffect(() => {
    if (metaState.isConnected === false) {
      console.log('disconnected')
    }
  }, [metaState.isConnected])

  // create a function that returns correct Connect button status

  const connectBtn = async (event) => {
    console.log('connectBtn clicked')
    // Connect
    if (!metaState.isConnected) {
      try {
        await connect(ethers.providers.Web3Provider, "any")
      } catch (error) {
        console.log('isConnected err')
        console.log(error)
      }
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
        <button
          type="button"
          className="btn btn-primary default-button header-last-button d-xl-flex d-none"
          onClick={connectBtn}
        >
          {!metaState.isConnected && <i className="fa fa-plus first-icon"></i>}
          <span>{metaState.account[0]? metaState.account[0] : 'Connect'}</span>
        </button>
        <a href="/#" className="offcanvas-open d-xl-none d-block">
          <i className="fal fa-bars"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
