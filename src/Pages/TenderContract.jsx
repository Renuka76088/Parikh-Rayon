import React from "react";
import "./TenderContract.css";

const TenderContract = () => {
  return (
    <section className="tender-section">
      <div className="tender-container">
        <div className="tender-header">
          <h3>TENDER & CONTRACTS</h3>
          <div className="tender-divider"></div>
          <p>Expression of Interest | Rate Contract 2026-27</p>
        </div>

        <div className="tender-card">
          <div className="tender-info">
            <h4>Corporate Tenders</h4>
          </div>

          <div className="tender-status">
            <div className="tender-icon">
              <i className="zmdi zmdi-info-outline"></i>
            </div>
            <h4>At present, No EOI published</h4>
            <p>Please check back later for new opportunities or contact our procurement office.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TenderContract;