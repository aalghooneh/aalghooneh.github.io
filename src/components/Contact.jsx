import React, { useEffect, useRef } from "react";
import { realData } from "../mock/realData";
import { Mail, Linkedin, Github, MapPin, Clock, GraduationCap } from "lucide-react";

const Contact = () => {
  const { contact } = realData;
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animateElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    animateElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="min-h-screen bg-black bg-opacity-70 py-20 relative overflow-hidden z-10" ref={sectionRef}>
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="section-title animate-on-scroll">{contact.title}</h2>
            <p className="contact-description animate-on-scroll">{contact.description}</p>

            <div className="contact-details">
              <div className="contact-item animate-on-scroll">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div className="contact-text">
                  <span className="contact-label">Email</span>
                  <a href={`mailto:${contact.email}`} className="contact-value">
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="contact-item animate-on-scroll">
                <div className="contact-icon">
                  <Clock size={24} />
                </div>
                <div className="contact-text">
                  <span className="contact-label">Status</span>
                  <span className="contact-value availability-status">
                    {contact.availability}
                  </span>
                </div>
              </div>

              <div className="contact-item animate-on-scroll">
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <div className="contact-text">
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Toronto, ON, Canada</span>
                </div>
              </div>
            </div>

            <div className="contact-social animate-on-scroll">
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="social-button">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="social-button">
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a href={contact.scholar} target="_blank" rel="noopener noreferrer" className="social-button">
                <GraduationCap size={20} />
                <span>Scholar</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
