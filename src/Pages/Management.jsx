import React, { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { managementApi, IMAGE_BASE_URL } from "../utils/api";
import "./Management.css";

const Management = () => {
  const [pageData, setPageData] = useState({ title: '', description: '' });
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [contentRes, membersRes] = await Promise.all([
          managementApi.getContent('ParekhRayon05'),
          managementApi.getMembers('ParekhRayon05')
        ]);
        if (contentRes.data?.success && contentRes.data?.data) {
          setPageData(contentRes.data.data);
        }
        if (membersRes.data?.success && membersRes.data?.data) {
          setMembers(membersRes.data.data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="management-section">
      {/* Responsive CSS with Header Fix */}
      <style>
        {`
          .management-section {
            padding-top: 120px; /* Header se niche lane ke liye padding */
            padding-bottom: 80px;
            background-color: #fff;
            margin-top: 20px; /* Desktop margin */
          }

          .management-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 15px;
          }

          .management-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 40px;
          }

          .management-left {
            flex: 1;
          }

          .management-right {
            flex: 1;
            border-left: 3px solid #717fe0;
            padding-left: 40px;
          }

          .management-label {
            display: block;
            text-transform: uppercase;
            font-size: 13px;
            letter-spacing: 2px;
            color: #888;
            margin-bottom: 12px;
            font-weight: 700;
          }

          .management-title {
            font-size: 42px;
            font-weight: 800;
            color: #222;
            text-transform: uppercase;
            line-height: 1.2;
            letter-spacing: -0.5px;
          }

          /* Mobile Responsive Fix */
          @media (max-width: 768px) {
            .management-section {
              padding-top: 100px; /* Mobile header height ke hisab se */
              padding-bottom: 60px;
              margin-top: 10px;
            }

            .management-row {
              flex-direction: column;
              text-align: center;
              gap: 25px;
            }

            .management-right {
              border-left: none;
              border-top: 3px solid #717fe0;
              padding-left: 0;
              padding-top: 25px;
              max-width: 100%;
            }

            .management-title {
              font-size: 30px;
            }

            .management-description {
              font-size: 16px;
            }
          }
        `}
      </style>

      <div className="management-container">
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', margin: '60px 0' }}>
            <Loader2 className="animate-spin" size={40} color="#717fe0" />
          </div>
        ) : (
          <>
            <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 50px' }}>
              <h2 className="management-title" style={{ marginBottom: '25px', textAlign: 'center' }}>
                {pageData.title || "Our Management"}
              </h2>
              <div
                className="rte-content w-full max-w-full overflow-hidden text-[#555] text-[18px] leading-relaxed [&>p]:mb-3 [&>img]:max-w-full [&>img]:h-auto [&>img]:mx-auto [&_table]:w-full [&_table]:max-w-full [&_td]:break-words [&_th]:break-words [&>ul]:pl-5 [&>ol]:pl-5"
                style={{ overflowWrap: 'break-word', wordBreak: 'normal', hyphens: 'none', textAlign: 'center', margin: '0 auto' }}
                dangerouslySetInnerHTML={{ __html: pageData.description ? pageData.description.replace(/&nbsp;/g, ' ') : "Parekh Rayon is administered and governed by highly skilled management." }}
              />
            </div>

            {members.length > 0 && (
              <div style={{ marginTop: '90px' }}>
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                  <h3 style={{ fontSize: '32px', fontWeight: '900', color: '#1a1f36', textTransform: 'uppercase', letterSpacing: '-0.5px', marginBottom: '15px' }}>
                    Leadership Team
                  </h3>
                  <div style={{ width: '80px', height: '4px', backgroundColor: '#717fe0', margin: '0 auto', borderRadius: '2px' }}></div>
                </div>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '40px'
                }}>
                  {members.map(member => (
                    <div key={member._id} style={{ width: '100%', maxWidth: '280px', background: '#fff', borderRadius: '20px', padding: '35px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 10px 40px rgba(36, 47, 89, 0.06)', border: '1px solid #f0f2ff', transition: 'transform 0.3s ease' }}>
                      <div style={{ width: '130px', height: '130px', borderRadius: '50%', overflow: 'hidden', marginBottom: '20px', backgroundColor: '#f0f2f5', border: '4px solid #fff', boxShadow: '0 4px 15px rgba(0,0,0,0.08)' }}>
                        {member.image ? (
                          <img
                            src={member.image.startsWith('http') ? member.image : `${IMAGE_BASE_URL}/${member.image.replace(/\\/g, '/')}`}
                            alt={member.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        ) : (
                          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase' }}>No Photo</div>
                        )}
                      </div>
                      <h4 style={{ fontSize: '19px', fontWeight: '900', color: '#1a1f36', marginBottom: '8px', letterSpacing: '-0.3px', textTransform: 'uppercase' }}>{member.name}</h4>
                      <p style={{ fontSize: '12px', color: '#717fe0', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: '800', margin: 0 }}>{member.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Management;
