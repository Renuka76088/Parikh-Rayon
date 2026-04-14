import React from 'react';
import { CheckCircle2, X } from 'lucide-react';
import './SuccessModal.css';

const SuccessModal = ({ isOpen, onClose, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content animate-pop-in">
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>
        
        <div className="modal-body">
          <div className="success-icon-wrapper">
            <CheckCircle2 size={60} color="#4bb543" className="animate-check" />
          </div>
          <h2 className="modal-title">{title || "Success!"}</h2>
          <p className="modal-message">{message || "Your application has been submitted successfully."}</p>
          
          <button className="modal-action-btn" onClick={onClose}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
