import React, { useState } from 'react';
import './AppointmentForm.css';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    visitorName: '',
    businessName: '',
    address: '',
    mobile: '',
    email: '',
    idType: '',
    visitReason: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment Data:', formData);
    alert('Appointment request submitted successfully!');
    // Add your API call here
  };

  return (
    <section className="appointment-section">
      <div className="container">
        <div className="form-wrapper">
          
          {/* Left Side - Info */}
          <div className="info-side">
            <h4 className="section-title">Book a Consultation</h4>
            <p className="section-desc">
              Schedule a meeting with our textile experts to discuss bulk orders, 
              custom fabric manufacturing, or design partnerships.
            </p>

            <div className="note-box">
              <p>
                *Appointments must be booked at least 24 hours in advance for factory visits.
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="form-side">
            <form onSubmit={handleSubmit}>
              <h4 className="form-title">Request Appointment</h4>

              <div className="input-group">
                <input
                  type="text"
                  name="visitorName"
                  placeholder="Name of the Visitor"
                  value={formData.visitorName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <input
                  type="text"
                  name="businessName"
                  placeholder="Name of the Business"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <textarea
                  name="address"
                  placeholder="Visitor Address with Pin code"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="row">
                <div className="col-6">
                  <div className="input-group">
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Mobile No."
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="input-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Id"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="input-group">
                <label>Select ID Type for Proof</label>
                <select
                  name="idType"
                  value={formData.idType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select ID Type</option>
                  <option value="Aadhaar Card">Aadhaar Card</option>
                  <option value="ECI Card">ECI Card</option>
                  <option value="DL">DL (Driving License)</option>
                </select>
              </div>

              <div className="input-group">
                <label>Upload Residential / Business Proof</label>
                <input
                  type="file"
                  name="proofFile"
                  accept=".pdf,.jpg,.jpeg,.png"
                />
              </div>

              <div className="input-group">
                <textarea
                  name="visitReason"
                  placeholder="Describe the reason for Visit"
                  value={formData.visitReason}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                CONFIRM APPOINTMENT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;