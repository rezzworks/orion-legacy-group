import { useParams } from "react-router-dom";
import services from "../data/services";

function ServiceDetails() {
  const { id } = useParams();

  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div style={{ padding: "100px 40px" }}>
        <h1>Service Not Found</h1>
        <p>The requested service could not be found.</p>
      </div>
    );
  }

  return (
    <div>

      {/* Hero Section */}
      <section
        style={{
          height: "60vh",
          backgroundImage: `
            linear-gradient(
              rgba(15,23,42,.70),
              rgba(15,23,42,.70)
            ),
            url(${service.image})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          padding: "20px",
        }}
      >
        <div>
          <h1 style={{ fontSize: "3rem" }}>
            {service.title}
          </h1>

          <p
            style={{
              maxWidth: "700px",
              margin: "20px auto",
              lineHeight: "1.8",
            }}
          >
            {service.description}
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        style={{
          padding: "80px 40px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2>Our Services Include</h2>

        <ul
          style={{
            marginTop: "30px",
            lineHeight: "2",
            fontSize: "18px",
          }}
        >
          {service.benefits.map((benefit) => (
            <li key={benefit}>
              {benefit}
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
}

export default ServiceDetails;