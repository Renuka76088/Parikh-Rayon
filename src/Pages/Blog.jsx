import React, { useState, useEffect } from "react";
import { blogApi, IMAGE_BASE_URL } from "../utils/api";
import { Loader2 } from "lucide-react";
import "./Blog.css";

// Importing local images (keeping them just in case they revert again)
import blog06 from "../images/blog-06.jpg";

const staticBlogData = [
  {
    id: 1,
    category: "Quality Standards",
    title: "The Secret Behind Our Signature 14kg Rayon",
    desc: "Exploring why density and drape matter in premium ethnic wear manufacturing.",
    img: "https://img.freepik.com/premium-photo/variety-rainbow-colored-fabrics-are-displayed_1221953-10882.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80",
    date: "April 15, 2026",
    premium: true,
  },
  {
    id: 2,
    category: "Certifications",
    date: "March 15, 2026",
    title: "Liva Approved: What it means for your Brand",
    desc: "Understanding global certifications in modern textile trade and quality compliance.",
    img: "https://img.freepik.com/premium-photo/indian-saris_163782-4521.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80",
    premium: false,
  },
  {
    id: 3,
    category: "Trends",
    date: "February 28, 2026",
    title: "Summer Trends 2026: Rayon Prints",
    desc: "From digital prints to hand-block designs, rayon is leading the season's core trends.",
    img: "https://img.freepik.com/free-photo/texture-orange-red-crumpled-fabric_23-2148516009.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80",
    premium: false,
  },
  {
    id: 4,
    category: "Manufacturing",
    date: "February 10, 2026",
    title: "Sustainable Manufacturing Practices",
    desc: "How we ensure eco-friendly and zero-waste policies in bulk textile production.",
    img: "https://img.freepik.com/premium-photo/purple-fleece-texture_116441-10683.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80",
    premium: false,
  },
  {
    id: 5,
    category: "Business",
    date: "January 22, 2026",
    title: "Navigating Wholesale Markets",
    desc: "A beginner's guide to sourcing from major hubs like Surat and Ahmedabad.",
    img: "https://img.freepik.com/premium-photo/old-carpets-rolled-up-rugs-shop-store_179755-18611.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80",
    premium: false,
  },
  {
    id: 6,
    category: "Business",
    date: "January 22, 2026",
    title: "Global Supply Chains",
    desc: "How modern fabric distribution networks ensure timely deliveries anywhere.",
    img: "https://img.freepik.com/free-photo/detail-color-fabric-texture-samples_1373-103.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80",
    premium: false,
  },
];

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("*");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await blogApi.getAll("ParekhRayon05");
        if (response.data.success && response.data.data.length > 0) {
          const dynamicBlogs = response.data.data.map((b) => ({
            id: b._id,
            category: b.category || "Industry Insights",
            title: b.title,
            desc: b.content ? b.content.substring(0, 150) + "..." : "",
            img: b.thumbnail ? (b.thumbnail.replace(/\\/g, '/')?.startsWith("http") ? b.thumbnail : `${IMAGE_BASE_URL}/${b.thumbnail.replace(/\\/g, '/')}`) : staticBlogData[0].img,
            date: new Date(b.date || b.createdAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            }),
          }));
          setBlogs(dynamicBlogs);
          const uniqueCats = [...new Set(dynamicBlogs.map((b) => b.category))];
          setCategories(uniqueCats);
        } else {
          setBlogs(staticBlogData);
          setCategories([...new Set(staticBlogData.map((b) => b.category))]);
        }
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
        setBlogs(staticBlogData);
        setCategories([...new Set(staticBlogData.map((b) => b.category))]);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter((blog) =>
    filter === "*" || blog.category === filter
  );

  if (loading) {
    return (
      <div className="flex-c-m flex-col w-full" style={{ height: "100vh" }}>
        <Loader2 className="animate-spin text-[#717fe0]" size={50} />
        <p className="p-t-20 stext-101 cl6">Fetching Latest Insights...</p>
      </div>
    );
  }

  return (
    <section className="blog-section p-t-100 p-b-100">
      <div className="container">
        {/* Header Section */}
        <div className="blog-header text-center m-b-60">
          <span className="trending-tag">Industry Insights</span>
          <h3 className="blog-title">Rayon Insights</h3>
          <div className="title-line"></div>
          <p className="blog-subtitle">
            “Join and participate in our nation-wide campaign to digitalize the Textile
            Sector, one of the largest sectors of India.”
          </p>
          <div className="author-box">
            <h5 className="author-name">HC Parekh</h5>
            <p className="author-desc">Textile Manufacturer & Entrepreneur • India</p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex-w flex-c-m m-b-40 filter-buttons">
          <button
            className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${filter === "*" ? "how-active1" : ""}`}
            style={{ padding: "8px 20px", borderRadius: "20px", border: "1px solid #ddd", marginBottom: "10px" }}
            onClick={() => setFilter("*")}
          >
            All Insights
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${filter === cat ? "how-active1" : ""}`}
              style={{ padding: "8px 20px", borderRadius: "20px", border: "1px solid #ddd", marginBottom: "10px" }}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="blog-grid">
          {filteredBlogs.map((blog, index) => {
            // First item automatically becomes the featured/premium card
            const isPremium = index === 0 && filter === "*";

            return (
              <div key={blog.id} className={`blog-card ${isPremium ? "premium-card" : "standard-card"}`}>
                <div className="blog-img-wrapper">
                  <img src={blog.img} alt={blog.title} loading="lazy" />
                  {isPremium && (
                    <div className="blog-overlay">
                      <div>
                        {blog.category && <span className="badge-cat">{blog.category}</span>}
                        <h4 className="overlay-title">{blog.title}</h4>
                        <p className="overlay-desc">{blog.desc}</p>
                      </div>
                      <a href="#" className="read-more-link">Read Article <i className="fas fa-arrow-right"></i></a>
                    </div>
                  )}
                </div>

                {!isPremium && (
                  <div className="blog-info">
                    <div className="blog-meta">
                      {blog.category && <span className="blog-category-text">{blog.category}</span>}
                      {blog.date && <span className="blog-date">• {blog.date}</span>}
                    </div>
                    <h5 className="blog-card-title">{blog.title}</h5>
                    <p className="blog-card-desc">{blog.desc}</p>
                    <a href="#" className="explore-link">Explore More <i className="fas fa-long-arrow-alt-right"></i></a>
                  </div>
                )}
              </div>
            );
          })}
        </div>


        {/* Pagination placeholder */}
        <div className="pagination-wrapper p-t-60">
          <button className="page-num active">1</button>
          <button className="page-num">2</button>
          <button className="page-arrow">Next</button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
