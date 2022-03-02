import * as Helpers from "./Helpers";
/** Methods
 *
 * 1. Toggle activation of field options
 */

class Toggle {
  constructor(switchEl) {
    this.form = document.getElementById("cs-form");
    this.switchEl = switchEl;
    this.switchType = this.switchEl.dataset.type;
    this.fieldsets = document.querySelectorAll(`.${this.switchType}`);

    /** Set initial state */
    this.switchEl.checked = true;
    Helpers.forEach(this.fieldsets, function (el) {
      el.removeAttribute("disabled");
    });

    this.events();
  }

  events() {
    this.switchEl.addEventListener("change", this.toggleSwitch.bind(this));
  }

  toggleSwitch() {
    const that = this;
    Helpers.forEach(this.fieldsets, this.toggleDisable.bind(that));
  }

  toggleDisable(el) {
    if (this.switchEl.checked) {
      el.removeAttribute("disabled");
    } else {
      el.setAttribute("disabled", "");
      const optionsChildren = el.querySelectorAll(
        "input[type='checkbox'], input[type='radio'], select"
      );
      Helpers.forEach(optionsChildren, function (el) {
        el.checked = false;
      });
    }
  }
}

export default Toggle;
