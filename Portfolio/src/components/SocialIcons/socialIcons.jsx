import './icon.css';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

function SocialIcons() {
    return (
        <div className="social-icons">
            <a
                href="https://www.instagram.com/deba_.s1sh/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaInstagram />
            </a>

            <a
                href="https://www.linkedin.com/in/debasish-rabha-942786342/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaLinkedinIn />
            </a>

            <a
                href="https://github.com/debasishrabha"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaGithub />
            </a>
        </div>
    );
}

export default SocialIcons;
