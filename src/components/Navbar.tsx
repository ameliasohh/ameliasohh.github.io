import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#interests' },
    { label: 'Projects', href: '#projects' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Track which section is in view for active link highlight
    useEffect(() => {
        const sections = ['about', 'interests', 'projects'];
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: '-40% 0px -55% 0px' }
        );
        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    // Close menu on nav click
    const handleNavClick = () => setMenuOpen(false);

    return (
        <>
            <motion.header
                className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="navbar__inner container">
                    {/* Logo / wordmark */}
                    <a href="#hero" className="navbar__logo" aria-label="Back to top">
                        <span className="navbar__logo-initials">AS</span>
                        <span className="navbar__logo-name">Amelia Soh</span>
                    </a>

                    {/* Desktop links */}
                    <nav className="navbar__links" aria-label="Main navigation">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`navbar__link${activeSection === link.href.slice(1) ? ' navbar__link--active' : ''}`}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a href="mailto:ameliasoh05@gmail.com" className="navbar__cta">
                            Say hello
                        </a>
                    </nav>

                    {/* Mobile burger */}
                    <button
                        className={`navbar__burger${menuOpen ? ' navbar__burger--open' : ''}`}
                        onClick={() => setMenuOpen(v => !v)}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                    >
                        <span />
                        <span />
                    </button>
                </div>
            </motion.header>

            {/* Mobile drawer */}
            <motion.div
                className="navbar__drawer"
                initial={false}
                animate={menuOpen ? { opacity: 1, y: 0, pointerEvents: 'auto' } : { opacity: 0, y: -8, pointerEvents: 'none' }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                aria-hidden={!menuOpen}
            >
                {navLinks.map((link, i) => (
                    <motion.a
                        key={link.href}
                        href={link.href}
                        className="navbar__drawer-link"
                        onClick={handleNavClick}
                        initial={{ opacity: 0, x: -12 }}
                        animate={menuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                        transition={{ delay: i * 0.06, duration: 0.25 }}
                    >
                        {link.label}
                    </motion.a>
                ))}
                <motion.a
                    href="mailto:ameliasoh05@gmail.com"
                    className="navbar__drawer-cta"
                    onClick={handleNavClick}
                    initial={{ opacity: 0, x: -12 }}
                    animate={menuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                    transition={{ delay: navLinks.length * 0.06, duration: 0.25 }}
                >
                    Say hello →
                </motion.a>
            </motion.div>

            {/* Mobile backdrop */}
            {menuOpen && (
                <div
                    className="navbar__backdrop"
                    onClick={() => setMenuOpen(false)}
                    aria-hidden="true"
                />
            )}
        </>
    );
}