import React from "react";

const banners = [
  {
    title: "Printed Rayon",
    subtitle: "Soft & Stylish Collection",
    btn: "Explore Now",
    img: "https://thumbs.dreamstime.com/b/rumpled-thin-black-white-rayon-fabric-418606001.jpg",
  },
  {
    title: "Plain Rayon",
    subtitle: "Premium Daily Wear Fabric",
    btn: "Shop Collection",
    img: "https://thedesigncart.com/cdn/shop/products/Premium_Quality_Light_brown_Rayon_Fabric_product_3_1598982194972_720x.jpg?v=1598982205",
  },
  {
    title: "Designer Rayon",
    subtitle: "Elegant & Trendy Fabrics",
    btn: "View Designs",
    img: "http://fancystylesfabric.com/cdn/shop/products/57_87f610e5-e252-4b10-b42f-7f0fe0ad72ba_800x.jpg?v=1571739222",
  },
];

const BannerSection = () => {
  return (
    <section
      style={{
        padding: "80px 20px",
        background: "#f8f9fc",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "25px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {banners.map((item, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              height: "350px",
              borderRadius: "20px",
              overflow: "hidden",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            }}
          >
            {/* Background Image */}
            <div
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
                transition: "transform 0.5s ease",
              }}
              className="banner-img"
            />

            {/* Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2))",
              }}
            />

            {/* Content */}
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                color: "#fff",
                zIndex: 2,
              }}
            >
              <h2 style={{ fontSize: "26px", marginBottom: "5px" }}>
                {item.title}
              </h2>

              <p style={{ fontSize: "14px", opacity: 0.9 }}>
                {item.subtitle}
              </p>

              <button
                style={{
                  marginTop: "10px",
                  padding: "8px 18px",
                  borderRadius: "20px",
                  border: "none",
                  background: "rgba(255,255,255,0.2)",
                  backdropFilter: "blur(8px)",
                  color: "#fff",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.background = "#0c2d57")
                }
                onMouseLeave={(e) =>
                  (e.target.style.background = "rgba(255,255,255,0.2)")
                }
              >
                {item.btn}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BannerSection;