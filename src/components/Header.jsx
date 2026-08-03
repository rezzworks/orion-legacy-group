import { useState, useEffect } from "react";

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
        <div className="logo">Orion Legacy Group, LLC</div>

        {/* Desktop Navigation */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#mission" onClick={closeMenu}>
            Mission
          </a>

          <a href="#why-us" onClick={closeMenu}>
            Why Choose Us
          </a>

          <a href="#services" onClick={closeMenu}>
            Services
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        {/* Hamburger Button */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>
    </header>
  );
}

export default Header;
