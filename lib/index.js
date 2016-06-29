var _ = require('underscore');
var defaults = require('./defaults');
var print = require('./print');


var Kuriboh = function(options) {
  this.initialize(options);
}

Kuriboh.prototype.initialize = function(options) {

}

Kuriboh.prototype.print = function(options) {
  this.options = _.extend(defaults, options);
  this.appendStyle();
  return print(this.options);
}

Kuriboh.prototype.appendStyle = function() {
  if(!this.options.content) {
    throw "no content specified";
  }

  var phantomZoomFactorFix = `
  <style>
    html {
      zoom: 0.75;
    }
  </style>`
  .replace(/\s/g, '');

  this.options.content += phantomZoomFactorFix;
}

module.exports = Kuriboh;
