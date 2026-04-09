import React from "react";
// Professional icons import
import { Mail, MapPin, Phone, AtSign } from "lucide-react";
import Header from "../Home/Header";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section
        className="contact-hero"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1165496613/photo/lilac-viscose-lining-texture-background-pattern.jpg?s=612x612&w=0&k=20&c=7-AAtcb-uw3fZoK8V9TRmEkMq2sgSgslBPX2qxsuC4o=')",
        }}
      >
        <div className="contact-hero-inner">
          <h2>Contact</h2>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-container">
          <div className="contact-row">
            <div className="contact-card contact-form-card">
              <h3>Send Us A Message</h3>
              <form>
                <div className="contact-field">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                  />
                  {/* Professional @ icon */}
                  <span className="contact-field-icon">
                    <AtSign size={18} strokeWidth={1.5} />
                  </span>
                </div>

                <div className="contact-field textarea-field">
                  <textarea
                    name="msg"
                    placeholder="How Can We Help?"
                    rows={6}
                  ></textarea>
                </div>

                <button type="submit" className="contact-button">
                  Submit
                </button>
              </form>
            </div>

            <div className="contact-card contact-info-card">
              <div className="info-item">
                {/* Professional Address Icon */}
                <div className="info-icon">
                  <MapPin size={24} color="#717fe0" strokeWidth={1.5} />
                </div>
                <div>
                  <h4>Address</h4>
                  <p>RAIPUR, CG, India</p>
                </div>
              </div>

              <div className="info-item">
                {/* Professional Phone Icon */}
                <div className="info-icon">
                  <Phone size={24} color="#717fe0" strokeWidth={1.5} />
                </div>
                <div>
                  <h4>Lets Talk</h4>
                  <p>+1 800 1236879</p>
                </div>
              </div>

              <div className="info-item">
                {/* Professional Email Icon */}
                <div className="info-icon">
                  <Mail size={24} color="#717fe0" strokeWidth={1.5} />
                </div>
                <div>
                  <h4>Sale Support</h4>
                  <p>contact@parekhrayon.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Google Map for Raipur, Chhattisgarh */}
      <section className="contact-map-section" style={{ height: "450px", overflow: "hidden" }}>
     <iframe
  title="Raipur Chhattisgarh Map"
  src="https://www.google.com/maps?q=Raipur,Chhattisgarh,India&output=embed"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  loading="lazy"
></iframe>
      </section>
    </>
  );
};

export default Contact;