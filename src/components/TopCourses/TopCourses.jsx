// src/components/TopCourses/TopCourses.jsx
import React from 'react';
import './topcourses.css';
import Data from './Data';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { motion } from 'framer-motion';

export default function TopCourses() {
  const renderStars = (rating) => {
    const roundedRating = Math.round(rating);
    const fullStars = Array.from({ length: roundedRating }, (_, i) => (
      <i key={`full-${i}`} className="fa-solid fa-star"></i>
    ));
    const emptyStars = Array.from({ length: 5 - roundedRating }, (_, i) => (
      <i key={`empty-${i}`} className="fa-regular fa-star"></i>
    ));
    return [...fullStars, ...emptyStars];
  };

  // Motion variants for scroll reveal animations
  const cardVariants = {
    hidden: { opacity: 0, y: 40},
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="top-courses" id='courses'>
      {/* Animate the section title on scroll */}
      <motion.div
        className="top-courses-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={titleVariants}
      >
        <h1 className="top-courses-title-h1">
          Browse Our <span>Top</span> Courses
        </h1>
        <p className="top-courses-title-p">
          Welcome to our renowned educational platform, where we offer
          a diverse range of top-tier courses designed to empower
          learners of all levels.
        </p>
      </motion.div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="top-courses-swiper"
      >
        {Data.map(({ id, name, image, course, price, rating, reviews, lessons, time }) => (
          <SwiperSlide key={id}>
            {/* Animate each course card on scroll + hover */}
            <motion.div
              className="top-courses-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
              
                boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="image-container">
                <p className="img-sub">{name}</p>
                <img src={image} alt={name} className="top-courses-img" />
              </div>
              <h1 className="course-name">{course}</h1>
              <div className="top-courses-card-details">
                <p className="time"><i className="fa-solid fa-clock"></i> {time}</p>
                <p className="lesson"><i className="fa-solid fa-book"></i> {lessons}</p>
              </div>
              <div className="top-courses-price">
                <p className="rating">{renderStars(rating)}</p>
                <p className="reviews">{reviews}</p>
              </div>
              <p className="price">{price}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Animate the View All Courses button on scroll + hover */}
      <motion.div
        className="all-courses"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={{ overflow: 'hidden' }}
      >
        <motion.a
          href="/courses"
          className="all-courses-link"
          whileHover={{
            scale: 1.05,
            backgroundColor: 'var(--color-coral)',
            color: '#fff',
            transition: { duration: 0.3 },
          }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          View All Courses
          <i className="fa-solid fa-arrow-right"></i>
        </motion.a>
      </motion.div>
    </section>
  );
}
