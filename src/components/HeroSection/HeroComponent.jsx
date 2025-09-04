import React from 'react';
import { data } from 'react-router-dom';

const HeroComponent = () => {
    
    return (
        <section className="hero-section text-center py-5 bg-light">
            {/* Photo / Avatar */}
            <img
                src="data:image/jpeg;base64,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"
                alt="Kalanjiya Rahul"
                className="rounded-circle mb-3"
                style={{ width: '150px', height: '150px' }}
            />

            {/* Name & Role */}
            <h1 className="mb-2">Kalanjiya Rahul</h1>
            <h4 className="text-muted mb-3">Java Developer | Fullstack Enthusiast</h4>

            {/* Tagline */}
            <p className="mb-4">Building responsive web apps with Java, Python & React.</p>

            {/* Call-to-action Buttons */}
            <div className="mb-4">
                <a href="/projects" className="btn btn-primary mx-2">View Projects</a>
                <a href="/contact" className="btn btn-outline-primary mx-2">Contact Me</a>
            </div>

            {/* Social Media Links */}
            <div className="mb-4">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="mx-2">
                    <i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i>
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="mx-2">
                    <i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i>
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="mx-2">
                    <i className="bi bi-twitter" style={{ fontSize: '1.5rem' }}></i>
                </a>
            </div>

            {/* Skills Badges */}
            <div className="mb-4">
                <span className="badge bg-primary mx-1">Java</span>
                <span className="badge bg-success mx-1">React</span>
                <span className="badge bg-warning text-dark mx-1">Spring Boot</span>
                <span className="badge bg-info text-dark mx-1">MySQL</span>
                <span className="badge bg-secondary mx-1">Git</span>
            </div>

            {/* Scroll Down Indicator */}
            <div className="mt-5">
                <p className="text-muted">Scroll down to see my work</p>
                <i className="bi bi-chevron-double-down" style={{ fontSize: '2rem' }}></i>
            </div>
        </section>
    );
};

export default HeroComponent;
