import React from "react";

const Introduction = () => {
  return (
    <section className="introduction-section">
      <div className="container">
        <div className="introduction-img">
          <img src="images/Intro_Img.png" alt="intro" />
        </div>
        <div className="introduction-text">
          <h3 className="h3">Introduction</h3>
          <h2>
            Perspiciatis Unde Omnis Iste Natus Error Sit Voluptate Accusantium
            Doloremque.
          </h2>
          <p>
            Pixel Vault is a storage of valuable. It can store unlimited numbers
            of NFTs and cryptocurrencies (ERC-20) including tokens and stable
            coins. Pixel Vault has all the functions and tools to give better
            access to digital asset management in a simple and secure way.
          </p>
          <a href="/#" className="default-button button default-button-white">
            <span>Learn More</span>
            <i className="fal fa-long-arrow-right right-arrow"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
