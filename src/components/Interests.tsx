import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Interests.css';

const interests = [
    { icon: '🎨', title: 'Art & Design', desc: 'Anything artsy makes my heart sing — drawing, crafts, aesthetics' },
    { icon: '🎮', title: 'Gaming', desc: 'From casual mobile games to immersive adventures, count me in!' },
    { icon: '🍜', title: 'Food', desc: 'Ramen, sushi, don-katsu, udon... basically all of Japanese cuisine' },
    { icon: '✈️', title: 'Travel', desc: 'Exploring new places and cultures — Japan is my ultimate favourite' },
    { icon: '🐱', title: 'Cats & Dogs', desc: 'Cannot resist a fluffy companion. I love them all equally!' },
    { icon: '🎬', title: 'Movies', desc: 'Musical films and fantasy worlds — Wicked stole my heart' },
];

export default function Interests() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="interests" className="interests section">
            <div className="container" ref={ref}>
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    My Interests
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Things that light up my day ☀️
                </motion.p>

                <div className="interests__grid">
                    {interests.map((item, i) => (
                        <motion.div
                            key={i}
                            className="interests__card glass-card"
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5 }}
                        >
                            <div className="interests__icon">{item.icon}</div>
                            <h3 className="interests__title">{item.title}</h3>
                            <p className="interests__desc">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
