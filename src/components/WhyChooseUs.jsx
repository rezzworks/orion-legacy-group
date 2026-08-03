function WhyChooseUs() {

  const reasons = [
    {
      title: "Professional Expertise",
      description:
        "Our team brings experience, dedication, and professionalism to every engagement, ensuring reliable solutions tailored to our clients' needs.",
      icon: "⭐",
    },

    {
      title: "Customized Solutions",
      description:
        "We understand that every client is unique. Orion Legacy Group provides flexible solutions designed around your specific goals and challenges.",
      icon: "🎯",
    },

    {
      title: "Commitment to Quality",
      description:
        "We take pride in delivering dependable service with attention to detail, accountability, and a commitment to exceeding expectations.",
      icon: "🏆",
    },

    {
      title: "Technology-Driven Approach",
      description:
        "Through innovative tools and modern technology strategies, we help organizations improve efficiency and adapt to a changing world.",
      icon: "💻",
    },
  ];


  return (

    <section
      id="why-us"
      className="why-section"
    >

      <div className="why-container">


        <div className="why-header">

          <h2>
            Why Choose Orion Legacy Group?
          </h2>

          <p>
            We combine professional services, innovation, and a
            commitment to excellence to deliver solutions that make
            a lasting impact.
          </p>

        </div>



        <div className="why-cards">


          {reasons.map((reason, index) => (

            <div
              className="why-card"
              key={index}
            >

              <div className="why-icon">
                {reason.icon}
              </div>


              <h3>
                {reason.title}
              </h3>


              <p>
                {reason.description}
              </p>


            </div>

          ))}


        </div>


      </div>


    </section>

  );

}


export default WhyChooseUs;