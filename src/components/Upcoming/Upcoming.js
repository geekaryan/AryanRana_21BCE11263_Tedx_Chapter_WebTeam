import blog from "../assets/blog.png";
import styles from "./Upcoming.module.css";

const Upcoming = () => {
  return (
    <div className={styles.up}>
      <div className={styles.text}>
        <p>Our Blogs</p>
      </div>
      <div className={styles.flex}>
        <div>
          <div>
            <p className={styles.subText}>
              Doing NOTHING is sometimes EVERYTHING
            </p>
            <p className={styles.author}>By Oshika</p>
          </div>
          <div>
            <button className={styles.btn}>Read Full blog</button>
          </div>
        </div>
        <div>
          <img src={blog} alt="" className={styles.logo} />
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
