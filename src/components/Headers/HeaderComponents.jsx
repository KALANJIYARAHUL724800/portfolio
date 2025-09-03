import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeaderComponents = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [active, setActive] = useState(location.pathname);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Skills', path: '/skills' },
        { name: 'Contact', path: '/contact' },
    ];

    const faviconMap = {
        '/': 'https://cdn-icons-png.flaticon.com/128/5974/5974636.png',
        '/about': 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
        '/projects': 'https://cdn-icons-png.flaticon.com/128/4257/4257674.png',
        '/skills': 'https://cdn-icons-png.flaticon.com/128/1055/1055672.png',
        '/contact': 'https://cdn-icons-png.flaticon.com/128/561/561127.png'
    };

    const handleNavClick = (url) => {
        setActive(url);
        navigate(url);
    };

    useEffect(() => {
        document.title = "Kalanjiya Rahul Portfolio";

        const faviconId = "favicon-react";
        let link = document.getElementById(faviconId);

        if (!link) {
            link = document.createElement('link');
            link.id = faviconId;
            link.rel = 'icon';
            document.head.appendChild(link);
        }
        // link.href = 'https://cdn-icons-png.flaticon.com/128/5974/5974636.png';
        link.href = faviconMap[active] || faviconMap['/'];

    }, [active]);

    return (
        <nav className="navbar bg-primary d-flex align-items-center justify-content-between px-3 sticky-top" data-bs-theme="dark">
            <a className="navbar-brand mb-0 h1" href="#">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcfrZNFcNfb93YahdCfY0D3iPbtKL3rWhKOw&s"
                    alt="portfolio-logo"
                    className='brock-image'
                    style={{ height: '50px' }}
                />
            </a>

            <ul className="navbar-nav flex-row mb-0">
                {navItems.map((item, index) => (
                    <li className="nav-item me-3" key={index}>
                        <button
                            className={`btn nav-link text-white ${active === item.path ? 'disabled' : ''}`}
                            onClick={() => handleNavClick(item.path)}
                        >
                            {item.name}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default HeaderComponents;
