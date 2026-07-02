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
            I'm a <strong>Product Engineer</strong> with <strong>2.5+ years</strong> of experience building scalable, high-performance web applications using <strong>React.js</strong>, <strong>ASP.NET Core (C#)</strong>, and <strong>SQL Server</strong>. I enjoy creating clean, responsive, and user-focused products that deliver real business value.
          </p>

          <p className={classes.aboutText}>
            I'm actively seeking opportunities to build innovative products, solve challenging problems, and collaborate with passionate teams. Let's connect and create something impactful together.
          </p>

          <div className={classes.aboutButtons}>
            <a
              href="https://drive.google.com/file/d/1eBDoPxcjR0tPrzaPVPUt8ffVXXwfFp-8/view?usp=sharing"
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