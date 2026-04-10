import React, { useState } from "react";
import { tradeEnquiryApi } from "../utils/api";
import { Loader2 } from "lucide-react";
import "./Enquiry.css";

const Enquiry = () => {
  const [formData, setFormData] = useState({
    traderName: "",
    businessName: "",
    address: "",
    gstNo: "",
    mobile: "",
    email: "",
    purchaseType: "",
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
      alert("Please agree to the undertaking.");
      return;
    }

    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const data = new FormData();
      data.append("siteId", formData.siteId);
      data.append("traderName", formData.traderName);
      data.append("businessName", formData.businessName);
      data.append("businessAddress", formData.address);
      data.append("gstNo", formData.gstNo);
      data.append("mobileNo", formData.mobile);
      data.append("email", formData.email);
      data.append("enquiryType", formData.purchaseType);
      
      if (formData.gstCert) {
        data.append("gstCertificate", formData.gstCert);
      }

      const response = await tradeEnquiryApi.submit(data);

      if (response.data.success) {
        setMessage({ type: 'success', text: 'Application submitted successfully!' });
        setFormData({
          traderName: "",
          businessName: "",
          address: "",
          gstNo: "",
          mobile: "",
          email: "",
          purchaseType: "",
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

  const handlePreview = () => {
    alert("Preview functionality not implemented yet.");
  };

  return (
    <section className="enquiry-section">
      <div className="enquiry-container">
        <div className="enquiry-card">
          <div className="enquiry-info">
            <h4>Trade Enquiry</h4>
            <p>
              Join the <strong>Parekh Textile Network</strong>. Becoming a member of the Chamber of Textile allows you to access premium sourcing, global trade insights, and industrial support.
            </p>
            <div className="documents">
              <h5>Required Documents:</h5>
              <ul>
                <li>GST Registration Certificate</li>
                <li>Business Address Proof</li>
                <li>Authorized ID Proof</li>
              </ul>
            </div>
            <div className="assistance">
              <span>Official Assistance:</span>
              <p>trade-enquiry@parekhrayon.com</p>
            </div>
          </div>

          <div className="enquiry-form-card">
            <form className="enquiry-form" onSubmit={handleSubmit}>
              <h4>Apply for Membership</h4>

              {message.text && (
                <div className={`message-alert ${message.type}`}>
                  {message.text}
                </div>
              )}

              <div className="form-row">
                <input
                  type="text"
                  name="traderName"
                  value={formData.traderName}
                  onChange={handleChange}
                  placeholder="Name of the Trader"
                  required
                />
              </div>

              <div className="form-row">
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Business Name"
                  required
                />
              </div>

              <div className="form-row">
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Business Address with Pin code"
                  rows={4}
                  required
                />
              </div>

              <div className="form-row">
                <input
                  type="text"
                  name="gstNo"
                  value={formData.gstNo}
                  onChange={handleChange}
                  placeholder="GST No."
                  required
                />
              </div>

              <div className="form-grid-two">
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile No."
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email id"
                  required
                />
              </div>

              <div className="form-row">
                <select
                  name="purchaseType"
                  value={formData.purchaseType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Option</option>
                  <option value="bulk">For Bulk Purchase</option>
                  <option value="retail">For Retail Purchase</option>
                  <option value="jobwork">For Job Work Contract</option>
                  <option value="others">Others</option>
                </select>
              </div>

              <div className="form-row">
                <label>
                  <span>Upload GST Certificate</span>
                  <input
                    type="file"
                    name="gstCert"
                    onChange={handleChange}
                    accept=".pdf,.jpg,.png"
                  />
                </label>
              </div>

              <div className="undertaking">
                <h5>Undertaking</h5>
                <p>
                  "I have read the Terms & Conditions of subscription for the membership in the Chamber of Textile. All the information provided by me and the documents uploaded thereof are true and authentic to the best of my knowledge and belief."
                </p>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="agree"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                  />
                  <label htmlFor="agree">I Agree to the Undertaking</label>
                </div>
              </div>

              <div className="form-actions">
                <button type="button" onClick={handlePreview} disabled={loading}>
                  Preview
                </button>
                <button type="submit" disabled={loading} className="submit-btn-rayon">
                  {loading ? <Loader2 className="animate-spin" /> : "Submit Application"}
                </button>
              </div>
              
              <div className="form-footer-link">
                <a href="mailto:trade-enquiry@parekhrayon.com">trade-enquiry@parekhrayon.com</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enquiry;