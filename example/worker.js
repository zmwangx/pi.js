importScripts("https://cdnjs.cloudflare.com/ajax/libs/decimal.js/10.0.2/decimal.min.js", "../pi.js");

onmessage = function (e) {
  precision = e.data;
  postMessage({
    precision: precision,
    result: chudnovsky(precision),
  });
};
