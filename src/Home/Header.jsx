import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // --- States ---
  const [loading, setLoading] = useState(true); // Pre-loader state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);
  
  // --- Chatbot States ---
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Namaste! Welcome to Parekh Rayon. How can I help you today?' }
  ]);
  const chatEndRef = useRef(null);

  const primaryColor = '#717fe0';

  // --- Loader Logic ---
  useEffect(() => {
    // 2.5 seconds ke liye loader dikhega
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Chat auto-scroll logic
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const userMsg = { role: 'user', text: chatInput };
    setMessages(prev => [...prev, userMsg]);
    setChatInput("");

    setTimeout(() => {
      let botResponse = "Thank you for reaching out. A Parekh Rayon executive will guide you shortly.";
      const input = chatInput.toLowerCase();
      if (input.includes("rayon")) botResponse = "We specialize in premium 14kg Rayon and Liva-approved fabrics.";
      else if (input.includes("price")) botResponse = "For bulk pricing, please visit our 'Trade Enquiry' page.";
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    }, 1000);
  };

  // --- Loader Component ---
  if (loading) {
    return (
      <div style={loaderOverlay}>
        <div style={loaderContent}>
          <div className="loader-box" style={loaderBoxStyle}>
            <span style={{ color: 'white', fontSize: '40px', fontWeight: 'bold' }}>P</span>
          </div>
          <h2 style={loaderTitle}>PAREKH <span style={{ color: primaryColor }}>RAYON</span></h2>
          <p style={loaderSubtitle}>RAIPUR • CG • INDIA</p>
          <div style={loadingBarStyle}>
            <div className="loading-progress" style={progressBarStyle}></div>
          </div>
        </div>
        <style>{`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.8; }
            100% { transform: scale(1); opacity: 1; }
          }
          @keyframes slideProgress {
            0% { width: 0%; }
            100% { width: 100%; }
          }
          .loader-box { animation: pulse 1.5s infinite ease-in-out; }
          .loading-progress { animation: slideProgress 2.5s linear forwards; }
        `}</style>
      </div>
    );
  }

  // --- Main Header Return (Website Content) ---
  return (
    <>
      <header style={headerStyle}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <div style={{
              width: '40px', height: '40px', borderRadius: '8px', background: primaryColor,
              display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '10px'
            }}>
              <span style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>P</span>
            </div>
            <div style={{ lineHeight: '1.2' }}>
              <div style={{ fontSize: '18px', fontWeight: '900', color: '#000' }}>
                PAREKH <span style={{ color: primaryColor }}>RAYON</span>
              </div>
              <div style={{ fontSize: '8px', color: '#888', letterSpacing: '1px' }}>RAIPUR, CG, INDIA</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="d-none d-lg-flex" style={{ alignItems: 'center', gap: '25px' }}>
            {['Home', 'About', 'Product', 'Blog', 'Contact'].map((item) => (
              <Link key={item} to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="nav-item-link" style={menuLinkStyle}>{item}</Link>
            ))}
            <div 
              style={{ position: 'relative', paddingBottom: '20px', marginBottom: '-20px' }} 
              onMouseEnter={() => setPagesDropdownOpen(true)}
              onMouseLeave={() => setPagesDropdownOpen(false)}
            >
              <span style={{ ...menuLinkStyle, cursor: 'pointer' }}>
                PAGES <i className="zmdi zmdi-chevron-down" style={{ marginLeft: '5px' }}></i>
              </span>
              {pagesDropdownOpen && (
                <div style={dropdownStyle}>
                  {pagesLinks.map((link, i) => (
                    <Link key={i} to={link.path} style={dropdownLinkStyle}>{link.name}</Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="d-lg-none" onClick={() => setMobileMenuOpen(true)}>
            <i className="zmdi zmdi-menu" style={{ fontSize: '30px', color: '#333', cursor: 'pointer' }}></i>
          </div>
        </div>
      </header>

      {/* Floating Elements (Social, Chat, WhatsApp) */}
      <div style={socialFloatContainer}>
        <a href="#" style={socialIconStyle}><i className="zmdi zmdi-facebook"></i></a>
        <a href="#" style={socialIconStyle}><i className="zmdi zmdi-instagram"></i></a>
        <a href="#" style={socialIconStyle}><i className="zmdi zmdi-linkedin"></i></a>
      </div>

      <div style={floatContainer}>
        <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" style={{ ...floatIcon, background: '#25D366' }}>
          <i className="zmdi zmdi-whatsapp"></i>
        </a>
        <div onClick={() => setIsChatOpen(!isChatOpen)} style={{ ...floatIcon, background: primaryColor }}>
          <i className={`zmdi ${isChatOpen ? 'zmdi-close' : 'zmdi-comment-text-alt'}`}></i>
        </div>
      </div>

      {/* Chat Window Implementation Same as Before... */}
      {isChatOpen && (
        <div style={chatWindow}>
            {/* ... Chat Window Code ... */}
        </div>
      )}

      {/* Mobile Sidebar & Overlay Same as Before... */}

      <style>{`
        .nav-item-link:hover { color: ${primaryColor} !important; }
        .nav-item-link { transition: 0.3s; }
      `}</style>
    </>
  );
};

// --- New Styles for Loader ---
const loaderOverlay = {
  position: 'fixed', inset: 0, background: '#ffffff', zIndex: 9999,
  display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center'
};
const loaderContent = { display: 'flex', flexDirection: 'column', alignItems: 'center' };
const loaderBoxStyle = {
  width: '80px', height: '80px', background: '#717fe0', borderRadius: '15px',
  display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px',
  boxShadow: '0 10px 30px rgba(113, 127, 224, 0.4)'
};
const loaderTitle = { fontSize: '24px', fontWeight: '900', color: '#000', margin: '0', letterSpacing: '2px' };
const loaderSubtitle = { fontSize: '12px', color: '#888', letterSpacing: '4px', marginTop: '5px' };
const loadingBarStyle = { width: '150px', height: '4px', background: '#f0f0f0', borderRadius: '10px', marginTop: '20px', overflow: 'hidden' };
const progressBarStyle = { height: '100%', background: '#717fe0', width: '0%' };

// --- Previous Styles (Keep them as they are) ---
const headerStyle = { position: 'fixed', top: 0, left: 0, right: 0, zIndex: 2000, background: '#ffffff', boxShadow: '0 2px 15px rgba(0,0,0,0.1)', height: '70px', display: 'flex', alignItems: 'center' };
const menuLinkStyle = { textDecoration: 'none', fontWeight: '700', fontSize: '14px', color: '#333', textTransform: 'uppercase' };
const dropdownStyle = { position: 'absolute', top: '40px', left: '0', background: 'white', boxShadow: '0 8px 25px rgba(0,0,0,0.1)', minWidth: '220px', borderRadius: '8px', padding: '10px 0', zIndex: 5000, borderTop: '3px solid #717fe0' };
const dropdownLinkStyle = { display: 'block', padding: '10px 20px', color: '#555', textDecoration: 'none', fontSize: '13px', fontWeight: '600', borderBottom: '1px solid #f9f9f9' };
const socialFloatContainer = { position: 'fixed', left: '0', top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', background: 'white', boxShadow: '2px 0 10px rgba(0,0,0,0.1)', borderRadius: '0 8px 8px 0', zIndex: 4000, padding: '10px 5px' };
const socialIconStyle = { padding: '10px', fontSize: '20px', color: '#333', textDecoration: 'none', display: 'block' };
const floatContainer = { position: 'fixed', bottom: '30px', right: '30px', display: 'flex', flexDirection: 'column', gap: '15px', zIndex: 4000 };
const floatIcon = { width: '55px', height: '55px', borderRadius: '50%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' };
const mobileLinkStyle = { textDecoration: 'none', color: '#333', fontSize: '16px', fontWeight: '600', display: 'block', padding: '15px 0' };

const pagesLinks = [
    { name: 'Our Management', path: '/management' },
    { name: 'Trade Enquiry', path: '/TradeEnquiry' },
    { name: 'e-Quotation', path: '/quotation' },
    { name: 'e-Auction', path: '/auction' },
    { name: 'Tender & Contract', path: '/TenderContract' },
    { name: 'Career Page', path: '/Career' },
    { name: 'Customer Review', path: '/review' },
    { name: 'Visit with Appointment', path: '/appointment' },
    { name: 'Media Gallery', path: '/mediagallery' },
    { name: 'Our Textile Associates', path: '/associates' }
  ];

export default Header;