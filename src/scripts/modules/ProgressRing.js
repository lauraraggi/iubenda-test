class ProgressRing {
  constructor(value) {
    this.value = value;
    this.circle = document.querySelector(
      ".progress-ring__circle.progress-ring__circle--active"
    );
    this.percentageText = document.querySelector(".progress-ring__percentage");

    this.events();
  }

  events() {
    this.setProgress(this.value);
  }

  setProgress(percentage) {
    const radius = this.circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    this.circle.style.strokeDasharray = `${circumference} ${circumference}`;
    this.circle.style.strokeDashoffset = `${circumference}`;
    const offset = circumference - (percentage / 100) * circumference;
    this.circle.style.strokeDashoffset = offset;
    this.percentageText.childNodes[0].textContent = percentage;
    /** Set color */
    if (percentage === 100) {
      this.circle.style.stroke = "#00ca8d";
    } else if (percentage === 0) {
      this.circle.style.stroke = "#DEDEDE";
    } else {
      this.circle.style.stroke = "#df6e5e";
    }
  }
}

export default ProgressRing;
