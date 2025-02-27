module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/resume.pdf');
  eleventyConfig.addWatchTarget('./src/sass/');
  eleventyConfig.addGlobalData('currentYear', new Date().getFullYear());

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};
