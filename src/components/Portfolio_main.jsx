import { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Avatar,
  Stack,
  Paper,
  IconButton, Drawer
} from "@mui/material";
import { PortfolioStyles } from "../styles/theme";
import ProfileImage from "../assets/sashi_img.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import XIcon from "@mui/icons-material/X";
import { FiCode, FiMenu, FiX } from "react-icons/fi";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AboutSection from "../components/About";
import SkillsSection from "../components/SkillSection";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/Footer";

export default function PortfolioMain() {
  const classes = PortfolioStyles();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");

  const handleNavigation = (id) => {
    setActiveMenu(id);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMobileMenu(false);
  };

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "skills",
      "projects",
      "experience",
      "contact",
      "footer"
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (!section) return;

        if (scrollPosition >= section.offsetTop) {
          current = id;
        }
      });

      if (current !== activeMenu) {
        setActiveMenu(current);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeMenu]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMobileMenu(false);
  };

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];


  return (
    <div className={classes.root}>
      <nav className={classes.appBar}>
        <div className={classes.toolbar}>
          <div className={classes.logo}>
            <span className={classes.bracket}>{"<"}</span>

            <span className={classes.headname}>Sashi</span>

            <span className={classes.bracket}>{"/>"}</span>
          </div>

          <div className={classes.navLinks}>
            <span
              className={activeMenu === "home" ? classes.activeNav : ""}
              onClick={() => handleNavigation("home")}
            >
              Home
            </span>

            <span
              className={activeMenu === "about" ? classes.activeNav : ""}
              onClick={() => handleNavigation("about")}
            >
              About
            </span>

            <span
              className={activeMenu === "skills" ? classes.activeNav : ""}
              onClick={() => handleNavigation("skills")}
            >
              Skills
            </span>

            <span
              className={activeMenu === "projects" ? classes.activeNav : ""}
              onClick={() => handleNavigation("projects")}
            >
              Projects
            </span>

            <span
              className={activeMenu === "experience" ? classes.activeNav : ""}
              onClick={() => handleNavigation("experience")}
            >
              Experience
            </span>

            <span
              className={activeMenu === "contact" ? classes.activeNav : ""}
              onClick={() => handleNavigation("contact")}
            >
              Contact
            </span>
          </div>
          <div
            className={classes.menuButton}
            onClick={() => setMobileMenu(true)}
          >
            <FiMenu size={30} color="#ffff" className="d-flex justify-content-end ms-auto" />
          </div>
        </div>
        <>
          {mobileMenu && (
            <div
              className={classes.overlay}
              onClick={() => setMobileMenu(false)}
            />
          )}
          <div
            className={`${classes.mobileDrawer} ${mobileMenu ? classes.drawerOpen : ""
              }`}
          >
            <div className={classes.drawerHeader}>
              <button
                className={classes.closeBtn}
                onClick={() => setMobileMenu(false)}
              >
                <FiX size={18} />
              </button>
            </div>

            <div className={classes.mobileNav}>
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className={`${classes.mobileItem} ${activeMenu === item.id ? classes.activeItem : ""
                    }`}
                  onClick={() => handleNavigation(item.id)}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </>
      </nav>
      <section id="home" className={classes.container}>
        <div className={classes.heroGrid}>
          <div className={classes.leftSection}>
            <div className={classes.chip}>
              Let's Build Together
            </div>

            <h1 className={classes.heading}>
              Hey there ! I'm
            </h1>

            <h1 className={classes.name}>
              Sashi Saravan
            </h1>

            <p className={classes.description}>
              Product Engineer with 2.5+ years of experience building modern web applications using React, Node.js, and SQL Server. Skilled in creating responsive user interfaces, integrating APIs, and delivering performant, scalable solutions.
            </p>

            <div className={`${classes.topbandbutton}`}>
              <a
                href="https://drive.google.com/file/d/1eBDoPxcjR0tPrzaPVPUt8ffVXXwfFp-8/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.resumeButton}
              >
                Download Resume
              </a>

              <a href="#experience" className={classes.linkedinButton}>
                View My Work
              </a>
            </div>
            <div className={classes.socialIcons}>
              <a
                href="https://github.com/Sashisaravan"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.iconButton}
              >
                <GitHubIcon />
              </a>

              <a
                href="https://www.linkedin.com/in/sashisaravansv/"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.iconButton}
              >
                <LinkedInIcon />
              </a>

              <a
                href="mailto:sashisaravan2000@gmail.com"
                className={classes.iconButton}
              >
                <EmailIcon />
              </a>
            </div>
          </div>
          <div className={classes.rightSection}>
            <div className={classes.profileWrapper}>
              <div className={classes.profileCircle}>
                <img
                  src={ProfileImage}
                  alt="Sashi Saravan"
                  className={classes.profileImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="skills">
        <SkillsSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="experience">
        <ExperienceSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <section id="footer">
        <FooterSection />
      </section>
    </div>
  );
}