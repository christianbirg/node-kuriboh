var phantom = require('phantom');
var _ = require('underscore');

module.exports = function(options) {
  return new Promise(function(resolve, reject) {
    let opts = _.clone(options);
    let instance = null;
    let sitepage = null;
    phantom.create()
    .then(function(ph) {
      console.log(ph);
      console.log("##", opts.output);
      instance = ph;
      return ph.createPage()
    })
    .then(function(page) {
      Promise.all([
        page.property('content', opts.content),
        page.property('zoomFactor', 0.68),
        page.property('paperSize', {
          format: opts.format || 'A4',
          orientation: opts.orientation || 'portrait',
          margin: opts.margin,
        })
      ])
      .then(function(results) {
        page.render(opts.output)
        .then(function() {
          resolve(opts.output);
          instance.exit();
        })
        .catch(function(error) {
          reject(error);
        });
      })
      .catch(function(error) {
        reject(error);
      });
    })
    .catch(function(error) {
      reject(error);
    });
  });
}
