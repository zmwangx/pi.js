(function () {
  var $pre = document.querySelector("pre");
  var pi = "";
  var pos = 0;
  var MAX_PRECISION = 10000;

  var contentTimer = setInterval(function () {
    $pre.style.height = Math.max(window.innerHeight - $pre.offsetTop - 20, 0) + "px";
    userScrolledUp = ($pre.scrollTop + $pre.offsetHeight) < $pre.scrollHeight;
    if (pos < pi.length) {
      $pre.textContent += pi[pos];
      pos++;
      // The maximum length is MAX_PRECISION + 1 due to the decimal point.
      if (pos >= MAX_PRECISION + 1) {
        clearInterval(contentTimer);
      }
    }
    if (!userScrolledUp) {
      $pre.scrollTop = $pre.scrollHeight - $pre.offsetHeight;
    }
  }, 100);

  var worker = new Worker("worker.js");
  worker.onmessage = function (e) {
    var precision = e.data.precision;
    var result = e.data.result;
    pi += result.slice(pi.length);
    if (precision < MAX_PRECISION) {
      worker.postMessage(Math.min(MAX_PRECISION, precision * 4));
    } else {
      worker.terminate();
    }
  };
  worker.postMessage(64);
})();
