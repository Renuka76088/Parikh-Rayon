import React, { useState } from "react";
import "./Auction.css";

const Auction = () => {
  const [formData, setFormData] = useState({
    participantName: "",
    businessName: "",
    address: "",
    gstNumber: "",
    mobile: "",
    email: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("Please confirm that all provided details are legally valid.");
      return;
    }
    console.log("Auction Registration:", formData);
    alert("Auction registration submitted successfully.");
  };

  return (
    <section className="auction-section">
      <div className="auction-container">
        <div className="auction-panel status-panel">
          <div className="status-card">
            <h4>Auction Participation</h4>
            <div className="status-badge">
              <span>Status:</span>
              <h2>No e-Auction published</h2>
            </div>
          </div>
        </div>

        <div className="auction-panel form-panel">
          <form className="auction-form" onSubmit={handleSubmit}>
            <h4>Participant Details</h4>

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
              <input type="file" name="gst-file" accept=".pdf,.jpg,.jpeg,.png" />
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

            <button type="submit" className="submit-button">
              REGISTER FOR AUCTION
            </button>

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
