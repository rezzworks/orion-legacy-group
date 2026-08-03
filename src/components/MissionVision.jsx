import "../styles/MissionVision.css";
import { motion } from "framer-motion";

function MissionVision() {

  return (

    <section
      id="mission"
      className="mission-section"
    >

      <div className="mission-container">


        <motion.div
          className="mission-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <h2>
            Our Mission
          </h2>

          <p>
            At Orion Legacy Group, LLC, our mission is to provide
            reliable, professional, and innovative solutions that
            empower businesses and individuals through exceptional
            service, advanced technology, security, and wellness
            initiatives.
          </p>

        </motion.div>



        <motion.div
          className="mission-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
        >

          <h2>
            Our Vision
          </h2>

          <p>
            Our vision is to become a trusted leader in integrated
            service solutions by building lasting relationships,
            embracing innovation, and delivering excellence in every
            community we serve.
          </p>

        </motion.div>



        <motion.div
          className="mission-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
        >

          <h2>
            Our Core Values
          </h2>


          <ul>

            <li>
              Integrity - Doing the right thing with honesty and accountability.
            </li>

            <li>
              Excellence - Delivering quality in every service we provide.
            </li>

            <li>
              Innovation - Using technology and creativity to solve problems.
            </li>

            <li>
              Commitment - Building long-term relationships with our clients.
            </li>

          </ul>


        </motion.div>


      </div>


    </section>

  );

}


export default MissionVision;