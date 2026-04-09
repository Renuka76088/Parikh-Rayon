import React, { useState } from "react";
import "./Quotation.css";

const initialState = {
  traderName: "",
  businessName: "",
  address: "",
  gstNo: "",
  mobile: "",
  email: "",
  quotationType: "",
  particulars: "",
};

const Quotation = () => {
  const [formValues, setFormValues] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Quotation request submitted. Our team will contact you shortly.");
    setFormValues(initialState);
  };

  return (
    <section className="quotation-section">
      <div className="quotation-container">
        <div className="quotation-card">
          <div className="quotation-intro">
            <h4>Quotation Guidelines</h4>
            <p>
              Parekh Textile offers a transparent <strong>Quotation Builder</strong> for our B2B partners. Please provide your business details and requirements to generate an official estimate.
            </p>
          </div>

          <div className="quotation-form-card">
            <form className="quotation-form" onSubmit={handleSubmit}>
              <div className="quotation-form-header">
                <h4>Estimate Builder</h4>
              </div>

              <div className="form-row">
                <label>
                  <span>Name of the Trader</span>
                  <input
                    type="text"
                    name="traderName"
                    value={formValues.traderName}
                    onChange={handleChange}
                    placeholder="Name of the Trader"
                    required
                  />
                </label>
              </div>

              <div className="form-row">
                <label>
                  <span>Business Name</span>
                  <input
                    type="text"
                    name="businessName"
                    value={formValues.businessName}
                    onChange={handleChange}
                    placeholder="Business Name"
                    required
                  />
                </label>
              </div>

              <div className="form-row">
                <label>
                  <span>Business Address with Pin Code</span>
                  <textarea
                    name="address"
                    value={formValues.address}
                    onChange={handleChange}
                    placeholder="Business Address with Pin Code"
                    rows={4}
                    required
                  />
                </label>
              </div>

              <div className="form-row">
                <label>
                  <span>GST No.</span>
                  <input
                    type="text"
                    name="gstNo"
                    value={formValues.gstNo}
                    onChange={handleChange}
                    placeholder="GST No."
                    required
                  />
                </label>
              </div>

              <div className="form-grid-two">
                <label>
                  <span>Mobile No.</span>
                  <input
                    type="text"
                    name="mobile"
                    value={formValues.mobile}
                    onChange={handleChange}
                    placeholder="Mobile No."
                    required
                  />
                </label>
                <label>
                  <span>Email id</span>
                  <input
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    placeholder="Email id"
                    required
                  />
                </label>
              </div>

              <div className="form-row">
                <label>
                  <span>Quotation Type</span>
                  <select
                    name="quotationType"
                    value={formValues.quotationType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Quotation Type</option>
                    <option value="rayon-finished">Quotation for Rayon Finished Products</option>
                    <option value="rayon-raw">Quotation for Rayon Raw Products</option>
                  </select>
                </label>
              </div>

              <div className="form-row">
                <label>
                  <span>Particulars of the Rayon Products</span>
                  <textarea
                    name="particulars"
                    value={formValues.particulars}
                    onChange={handleChange}
                    placeholder="Particulars of the Rayon Products (e.g. GSM, Quantity, Colors)"
                    rows={4}
                    required
                  />
                </label>
              </div>

              <div className="form-actions">
                <button type="submit">Generate Official Quotation</button>
              </div>

              <p className="quotation-note">
                <i className="fa fa-info-circle" /> Prices are ex-factory RAIPUR, CG, India.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotation;
