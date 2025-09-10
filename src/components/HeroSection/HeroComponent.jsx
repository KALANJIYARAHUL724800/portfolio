import { useEffect, useState } from 'react';
import profilePic from '../../assets/KALANJIYARAHUL - PASSPORT SIZE PHOTO.jpeg';
import Connection from '../Connection';
import resumePdf from "../../media/kalanjiyarahul_CV.pdf";
import skillsImage from "../../media/skills_image.png";
const HeroComponent = ({ data, page }) => {
    if (!data) {
        return <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <div className="text-center">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif"
                    alt="Loading..."
                    style={{ width: "100px", height: "100px" }}
                    className="img-fluid"
                />
                <p className="mt-3">Please wait...</p>
            </div>
        </div>;
    }
    const [val, setValue] = useState({
        userName: '',
        email: '',
        message: ''
    });
    useEffect(() => {
        document.title = "Contact - Portfolio";
    }, []);


    const handleFormSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        Connection.sendContactForm(val)
            .then(response => {
                alert("Message sent!");
                setValue({ userName: '', email: '', message: '' }); // clear form
            })
            .catch(error => {
                alert("Failed to send message");
            }).finally(() => {
                setLoading(false); // hide loader after response
            });;
    };

    const [pdfVisible, setPdfVisible] = useState(false);

    const toggleResume = () => {
        setPdfVisible(!pdfVisible);
    };

    return (
        <section className="hero-section text-center py-5 bg-light">
            {/* Photo / Avatar */}
            {(data.pages[page]) &&
                <img
                    src={profilePic}
                    className="rounded-circle mb-3"
                    style={{ width: '150px', height: '150px' }}
                    alt="Kalanjiya Rahul"
                />
            }

            {/* Name & Role */}
            {
                (data.pages[page]['name']) &&
                <h1 className="mb-2">{data.pages[page]['name']}</h1>
            }
            {/* Title Part */}
            {
                (data.pages[page]['title']) &&
                <h4 className="text-muted mb-3">{data.pages[page]['title']}</h4>
            }
            {/* Description */}
            {
                (data.pages[page]['description']) &&
                <p className="mb-4">{data.pages[page]['description']}</p>
            }
            {/* Call-to-action Buttons */}
            {data?.pages?.[page]?.buttons && (
                <div className="mb-4">
                    {data.pages[page].buttons.map((btn, index) => (
                        <a
                            key={index}
                            href={btn.link}
                            className={`btn ${index === 0 ? "btn-primary" : "btn-outline-primary"} mx-2`}
                        >
                            {btn.text}
                        </a>
                    ))}
                </div>
            )}
            {/* { About Page } */}

            {(data.pages[page].extra) &&
                <>
                    <div className="container text-center">
                        {
                            data.pages[page]['heading'] &&
                            <h2 className="mb-4">{data.pages[page]['heading']}</h2>
                        }
                        <p style={{ maxWidth: '600px', margin: '20px auto 0', lineHeight: '1.6' }}>
                            Hi, I’m Kalanjiya Rahul, holding an M.Sc. in Computer Science.
                            I am passionate about building scalable applications and have expertise in both system-based software and full-stack web applications. I enjoy solving problems, learning new technologies, and delivering high-quality solutions.
                        </p><br />
                        {data.pages[page]['extra'] &&
                            < p style={{ maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
                                {data.pages[page]['extra']}
                            </p>
                        }
                        <br />
                    </div><br />
                    <button className="btn btn-primary" onClick={toggleResume}>
                        {pdfVisible ? "Close Resume" : "View Resume"}
                    </button>

                    {pdfVisible && (
                        <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                            Open Resume PDF
                        </a>
                    )}
                    <br /><br /><br />
                    <div style={{ width: "100%", maxWidth: "1300px", margin: "0 auto" }}>
                        <img
                            src={skillsImage}
                            alt="skills_image"
                            style={{ width: "100%", height: "auto", display: "block" }}
                        />
                    </div>
                    <div className="container my-4">
                        <h4 className="fw-bold border-bottom pb-2">Education</h4>

                        <div className="mb-4">
                            <div className="d-flex justify-content-between">
                                <strong>Syed Ammal Arts and Science College</strong>
                                <span>2022 – 2024</span>
                            </div>
                            <div>Master of Science in Computer Science – <b>7.21 CGPA</b></div>
                            <div className="text-muted">
                                Specialized in advanced programming, database systems, and software engineering.
                                Gained hands-on experience in <b>Python, Java, Data Analytics</b> and worked on research-oriented academic projects.
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="d-flex justify-content-between">
                                <strong>Caussanel College of Arts and Science</strong>
                                <span>2018 – 2021</span>
                            </div>
                            <div>Bachelor of Science in Computer Science – <b>8.32 CGPA</b></div>
                            <div className="text-muted">
                                Built strong foundations in <b>Core Java, Python, MySQL</b> and web development.
                                Completed academic project on <b>Android Java Call Blocker</b>, demonstrating problem-solving and practical implementation skills.
                            </div>
                        </div>

                        <div>
                            <div className="d-flex justify-content-between">
                                <strong>Kairathul Jalaliya HSC School</strong>
                                <span>2017 – 2018</span>
                            </div>
                            <div>HSC – <b>82.5%</b></div>
                            <div className="text-muted">
                                Focused on Computer Science stream, developing early interest in coding, logical problem solving,
                                and technology fundamentals.
                            </div>
                        </div>
                    </div>

                </>
            }

            {/* { Projects Page } */}
            {
                (data.pages[page]['items'] &&
                    <div className="container text-center">
                        <h2 className="mb-4">My Projects</h2>
                        <div className="row">
                            {data.pages[page]['items'].map((project, index) => (
                                <div key={index} className="col-md-4 mb-4">
                                    <div className="card h-100 shadow-sm">
                                        <div className="card-body">
                                            <h5 className="card-title">{project.title}</h5>
                                            <p className="card-text">{project.description}</p>
                                            <p className="text-muted">Tech: {project.tech}</p>
                                            <a href={project.link} className="btn btn-primary" target='_blank'>View Project</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            }
            {/* { Skill Page } */}
            {
                (data.pages[page][0]) &&
                <div className="container text-center">
                    <h2 className="mb-4">My Skills</h2>
                    <div className="row justify-content-center">
                        {data.pages[page].map((skill, index) => (
                            <div key={index} className="col-md-4 mb-3 text-start">
                                <h5>{skill.name}</h5>
                                <div className="progress" style={{ height: '20px' }}>
                                    <div
                                        className="progress-bar bg-primary"
                                        role="progressbar"
                                        style={{ width: `${skill.percentage}%` }}
                                        aria-valuenow={skill.percentage}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    >
                                        {skill.percentage}%
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            }

            {/* { Contact Page } */}
            {
                (data.pages[page]['address'] &&
                    <section className="contact-section py-5 bg-white" id="contact">
                        <div className="container text-center">
                            <h2 className="mb-4">Contact Me</h2>

                            {/* Contact Info */}
                            <div className="row mb-4">
                                <div className="col-md-4">
                                    <h5>Phone</h5>
                                    <p>{data.pages[page].phone}</p>
                                </div>
                                <div className="col-md-4">
                                    <h5>Email</h5>
                                    <p>{data.pages[page].email}</p>
                                </div>
                                <div className="col-md-4">
                                    <h5>Address</h5>
                                    <p>{data.pages[page].address}</p>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <form className="row g-3 justify-content-center" onSubmit={handleFormSubmit}>
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Your Name"
                                        value={val.userName}   // use userName
                                        onChange={(e) => setValue({ ...val, userName: e.target.value })} // use userName
                                        required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Your Email"
                                        value={val.email}
                                        onChange={(e) => setValue({ ...val, email: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="col-12">
                                    <textarea
                                        className="form-control"
                                        rows="4"
                                        placeholder="Your Message"
                                        value={val.message}
                                        onChange={(e) => setValue({ ...val, message: e.target.value })}
                                        required
                                    ></textarea>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary">Send Message</button>
                                </div>
                            </form>

                        </div>
                        {/* Show loader while submitting */}
                        {loading && (
                            <div className="d-flex flex-column align-items-center my-3">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif"
                                    alt="Loading..."
                                    style={{ width: "80px", height: "80px" }}
                                />
                                <p className="mt-2">Sending your message...</p>
                            </div>
                        )}
                    </section>

                )
            }


            {/* Skills Badges */}
            {
                data?.pages?.[page]?.skills && (
                    <div className="mb-4">
                        {data.pages[page].skills.map((skill, index) => {
                            const color = [
                                "badge bg-primary mx-1",
                                "badge bg-success mx-1",
                                "badge bg-warning text-dark mx-1",
                                "badge bg-info text-dark mx-1",
                                "badge bg-secondary mx-1"
                            ];
                            return (
                                <span key={index} className={color[index % color.length]}>
                                    {skill}
                                </span>
                            );
                        })}
                        <div className="d-flex justify-content-center my-5">
                            <img
                                src="https://en.idei.club/uploads/posts/2023-05/thumbs/1685505186_en-idei-club-p-programming-motivation-dizain-krasivo-2.png"
                                alt="motivational-image"
                                className="img-fluid rounded"
                            />
                        </div>
                    </div>
                )
            }
        </section >
    );
};
export default HeroComponent;
