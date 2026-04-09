import React from "react";
import "./Career.css";

const Career = () => {
  return (
    <section className="career-section">
      <div className="career-container">
        <div className="career-header">
          <h3>Join Our Team</h3>
          <p>Explore opportunities to grow with a leader in the Textile Sector</p>
          <div className="career-divider" />
        </div>

        <div className="career-card" data-aos="fade-up">
          <div className="career-icon">💼</div>
          <h3>At present, No Vacancy</h3>
          <p className="career-note">
            *Please check this page later for future updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Career;
