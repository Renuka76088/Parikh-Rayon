import '../Pages/main.css'
import ProductSection from './ProductSection';

const Product = () => {
  return (
    <div className="p-t-80 p-b-100">
      <div className="container">
        <h2 className="ltext-103 cl5 p-b-30">Our Complete Product Range</h2>
        <ProductSection />
      </div>
    </div>
  );
};

export default Product;