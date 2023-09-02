# demo-di-lib

This is a library package that demonstrates JavaScript code that can be used from both Node.js and browser apps without
requiring additional transformation. This sample is compatible with the DI container from the `@teqfw/di` package.

The package contains 3 modules:

* [src/Config.js](./src/Config.js): Just an object that contains hardcoded configuration.
* [src/Logger.js](./src/Logger.js): A factory to create a new function with one dependency (config).
* [src/Service.js](./src/Service.js): A class to create new instances with 2 dependencies (config & logger).

See the `@flancer64/demo-di-lib` package for an example of how to use this library.