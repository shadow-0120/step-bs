// src/components/Partners/Partners.jsx
import React, { useState, useEffect } from 'react';
import './partner.css';

import partner1 from '../../assets/partner-1.png';
import partner2 from '../../assets/partner-2.png';
import partner3 from '../../assets/partner-3.png';
import partner4 from '../../assets/partner-4.png';

const partners = [partner1, partner2, partner3, partner4, partner1, partner2, partner3];

export default function Partners() {
  const [scrollDirection, setScrollDirection] = useState('down');

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const currentScrollY = window.pageYOffset;
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => window.removeEventListener('scroll', updateScrollDirection);
  }, []);

  const repeatedLogos = [...Array(5)].flatMap(() => partners);

  return (
    <section className="partners" id="partners">
      <h2 className="partners-title">Our Partners</h2>
      <div className="slider-container">
        <div className={`partners-logos ${scrollDirection === 'up' ? 'reverse' : ''}`}>
          {repeatedLogos.map((logo, index) => (
            <div className="partner-logo" key={index}>
              <img src={logo} alt={`Partner ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
