import '../Pages/main.css'

const ContactSection = () => {
  return (
    <section className="bg0 p-t-100 p-b-100">
      <div className="container">
        <div className="row p-b-60">
          <div className="col-12 txt-center">
            <h3 className="ltext-105 cl2 p-b-15" style={{ fontWeight: 300, textTransform: 'uppercase' }}>
              Contact Us
            </h3>
            <p className="stext-113 cl6" style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
              We are here to help you bring your textile vision to life.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 p-b-30">
            <div style={{ border: '1px solid #717fe0', height: '500px', borderRadius: '4px', overflow: 'hidden' }}>
              <iframe
                src="https://www.google.com/maps?q=Raipur,Chhattisgarh,INDIA&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="col-md-6 p-b-30">
            <form className="p-l-20 p-l-0-md">
              <div className="p-b-25">
                <span className="stext-102 cl2 p-b-8" style={{ color: '#717fe0' }}>Full Name</span>
                <input className="bor8 stext-111 cl2 size-116 p-lr-20" type="text" placeholder="Enter your name" />
              </div>
              <div className="p-b-25">
                <span className="stext-102 cl2 p-b-8" style={{ color: '#717fe0' }}>Email Address</span>
                <input className="bor8 stext-111 cl2 size-116 p-lr-20" type="email" placeholder="example@mail.com" />
              </div>
              <div className="p-b-35">
                <span className="stext-102 cl2 p-b-8" style={{ color: '#717fe0' }}>Message</span>
                <textarea className="bor8 stext-111 cl2 size-120 p-lr-20 p-tb-15" placeholder="How can we assist you?"></textarea>
              </div>
              <button className="flex-c-m stext-101 cl0 size-121 trans-04" style={{ backgroundColor: '#717fe0' }}>
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;