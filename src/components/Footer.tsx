import { motion } from 'framer-motion';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            {/* Wave SVG divider */}
            <div className="footer__wave">
                <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
                    <path
                        d="M0,40 C360,120 720,0 1080,80 C1260,120 1380,40 1440,60 L1440,120 L0,120 Z"
                        fill="currentColor"
                    />
                </svg>
            </div>

            <div className="footer__content container">
                <motion.div
                    className="footer__main"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="footer__brand">
                        <span className="footer__logo"> Amelia Soh</span>
                        <p className="footer__tagline"> Connect with me! :D</p>
                    </div>

                    <div className="footer__links">
                        <a
                            href="https://github.com/ameliasohh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer__social-link"
                        >
                        
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            GitHub
                        </a>
                        <a href="https://linkedin.com/in/amelia-soh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer__social-link"
                        >
                             LinkedIn
                        </a>
                                                <a href="mailto:ameliasoh05@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer__social-link"
                        >
                             Gmail
                        </a>
                    </div>
                </motion.div>

            </div>
        </footer>
    );
}
