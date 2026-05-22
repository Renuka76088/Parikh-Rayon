import React, { useState, useEffect } from "react";
import { blogApi, blogHeaderApi, IMAGE_BASE_URL } from "../utils/api";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import "./Blog.css";



const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("*");
  const [categories, setCategories] = useState([]);
  const [headerData, setHeaderData] = useState({ title: "Rayon Insights", description: "“Join and participate in our nation-wide campaign to digitalize the Textile Sector, one of the largest sectors of India.”" });

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const [blogsRes, headerRes] = await Promise.all([
          blogApi.getAll("ParekhRayon05"),
          blogHeaderApi.get("ParekhRayon05").catch(e => null) // Ignore 404s if header not set
        ]);

        if (blogsRes.data?.success && blogsRes.data?.data) {
          const dynamicBlogs = blogsRes.data.data.map((b) => ({
            id: b._id,
            category: b.category || "Industry Insights",
            title: b.title,
            desc: b.content ? b.content.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ').substring(0, 150) + "..." : "",
            img: b.thumbnail ? (b.thumbnail.replace(/\\/g, '/')?.startsWith("http") ? b.thumbnail : `${IMAGE_BASE_URL}/${b.thumbnail.replace(/\\/g, '/')}`) : "",
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
          setBlogs([]);
          setCategories([]);
        }

        if (headerRes && headerRes.data?.success && headerRes.data?.data) {
          setHeaderData(headerRes.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch blog data:", error);
        setBlogs([]);
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };
    fetchContent();
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
          <h3 className="blog-title">{headerData.title || "Rayon Insights"}</h3>
          <div className="title-line"></div>

          <div
            className="rte-content w-full max-w-full overflow-hidden text-[#555] text-[18px] leading-relaxed mx-auto max-w-4xl blog-subtitle m-t-15 [&>p]:mb-3 [&>img]:hidden [&_table]:hidden [&_td]:break-words [&_th]:break-words [&>ul]:pl-5 [&>ol]:pl-5"
            style={{ overflowWrap: 'break-word', wordBreak: 'normal', hyphens: 'none', fontStyle: 'italic' }}
            dangerouslySetInnerHTML={{ __html: headerData.description ? headerData.description.replace(/&nbsp;/g, ' ') : "Thoughts, news, and perspectives on the textile industry." }}
          />

          <div className="author-box" style={{ marginTop: '20px' }}>
            <h5 className="author-name">{headerData.authorName || "HC Parekh"}</h5>
            <p className="author-desc">{headerData.authorRole || "Textile Manufacturer & Entrepreneur"} • {headerData.country || "India"}</p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex-w flex-c-m m-b-40 filter-buttons mt-5 pt-4">
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
              <Link
                key={blog.id}
                to={`/blogdetail/${blog.id}`}
                className={`blog-card ${isPremium ? "premium-card" : "standard-card"}`}
              >
                <div className="blog-img-wrapper">
                  <img src={blog.img} alt={blog.title} loading="lazy" />
                  {isPremium && (
                    <div className="blog-overlay">
                      <div>
                        {blog.category && <span className="badge-cat">{blog.category}</span>}
                        <h4 className="overlay-title">{blog.title}</h4>
                        <p className="overlay-desc">{blog.desc}</p>
                      </div>
                      <span className="read-more-link">Read Article <i className="fas fa-arrow-right"></i></span>
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
                    <span className="explore-link">Explore More <i className="fas fa-long-arrow-alt-right"></i></span>
                  </div>
                )}
              </Link>
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
