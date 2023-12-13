import React, { useState } from "react";

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <div className="uk-container">
            <nav className="uk-navbar">
                <div className="uk-navbar-left">
                    <a className="uk-navbar-item uk-logo" href="/">
                        Logo
                    </a>
                </div>
                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                        <li>
                            <a href="#" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                <span className="uk-icon" uk-icon="plus; ratio: 1.2"></span>
                                <span className="uk-margin-small-right"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
