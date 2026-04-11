import React from "react";
import Header from "../Home/Header";
import "./MapVideo.css";
import Vedio from "../images/Vedio.mp4";

const MapVideo = () => {
  return (
    <>
      <div className="map-video-page">
        <div className="map-section">
          
          <div className="map-header">
            <span className="trending-tag" style={{ display: 'inline-block', marginBottom: '10px', color: '#717fe0', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '13px' }}>Global Reach</span>
            <h1 className="map-title">Our Presence Across India</h1>
            <div style={{ width: '60px', height: '4px', background: '#717fe0', margin: '20px auto', borderRadius: '10px' }}></div>
            <p className="map-subtitle">
              Connecting textile excellence from Kashmir to Kanyakumari through our robust supply chain network.
            </p>
          </div>

          <div className="video-container">
            <div className="video-frame">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="full-video"
              >
                <source src={Vedio} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              <div className="video-overlay-gradient"></div>

              {/* Floating Badges directly over the video */}
              <div className="floating-badge top-badge">
                <i className="zmdi zmdi-city-alt" style={{marginRight: '8px'}}></i> 28+ Cities
              </div>
              <div className="floating-badge bottom-badge">
                <i className="zmdi zmdi-globe" style={{marginRight: '8px'}}></i> Pan India Network
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default MapVideo;