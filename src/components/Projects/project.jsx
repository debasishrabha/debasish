import './project.css';
import { useState, useEffect } from 'react';

import fuelImage from '../../assets/fuel-quality.jpg';
import bdhImage from '../../assets/resturant-page.jpeg';
import emtImage from '../../assets/age-cal.jpg';
import aiImage from '../../assets/fin-app.jpg';

const projects = [
    {
        name: 'E-Commerce Platform',
        image: fuelImage,
        liveUrl: 'https://your-live-url-1.com',
        description: 'A full-featured e-commerce platform with cart functionality, user authentication, payment integration, and admin dashboard.',
    },
    {
        name: 'Task Management Dashboard',
        image: bdhImage,
        liveUrl: 'https://your-live-url-2.com',
        description: 'Kanban-style project management tool with drag-and-drop functionality, team collaboration, and real-time updates.',

    },
    {
        name: 'EMT Movies',
        image: emtImage,
        liveUrl: 'https://your-live-url-3.com',
        description: 'Movie information and rating platform with search functionality and user reviews.',

    },
    {
        name: 'AI Assistant',
        image: aiImage,
        liveUrl: 'https://your-live-url-4.com',
        description: 'AI-powered financial assistant with natural language processing and predictive analytics.',

    },
];

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return isMobile;
};

const Projects = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const isMobile = useIsMobile();

    return (
        <section className="projects-section" id="projects">
            <h2 className="projects-title">My Projects</h2>
            {isMobile && (
                <p className="mobile-project-intro">
                    These are some of my most impactful and technically challenging projects.
                </p>
            )}

            {isMobile ? (

                <>
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <img src={project.image} alt={project.name} className="project-image" />
                            <div className="project-name">
                                <div className="mobile-project-header">
                                    <span className="project-mobile-name">{project.name}</span>
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="view-link-mobile"
                                    >
                                        🔗
                                    </a>
                                </div>
                                <p className="mobile-project-description">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </>
            ) : (
                <div className="project-category">
                    <h3 className="dev-title">Development Projects</h3>
                    <div className="projects-container">
                        {projects.map((project, index) => (
                            <div
                                className={`project-card ${hoveredIndex === index ? 'hovered' : ''}`}
                                key={index}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <img src={project.image} alt={project.name} className="project-image" />
                                <div className="project-name">
                                    {hoveredIndex === index ? (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="view-link"
                                        >
                                            View Project
                                        </a>
                                    ) : (
                                        <span className="project-desktop-name">{project.name}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </section>
    );
};

export default Projects;
