import React, { useState } from 'react';
import { appointmentApi } from '../utils/api';
import { Loader2 } from 'lucide-react';
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
    proofFile: null,
    siteId: "ParekhRayon05"
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const data = new FormData();
      data.append("siteId", formData.siteId);
      data.append("visitorName", formData.visitorName);
      data.append("businessName", formData.businessName);
      data.append("visitorAddress", formData.address);
      data.append("mobileNo", formData.mobile);
      data.append("email", formData.email);
      data.append("proofType", formData.idType);
      data.append("reasonForVisit", formData.visitReason);
      
      if (formData.proofFile) {
        data.append("proofFile", formData.proofFile);
      }

      const response = await appointmentApi.submit(data);

      if (response.data.success) {
        setMessage({ type: 'success', text: 'Appointment requested successfully!' });
        setFormData({
          visitorName: '',
          businessName: '',
          address: '',
          mobile: '',
          email: '',
          idType: '',
          visitReason: '',
          proofFile: null,
          siteId: "ParekhRayon05"
        });
      } else {
        setMessage({ type: 'error', text: response.data.message || 'Something went wrong.' });
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setMessage({ type: 'error', text: 'Server error. Please try again later.' });
    } finally {
      setLoading(false);
    }
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
            
            <div className="official-assistance">
               <span>Official Assistance:</span>
               <p><a href="mailto:appointment@parekhrayon.com" style={{color: '#fff'}}>appointment@parekhrayon.com</a></p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="form-side">
            <form onSubmit={handleSubmit}>
              <h4 className="form-title">Request Appointment</h4>

              {message.text && (
                <div className={`message-alert ${message.type}`}>
                  {message.text}
                </div>
              )}

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
                <label>Select ID Type for Proof (Roll-down)</label>
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
                  onChange={handleChange}
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

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? <Loader2 className="animate-spin" /> : "CONFIRM APPOINTMENT"}
              </button>
              
              <div className="form-footer-link" style={{ textAlign: 'center', marginTop: '10px' }}>
                <a href="mailto:appointment@parekhrayon.com">appointment@parekhrayon.com</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;