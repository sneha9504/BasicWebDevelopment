import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";



export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("emailIcon.png")} alt="Email icon" />
          <a href="mailto:snehawani4321@gmail.com">snehawani4321@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("linkedinIcon.png")} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/sneha-wani-85938422a">linkedin.com/sneha</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/sneha9504">github.com/sneha</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact.png")} alt="Contact icon" />
          <p>7773993048</p>
        </li>
      </ul>
    </footer>
  );
};
