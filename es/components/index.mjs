import * as components from "./components.mjs";
import { ProButton } from "./button/index.mjs";
import { ProIcon } from "./icon/index.mjs";
const index = {
  install: (app) => {
    for (let c in components) {
      app.use(components[c]);
    }
  }
};
export {
  ProButton,
  ProIcon,
  index as default
};
