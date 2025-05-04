// ContactPage.jsx
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { EarthCanvas } from './canvas/Earth';
import { slideIn } from '../utils/motion';

const Contact = () => {
  console.log('Contact component is rendering');
  
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
        {
          from_name: form.name,
          to_name: process.env.REACT_APP_EMAILJS_TO_NAME || 'Your Name',
          from_email: form.email,
          to_email: process.env.REACT_APP_EMAILJS_TO_EMAIL || 'your_email@example.com',
          message: form.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
      )
      .then(
        () => {
          setLoading(false);
          alert('Message sent successfully!');
          setForm({ name: '', email: '', message: '' });
        },
        (error) => {
          setLoading(false);
          console.error('Error:', error);
          alert('Failed to send the message. Please try again.');
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden p-6 rounded-lg">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.5] bg-gray-900 p-8 rounded-2xl w-full max-w-lg mx-auto"
      >
        <p className="text-secondary">Get in touch</p>
        <h3 className="text-white text-4xl font-bold ">Contact</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-6"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-2 px-4 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-2 px-4  placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-2 px-4  placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit bg-slate-500 text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[450px] h-[300px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default Contact;
