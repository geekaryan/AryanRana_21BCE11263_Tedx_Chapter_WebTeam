import logo from "../assets/tedlogo.png";
import twitter from "../assets/twitter.png";
import yt from "../assets/yt.png";
import insta from "../assets/insta.png";
import fb from "../assets/fb.png";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.flex}>
      <div style={{ marginTop: "20px" }}>
        <div style={{ color: "#101010" }}>
          <img src={logo} alt="logo" className={styles.bg} />
        </div>
        <div className={styles.imgFlex}>
          <div>
            <img src={twitter} alt="twitter" className={styles.bg} />
          </div>
          <div>
            <img src={fb} alt="fb" className={styles.bg} />
          </div>
          <div>
            <img src={insta} alt="insta" className={styles.bg} />
          </div>
          <div>
            <img src={yt} alt="yt" className={styles.bg} />
          </div>
        </div>
        <div>
          <p className={styles.subtext}>Copyright &copy; 2023 sudoaptrana</p>
        </div>
      </div>
      <div className={styles.show}>
        <div>
          <p className={styles.text}>Resources</p>
        </div>
        <div>
          <p className={styles.subtext}>About us</p>
        </div>
        <div>
          <p className={styles.subtext}>Contact us</p>
        </div>
        <div>
          <p className={styles.subtext}>Communtiy</p>
        </div>
        <div>
          <p className={styles.subtext}>Media</p>
        </div>
      </div>
      <div className={styles.show}>
        <div>
          <p className={styles.text}>Contact Us</p>
        </div>
        <div>
          <p className={styles.subtext}>+91 7890988997</p>
        </div>
        <div>
          <p className={styles.subtext}>+91 7890988997</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
