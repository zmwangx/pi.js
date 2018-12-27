# π.js

[![demo](https://img.shields.io/badge/demo-gitcdn.xyz-brightgreen.svg?maxAge=86400)](https://gitcdn.xyz/repo/zmwangx/pi.js/master/example/example.html)

`pi.js` calculates decimal digits of π to arbitrary precision in pure JavaScript using the [Chudnovsky algorithm](https://en.wikipedia.org/wiki/Chudnovsky_algorithm). Since all computations need to be done with target precision (this implementation uses [`decimal.js`](https://github.com/MikeMcl/decimal.js/)), and JavaScript notably lacks native arbitrary precision numbers (or actual integers for crying out loud), performance is utter garbage — generating 10,000 digits takes 18 seconds here. [`BitInt`](https://caniuse.com/#search=bigint) may help a lot here, but browser support is very poor at the moment.

The `example` directory contains a [demo](https://gitcdn.xyz/repo/zmwangx/pi.js/master/example/example.html) that prints decimal digits of π one at a time.

# License

Copyright (c) 2018 Zhiming Wang <i@zhimingwang.org>

This work is free. You can redistribute it and/or modify it under the terms of the Do What The Fuck You Want To Public License, Version 2, as published by Sam Hocevar.
