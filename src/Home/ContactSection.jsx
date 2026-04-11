import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react'; // Ensure lucide-react is installed
import '../Pages/main.css';

const ContactSection = () => {
  const primaryColor = "#717fe0";

  return (
    <section className="bg0 p-t-100 p-b-100" style={{ overflow: 'hidden' }}>
      <div className="container">
        
        {/* Title Section */}
        <div className="row p-b-50">
          <div className="col-12 text-center">
            <h3 className="ltext-105 cl2 p-b-10" style={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px' }}>
              Get In Touch
            </h3>
            <div style={{ width: '50px', height: '3px', background: primaryColor, margin: '0 auto 20px' }}></div>
            <p className="stext-113 cl6">
              Connect with our specialized desks for trade and support.
            </p>
          </div>
        </div>

        {/* --- Responsive Container --- */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          margin: '0 -15px', 
          alignItems: 'stretch'
        }}>
          
          {/* Left: Map */}
          <div 
            className="contact-col"
            style={{ 
              flex: '0 0 50%', 
              maxWidth: '50%', 
              padding: '0 15px' 
            }}
          >
            <div style={{ 
              border: `1px solid #e6e6e6`, 
              height: '100%', 
              minHeight: '450px',
            }}>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118983.30313010192!2d81.54924209587428!3d21.262453880520443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dda23524283d%3A0xd6e7448e469e7108!2sRaipur%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1712845000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block', minHeight: '450px' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right: Contact Details */}
       <div 
  className="contact-col"
  style={{ 
    flex: '0 0 50%', 
    maxWidth: '50%', 
    padding: '0 15px' 
  }}
>
  <div style={{ 
    height: '100%', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center',
    border: '1px solid #e6e6e6',
    padding: '60px 50px', // Padding thoda badhaya hai for luxury feel
    backgroundColor: '#fff'
  }}>
    
    {/* Heading Block */}
    <div className="contact-hero-inner" style={{ marginBottom: '40px' }}>
      <h2 style={{ 
        fontSize: '42px', 
        fontWeight: '800', 
        textTransform: 'uppercase', 
        letterSpacing: '-1px', 
        color: '#222',
        lineHeight: '1'
      }}>
        Contact
      </h2>
      <div style={{ width: '40px', height: '4px', background: '#717fe0', marginTop: '15px' }}></div>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      {/* Location */}
      <div style={{ display: 'flex', alignItems: 'start', gap: '18px' }}>
        <MapPin size={20} style={{ color: '#717fe0', marginTop: '4px' }} />
        <div>
          <p style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', color: '#94a3b8', letterSpacing: '0.15em', marginBottom: '6px' }}>Office Location</p>
          <p style={{ fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', color: '#334155', letterSpacing: '0.05em' }}>
            Raipur, CG, India
          </p>
        </div>
      </div>

      {/* Phone */}
      <div style={{ display: 'flex', alignItems: 'start', gap: '18px' }}>
        <Phone size={20} style={{ color: '#717fe0', marginTop: '4px' }} />
        <div>
          <p style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', color: '#94a3b8', letterSpacing: '0.15em', marginBottom: '6px' }}>Direct Line</p>
          <p style={{ fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', color: '#334155', letterSpacing: '0.05em' }}>
            +91 63537 78329
          </p>
        </div>
      </div>

      {/* Trade Enquiry */}
      <div style={{ display: 'flex', alignItems: 'start', gap: '18px' }}>
        <Mail size={20} style={{ color: '#717fe0', marginTop: '4px' }} />
        <div>
          <p style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', color: '#94a3b8', letterSpacing: '0.15em', marginBottom: '6px' }}>Trade Enquiry</p>
          <p style={{ fontSize: '14px', fontWeight: '700', color: '#334155' }}>
            trade-enquiry@parekhrayon.com
          </p>
        </div>
      </div>

      {/* Customer Care */}
      <div style={{ display: 'flex', alignItems: 'start', gap: '18px' }}>
        <Mail size={20} style={{ color: '#717fe0', marginTop: '4px' }} />
        <div>
          <p style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', color: '#94a3b8', letterSpacing: '0.15em', marginBottom: '6px' }}>Customer Care</p>
          <p style={{ fontSize: '14px', fontWeight: '700', color: '#334155' }}>
            customer-care@parekhrayon.com
          </p>
        </div>
      </div>

    </div>
  </div>
</div>

        </div>
      </div>

      {/* ✅ Responsive CSS */}
      <style>
        {`
          @media (max-width: 768px) {
            .contact-col {
              flex: 0 0 100% !important;
              max-width: 100% !important;
              margin-bottom: 20px;
            }
          }
        `}
      </style>

    </section>
  );
};

export default ContactSection;