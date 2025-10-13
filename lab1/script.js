
console.log(
  "Usage: triangle(value1, type1, value2, type2);\n" +
  "Types:\n" +
  "  'leg'              катет\n" +
  "  'hypotenuse'       гіпотенуза\n" +
  "  'adjacent angle'   кут, прилеглий до вказаного катета\n" +
  "  'opposite angle'   кут, протилежний до вказаного катета\n" +
  "  'angle'            гострий кут\n"
);

function triangle(v1, t1, v2, t2) {
  const type1 = String(t1).toLowerCase().trim();
  const type2 = String(t2).toLowerCase().trim();
  let a, b, c, alpha, beta;

  if (typeof v1 !== 'number' || typeof v2 !== 'number') {
    console.log("Both values must be numbers.");
    return "failed";
  }
  if (v1 <= 0 || v2 <= 0) {
    console.log("Zero or negative input");
    return "Zero or negative input";
  }

  const toRad = deg => deg * Math.PI / 180;
  const validAngle = deg => deg > 0 && deg < 90;

  const pair = [type1, type2].sort().join('|');
  switch(pair) {
    case 'leg|leg':
      a = v1; b = v2;
      c = Math.hypot(a, b);
      alpha = Math.atan(a/b) * 180/Math.PI;
      beta  = 90 - alpha;
      break;

    case 'hypotenuse|leg':
      c = type1 === 'hypotenuse'? v1 : v2;
      a = type1 === 'leg'? v1 : v2;
      if (a >= c) return console.log("Cathetus must be less than hypotenuse"), "Invalid dimensions";
      b = Math.sqrt(c*c - a*a);
      alpha = Math.asin(a/c) * 180/Math.PI;
      beta  = 90 - alpha;
      break;

    case 'angle|hypotenuse':
      c = type1 === 'hypotenuse'? v1 : v2;
      alpha = type1 === 'angle'? v1 : v2;
      if (!validAngle(alpha)) return console.log("Angle must be between 0 and 90"), "Invalid angle";
      {
        const rad = toRad(alpha);
        a = c * Math.sin(rad);
        b = c * Math.cos(rad);
        beta = 90 - alpha;
      }
      break;

    case 'adjacent angle|leg':
      {
        const legAdj = type1 === 'leg'? v1 : v2;
        const angAdj = type1 === 'adjacent angle'? v1 : v2;
        if (!validAngle(angAdj)) return console.log("Angle must be between 0 and 90"), "Invalid angle";
        const radA = toRad(angAdj);
        b = legAdj;
        a = b * Math.tan(radA);
        c = b / Math.cos(radA);
        alpha = Math.atan(a/b) * 180/Math.PI;
        beta  = 90 - alpha;
      }
      break;

    case 'leg|opposite angle':
      {
        const legOpp = type1 === 'leg'? v1 : v2;
        const angOpp = type1 === 'opposite angle'? v1 : v2;
        if (!validAngle(angOpp)) return console.log("Angle must be between 0 and 90"), "Invalid angle";
        const radO = toRad(angOpp);
        a = legOpp;
        b = a / Math.tan(radO);
        c = a / Math.sin(radO);
        alpha = angOpp;
        beta  = 90 - alpha;
      }
      break;

    default:
      console.log("Please read the usage instructions again.");
      return "failed";
  }

  console.log("a =", a);
  console.log("b =", b);
  console.log("c =", c);
  console.log("alpha =", alpha);
  console.log("beta =", beta);

  return "success";
}
