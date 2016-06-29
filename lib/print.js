var phantom = require('phantom');

module.exports = function(options) {
  return new Promise(function(resolve, reject) {
    var instance = null;
    var sitepage = null;
    phantom.create()
    .then(function(ph) {
      instance = ph;
      return ph.createPage();
    })
    .then(function(page) {
      Promise.all([
        page.property('content', options.content),
        page.property('zoomFactor', 0.68),
        page.property('paperSize', {
          format: options.format || 'A4',
          orientation: options.orientation || 'portrait',
          margin: options.margin,
        })
      ])
      .then(function() {
        page.render(options.output)
        .then(function() {
          resolve(options.output);
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
