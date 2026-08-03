import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Information */}
        <div className="footer-column">
          <h3>Orion Legacy Group, LLC</h3>

          <p>
            Providing professional custodial, security, and personal training
            solutions designed to serve businesses and individuals with
            excellence, integrity, and commitment.
          </p>
        </div>

        {/* Contact Information */}
        {/* Contact Information */}
        <div className="footer-column">
          <h3>Contact Us</h3>

          <p>
            📍 3419 Virginia Beach Blvd
            <br />
            Virginia Beach, VA 23452
            <br />
            #5395
          </p>

          <p>
            ☎{" "}
            <a href="tel:+17576468087" className="footer-link">
              (757) 646-8087
            </a>
          </p>

          <p>
            ✉{" "}
            <a href="mailto:info@orionlegacygroup.com" className="footer-link">
              info@orionlegacygroup.com
            </a>
          </p>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3>Services</h3>

          <ul>
            <li>Custodial Services</li>

            <li>Security Services</li>

            <li>Personal Training</li>

            <li>Tech Consultations</li>

            <li>Lawn Care Services</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-column">
          <h3>Follow Us</h3>

          <div className="social-links">
            <a href="#">Facebook</a>

            <a href="#">Instagram</a>

            <a href="#">LinkedIn</a>

            <a href="#">X / Twitter</a>
          </div>
        </div>
      </div>

      {/* Google Map */}

      <div className="map-container">
        <iframe
          className="map-frame"
          title="Orion Legacy Group Location"
          src="https://www.google.com/maps?q=3419+Virginia+Beach+Blvd,+Virginia+Beach,+VA+23452&output=embed"
          loading="lazy"
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Bottom Footer */}

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Orion Legacy Group, LLC. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
