import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './contact.module.css';

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl('contact/emailIcon.png')} alt="email icon" />
          <a href="mailto:myemail@mail.com">myemail@email.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl('contact/linkedInIcon.png')} alt="linkedin icon" />
          <a href="https://www.linkedin.com/myname">linkedin.com/myname</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl('contact/githubIcon.png')} alt="github icon" />
          <a href="https://www.github.com/eryncraig">github.com/eryncraig</a>
        </li>
      </ul>
    </footer>
  );
}
