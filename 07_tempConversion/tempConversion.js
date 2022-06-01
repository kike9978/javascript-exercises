const ftoc = function(f) {
  c = (f - 32) * (5 / 9);
  c = parseFloat(c.toFixed(1));
  return c;

};

const ctof = function(c) {
f = c * (9/5) + 32;
f = parseFloat(f.toFixed(1));
return f

};


// Return result fixed to one decimal

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
