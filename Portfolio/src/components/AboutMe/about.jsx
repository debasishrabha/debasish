import htmlIcon from '../../assets/html.png';
import cssIcon from '../../assets/css.png';
import jsIcon from '../../assets/js.png';
import reactIcon from '../../assets/react.png';
import kotlinIcon from '../../assets/kotlin.png';
import nodejsIcon from '../../assets/nodejs.png';
import gitIcon from '../../assets/git.png';
import figmaIcon from '../../assets/figma.png';
import pythonIcon from '../../assets/python.png';
import expressIcon from '../../assets/express.png';
import mongoIcon from '../../assets/mongo.png';
import databaseIcon from '../../assets/database.png'
import './about.css';

const AboutMe = () => {
  return (
    <div className="about-container">
      {/* About Me Section */}
      <div className="about-section">
        <h1 className="about-title">About Me</h1>
        <p className="about-text">
          Hi! I'm Debasish Rabha, a 6th-semester student of Computer Science Engineering at Jorhat Engineering College. I love developing websites and mobile applications that are both efficient and user-friendly.

          I like to work on practical projects that enable me to implement what I've learned in class and learn more from beyond books. My current areas of interest are full-stack web development, app development in Kotlin, and learning new technologies that can resolve day-to-day issues.

          I’m always eager to learn, collaborate, and grow — whether it’s through personal projects, internships, or team-based challenges. My goal is to become a skilled software developer and contribute to impactful solutions in the tech world.
        </p>
      </div>

      {/* Education & Certifications Section */}
      <div className="education-certifications">
        <div className="education">
          <h2 className="section-title">Education</h2>
          <ul className="about-list">
            <li>Pursuing Bachelor of Technology in Computer Science & Engineering</li>
            <li>Secondar Board of Education[class 12]</li>
          </ul>
        </div>

        <div className="certificate">
          <h2 className="section-title">Certifications & Courses</h2>
          <ul className="about-list">
            <li>The Complete Full Stack Web Development Booycamp [Dr. Angela Yu]</li>
            <li>Cyber Security Foundation [SpringBoard]</li>
            <li>Python For Machine Learnning[Great Learning]</li>
            <li>Indutrial Training From ICOL</li>
            <li>Academic Certificate on research project Gabrial Graph [IIITG]</li>
            <li>From learner to builder: Become an Ai agent Architech [IBM] </li>
          </ul>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h2 className="skills-title">Skills & Technologies</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <img src={htmlIcon} alt="HTML" className="skill-image" />
            <span className="skill-label">HTML</span>
          </div>
          <div className="skill-item">
            <img src={cssIcon} alt="CSS" className="skill-image" />
            <span className="skill-label">CSS</span>
          </div>
          <div className="skill-item">
            <img src={jsIcon} alt="JavaScript" className="skill-image" />
            <span className="skill-label">JavaScript</span>
          </div>
          <div className="skill-item">
            <img src={reactIcon} alt="React" className="skill-image" />
            <span className="skill-label">React</span>
          </div>
          <div className="skill-item">
            <img src={kotlinIcon} alt="Kotlin" className="skill-image" />
            <span className="skill-label">Kotlin</span>
          </div>
          <div className="skill-item">
            <img src={nodejsIcon} alt="nodejs" className="skill-image" />
            <span className="skill-label">Node Js</span>
          </div>
          <div className="skill-item">
            <img src={gitIcon} alt="Git" className="skill-image" />
            <span className="skill-label">Git</span>
          </div>
          <div className="skill-item">
            <img src={expressIcon} alt="Git" className="skill-image" />
            <span className="skill-label">Express Js</span>
          </div>
          <div className="skill-item">
            <img src={pythonIcon} alt="Git" className="skill-image" />
            <span className="skill-label">Python</span>
          </div>
          <div className="skill-item">
            <img src={mongoIcon} alt="Git" className="skill-image" />
            <span className="skill-label">MongoDb</span>
          </div>
          <div className="skill-item">
            <img src={figmaIcon} alt="Git" className="skill-image" />
            <span className="skill-label">Figma</span>
          </div>
          <div className="skill-item">
            <img src={databaseIcon} alt="Git" className="skill-image" />
            <span className="skill-label">Postgresql</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
