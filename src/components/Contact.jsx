import { useState } from "react";
import "../styles/Contact.css";
import { motion } from "framer-motion";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://orion-legacy-group-backend.onrender.com/api/contact",
        formData,
      );

      alert("Thank you for contacting Orion Legacy Group!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      alert("There was an error submitting your request.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.h2
          className="contact-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="contact-form"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="contact-input"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="contact-input"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="contact-input"
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="contact-input"
          >
            <option value="">Select a Service</option>

            <option value="Custodial Services">Custodial Services</option>

            <option value="Security Services">Security Services</option>

            <option value="Personal Training">Personal Training</option>

            <option value="Tech Consultation Services">
              Tech Consultation Services
            </option>

            <option value="Lawn Care Services">Lawn Care Services</option>

            <option value="Employment/Contractor Inquiry">
              Employment/Contractor Inquiry
            </option>

            <option value="Other">Other</option>
          </select>

          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="contact-input"
          />

          <button type="submit" className="contact-button">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
