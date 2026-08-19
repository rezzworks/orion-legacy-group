import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import ServiceCard from "../components/ServiceCard";

import services from "../data/services";
import "../styles/ServiceDetails.css";

function ServiceDetails() {
  const { id } = useParams();

  const service = services.find((s) => s.id === id);

  const pageTitle = service
    ? `${service.title} | Orion Legacy Group, LLC`
    : "Service Not Found | Orion Legacy Group, LLC";

  const pageDescription = service
    ? service.description
    : "The requested service could not be found.";

  const canonicalUrl = service
    ? `https://orionlegacygroup.org/services/${service.id}`
    : "https://orionlegacygroup.org/";

  const relatedServices = services
    .filter((s) => s.id !== id)
    .slice(0, 3);

  if (!service) {
    return (
      <section className="service-not-found">
        <h1>Service Not Found</h1>
        <p>The requested service could not be found.</p>

        <Link to="/">Return Home</Link>
      </section>
    );
  }

  return (
    <>
      <title>{pageTitle}</title>

      <meta name="description" content={pageDescription} />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Orion Legacy Group, LLC" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />

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
            <h1>{service.title}</h1>

            <p>{service.description}</p>
          </motion.div>
        </section>

        <section className="service-breadcrumb">
          <HashLink smooth to="/#services" className="back-link">
            ← Back to All Services
          </HashLink>
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
              once: true,
            }}
          >
            Our Service Offerings
          </motion.h2>

          <div className="benefits-grid">
            {service.benefits.map((benefit, index) => (
              <motion.div
                className="benefit-card"
                key={benefit}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
              >
                {benefit}
              </motion.div>
            ))}
          </div>
        </section>

        <section className="service-content">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Process
          </motion.h2>

          <motion.div
            className="benefits-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                className="benefit-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3>Step {index + 1}</h3>
                <p>{step}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="service-content">
          <h2>Why Choose Orion Legacy Group?</h2>

          <div className="benefits-grid">
            {service.whyChooseUs.map((item, index) => (
              <div className="benefit-card" key={index}>
                <h3>✔</h3>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="service-cta">
          <h2>Ready to Get Started?</h2>

          <p>{service.cta}</p>

          <HashLink smooth to="/#contact">
            <button className="service-button">
              Request a Free Consultation
            </button>
          </HashLink>
        </section>

        <section className="service-content">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Explore Our Other Services
          </motion.h2>

          <motion.div
            className="related-services"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {relatedServices.map((relatedService) => (
              <ServiceCard
                key={relatedService.id}
                service={relatedService}
              />
            ))}
          </motion.div>
        </section>

        {/* Call To Action */}
        {/*
        <section className="service-cta">
          <h2>Ready to Get Started?</h2>

          <p>{service.cta}</p>

          <Link to="/#contact">
            <button className="service-button">
              Contact Orion Legacy Group
            </button>
          </Link>
        </section>
        */}
      </div>
    </>
  );
}

export default ServiceDetails;
