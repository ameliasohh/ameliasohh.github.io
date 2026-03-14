import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
    return (
        <section id="hero" className="hero">
            {/* Subtle paper texture overlay */}
            <div className="hero__paper-grain" aria-hidden="true" />

            <div className="hero__inner container">
                {/* Left: text column */}
                <div className="hero__text">
                    <motion.span
                        className="hero__eyebrow"
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Portfolio — 2025
                    </motion.span>

                    <motion.h1
                        className="hero__name"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Amelia<br />
                        <em>Soh</em>
                    </motion.h1>

                    <motion.p
                        className="hero__roles"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Information Systems · SMU Esports Marketing · Creative Problem Solver
                    </motion.p>

                    <motion.p
                        className="hero__bio"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.55 }}
                    >
                        I combine technical fluency, user‑centred design thinking, and a natural ability to connect people and ideas to create meaningful impact.
                    </motion.p>

                    <motion.div
                        className="hero__actions"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        <a href="#about" className="hero__btn hero__btn--primary">About me</a>
                        <a href="#projects" className="hero__btn hero__btn--ghost">See my work →</a>
                    </motion.div>
                </div>

                {/* Right: photo */}
                <motion.div
                    className="hero__photo-wrap"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="hero__photo-frame">
                        <img src="/Amelia.jpg" alt="Amelia Soh" className="hero__photo" />
                    </div>
                    {/* Handwritten note sticker */}
                    <motion.div
                        className="hero__note"
                        initial={{ opacity: 0, rotate: -3, scale: 0.85 }}
                        animate={{ opacity: 1, rotate: -2, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.0, ease: [0.34, 1.36, 0.64, 1] }}
                    >
                        <span>open to internships ✦</span>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll cue */}
            <motion.div
                className="hero__scroll"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
            >
                <span>scroll</span>
                <div className="hero__scroll-line" />
            </motion.div>
        </section>
    );
}