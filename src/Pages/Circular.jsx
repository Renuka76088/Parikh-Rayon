import React from "react";
import "./Circular.css";

const Circular = () => {
  return (
    <section className="circular-section">
      <div className="circular-container">
        <div className="circular-header">
          <h3>OFFICIAL CIRCULARS</h3>
          <p>Latest updates from Parekh Textile & Rayon Division</p>
          <div className="circular-line" />
        </div>

        <div className="circular-card">
          <div className="circular-icon">📄</div>
          <h4>At present, No circular published</h4>
          <p>
            All official announcements, quality standards, and corporate notices will appear here once published by the management.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Circular;
