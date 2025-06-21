import React from 'react';
import { motion } from 'framer-motion';
import './hero.css';


import heroImg from '../../assets/hero.png';
import user1 from '../../assets/uesr-1.jpeg';
import user2 from '../../assets/user-2.jpeg';
import user3 from '../../assets/user-3.jpeg';

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const rateImageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

export default function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-info"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        <motion.div className="info-text" variants={textVariants}>
          <h1 className="hero-title">
            Never Stop <span className="bold-text">Learning</span> To be{' '}
            <span className="bold-text">Expert</span>
          </h1>
          <p className="hero-description">
            Join our community of learners and experts. Explore a wide range of courses
            designed to help you master new skills and advance your career.
          </p>
        </motion.div>

        <motion.div className="info-action" variants={textVariants}>
          <h3 className="consultation-title">Get Consultation</h3>
          <div className="hero-contact">
            <i className="bx bx-envelope"></i>
            <input type="email" placeholder="Your email address" name="email" />
            <button type="button">Get Started</button>
          </div>

          <div className="hero-rate">
            <motion.div
              className="hero-rate-images"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
            >
              <motion.img src={user1} alt="User 1" variants={rateImageVariants} />
              <motion.img src={user2} alt="User 2" variants={rateImageVariants} />
              <motion.img src={user3} alt="User 3" variants={rateImageVariants} />
            </motion.div>
            <p className="rate-info">
              <span className="number">12k+</span> Regular Users
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-image"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={imageVariants}
      >
        <img src={heroImg} alt="Main hero section" />
      </motion.div>
    </section>
  );
}
