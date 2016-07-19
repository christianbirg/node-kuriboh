var _ = require('underscore');
var defaults = require('./defaults');
var print = require('./print');


var Kuriboh = function(options) {
  this.initialize(options);
}

Kuriboh.prototype.initialize = function(options) {

}

Kuriboh.prototype.print = function(options) {
  var _options = _.extend(defaults, options);
  this.appendStyle(_options);
  return print(_options);
}

Kuriboh.prototype.appendStyle = function(options) {
  if(!options.content) {
    throw "no content specified";
  }

  var phantomZoomFactorFix = `
  <style>
    html {
      zoom: 0.75;
    }
  </style>`
  .replace(/\s/g, '');

  options.content += phantomZoomFactorFix;
}

module.exports = Kuriboh;
