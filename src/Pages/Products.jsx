import React, { useState, useEffect } from "react";
import Header from "../Home/Header";
import { productApi } from "../utils/api";
import { Loader2 } from "lucide-react";
import "./Products.css";

const staticProductsData = [
  {
    id: 1,
    name: "Floral Rayon A-Line Kurti",
    category: "printed-rayon",
    image: "https://img.freepik.com/premium-photo/thai-silk-pattern-design_147059-200.jpg?w=1480",
    type: "women kurtis"
  },
  {
    id: 2,
    name: "Flowy Rayon Maxi Dress",
    category: "printed-rayon",
    image: "https://img.freepik.com/free-photo/fabric-background-with-floral-pattern_1385-1975.jpg?t=st=1773901894~exp=1773905494~hmac=6086c537b0ddf17663a89b1e6cd11e1c90bf283e9e9305c9fd70f6f77ac8e0a2&w=1060",
    type: "women dresses"
  },
  {
    id: 3,
    name: "Solid Rayon Straight Kurta",
    category: "plain-rayon",
    image: "https://img.freepik.com/premium-photo/silk-tie-featuring-cranberry-vines-lowangle-closeup-evening-ambiance_1317319-31101.jpg?w=1060",
    type: "men kurtis"
  },
  {
    id: 4,
    name: "Embroidered Rayon Anarkali Kurti",
    category: "embroidered-rayon",
    image: "https://img.freepik.com/premium-photo/high-angle-closeup-shot-colorful-textiles-with-beautiful-asian-patterns_926199-3639020.jpg?w=1060",
    type: "women kurtis"
  },
  {
    id: 5,
    name: "Rayon Printed Casual Top",
    category: "printed-rayon",
    image: "https://img.freepik.com/premium-photo/multicolored-textures-surfaces-arrangement_223622-691.jpg?w=1480",
    type: "women tops"
  },
  {
    id: 6,
    name: "Designer Rayon Collection",
    category: "designer-rayon",
    image: "https://img.freepik.com/premium-photo/textile-designer-isolated-flat-color-background_980928-38343.jpg?ga=GA1.1.124606815.1772781809&semt=ais_rp_progressive&w=740&q=80",
    type: "women tops"
  },
  {
    id: 7,
    name: "Premium Rayon Fabric",
    category: "plain-rayon",
    image: "https://img.freepik.com/premium-photo/green-silk-warping-loom-textile-mill_41929-927.jpg?w=1060",
    type: "women tops"
  },
  {
    id: 8,
    name: "Colorful Rayon Print",
    category: "printed-rayon",
    image: "https://img.freepik.com/free-photo/color-tone-texture-fabric-sample_1373-421.jpg?t=st=1773905383~exp=1773908983~hmac=ee98bd610456c8cca1bf474924f0cc15b5239039f4b439ad70afe0eb3676113d&w=1060",
    type: "women tops"
  }
];

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("*");
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productApi.getAll("ParekhRayon05");
        if (response.data.success && response.data.data.length > 0) {
          const dynamicProducts = response.data.data.map(p => ({
            id: p._id,
            name: p.title,
            category: p.category,
            image: `http://localhost:5000/${p.image}`,
            type: "" 
          }));
          setProducts(dynamicProducts);
          const uniqueCats = [...new Set(dynamicProducts.map(p => p.category))];
          setCategories(uniqueCats);
        } else {
          setProducts(staticProductsData);
          setCategories(["printed-rayon", "plain-rayon", "embroidered-rayon", "designer-rayon"]);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setProducts(staticProductsData);
        setCategories(["printed-rayon", "plain-rayon", "embroidered-rayon", "designer-rayon"]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((item) => {
    const matchCategory = filter === "*" || item.category === filter;
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  if (loading) {
    return (
      <div className="flex-c-m flex-col w-full" style={{ height: "100vh" }}>
        <Loader2 className="animate-spin text-[#333]" size={50} />
        <p className="p-t-20 stext-101 cl6">Loading Rayon Collection...</p>
      </div>
    );
  }

  return (
    <>
      <section className="bg0 p-t-100 p-b-140" style={{ marginTop: "50px", overflowX: 'hidden' }}>
        
        {/* CSS INJECTION: Exactly matching the uploaded pixel copy */}
        <style>
          {`
            .isotope-grid {
              display: flex;
              flex-wrap: wrap;
              margin-left: -8px;
              margin-right: -8px;
            }

            .product-col {
              padding-left: 8px;
              padding-right: 8px;
              margin-bottom: 25px;
              width: 25%; /* Desktop: 4 items */
            }

            @media (max-width: 991px) {
              .product-col { width: 33.33%; } /* Tablet */
            }

            @media (max-width: 576px) {
              .container {
                padding-left: 10px;
                padding-right: 10px;
              }
              .product-col {
                width: 50% !important; /* Mobile: Exact 2 items side-by-side */
                padding-left: 5px;
                padding-right: 5px;
                margin-bottom: 15px;
              }
              .block2-txt {
                padding-left: 10px !important;
                padding-right: 10px !important;
              }
              .stext-104 {
                font-size: 13px !important;
                line-height: 1.2 !important;
                height: 32px;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
              }
              .product-image-img {
                height: 180px !important; /* Mobile balanced height */
              }
            }
          `}
        </style>

        <div className="container">
          <div className="p-b-10">
            <h3 className="ltext-103 cl5" style={{ fontWeight: '800' }}>Parekh Rayon Products</h3>
          </div>

          <div className="flex-w flex-sb-m p-b-52">
            <div className="flex-w flex-l-m filter-tope-group m-tb-10">
              <button
                className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${filter === "*" ? "how-active1" : ""}`}
                onClick={() => setFilter("*")}
              >
                All Products
              </button>
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${filter === cat ? "how-active1" : ""}`}
                  onClick={() => setFilter(cat)}
                >
                  {cat.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </button>
              ))}
            </div>

            <div className="flex-w flex-c-m m-tb-10">
              <div
                className="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4"
                onClick={() => setShowFilter(!showFilter)}
              >
                <i className={`icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list ${showFilter ? "dis-none" : ""}`}></i>
                <i className={`icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close ${showFilter ? "" : "dis-none"}`}></i>
                Filter
              </div>
              <div
                className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4"
                onClick={() => setShowSearch(!showSearch)}
              >
                <i className={`icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search ${showSearch ? "dis-none" : ""}`}></i>
                <i className={`icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close ${showSearch ? "" : "dis-none"}`}></i>
                Search
              </div>
            </div>

            <div className={`dis-none panel-search w-full p-t-10 p-b-15 ${showSearch ? "show" : ""}`}>
              <div className="bor8 dis-flex p-l-15">
                <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                  <i className="zmdi zmdi-search"></i>
                </button>
                <input
                  className="mtext-107 cl2 size-114 plh2 p-r-15"
                  type="text"
                  placeholder="Search Rayon Products"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="isotope-grid">
            {filteredProducts.map((item) => (
              <div key={item.id} className={`product-col ${item.category}`}>
                <div className="block2 shadow-sm rounded-lg overflow-hidden trans-04 hov-shadow-md" style={{ border: '1px solid #f0f0f0', backgroundColor: '#fff' }}>
                  <div className="block2-pic hov-img0 pos-relative">
                    <img src={item.image} alt={item.name} className="product-image-img" style={{ width: '100%', height: '280px', objectFit: 'cover' }} />
                    <a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04">
                      Quick View
                    </a>
                  </div>

                  <div className="block2-txt flex-w flex-t p-t-14 p-b-14 p-lr-15 bg-white">
                    <div className="block2-txt-child1 flex-col-l">
                      <a href="#" className="stext-104 cl4 hov-cl1 trans-04 p-b-6" style={{ fontSize: '14px', fontWeight: '700', textTransform: 'uppercase' }}>
                        {item.name}
                      </a>
                      <span className="stext-105 cl3" style={{ fontSize: '12px', color: '#999' }}>
                        Parekh Premium
                      </span>
                    </div>

                    <div className="block2-txt-child2 flex-r p-t-3">
                      <a href="#" className="btn-addwish-b2 dis-block pos-relative trans-04">
                        <i className="zmdi zmdi-favorite-outline cl2 fs-20 hov-cl1 trans-04"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="flex-c-m flex-w w-full p-t-40">
            <a href="#" className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04" style={{ fontWeight: '800' }}>
              LOAD MORE
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;