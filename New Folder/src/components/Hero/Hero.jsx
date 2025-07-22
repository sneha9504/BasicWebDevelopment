import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

import Resume from '/images/sneha-resume.pdf'
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sneha Wani </h1>
        <p className={styles.description}>
        Hi, I'm a Full Stack Web Developer just starting my journey in the field. 
        I'm passionate about building both the front-end and back-end of web applications.
        Right now, I'm sharpening my skills.I have a strong understanding of Data Structures and Algorithms (DSA) 
        and Design and Analysis of Algorithms (DAA), I focus on creating efficient, scalable solutions.
        I'm excited to keep learning and contribute to real-world projects!
        </p>
        <div class="button-container">
          <a href="mailto:snehawani4321@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a
            href={Resume}
            className={`${styles.contactBtn} `}
            download="Resume"
          >
            Download CV
          </a>
        </div>
      </div>
      <img src={getImageUrl("hero.png")} alt="Hero image of me" className={styles.heroImg}/>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
