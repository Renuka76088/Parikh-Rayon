import React from 'react';
import '../Pages/blog-section.css';

// Import blog images
import blog01 from '../images/blog-01.jpg';
import blog02 from '../images/blog-02.jpg';
import blog03 from '../images/blog-03.jpg';

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      image: blog01,
      author: 'Nancy Ward',
      date: 'July 22, 2017',
      title: '8 Inspiring Ways to Wear Dresses in the Winter',
      description: 'Duis ut velit gravida nibh bibendum commodo. Suspendisse pellentesque mattis augue id euismod. Interdum et male-suada fames'
    },
    {
      id: 2,
      image: blog02,
      author: 'Nancy Ward',
      date: 'July 18, 2017',
      title: 'The Great Big List of Men\'s Gifts for the Holidays',
      description: 'Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit ame'
    },
    {
      id: 3,
      image: blog03,
      author: 'Nancy Ward',
      date: 'July 2, 2017',
      title: '5 Winter-to-Spring Fashion Trends to Try Now',
      description: 'Proin nec vehicula lorem, a efficitur ex. Nam vehicula nulla vel erat tincidunt, sed hendrerit ligula porttitor. Fusce sit amet maximus nunc'
    }
  ];

  return (
    <section className="sec-blog bg0 p-t-60 p-b-90">
      <div className="container">
        <div className="p-b-66">
          <h3 className="ltext-105 cl5 txt-center respon1">
            Our Blogs
          </h3>
        </div>

        <div className="row">
          {blogs.map((blog) => (
            <div key={blog.id} className="col-sm-6 col-md-4 p-b-40">
              <div className="blog-item">
                <div className="hov-img0">
                  <a href="blog-detail.html">
                    <img src={blog.image} alt="IMG-BLOG" />
                  </a>
                </div>

                <div className="p-t-15">
                  <div className="stext-107 flex-w p-b-14">
                    <span className="m-r-3">
                      <span className="cl4">
                        By
                      </span>

                      <span className="cl5">
                        {blog.author}
                      </span>
                    </span>

                    <span>
                      <span className="cl4">
                        on
                      </span>

                      <span className="cl5">
                        {blog.date}
                      </span>
                    </span>
                  </div>

                  <h4 className="p-b-12">
                    <a href="blog-detail.html" className="mtext-101 cl2 hov-cl1 trans-04">
                      {blog.title}
                    </a>
                  </h4>

                  <p className="stext-108 cl6">
                    {blog.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;