var _ = require('underscore');
var defaults = require('./defaults');
var print = require('./print');


var Kuriboh = function(options) {
  this.initialize(options);
}

Kuriboh.prototype.initialize = function(options) {

}

Kuriboh.prototype.print = function(options) {
  console.log("test");
  this.options = _.extend(defaults, options);
  this.appendStyle();
  return print(this.options);
}

Kuriboh.prototype.appendStyle = function() {
  console.log('booooooom');
  if(!this.options.content) {
    throw "no content specified";
  }

  var phantomZoomFacterFix = `
  <style>
    html {
      zoom: 0.75;
    }
  </style>`
  .replace(/\r?\n|\r|\t/g, '')
  .replace(/ /g,'')

  this.options.content = this.options.content.concat(phantomZoomFacterFix);
  console.log(this.options.content);
}

module.exports = Kuriboh;
