import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

const SkillsMarquee = () => {
  return (
    <div className={styles.skillsContainer}>
      <div className={styles.marquee}>
        {skills.concat(skills).map((skill, id) => (
          <div key={id} className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img
                src={getImageUrl(skill.imageSrc)}
                alt={skill.title}
              />
            </div>
            <p>{skill.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ExperienceTimeline = () => {
  return (
    <div className={styles.timeline}>
      {history.map((historyItem, id) => (
        <div key={id} className={styles.timelineItem}>
          <div className={styles.timelineDot}></div>
          <div className={styles.timelineContent}>
            <div className={styles.timelineHeader}>
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organisation} Logo`}
                className={styles.companyLogo}
              />
              <div>
                <h3>{historyItem.role}</h3>
                <p className={styles.company}>
                  {historyItem.organisation}
                </p>
                <p
                  className={
                    styles.date
                  }>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
              </div>
            </div>
            <ul className={styles.experienceList}>
              {historyItem.experiences.map(
                (experience, id) => (
                  <li key={id}>{experience}</li>
                )
              )}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.section}>
          <h3 className={styles.subtitle}>Skills</h3>
          <SkillsMarquee />
        </div>
        <div className={styles.section}>
          <h3 className={styles.subtitle}>Work History</h3>
          <ExperienceTimeline />
        </div>
      </div>
    </section>
  );
};
