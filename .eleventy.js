const lightningCSS = require("@11tyrocks/eleventy-plugin-lightningcss");

module.exports = function (eleventyConfig) {

  // Eckles Lightning CSS Plugin
  // eleventyConfig.addPlugin(lightningCSS);
  eleventyConfig.addPlugin(lightningCSS, {
    minify: false
  });

  // ----- PASSTHROUGH FILE COPY -----
  // Images folder
  eleventyConfig.addPassthroughCopy("src/assets/img");
  // Javascript folder
  eleventyConfig.addPassthroughCopy("src/assets/js");

  // ----- GENERAL CONFIG -----
  return {

    // Process source HTML, markdown, and global data files with Nunjucks instead of default Liquid
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",

    // Optional (default is set): If your site deploys to a subdirectory, change `pathPrefix`, for example with with GitHub pages
    pathPrefix: "/",

    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      // Optional: Set layout directory outside of _includes.
      // layouts: "_layouts"
      data: "_data",
    },
  };
};
