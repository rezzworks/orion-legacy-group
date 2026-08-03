import "../styles/WhyChooseUs.css";
import { motion } from "framer-motion";

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


        <motion.div
          className="why-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <h2>
            Why Choose Orion Legacy Group?
          </h2>

          <p>
            We combine professional services, innovation, and a
            commitment to excellence to deliver solutions that make
            a lasting impact.
          </p>

        </motion.div>



        <div className="why-cards">


          {reasons.map((reason, index) => (

            <motion.div
              className="why-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
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


            </motion.div>

          ))}


        </div>


      </div>


    </section>

  );

}


export default WhyChooseUs;