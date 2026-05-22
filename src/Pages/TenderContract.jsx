import React, { useState, useEffect } from "react";
import { tenderApi, tenderHeaderApi } from "../utils/api";
import { Loader2, Calendar, Check, Download, Bell } from "lucide-react";
import "./TenderContract.css";

const TenderContract = () => {
  const [tenders, setTenders] = useState([]);
  const [headerData, setHeaderData] = useState({
    title: "TENDERS & CONTRACTS",
    description: "Explore open Expressions of Interest (EOI), tender opportunities, and official contracts from our chamber."
  });
  const [loading, setLoading] = useState(true);

  const cleanText = (text) => {
    if (!text || typeof text !== 'string') return text;
    let cleaned = text.trim();

    // Remove common garbage prefixes seen in screenshots
    if (cleaned.startsWith('s') && cleaned.length > 2 && cleaned[1] === cleaned[1].toUpperCase()) {
      cleaned = cleaned.substring(1);
    } else if (cleaned.toLowerCase().startsWith('sexplore')) {
      cleaned = cleaned.substring(1);
    } else if (cleaned.toLowerCase().startsWith('stender')) {
      cleaned = cleaned.substring(1);
    }

    cleaned = cleaned.replace(/^dsagse\s*/i, '');
    cleaned = cleaned.replace(/^36\);\s*"?/i, '');

    return cleaned.trim();
  };

  const cleanDescriptionHtml = (html) => {
    if (!html || typeof html !== 'string') return html;
    return html.replace(/&nbsp;/gi, " ").replace(/\u00a0/g, " ");
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return dateString;
    
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return d.toLocaleDateString('en-US', options).toUpperCase();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [tenderRes, headerRes] = await Promise.all([
          tenderApi.getAll("ParekhRayon05"),
          tenderHeaderApi.get("ParekhRayon05").catch(e => null)
        ]);

        if (tenderRes.data?.success && tenderRes.data?.data) {
          setTenders(tenderRes.data.data);
        }

        if (headerRes && headerRes.data?.success && headerRes.data?.data) {
          setHeaderData(headerRes.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch tender data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return (
      <div className="flex-c-m flex-col w-full" style={{ height: "100vh" }}>
        <Loader2 className="animate-spin text-[#717fe0]" size={50} />
        <p className="p-t-20 stext-101 cl6">Fetching Latest Tenders...</p>
      </div>
    );
  }

  return (
    <section className="tender-section">
      <div className="tender-container">
        <div className="tender-header">
          <h3>{cleanText(headerData.title)}</h3>
          <div className="tender-divider"></div>
          <p>{cleanText(headerData.description)}</p>
        </div>

        {tenders.length > 0 ? (
          <div className="tender-main-content-full">
            {tenders.map((tender, index) => {
              const displayDate = tender.date || tender.createdAt;
              const isClosed = tender.status === 'closed' || tender.status === 'archived';
              
              return (
                <div key={tender._id || index} className="tender-card m-b-30">
                  {/* Meta Row: Status Badge & Calendar Date */}
                  <div className="tender-meta-row">
                    <span className={`tender-status-badge ${isClosed ? 'status-closed' : 'status-active'}`}>
                      {tender.status ? tender.status.toUpperCase() : 'ACTIVE'}
                    </span>
                    {displayDate && (
                      <div className="tender-date-box">
                        <Calendar size={14} className="tender-calendar-icon" />
                        <span>{formatDate(displayDate)}</span>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h4 className="tender-title">{cleanText(tender.title)}</h4>

                  {/* Description with left red vertical indicator bar */}
                  <div className="tender-description-container">
                    <span className="tender-red-bar"></span>
                    <div
                      className="rte-content tender-description-text"
                      dangerouslySetInnerHTML={{ __html: cleanDescriptionHtml(tender.description) }}
                    />
                  </div>

                  {/* Critical Specifications (Key Points) */}
                  {tender.keyPoints && tender.keyPoints.length > 0 && (
                    <div className="tender-specifications-section">
                      <div className="tender-divider-horizontal"></div>
                      <h5 className="critical-specifications-title">Critical Specifications</h5>
                      <div className="tender-key-points-list">
                        {tender.keyPoints.map((point, pIndex) => (
                          <div key={pIndex} className="tender-key-point-box">
                            <Check size={16} className="tender-check-icon" />
                            <span className="tender-key-point-text">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* PDF Download Button if document exists */}
                  {tender.document && (
                    <div className="tender-download-container">
                      <a
                        href={tender.document.startsWith('http') ? tender.document : `http://localhost:2000/${tender.document}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tender-download-btn"
                      >
                        <Download size={16} />
                        Download Tender PDF
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="tender-empty-container">
            <div className="tender-sidebar-box centered">
              <div className="tender-sidebar-header">
                <Bell size={18} className="tender-sidebar-icon" />
                <span className="tender-sidebar-tag">EOI Notice</span>
              </div>
              <h4 className="tender-sidebar-highlight">At present, No EOI published</h4>
              <p className="tender-sidebar-text">
                Please check back later for new opportunities or contact our procurement office.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TenderContract;
