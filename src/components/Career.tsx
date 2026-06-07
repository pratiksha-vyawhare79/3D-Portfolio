import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>Codeverge IT Solutions</h5>
              </div>
              <h3>DEC 2025–PRESENT</h3>
            </div>
            <p>
              Developed responsive web platforms and dynamic UI/UX solutions.
              Built NGO platform features with content management and donation tracking using React.js, Node.js, and MySQL.
              Optimized web performance and responsiveness using Tailwind CSS/Bootstrap (Vispera).
              Implemented CI/CD pipelines and backend features for Avani News Portal using Spring Boot and Postgres SQL.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Trainee</h4>
                <h5>Yes Infotech, Pune</h5>
              </div>
              <h3>MAY–NOV 2025</h3>
            </div>
            <p>
              Completed intensive training in Full Stack Java development. Developed deep proficiency in Core and Advanced Java, Spring Boot,
              Spring MVC, Hibernate/JPA, REST APIs, and microservices architecture. Gained practical experience building and debugging enterprise-grade 
              web applications using React.js and MySQL in an Agile environment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Developer Intern</h4>
                <h5>HackVeda Pvt. Ltd.</h5>
              </div>
              <h3>JUN–NOV 2024</h3>
            </div>
            <p>
              Built backend services and API modules using Spring Boot, Spring MVC, JPA, and MySQL database.
              Created and integrated React.js frontend interfaces with Java REST endpoints.
              Collaborated using Git/GitHub version control in Agile/Scrum sprints, and validated interface integrations using Postman.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
