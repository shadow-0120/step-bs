import React, { useRef } from 'react';
import Users from './Users';
import './testimonials.css';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

// framer motion
import { motion, useInView } from 'framer-motion';

export default function Testimonials() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  // Variants for the whole section scroll animation
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  // Variants for each slide animation
  const slideVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.section
      className="testimonials"
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <div className="testimonials-title">
        <h1>Our <span>Happy</span> Students Say About Us</h1>
        <p>
          We take pride in creating an inspiring learning environment where students feel supported and motivated.
        </p>
      </div>

      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {Users.map(({ id, names, image, job, review }) => (
          <SwiperSlide className="testimonilas-container" key={id}>
            <motion.div
              className="testimonial-slide-content"
              variants={slideVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="testimonial-img">
                <img src={image} alt={names} />
              </div>
              <div className="testimonial-content">
                <h3 className='testimonial-name'>{names}</h3>
                <p className="testimonial-job">{job}</p>
                <p className="testimonial-review">{review}</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
}
