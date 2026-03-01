const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("admin");

  // Markdown configuration
  const md = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  });
  eleventyConfig.setLibrary("md", md);

  // Date filters
  eleventyConfig.addFilter("dateFormat", (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  eleventyConfig.addFilter("isoDate", (date) => {
    return new Date(date).toISOString();
  });

  // Get the first N items from a collection
  eleventyConfig.addFilter("limit", (arr, limit) => {
    return arr.slice(0, limit);
  });

  // Blog collection sorted by date
  eleventyConfig.addCollection("blog", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/blog/posts/*.md")
      .filter(post => !post.data.draft)
      .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
  });

  // Featured posts collection
  eleventyConfig.addCollection("featuredPosts", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/blog/posts/*.md")
      .filter(post => post.data.featured && !post.data.draft)
      .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
