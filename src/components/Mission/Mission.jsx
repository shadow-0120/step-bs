import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './mission.css'

// استيراد الصور بشكل صحيح
import Mission1 from '../../assets/mission-1.jpg'
import Mission3 from '../../assets/mission-3.jpg'
import Mission4 from '../../assets/mission-4.jpg'

export default function Mission() {
  const titleRef = useRef(null)
  const mission1Ref = useRef(null)
  const mission2Ref = useRef(null)
  const mission3Ref = useRef(null)

  const titleInView = useInView(titleRef, { once: false, margin: '-100px' })
  const mission1InView = useInView(mission1Ref, { once: false, margin: '-100px' })
  const mission2InView = useInView(mission2Ref, { once: false, margin: '-100px' })
  const mission3InView = useInView(mission3Ref, { once: false, margin: '-100px' })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.4, ease: 'easeIn' } }
  }

  return (
    <section className="mission" id="about">
      <motion.div
        className="mission-title"
        ref={titleRef}
        variants={variants}
        initial="hidden"
        animate={titleInView ? 'visible' : 'hidden'}
        exit="exit"
      >
        <h1>Our <span>Mission</span> Behind This Platform</h1>
        <p>Our mission is to make quality education accessible, empowering learners to grow, explore, and achieve their goals.</p>
      </motion.div>

      <motion.div
        className="mission-1"
        ref={mission1Ref}
        variants={variants}
        initial="hidden"
        animate={mission1InView ? 'visible' : 'hidden'}
        exit="exit"
      >
        <div className="mission-1-img">
          <img src={Mission1} alt="mission 1" />
        </div>
        <div className="content">
          <h2>Make class material instantly studible at your pace</h2>
          <p>Turn your learning videos, notes, flashcards sets, practice tests, and study guides.</p>
          <a className="courses" href="#">View all courses</a>
        </div>
      </motion.div>

      <motion.div
        className="mission-2"
        ref={mission2Ref}
        variants={variants}
        initial="hidden"
        animate={mission2InView ? 'visible' : 'hidden'}
        exit="exit"
      >
        <div className="content">
          <h2>One Ultimate Study App For every Class, Every Test</h2>
          <p>Visit Our Social Media To See The Best</p>
          <div className="socialMedia">
            <ul>
              <li><a href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></a></li>
              <li><a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a></li>
              <li><a href="https://www.youtube.com/"><i className="fa-brands fa-youtube"></i></a></li>
              <li><a href="https://www.twitter.com/"><i className="fa-brands fa-twitter"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="mission-2-img">
          <img src={Mission4} alt="mission 2" />
        </div>
      </motion.div>

      <motion.div
        className="mission-3"
        ref={mission3Ref}
        variants={variants}
        initial="hidden"
        animate={mission3InView ? 'visible' : 'hidden'}
        exit="exit"
      >
        <div className="mission-3-img">
          <img src={Mission3} alt="mission 3" />
        </div>
        <div className="content">
          <h2>Learn from the best</h2>
          <p>We have a team of experts who are dedicated to providing you with the best learning experience.</p>
          <a className="courses" href="#">View all courses</a>
        </div>
      </motion.div>
    </section>
  )
}
