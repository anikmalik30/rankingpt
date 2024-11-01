import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/App/Layout";
import Seo from "../components/App/SEO";
import Navbar from "../components/App/Navbar";
import Footer from "../components/App/Footer";

const Blog = ({ data, pageContext }) => {
    const posts = data.allSanityPost.nodes;
    const { currentPage, numPages } = pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 === 1 ? "/blog" : `/blog/${currentPage - 1}`;
    const nextPage = `/blog/${currentPage + 1}`;

    return (
        <Layout>
            <Seo title="Blog" />
            <Navbar />

            <div className="blog-area bg-f9f9f9 ptb-100">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        {posts.map((post) => (
                            <div key={post.id} className="col-lg-3 col-md-6">
                                <div className="single-blog-post">
                                    <div className="image">
                                        <Link to={`/blog/${post.slug.current}`} className="d-block">
                                            <img
                                                src={post.thumbnailImage?.asset?.url}
                                                alt={post.title}
                                            />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <h3>
                                            <Link to={`/blog/${post.slug.current}`}>
                                                {post.title}
                                            </Link>
                                        </h3>
                                        <p>{post.excerpt}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="pagination-area text-center">
                            {!isFirst && numPages > 1 ? (
                                <Link to={prevPage} className="prev page-numbers">
                                    <i className="bx bx-chevrons-left"></i>
                                </Link>
                            ) : (
                                <span className="prev page-numbers disabled">
                                    <i className="bx bx-chevrons-left"></i>
                                </span>
                            )}
                            {Array.from({ length: numPages }, (_, i) => (
                                <Link
                                    key={`pagination-number${i + 1}`}
                                    to={`/blog/${i === 0 ? "" : i + 1}`}
                                    className={`page-numbers ${currentPage === i + 1 ? "current" : ""}`}
                                >
                                    {i + 1}
                                </Link>
                            ))}
                            {!isLast && numPages > 1 ? (
                                <Link to={nextPage} className="next page-numbers">
                                    <i className="bx bx-chevrons-right"></i>
                                </Link>
                            ) : (
                                <span className="next page-numbers disabled">
                                    <i className="bx bx-chevrons-right"></i>
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </Layout>
    );
};

export const query = graphql`
    query($skip: Int!, $limit: Int!) {
        allSanityPost(skip: $skip, limit: $limit) {
            nodes {
                id
                title
                slug {
                    current
                }
                excerpt
                thumbnailImage {
                    asset {
                        url
                    }
                }
            }
        }
    }
`;


export default Blog;
