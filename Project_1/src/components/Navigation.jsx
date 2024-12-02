const Navigation = () => {
  return (
    <nav className="main-container">
      <div className="logo">
        <img src="/img/brand_logo.svg" alt="brand-logo" />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="https://maps.app.goo.gl/XEfVPxS2VoGdCuKe7">Location</li>
        <li href="https://akashdip2001.github.io/website-2/">About</li>
        <li href="https://akashdip2001.github.io/linktree/">Contact</li>
      </ul>
      <button className="login-btn">Login</button>
    </nav>
  );
};

export default Navigation;