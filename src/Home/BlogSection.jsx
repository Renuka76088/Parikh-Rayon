import React from 'react';
import { ArrowRight } from 'lucide-react';

// Import blog images
import blog01 from '../images/blog-01.jpg';
import blog02 from '../images/blog-02.jpg';
import blog03 from '../images/blog-03.jpg';

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      image: "https://img.freepik.com/premium-photo/variety-rainbow-colored-fabrics-are-displayed_1221953-10882.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80",
      author: 'Nancy Ward',
      date: 'April 05, 2026',
      category: 'FABRIC TRENDS',
      title: '8 Inspiring Ways to Style Rayon in Winter',
      description: 'Discover how modern textile blends are redefining winter fashion with breathable yet warm textures.'
    },
    {
      id: 2,
      image: "https://img.freepik.com/premium-photo/indian-saris_163782-4521.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80",
      author: 'Nancy Ward',
      date: 'March 28, 2026',
      category: 'MANUFACTURING',
      title: 'The Future of Sustainable Textile Production',
      description: 'An inside look at how ethical sourcing and quality control are shaping the next generation of apparel.'
    },
    {
      id: 3,
      image: "https://img.freepik.com/free-photo/texture-orange-red-crumpled-fabric_23-2148516009.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80",
      author: 'Nancy Ward',
      date: 'March 15, 2026',
      category: 'INDUSTRY',
      title: '5 Textile Trends to Watch This Spring',
      description: 'From bold patterns to minimalist weaves, here is what is trending in the global textile market.'
    }
  ];

  return (
    <section style={sectionStyle}>
      <div className="container">

        {/* Header */}
        <div style={headerStyle}>
          <span style={subtitleStyle}>JOURNAL & NEWS</span>
          <h3 style={titleStyle}>OUR LATEST BLOGS</h3>
          <div style={underlineStyle}></div>
        </div>

        {/* ✅ Responsive Grid */}
        <div style={rowStyle}>
          {blogs.map((blog) => (
            <div key={blog.id} style={cardStyle}>

              {/* Image */}
              <div style={imageContainer}>
                <img src={blog.image} alt={blog.title} style={imgStyle} />
                <div style={tagStyle}>{blog.category}</div>
              </div>

              {/* Content */}
              <div style={contentArea}>
                <div style={metaData}>
                  <span>{blog.date}</span>
                  <span style={{ margin: '0 10px', color: '#717fe0' }}>/</span>
                  <span>BY {blog.author.toUpperCase()}</span>
                </div>

                <h4 style={blogTitle}>
                  <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>
                    {blog.title}
                  </a>
                </h4>

                <p style={descriptionStyle}>
                  {blog.description}
                </p>

                <a href="#" style={readMoreLink}>
                  READ MORE <ArrowRight size={14} style={{ marginLeft: '10px' }} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Styles ---

const sectionStyle = {
  padding: '100px 20px',
  backgroundColor: '#ffffff',
};

const headerStyle = {
  textAlign: 'center',
  marginBottom: '60px'
};

const subtitleStyle = {
  fontSize: '11px',
  letterSpacing: '5px',
  color: '#888',
  fontWeight: '700',
  display: 'block',
  marginBottom: '10px'
};

const titleStyle = {
  fontSize: '32px',
  fontWeight: '900',
  color: '#1a1a1a',
};

const underlineStyle = {
  width: '40px',
  height: '4px',
  backgroundColor: '#717fe0',
  margin: '15px auto 0'
};

/* ✅ GRID FIX */
const rowStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '25px'
};

const cardStyle = {
  border: '1px solid #eeeeee',
  backgroundColor: '#fff',
  borderRadius: '0px',
  display: 'flex',
  flexDirection: 'column'
};

const imageContainer = {
  position: 'relative',
  height: '240px',
  overflow: 'hidden'
};

const imgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover'
};

const tagStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: '#1a1a1a',
  color: '#fff',
  padding: '8px 12px',
  fontSize: '10px',
  fontWeight: '700'
};

const contentArea = {
  padding: '20px'
};

const metaData = {
  fontSize: '11px',
  color: '#999',
  marginBottom: '10px'
};

const blogTitle = {
  fontSize: '16px',
  fontWeight: '700',
  marginBottom: '10px'
};

const descriptionStyle = {
  fontSize: '14px',
  color: '#666',
  marginBottom: '15px'
};

const readMoreLink = {
  fontSize: '12px',
  fontWeight: '700',
  color: '#1a1a1a',
  textDecoration: 'none',
  borderBottom: '2px solid #717fe0'
};

export default BlogSection;