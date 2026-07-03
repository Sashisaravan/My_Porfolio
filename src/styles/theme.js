import { makeStyles } from "@mui/styles";

export const PortfolioStyles = makeStyles({
  root: {
    background: "#090912",
    minHeight: "100vh",
    color: "#fff",
    fontFamily: "Inter, sans-serif",
  },

  appBar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: 90,
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid rgba(255,255,255,.06)",
    background: "rgba(9,9,18,.82)",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
    zIndex: 1200,
    transition: "all .3s ease",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: "18px 40px",

    "@media (max-width: 768px)": {
      padding: "16px 20px",
    },
  },
  logo: {
    alignItems: "center",
    gap: 5,
    cursor: "pointer",
  },

  bracket: {
    fontSize: 28,
    fontWeight: 700,
    color: "#8B5CF6",
    fontFamily: "monospace",
  },

  headname: {
    fontSize: 24,
    fontWeight: 700,
    color: "#fff",
    letterSpacing: 1.2,
    letterSpacing: '-1px'
  },

  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: 18,

    "& span": {
      color: "#A1A1AA",
      fontSize: 16,
      fontWeight: 600,
      padding: "14px 24px",
      borderRadius: 18,
      cursor: "pointer",
      transition: "all .3s ease",
      fontFamily: "'Space Grotesk', sans-serif",

      "&:hover": {
        color: "#fff",
        background: "rgba(139,92,246,.08)",
      },
    },
  },

  activeNav: {
    background: "#2A1F4D",
    color: "#A78BFA !important",
    boxShadow: "0 8px 25px rgba(139,92,246,.18)",

    "&:hover": {
      background: "#2A1F4D",
      color: "#A78BFA !important",
    },
  },

  hireButton: {
    border: 0,
    outline: 0,
    background: "#7D6AF7",
    color: "#fff",
    borderRadius: 12,
    padding: "18px 34px",
    fontSize: 20,
    fontWeight: 700,
    cursor: "pointer",
    transition: ".25s",

    "&:hover": {
      background: "#6f5bf2",
      transform: "translateY(-2px)",
    },
  },

  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    padding: "120px 60px 80px",

    "@media (max-width:768px)": {
      minHeight: "auto",
      padding: "85px 20px 70px",
    },
  },
  heroGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 550px",
    gap: 80,
    alignItems: "center",
  },

  leftSection: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "10%",

    "@media (max-width:1200px)": {
      marginBottom: 0,
      alignItems: "center",
    },
  },

  chip: {
    display: "inline-flex",
    alignItems: "center",
    width: "fit-content",
    padding: "12px 22px",
    borderRadius: 999,
    background: "#0D2217",
    border: "1px solid rgba(58,201,114,.25)",
    color: "#32D583",
    fontWeight: 600,
    fontSize: 17,
    marginBottom: 20,

    "&::before": {
      content: '""',
      width: 10,
      height: 10,
      background: "#2ED47A",
      borderRadius: "50%",
      marginRight: 12,
    },
  },

  heading: {
    margin: 0,
    fontSize: 22,
    lineHeight: 1.02,
  },

  name: {
    margin: "12px 0 12px",
    fontSize: 50,
    lineHeight: 1.02,
    letterSpacing: "-2px",
    color: "#8F82FF",
  },

  description: {
    width: 700,
    color: "#989AB8",
    fontSize: 18,
    lineHeight: 1.9,
    margin: 0,
  },

  heroButtons: {
    display: "flex",
    gap: 24,
    marginTop: 20,
  },

  primaryButton: {
    border: 0,
    background: "#7D6AF7",
    color: "#fff",
    padding: "22px 42px",
    borderRadius: 14,
    fontWeight: 700,
    fontSize: 22,
    cursor: "pointer",
    transition: ".25s",

    "&:hover": {
      background: "#6E5AF4",
    },
  },

  secondaryButton: {
    border: "1px solid #333548",
    background: "transparent",
    color: "#fff",
    padding: "22px 42px",
    borderRadius: 14,
    fontWeight: 700,
    fontSize: 22,
    cursor: "pointer",

    "&:hover": {
      borderColor: "#7D6AF7",
      background: "rgba(125,106,247,.08)",
    },
  },

  socialIcons: {
    display: "flex",
    gap: 20,
    marginTop: 20,
  },

  iconButton: {
    width: 60,
    height: 60,
    borderRadius: 14,
    background: "transparent",
    border: "1px solid #2E3042",
    color: "#B0B2CC",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: ".25s",

    "& svg": {
      fontSize: 30,
    },

    "&:hover": {
      borderColor: "#7D6AF7",
      color: "#7D6AF7",
      background: "rgba(125,106,247,.08)",
    },
  },

  rightSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 0
  },

  activeNav: {
    color: "#fff !important",
    position: "relative",

    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: -12,
      width: "100%",
      height: 3,
      borderRadius: 20,
      background: '#fff'
    },
  },

  profileWrapper: {
    position: "relative",
    width: 520,
    height: 520,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    animation: "$float 6s ease-in-out infinite",

    "&::before": {
      content: '""',
      position: "absolute",
      width: 460,
      height: 460,
      borderRadius: "50%",
      border: "1px solid rgba(147,132,255,.15)",
      animation: "$rotate 18s linear infinite",
    },

    "&::after": {
      content: '""',
      position: "absolute",
      width: 500,
      height: 500,
      borderRadius: "50%",
      border: "1px dashed rgba(147,132,255,.08)",
      animation: "$rotateReverse 25s linear infinite",
    },
  },

  profileCircle: {
    width: 420,
    height: 420,
    borderRadius: "50%",
    overflow: "hidden",
    position: "relative",
    padding: 6,

    background:
      "linear-gradient(135deg,#7C3AED,#8B5CF6,#3B82F6)",

    boxShadow: `
      0 0 70px rgba(124,58,237,.35),
      0 25px 60px rgba(0,0,0,.55)
  `,

    transition: "all .4s ease",

    "&:hover": {
      transform: "translateY(-8px) scale(1.02)",
      boxShadow: `
      0 0 90px rgba(124,58,237,.55),
      0 35px 80px rgba(0,0,0,.65)
    `,
    },

    "&::before": {
      content: '""',
      position: "absolute",
      inset: 6,
      borderRadius: "50%",
      background: "#12121A",
      zIndex: 0,
    },
  },

  profileImage: {
    position: "relative",
    zIndex: 1,
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    objectFit: "cover",
    transition: "transform .5s ease",

    "$profileCircle:hover &": {
      transform: "scale(1.06)",
    },
  },

  "@keyframes float": {
    "0%": {
      transform: "translateY(0px)",
    },
    "50%": {
      transform: "translateY(-12px)",
    },
    "100%": {
      transform: "translateY(0px)",
    },
  },

  "@keyframes rotate": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },

  "@keyframes rotateReverse": {
    from: {
      transform: "rotate(360deg)",
    },
    to: {
      transform: "rotate(0deg)",
    },
  },

  initials: {
    margin: 0,
    color: "#9384FF",
    fontSize: 96,
    fontWeight: 800,
    letterSpacing: "-2px",
  },

  role: {
    marginTop: 30,
    color: "#8A8DA7",
    fontSize: 28,
    fontFamily: "monospace",
  },

  statsPaper: {
    marginTop: 55,
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    border: "1px solid rgba(255,255,255,.08)",
    borderRadius: 18,
    overflow: "hidden",
    background: "#101019",
  },

  statItem: {
    padding: "36px 20px",
    textAlign: "center",
    borderRight: "1px solid rgba(255,255,255,.08)",

    "&:last-child": {
      borderRight: 0,
    },
  },

  statNumber: {
    margin: 0,
    fontSize: 56,
    fontWeight: 800,
    color: "#9384FF",
  },

  statLabel: {
    marginTop: 16,
    color: "#8B8DA7",
    fontSize: 22,
  },

  "@media (max-width: 1200px)": {
    toolbar: {
      padding: "0 40px",
    },

    heroGrid: {
      gridTemplateColumns: "1fr",
      gap: 10,
      textAlign: "center",
      height: "auto",
    },

    description: {
      width: "100%",
      maxWidth: 750,
    },

    heroButtons: {
      justifyContent: "center",
      flexWrap: "wrap",
    },

    socialIcons: {
      justifyContent: "center",
    },

    rightSection: {
      order: -1,
      display: "flex",
      justifyContent: "center",
      marginBottom: 10,
    },
  },

  "@media (max-width: 992px)": {
    appBar: {
      height: 75,
    },

    toolbar: {
      padding: "0 25px",
    },

    navLinks: {
      gap: 28,

      "& span": {
        fontSize: 16,
      },
    },

    heading: {
      fontSize: 42,
    },

    name: {
      fontSize: 56,
    },

    description: {
      fontSize: 18,
      lineHeight: 1.8,
    },

    profileWrapper: {
      width: 420,
      height: 420,

      "&::before": {
        width: 360,
        height: 360,
      },

      "&::after": {
        width: 400,
        height: 400,
      },
    },

    profileCircle: {
      width: 320,
      height: 320,
    },

    statsPaper: {
      maxWidth: 600,
    },

    statNumber: {
      fontSize: 42,
    },

    statLabel: {
      fontSize: 18,
    },
  },

  "@media (max-width: 768px)": {
    appBar: {
      padding: "14px 0",
    },

    toolbar: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 20px",
    },

    logo: {
      marginTop: 0,
      width: "auto",
      fontSize: 24,
    },

    navLinks: {
      display: "none",
    },

    menuButton: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    },

    chip: {
      fontSize: 16,
      padding: "10px 18px",
    },

    heading: {
      fontSize: 34,
    },

    name: {
      fontSize: 44,
    },

    description: {
      fontSize: 17,
    },

    heroButtons: {
      flexDirection: "column",
      width: "100%",
    },

    primaryButton: {
      width: "100%",
      fontSize: 18,
      padding: "18px",
    },

    secondaryButton: {
      width: "100%",
      fontSize: 18,
      padding: "18px",
    },

    socialIcons: {
      justifyContent: "center",
    },

    profileWrapper: {
      width: 330,
      height: 330,

      "&::before": {
        width: 280,
        height: 280,
      },

      "&::after": {
        width: 320,
        height: 320,
      },
    },

    profileCircle: {
      width: 250,
      height: 250,
    },

    statsPaper: {
      gridTemplateColumns: "1fr",
    },

    statItem: {
      borderRight: 0,
      borderBottom: "1px solid rgba(255,255,255,.08)",

      "&:last-child": {
        borderBottom: 0,
      },
    },
  },

  "@media (max-width: 480px)": {
    toolbar: {
      padding: "0 16px",
    },

    headname: {
      fontSize: 22,
    },

    bracket: {
      fontSize: 22,
    },

    navLinks: {
      gap: 14,
      display: "none",

      "& span": {
        fontSize: 14,
      },
    },

    chip: {
      fontSize: 14,
    },

    heading: {
      fontSize: 20,
    },

    name: {
      fontSize: 42,
    },

    description: {
      fontSize: 15,
      lineHeight: 1.7,
    },

    profileWrapper: {
      width: 260,
      height: 260,

      "&::before": {
        width: 220,
        height: 220,
      },

      "&::after": {
        width: 250,
        height: 250,
      },
    },

    profileCircle: {
      width: 200,
      height: 200,
    },

    statNumber: {
      fontSize: 32,
    },

    statLabel: {
      fontSize: 15,
    },

    iconButton: {
      width: 50,
      height: 50,

      "& svg": {
        fontSize: 24,
      },
    },
  },
  menuButton: {
    display: "none",
    marginLeft: "auto",
    cursor: "pointer",
    color: "#fff",

    "@media (max-width:768px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },

  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,.55)",
    backdropFilter: "blur(8px)",
    zIndex: 999,
  },

  mobileDrawer: {
    position: "fixed",
    top: 12,
    right: -1,
    width: 300,
    height: "calc(100vh - 24px)",
    background: "rgba(15,15,26,.95)",
    backdropFilter: "blur(24px)",
    border: "1px solid rgba(255,255,255,.05)",
    borderRadius: 24,
    transform: "translateX(110%)",
    transition: "transform .45s cubic-bezier(.22,.61,.36,1)",
    boxShadow:
      "0 30px 80px rgba(0,0,0,.55)",

    zIndex: 1000,

    overflow: "hidden",
  },

  drawerOpen: {
    transform: "translateX(0)",
  },

  drawerHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    padding: "20px",

    borderBottom: "1px solid rgba(255,255,255,.05)",
  },

  closeBtn: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",

    background: "rgba(255,255,255,.05)",

    color: "#fff",

    fontSize: 18,

    transition: ".3s",

    "&:hover": {
      background: "#8B5CF6",
    },
  },

  mobileNav: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    padding: 18,
  },

  mobileItem: {
    padding: "15px 18px",

    borderRadius: 14,

    color: "#A6A8B5",

    fontWeight: 500,

    cursor: "pointer",

    transition: ".3s",

    fontFamily: "'Inter',sans-serif",

    "&:hover": {
      background: "rgba(139,92,246,.12)",
      color: "#fff",
      transform: "translateX(8px)",
    },
  },
  activeItem: {
    background: "rgba(139,92,246,.15)",
    color: "#fff",
    borderLeft: "4px solid #8B5CF6",
    paddingLeft: 18,
  },


  drawerHeader: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: 30,
  },

  mobileLink: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 600,
    padding: "18px 0",
    cursor: "pointer",
    borderBottom: "1px solid rgba(255,255,255,.08)",
    transition: ".3s",

    "&:hover": {
      color: "#8B5CF6",
      paddingLeft: 10,
    },
  },
  "@media (max-width:768px)": {
    navLinks: {
      display: "none",
    },

    menuButton: {
      display: "flex",
    },

    toolbar: {
      padding: "0 20px",
    },

  },
  aboutSection: {
    maxWidth: 1450,
    margin: "0 auto",
    padding: "100px 80px",

    "@media (max-width:1280px)": {
      padding: "40px 60px",
    },

    "@media (max-width:1024px)": {
      padding: "80px 40px",
    },

    "@media (max-width:768px)": {
      padding: "70px 24px",
    },

    "@media (max-width:480px)": {
      padding: "60px 16px",
    },
  },

  skillsSection: {
    maxWidth: 1450,
    margin: "0 auto",
    padding: "70px 60px",

    "@media (max-width:768px)": {
      padding: "60px 20px",
    },
  },
  sectionTag: {
    textAlign: "center",
    color: "#8B5CF6",
    fontWeight: 700,
    letterSpacing: 4,
    marginBottom: 20,
  },
  sectionTitle: {
    textAlign: "center",
    fontSize: 52,
    fontWeight: 800,
    marginBottom: 70,

    "& span": {
      color: "#8B5CF6",
    },

    "@media (max-width:768px)": {
      fontSize: 34,
      marginBottom: 40,
    },
  },

  aboutGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    maxWidth: 1000,
    margin: "0 auto",
  },

  aboutText: {
    fontSize: 19,
    color: "#A8A8B8",
    lineHeight: 1.9,
    marginBottom: 25,
    textAlign: "center",

    "& strong": {
      color: "#fff",
    },
  },
  aboutButtons: {
    display: "flex",
    justifyContent: "center",
    gap: 16,
    marginTop: 35,
    flexWrap: "wrap",
  },
  topbandbutton: {
    display: "flex",
    justifyContent: "center",
    gap: 16,
    marginTop: 35,

    "@media (max-width: 768px)": {
      width: "100%",
      gap: 12,
    },
  },

  resumeButton: {
    flex: 1,
    textAlign: "center",
    textDecoration: "none",
    background: "#8B5CF6",
    color: "#fff",
    padding: "14px 16px",
    borderRadius: 999,
    fontSize: 15,
    fontWeight: 600,
    transition: ".3s",

    "&:hover": {
      background: "#7C3AED",
      transform: "translateY(-2px)",
    },

    "@media (max-width: 768px)": {
      fontSize: 14,
      padding: "12px",
    },
  },

  linkedinButton: {
    flex: 1,
    textAlign: "center",
    textDecoration: "none",
    border: "1px solid rgba(139,92,246,.35)",
    color: "#B89CFF",
    padding: "14px 16px",
    borderRadius: 999,
    fontSize: 15,
    fontWeight: 600,
    transition: ".3s",

    "&:hover": {
      background: "rgba(139,92,246,.12)",
      color: "#fff",
      borderColor: "#8B5CF6",
      transform: "translateY(-2px)",
    },

    "@media (max-width: 768px)": {
      fontSize: 14,
      padding: "12px",
    },
  },
  highlightGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: 24,
  },

  highlightCard: {
    background: "#11111B",
    border: "1px solid rgba(255,255,255,.06)",
    borderRadius: 18,
    padding: 35,
    transition: ".35s",

    "& h3": {
      margin: 0,
      color: "#8B5CF6",
      fontSize: 42,
    },

    "& p": {
      marginTop: 12,
      color: "#A8A8B8",
      fontSize: 18,
    },

    "&:hover": {
      transform: "translateY(-8px)",
      borderColor: "#8B5CF6",
    },
  },

  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 28,
    marginTop: 60,
    width: "100%",

    "@media (max-width:768px)": {
      gridTemplateColumns: "1fr",
      gap: 20,
      marginTop: 35,
    },
  },

  skillCard: {
    background: "#11111B",
    border: "1px solid rgba(255,255,255,.08)",
    borderRadius: 20,
    padding: 28,
    transition: ".35s",
    boxSizing: "border-box",
    width: "100%",

    "& h3": {
      color: "#fff",
      fontSize: 20,
      marginBottom: 22,
    },

    "&:hover": {
      transform: "translateY(-6px)",
      borderColor: "#8B5CF6",
    },

    "@media (max-width:768px)": {
      padding: 20,

      "& h3": {
        fontSize: 20,
        marginBottom: 16,
        textAlign: "center",
      },
    },
  },

  skillChipContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,

    "@media (max-width:768px)": {
      justifyContent: "center",
      gap: 8,
    },
  },
  skillChip: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "8px 14px",
    borderRadius: 30,
    background: "rgba(139,92,246,.12)",
    border: "1px solid rgba(139,92,246,.18)",
    color: "#C4B5FD",
    fontSize: 13,
    fontWeight: 600,

    "&:hover": {
      background: "#8B5CF6",
      color: "#fff",
    },

    "@media (max-width:768px)": {
      fontSize: 12,
      padding: "8px 12px",
    },
  },
  projectsSection: {
    maxWidth: 1450,
    margin: "0 auto",
    padding: "100px 60px",

    "@media (max-width:1200px)": {
      padding: "80px 40px",
    },

    "@media (max-width:768px)": {
      padding: "70px 20px",
    },
  },

  projectsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0,1fr))",
    gap: 30,
    marginTop: 70,

    "@media (max-width:1200px)": {
      gridTemplateColumns: "repeat(2,1fr)",
    },

    "@media (max-width:768px)": {
      gridTemplateColumns: "1fr",
      gap: 22,
      marginTop: 40,
    },
  },

  projectCard: {
    background: "#11111B",
    border: "1px solid rgba(255,255,255,.08)",
    borderRadius: 22,
    padding: 30,
    transition: ".35s",
    display: "flex",
    flexDirection: "column",

    "&:hover": {
      transform: "translateY(-8px)",
      borderColor: "#8B5CF6",
      boxShadow: "0 20px 45px rgba(139,92,246,.18)",
    },
  },

  projectHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,

    "& h3": {
      color: "#fff",
      fontSize: 20,
      lineHeight: 1.4,
      margin: 0,
      width: "75%",
    },
  },

  projectBadge: {
    background: "rgba(139,92,246,.12)",
    color: "#C4B5FD",
    borderRadius: 40,
    padding: "8px 18px",
    fontWeight: 600,
    fontSize: 13,
    width: 'fit-content'
  },

  projectLinks: {
    display: "flex",
    gap: 14,
    marginBottom: 25,

    "& a": {
      width: 42,
      height: 42,
      borderRadius: 10,
      background: "#181824",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#B7B7C9",
      transition: ".3s",

      "&:hover": {
        color: "#fff",
        background: "#8B5CF6",
        transform: "translateY(-3px)",
      },
    },
  },

  projectDescription: {
    color: "#9CA3AF",
    fontSize: 16,
    lineHeight: 1.8,
    marginBottom: 28,
    marginTop: 15,
    flex: 1,
  },

  techStack: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 28,
  },

  techChip: {
    background: "rgba(139,92,246,.08)",
    border: "1px solid rgba(139,92,246,.15)",
    color: "#A78BFA",
    padding: "8px 15px",
    borderRadius: 30,
    fontSize: 13,
    fontWeight: 600,

    "&:hover": {
      background: "#8B5CF6",
      color: "#fff",
    },
  },

  viewProjectBtn: {
    marginTop: "auto",
    border: "none",
    background: "transparent",
    color: "#8B5CF6",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    gap: 8,
    cursor: "pointer",
    fontSize: 15,

    "&:hover": {
      color: "#fff",
    },
  },

  /* ========================= */
  /* EXPERIENCE */
  /* ========================= */

  experienceSection: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "100px 60px",

    "@media (max-width:768px)": {
      padding: "70px 20px",
    },
  },

  timeline: {
    position: "relative",
    marginTop: 70,

    "&::before": {
      content: '""',
      position: "absolute",
      left: 22,
      top: 0,
      bottom: 0,
      width: 2,
      background: "rgba(139,92,246,.35)",
    },

    "@media (max-width:768px)": {
      "&::before": {
        display: "none",
      },
    },
  },

  experienceCard: {
    position: "relative",
    marginLeft: 70,
    marginBottom: 40,
    background: "#11111B",
    border: "1px solid rgba(255,255,255,.08)",
    borderRadius: 22,
    padding: 35,
    transition: ".35s",

    "&::before": {
      content: '""',
      position: "absolute",
      left: -59,
      top: 42,
      width: 18,
      height: 18,
      borderRadius: "50%",
      background: "#8B5CF6",
      boxShadow: "0 0 18px rgba(139,92,246,.6)",
    },

    "&:hover": {
      transform: "translateY(-6px)",
      borderColor: "#8B5CF6",
      boxShadow: "0 20px 45px rgba(139,92,246,.18)",
    },

    "& h3": {
      color: "#fff",
      fontSize: 32,
      marginBottom: 18,
    },

    "@media (max-width:768px)": {
      marginLeft: 0,

      "&::before": {
        display: "none",
      },

      "& h3": {
        fontSize: 24,
      },
    },
  },

  companyRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 28,
    marginBottom: 22,

    "& span": {
      display: "flex",
      alignItems: "center",
      gap: 8,
      color: "#B8B8C7",
      fontSize: 15,

      "& svg": {
        color: "#8B5CF6",
        fontSize: 18,
      },
    },
  },

  experienceSummary: {
    color: "#9CA3AF",
    fontSize: 18,
    lineHeight: 1.8,
    marginBottom: 24,
  },

  experienceList: {
    margin: 0,
    paddingLeft: 22,

    "& li": {
      color: "#B8B8C7",
      marginBottom: 14,
      fontSize: 17,
      lineHeight: 1.8,

      "&::marker": {
        color: "#8B5CF6",
      },
    },
  },
  experienceAccordion: {
    background: "#11111B !important",
    border: "1px solid rgba(255,255,255,.08)",
    borderRadius: "18px !important",
    marginBottom: 20,
    overflow: "hidden",
    transition: "all .3s ease",

    "&::before": {
      display: "none",
    },

    "&.Mui-expanded": {
      borderLeft: "5px solid #8B5CF6",
      borderColor: "rgba(139,92,246,.4)",
      boxShadow: "0 12px 35px rgba(139,92,246,.12)",
    },
  },

  experienceSummary: {
    padding: "10px 24px",

    "& .MuiAccordionSummary-content": {
      margin: "12px 0",
    },
  },

  experienceHeader: {
    width: "100%",

    "& h3": {
      margin: 0,
      fontSize: 18,
      fontWeight: 700,
      color: "#fff",
      marginBottom: 12,
    },
  },

  experienceDetails: {
    padding: "0 24px 24px",
  },

  experienceDescription: {
    color: "#A8A8B8",
    lineHeight: 1.8,
    marginBottom: 20,
  },
  /* ===========================
     CONTACT SECTION
  =========================== */

  contactSection: {
    maxWidth: 1450,
    margin: "0 auto",
    padding: "100px 60px",

    "@media (max-width:992px)": {
      padding: "80px 30px",
    },

    "@media (max-width:768px)": {
      padding: "70px 20px",
    },
  },

  contactSubtitle: {
    maxWidth: 650,
    margin: "0 auto 70px",
    textAlign: "center",
    color: "#9CA3AF",
    fontSize: 18,
    lineHeight: 1.9,

    "@media (max-width:768px)": {
      fontSize: 16,
      marginBottom: 45,
    },
  },

  contactGrid: {
    display: "grid",
    gridTemplateColumns: "420px 1fr",
    gap: 50,
    alignItems: "flex-start",

    "@media (max-width:992px)": {
      gridTemplateColumns: "1fr",
      gap: 40,
    },
  },


  contactInfoCard: {
    display: "flex",
    alignItems: "center",
    gap: 18,
    padding: 22,
    marginBottom: 22,
    borderRadius: 18,
    background: "#11111B",
    border: "1px solid rgba(255,255,255,.07)",
    transition: ".35s",

    "&:hover": {
      borderColor: "#8B5CF6",
      transform: "translateY(-5px)",
    },

    "& h4": {
      margin: 0,
      color: "#7D7D8F",
      fontSize: 15,
      marginBottom: 8,
    },

    "& p,& a": {
      margin: 0,
      color: "#F8FAFC",
      fontSize: 18,
      fontWeight: 600,
      textDecoration: "none",
      transition: ".3s",
      wordBreak: "break-word",
    },

    "& a:hover": {
      color: "#8B5CF6",
    },

    "@media (max-width:768px)": {
      "& p,& a": {
        fontSize: 13,
      },
    },
  },

  contactIconPurple: {
    width: 56,
    height: 56,
    borderRadius: 16,
    background: "rgba(139,92,246,.12)",
    color: "#8B5CF6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& svg": {
      fontSize: 24,
    },
  },

  contactIconGreen: {
    width: 56,
    height: 56,
    borderRadius: 16,
    background: "rgba(16,185,129,.12)",
    color: "#10B981",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& svg": {
      fontSize: 24,
    },
  },

  contactIconOrange: {
    width: 56,
    height: 56,
    borderRadius: 16,
    background: "rgba(245,158,11,.12)",
    color: "#F59E0B",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& svg": {
      fontSize: 24,
    },
  },

  findMeTitle: {
    color: "#8B8B99",
    fontSize: 16,
    fontWeight: 700,
    letterSpacing: 2,
    marginTop: 40,
    marginBottom: 25,
  },

  socialRow: {
    display: "flex",
    gap: 16,
  },

  socialButton: {
    width: 54,
    height: 54,
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,.08)",
    background: "#11111B",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#B8B8C7",
    textDecoration: "none",
    transition: ".35s",

    "& svg": {
      fontSize: 22,
    },

    "&:hover": {
      color: "#fff",
      background: "#8B5CF6",
      borderColor: "#8B5CF6",
      transform: "translateY(-4px)",
      boxShadow: "0 10px 25px rgba(139,92,246,.25)",
    },
  },

  /* ===========================
     CONTACT FORM
  =========================== */

  contactFormCard: {
    background: "#11111B",
    borderRadius: 22,
    border: "1px solid rgba(255,255,255,.08)",
    padding: 35,

    "@media (max-width:768px)": {
      padding: 25,
    },
  },

  formGroup: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 24,

    "& label": {
      color: "#9CA3AF",
      fontWeight: 600,
      marginBottom: 12,
      fontSize: 15,
    },

    "& input,& textarea": {
      background: "#181820",
      border: "1px solid rgba(255,255,255,.08)",
      borderRadius: 14,
      padding: "18px 20px",
      color: "#fff",
      fontSize: 16,
      outline: "none",
      transition: ".3s",
      resize: "none",

      "&::placeholder": {
        color: "#666",
      },

      "&:focus": {
        borderColor: "#8B5CF6",
        boxShadow: "0 0 0 3px rgba(139,92,246,.12)",
      },
    },
  },

  sendButton: {
    width: "100%",
    border: 0,
    borderRadius: 16,
    padding: "18px",
    cursor: "pointer",
    fontSize: 17,
    fontWeight: 700,
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    background: "linear-gradient(90deg,#6366F1,#8B5CF6)",
    transition: ".35s",

    "& svg": {
      fontSize: 18,
    },

    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: "0 15px 35px rgba(139,92,246,.35)",
    },
  },
  /* =========================
   FOOTER
========================= */

  footer: {
    maxWidth: 1450,
    margin: "0 auto",
    padding: "70px 60px 35px",
    borderTop: "1px solid rgba(255,255,255,.06)",

    "@media (max-width:992px)": {
      padding: "60px 30px 30px",
    },

    "@media (max-width:768px)": {
      padding: "50px 20px 25px",
    },
  },

  footerTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 40,

    "@media (max-width:992px)": {
      flexDirection: "column",
      textAlign: "center",
    },
  },

  footerLogo: {
    margin: 0,
    fontSize: 34,
    fontWeight: 800,
    color: "#9D6BFF",
  },

  footerText: {
    color: "#8B8B99",
    marginTop: 10,
    fontSize: 16,
  },

  footerNav: {
    display: "flex",
    gap: 28,
    flexWrap: "wrap",
    justifyContent: "center",

    "@media (max-width:768px)": {
      gap: 18,
    },
  },

  footerLink: {
    color: "#9CA3AF",
    textDecoration: "none",
    fontWeight: 500,
    transition: ".3s",

    "&:hover": {
      color: "#8B5CF6",
    },
  },

  footerRight: {
    display: "flex",
    alignItems: "center",
    gap: 15,
  },

  footerIcon: {
    width: 46,
    height: 46,
    borderRadius: 12,
    background: "#11111B",
    border: "1px solid rgba(255,255,255,.08)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#A1A1AA",
    textDecoration: "none",
    transition: ".35s",

    "& svg": {
      fontSize: 20,
    },

    "&:hover": {
      background: "#8B5CF6",
      color: "#fff",
      borderColor: "#8B5CF6",
      transform: "translateY(-4px)",
    },
  },

  scrollTopButton: {
    width: 46,
    height: 46,
    borderRadius: 12,
    border: 0,
    cursor: "pointer",
    background: "#8B5CF6",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: ".35s",

    "& svg": {
      fontSize: 20,
    },

    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 10px 25px rgba(139,92,246,.35)",
    },
  },

  footerDivider: {
    marginTop: 45,
    marginBottom: 25,
    height: 1,
    background: "rgba(255,255,255,.08)",
  },

  footerCopyright: {
    textAlign: "center",
    color: "#6B7280",
    fontSize: 15,
  },
});