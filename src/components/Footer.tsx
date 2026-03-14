import { motion } from 'framer-motion';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__inner container">
                <motion.div
                    className="footer__content"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="footer__left">
                        <p className="footer__name">Amelia Soh</p>
                        <p className="footer__tagline">Looking for Summer 2025 Internships</p>
                    </div>

                    <nav className="footer__links" aria-label="Social links">
                        <a href="https://github.com/ameliasohh" target="_blank" rel="noopener noreferrer" className="footer__link">
                            GitHub
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                <path d="M7 17L17 7M17 7H7M17 7v10"/>
                            </svg>
                        </a>
                        <a href="https://linkedin.com/in/amelia-soh" target="_blank" rel="noopener noreferrer" className="footer__link">
                            LinkedIn
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                <path d="M7 17L17 7M17 7H7M17 7v10"/>
                            </svg>
                        </a>
                        <a href="mailto:ameliasoh05@gmail.com" className="footer__link">
                            Email
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                <path d="M7 17L17 7M17 7H7M17 7v10"/>
                            </svg>
                        </a>
                    </nav>
                </motion.div>

                <div className="footer__bottom">
                    <p>© 2025 Amelia Soh</p>
                </div>
            </div>
        </footer>
    );
}