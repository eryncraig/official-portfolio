import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './contact.module.css';
import { ContactForm } from './contactform';
import ObfuscatedEmail from './obfusc-email';

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <div>
        <ContactForm />
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl('contact/emailIcon.png')} alt="email icon" />
          <ObfuscatedEmail />
        </li>
        <li className={styles.link}>
          <img src={getImageUrl('contact/linkedInIcon.png')} alt="linkedin icon" />
          <a href="https://www.linkedin.com/in/eryncraig/">linkedin.com/eryncraig</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl('contact/githubIcon.png')} alt="github icon" />
          <a href="https://www.github.com/eryncraig">github.com/eryncraig</a>
        </li>
      </ul>
    </footer>
  );
}
