import React, { useState } from 'react';
import logo from '/src/assets/logo-sssp.png';
import '../pages/navbar-style.css';

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleMouseEnter = (dropdownName) => {
        setActiveDropdown(dropdownName);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    return (
        <div className="nav">
            <div className="top-bar">
                <div className="left">
                    <p>Have any questions?</p>
                    {/* <a href="tel:+923365888159">+92-336-5888159</a> */}
                    <a href="https://wa.me/923365888159" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                        <i className="fa fa-whatsapp icon-color" aria-hidden="true"></i>
                        <span>+92-336-5888159</span>
                    </a>
                    <a href="mailto:info@sss-pakistan.org">info@sss-pakistan.org</a>
                </div>
                <div className="right">
                    <a href="#">Download Membership Form</a>
                    <a href="#">Follow us on Facebook</a>
                </div>
            </div>
            <nav className="navbar">
            <a href="#" className="navbar-logo">
                <img src={logo} alt="Logo" className="logo"/>
            </a>
            <ul className="navbar-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li 
                    className="has-dropdown"
                    onMouseEnter={() => handleMouseEnter('ec')}
                    onMouseLeave={handleMouseLeave}
                >
                    <a href="/executive-council">Executive Council</a>
                    <ul className={`dropdown-menu ${activeDropdown === 'ec' ? 'active' : ''}`}>
                        <li><a href="/executive-council/current">Current EC</a></li>
                        <li><a href="/executive-council/past">Past ECs</a></li>
                    </ul>
                </li>
                <li 
                    className="has-dropdown"
                    onMouseEnter={() => handleMouseEnter('awards')}
                    onMouseLeave={handleMouseLeave}
                >
                    <a href="/honors-awards">Honors & Awards</a>
                    <ul className={`dropdown-menu ${activeDropdown === 'awards' ? 'active' : ''}`}>
                        <li><a href="/honors-awards/about">About SSSP Awards</a></li>
                        <li><a href="/honors-awards/honorary-membership">Honorary Membership of SSSP</a></li>
                        <li><a href="/honors-awards/fellows">Fellows of SSSP</a></li>
                        <li><a href="/honors-awards/distinguished-service">Distinguished Soil Science Service Awards</a></li>
                        <li><a href="/honors-awards/society-service">Services to the Society Award</a></li>
                        <li><a href="/honors-awards/gold-medal">SSSP Gold Medal Award</a></li>
                    </ul>
                </li>
                <li 
                    className="has-dropdown"
                    onMouseEnter={() => handleMouseEnter('icss')}
                    onMouseLeave={handleMouseLeave}
                >
                    <a href="/icss-2026">ICSS-2026</a>
                    <ul className={`dropdown-menu ${activeDropdown === 'icss' ? 'active' : ''}`}>
                        <li><a href="/icss-2026/previous">Previous Congresses of SSSP</a></li>
                    </ul>
                </li>
                <li><a href="/newsletter">Newsletter Archive</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/directory">Directory</a></li>
            </ul>
        </nav>
        </div>
        
    );
};

export default Navbar;