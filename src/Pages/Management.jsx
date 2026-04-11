import React from "react";
import "./Management.css";

const Management = () => {
  return (
    <section className="management-section">
      {/* Responsive CSS with Header Fix */}
      <style>
        {`
          .management-section {
            padding-top: 120px; /* Header se niche lane ke liye padding */
            padding-bottom: 80px;
            background-color: #fff;
            margin-top: 20px; /* Desktop margin */
          }

          .management-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 15px;
          }

          .management-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 40px;
          }

          .management-left {
            flex: 1;
          }

          .management-right {
            flex: 1;
            border-left: 3px solid #717fe0;
            padding-left: 40px;
          }

          .management-label {
            display: block;
            text-transform: uppercase;
            font-size: 13px;
            letter-spacing: 2px;
            color: #888;
            margin-bottom: 12px;
            font-weight: 700;
          }

          .management-title {
            font-size: 42px;
            font-weight: 800;
            color: #222;
            text-transform: uppercase;
            line-height: 1.1;
          }

          .management-description {
            font-size: 18px;
            line-height: 1.7;
            color: #555;
            margin: 0;
          }

          /* Mobile Responsive Fix */
          @media (max-width: 768px) {
            .management-section {
              padding-top: 100px; /* Mobile header height ke hisab se */
              padding-bottom: 60px;
              margin-top: 10px;
            }

            .management-row {
              flex-direction: column;
              text-align: center;
              gap: 25px;
            }

            .management-right {
              border-left: none;
              border-top: 3px solid #717fe0;
              padding-left: 0;
              padding-top: 25px;
              max-width: 100%;
            }

            .management-title {
              font-size: 30px;
            }

            .management-description {
              font-size: 16px;
            }
          }
        `}
      </style>

      <div className="management-container">
        <div className="management-row">
          <div className="management-left">
            <span className="management-label">Industrial Excellence</span>
            <h2 className="management-title">Our Management</h2>
          </div>
          
          <div className="management-right">
            <p className="management-description">
              Parekh Rayon is administered and governed by the highly skilled, 
              experienced and qualified Management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Management;