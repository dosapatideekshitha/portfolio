// ✅ Typing animation for home page
const texts = ["Web Developer", "AI Enthusiast", "ML Learner", "Researcher"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function typeEffect() {
  const typingEl = document.querySelector(".typing-text");
  if (!typingEl) return; // run only if element exists

  if (count === texts.length) count = 0;

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  typingEl.textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(typeEffect, 1500);
  } else {
    setTimeout(typeEffect, 100);
  }
}
typeEffect();

// ✅ Contact form alert
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("✅ Thank you! Your message has been sent.");
    form.reset();
  });
}

// ✅ Animate Skill Bars when page loads
document.addEventListener("DOMContentLoaded", () => {
  const fills = document.querySelectorAll(".skill-fill");
  fills.forEach(fill => {
    const percent = fill.getAttribute("data-percent");
    setTimeout(() => {
      fill.style.width = percent;
    }, 300);
  });
});
