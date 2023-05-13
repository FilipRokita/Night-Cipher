const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const passwordEl = document.getElementById("password");

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+={}[]\\|;:'\",.<>?";

function generatePassword() {
  const length = lengthEl.value;
  let password = "";
  let charset = "";

  if (uppercaseEl.checked) {
    charset += uppercaseLetters;
  }

  if (lowercaseEl.checked) {
    charset += lowercaseLetters;
  }

  if (numbersEl.checked) {
    charset += numbers;
  }

  if (symbolsEl.checked) {
    charset += symbols;
  }

  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  passwordEl.innerText = password;
  passwordEl.parentElement.style.display = "block";
}

generateEl.addEventListener("click", generatePassword);
