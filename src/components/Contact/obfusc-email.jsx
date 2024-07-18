import React from 'react';
import styles from './contactform.module.css';

export default function ObfuscatedEmail() {
  const email = ['erynlcraig', 'gmail.com'];

  const obfuscatedEmail = `${email[0]}@${email[1]}`;
  const mailToLink = `mailto:${obfuscatedEmail}`

  return (
    <span className={styles.obfuscatedEmail}>
      <a href={mailToLink}>
        {obfuscatedEmail}
      </a>
    </span>
  );
}
