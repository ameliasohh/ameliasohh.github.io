import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

const facts = [
    { emoji: '🎂', text: '20 Years Old' },
    { emoji: '💻', text: 'Studying Information Systems' },
    { emoji: '🎨', text: 'A BIG Fan of anything artsy' },
    { emoji: '🎮', text: 'Loves playing games' },
    { emoji: '👶', text: 'The youngest child' },
    { emoji: '🐱', text: 'Cat and dog lover' },
];

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="about" className="about section">
            <div className="container" ref={ref}>
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    About Me
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    A little peek into who I am ✨
                </motion.p>

                <div className="about__grid">
                    {/* Facts */}
                    <motion.div
                        className="about__facts"
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <h3 className="about__facts-title">I am...</h3>
                        <div className="about__facts-list">
                            {facts.map((fact, i) => (
                                <motion.div
                                    key={i}
                                    className="about__fact"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                >
                                    <span className="about__fact-emoji">{fact.emoji}</span>
                                    <span className="about__fact-text">{fact.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            className="about__photo2-wrapper"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.8 }}
                        >
                            <img src="/photo2.jpg" alt="Amelia with cat" className="about__photo2" />
                            <div className="about__photo2-caption">Me & my furry friend 🐱</div>
                        </motion.div>
                    </motion.div>

                    {/* Main Photo */}
                    <motion.div
                        className="about__image-col"
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <div className="about__image-container">
                            <div className="about__image-bg-shape" />
                            <img src="/photo.jpg" alt="Amelia Soh" className="about__image" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
