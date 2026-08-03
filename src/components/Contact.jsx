import { useState } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Thank you for contacting Orion Legacy Group!");
  };

  return (
    <section
      id="contact"
      style={{
        padding: "80px 40px",
        backgroundColor: "#ffffff",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          color: "#0f172a",
          marginBottom: "40px",
        }}
      >
        Contact Us
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          maxWidth: "700px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          style={inputStyle}
        />

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Select a Service</option>

          <option value="Custodial Services">Custodial Services</option>

          <option value="Security Services">Security Services</option>

          <option value="Personal Training">Personal Training</option>

          <option value="Tech Consultation Services">
            Tech Consultation Services
          </option>

          <option value="Lawn Care Services">Lawn Care Services</option>
        </select>

        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <button
          type="submit"
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            padding: "15px",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

const inputStyle = {
  padding: "14px",

  borderRadius: "6px",

  border: "1px solid #cbd5e1",

  fontSize: "16px",
};

export default Contact;
