import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { PortfolioStyles } from "../styles/theme";
import {
  FiGithub,
  FiExternalLink,
  FiArrowUpRight,
} from "react-icons/fi";

const projects = [
  {
    title: "Personal Portfolio Website",
    category: "Portfolio Website",
    description:
      "Designed and developed a modern, fully responsive personal portfolio to showcase my skills, projects, and professional experience. Features smooth scrolling, interactive UI components, responsive layouts, and a clean Material Design-inspired interface.",
    technologies: [
      "React.js",
      "Material UI",
      "JavaScript",
      "CSS-in-JS",
      "Responsive Design",
    ],
    github: "",
    live: "",
  },
  {
    title: "AI Job Description Builder",
    category: "AI Application",
    description:
      "Built an AI-powered Job Description Builder that generates ATS-friendly job descriptions using the Groq API. Features include live preview, customizable templates, and PDF/Word export to streamline the recruitment process.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "Groq API",
      "Material UI",
    ],
    github: "",
    live: "",
  },
  {
    title: "Chill Fix - Internal Ticketing System",
    category: "Enterprise Application",
    description:
      "Developed an enterprise ticket management system to centralize client query management, monitor ticket status, automate notifications, and improve issue resolution. Implemented SQL Server stored procedures to generate scheduled weekly and monthly reports, reducing manual effort and improving operational efficiency.",
    technologies: [
      "React.js",
      "ASP.NET Core",
      "SQL Server",
      "Stored Procedures",
      "REST API",
    ],
    github: "#",
    live: "#",   
  },
];
export default function ProjectsSection() {
  const classes = PortfolioStyles();

  return (
    <section className={classes.projectsSection}>
      <p className={classes.sectionTag}>FEATURED PROJECTS</p>

      <h2 className={classes.sectionTitle}>
        My <span>Projects</span>
      </h2>

      <div className={classes.projectsGrid}>
        {projects.map((project) => (
          <div key={project.title} className={classes.projectCard}>
            <div className={classes.projectHeader}>
              <h3>{project.title}</h3>

            </div>

            <span className={classes.projectBadge}>
              {project.category}
            </span>

            {/* <div className={classes.projectLinks}>
              <a href={project.github}>
                <FiGithub size={18} />
              </a>

              <a href={project.live}>
                <FiExternalLink size={18} />
              </a>
            </div> */}

            <p className={classes.projectDescription}>
              {project.description}
            </p>

            <div className={classes.techStack}>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={classes.techChip}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* <button className={classes.viewProjectBtn}>
              View Project
              <FiArrowUpRight size={18} />
            </button> */}
          </div>
        ))}
      </div>
    </section>
  );
}