import React from "react";

const Footer = () => {
  return (
    <footer className="bg3 py-5">
      <div className="container">
        <div className="row">
          
          {/* Logo Section */}
          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <a href="/" className="d-flex align-items-center mb-4 text-decoration-none">
              
              <div className="border border-white rounded p-2 mr-3 bg-white bg-opacity-10 shadow">
                <span className="text-white font-weight-bold text-xl">P</span>
              </div>

              <div className="d-flex flex-column">
                <div className="text-nowrap">
                  <span className="text-white font-weight-bold h5 mr-1">
                    PAREKH
                  </span>
                  <span className="text-primary font-weight-bold h5">
                    RAYON
                  </span>
                </div>
                <div className="text-muted small font-weight-bold text-uppercase mt-1">
                  RAIPUR•INDIA
                </div>
              </div>
            </a>

            <p className="text-muted">
              Parekh Rayon stands for excellence in textile manufacturing. With
              a core specialization in 14kg Rayon and Liva-approved fabrics, we
              provide high-grade textile solutions that meet the rigorous
              standards of the modern fashion and wholesale markets.
            </p>
          </div>

          {/* Product Line */}
          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <h4 className="text-white h6 font-weight-semibold mb-4">
              Product Line
            </h4>

            <ul className="list-unstyled">
              {[
                "Pure Rayon 14kg",
                "Liva Approved Fabrics",
                "Digital Printed Crepe",
                "Wholesale Catalog",
              ].map((item, i) => (
                <li key={i} className="mb-2">
                  <a href="#" className="text-muted text-decoration-none">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <h4 className="text-white h6 font-weight-semibold mb-4">
              GET IN TOUCH
            </h4>

            <p className="text-muted mb-3">
              HC Parekh & Associates, Industrial Area, RAIPUR, CG, India 452015.
              <br />
              <strong>Call:</strong> (+91) 98XXX XXXXX
            </p>

            <div className="d-flex">
              <i className="fa fa-facebook text-muted mr-3 cursor-pointer"></i>
              <i className="fa fa-instagram text-muted mr-3 cursor-pointer"></i>
              <i className="fa fa-linkedin text-muted cursor-pointer"></i>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <h4 className="text-white h6 font-weight-semibold mb-4">
              B2B Insights
            </h4>

            <p className="text-muted mb-3">
              Subscribe now to stay updated on our latest collections and market trends.
            </p>

            <form>
              <input
                type="email"
                placeholder="Business Email"
                className="form-control mb-3 bg-transparent border-bottom border-secondary text-muted"
              />

              <button className="btn btn-primary">
                Join Network
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-4 border-top border-secondary">
          <div className="row justify-content-center align-items-center mb-3 text-muted">
            <div className="col-auto">
              <span>Logistics Partners:</span>
            </div>
            <div className="col-auto">
              <i className="fa fa-truck h5"></i>
              <i className="fa fa-ship h5 ml-2"></i>
              <i className="fa fa-plane h5 ml-2"></i>
            </div>
          </div>

          <p className="text-center text-muted small">
            © {new Date().getFullYear()} All rights reserved |{" "}
            <strong>HC Parekh & Associates</strong> | Crafted in RAIPUR, CG, India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;