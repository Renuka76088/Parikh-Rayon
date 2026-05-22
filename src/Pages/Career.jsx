import React, { useState, useEffect } from "react";
import { careerApi, careerHeaderApi } from "../utils/api";
import { Loader2, Briefcase, MapPin, Clock, Mail, CircleDollarSign } from "lucide-react";
import "./Career.css";

const Career = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [headerData, setHeaderData] = useState({ title: "Join Our Team", description: "Explore opportunities to grow with a leader in the Textile Sector" });

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const [jobsRes, headerRes] = await Promise.all([
          careerApi.getAll("ParekhRayon05"),
          careerHeaderApi.get("ParekhRayon05")
        ]);

        if (jobsRes.data?.success && jobsRes.data?.data?.length > 0) {
          setCareers(jobsRes.data.data);
        } else {
          setCareers([]);
        }

        if (headerRes.data?.success && headerRes.data?.data) {
          setHeaderData(headerRes.data.data);
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

          <h3 className="ltext-103 cl5 p-t-10 m-b-10" style={{ fontWeight: '800' }}>{headerData.title}</h3>

          {headerData.description && (
            <div
              className="rte-content w-full max-w-full overflow-hidden text-[#666] text-[15px] leading-relaxed mx-auto max-w-3xl [&>p]:mb-3 [&>img]:max-w-full [&>img]:h-auto [&>img]:mx-auto [&_table]:w-full [&_table]:max-w-full [&_td]:break-words [&_th]:break-words [&>ul]:pl-5 [&>ol]:pl-5"
              style={{ overflowWrap: 'break-word', wordBreak: 'normal', hyphens: 'none' }}
              dangerouslySetInnerHTML={{ __html: headerData.description.replace(/&nbsp;/g, ' ') }}
            />
          )}
          <div className="career-divider" style={{ width: '60px', height: '4px', backgroundColor: '#717fe0', margin: '20px auto', borderRadius: '2px' }} />
        </div>

        {careers.length > 0 ? (
          <div className="career-list" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {careers.map((job) => (
              <div key={job._id} className="job-card shadow-sm trans-04 hov-shadow-md" style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '15px', border: '1px solid #f0f0f0', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', backgroundColor: '#717fe0' }} />

                {/* Header section with title, metadata, and apply button */}
                <div className="job-card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
                  <div className="job-title-meta-box" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                    <div className="icon-box" style={{ width: '50px', height: '50px', backgroundColor: '#f8f9ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(113, 127, 224, 0.1)' }}>
                      <Briefcase size={22} color="#717fe0" />
                    </div>
                    <div>
                      <h4 className="mtext-101 cl2 p-b-8" style={{ fontWeight: '700', fontSize: '1.25rem' }}>{job.title}</h4>

                      {/* Meta Tags Row */}
                      <div className="job-meta-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 25px', marginTop: '4px' }}>
                        <div className="flex-m" style={{ gap: '6px', fontSize: '13.5px', color: '#666' }}>
                          <MapPin size={14} className="cl6 flex-shrink-0" />
                          <span>{job.location ? job.location.replace(/<[^>]*>?/gm, '') : "Remote/Office"}</span>
                        </div>
                        <div className="flex-m" style={{ gap: '6px', fontSize: '13.5px', color: '#666' }}>
                          <Mail size={14} className="cl6 flex-shrink-0" />
                          <span>{job.contactEmail || job.email || "hr@parekhrayon.com"}</span>
                        </div>
                        {job.salary && (
                          <div className="flex-m" style={{ gap: '6px', fontSize: '13.5px', color: '#666' }}>
                            <CircleDollarSign size={14} className="cl6 flex-shrink-0" />
                            <span>{job.salary.replace(/<[^>]*>?/gm, '')}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${job.contactEmail || job.email || "hr@parekhrayon.com"}&su=${encodeURIComponent(`Application for ${job.title}`)}&body=${encodeURIComponent(
                      `Hello,\n\nI would like to apply for the position of ${job.title} at Parikh Rayon.\n\nPlease find my details below:\n- Position: ${job.title}\n- Location: ${job.location || 'N/A'}\n\nMy Resume Link/Details: [Please insert your details here]\n\nThank you.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-c-m stext-101 cl0 size-102 bg1 bor1 hov-btn1 p-lr-20 trans-04 apply-btn-responsive"
                    style={{ borderRadius: '8px', height: '42px', textDecoration: 'none' }}
                  >
                    Apply Now
                  </a>
                </div>

                {/* Divider line between header details and details content */}
                <div style={{ height: '1px', backgroundColor: '#f0f0f0', width: '100%' }} />

                {/* Job Details Content (Technical Description & Minimum Requirements) */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {/* Technical Description Section */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <h5 style={{ fontWeight: '700', color: '#252d4a', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      Technical Description
                    </h5>
                    <div
                      className="rte-content w-full max-w-full overflow-hidden text-[#555] text-[12px] leading-relaxed [&>p]:!mb-2 [&>img]:hidden [&_table]:hidden"
                      style={{ overflowWrap: 'break-word', wordBreak: 'normal', hyphens: 'none' }}
                      dangerouslySetInnerHTML={{ __html: job.description ? job.description.replace(/&nbsp;/g, ' ') : "Join our fast-growing textile division and build your career in the fashion industry." }}
                    />
                  </div>

                  {/* Minimum Requirements Section */}
                  {job.experience && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <h5 style={{ fontWeight: '700', color: '#252d4a', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Minimum Requirements
                      </h5>
                      <div
                        className="rte-content w-full max-w-full overflow-hidden text-[#555] text-[12px] leading-relaxed [&>p]:!mb-2 [&>img]:hidden [&_table]:hidden"
                        style={{ overflowWrap: 'break-word', wordBreak: 'normal', hyphens: 'none' }}
                        dangerouslySetInnerHTML={{ __html: job.experience.replace(/&nbsp;/g, ' ') }}
                      />
                    </div>
                  )}
                </div>
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
