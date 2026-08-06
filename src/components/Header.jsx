import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import "../styles/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={scrolled ? "header scrolled" : "header"}>
      <div className="header-container">
        <HashLink smooth to="/#home" className="logo" onClick={closeMenu}>
          Orion Legacy Group, LLC
        </HashLink>

        {/* Desktop Navigation */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <HashLink smooth to="/#home" onClick={closeMenu}>
            Home
          </HashLink>

          <HashLink smooth to="/#about" onClick={closeMenu}>
            About
          </HashLink>

          <HashLink smooth to="/#mission" onClick={closeMenu}>
            Mission
          </HashLink>

          <HashLink smooth to="/#why-us" onClick={closeMenu}>
            Why Choose Us
          </HashLink>

          <HashLink smooth to="/#services" onClick={closeMenu}>
            Services
          </HashLink>

          <HashLink smooth to="/#contact" onClick={closeMenu}>
            Contact
          </HashLink>
        </nav>

        {/* Hamburger Button */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}

export default Header;
