import React from "react";
import Layout from "../src/components/App/Layout";
import Seo from "../src/components/App/SEO"; // Ensure correct import
import Navbar from "../src/components/App/Navbar";
import Footer from "../src/components/App/Footer";
import { Link } from "gatsby";

import BlogImg1 from "../assets/images/blog/blog-img1.jpg";
import BlogImg2 from "../assets/images/blog/blog-img2.jpg";
import BlogImg3 from "../assets/images/blog/blog-img3.jpg";
import BlogImg4 from "../assets/images/blog/blog-img4.jpg";
import BlogImg5 from "../assets/images/blog/blog-img5.jpg";
import BlogImg6 from "../assets/images/blog/blog-img6.jpg";
import BlogImg7 from "../assets/images/blog/blog-img7.jpg";
import BlogImg8 from "../assets/images/blog/blog-img8.jpg";

const Blog = () => {
  return (
    <Layout>
      <Seo title="Blog Three" />

      <Navbar />

      <div className="blog-area bg-f9f9f9 ptb-100">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link to="/single-blog-1" className="d-block">
                    <img src={BlogImg1} alt="Blog" />
                  </Link>
                </div>
                <div className="content">
                  <h3>
                    <Link to="/single-blog-1">
                      Digital Marketing Agency Blogs You Should Read
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link to="/single-blog-1" className="d-block">
                    <img src={BlogImg2} alt="Blog" />
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link to="/single-blog-1">
                      Digital Marketing for Lead Generation
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link to="/single-blog-1" className="d-block">
                    <img src={BlogImg3} alt="Blog" />
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link to="/single-blog-1">
                      Agencies Can Successfully Recover From COVID?
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link to="/single-blog-1" className="d-block">
                    <img src={BlogImg4} alt="Blog" />
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link to="/single-blog-1">
                      Preparing E-Commerce for the Post-COVID
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link to="/single-blog-1" className="d-block">
                    <img src={BlogImg5} alt="Blog" />
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link to="/single-blog-1">
                      The State of Local SEO Industry Report 2020
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link to="/single-blog-1" className="d-block">
                    <img src={BlogImg6} alt="Blog" />
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link to="/single-blog-1">
                      Should You Test That? When to Engage in SEO
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link to="/single-blog-1" className="d-block">
                    <img src={BlogImg7} alt="Blog" />
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link to="/single-blog-1">
                      Understanding & Fulfilling Search Intent
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link to="/single-blog-1" className="d-block">
                    <img src={BlogImg8} alt="Blog" />
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link to="/single-blog-1">
                      How to Network Online Like a Champ
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="pagination-area text-center">
                <button className="prev page-numbers" aria-label="Previous page">
                  <i className="bx bx-chevrons-left"></i>
                </button>
                <span className="page-numbers current" aria-current="page">
                  1
                </span>
                <Link to="/blog/2" className="page-numbers">
                  2
                </Link>
                <Link to="/blog/3" className="page-numbers">
                  3
                </Link>
                <Link to="/blog/4" className="page-numbers">
                  4
                </Link>
                <button className="next page-numbers" aria-label="Next page">
                  <i className="bx bx-chevrons-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  );
};

export default Blog;