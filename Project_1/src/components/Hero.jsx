const HeroSection = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-button">
          <button>Shop Now</button>
          <button>Category</button>
        </div>
        <div className="social">
          <p>Also Available On</p>
          <div className="social-icins">
            <img src="../../public/img/amazon.png" alt="amazon-logo" />
            <img src="../../public/img/flipkart.png" alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="hero-img">
        <img src="../../public/img/shoe_image.svg" alt="shoe-img" />
      </div>
    </main>
  );
};

export default HeroSection;
