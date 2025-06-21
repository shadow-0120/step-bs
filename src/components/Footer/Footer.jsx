import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './footer.css'

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  const iconHover = {
    scale: 1.2,
    color: '#457b9d',
    transition: { type: 'spring', stiffness: 300 },
  };

  const linkHover = {
    color: '#457b9d',
    transition: { duration: 0.3 },
  };

  const buttonHover = {
    scale: 1.05,
    backgroundColor: '#2a5d82',
    transition: { duration: 0.3 },
  };

  return (
    <motion.footer
      className="footer"
      ref={ref}
      id='contact'
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <motion.div className="footer-grid">
        <motion.div className="section section-1" variants={sectionVariants}>
          <h1>Step By Step</h1>
          <p>Join our community of learners and educators to explore a world of knowledge.</p>
          <div className="email-input">
            <input
              type="email"
              placeholder="Your Email"
              aria-label="Email address"
              onFocus={(e) => e.target.style.borderColor = '#457b9d'}
              onBlur={(e) => e.target.style.borderColor = ''}
            />
            <motion.button
              whileHover={buttonHover}
              aria-label="Submit email"
              type="submit"
            >
              <i className="fa-solid fa-arrow-right"></i>
            </motion.button>
          </div>
          <div className="social-media">
            {['facebook-f', 'instagram', 'linkedin-in', 'x-twitter'].map((icon, i) => (
              <motion.a
                key={i}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={iconHover}
                aria-label={icon.replace('-', ' ')}
              >
                <i className={`fa-brands fa-${icon}`}></i>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div className="section section-2" variants={sectionVariants}>
          <h2>Quick Links</h2>
          <ul>
            {['Home', 'About', 'Courses', 'Contact Us'].map((link, i) => (
              <motion.li key={i} whileHover={linkHover}>
                <a href="#">{link}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div className="section section-3" variants={sectionVariants}>
          <h2>Contact</h2>
          <div className="contact-info">
            <i className="fa-solid fa-phone"></i>
            <a href="tel:+2130666 19 69 78
">+213 0666 19 69 78
</a>
          </div>
          <div className="contact-info">
            <i className="fa-solid fa-envelope"></i>
            <a href="mailto:stepbystep@gmail.com">stepbystep@gmail.com</a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div className="copyright" variants={sectionVariants}>
        <p>Terms and Conditions | Privacy Policy</p>
        <p>© Step By Step School | All rights reserved</p>
      </motion.div>
    </motion.footer>
  );
}
