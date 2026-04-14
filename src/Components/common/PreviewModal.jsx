import React from 'react';
import { X, ClipboardCheck } from 'lucide-react';
import './PreviewModal.css';

const PreviewModal = ({ isOpen, onClose, data, title, onConfirm, loading }) => {
  if (!isOpen) return null;

  const renderValue = (key, value) => {
    if (value instanceof File) return value.name;
    if (typeof value === 'boolean') return value ? 'Yes' : 'No';
    return value || 'Not provided';
  };

  const fieldLabels = {
    participantName: "Participant Name",
    traderName: "Trader Name",
    businessName: "Business Name",
    legalBusinessName: "Legal Business Name",
    address: "Address",
    businessAddress: "Business Address",
    gstNo: "GST Number",
    gstNumber: "GST Number",
    mobile: "Mobile Number",
    mobileNo: "Mobile Number",
    email: "Email Address",
    purchaseType: "Enquiry Type",
    quotationType: "Quotation Type",
    particulars: "Particulars",
    agree: "Agreed to Terms"
  };

  return (
    <div className="modal-overlay preview-overlay">
      <div className="modal-content preview-content animate-pop-in">
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>
        
        <div className="modal-header">
          <ClipboardCheck size={24} className="m-r-10" color="#717fe0" />
          <h3 className="modal-title">{title || "Submission Preview"}</h3>
        </div>

        <div className="modal-body preview-body">
          <p className="preview-intro">Please review your details before final submission.</p>
          
          <div className="preview-grid">
            {Object.entries(data).map(([key, value]) => {
              if (key === 'siteId' || key === 'agree') return null;
              return (
                <div className="preview-item" key={key}>
                  <label>{fieldLabels[key] || key.charAt(0).toUpperCase() + key.slice(1)}</label>
                  <span>{renderValue(key, value)}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="modal-footer preview-footer">
          <button className="preview-edit-btn" onClick={onClose} disabled={loading}>
            Back to Edit
          </button>
          <button className="preview-submit-btn" onClick={onConfirm} disabled={loading}>
            {loading ? "Submitting..." : "Confirm & Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
