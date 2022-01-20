import React from "react";

const PixToken = () => {
  return (
    <section className="pix-token-section">
      <div className="container">
        <img
          src="images/pix-token-shape1.png"
          alt=""
          className="pix-token-shape1"
        />
        <img
          src="images/pix-token-shape2.png"
          alt=""
          className="pix-token-shape2"
        />
        <div className="section-title text-center">
          <h2>PIX Token</h2>
        </div>
        <div className="pix-token-wrap">
          <div className="token-details-wrap">
            <h3>Token Details</h3>
            <table>
              <tbody>
                <tr>
                  <td>Ticker</td>
                  <td>SCHZ</td>
                </tr>
                <tr>
                  <td>Token Type</td>
                  <td>ERC20 & BEP2</td>
                </tr>
                <tr>
                  <td>Issuing Price</td>
                  <td>$0.0215 USD</td>
                </tr>
                <tr>
                  <td>Circulating Supply</td>
                  <td>TBD</td>
                </tr>
                <tr>
                  <td>Total Supply</td>
                  <td>8,888,888,888</td>
                </tr>
                <tr>
                  <td>Smart Contract Audit</td>
                  <td>
                    https://certik.org/certificate.html?
                    key=75067dbf2eaa13d94c68c85349345e86d6fcb7dd5aa118cd300053696756798c2
                  </td>
                </tr>
                <tr>
                  <td>Etherscan</td>
                  <td>
                    https://etherscan.io/
                    token/0x3506424f91fd33084466f402d5d97f05f8e3b4af
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="pix-token-url-wrap">
            <h3>Give A Title</h3>
            <div className="pix-token-url-head">
              <div className="image">
                <img src="images/pix-toekn-icon.svg" alt="" />
              </div>
              <div className="text">
                <h4>PXT</h4>
                <h3>PIX Token</h3>
              </div>
            </div>
            <div className="token-url-show-box">
              <div className="token-url-show-box-inner">
                <div className="head">
                  <div className="left">
                    <h4>BSC Address</h4>
                    <h3>0x02e244e008631a1a86657dewrtyrwqcd</h3>
                  </div>
                  <div className="right">
                    <a href="/#" className="button">
                      <i className="fal fa-copy"></i>
                    </a>
                  </div>
                </div>
                <div className="about-token">
                  <div className="single">
                    <h5>MAX Supply</h5>
                    <h4>10,00 PXT</h4>
                  </div>
                  <div className="single">
                    <h5>Token Type</h5>
                    <h4>Utility</h4>
                  </div>
                </div>
              </div>
              <a href="/#" className="bottom-button default-button">
                <img
                  src="images/pancakeswap-cake-seeklogo.com.png"
                  alt=""
                  className="first-icon"
                />
                <span>Exchange On Pancakeswap</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PixToken;
