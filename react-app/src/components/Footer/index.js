import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="person-container">
                <h4 className="single-name">Christian Oviedo</h4>
                <div className="links-wrapper">
                    <a
                        href="https://www.linkedin.com/in/christian-oviedo-6a1586242/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin-link"
                    >
                        <div className="linked-in-wrapper">
                            <div className="linkedin-github-text">LinkedIn</div>
                            <i class="fa-brands fa-linkedin"></i>
                        </div>
                    </a>
                    <a href="https://github.com/Christian-815" target="_blank" rel="noopener noreferrer" className="github-link">
                        <div className="github-wrapper">
                            <div className="linkedin-github-text">Github</div>
                            <i class="fa-brands fa-github"></i>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
