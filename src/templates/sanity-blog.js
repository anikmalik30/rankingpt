// import React from "react";
// import { graphql, Link } from "gatsby";
// import Layout from "../components/App/Layout";
// import Seo from "../components/App/SEO";
// import Navbar from "../components/App/Navbar";
// import Footer from "../components/App/Footer";
// import { useTranslation } from "react-i18next";

// const Blog = ({ data, pageContext }) => {
//     const { i18n } = useTranslation(); // Use i18n to access current language
//     const posts = data.allSanityPost.nodes;
//     const { currentPage, numPages } = pageContext;
//     const isFirst = currentPage === 1;
//     const isLast = currentPage === numPages;
//     const selectedLanguage = i18n.language; // Use global language preference

//     // Filter posts based on the selected language
//     const filteredPosts = posts.filter(post => post.language === selectedLanguage);

//     const prevPage = currentPage - 1 === 1 ? "/blog" : `/blog/${currentPage - 1}`;
//     const nextPage = `/blog/${currentPage + 1}`;

//     return (
//         <Layout>
//             <Seo title="Blog" />
//             <Navbar />

//             <div className="blog-area bg-f9f9f9 ptb-100">
//                 <div className="container-fluid">
//                     <div className="row justify-content-center">
//                         {filteredPosts.length > 0 ? (
//                             filteredPosts.map((post) => (
//                                 <div key={post.id} className="col-lg-3 col-md-6">
//                                     <div className="single-blog-post">
//                                         <div className="image">
//                                             <Link to={`/blog/${post.slug.current}`} className="d-block">
//                                                 <img
//                                                     src={post.thumbnailImage?.asset?.url}
//                                                     alt={post.title}
//                                                 />
//                                             </Link>
//                                         </div>
//                                         <div className="content">
//                                             <h3>
//                                                 <Link to={`/blog/${post.slug.current}`}>
//                                                     {post.title}
//                                                 </Link>
//                                             </h3>
//                                             <p>{post.excerpt}</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))
//                         ) : (
//                             <div className="col-lg-12 col-md-12">
//                                 <h2>{i18n.t('No blog posts available for this language')}</h2>
//                                 <p>{i18n.t('Please check back later or select a different language.')}</p>
//                             </div>
//                         )}
//                     </div>

//                     {filteredPosts.length > 0 && (
//                         <div className="col-lg-12 col-md-12">
//                             <div className="pagination-area text-center">
//                                 {!isFirst && numPages > 1 ? (
//                                     <Link to={prevPage} className="prev page-numbers">
//                                         <i className="bx bx-chevrons-left"></i>
//                                     </Link>
//                                 ) : (
//                                     <span className="prev page-numbers disabled">
//                                         <i className="bx bx-chevrons-left"></i>
//                                     </span>
//                                 )}
//                                 {Array.from({ length: numPages }, (_, i) => (
//                                     <Link
//                                         key={`pagination-number${i + 1}`}
//                                         to={`/blog/${i === 0 ? "" : i + 1}`}
//                                         className={`page-numbers ${currentPage === i + 1 ? "current" : ""}`}
//                                     >
//                                         {i + 1}
//                                     </Link>
//                                 ))}
//                                 {!isLast && numPages > 1 ? (
//                                     <Link to={nextPage} className="next page-numbers">
//                                         <i className="bx bx-chevrons-right"></i>
//                                     </Link>
//                                 ) : (
//                                     <span className="next page-numbers disabled">
//                                         <i className="bx bx-chevrons-right"></i>
//                                     </span>
//                                 )}
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>

//             <Footer />
//         </Layout>
//     );
// };

// export const query = graphql`
//   query($skip: Int!, $limit: Int!) {
//     allSanityPost(skip: $skip, limit: $limit) {
//       nodes {
//         id
//         title
//         slug {
//           current
//         }
//         excerpt
//         thumbnailImage {
//           asset {
//             url
//           }
//         }
//         language
//       }
//     }
//   }
// `;

// export default Blog;