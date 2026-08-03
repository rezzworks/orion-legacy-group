import "../styles/About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Image Section */}

        <motion.div
          className="about-image-container"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900"
            alt="Professional team meeting"
            className="about-image"
          />
        </motion.div>

        {/* Text Section */}

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <h2>About Orion Legacy Group, LLC</h2>

          <p>
            Orion Legacy Group, LLC is committed to providing dependable,
            professional services that help organizations and individuals
            thrive. Our mission is built on integrity, reliability, and
            excellence in every service we provide.
          </p>

          <p>
            Through our custodial services, security solutions, and personal
            training programs, we focus on delivering customized solutions
            designed around the unique needs of our clients.
          </p>

          <button className="about-button">Learn More About Us</button>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
