import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

const facts = [
    { label: 'Year 2 Information Systems Student at SMU' },
    { label: 'SMU Esports Marketing Director' },
    { label: 'Creative and Hardworking Individual' },
    { label: 'Product Mindset' },
    { label: 'Cat & Dog Lover' },

];

const softSkills = [
    { label: 'Communication', desc: 'Translating ideas across stakeholders clearly' },
    { label: 'Collaboration', desc: 'Working cross-functionally with dev, design & biz teams' },
    { label: 'Problem Solving', desc: 'Breaking down ambiguity into actionable solutions' },
    { label: 'Prioritisation', desc: 'Deciding what matters most' },
    { label: 'User Empathy', desc: 'Understanding user pain points through research' },
    { label: 'Data-Driven', desc: 'Backing decisions with metrics & insights' },
];

// const container = {
//     hidden: {},
//     show: { transition: { staggerChildren: 0.08 } },
// };

// const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
// };

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="about" className="about section">
            <div className="container" ref={ref}>

                {/* Section header — left-aligned, editorial */}
                <motion.div
                    className="about__header"
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <p className="about__header-label">01 / About</p>
                    <h2 className="section-title">A little<br /><em>about me</em></h2>
                </motion.div>

                {/* Main grid: facts + photos */}
                <div className="about__grid">
                    {/* Photos — lead column */}
                    <motion.div
                        className="about__photos"
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.15 }}
                    >
                        <div className="about__photo-main">
                            <img src="/MyPicture.jpg" alt="Amelia Soh" />
                        </div>
                        <div className="about__photo-accent">
                            <img src="/Amelia.png" alt="Amelia Soh" />
                            <span className="about__photo-caption">That's me!</span>
                        </div>
                                                <div className="about__photo-accent">
                            <img src="/photo2.jpg" alt="Amelia Soh" />

                        </div>
                    </motion.div>

                    {/* Facts */}
                    <div className="about__content">
                        <motion.p
                            className="about__intro"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            I'm a driven Year 2 IS student who thrives where technology, people, and creativity intersect.
                        </motion.p>

                        <motion.ul
                            className="about__facts"
                         
                            initial="hidden"
                            animate={isInView ? 'show' : 'hidden'}
                        >
                            {facts.map((f, i) => (
                                <motion.li key={i} className="about__fact" >
                                    <span className="about__fact-num">0{i + 1}</span>
                                    <span className="about__fact-text">{f.label}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                </div>

                {/* Soft skills — horizontal strip, not cards */}
                <motion.div
                    className="about__skills"
                    initial={{ opacity: 0, y: 32 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <div className="about__skills-header">
                        <h3 className="about__skills-title">What I bring to the table</h3>
                        <div className="about__skills-rule" />
                    </div>
                    <div className="about__skills-grid">
                        {softSkills.map((skill, i) => (
                            <motion.div
                                key={i}
                                className="about__skill"
                                initial={{ opacity: 0, y: 16 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.55 + i * 0.07 }}
                                whileHover={{ y: -3 }}
                            >
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