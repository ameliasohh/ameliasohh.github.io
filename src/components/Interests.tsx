import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Interests.css';

const interests = [
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', title: 'Figma', desc: 'Designing user flows, wireframes, and high-fidelity prototypes' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', title: 'Python', desc: 'Data analysis, scripting, and automating workflows' },
    { icon: 'https://static.vecteezy.com/system/resources/thumbnails/027/179/363/small/microsoft-excel-icon-logo-symbol-free-png.png', title: 'Excel', desc: 'Pivot tables, dashboards, and data-driven decision making' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', title: 'SQL', desc: 'Querying databases to extract insights and inform product decisions' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', title: 'JavaScript', desc: 'Building interactive front-end features and web applications' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', title: 'React', desc: 'Developing modern, component-based user interfaces' },
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
                    My Skills
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Tools & technologies I work with 🛠️
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
                            <img src={item.icon} alt={item.title} className="interests__icon" />
                            <h3 className="interests__title">{item.title}</h3>
                            <p className="interests__desc">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
