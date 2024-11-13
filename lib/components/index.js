"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const components = require("./components.js");
const index$1 = require("./button/index.js");
const index$2 = require("./icon/index.js");
const index = {
  install: (app) => {
    for (let c in components) {
      app.use(components[c]);
    }
  }
};
exports.ProButton = index$1.ProButton;
exports.ProIcon = index$2.ProIcon;
exports.default = index;
