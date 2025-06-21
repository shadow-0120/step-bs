import React, { useState, useEffect } from 'react';
import './partner.css';

const partners = [
  'partner-1.png',
  'partner-2.png',
  'partner-3.png',
  'paratner-4.png',  // fixed typo
  'partner-1.png',
  'partner-2.png',
  'partner-3.png',
];

export default function Partners() {
  const [scrollDirection, setScrollDirection] = useState('down'); // 'down' or 'up'

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

    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, []);

  const repeatedLogos = [...Array(5)].flatMap(() => partners);

  return (
    <section className="partners" id='partners'>
      <h2 className="partners-title">Our Partners</h2>
      <div className="slider-container">
        {/* Add a class based on scroll direction */}
        <div
          className={`partners-logos ${
            scrollDirection === 'up' ? 'reverse' : ''
          }`}
        >
          {repeatedLogos.map((logo, index) => (
            <div className="partner-logo" key={index}>
              <img
                src={`${import.meta.env.BASE_URL}src/assets/${logo}`}
                alt={`Partner ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
