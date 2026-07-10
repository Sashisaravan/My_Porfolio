import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import { PortfolioStyles } from "../styles/theme";

export default function FooterSection() {
    const classes = PortfolioStyles();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const navItems = [
        "Home",
        "About",
        "Skills",
        "Projects",
        "Experience",
        "Contact",
    ];


    return (
        <footer className={classes.footer}>
            <div className={classes.footerTop}>
                <div>
                    <div className={classes.logo}>
                        <span className={classes.bracket}>{"<"}</span>

                        <span className={classes.headname}>Sashi</span>

                        <span className={classes.bracket}>{"/>"}</span>
                    </div>

                    <p className={classes.footerText}>
                        Crafting digital experiences
                    </p>
                </div>

                <div className={classes.footerNav}>
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className={classes.footerLink}
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <div className={classes.footerRight}>
                    <a
                        href="https://github.com/Sashisaravan"
                        target="_blank"
                        rel="noreferrer"
                        className={classes.footerIcon}
                    >
                        <FiGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/sashisaravansv/"
                        target="_blank"
                        rel="noreferrer"
                        className={classes.footerIcon}
                    >
                        <FiLinkedin />
                    </a>

                    <a
                        href="mailto:sashisaravan2000@gmail.com"
                        className={classes.footerIcon}
                    >
                        <FiMail />
                    </a>

                    <button
                        onClick={scrollToTop}
                        className={classes.scrollTopButton}
                    >
                        <FiArrowUp />
                    </button>
                </div>
            </div>

            <div className={classes.footerDivider} />

            <p className={classes.footerCopyright}>
                © {new Date().getFullYear()} Sashi Saravan. Turning Ideas into Scalable Solutions.
            </p>
            <p className={classes.lastUpdated}>
                Last Updated: July 10, 2026
            </p>
        </footer>
    );
}