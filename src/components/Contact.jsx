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

    // Validation: Ensure all fields are filled
    if (!form.name || !form.email || !form.message) {
      alert("All fields are required!");
      return;
    }

    console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log("Template ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Use environment variable
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Use environment variable
        {
          from_name: form.name,
          to_name: "Lipsa Porel", // Updated recipient name
          from_email: form.email,
          to_email: "porellipsa@gmail.com", // Updated recipient email
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Use environment variable
      )
      .then(
        () => {
          setLoading(false);
          alert("Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error("Error:", error);
          alert(`Failed to send the message. Error: ${error.text}`);
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-6 sm:gap-10 overflow-hidden p-4 sm:p-6 rounded-lg">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.5] bg-gray-900 p-6 sm:p-8 rounded-2xl w-full max-w-md sm:max-w-lg mx-auto"
      >
        <p className="text-secondary text-sm sm:text-base">Get in touch</p>
        <h3 className="text-white text-2xl sm:text-4xl font-bold">Contact</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-6 sm:mt-8 flex flex-col gap-4 sm:gap-6"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2 sm:mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-2 px-3 sm:py-2 sm:px-4 placeholder:text-secondary text-black rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2 sm:mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-2 px-3 sm:py-2 sm:px-4 placeholder:text-secondary text-black rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2 sm:mb-4">Your Message</span>
            <textarea
              rows={3}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-2 px-3 sm:py-2 sm:px-4 placeholder:text-secondary text-black rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-2 px-6 sm:py-3 sm:px-8 outline-none w-fit bg-slate-500 text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[350px] sm:h-[450px] h-[300px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default Contact;
