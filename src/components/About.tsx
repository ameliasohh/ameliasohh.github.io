import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

const facts = [
    { emoji: '💻', text: 'Year 2 Information Systems Student' },
    { emoji: '🎮', text: 'SMU Esports Marketing Director' },
    { emoji: '🎨', text: 'Creative and Hardworking Individual' },
    { emoji: '🐱', text: 'Cat & Dog Lover' },
];

const softSkills = [
    { icon: '🗣️', label: 'Communication', desc: 'Translating ideas across stakeholders clearly' },
    { icon: '🤝', label: 'Collaboration', desc: 'Working cross-functionally with dev, design & biz teams' },
    { icon: '🧩', label: 'Problem Solving', desc: 'Breaking down ambiguity into actionable solutions' },
    { icon: '📋', label: 'Prioritisation', desc: 'Deciding what matters most and saying no to the rest' },
    { icon: '🔍', label: 'User Empathy', desc: 'Understanding user pain points through research' },
    { icon: '📈', label: 'Data-Driven', desc: 'Backing decisions with metrics & insights' },
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
                    {/* Facts column */}
                    <motion.div
                        className="about__facts"
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <h3 className="about__facts-title">I am a...</h3>
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
                    </motion.div>

                    {/* Photos column */}
                    <motion.div
                        className="about__photos-col"
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <div className="about__photos-row">
                            <div className="about__image-container">
                                <div className="about__image-bg-shape" />
                                <img src="/MyPicture.jpg" alt="Amelia Soh" className="about__image" />
                            </div>
                            <div className="about__image-container">
                                <div className="about__image-bg-shape" />
                                <img src="/Amelia.png" alt="Amelia Soh" className="about__image" />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Soft Skills */}
                <motion.div
                    className="about__soft-skills"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.6 }}
                >
                    <h3 className="about__soft-skills-title">What I Bring to the Table </h3>
                    <div className="about__soft-skills-grid">
                        {softSkills.map((skill, i) => (
                            <motion.div
                                key={i}
                                className="about__skill-card glass-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.7 + i * 0.08 }}
                                whileHover={{ scale: 1.04, y: -4 }}
                            >
                                <span className="about__skill-icon">{skill.icon}</span>
                                <h4 className="about__skill-label">{skill.label}</h4>
                                <p className="about__skill-desc">{skill.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
