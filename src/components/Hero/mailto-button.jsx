import React from 'react';
import styles from './hero.module.css';

function MailtoButton() {
  const email = ['erynlcraig', 'gmail.com'];
  const obfuscatedEmail = `${email[0]}@${email[1]}`;
  const mailtoLink = `mailto:${obfuscatedEmail}`;

  const handleClick = () => {
    window.location.href = mailtoLink;
  };

  return (
    <button onClick={handleClick} className={styles.contactBtn}>
      Contact Me
    </button>
  );
}

export default MailtoButton;