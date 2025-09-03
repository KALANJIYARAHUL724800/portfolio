import React from 'react';

const projects = [
    {
        title: 'Mini Billing Software',
        description: 'A Tkinter-based billing software for small businesses.',
        tech: 'Python, Tkinter, MySQL',
        link: '#'
    },
    {
        title: 'Portfolio Website',
        description: 'Personal portfolio website built with React.',
        tech: 'React, Bootstrap',
        link: '#'
    },
    {
        title: 'Exam Management System',
        description: 'Laravel-based online exam management system.',
        tech: 'PHP, Laravel, MySQL',
        link: '#'
    }
];

const ProjectComponents = () => {
    document.title = "Projects - Portfolio";
    return (
        <section className="projects-section py-5 bg-light" id="projects">
            <div className="container text-center">
                <h2 className="mb-4">My Projects</h2>
                <div className="row">
                    {projects.map((project, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">{project.title}</h5>
                                    <p className="card-text">{project.description}</p>
                                    <p className="text-muted">Tech: {project.tech}</p>
                                    <a href={project.link} className="btn btn-primary">View Project</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectComponents;
