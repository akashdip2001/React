const HeroSection = () => {
  return (
    <main className="hero main-container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-button">
          <button>Shop Now</button>
          <button className="hero-button-2">Category</button>
        </div>
        <div className="social">
          <p>Also Available On</p>
          <div className="social-icons">
            <img src="../../public/img/flipkart.png" alt="flipkart-logo" />
            <img
              className="amazon-icon"
              src="../../public/img/amazon.png"
              alt="amazon-logo"
            />
          </div>
        </div>
      </div>
      <div className="hero-img">
        <img src="/img/shoe_image.svg" alt="shoe-img" />
      </div>
    </main>
  );
};

export default HeroSection;
