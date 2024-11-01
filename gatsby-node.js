const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogListTemplate = path.resolve("src/templates/sanity-blog.js");
  const blogPostTemplate = path.resolve("src/templates/blog-post.js");

  const languages = ['en', 'pt']; // Define the languages you support
  const postsPerPage = 6;

  const result = await graphql(`
    {
      allSanityPost {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const posts = result.data.allSanityPost.nodes;
  const numPages = Math.ceil(posts.length / postsPerPage);

  languages.forEach((language) => {
    const isDefaultLanguage = language === 'en';

    // Create paginated blog list pages for each language
    Array.from({ length: numPages }).forEach((_, i) => {
      const pathPrefix = isDefaultLanguage ? '/blog' : `/${language}/blog`;
      const pagePath = i === 0 ? pathPrefix : `${pathPrefix}/${i + 1}`;

      createPage({
        path: pagePath,
        component: blogListTemplate,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
          language, // Pass the language to the context
        },
      });
    });

    // Create individual blog post pages for each language
    posts.forEach((post) => {
      const postPath = isDefaultLanguage
        ? `/blog/${post.slug.current}`
        : `/${language}/blog/${post.slug.current}`;

      createPage({
        path: postPath,
        component: blogPostTemplate,
        context: {
          slug: post.slug.current,
          language, // Pass the language to the context
        },
      });
    });
  });
};