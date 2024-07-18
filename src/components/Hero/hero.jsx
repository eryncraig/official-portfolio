import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './hero.module.css'
import MailtoButton from './mailto-button';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title} id='hero'>Hi, I'm Eryn</h1>
        <p className={styles.description}>I’m a full-stack developer with 3 years
          of experience using React and NodeJS.
          Reach out if you’d like to learn more!</p>
        <MailtoButton />
      </div>
      <img src={getImageUrl("hero/avatar7.png")} alt="Hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>);
}
