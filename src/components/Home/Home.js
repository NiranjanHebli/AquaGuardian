import React from 'react';
import './Home.css';
import Button from '../Button/Button';
import Slideshow from '../Slideshow/Slideshow';
import Newsletter from '../Newsletter/Newsletter';
const Home = () => {
  return (<>
    <div className="my-2">
    <Slideshow />
  </div>

    <div className="home-page">
       <div className="">
      <div className="hero-section">
        <h1 className="title">Join the movement for sustainable water development</h1>
        <p className="subtitle">Together, we can make a difference.</p>
        <Button text="Get Involved" />
      </div>

      <div className="initiatives-section">
        <h2 className="section-title">Our Initiatives</h2>
        <div className="initiatives-grid">
          <div className="initiative-card">
            <h3 className="initiative-title">Water Conservation</h3>
            <p className="initiative-text">Promoting water conservation and efficient water use.</p>
            <Button text="Learn More" />
          </div>
          <div className="initiative-card">
            <h3 className="initiative-title">Clean Water</h3>
            <p className="initiative-text">Ensuring access to clean and safe drinking water for all.</p>
            <Button text="Learn More" />
          </div>
          <div className="initiative-card">
            <h3 className="initiative-title">Sustainable Agriculture</h3>
            <p className="initiative-text">Supporting sustainable agricultural practices to reduce water use.</p>
            <Button text="Learn More" />
          </div>
        </div>
      </div>
      <div className="cta-section">
        <h2 className="section-title">Join the Movement</h2>
        <p className="section-text">
          Together, we can create a more sustainable future for our planet. Join us and make a difference today!
        </p>
        <Button text="Get Involved" />
      </div>
    </div>
          <Newsletter />
    </div>
    </>
  );
};

export default Home;