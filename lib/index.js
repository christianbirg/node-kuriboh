var _ = require('underscore');
var defaults = require('./defaults');
var print = require('./print');

var kuriboh = function(options) {
  try {
    this.options = _.extend(defaults, options);
    console.log("options", this.options);
    return print(this.options);
  } catch(error) {
    return Promise.reject();
  }
}

module.exports = kuriboh;
