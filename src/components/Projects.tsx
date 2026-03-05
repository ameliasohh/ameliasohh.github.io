import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Projects.css';

const weeks = [
    {
        week: 'Week 1',
        emoji: '✨',
        items: [
            { label: "Justin's Fanpage", url: 'https://ameliasohh.github.io/fanpage.html/' },
        ],
    },
    {
        week: 'Week 2',
        emoji: '❤️',
        items: [
            { label: 'ICE Challenge 1', url: 'https://ameliasohh.github.io/week2/Challenge1/home.html' },
            { label: 'ICE Challenge 2', url: 'https://ameliasohh.github.io/week2/Challenge2/home.html' },
            { label: 'ICE Challenge 3', url: 'https://ameliasohh.github.io/week2/Challenge3/home.html' },
        ],
    },
    {
        week: 'Week 3',
        emoji: '🎀',
        items: [
            { label: 'ICE Challenge 1', url: 'https://ameliasohh.github.io/week3/Challenge1/home.html' },
            { label: 'ICE Challenge 2', url: 'https://ameliasohh.github.io/week3/Challenge2/home.html' },
            { label: 'ICE Challenge 3', url: 'https://ameliasohh.github.io/week3/Challenge3/home.html' },
        ],
    },
];

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="projects" className="projects section">
            <div className="container" ref={ref}>
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    My Projects
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Weekly ICE challenges & class projects 🚀
                </motion.p>

                <div className="projects__timeline">
                    {weeks.map((week, wi) => (
                        <motion.div
                            key={wi}
                            className="projects__week"
                            initial={{ opacity: 0, x: wi % 2 === 0 ? -40 : 40 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.2 + wi * 0.15, duration: 0.6 }}
                        >
                            <div className="projects__week-dot">
                                <span>{week.emoji}</span>
                            </div>
                            <div className="projects__week-card glass-card">
                                <h3 className="projects__week-title">{week.week}</h3>
                                <div className="projects__links">
                                    {week.items.map((item, ii) => (
                                        <motion.a
                                            key={ii}
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="projects__link"
                                            whileHover={{ x: 6 }}
                                        >
                                            <span className="projects__link-icon">↗</span>
                                            {item.label}
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
