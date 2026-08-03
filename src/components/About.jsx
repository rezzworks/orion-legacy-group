import "../styles/About.css";

function About() {
  return (
    <section id="about" className="about-section">

      <div className="about-container">

        {/* Image Section */}

        <div className="about-image-container">

          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900"
            alt="Professional team meeting"
            className="about-image"
          />

        </div>


        {/* Text Section */}

        <div className="about-content">

          <h2>
            About Orion Legacy Group, LLC
          </h2>


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


          <button className="about-button">
            Learn More About Us
          </button>


        </div>

      </div>

    </section>
  );
}

export default About;