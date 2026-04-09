import React, { useEffect, useState } from "react";

const slides = [
  {
    image: "https://img.freepik.com/premium-photo/natural-fabric-linen-white-texture-design-sackcloth-textured-backdrop-canvas-background-chinese-new-year-festival-red-valentines-red-satin-fabric-background_43429-5630.jpg?w=1060",
    subtitle: "PAREKH TEXTILE",
    title: "Premium Rayon Collection",
    btn: "Explore Fabrics",
  },
  {
    image: "https://img.freepik.com/premium-photo/global-analysis-allergy-trends-impact-human-health-prevalence-symptoms-concept-allergy-trends-global-impact-human-health-prevalence-symptom-analysis-health-implications_918839-217764.jpg?w=1060",
    subtitle: "Soft • Breathable • Elegant",
    title: "Designer Rayon Fabrics",
    btn: "View Collection",
  },
  {
    image: "https://img.freepik.com/free-vector/little-tiles-floor-texture_23-2147504881.jpg?w=1060",
    subtitle: "Trusted Quality Since Years",
    title: "Wholesale & Retail Rayon Fabrics",
    btn: "Shop Now",
  },
];
const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Content Animation Helper
  const getAnimationStyle = (isActive, delay) => ({
    transform: isActive ? "translateY(0)" : "translateY(50px)",
    opacity: isActive ? 1 : 0,
    transition: `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
  });

  return (
    <section style={containerStyle}>
      {slides.map((slide, index) => {
        const isActive = index === current;
        return (
          <div key={index} style={{ ...slideWrapper, opacity: isActive ? 1 : 0, visibility: isActive ? "visible" : "hidden" }}>
            
            {/* Background Image with Slow Zoom */}
            <div
              style={{
                ...bgStyle,
                backgroundImage: `url(${slide.image})`,
                transform: isActive ? "scale(1.1)" : "scale(1.2)", // Zoom out effect
              }}
            />

            {/* Dark Gradient Overlay */}
            <div style={overlayStyle} />

            {/* Content Area */}
            <div style={contentStyle}>
              {/* 1. Subtitle - Sabse pehle aayega */}
              <span style={{ ...subtitleStyle, ...getAnimationStyle(isActive, 0.3) }}>
                {slide.subtitle}
              </span>

              {/* 2. Title - Thodi der baad aayega */}
              <h1 style={{ ...titleStyle, ...getAnimationStyle(isActive, 0.6) }}>
                {slide.title.split('\n').map((line, i) => (
                  <div key={i} style={{ marginBottom: '5px' }}>{line}</div>
                ))}
              </h1>

              {/* 3. Button - Sabse aakhir mein slide up hoga */}
              <div style={getAnimationStyle(isActive, 0.9)}>
                <button 
                   className="hero-btn"
                   style={btnStyle}
                   onMouseEnter={(e) => {
                     e.target.style.background = "#fff";
                     e.target.style.color = "#717fe0";
                     e.target.style.transform = "scale(1.05)";
                   }}
                   onMouseLeave={(e) => {
                     e.target.style.background = "transparent";
                     e.target.style.color = "#fff";
                     e.target.style.transform = "scale(1)";
                   }}
                >
                  {slide.btn}
                </button>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Indicators */}
      <div style={dotsWrapper}>
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              ...dotStyle,
              width: i === current ? "40px" : "12px",
              background: i === current ? "#717fe0" : "rgba(255,255,255,0.4)",
            }}
          />
        ))}
      </div>
    </section>
  );
};

// --- Styles ---

const containerStyle = {
  position: "relative",
  height: "90vh", // Navbar ke niche perfect fit hoga
  width: "100%",
  overflow: "hidden",
  background: "#000",
};

const slideWrapper = {
  position: "absolute",
  inset: 0,
  transition: "opacity 1s ease-in-out",
};

const bgStyle = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: "transform 8s linear", // Bahut slow zoom out
  position: "absolute",
};

const overlayStyle = {
  position: "absolute",
  inset: 0,
  background: "linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
  zIndex: 1,
};

const contentStyle = {
  position: "relative",
  zIndex: 2,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "0 10%",
  maxWidth: "1400px",
  margin: "0 auto",
};

const subtitleStyle = {
  fontSize: "14px",
  fontWeight: "600",
  letterSpacing: "5px",
  marginBottom: "15px",
  color: "#717fe0",
  display: "block",
  textTransform: "uppercase",
};

const titleStyle = {
  fontSize: "clamp(32px, 7vw, 65px)", // Responsive font size
  lineHeight: "1.1",
  fontWeight: "800",
  marginBottom: "40px",
  color: "#fff",
  textTransform: "uppercase",
};

const btnStyle = {
  padding: "15px 40px",
  borderRadius: "2px", // Square/Sharp edges for premium look
  border: "2px solid #fff",
  background: "transparent",
  color: "#fff",
  fontSize: "13px",
  fontWeight: "700",
  textTransform: "uppercase",
  letterSpacing: "2px",
  cursor: "pointer",
  transition: "all 0.3s ease",
};

const dotsWrapper = {
  position: "absolute",
  bottom: "30px",
  left: "10%",
  display: "flex",
  gap: "10px",
  zIndex: 10,
};

const dotStyle = {
  height: "6px",
  borderRadius: "10px",
  transition: "all 0.4s ease",
  cursor: "pointer",
};

export default HeroSlider;