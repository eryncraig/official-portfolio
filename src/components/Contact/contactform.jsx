import React, { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import styles from './contactform.module.css';
import ObfuscatedEmail from './obfusc-email';

export const ContactForm = () => {
  const recaptchaRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const recaptchaValue = recaptchaRef.current.getValue();

    if (form.honeypot.value === "" && recaptchaValue) {
      const formData = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://formspree.io/f/mnnanyey'); //sign up for Formspree and use your form id url here
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          alert('Message sent successfully!');
          form.reset();
          recaptchaRef.current.reset();
        } else {
          alert('Error sending message.');
        }
      };
      xhr.send(formData);
    } else {
      alert('Please complete the CAPTCHA.')
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input className={styles.name} type="text" name="name" placeholder="Your Name" required />
        <input className={styles.email} type="email" name="email" placeholder="Your Email" required />
        <textarea className={styles.message} name="message" placeholder="Your Message" required></textarea>
        <input type="text" name="honeypot" style={{ display: 'none' }} />
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6LfGORMqAAAAACsf2mW2dBmQGEuD7Fl7JdxnjT5v"
          className={styles.captcha}
        />
        <button className={styles.button} type="submit">Submit</button>
      </form>
      <div>
        <p className={styles.form}>
          If the above form does not work, you can email me at: <ObfuscatedEmail />
        </p>
      </div>
    </div>
  );
}
