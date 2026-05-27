import React, { useState, useEffect } from "react";
import { circularApi, circularHeaderApi, IMAGE_BASE_URL } from "../utils/api";
import { Loader2, FileText, Calendar, Eye, Download, BellOff, Printer } from "lucide-react";
import "./Circular.css";

const Circular = () => {
  const [circulars, setCirculars] = useState([]);
  const [headerData, setHeaderData] = useState({
    title: "OFFICIAL CIRCULARS",
    description: "STAY INFORMED WITH THE LATEST ALERTS, STATUTORY CIRCULARS, AND COMPLIANCE NOTICES."
  });
  const [loading, setLoading] = useState(true);
  const [printingId, setPrintingId] = useState(null);

  const cleanText = (text) => {
    if (!text || typeof text !== 'string') return text;
    let cleaned = text.trim();

    // Remove common garbage prefixes seen in database responses
    if (cleaned.startsWith('s') && cleaned.length > 2 && cleaned[1] === cleaned[1].toUpperCase()) {
      cleaned = cleaned.substring(1);
    } else if (cleaned.toLowerCase().startsWith('sexplore')) {
      cleaned = cleaned.substring(1);
    } else if (cleaned.toLowerCase().startsWith('stender')) {
      cleaned = cleaned.substring(1);
    }

    // Strip junk tags/prefixes
    cleaned = cleaned.replace(/^dsagse\s*/i, '');
    cleaned = cleaned.replace(/^36\);\s*"?/i, '');

    return cleaned.trim();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [circularRes, headerRes] = await Promise.all([
          circularApi.getAll("ParekhRayon05"),
          circularHeaderApi.get("ParekhRayon05").catch(e => null)
        ]);

        if (circularRes.data?.success && circularRes.data?.data) {
          setCirculars(circularRes.data.data);
        }

        if (headerRes && headerRes.data?.success && headerRes.data?.data) {
          setHeaderData(headerRes.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch circular data:", error);
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
        <p className="p-t-20 stext-101 cl6">Fetching Latest Circulars...</p>
      </div>
    );
  }

  const handlePrint = async (url, id) => {
    setPrintingId(id);
    try {
      const fileUrl = url.startsWith('http') ? url : `${IMAGE_BASE_URL}/${url}`;
      const response = await fetch(fileUrl);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      // Create a hidden iframe for printing
      const iframe = document.createElement('iframe');
      iframe.style.visibility = 'hidden';
      iframe.style.position = 'absolute';
      iframe.style.top = '-10000px';
      iframe.src = blobUrl;

      // Clean up previous print iframe if it exists
      const oldIframe = document.getElementById('pdf-print-iframe');
      if (oldIframe) {
        try {
          document.body.removeChild(oldIframe);
        } catch (e) { }
      }

      iframe.id = 'pdf-print-iframe';
      document.body.appendChild(iframe);

      iframe.onload = () => {
        setTimeout(() => {
          iframe.contentWindow.focus();
          iframe.contentWindow.print();
          setPrintingId(null);
          // Clean up the iframe and blob URL after 1 minute (safely after user prints)
          setTimeout(() => {
            try {
              document.body.removeChild(iframe);
              URL.revokeObjectURL(blobUrl);
            } catch (e) { }
          }, 60000);
        }, 300);
      };
    } catch (err) {
      console.error('Print failed:', err);
      setPrintingId(null);
      // Fallback: Open in new tab
      window.open(url.startsWith('http') ? url : `${IMAGE_BASE_URL}/${url}`, '_blank');
    }
  };

  return (
    <section className="circular-section">
      <div className="circular-container">
        <div className="circular-header">
          <h3>{cleanText(headerData.title)}</h3>
          <p>{cleanText(headerData.description)}</p>
          <div className="circular-line" />
        </div>

        <div className="circular-grid">
          {circulars.length > 0 ? (
            circulars.map((item, index) => (
              <div key={item._id || index} className="circular-item">
                <div className="circular-icon-box">
                  <FileText size={32} />
                </div>

                <h4>{cleanText(item.subject)}</h4>

                <div className="circular-date">
                  <Calendar size={16} />
                  <span>{item.publishDate}</span>
                </div>

                {item.pdfUrl && (
                  <div className="circular-btn-group">
                    <a
                      href={item.pdfUrl.startsWith('http') ? item.pdfUrl : `${IMAGE_BASE_URL}/${item.pdfUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="circular-btn circular-btn-view"
                    >
                      <Eye size={16} />
                      View
                    </a>
                    <button
                      onClick={() => handlePrint(item.pdfUrl, item._id || index)}
                      disabled={printingId !== null}
                      className="circular-btn circular-btn-print"
                    >
                      {printingId === (item._id || index) ? (
                        <>
                          <Loader2 className="animate-spin" size={16} />
                          Preparing...
                        </>
                      ) : (
                        <>
                          <Printer size={16} />
                          Print
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="circular-empty">
              <div className="circular-empty-icon">
                <BellOff size={80} strokeWidth={1} />
              </div>
              <h4>No Circulars Found</h4>
              <p>
                All official announcements, quality standards, and corporate notices will appear here once published by the management.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Circular;


