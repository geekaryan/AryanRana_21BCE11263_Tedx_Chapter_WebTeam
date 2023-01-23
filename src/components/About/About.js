import stand from "../assets/stand.png";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.text}>
        <p>About Us</p>
      </div>
      <div className={styles.flex}>
        <div className={styles.subText}>
          <p style={{ color: "#828282" }}>
            {" "}
            Intelligence will explore these questions and many others as we
            ponder the depths of intelligence, human attempts to replicate their
            own brains, and the consequential limits of the mind. Come take a
            closer look at human psychology with leading neuroscientists in the
            world, immerse yourself in the "mind" of machines with
            groundbreakers in AI, and question the boundaries of what we can and
            should do with our intelligence. And ask yourself: what will this
            inspire you to do with your mind tomorrow?
          </p>

          <p style={{ color: "#828282", marginTop: "44px" }}>
            {" "}
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
        <div className={styles.imgDiv}>
          <img src={stand} alt="stand" className={styles.logo} />
        </div>
      </div>
    </div>
  );
};

export default About;
