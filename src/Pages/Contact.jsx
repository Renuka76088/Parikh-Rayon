import React from "react";
// Professional icons import
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
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

      <section className="contact-main" style={{ padding: "80px 0" }}>
        <div className="contact-container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          
          <div className="contact-row" style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
            
            {/* Left Side: Map Container */}
            <div className="contact-map-wrapper" style={{ flex: "1", minWidth: "300px", borderRadius: "15px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.08)", minHeight: "450px" }}>
            <iframe
  title="Raipur Chhattisgarh Map"
  src="https://www.google.com/maps?q=Raipur%2C%20Chhattisgarh%2C%20India&output=embed"
  width="100%"
  height="100%"
  style={{ border: 0, minHeight: "450px" }}
  loading="lazy"
></iframe>
            </div>

            {/* Right Side: Information Card */}
            <div className="contact-card contact-info-card" style={{ flex: "1", minWidth: "300px", padding: "40px", backgroundColor: "#fff", borderRadius: "15px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
              <h3 style={{ marginBottom: "30px", fontSize: "24px", fontWeight: "600", color: "#333" }}>Contact Us</h3>

              {/* Phone */}
              <div className="info-item" style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
                <div className="info-icon" style={{ backgroundColor: "#f8f9ff", padding: "12px", borderRadius: "10px" }}>
                  <Phone size={24} color="#717fe0" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 style={{ fontSize: "14px", color: "#999", textTransform: "uppercase", letterSpacing: "1px", margin: "0 0 5px 0" }}>Call Us</h4>
                  <p style={{ fontSize: "18px", fontWeight: "500", color: "#333" }}>6353778329</p>
                </div>
              </div>

              {/* Trade Enquiry */}
              <div className="info-item" style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
                <div className="info-icon" style={{ backgroundColor: "#f8f9ff", padding: "12px", borderRadius: "10px" }}>
                  <MessageSquare size={24} color="#717fe0" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 style={{ fontSize: "14px", color: "#999", textTransform: "uppercase", letterSpacing: "1px", margin: "0 0 5px 0" }}>Trade Enquiry</h4>
                  <p style={{ fontSize: "16px", color: "#555" }}>Trade-enquiry@parekhrayon.com</p>
                </div>
              </div>

              {/* Customer Care */}
              <div className="info-item" style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
                <div className="info-icon" style={{ backgroundColor: "#f8f9ff", padding: "12px", borderRadius: "10px" }}>
                  <Mail size={24} color="#717fe0" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 style={{ fontSize: "14px", color: "#999", textTransform: "uppercase", letterSpacing: "1px", margin: "0 0 5px 0" }}>Customer Care</h4>
                  <p style={{ fontSize: "16px", color: "#555" }}>customer-care@parekhrayon.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="info-item" style={{ display: "flex", gap: "20px", paddingTop: "20px", borderTop: "1px solid #eee" }}>
                <div className="info-icon" style={{ backgroundColor: "#f8f9ff", padding: "12px", borderRadius: "10px" }}>
                  <MapPin size={24} color="#717fe0" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 style={{ fontSize: "14px", color: "#999", textTransform: "uppercase", letterSpacing: "1px", margin: "0 0 5px 0" }}>Location</h4>
                  <p style={{ fontSize: "16px", fontWeight: "600", color: "#333" }}>RAIPUR, CG, India</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;