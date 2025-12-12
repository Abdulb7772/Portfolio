import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        'service_zgxvlu2',
        'template_1xxfasg',  // You need to create a template in EmailJS dashboard
        form.current,
        'PI7TlN8Gg5_A7nF-6'
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setSubmitStatus('success');
          setIsSubmitting(false);
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSubmitStatus('error');
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen py-24 px-6 bg-linear-to-br from-[#060131] via-[#212f5e] to-[#010225] flex flex-col justify-center items-center text-center px-4">
      <h2 className="text-4xl font-bold mt-5 mb-6">Contact Me</h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-lg space-y-4 mb-5 bg-white dark:bg-neutral-900 p-6 rounded-xl shadow"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded border bg-transparent text-gray-900 dark:text-gray-100"
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded border bg-transparent text-gray-900 dark:text-gray-100"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          required
          className="w-full p-3 rounded border bg-transparent text-gray-900 dark:text-gray-100"
        ></textarea>

        {submitStatus === 'success' && (
          <p className="text-green-600 dark:text-green-400">Message sent successfully!</p>
        )}
        
        {submitStatus === 'error' && (
          <p className="text-red-600 dark:text-red-400">Failed to send message. Please try again.</p>
        )}

        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
}
