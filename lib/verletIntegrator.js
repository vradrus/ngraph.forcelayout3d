module.exports = integrate;

function integrate(bodies, timeStep) {
  var tx = 0, ty = 0, tz = 0, tt = 0,
      i, max = bodies.length;

  for (i = 0; i < max; ++i) {
    var body = bodies[i],
      coeff = timeStep * timeStep / body.mass;

    body.pos.x = 2 * body.pos.x - body.prevPos.x + body.force.x * coeff;
    body.pos.y = 2 * body.pos.y - body.prevPos.y + body.force.y * coeff;
    body.pos.z = 2 * body.pos.z - body.prevPos.z + body.force.z * coeff;
    body.pos.t = 2 * body.pos.t - body.prevPos.t + body.force.t * coeff;

    tx += Math.abs(body.pos.x - body.prevPos.x)
    ty += Math.abs(body.pos.y - body.prevPos.y)
    tz += Math.abs(body.pos.z - body.prevPos.z)
    tt += Math.abs(body.pos.t - body.prevPos.t)
  }

  return (tx * tx + ty * ty + tz * tz + tt * tt)/bodies.length;
}
