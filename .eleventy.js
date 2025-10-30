
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

eleventyConfig.addShortcode("navItem", function(title, url) {
    return `<li><a href="${url}">${title}</a></li>`;
  });
};