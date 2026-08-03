import ServiceCard from "./ServiceCard";
import services from "../data/services";

function Services() {
  /*const services = [
    {
      title: "Tech Consultation",
      description:
        "Strategic technology consulting solutions designed to help businesses improve efficiency, streamline operations, and leverage modern digital tools.",
      shortDescription: "Modern technology solutions for your business.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900",
    },
    {
      title: "Cleaning Services",
      description:
        "Professional cleaning solutions designed to maintain clean, safe, and welcoming environments for businesses and organizations.",
      shortDescription: "Maintaining clean, safe, and welcoming environments.",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900",
    },

    {
      title: "Security Detail",
      description:
        "Professional security solutions focused on protecting people, property, and events through trained and dependable personnel.",
      shortDescription: "Professional protection for businesses and events.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Modern_Bouncers.jpg/960px-Modern_Bouncers.jpg",
    },
    {
      title: "Personal Training",
      description:
        "Customized fitness programs designed to help individuals improve strength, health, and overall wellness.",
      shortDescription: "Personal training to meet your fitness goals.",
      image:
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=900",
    },
    {
      title: "Lawn Care",
      description:
        "Professional lawn care and property maintenance solutions designed to keep outdoor spaces clean, attractive, and well-maintained.",
      shortDescription: "Landscaping to give your home or business a professional look.",
      image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=900",
    },
  ];*/

  return (
    <section
      id="services"
      style={{
        padding: "80px 40px",
        backgroundColor: "#f8fafc",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#0f172a",
          fontSize: "2.5rem",
          marginBottom: "50px",
        }}
      >
        Our Services
      </h2>

      <div
        className="services-container"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}

export default Services;
