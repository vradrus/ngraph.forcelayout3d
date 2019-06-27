var physics = require('ngraph.physics.primitives4d');

module.exports = function(pos) {
  return new physics.Body4d(pos);
}
