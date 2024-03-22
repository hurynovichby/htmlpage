console.log('---- main js loaded');

const value = document.querySelector("#form__value-output");
const input = document.querySelector("#form__volume");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});

document.querySelector('.input-file input[type=file]').addEventListener('change', function() {
  let file = this.files[0];
  this.nextElementSibling.innerHTML = file.name;
});