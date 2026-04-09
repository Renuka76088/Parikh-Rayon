import '../Pages/main.css'
import '../Pages/product-section.css'

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
    image: 'https://img.freepik.com/free-photo/fabric-background-with-floral-pattern_1385-1975.jpg?t=st=1773901894~exp=1773905494~hmac=6086c537b0ddf17663a89b1e6cd11e1c90bf283e9e9305c9fd70f6f77ac8e0a2&w=1060',
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
    image: 'https://img.freepik.com/premium-photo/textile-designer-isolated-flat-color-background_980928-38343.jpg?ga=GA1.1.124606815.1772781809&semt=ais_rp_progressive&w=740&q=80',
    alt: 'Rayon Top',
  },
];

const ProductSection = () => {
  return (
    <section className="bg0 p-t-23 p-b-140">
      <div className="container">
        <div className="p-b-10">
          <h3 className="ltext-103 cl5">Parekh Rayon Products</h3>
        </div>

        <div className="flex-w flex-sb-m p-b-52">
          <div className="flex-w flex-l-m filter-tope-group m-tb-10">
            <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" data-filter="*">
              All Products
            </button>
            <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".printed-rayon">
              Printed Rayon
            </button>
            <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".plain-rayon">
              Plain Rayon
            </button>
            <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".embroidered-rayon">
              Embroidered Rayon
            </button>
            <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".designer-rayon">
              Designer Rayon
            </button>
          </div>
          <div className="flex-w flex-c-m m-tb-10">
            <div className="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter">
              <i className="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list"></i>
              <i className="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
              Filter
            </div>
            <div className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search">
              <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
              <i className="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
              Search
            </div>
          </div>
        </div>

        <div className="dis-none panel-search w-full p-t-10 p-b-15">
          <div className="bor8 dis-flex p-l-15">
            <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
              <i className="zmdi zmdi-search"></i>
            </button>
            <input className="mtext-107 cl2 size-114 plh2 p-r-15" type="text" name="search-product" placeholder="Search Rayon Products" />
          </div>
        </div>

        <div className="dis-none panel-filter w-full p-t-10">
          <div className="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">
            <div className="filter-col1 p-r-15 p-b-27">
              <div className="mtext-102 cl2 p-b-15">Sort By</div>
              <ul>
                <li className="p-b-6">
                  <a href="#" className="filter-link stext-106 trans-04">Default</a>
                </li>
                <li className="p-b-6">
                  <a href="#" className="filter-link stext-106 trans-04">Popularity</a>
                </li>
                <li className="p-b-6">
                  <a href="#" className="filter-link stext-106 trans-04">Newest Arrivals</a>
                </li>
                <li className="p-b-6">
                  <a href="#" className="filter-link stext-106 trans-04 filter-link-active">Price: Low to High</a>
                </li>
                <li className="p-b-6">
                  <a href="#" className="filter-link stext-106 trans-04">Price: High to Low</a>
                </li>
              </ul>
            </div>
            <div className="filter-col2 p-r-15 p-b-27">
              <div className="mtext-102 cl2 p-b-15">Price</div>
              <ul>
                <li className="p-b-6">
                  <a href="#" className="filter-link stext-106 trans-04 filter-link-active">All</a>
                </li>
              </ul>
            </div>
            <div className="filter-col3 p-r-15 p-b-27">
              <div className="mtext-102 cl2 p-b-15">Color</div>
              <ul>
                <li className="p-b-6">
                  <span className="fs-15 lh-12 m-r-6" style={{ color: '#222' }}>
                    <i className="zmdi zmdi-circle"></i>
                  </span>
                  <a href="#" className="filter-link stext-106 trans-04">Black</a>
                </li>
                <li className="p-b-6">
                  <span className="fs-15 lh-12 m-r-6" style={{ color: '#4272d7' }}>
                    <i className="zmdi zmdi-circle"></i>
                  </span>
                  <a href="#" className="filter-link stext-106 trans-04">Blue</a>
                </li>
                <li className="p-b-6">
                  <span className="fs-15 lh-12 m-r-6" style={{ color: '#00ad5f' }}>
                    <i className="zmdi zmdi-circle"></i>
                  </span>
                  <a href="#" className="filter-link stext-106 trans-04">Green</a>
                </li>
                <li className="p-b-6">
                  <span className="fs-15 lh-12 m-r-6" style={{ color: '#fa4251' }}>
                    <i className="zmdi zmdi-circle"></i>
                  </span>
                  <a href="#" className="filter-link stext-106 trans-04">Red</a>
                </li>
                <li className="p-b-6">
                  <span className="fs-15 lh-12 m-r-6" style={{ color: '#aaa' }}>
                    <i className="zmdi zmdi-circle-o"></i>
                  </span>
                  <a href="#" className="filter-link stext-106 trans-04">White</a>
                </li>
              </ul>
            </div>
            <div className="filter-col4 p-b-27">
              <div className="mtext-102 cl2 p-b-15">Tags</div>
              <div className="flex-w p-t-4 m-r--5">
                {['Rayon', 'Ethnic', 'Comfort', 'Printed', 'Sustainable'].map((tag) => (
                  <a key={tag} href="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                    {tag}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="row isotope-grid">
          {productData.map((product) => (
            <div key={product.title} className={`col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item ${product.category} women kurtis`}>
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img src={product.image} alt={product.alt} />
                  <a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                    Quick View
                  </a>
                </div>
                <div className="block2-txt flex-w flex-t p-t-14">
                  <div className="block2-txt-child1 flex-col-l">
                    <a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                      {product.title}
                    </a>
                    <span className="stext-105 cl3"></span>
                  </div>
                  <div className="block2-txt-child2 flex-r p-t-3">
                    <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                      <img className="icon-heart1 dis-block trans-04" src={iconHeart01} alt="ICON" />
                      <img className="icon-heart2 dis-block trans-04 ab-t-l" src={iconHeart02} alt="ICON" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-c-m flex-w w-full">
          <a href="#" className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04">
            Load More Rayon Styles
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
