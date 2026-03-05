import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Travel.css';

export default function Travel() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="travel" className="travel section">
            {/* Decorative wave pattern */}
            <div className="travel__pattern" />

            <div className="container" ref={ref}>
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Travel Adventures
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    My love letter to Japan 🇯🇵
                </motion.p>

                <div className="travel__content">
                    <motion.div
                        className="travel__text-block glass-card"
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.7 }}
                    >
                        <h3 className="travel__heading">🗾 Japan — My Favourite Destination</h3>
                        <p className="travel__text">
                            I LOVE LOVE Japan! I've been to <strong>Tokyo</strong>, <strong>Osaka</strong>,{' '}
                            <strong>Fukuoka</strong>, <strong>Nagasaki</strong>, and <strong>Kyoto</strong>.
                            I love ramen, sushi, don-katsu and udon very much! 🍜
                        </p>

                        <div className="travel__places">
                            {['Tokyo', 'Osaka', 'Fukuoka', 'Nagasaki', 'Kyoto'].map((place, i) => (
                                <motion.span
                                    key={place}
                                    className="travel__place-tag"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: 0.4 + i * 0.08 }}
                                >
                                    📍 {place}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="travel__video-wrapper"
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3, duration: 0.7 }}
                    >
                        <iframe
                            className="travel__video"
                            src="https://www.youtube.com/embed/oDogmhb5aZo?autoplay=0&mute=1&si=vILwGdMWhn8Y6E_6"
                            title="Japan Travel Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </motion.div>
                </div>

                <motion.div
                    className="travel__funfact glass-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <span className="travel__funfact-emoji">🤓</span>
                    <div>
                        <strong>Fun Fact:</strong> Did you know that Fukuoka is the origin of tonkotsu ramen,
                        a popular ramen dish made with a rich pork-bone broth?
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
