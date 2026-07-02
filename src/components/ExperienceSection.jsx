import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { PortfolioStyles } from "../styles/theme";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiExternalLink,
  FiArrowUpRight,
  FiBriefcase,
  FiCalendar,
  FiMapPin,
  FiCode,
  FiMonitor,
  FiFolder,
  FiUser,
  FiDownload, FiChevronDown,
  FiHome,
} from "react-icons/fi";

const experiences = [
  {
    role: "Member Technical Staff",
    company: "Chillsoft.io (HR Tech Startup)",
    duration: "Jun 2024 – Present",
    location: "Chennai, Tamil Nadu",

    description:
      "Developing scalable HRTech products by building enterprise-grade features, modernizing user experiences, and delivering business-critical modules using React.js, ASP.NET Core, and SQL Server.",

    points: [
      "Revamped the Recruitment Tracking System with a modern drawer-based workflow, streamlining the hiring process from candidate screening to employee onboarding.",
      "Re-architected the HR Dashboard with advanced multi-dimensional filtering, improving performance, usability, and data accessibility.",
      "Designed and developed a Recruitment Analytics Dashboard, providing actionable insights into hiring pipelines and recruitment performance.",
      "Built the Travel Management Module end-to-end, covering travel requests, multi-level approvals, finance validation, ticket booking, and coordination workflows.",
      "Owned and delivered the Chill Fix product, centralizing client query management, automating notifications, and improving support operations.",
    ],
  },

  {
    role: "Software Engineer Intern",
    company: "Chillsoft.io",
    duration: "Dec 2023 – May 2024",
    location: "Chennai, Tamil Nadu",

    description:
      "Contributed to enterprise HRMS development by building SQL-based solutions, supporting client implementations, and collaborating across the software development lifecycle.",

    points: [
      "Developed SQL Server stored procedures and reports for multiple HR modules based on business requirements.",
      "Served as the Single Point of Contact (SPOC) for a key enterprise client, gathering requirements and supporting successful feature rollouts.",
      "Worked closely with developers, QA, and product teams to resolve customer issues and deliver production-ready enhancements.",
    ],
  },
];
export default function ExperienceSection() {
  const classes = PortfolioStyles();

  return (
    <section className={classes.experienceSection}>
      <p className={classes.sectionTag}>EXPERIENCE</p>

      <h2 className={classes.sectionTitle}>
        Professional <span>Experience</span>
      </h2>

      <div className={classes.timeline}>
        {experiences.map((exp) => (
          <Accordion
            key={exp.company + exp.role}
            className={classes.experienceAccordion}
            disableGutters
            elevation={0}
          >
            <AccordionSummary
              expandIcon={<FiChevronDown color="#8B5CF6" size={22} />}
              className={classes.experienceSummary}
            >
              <div className={classes.experienceHeader}>
                <h3>{exp.role}</h3>

                <div className={classes.companyRow}>
                  <span>
                    <FiBriefcase size={18} />
                    {exp.company}
                  </span>

                  <span>
                    <FiCalendar size={18} />
                    {exp.duration}
                  </span>

                  <span>
                    <FiMapPin size={18} />
                    {exp.location}
                  </span>
                </div>
              </div>
            </AccordionSummary>

            <AccordionDetails className={classes.experienceDetails}>
              <p className={classes.experienceDescription}>
                {exp.description}
              </p>

              <ul className={classes.experienceList}>
                {exp.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </section>
  );
}