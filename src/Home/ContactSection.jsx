import React from 'react';
import '../Pages/main.css';

const ContactSection = () => {
  const primaryColor = "#717fe0";

  return (
    <section className="bg0 p-t-100 p-b-100" style={{ overflow: 'hidden' }}>
      <div className="container">
        
        {/* Title Section */}
        <div className="row p-b-50">
          <div className="col-12">
            <h3 className="ltext-105 cl2 p-b-10" style={{ fontWeight: 600, textTransform: 'uppercase' }}>
              Contact Us
            </h3>
            <p className="stext-113 cl6">
              We are here to help you bring your textile vision to life.
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
              minHeight: '500px',
              borderRadius: '0px' 
            }}>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=Raipur,Chhattisgarh,INDIA&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block', minHeight: '500px' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right: Form */}
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
              padding: '40px',
              borderRadius: '0px'
            }}>
              <form style={{ width: '100%' }}>
                <div style={{ marginBottom: '25px' }}>
                  <span style={{ color: primaryColor, fontWeight: '700', fontSize: '12px', marginBottom: '8px', display: 'block' }}>
                    FULL NAME
                  </span>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    style={{ width: '100%', height: '50px', border: '1px solid #e6e6e6', padding: '0 20px', outline: 'none' }} 
                  />
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <span style={{ color: primaryColor, fontWeight: '700', fontSize: '12px', marginBottom: '8px', display: 'block' }}>
                    EMAIL ADDRESS
                  </span>
                  <input 
                    type="email" 
                    placeholder="example@mail.com" 
                    style={{ width: '100%', height: '50px', border: '1px solid #e6e6e6', padding: '0 20px', outline: 'none' }} 
                  />
                </div>

                <div style={{ marginBottom: '30px' }}>
                  <span style={{ color: primaryColor, fontWeight: '700', fontSize: '12px', marginBottom: '8px', display: 'block' }}>
                    MESSAGE
                  </span>
                  <textarea 
                    placeholder="How can we assist you?" 
                    style={{ width: '100%', height: '140px', border: '1px solid #e6e6e6', padding: '15px 20px', outline: 'none', resize: 'none' }}
                  ></textarea>
                </div>

                <button 
                  style={{ 
                    width: '100%', 
                    height: '50px', 
                    backgroundColor: primaryColor, 
                    color: '#fff', 
                    border: 'none', 
                    fontWeight: '700', 
                    letterSpacing: '1px',
                    cursor: 'pointer'
                  }}
                >
                  SEND MESSAGE
                </button>
              </form>
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