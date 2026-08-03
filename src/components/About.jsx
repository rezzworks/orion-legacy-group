function About() {
  return (
    <section
      id="about"
      style={{
        padding: "80px 40px",
        backgroundColor: "#ffffff",
      }}
    >
      <div
        className="about-container"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: "50px",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        {/* Image Section */}

        <div
          style={{
            flex: "1",
            minWidth: "300px",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900"
            alt="Professional team meeting"
            style={{
              width: "100%",
              borderRadius: "12px",
            }}
          />
        </div>

        {/* Text Section */}

        <div
          style={{
            flex: "1",
            minWidth: "300px",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              color: "#0f172a",
              marginBottom: "20px",
            }}
          >
            About Orion Legacy Group, LLC
          </h2>

          <p
            style={{
              color: "#475569",
              lineHeight: "1.8",
              fontSize: "1.1rem",
            }}
          >
            Orion Legacy Group, LLC is committed to providing dependable,
            professional services that help organizations and individuals
            thrive. Our mission is built on integrity, reliability, and
            excellence in every service we provide.
          </p>

          <p
            style={{
              color: "#475569",
              lineHeight: "1.8",
              fontSize: "1.1rem",
              marginTop: "15px",
            }}
          >
            Through our custodial services, security solutions, and personal
            training programs, we focus on delivering customized solutions
            designed around the unique needs of our clients.
          </p>

          <button
            style={{
              marginTop: "25px",
              padding: "14px 30px",
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Learn More About Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
