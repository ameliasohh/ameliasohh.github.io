import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Interests.css';

const skills = [
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', title: 'Figma', desc: 'User flows, wireframes & high-fidelity prototypes', level: 'Proficient' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', title: 'Python', desc: 'Data analysis, scripting, workflow automation', level: 'Intermediate' },
    { icon: 'https://static.vecteezy.com/system/resources/thumbnails/027/179/363/small/microsoft-excel-icon-logo-symbol-free-png.png', title: 'Excel', desc: 'Pivot tables, dashboards, data-driven decisions', level: 'Intermediate' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', title: 'SQL', desc: 'Querying databases to extract insights', level: 'Intermediate' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', title: 'JavaScript', desc: 'Interactive front-end features & web apps', level: 'Intermediate' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', title: 'React', desc: 'Modern, component-based user interfaces', level: 'Intermediate' },
];

export default function Interests() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="interests" className="interests section">
            <div className="container" ref={ref}>
                <motion.div
                    className="interests__header"
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <p className="interests__label">02 / Skills</p>
                    <h2 className="section-title">Tools I <em>work with</em></h2>
                    <p className="section-subtitle">Technologies and tools I reach for to get things done.</p>
                </motion.div>

                <div className="interests__grid">
                    {skills.map((skill, i) => (
                        <motion.div
                            key={i}
                            className="interests__item"
                            initial={{ opacity: 0, y: 24 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -4 }}
                        >
                            <div className="interests__item-top">
                                <img src={skill.icon} alt={skill.title} className="interests__icon" />
                                <span className="interests__level">{skill.level}</span>
                            </div>
                            <h3 className="interests__title">{skill.title}</h3>
                            <p className="interests__desc">{skill.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}