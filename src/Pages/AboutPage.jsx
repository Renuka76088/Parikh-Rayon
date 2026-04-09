import React from "react";
import Header from "../Home/Header";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <>
   
      {/* Title Section */}
      <section
        className="about-banner"
        style={{ backgroundImage: "url('/images/About.png')" }}
      >
        <h2>About Parekh Textile</h2>
      </section>

      {/* Content Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-row">
            
            {/* Left Content */}
            <div className="about-text">
              <h3>ABOUT PAREKH RAYON</h3>

              <p>
                Parekh Rayon is the trusted Manufacturers & Supplier of the high
                standard quality of the Rayon Products, from lower range to higher
                range with different TC at reasonable and low price range with best
                and premium quality with Quality Assurance and Quality Seal.
              </p>
            </div>

            {/* Right Image */}
            <div className="about-image">
              <img
                src="https://media.istockphoto.com/id/1066845488/photo/rainbow-colored-yarns.jpg?s=612x612&w=0&k=20&c=IEQa06Ivx_NKtC71scpYxgQ4uMJvz2YH1MICmhx6wZo="
                alt="Rayon Fabric"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;