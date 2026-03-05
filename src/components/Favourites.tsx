import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Favourites.css';

const favourites = [
    {
        emoji: '🍱',
        title: 'Kimukatsu',
        subtitle: 'Fav Tonkatsu in Singapore',
        desc: 'Located in Takashimaya, this famous Japanese tonkatsu with 25 layers is crunchy and tender. My personal favourite is the cheese kimukatsu set.',
        link: 'https://www.google.com/search?q=kimukatsu+singapore',
        linkLabel: 'Learn more',
        color: '#ffecd2',
    },
    {
        emoji: '🌶️',
        title: 'Xiang Xiang',
        subtitle: 'Fav Hunan Cuisine',
        desc: 'Famous for its golden broth sour and spicy fish, beef stir fry and stir-fry pork.',
        link: 'https://www.google.com/search?q=xiang+xiang+hunan+cuisine',
        linkLabel: 'Learn more',
        color: '#fce4ec',
    },
    {
        emoji: '🎭',
        title: 'Wicked',
        subtitle: 'Fav Musical Movie',
        desc: 'A fantasy film focusing on good versus evil, prejudice, and the complex choices that shape people\'s lives.',
        link: 'https://www.youtube.com/watch?v=6COmYeLsz4c',
        linkLabel: 'Watch trailer',
        color: '#e8f5e9',
    },
];

export default function Favourites() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="favourites" className="favourites section">
            <div className="container" ref={ref}>
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    My Favourites
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Some things I absolutely love 💕
                </motion.p>

                <div className="favourites__grid">
                    {favourites.map((item, i) => (
                        <motion.div
                            key={i}
                            className="favourites__card"
                            style={{ '--card-bg': item.color } as React.CSSProperties}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                            whileHover={{ y: -8 }}
                        >
                            <div className="favourites__image-wrapper">
                                <span className="favourites__emoji">{item.emoji}</span>
                            </div>
                            <div className="favourites__body">
                                <span className="favourites__label">{item.subtitle}</span>
                                <h3 className="favourites__title">{item.title}</h3>
                                <p className="favourites__desc">{item.desc}</p>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="favourites__link"
                                >
                                    {item.linkLabel} →
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
