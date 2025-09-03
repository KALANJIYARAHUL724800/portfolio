import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FooterComponents = () => {
    return (
        <footer className="bg-dark text-light text-center py-4 mt-5">
            <div>
                {/* Contact Info */}
                <p>Email: kalanjiyarahul72480000@gmail.com | Phone: 8754859090</p>

                {/* Social Links */}
                <div className="mb-2">
                    <a href="#" className="text-light me-3">LinkedIn</a>
                    <a href="https://github.com/KALANJIYARAHUL724800/" target="_blank" className="text-light me-3">GitHub</a>
                    <a href="#" className="text-light">Twitter</a>
                </div>

                {/* Copyright */}
                <p className="mb-0">© 2025 Kalanjiya Rahul. All rights reserved.</p>

                {/* Tagline */}
                <small>“Building digital solutions with passion.”</small>
            </div>
        </footer>
    );
};

export default FooterComponents;
