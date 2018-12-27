// Calculates pi using the Chudnovsky algorithm.[1]
//
// Depends on decimal.js.[2]
//
// [1] https://en.wikipedia.org/wiki/Chudnovsky_algorithm
// [2] https://cdnjs.cloudflare.com/ajax/libs/decimal.js/10.0.2/decimal.min.js

function chudnovsky(precision) {
  console.log("calculating " + precision + " digits of pi...");
  var t1 = performance.now();

  // err on the safe side
  Decimal.set({ precision: precision + 2, rounding: 4 });
  var DIGITS_PER_TERM = Math.log10(640320 ** 3 / 12 ** 3);
  var terms = Math.ceil(precision / DIGITS_PER_TERM) + 1;
  var M = Decimal(1);
  var L = Decimal(13591409);
  var X = Decimal(1);
  var S = Decimal(13591409);
  var K = Decimal(6);
  for (var k = 1; k <= terms; k++) {
    // M = M * (K ** 3 - 16 * K) / k ** 3
    M = M.times(K.toPower(3).minus(K.times(16))).dividedBy(Decimal(k).toPower(3));
    // L += 545140134
    L = L.plus(545140134);
    // X *= -262537412640768000
    X = X.times(-262537412640768000);
    // S += Dec(M * L) / X
    S = S.plus(M.times(L).dividedBy(X));
    // K += 12
    K = K.plus(12);
  }
  // 426880 * Dec(10005).sqrt() / S
  // Drop last digit since it's rounded and may be off by one.
  var pi = Decimal(426880).times(Decimal(10005).sqrt()).dividedBy(S).toPrecision(precision + 1).slice(0, -1);

  var t2 = performance.now();
  console.log("calculated " + precision + " digits of pi in " + (t2 - t1) + " milliseconds.");

  return pi;
}
