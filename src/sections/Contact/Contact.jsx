import { useState } from 'react';
import { toast } from 'react-toastify';
import styles from './ContactStyles.module.css'

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c962e6ed-3fbc-4e13-846b-b4f2f014e3f8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success('Message Sent!');
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <section id='Contact' className={styles.container}>
      <h1 className='sectionTitle'>Contact Me</h1>
      <form onSubmit={onSubmit}>
        <input type="hidden" name="subject" value="New Message From Your Portfolio" />
        <div className='formGroup'>
          <label htmlFor="name" hidden>Name</label>
          <input type="text" name="name" id="name" placeholder='Name' required />
        </div>
        <div className='formGroup'>
          <label htmlFor="email" hidden>Email</label>
          <input type="text" name="email" id="email" placeholder='Email' required />
        </div>
        <div className='formGroup'>
          <label htmlFor="message" hidden>Message</label>
          <textarea name="message" id="message" placeholder='Message' required>
          </textarea>
        </div>
        <button type="submit" className='hover btn'>{result ? result : 'Send Message'}</button>
      </form>
    </section>
  )
}

export default Contact