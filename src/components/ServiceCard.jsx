import { Link } from "react-router-dom";
import "../styles/ServiceCard.css";
import { motion } from "framer-motion";

function ServiceCard({ service }) {
  // console.log(service);
  return (
    <motion.div
      className="service-card"
      variants={{
        hidden: {
          opacity: 0,
          y: 40,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
          },
        },
      }}
      whileHover={{
        y: -8,
      }}
    >
      <img className="service-image" src={service.image} alt={service.title} />

      <div className="service-content">
        <h3 className="service-title">
          {service.title}
        </h3>

        <p className="service-description">
          {service.shortDescription}
        </p>

        <Link to={`/services/${service.id}`}>
          <button className="learn-more-btn">Learn More</button>
        </Link>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
