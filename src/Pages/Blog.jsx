import React from "react";
import Header from "../Home/Header";
import "./Blog.css";

const Blog = () => {
  return (
    <>
  
      <section className="bg0 p-t-104 p-b-116">
        <div className="container">
          <div className="p-b-60 txt-center" data-aos="fade-up">
            <h3
              className="ltext-105 cl2 p-b-10"
              style={{
                fontWeight: 300,
                letterSpacing: "5px",
                textTransform: "uppercase"
              }}
            >
              Rayon Insights
            </h3>
            <p className="stext-113 cl6">
              Discover the artistry and science behind INDIA's finest Rayon fabrics
            </p>
            <div
              style={{
                width: "60px",
                height: "3px",
                background: "#717fe0",
                margin: "20px auto"
              }}
            ></div>
          </div>

          <div className="row isotope-grid">
            <div className="col-sm-12 col-md-8 p-b-40">
              <div className="blog-card-premium overflow-hidden bor10 position-relative">
                <div className="hov-img0">
                  <img
                    src="https://images.unsplash.com/photo-1636545672666-391bda04f4d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJheW9uJTIwZmVicmljfGVufDB8fDB8fHww"
                    alt="Rayon 14kg"
                    style={{
                      width: "100%",
                      height: "450px",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <div className="blog-content-overlay p-all-40 flex-col-e-l">
                  <span
                    className="stext-101 cl0 p-b-10"
                    style={{
                      background: "#717fe0",
                      padding: "5px 15px",
                      borderRadius: "20px"
                    }}
                  >
                    Quality Standards
                  </span>
                  <h4 className="ltext-102 cl0 p-b-15">
                    The Secret Behind Our Signature 14kg Rayon
                  </h4>
                  <p className="stext-115 cl0 opacity-8 p-b-20">
                    Exploring why density and drape matter in premium ethnic wear manufacturing.
                  </p>
                  <a href="#" className="stext-101 cl0 hov-link-white trans-04">
                    READ ARTICLE <i className="fa fa-long-arrow-right m-l-10"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 p-b-40">
              <div className="blog-card-standard bor10 bg0 hov-shadow trans-04">
                <div className="hov-img0">
                  <img
                    src="https://media.istockphoto.com/id/1142384933/photo/many-fabric-rolls-and-colorful-textiles-at-market.jpg?s=612x612&w=0&k=20&c=lTc5jo3PXFrO13YgmS-CEFINDIAsg2n3P3uUP4PEdP_oUY="
                    alt="Process"
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <div className="p-all-25">
                  <span className="stext-107 cl9">March 15, 2026</span>
                  <h5 className="mtext-108 cl2 p-t-10 p-b-15">
                    Liva Approved: What it means for your Brand
                  </h5>
                  <p className="stext-115 cl6">
                    Understanding global certifications in modern textile trade.
                  </p>
                  <hr className="m-tb-15" />
                  <a href="#" className="stext-101 cl2 hov-cl1 trans-04">
                    Explore More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 p-b-40">
              <div className="blog-card-standard bor10 bg0 hov-shadow trans-04">
                <div className="hov-img0">
                  <img
                    src="https://media.istockphoto.com/id/151556615/photo/bobbins-background.jpg?s=612x612&w=0&k=20&c=NnTYGN0LNqY7SIw8h6YNH6yxd0EpINDIA75Zcr8YfziJtQ="
                    alt="Fashion"
                    style={{
                      width: "100%",
                      height: "400px",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <div className="p-all-25">
                  <h5 className="mtext-108 cl2 p-b-10">
                    Summer Trends 2026: Rayon Prints
                  </h5>
                  <p className="stext-115 cl6">
                    From digital prints to hand-block designs, rayon is leading the season.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-8 p-b-40">
              <div
                className="bor10 p-all-40 bg0 hov-shadow trans-04 flex-w flex-sb-m"
                style={{ borderLeft: "10px solid #717fe0" }}
              >
                <div className="size-200">
                  <h4 className="mtext-105 cl2">
                    B2B: Scaling your Garment Business with Parekh Associates
                  </h4>
                  <p className="stext-115 cl6 p-t-15">
                    How our multi-location supply chain ensures zero-delay delivery across INDIA.
                  </p>
                </div>
                <div className="p-t-10">
                  <button
                    className="flex-c-m stext-101 cl0 size-115 bg3 bor14 hov-btn3 p-lr-15 trans-04"
                    style={{ backgroundColor: "#333" }}
                  >
                    Download Guide
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-c-m flex-w w-full p-t-10">
            <a href="#" className="flex-c-m how-pagination1 trans-04 m-all-7 active-pagination1">
              1
            </a>
            <a href="#" className="flex-c-m how-pagination1 trans-04 m-all-7">
              2
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;