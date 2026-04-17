module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/static");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};