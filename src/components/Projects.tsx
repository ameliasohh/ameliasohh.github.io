import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import './Projects.css';

const projects = [
    {
        name: 'CritterConnect',
        year: '2025 Project',
        tag: 'Full-stack Web App',
        desc: 'A platform connecting the general public and animal rescue organisations.',
        images: ['/Project1.png', '/Project2.png'],
        links: [{ label: 'Live site', url: 'https://wad2-92dca.web.app/' }],
    },
    {
        name: 'PocketPlan',
        year: '2024',
        tag: 'UX Design',
        desc: 'A personal finance app prototype designed for Gen Z users.',
        images: ['/Project1.png', '/Project2.png'],
        links: [{ label: 'Figma prototype', url: 'https://www.figma.com/proto/eamTDRrnVMbrxa6H55aNrv/idp-iter-2?node-id=411-6190&p=f&t=pWTdCfEMVUBOA8Kv-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=537%3A7922' }],
    },
];

function Carousel({ images }: { images: string[] }) {
    const [idx, setIdx] = useState(0);
    const [dir, setDir] = useState(1);

    const go = useCallback((d: number) => {
        setDir(d);
        setIdx(p => (p + d + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        const t = setInterval(() => go(1), 4500);
        return () => clearInterval(t);
    }, [go]);

    
}

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="projects" className="projects section">
            <div className="container" ref={ref}>
                <motion.div
                    className="projects__header"
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <p className="projects__label">03 / Projects</p>
                    <h2 className="section-title">Things I've <em>built</em></h2>
                </motion.div>

                <div className="projects__list">
                    {projects.map((project, i) => (
                        <motion.article
                            key={i}
                            className="project"
                            initial={{ opacity: 0, y: 32 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.15 + i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="project__media">
                                   </div>
                            <div className="project__info">
                                <div className="project__meta">
                                    <span className="project__tag">{project.tag}</span>
                                    <span className="project__year">{project.year}</span>
                                </div>
                                <h3 className="project__name">{project.name}</h3>
                                <p className="project__desc">{project.desc}</p>
                                <div className="project__links">
                                    {project.links.map((link, j) => (
                                        <motion.a
                                            key={j}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project__link"
                                            whileHover={{ x: 4 }}
                                        >
                                            {link.label}
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M7 17L17 7M17 7H7M17 7v10"/>
                                            </svg>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}