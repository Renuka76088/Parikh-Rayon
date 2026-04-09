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
            <h1 className="map-title">Our Presence Across India</h1>
            <p className="map-subtitle">
              Connecting textile excellence from Kashmir to Kanyakumari
            </p>
          </div>

          <div className="map-wrapper">
            <svg
              viewBox="0 0 1000 1000"
              id="INDIA-map-svg"
              xmlns="http://www.w3.org/2000/svg"
              className="india-map-svg"
            >
              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Video Container - No border */}
              <foreignObject x="40" y="40" width="920" height="920">
                <div className="video-wrapper">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="bg-video"
                  >
                    <source src={Vedio} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="video-overlay"></div>
                </div>
              </foreignObject>

              <g id="pins-layer" />
            </svg>

            {/* Floating Badges */}
            <div className="floating-badge top-left">
              <span>28+ Cities</span>
            </div>
            <div className="floating-badge bottom-right">
              <span>Pan India Network</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapVideo;