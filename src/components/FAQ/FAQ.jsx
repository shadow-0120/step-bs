import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import './faq.css';

const faqData = [
  {
    question: 'What courses do you offer?',
    answer: 'We offer foundational courses, advanced specializations, and practical workshops across various fields.',
  },
  {
    question: 'Are the courses suitable for beginners?',
    answer: 'Yes! We have tailored courses starting from beginner to expert levels.',
  },
  {
    question: 'How do I enroll in a course?',
    answer: 'You can enroll by creating an account and selecting your desired course on our platform.',
  },
  {
    question: 'Do you offer certificates?',
    answer: 'Yes, we provide certificates upon successful completion of the courses.',
  },
  {
    question: 'Is there any refund policy?',
    answer: 'Absolutely. We offer a 7-day refund policy if you’re not satisfied.',
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.1, ease: 'easeOut' } }
  };

  return (
    <section className="faq-container" ref={containerRef}>
      <motion.div
        className="faq-title"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={fadeUpVariant}
      >
        <h1>Frequently Asked <span>Questions</span></h1>
        <p>From foundation courses that lay the groundwork for your educational journey to advanced specializations.</p>
      </motion.div>

      <div className="faq-items">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUpVariant}
            transition={{ delay: index * 0.1 }}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <i className={`fa-solid fa-angle-right arrow ${activeIndex === index ? 'rotate' : ''}`}></i>
            </div>
            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  className="faq-answer"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
