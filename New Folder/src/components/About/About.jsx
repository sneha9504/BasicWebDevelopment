import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("frontend.png")} alt="frontend icon"  />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              I am a frontend developer with a strong understanding of building responsive and optimized websites, 
              eager to apply my skills in real-world projects
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("backend.png")} alt="backend icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              I have a foundational understanding of developing fast and
               optimized back-end systems and APIs, with a focus on performance and scalability
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("ui-design.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
              I have gained experience in designing landing pages and creating design systems, aiming to create clean and user-friendly interfaces
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
