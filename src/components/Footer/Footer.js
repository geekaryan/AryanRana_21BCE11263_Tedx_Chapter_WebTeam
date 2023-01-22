import bottom from "../assets/foot.png";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <img src={bottom} alt="emd" className={styles.logo} />
    </div>
  );
};

export default Footer;
