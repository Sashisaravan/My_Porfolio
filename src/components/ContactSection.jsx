import { useState } from "react";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiSend,
} from "react-icons/fi";
import { PortfolioStyles } from "../styles/theme";

export default function ContactSection() {
  const classes = PortfolioStyles();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const response = await fetch("http://localhost:5000/api/contact", {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(formData)

      });

      const result = await response.json();

      if (result.success) {

        alert("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          message: ""
        });

      }
      else {

        alert(result.message);

      }

    }
    catch {

      alert("Something went wrong.");

    }
    finally {

      setLoading(false);

    }

  };

  return (
    <section id="contact" className={classes.contactSection}>
      <p className={classes.sectionTag}>GET IN TOUCH</p>

      <h2 className={classes.sectionTitle}>
        Let's Build Something <span>Amazing</span>
      </h2>

      <p className={classes.contactSubtitle}>
        Have a project in mind or just want to chat? I'd love to hear from
        you. Drop me a message and I'll get back to you as soon as possible.
      </p>

      <div className={classes.contactGrid}>
        <div>
          <div className={classes.contactInfoCard}>
            <div className={classes.contactIconPurple}>
              <FiMail />
            </div>

            <div>
              <h4>Email</h4>

              <a href="mailto:sashisaravan2000@gmail.com">
                sashisaravan2000@gmail.com
              </a>
            </div>
          </div>

          <div className={classes.contactInfoCard}>
            <div className={classes.contactIconGreen}>
              <FiMapPin />
            </div>

            <div>
              <h4>Location</h4>

              <p>Chennai, Tamil Nadu</p>
            </div>
          </div>

          <div className={classes.contactInfoCard}>
            <div className={classes.contactIconOrange}>
              <FiPhone />
            </div>

            <div>
              <h4>Phone</h4>

              <a href="tel:+918668072808">
                +91 86680 72808
              </a>
            </div>
          </div>

          <h3 className={classes.findMeTitle}>
            FIND ME ON
          </h3>

          <div className={classes.socialRow}>
            <a
              href="https://github.com/Sashisaravan"
              className={classes.socialButton}
            >
              <FiGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sashisaravansv/"
              target="_blank"
              rel="noreferrer"
              className={classes.socialButton}
            >
              <FiLinkedin />
            </a>

            <a
              href="mailto:sashisaravan2000@gmail.com"
              className={classes.socialButton}
            >
              <FiMail />
            </a>
          </div>
        </div>
        <div className={classes.contactFormCard}>
          <form onSubmit={handleSubmit}>
            <div className={classes.formGroup}>
              <label>Your Name</label>

              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={classes.formGroup}>
              <label>Email Address</label>

              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={classes.formGroup}>
              <label>Message</label>

              <textarea
                rows={6}
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className={classes.sendButton}
              disabled={loading}
            >
              <FiSend />

              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}