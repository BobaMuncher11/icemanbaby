// Teaching Philosophy Text Split into Two Paragraphs
const philosophyText1 = `Theres a difference between surviving and living. Survivng is just going throug your day to day life, doing the things you have to do, eating, sleeping; living is the complete opposite. To truly live your life is to live in the moment, experence joy, self imropove, put yourself out there and pop out. `;

const philosophyText2 = `Find some passion in life`
const para1 = document.getElementById("philosophy-text-1");
const para2 = document.getElementById("philosophy-text-2");

let index1 = 0;
let index2 = 0;

// Type first paragraph
function typePhilosophy1() {
  if (index1 < philosophyText1.length) {
    para1.textContent += philosophyText1.charAt(index1);
    index1++;
    setTimeout(typePhilosophy1, 50);
  } else {
    // Start second paragraph after a short delay
    setTimeout(typePhilosophy2, 500);
  }
}

// Type second paragraph
function typePhilosophy2() {
  if (index2 < philosophyText2.length) {
    para2.textContent += philosophyText2.charAt(index2);
    index2++;
    setTimeout(typePhilosophy2, 50);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  typePhilosophy1();
});