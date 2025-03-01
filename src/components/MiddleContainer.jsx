import React from 'react';
import homeLuxury from '../assets/images/luxury-home.png';
import './styles/MiddleContainer.css';

function MiddleContainer() {
  return (
    <div className="middle-container">
      <div className="image-container ">
        <img className='w-[595px] h-[416px]' src={homeLuxury} alt="Luxury home" />
      </div>
      <div className="text-container">
        <h2>We Help You To Find Your Dream Home</h2>
        <p className="caption">
          From cozy cottages to luxurious estates, our dedicated team guides you through every step of the journey, ensuring your dream home becomes a reality
        </p>
        <div className="statistics">
          <div className="statistic-item">
            <h3>8K+</h3>
            <p>Houses Available</p>
          </div>
          <div className="statistic-item">
            <h3>6K+</h3>
            <p>Houses Sold</p>
          </div>
          <div className="statistic-item">
            <h3>2K+</h3>
            <p>Trusted Agents</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleContainer;