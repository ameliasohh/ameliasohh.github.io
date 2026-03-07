import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import './Projects.css';

const projects = [
    {
        name: 'CritterConnect',
        emoji: '🐾',
        images: ['/Project1.png', '/Project2.png'],
        items: [
            { label: "CritterConnect Website", url: 'https://wad2-92dca.web.app/' },
        ],
    },
    {
        name: 'PocketPlan',
        emoji: '💰',
        images: ['/Project1.png', '/Project2.png'],
        items: [
            { label: 'Figma Prototype', url: 'https://www.figma.com/proto/eamTDRrnVMbrxa6H55aNrv/idp-iter-2?node-id=411-6190&p=f&t=pWTdCfEMVUBOA8Kv-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=537%3A7922' },
        ],
    },
];

function ImageCarousel({ images }: { images: string[] }) {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    const advance = useCallback((dir: number) => {
        setDirection(dir);
        setCurrent((prev) => (prev + dir + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        const timer = setInterval(() => advance(1), 4000);
        return () => clearInterval(timer);
    }, [advance]);

    const variants = {
        enter: (d: number) => ({ x: d > 0 ? 260 : -260, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (d: number) => ({ x: d > 0 ? -260 : 260, opacity: 0 }),
    };

    return (
        <div className="carousel">
            <div className="carousel__viewport">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.img
                        key={current}
                        src={images[current]}
                        alt={`Project screenshot ${current + 1}`}
                        className="carousel__image"
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        draggable={false}
                    />
                </AnimatePresence>
            </div>

            <button className="carousel__arrow carousel__arrow--left" onClick={() => advance(-1)} aria-label="Previous image">
                ‹
            </button>
            <button className="carousel__arrow carousel__arrow--right" onClick={() => advance(1)} aria-label="Next image">
                ›
            </button>

            <div className="carousel__dots">
                {images.map((_, i) => (
                    <button
                        key={i}
                        className={`carousel__dot ${i === current ? 'carousel__dot--active' : ''}`}
                        onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                        aria-label={`Go to image ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

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

                </motion.p>

                <ImageCarousel images={['/Project1.png', '/Project2.png']} />

                <div className="projects__timeline">
                    {projects.map((project, wi) => (
                        <motion.div
                            key={wi}
                            className="projects__week"
                            initial={{ opacity: 0, x: wi % 2 === 0 ? -40 : 40 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.2 + wi * 0.15, duration: 0.6 }}
                        >
                            <div className="projects__week-dot">
                                <span>{project.emoji}</span>
                            </div>
                            <div className="projects__week-card glass-card">
                                <h3 className="projects__week-title">{project.name}</h3>
                                <div className="projects__links">
                                    {project.items.map((item, ii) => (
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
