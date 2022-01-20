import React from "react";

const Vault = () => {
  return (
    <section className="vault-section">
      <div className="container">
        <div className="vault-text-side">
          <div className="section-title">
            <h3 className="h3">Vault</h3>
            <h2>You Own It Forever</h2>
          </div>
          <ul>
            <li>
              <span className="marker">
                <i className="fal fa-check"></i>
              </span>
              <span>Unlimited storage of ERC-20 tokens.</span>
            </li>
            <li>
              <span className="marker">
                <i className="fal fa-check"></i>
              </span>
              <span>Unlimited storage of NFTs.</span>
            </li>
            <li>
              <span className="marker">
                <i className="fal fa-check"></i>
              </span>
              <span>Complete ownership, only you owns it.</span>
            </li>
            <li>
              <span className="marker">
                <i className="fal fa-check"></i>
              </span>
              <span>Upgradable, Extendable, transferable.</span>
            </li>
          </ul>
          <div className="button-container">
            <a href="/#" className="default-button button">
              Deploy Now
            </a>
            <a href="/#" className="default-button default-button-white button">
              Manage Vault
            </a>
          </div>
        </div>
        <div className="vault-img-side">
          <img src="images/Vault_Image.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Vault;
