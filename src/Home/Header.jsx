import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);

  const primaryColor = '#717fe0';

  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2000, // Z-index badha diya taaki sabke upar rahe
    background: '#ffffff',
    boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
    padding: '12px 0',
    height: '70px',
    display: 'flex',
    alignItems: 'center'
  };

  return (
    <>
      <header style={headerStyle}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              background: primaryColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '10px'
            }}>
              <span style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>P</span>
            </div>
            <div style={{ lineHeight: '1.2' }}>
              <div style={{ fontSize: '18px', fontWeight: '900', color: '#000' }}>
                PAREKH <span style={{ color: primaryColor }}>RAYON</span>
              </div>
              <div style={{ fontSize: '8px', color: '#888', letterSpacing: '1px' }}>RAIPUR, CG</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="d-none d-lg-flex" style={{ alignItems: 'center', gap: '25px' }}>
            {['Home', 'About', 'Product', 'Blog', 'Contact'].map((item) => (
              <Link 
                key={item} 
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                className="nav-item-link"
                style={menuLinkStyle}>
                {item}
              </Link>
            ))}
            
            {/* Pages Dropdown - Fix: Bridge added with padding */}
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
                    <Link key={i} to={link.path} style={dropdownLinkStyle}>
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Toggle Button */}
          <div className="d-lg-none" style={{ zIndex: 2100 }} onClick={() => setMobileMenuOpen(true)}>
            <i className="zmdi zmdi-menu" style={{ fontSize: '30px', color: '#333', cursor: 'pointer' }}></i>
          </div>
        </div>

        {/* Mobile Sidebar Menu */}
        <div style={{
          position: 'fixed',
          top: 0,
          right: mobileMenuOpen ? '0' : '-100%',
          width: '280px',
          height: '100vh',
          background: 'white',
          zIndex: 3000,
          transition: '0.4s ease',
          padding: '20px',
          boxShadow: '-5px 0 20px rgba(0,0,0,0.2)',
          overflowY: 'auto'
        }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
            <i className="zmdi zmdi-close" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '28px', cursor: 'pointer' }}></i>
          </div>

          <ul style={{ listStyle: 'none', padding: 0 }}>
            {['Home', 'About', 'Product', 'Blog', 'Contact'].map((item) => (
              <li key={item} style={{ borderBottom: '1px solid #f5f5f5' }}>
                <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} style={mobileLinkStyle}>
                  {item}
                </Link>
              </li>
            ))}
            
            <li>
              <div 
                onClick={() => setMobilePagesOpen(!mobilePagesOpen)}
                style={{ ...mobileLinkStyle, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                PAGES <i className={`zmdi ${mobilePagesOpen ? 'zmdi-chevron-up' : 'zmdi-chevron-down'}`}></i>
              </div>
              {mobilePagesOpen && (
                <div style={{ background: '#fcfcfc', paddingLeft: '15px' }}>
                  {pagesLinks.map((link, i) => (
                    <Link key={i} to={link.path} onClick={() => setMobileMenuOpen(false)} style={{ ...mobileLinkStyle, fontSize: '14px', fontWeight: '500' }}>
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* Overlay Fix: Background Blur and Click Handler */}
        {mobileMenuOpen && (
          <div 
            onClick={() => setMobileMenuOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.4)',
              backdropFilter: 'blur(4px)',
              zIndex: 2500 // Sidebar se niche par header se upar
            }}
          ></div>
        )}
      </header>

      <style>{`
        .nav-item-link:hover { color: ${primaryColor} !important; }
        .nav-item-link { transition: 0.3s; }
      `}</style>
    </>
  );
};

// Styles
const menuLinkStyle = {
  textDecoration: 'none',
  fontWeight: '700',
  fontSize: '14px',
  color: '#333',
  textTransform: 'uppercase'
};

const mobileLinkStyle = {
  textDecoration: 'none',
  color: '#333',
  fontSize: '16px',
  fontWeight: '600',
  display: 'block',
  padding: '15px 0'
};

const dropdownStyle = {
  position: 'absolute',
  top: '40px', // Header ke height ke hisab se set kiya
  left: '0',
  background: 'white',
  boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
  minWidth: '220px',
  borderRadius: '8px',
  padding: '10px 0',
  zIndex: 5000,
  borderTop: '3px solid #717fe0'
};

const dropdownLinkStyle = {
  display: 'block',
  padding: '10px 20px',
  color: '#555',
  textDecoration: 'none',
  fontSize: '13px',
  fontWeight: '600',
  borderBottom: '1px solid #f9f9f9'
};

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