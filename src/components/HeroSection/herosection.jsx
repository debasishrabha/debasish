import './hero.css';
import debasishPhoto from '../../assets/debasish-photo.jpeg';
import SocialIcons from '../SocialIcons/socialIcons';
import { useState, useEffect } from 'react';

function HeroSection() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (isMobile) {
        return (
            <section className="hero-section-mobile enhanced">
                <div className="gradient-overlay" />

                <div className="mobile-image">
                    <img src={debasishPhoto} alt="Debasish Rabha" />
                </div>

                <div className="intro">Hello, I'm</div>

                <div className="hero-name fancy typing">
                    <span className="name-white">Debasish</span>
                    <span className="name-highlight">Rabha</span>
                    <span className="cursor">_</span>
                </div>

                <div className="hero-role">
                    SOFTWARE ENGINEER,<br />
                    FULLSTACK WEB & APP DEVELOPER.
                </div>

                <div className="mobile-buttons">
                    <button className="hero-button glow">Download CV</button>
                    <a href="/resume.pdf" download className="hero-button secondary glow">Hire Me</a>
                </div>
                <div className="social-icons-container">
                    <SocialIcons />
                </div>

                <a href="#about" className="scroll-down-indicator">
                    <div className="scroll-mouse">
                        <div className="scroll-dot" />
                    </div>
                </a>

            </section>
        );
    }

    // Desktop view — DO NOT CHANGE
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1>
                    <span className="gray-text">MR.</span> DEBASISH RABHA
                </h1>
                <p>
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Donec Pulvinar
                    Eget Eros Vel Ultricies. Curabitur Aliquam Lacinia Enim... Lorem Ipsum
                    Dolor Sit Amet, Consectetur Adipiscing Elit. Donec Pulvinar Eget Eros Vel
                    Ultricies. Curabitur Aliquam Lacinia Enim...
                </p>
                <button className="hire-button">Hire Me</button>
                <SocialIcons />
            </div>

            <div className="hero-image">
                <img src={debasishPhoto} alt="profile" />
            </div>
        </section>
    );
}

export default HeroSection;
