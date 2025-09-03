import React from 'react';

const skills = [
    { name: 'Core Java', level: 95 },
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'Bootstrap', level: 85 },
    { name: 'JavaScript', level: 85 },
    { name: 'Spring', level: 80 },
    { name: 'Spring Boot', level: 80 },
    { name: 'React', level: 85 },
    { name: 'MySQL', level: 80 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'JDBC', level: 85 },
    { name: 'PHP', level: 75 },
    { name: 'Laravel', level: 75 },
    { name: 'Postman', level: 90 },
    { name: 'Git & GitHub', level: 90 }
];

const SkillsComponent = () => {
    document.title = "Skills - Portfolio";
    return (
        <section className="skills-section py-5 bg-light" id="skills">
            <div className="container text-center">
                <h2 className="mb-4">My Skills</h2>
                <div className="row justify-content-center">
                    {skills.map((skill, index) => (
                        <div key={index} className="col-md-4 mb-3 text-start">
                            <h5>{skill.name}</h5>
                            <div className="progress" style={{ height: '20px' }}>
                                <div
                                    className="progress-bar bg-primary"
                                    role="progressbar"
                                    style={{ width: `${skill.level}%` }}
                                    aria-valuenow={skill.level}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    {skill.level}%
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsComponent;
