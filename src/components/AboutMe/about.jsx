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
          I'm Mokete Elias Tyabekana, A Passionate Frontend Developer & UI/UX Designer With Expertise In React, JavaScript, And Tailwind CSS, Dedicated To Building Responsive And User-Friendly Applications. With A Diploma in Information Technology From Central University Of Technology, Free State, I Have Experience In Web Development, UI/UX Design, And IT Support, Having Worked As An IT Officer At <strong>Softstart BT1 (Botshabelo Digital Hub)</strong>, Where I Mentored Interns And Assisted Startups. I Enjoy Transforming Ideas Into Digital Experiences, Whether Through Intuitive UI Designs In Figma Or Developing Scalable Web Applications. Currently, I'm Expanding My Knowledge In React Native And Working On Projects That Merge Creativity With Functionality To Solve Real-World Problems.
        </p>
      </div>

      {/* Education & Certifications Section */}
      <div className="education-certifications">
        <div className="education">
          <h2 className="section-title">Education</h2>
          <ul className="about-list">
            <li>Diploma in Information Technology</li>
            <li>National Senior Certificate [Grade 12/Matric]</li>
          </ul>
        </div>

        <div className="certificate">
          <h2 className="section-title">Certifications & Courses</h2>
          <ul className="about-list">
            <li>Front-End Web Development Program [ALX Africa]</li>
            <li>JavaScript Algorithms and Data Structures [freeCodeCamp]</li>
            <li>Web Programming Foundations [LinkedIn]</li>
            <li>HTML Essential Training [LinkedIn]</li>
            <li>JavaScript Essentials [Cisco]</li>
            <li>Professional Foundations [ALX Africa]</li>
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
