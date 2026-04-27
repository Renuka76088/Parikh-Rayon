import '../Pages/main.css'

const AboutSection = () => {
  return (
    <section className="">
      <div className="container">
        <div className="flex flex-wrap align-items-center justify-content-center py-10">
          <div className="col-md-6 col-lg-6 p-b-30">
            <div className="hov-img0 how-bor2">
              <img src="https://img.freepik.com/free-photo/line-hanging-textured-fabrics-different-colors-shades_181624-5610.jpg?w=1060" alt="Parekh Rayon" className="img-fluid" />
            </div>
          </div>

          <div className="col-md-6 col-lg-5 m-lr-auto p-b-20">
            <div className="p-t-10">
              <h1 className="ltext-101 cl5 p-b-20" style={{ fontSize: '40px' }}>
                About Parekh Rayon
              </h1>
              <p className="stext-113 cl6 p-b-20" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                Parekh Rayon is the trusted Manufacturer & Supplier of the high standard quality
                of the Rayon Products, from lower range to higher range with different TC at
                reasonable and low price range with best and premium quality with Quality
                Assurance and Quality Seal.
              </p>
            </div>
          </div>
        </div >
      </div >
    </section >
  );
};

export default AboutSection;
