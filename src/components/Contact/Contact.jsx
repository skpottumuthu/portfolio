import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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

    setIsSending(true); // Show a loading state while sending the email

    // EmailJS Parameters
    const serviceID = 'your_service_id'; // Replace with your EmailJS Service ID
    const templateID = 'your_template_id'; // Replace with your EmailJS Template ID
    const publicKey = 'your_public_key'; // Replace with your EmailJS Public Key

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Your message has been sent!');
          setFormData({ name: '', email: '', message: '' }); // Reset form
        },
        (error) => {
          console.error('FAILED...', error);
          alert('Failed to send message. Please try again later.');
        }
      )
      .finally(() => {
        setIsSending(false); // Remove the loading state
      });
  };

  return (
    <section id="contact" className="mt-16 p-8 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Me</h2>
        <p className="text-lg text-gray-600 mb-8">
          Feel free to reach out to me for any inquiries, collaborations, or just to connect!
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-left text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-left text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-left text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write your message here"
              rows="5"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
            disabled={isSending} // Disable button while sending
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
