import ProgressRing from "./modules/ProgressRing";
import Toggle from "./modules/Toggle";

/** Get compliance rating ring element */

document.addEventListener("DOMContentLoaded", function () {
  const switchCookiesEl = document.getElementById("cookies-switch");
  const switchPrivacyEl = document.getElementById("privacy-switch");

  const progressRing = new ProgressRing(80);
  const switchCookies = new Toggle(switchCookiesEl);
  const switchPrivacy = new Toggle(switchPrivacyEl);
});

if (module.hot) {
  module.hot.accept();
}
