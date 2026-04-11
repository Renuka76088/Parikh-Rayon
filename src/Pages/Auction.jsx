import React, { useState } from "react";
import { auctionApi } from "../utils/api";
import { Loader2 } from "lucide-react";
import "./Auction.css";

const Auction = () => {
  const [formData, setFormData] = useState({
    participantName: "",
    businessName: "",
    address: "",
    gstNumber: "",
    mobile: "",
    email: "",
    gstCert: null,
    agree: false,
    siteId: "ParekhRayon05"
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("Please confirm that all provided details are legally valid.");
      return;
    }

    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const data = new FormData();
      data.append("siteId", formData.siteId);
      data.append("participantName", formData.participantName);
      data.append("legalBusinessName", formData.businessName);
      data.append("businessAddress", formData.address);
      data.append("gstNo", formData.gstNumber);
      data.append("mobileNo", formData.mobile);
      data.append("email", formData.email);
      
      if (formData.gstCert) {
        data.append("gstCertificate", formData.gstCert);
      }

      const response = await auctionApi.submit(data);

      if (response.data.success) {
        setMessage({ type: 'success', text: 'Auction registration submitted successfully!' });
        setFormData({
          participantName: "",
          businessName: "",
          address: "",
          gstNumber: "",
          mobile: "",
          email: "",
          gstCert: null,
          agree: false,
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
    <section className="auction-section">
      <div className="auction-container">
        <div className="auction-panel status-panel">
          <div className="status-card">
            <h4>e-Auction Participation</h4>
            <div className="status-badge">
              <span>Status:</span>
              <h2>No e-Auction published</h2>
            </div>
          </div>
        </div>

        <div className="auction-panel form-panel">
          <form className="auction-form" onSubmit={handleSubmit}>
            <h4>Participant Details</h4>

            {message.text && (
              <div className={`message-alert ${message.type}`}>
                {message.text}
              </div>
            )}

            <div className="form-group">
              <input
                type="text"
                name="participantName"
                value={formData.participantName}
                onChange={handleChange}
                placeholder="Name of the Participant"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                placeholder="Legal Name of the Business"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Business Address with Pin code"
                required
              />
            </div>

            <div className="row two-column">
              <div className="col">
                <div className="form-group">
                  <input
                    type="text"
                    name="gstNumber"
                    value={formData.gstNumber}
                    onChange={handleChange}
                    placeholder="GST No."
                    required
                  />
                </div>
              </div>
            </div>

            <div className="row two-column">
              <div className="col">
                <div className="form-group">
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Mobile No."
                    required
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Id"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-group file-group">
              <label>Upload GST Certificate (PDF/JPG)</label>
              <input 
                type="file" 
                name="gstCert" 
                onChange={handleChange}
                accept=".pdf,.jpg,.jpeg,.png" 
              />
            </div>

            <div className="form-group checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                />
                I confirm all provided details are legally valid.
              </label>
            </div>

            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? <Loader2 className="animate-spin" /> : "REGISTER FOR AUCTION"}
            </button>
            
            <div className="form-footer-link" style={{ textAlign: 'center', marginTop: '10px' }}>
              <a href="mailto:services@parekhrayon.com">services@parekhrayon.com</a>
            </div>

            <div className="terms-link">
              <a href="#">View Participant Terms & Conditions</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Auction;
