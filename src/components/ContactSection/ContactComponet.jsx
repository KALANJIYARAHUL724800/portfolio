import React, { useState, useEffect } from 'react';
import sendContactForm from '../Connection';

const ContactComponent = () => {
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
        sendContactForm(val)
            .then(response => {
                alert("Message sent!");
                setValue({ userName: '', email: '', message: '' }); // clear form
            })
            .catch(error => {
                console.error("Error sending message:", error);
                alert("Failed to send message");
            });
        console.log(val);

    };

    return (
        <section className="contact-section py-5 bg-white" id="contact">
            <div className="container text-center">
                <h2 className="mb-4">Contact Me</h2>

                {/* Contact Info */}
                <div className="row mb-4">
                    <div className="col-md-4">
                        <h5>Phone</h5>
                        <p>+91 8754859090</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Email</h5>
                        <p>kalanjiyarahul72480000@gmail.com</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Address</h5>
                        <p>7/320 Lakshmipuram, Kilakarai, Tamil Nadu</p>
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
        </section>
    );
};

export default ContactComponent;
