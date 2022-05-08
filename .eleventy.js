
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(require('eleventy-load'), {
    debug: true,
    rules: [
    {
      test: /\.(html|md|njk)$/,
      loaders: [
        {
          loader: require('eleventy-load-html'),
        },
      ],
    }, {
      test: /\.scss$/,
      loaders: [
        {
          loader: require('eleventy-load-sass'),
        },
        {
          loader: require('eleventy-load-css'),
        },
        {
          loader: require('eleventy-load-file'),
          options: {
            name: '[hash].css',
          },
        },
      ],
    }]
  });
  eleventyConfig.addWatchTarget('sass/');
  return {
    templateFormats: ['md', 'njk'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
  };
};

