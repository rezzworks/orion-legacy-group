import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

import services from "../data/services";
import "../styles/ServiceDetails.css";

function ServiceDetails() {
  const { id } = useParams();

  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <section className="service-not-found">
        <h1>Service Not Found</h1>
        <p>The requested service could not be found.</p>

        <Link to="/">
          Return Home
        </Link>
      </section>
    );
  }

  return (
    <div className="service-details">

      {/* Hero Section */}

      <section
        className="service-hero"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(15,23,42,.70),
              rgba(15,23,42,.70)
            ),
            url(${service.image})
          `,
        }}
      >

        <motion.div
          className="service-hero-content"
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
        >

          <h1>
            {service.title}
          </h1>

          <p>
            {service.description}
          </p>

        </motion.div>

      </section>



      {/* Benefits Section */}

      <section className="service-content">

        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once:true,
          }}
        >
          Our Services Include
        </motion.h2>


        <div className="benefits-grid">

          {service.benefits.map((benefit,index)=>(

            <motion.div
              className="benefit-card"
              key={benefit}
              initial={{
                opacity:0,
                y:30,
              }}
              whileInView={{
                opacity:1,
                y:0,
              }}
              viewport={{
                once:true,
              }}
              transition={{
                delay:index * .1,
              }}
            >

              {benefit}

            </motion.div>

          ))}

        </div>


      </section>



      {/* Call To Action */}

      <section className="service-cta">

        <h2>
          Ready to Get Started?
        </h2>

        <p>
          {service.cta}
        </p>


        <Link to="/#contact">

          <button className="service-button">
            Contact Orion Legacy Group
          </button>

        </Link>


      </section>


    </div>
  );
}

export default ServiceDetails;