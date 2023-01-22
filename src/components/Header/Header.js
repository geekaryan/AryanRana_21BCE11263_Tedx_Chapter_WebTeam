import logo from "../assets/logo.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.flex}>
      <div className={styles.logoDiv}>
        <img src={logo} alt="logo" className={styles.logo} />
      </div>
      <div className={styles.lowflex}>
        <div className={styles.text}>
          <p>Blogs</p>
        </div>
        <div className={styles.text}>
          <p>About Us</p>
        </div>
        <div className={styles.text}>
          <p>Team</p>
        </div>
        <div className={styles.text}>
          <p>Sponsors</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
