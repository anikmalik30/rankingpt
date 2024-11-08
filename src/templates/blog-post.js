import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/App/Layout";
import Seo from "../components/App/SEO";
import Navbar from "../components/App/Navbar";
import Footer from "../components/App/Footer";
import BlogSidebar from "../components/Blog/BlogSidebar";
import { urlFor } from "../utils/sanityUtils";
import SanityBlockContent from "@sanity/block-content-to-react";
import { useTranslation } from "react-i18next";
import SvgIcon from "../components/SvgIcon";

const BlogPost = ({ data }) => {
    const { i18n } = useTranslation(); // Use i18n to access current language
    const post = data?.sanityPost; // all the data from the post

    const { title, metaTitle, _rawBody, categories, publishedAt, author, mainImage } = post;

    console.log(post);

    // Safely map bio content and flatten the array if necessary
    const bioText = author?.bio?.map(block => block._rawChildren.map(child => child.text).join(' ')).join(' ') || "No bio available.";

    // Enhanced serializers with error handling
    const serializers = {
        types: {
            image: ({ node }) => {
                if (!node || !node.asset) return null;
                const { asset, alt } = node;
                return <img src={urlFor(asset).url()} alt={alt || "Image"} />;
            },
            span: ({ children }) => {
                return <span>{children}</span>;
            },
        },
        marks: {
            default: ({ children }) => <span>{children}</span>,
        },
    };

    return (
        <Layout>
            <Seo title={metaTitle || "Blog Post"} />

            <Navbar />

            <div className="blog-details-area bg-f9f9f9 ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    {mainImage?.asset?.url && (
                                        <img
                                            src={mainImage.asset.url}
                                            alt={title || "Blog Post"}
                                        />
                                    )}
                                </div>

                                <div className="article-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <i className="bx bx-folder-open"></i>
                                                <span>Category</span>
                                                {categories?.map(category => (
                                                    <a key={category._id} href={`/category/${category.title.toLowerCase()}`}>
                                                        {category.title}
                                                    </a>
                                                ))}
                                            </li>
                                            <li>
                                                <i className="bx bx-calendar"></i>
                                                <span>Published</span>
                                                {new Date(publishedAt).toLocaleDateString()}
                                            </li>
                                        </ul>
                                    </div>

                                    <h1>{title}</h1>
                                    <SvgIcon name="007-growth" width={50} height={50} />

                                    <SanityBlockContent
                                        blocks={_rawBody}
                                        serializers={serializers}
                                    />

                                </div>

                                <div className="article-footer">
                                    <div className="article-tags">
                                        <span>
                                            <i className="bx bx-purchase-tag"></i>
                                        </span>
                                        {categories?.map(category => (
                                            <a key={category._id} href={`/category/${category.title.toLowerCase()}`}>
                                                {category.title}
                                            </a>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="blog-right-sidebar">
                                <BlogSidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </Layout>
    );
};

export const query = graphql`
  query($slug: String!, $language: String!) {
    sanityPost(slug: { current: { eq: $slug } }, language: { eq: $language }) {
      title
      _rawBody
      metaTitle
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        asset {
          url
        }
      }
      author {
        name
        bio {
          _rawChildren
        }
        image {
          asset {
            url
          }
        }
      }
      language
    }
  }
`;

export default BlogPost;