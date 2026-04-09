import React, { useState } from "react";
import "./Review.css";

const reviews = [
  {
    id: 1,
    initials: "A.K.",
    name: "Arjun Kapoor",
    title: "Verified Wholesaler, Surat",
    rating: 5,
    text: "The 14kg Rayon quality from Parekh Textile is truly unmatched. Our customers love the airy, lightweight feel and the premium shine that sets it apart.",
    avatarBg: "#f2f2f2",
    avatarColor: "#717fe0",
    cardStyle: { borderTop: "5px solid #717fe0", background: "#ffffff" },
  },
  {
    id: 2,
    initials: "S.M.",
    name: "Sanjana Mehra",
    title: "Fashion Designer, Bengaluru",
    rating: null,
    text: "Working with their Liva approved Rayon Crepe was a dream. The fabric has that cinematic flow.",
    avatarBg: "#717fe0",
    avatarColor: "#ffffff",
    cardStyle: { background: "#fcfaff" },
    highlight: "Cinematic Drape & Texture",
  },
  {
    id: 3,
    initials: <i className="fa fa-globe"></i>,
    name: "Global Exports Inc.",
    title: "Dubai, UAE",
    rating: null,
    text: "Fastest turnaround for bulk orders. Their packing standards for Rayon fabrics ensure zero damage.",
    avatarBg: "#333",
    avatarColor: "#ffffff",
    cardStyle: { borderTop: "5px solid #333", background: "#ffffff" },
  },
];

const Review = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    review: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
    setFormData({ name: "", company: "", review: "" });
    setIsModalOpen(false);
  };

  const renderStars = (rating) => {
    if (!rating) return null;
    return Array.from({ length: 5 }, (_, i) => (
      <i key={i} className="fa fa-star" style={{ color: "#f9ba48" }}></i>
    ));
  };

  return (
    <section className="review-section">
      <div className="review-container">
        <div className="review-header">
          <h3>The Voice of Quality</h3>
          <p>What our global partners say about Parekh Rayon Fabrics</p>
          <div className="review-divider"></div>
        </div>

        <div className="review-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card" style={review.cardStyle}>
              <div className="review-card-header">
                <div className="review-avatar" style={{ background: review.avatarBg, color: review.avatarColor }}>
                  {review.initials}
                </div>
                <div className="review-info">
                  <h5>{review.name}</h5>
                  <span>{review.title}</span>
                </div>
              </div>
              {review.rating && <div className="review-rating">{renderStars(review.rating)}</div>}
              {review.highlight && <p className="review-highlight">{review.highlight}</p>}
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>

        <div className="review-cta">
          <h4>Satisfied with our Rayon Quality?</h4>
          <button onClick={() => setIsModalOpen(true)}>SHARE YOUR FEEDBACK</button>
        </div>
      </div>

      {isModalOpen && (
        <div className="review-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="review-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>&times;</button>
            <h4>Submit Review</h4>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="company"
                placeholder="Company/Location"
                value={formData.company}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="review"
                placeholder="Share your experience with Parekh Rayon..."
                value={formData.review}
                onChange={handleInputChange}
                required
              ></textarea>
              <button type="submit">Post Review</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Review;