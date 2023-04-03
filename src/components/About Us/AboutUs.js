import React from 'react';
import { useSpring, animated } from 'react-spring';
import { FaLaptopCode } from 'react-icons/fa';

const AboutUs = () => {
  const animation = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 500,
  });

  return (
    <div className="about-us-container">
      <animated.div style={animation}>
        <h1>
          {/* <FaLaptopCode className="about-us-icon" /> */}
          About Us
        </h1>
        <div className="about-section">
        <p className="section-text">
          At Aqua Guardian Organization, we are committed to promoting sustainable development
          of water through education, advocacy, and action. We believe that everyone has a role to play in creating a
          more sustainable future for our planet.
        </p>
      </div>
      </animated.div>
    </div>
  );
};

export default AboutUs;
