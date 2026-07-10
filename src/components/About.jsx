import { Button } from "@mui/material";
import { PortfolioStyles } from "../styles/theme";

export default function AboutSection() {
  const classes = PortfolioStyles();
  return (
    <section id="about" className={classes.aboutSection}>
      <p className={classes.sectionTag}>ABOUT ME</p>

      <h2 className={classes.sectionTitle}>
        Get to know <span>me</span>
      </h2>

      <div className={classes.aboutGrid}>
        <div>
          <p className={classes.aboutText}>
            I'm a Product Engineer with 2.5+ years of experience building scalable, high-performance web applications using React.js, Node.js, Express.js, and SQL Server. I focus on developing clean, responsive, and user-friendly applications that solve real-world problems and deliver meaningful business value.
          </p>

          <p className={classes.aboutText}>
            I'm currently looking for opportunities to build innovative products, solve challenging technical problems, and collaborate with talented teams. I'm always eager to learn new technologies and contribute to impactful projects.
          </p>

          <div className={classes.aboutButtons}>
            <a
              href="https://drive.google.com/file/d/1GQBDEZE8o8Ta05dCJ65Y3XvXkGSRmctR/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.resumeButton}
            >
              Download Resume
            </a>

            <a
              href="https://www.linkedin.com/in/sashisaravansv/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.linkedinButton}
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}