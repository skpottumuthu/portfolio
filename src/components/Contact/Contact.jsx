import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser'; // Updated import
import { motion } from 'framer-motion';

function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ submitted: false, success: false, message: '' });

    // EmailJS Parameters - Replace these with your actual values
    // Create an account at https://www.emailjs.com/ 
    // Add your service_id, template_id, and public key here
    emailjs.sendForm(
      'service_wlx51ka', // Your EmailJS Service ID
      'template_gkrtcij', // Your EmailJS Template ID
      formRef.current,
      '-XmCliNw_14lI2wIU' // Your EmailJS Public Key
    )
    .then((result) => {
      console.log('SUCCESS!', result.text);
      setFormData({ user_name: '', user_email: '', message: '' });
      setStatus({
        submitted: true,
        success: true,
        message: 'Thank you! Your message has been sent successfully.'
      });
      setIsSending(false);
    })
    .catch((error) => {
      console.error('FAILED...', error.text);
      setStatus({
        submitted: true,
        success: false,
        message: 'Something went wrong. Please try again or contact me directly via email.'
      });
      setIsSending(false);
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-100 via-gray-100 to-blue-200">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-extrabold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-900">Feel free to reach out for collaborations or just a friendly hello</p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-6 space-y-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Status Message */}
          {status.submitted && (
            <div className={`p-3 rounded-lg mb-4 ${status.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {status.message}
            </div>
          )}
          
          {/* Name Input */}
          <div>
            <label className="block text-left text-gray-900 font-semibold mb-2">Name</label>
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-left text-gray-900 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-left text-gray-900 font-semibold mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message here"
              rows="5"
              required
            ></textarea>
          </div>

          {/* Alternative Contact Method */}
          <p className="text-gray-900 text-sm pt-2">
            Alternatively, you can email me directly at: <a href="mailto:your.email@example.com" className="text-blue-600 font-medium hover:underline">your.email@example.com</a>
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            disabled={isSending}
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
