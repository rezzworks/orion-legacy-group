import { Link } from "react-router-dom";
import "../styles/ServiceCard.css";

function ServiceCard({ service }) {
  // console.log(service);
  return (
    <div className="service-card">
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
    </div>
  );
}

export default ServiceCard;
