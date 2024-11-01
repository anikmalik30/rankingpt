const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogListTemplate = path.resolve("src/templates/sanity-blog.js");
  const blogPostTemplate = path.resolve("src/templates/blog-post.js");

  const result = await graphql(`
    {
      allSanityPost {
        nodes {
          id
          slug {
            current
          }
          language
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const posts = result.data.allSanityPost.nodes;
  const postsPerPage = 6;
  const numPages = Math.ceil(posts.length / postsPerPage);

  // Create paginated blog list pages
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  // Create individual blog post pages
  posts.forEach((post) => {
    createPage({
      path: `/blog/${post.slug.current}`,
      component: blogPostTemplate,
      context: {
        slug: post.slug.current,
        language: post.language, // Pass the language to the context
      },
    });
  });
};