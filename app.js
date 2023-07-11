let count = document.querySelector(".count");
let cartCount = 0;

let buyBtn = document.querySelectorAll("#buyBtn");
console.log(buyBtn);

buyBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    cartCount++;
    count.textContent = cartCount;
    btn.disabled = true;
  });
});
