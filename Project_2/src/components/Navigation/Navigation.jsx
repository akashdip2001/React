import React from "react"; // not needed in React 17
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={`${styles.navication} container`}>
      {/* // container is a global class that is defined in App.css --> so easy to use
        // But otherwise we can use className={styles.navigation} to use the local class */}
      <div className={styles.logo}>
        <img src="img/dp.png" alt="logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;
