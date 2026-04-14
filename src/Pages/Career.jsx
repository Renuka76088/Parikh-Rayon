import React, { useState, useEffect } from "react";
import { careerApi } from "../utils/api";
import { Loader2, Briefcase, MapPin, Clock, Mail, CircleDollarSign } from "lucide-react";
import "./Career.css";

const Career = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const response = await careerApi.getAll("ParekhRayon05");
        if (response.data.success && response.data.data.length > 0) {
          setCareers(response.data.data);
        } else {
          setCareers([]);
        }
      } catch (error) {
        console.error("Failed to fetch careers:", error);
        setCareers([]);
      } finally {
        setLoading(false);
      }
    };
    fetchCareers();
  }, []);

  if (loading) {
    return (
      <div className="flex-c-m flex-col w-full" style={{ height: "100vh" }}>
        <Loader2 className="animate-spin text-[#717fe0]" size={50} />
        <p className="p-t-20 stext-101 cl6">Checking for Opportunities...</p>
      </div>
    );
  }

  return (
    <section className="career-section p-t-100 p-b-100">
      <div className="career-container">
        <div className="career-header text-center m-b-60">
          <span style={{ fontSize: '12px', letterSpacing: '4px', color: '#888', fontWeight: '600', textTransform: 'uppercase' }}>Work With Us</span>
          <h3 className="ltext-103 cl5 p-t-10" style={{ fontWeight: '800' }}>Join Our Team</h3>
          <p className="stext-101 cl6 p-t-10">Explore opportunities to grow with a leader in the Textile Sector</p>
          <div className="career-divider" style={{ width: '60px', height: '4px', backgroundColor: '#717fe0', margin: '20px auto', borderRadius: '2px' }} />
        </div>

        {careers.length > 0 ? (
          <div className="career-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' }}>
            {careers.map((job) => (
              <div key={job._id} className="job-card shadow-sm trans-04 hov-shadow-md" style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '15px', border: '1px solid #f0f0f0', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', backgroundColor: '#717fe0' }} />
                <div className="flex-sb-m p-b-20">
                  <div className="icon-box" style={{ width: '45px', height: '45px', backgroundColor: '#f8f9ff', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Briefcase size={20} color="#717fe0" />
                  </div>
                  <span className="stext-105 cl3" style={{ fontSize: '12px', backgroundColor: '#f0f0f0', padding: '4px 12px', borderRadius: '20px' }}>
                    {job.type || "Full Time"}
                  </span>
                </div>
                
                <h4 className="mtext-101 cl2 p-b-10" style={{ fontWeight: '700' }}>{job.title}</h4>
                
                <div className="flex-w m-b-20">
                  <div className="flex-m m-r-20">
                    <MapPin size={14} className="m-r-6 cl6" />
                    <span className="stext-109 cl6" style={{ fontSize: '13px' }}>{job.location || "Remote/Office"}</span>
                  </div>
                  <div className="flex-m m-r-20">
                    <Clock size={14} className="m-r-6 cl6" />
                    <span className="stext-109 cl6" style={{ fontSize: '13px' }}>{job.experience || "Freshers"}</span>
                  </div>
                  {job.salary && (
                    <div className="flex-m">
                      <CircleDollarSign size={14} className="m-r-6 cl6" />
                      <span className="stext-109 cl6" style={{ fontSize: '13px' }}>{job.salary}</span>
                    </div>
                  )}
                </div>

                <p className="stext-102 cl6 p-b-25" style={{ fontSize: '14px', lineHeight: '1.6', height: '65px', overflow: 'hidden' }}>
                  {job.description || "Join our fast-growing textile division and build your career in the fashion industry."}
                </p>

                <a 
                  href={`mailto:${job.contactEmail || job.email || "hr@parekhrayon.com"}?subject=${encodeURIComponent(`Application for ${job.title}`)}&body=${encodeURIComponent(
                    `Hello,\n\nI would like to apply for the position of ${job.title} at Parikh Rayon.\n\nPlease find my details below:\n- Position: ${job.title}\n- Location: ${job.location || 'N/A'}\n\nMy Resume Link/Details: [Please insert your details here]\n\nThank you.`
                  )}`}
                  className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04" 
                  style={{ width: '100%', borderRadius: '8px', height: '45px', textDecoration: 'none' }}
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="career-card text-center shadow-sm" style={{ backgroundColor: '#fff', padding: '60px 20px', borderRadius: '20px', border: '1px solid #f0f0f0' }}>
            <div className="career-icon m-b-20" style={{ fontSize: '50px' }}>💼</div>
            <h3 className="mtext-103 cl2 p-b-10" style={{ fontWeight: '700' }}>At present, No Vacancy</h3>
            <p className="stext-102 cl6" style={{ maxWidth: '500px', margin: '0 auto' }}>
              We are currently not hiring, but we are always looking for talented individuals. Please check back later.
            </p>
            <p className="career-note p-t-20" style={{ fontSize: '13px', color: '#999', fontStyle: 'italic' }}>
              *Please check this page later for future updates.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Career;
