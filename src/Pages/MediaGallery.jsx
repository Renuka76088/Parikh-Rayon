import React, { useState } from "react";

const mediaItems = [
  {
    id: 1,
    category: "rayon",
    title: "Liva Rayon",
    image:
      "https://images.unsplash.com/photo-1636545672666-391bda04f4d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJheW9uJTIwZmVicmljfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    category: "factory",
    title: "Quality Control",
    image:
      "https://media.istockphoto.com/id/1066845488/photo/rainbow-colored-yarns.jpg?s=612x612&w=0&k=20&c=IEQa06Ivx_NKtC71scpYxgQ4uMJvz2YH1MICmhx6wZo=",
  },
  {
    id: 3,
    category: "campaign",
    title: "Fashion Shoot",
    image:
      "https://media.istockphoto.com/id/1347239465/photo/shopping-at-construction-store.jpg?s=612x612&w=0&k=20&c=BZDt2o-Yiz9yMU07bObFOy7NP8SwiN9o1eyNg_PHb2Y=",
  },
  {
    id: 4,
    category: "rayon",
    title: "14kg Quality",
    image:
      "https://media.istockphoto.com/id/2263507695/photo/multiple-rows-of-colorful-sewing-thread-background.jpg?s=612x612&w=0&k=20&c=W1tju5XdOP2z_uDcc9BrcUMOEeVvi-dlSn5IU2SCJD8=",
  },
];

const filters = [
  { label: "All Collections", value: "*" },
  { label: "Premium Rayon", value: "rayon" },
  { label: "Manufacturing", value: "factory" },
  { label: "Brand Shoots", value: "campaign" },
];

const MediaGallery = () => {
  const [activeFilter, setActiveFilter] = useState("*");
  const [hoveredId, setHoveredId] = useState(null);

  const filteredItems = mediaItems.filter((item) =>
    activeFilter === "*" ? true : item.category === activeFilter
  );

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        
        {/* Header Section */}
        <div style={headerStyle}>
          <span style={subtitleStyle}>OUR VISUAL JOURNEY</span>
          <h2 style={titleStyle}>PAREKH <span style={{color: '#717fe0'}}>MEDIA HUB</span></h2>
          <div style={underlineStyle}></div>
        </div>

        {/* Filter Buttons */}
        <div style={filterWrapper}>
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              style={{
                ...filterBtnStyle,
                backgroundColor: activeFilter === filter.value ? "#717fe0" : "transparent",
                color: activeFilter === filter.value ? "#fff" : "#555",
                borderColor: activeFilter === filter.value ? "#717fe0" : "#ddd",
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div style={gridStyle}>
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              style={cardWrapper}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div style={imageContainer}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  style={{
                    ...imageStyle,
                    transform: hoveredId === item.id ? "scale(1.1)" : "scale(1)"
                  }} 
                />
                
                {/* Overlay Content */}
                <div style={{
                  ...overlayStyle,
                  opacity: hoveredId === item.id ? 1 : 0
                }}>
                  <div style={{
                    ...textAnimStyle,
                    transform: hoveredId === item.id ? "translateY(0)" : "translateY(20px)"
                  }}>
                    <p style={categoryLabel}>{item.category.toUpperCase()}</p>
                    <h4 style={itemTitle}>{item.title}</h4>
                    <div style={btnCircle}>+</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Styles Objects ---

const sectionStyle = {
  padding: "100px 0",
  backgroundColor: "#ffffff",
  minHeight: "100vh",
  fontFamily: "'Poppins', sans-serif"
};

const containerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 20px"
};

const headerStyle = {
  textAlign: "center",
  marginBottom: "50px"
};

const subtitleStyle = {
  fontSize: "12px",
  letterSpacing: "4px",
  color: "#888",
  fontWeight: "600"
};

const titleStyle = {
  fontSize: "36px",
  fontWeight: "800",
  marginTop: "10px",
  color: "#222"
};

const underlineStyle = {
  width: "60px",
  height: "4px",
  backgroundColor: "#717fe0",
  margin: "15px auto 0",
  borderRadius: "2px"
};

const filterWrapper = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "15px",
  marginBottom: "60px"
};

const filterBtnStyle = {
  padding: "10px 25px",
  border: "1px solid",
  borderRadius: "30px",
  fontSize: "13px",
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 0.3s ease",
  textTransform: "uppercase",
  letterSpacing: "1px"
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: "25px",
};

const cardWrapper = {
  borderRadius: "15px",
  overflow: "hidden",
  cursor: "pointer",
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
};

const imageContainer = {
  position: "relative",
  overflow: "hidden",
  aspectRatio: "4/5",
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
};

const overlayStyle = {
  position: "absolute",
  inset: 0,
  background: "linear-gradient(to top, rgba(113, 127, 224, 0.9), rgba(0,0,0,0.1))",
  display: "flex",
  alignItems: "flex-end",
  padding: "30px",
  transition: "opacity 0.4s ease"
};

const textAnimStyle = {
  transition: "all 0.5s ease 0.1s",
  width: "100%"
};

const categoryLabel = {
  color: "#eee",
  fontSize: "10px",
  fontWeight: "700",
  letterSpacing: "2px",
  marginBottom: "5px"
};

const itemTitle = {
  color: "#fff",
  fontSize: "18px",
  fontWeight: "600",
  marginBottom: "15px"
};

const btnCircle = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundColor: "#fff",
  color: "#717fe0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
  fontWeight: "bold"
};

export default MediaGallery;