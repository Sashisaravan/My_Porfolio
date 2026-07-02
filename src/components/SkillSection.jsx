import { PortfolioStyles } from "../styles/theme";

export default function SkillsSection() {
  const classes = PortfolioStyles();

  const skillGroups = [
    {
      title: "Frontend & Backend",
      skills: [
        "React.js",
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Material UI",
        "jQuery",
        "ASP.NET Core",
        "C#",
        "Node.js",
        "Express.js",
        "REST APIs",
        "Java (Basics)",
      ],
    },
    {
      title: "Database",
      skills: [
        "Microsoft SQL Server",
        "T-SQL",
        "Stored Procedures",
        "SQL Optimization",
      ],
    },
    {
      title: "State Management & AI",
      skills: [
        "Redux Toolkit",
        "Groq API",
      ],
    },
    {
      title: "Tools",
      skills: [
        "Git",
        "GitLab",
        "VS Code",
        "Visual Studio",
        "SSMS",
        "Postman",
      ],
    },
  ];
  return (
    <section id="skills" className={classes.skillsSection}>
      <p className={classes.sectionTag}>MY SKILLS</p>

      <h2 className={classes.sectionTitle}>
        Technologies <span>I work with</span>
      </h2>

      <div className={classes.skillsGrid}>
        {skillGroups.map((group) => (
          <div key={group.title} className={classes.skillCard}>
            <h3>{group.title}</h3>

            <div className={classes.skillChipContainer}>
              {group.skills.map((skill) => (
                <span key={skill} className={classes.skillChip}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}