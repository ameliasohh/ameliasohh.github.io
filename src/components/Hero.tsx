import { motion } from 'framer-motion';
import './Hero.css';

const floatingShapes = [
    { size: 80, color: 'rgba(232,103,141,0.15)', x: '10%', y: '20%', delay: 0 },
    { size: 120, color: 'rgba(249,168,38,0.12)', x: '80%', y: '15%', delay: 1 },
    { size: 60, color: 'rgba(244,143,177,0.18)', x: '70%', y: '70%', delay: 2 },
    { size: 100, color: 'rgba(255,209,102,0.14)', x: '15%', y: '75%', delay: 0.5 },
    { size: 50, color: 'rgba(232,103,141,0.12)', x: '50%', y: '10%', delay: 1.5 },
    { size: 70, color: 'rgba(252,186,159,0.16)', x: '90%', y: '50%', delay: 0.8 },
];

export default function Hero() {
    return (
        <section id="hero" className="hero">
            {/* Floating decorative shapes */}
            <div className="hero__shapes">
                {floatingShapes.map((shape, i) => (
                    <motion.div
                        key={i}
                        className="hero__shape"
                        style={{
                            width: shape.size,
                            height: shape.size,
                            background: shape.color,
                            left: shape.x,
                            top: shape.y,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            rotate: [0, 10, 0],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            delay: shape.delay,
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </div>

            <div className="hero__content container">
                <motion.div
                    className="hero__text"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <motion.p
                        className="hero__greeting"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Hello there! I'm
                    </motion.p>

                    <motion.h1
                        className="hero__name"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Amelia Soh
                    </motion.h1>

                    <motion.div
                        className="hero__tagline"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <span className="hero__tag">🎓 Information Systems</span>
                        <span className="hero__tag-separator">·</span>
                        <span className="hero__tag">🍜 Foodie</span>
                        <span className="hero__tag-separator">·</span>
                        <span className="hero__tag">🐱 Cat & Dog Lover</span>
                    </motion.div>

                    <motion.p
                        className="hero__subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        The quiet, tired, and always hungry girl — living life one bowl of ramen at a time. 🍜
                    </motion.p>

                    <motion.div
                        className="hero__cta"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                    >
                        <a href="#about" className="hero__btn hero__btn--primary">Get to know me</a>
                        <a href="#projects" className="hero__btn hero__btn--outline">View my work</a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero__image-wrapper"
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="hero__image-ring" />
                    <img src="/photo.jpg" alt="Amelia Soh" className="hero__image" />
                    <motion.div
                        className="hero__image-badge"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        ✨ Always Hungry
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll down indicator */}
            <motion.div
                className="hero__scroll-indicator"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <span>Scroll down</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
            </motion.div>
        </section>
    );
}
