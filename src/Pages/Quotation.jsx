import React, { useState, useEffect } from "react";
import { quotationApi, equotationHeaderApi, IMAGE_BASE_URL } from "../utils/api";
import { Loader2 } from "lucide-react";
import "./Quotation.css";
import SuccessModal from "../components/common/SuccessModal";

const initialState = {
  traderName: "",
  businessName: "",
  address: "",
  gstNo: "",
  mobile: "",
  email: "",
  quotationType: "",
  particulars: "",
  siteId: "ParekhRayon05"
};

const Quotation = () => {
  const [formValues, setFormValues] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [showModal, setShowModal] = useState(false);

  const [quotations, setQuotations] = useState([]);
  const [header, setHeader] = useState({ title: "e-Quotation Guidelines", description: "Parekh Rayon offers a transparent Quotation for our B2B partners. Please provide your business details and requirements to generate an official estimate." });
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    const fetchQuotationData = async () => {
      try {
        setDataLoading(true);
        const [headerRes, quotationsRes] = await Promise.all([
          equotationHeaderApi.get(formValues.siteId),
          quotationApi.getAll(formValues.siteId)
        ]);

        if (headerRes.data?.success && headerRes.data?.data) {
          setHeader({
            title: headerRes.data.data.title || "e-Quotation Guidelines",
            description: headerRes.data.data.description || "Parekh Rayon offers a transparent Quotation for our B2B partners..."
          });
        }
        if (quotationsRes.data?.success && quotationsRes.data?.data) {
          const activeQuotations = quotationsRes.data.data.filter(q => q.status === 'active');
          setQuotations(activeQuotations);
        }
      } catch (error) {
        console.error("Error fetching quotation data:", error);
      } finally {
        setDataLoading(false);
      }
    };
    fetchQuotationData();
  }, [formValues.siteId]);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const data = new FormData();
      data.append("siteId", formValues.siteId);
      data.append("traderName", formValues.traderName);
      data.append("businessName", formValues.businessName);
      data.append("businessAddress", formValues.address);
      data.append("gstNo", formValues.gstNo);
      data.append("mobileNo", formValues.mobile);
      data.append("email", formValues.email);
      data.append("quotationType", formValues.quotationType);
      data.append("particulars", formValues.particulars);

      const response = await quotationApi.submit(data);

      if (response.data.success) {
        setShowModal(true);
        setFormValues(initialState);
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
    <section className="quotation-section">
      <div className="quotation-container">
        <div className="quotation-card">
          <div className="quotation-intro">
            <h4>{header.title}</h4>
            <div
              className="rte-content w-full max-w-full overflow-hidden text-[#555] text-[15px] leading-relaxed mt-3 [&>p]:mb-3 [&>img]:max-w-full [&>img]:h-auto [&>img]:mx-auto [&_table]:w-full [&_table]:max-w-full [&_td]:break-words [&_th]:break-words [&>ul]:pl-5 [&>ol]:pl-5"
              style={{ overflowWrap: 'break-word', wordBreak: 'normal', hyphens: 'none' }}
              dangerouslySetInnerHTML={{ __html: header.description ? header.description.replace(/&nbsp;/g, ' ') : '' }}
            />
            {dataLoading ? (
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                <Loader2 className="animate-spin" size={32} color="#717fe0" />
              </div>
            ) : quotations.length > 0 && (
              <div style={{ marginTop: '30px' }}>
                <h4 style={{ marginBottom: '15px', color: '#222', fontSize: '18px', fontWeight: '800', textTransform: 'uppercase' }}>Active Quotations</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {quotations.map(quotation => (
                    <div key={quotation._id} style={{ background: '#fff', padding: '15px', borderRadius: '10px', border: '1px solid #eee', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                      {quotation.image && (
                        <img
                          src={quotation.image.startsWith('http') ? quotation.image : `${IMAGE_BASE_URL}/${quotation.image.replace(/\\/g, '/')}`}
                          alt={quotation.title}
                          style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '6px', marginBottom: '10px' }}
                        />
                      )}
                      <h5 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '8px', color: '#222' }}>{quotation.title}</h5>
                      <div
                        className="rte-content w-full max-w-full overflow-hidden text-[#555] text-[13px] leading-relaxed mb-3 [&>p]:mb-2 [&>img]:max-w-full [&>img]:h-auto [&>img]:mx-auto [&_table]:w-full [&_table]:max-w-full [&_td]:break-words [&_th]:break-words [&>ul]:pl-5 [&>ol]:pl-5"
                        style={{ overflowWrap: 'break-word', wordBreak: 'normal', hyphens: 'none' }}
                        dangerouslySetInnerHTML={{ __html: quotation.description ? quotation.description.replace(/&nbsp;/g, ' ') : '' }}
                      />
                      {quotation.date && (
                        <p style={{ fontSize: '12px', color: '#717fe0', fontWeight: '700', textTransform: 'uppercase' }}>
                          Date: {new Date(quotation.date).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="quotation-form-card">
            <form className="quotation-form" onSubmit={handleSubmit}>
              <div className="quotation-form-header">
                <h4>Quotation</h4>
              </div>

              {message.text && message.type === 'error' && (
                <div className={`message-alert ${message.type}`}>
                  {message.text}
                </div>
              )}

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
                <button type="submit" disabled={loading} className="submit-btn-rayon">
                  {loading ? <Loader2 className="animate-spin" /> : "Generate Official Quotation"}
                </button>
              </div>

              <div className="form-footer-link">
                <a href="mailto:trade-enquiry@parekhrayon.com">trade-enquiry@parekhrayon.com</a>
              </div>

              <p className="quotation-note">
                <i className="fa fa-info-circle" /> Prices are ex-factory RAIPUR, CG, India.
              </p>
            </form>
          </div>
        </div>
      </div>
      <SuccessModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Quotation Requested"
        message="Your estimate request has been received. Our sales team will prepare a formal quotation and contact you via email."
      />
    </section>
  );
};

export default Quotation;
