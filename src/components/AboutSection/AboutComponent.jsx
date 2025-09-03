import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const AboutComponent = () => {
    document.title = "About - Portfolio";
    return (
        <section className="about-section py-5 bg-white" id="about">
            <div className="container text-center">
                <h2 className="mb-4">About Me</h2>
                <p style={{ maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
                    Hi, I'm Kalanjiya Rahul, a passionate Full Stack Developer with experience in
                    Java, Python, React, and database management. I love building responsive web
                    applications that solve real-world problems and provide seamless user experiences.
                </p>
                <p style={{ maxWidth: '600px', margin: '20px auto 0', lineHeight: '1.6' }}>
                    I enjoy learning new technologies, collaborating with teams, and continuously
                    improving my skills to deliver high-quality software solutions.
                </p>
            </div>
        </section>
    );
};

export default AboutComponent;
