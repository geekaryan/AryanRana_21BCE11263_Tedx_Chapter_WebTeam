import illusion from "../assets/illusion.png";
import styles from "./Main.module.css";
const Main = () => {
  return (
    <div className={styles.flex}>
      <div className={styles.left}>
        <div className={styles.text}>
          <p>Ideas worth spreading.</p>
        </div>
        <div className={styles.subText}>
          <p style={{ color: "#828282" }}>
            Intelligence will explore these questions and many others as we
            ponder the depths of intelligence, human attempts to replicate their
            own brains, and the consequential limits of the mind. Come take a
            closer look at human psychology with leading neuroscientists in the
            world, immerse yourself in the "mind" of machines with
            groundbreakers in AI, and question the boundaries of what we can and
            should do with our intelligence. And ask yourself: what will this
            inspire you to do with your mind tomorrow?
          </p>
        </div>
        <div>
          <button className={styles.btn}>Upcoming Events</button>
        </div>
      </div>
      <div className={styles.imgDiv}>
        <img src={illusion} alt="img" className={styles.img} />
      </div>
    </div>
  );
};

export default Main;
