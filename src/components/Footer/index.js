import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"

function Footer() {

    return (
        <footer>
            <div>
                <a href="https://github.com/EricKenji" target="blank">
                    <FontAwesomeIcon icon={faGithub} className="fa-3x" />
                </a>
                <a href="https://linkedin.com" target="blank">
                    <FontAwesomeIcon icon={faLinkedin} className="fa-3x" />
                </a>
                <a href="https://twitter.com" target="blank">
                   <FontAwesomeIcon icon={faTwitter} className="fa-3x" /> 
                </a>
                
            </div>
        </footer>
    );
};

export default Footer;