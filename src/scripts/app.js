import ProgressRing from "./modules/ProgressRing";

/** Get compliance rating ring element */

document.addEventListener("DOMContentLoaded", function () {
  const progressRing = new ProgressRing(80);
});

if (module.hot) {
  module.hot.accept();
}
