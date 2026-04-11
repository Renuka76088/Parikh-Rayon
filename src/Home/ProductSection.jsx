import React, { useState } from 'react';
import '../Pages/main.css';
import '../Pages/product-section.css';

const iconHeart01 = new URL('../images/icons/icon-heart-01.png', import.meta.url).href;
const iconHeart02 = new URL('../images/icons/icon-heart-02.png', import.meta.url).href;

const productData = [
  {
    category: 'printed-rayon',
    title: 'Floral Rayon A-Line Kurti',
    image: 'https://img.freepik.com/premium-photo/thai-silk-pattern-design_147059-200.jpg?w=1480',
    alt: 'Rayon Printed Kurti',
  },
  {
    category: 'printed-rayon',
    title: 'Flowy Rayon Maxi Dress',
    image: 'https://img.freepik.com/free-photo/fabric-background-with-floral-pattern_1385-1975.jpg?w=1060',
    alt: 'Rayon Maxi Dress',
  },
  {
    category: 'plain-rayon',
    title: 'Solid Rayon Straight Kurta',
    image: 'https://img.freepik.com/premium-photo/silk-tie-featuring-cranberry-vines-lowangle-closeup-evening-ambiance_1317319-31101.jpg?w=1060',
    alt: "Men's Rayon Kurta",
  },
  {
    category: 'embroidered-rayon',
    title: 'Embroidered Rayon Anarkali Kurti',
    image: 'https://img.freepik.com/premium-photo/high-angle-closeup-shot-colorful-textiles-with-beautiful-asian-patterns_926199-3639020.jpg?w=1060',
    alt: 'Embroidered Rayon Kurti',
  },
  {
    category: 'printed-rayon',
    title: 'Rayon Printed Casual Top',
    image: 'https://img.freepik.com/premium-photo/textile-designer-isolated-flat-color-background_980928-38343.jpg?w=740',
    alt: 'Rayon Top',
  },
];

const ProductSection = () => {
  const [filter, setFilter] = useState('all');

  const filteredProducts =
    filter === 'all'
      ? productData
      : productData.filter(item => item.category === filter);

  const categories = [
    { name: 'All Products', slug: 'all' },
    { name: 'Printed Rayon', slug: 'printed-rayon' },
    { name: 'Plain Rayon', slug: 'plain-rayon' },
    { name: 'Embroidered Rayon', slug: 'embroidered-rayon' },
  ];

  return (
    <section className="bg0 p-b-50">
      <div className="container">
        <div className="p-b-15">
          <h3
            className="ltext-103 cl5"
            style={{
              fontWeight: 800,
              textTransform: 'uppercase',
              fontSize: '24px',
            }}
          >
            Parekh Rayon Products
          </h3>
        </div>

        {/* Filter */}
        <div className="flex-w flex-sb-m p-b-30">
          <div className="flex-w flex-l-m filter-tope-group m-tb-10">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setFilter(cat.slug)}
                className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
                  filter === cat.slug ? 'how-active1' : ''
                }`}
                style={{
                  borderBottom:
                    filter === cat.slug ? '2px solid #717fe0' : 'none',
                  paddingBottom: '5px',
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* ✅ FINAL RESPONSIVE GRID */}
        <div className="parekh-product-grid">
          {filteredProducts.map((product, index) => (
            <div key={index}>
              <div
                className="block2"
                style={{
                  border: '1px solid #f2f2f2',
                  height: '100%',
                }}
              >
                <div
                  className="block2-pic hov-img0"
                  style={{
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="parekh-product-img"
                  />

                  <a
                    href="#"
                    className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04"
                  >
                    Quick View
                  </a>
                </div>

                <div className="block2-txt flex-w flex-t p-t-14 p-lr-15 p-b-15">
                  <div className="block2-txt-child1 flex-col-l">
                    <a
                      href="#"
                      className="stext-104 cl4 hov-cl1 trans-04 p-b-6"
                      style={{
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        fontSize: '11px',
                      }}
                    >
                      {product.title}
                    </a>

                    <span
                      className="stext-105 cl3"
                      style={{ fontSize: '11px', color: '#888' }}
                    >
                      Parekh Premium
                    </span>
                  </div>

                  <div className="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="#"
                      className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        className="icon-heart1 dis-block trans-04"
                        src={iconHeart01}
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src={iconHeart02}
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {filteredProducts.length > 0 && (
          <div className="flex-c-m flex-w w-full p-t-40">
            <a
              href="#"
              className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"
              style={{
                fontWeight: '800',
                height: '45px',
              }}
            >
              LOAD MORE
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;