import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../styles/Hero.css";

function Hero() {
  const slides = [
    {
      title: "Integrated Solutions for Modern Businesses",
      description:
        "Orion Legacy Group provides professional services designed to support organizations through operational excellence, security, wellness, and technology solutions.",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600",
    },

    {
      title: "Professional Custodial Services",
      description:
        "Maintaining clean, safe, and welcoming environments through dependable facility support solutions.",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600",
    },

    {
      title: "Professional Security Services",
      description:
        "Providing trained security professionals to protect businesses, events, and properties with professionalism and confidence.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Modern_Bouncers.jpg/960px-Modern_Bouncers.jpg",
    },

    {
      title: "Technology Consultation & Digital Solutions",
      description:
        "Helping businesses improve efficiency through technology strategy, website solutions, automation, and digital innovation.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600",
    },

    {
      title: "Personal Training & Wellness",
      description:
        "Customized fitness solutions designed to help individuals improve strength, health, and overall quality of life.",
      image:
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1600",
    },
    {
      title: "Professional Lawn Care Services",
      description:
        "Enhancing outdoor spaces with dependable lawn maintenance and property care solutions.",
      image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1600",
    },
  ];

  return (
    <section id="home">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="hero-slider"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero-slide"
              style={{
                backgroundImage: `linear-gradient(
      rgba(15,23,42,.70),
      rgba(15,23,42,.70)
    ),
    url(${slide.image})`,
              }}
            >
              <h1 className="hero-title">{slide.title}</h1>

              <p className="hero-description"></p>

              <button
                className="hero-button"
                onClick={() =>
                  document
                    .getElementById("services")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Our Services
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <p className="hero-tagline">
        Excellence in Service. Innovation in Technology. Commitment to Your
        Success.
      </p>
    </section>
  );
}

export default Hero;
