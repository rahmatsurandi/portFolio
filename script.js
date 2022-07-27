const text = ["Web developer", "junior programer", "Teknisi"];
let count = 0;
let textIndex = 0;
let currentText = "";
let word = "";

(function ketik() {
  if (count == text.length) {
    count = 0;
  }
  currentText = text[count];
  word = currentText.slice(0, ++textIndex);
  document.querySelector(".ketikan").textContent = word;
  if (word.length == currentText.length) {
    count++;
    textIndex = 0;
  }

  setTimeout(ketik, 300);
})();
