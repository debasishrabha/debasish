import './contact.css';
import {
    FaEnvelope,
    FaLinkedin,
    FaGithub,
    FaInstagram,
} from 'react-icons/fa';

function ContactPage() {
    return (
        <div className="contact-wrapper">
            <h2>Contact Me</h2>

            <div className="contact-container">
                {/* Email + Social Section */}
                <div className="contact-info">
                    <div className="email-box">
                        <FaEnvelope className="icon" />
                        <span>debasishrva78@gmail.com</span>
                    </div>

                    <div className="social-icons-contact">
                        {[
                            { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/debasish-rabha-942786342/' },
                            { icon: <FaGithub />, url: 'https://github.com/debasishrabha' },
                            { icon: <FaInstagram />, url: 'https://www.instagram.com/deba_.s1sh/' },
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <form
                    className="contact-form"
                    action="https://formsubmit.co/debasishrva78@gmail.com"
                    method="POST">


                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            required
                        ></textarea>
                        <button type="submit">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactPage;
