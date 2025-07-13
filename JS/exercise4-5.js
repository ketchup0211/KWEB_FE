const items = {
  apple: 700,
  orange: 800,
  lemon: 900,
};

let totalCostContainer = document.getElementById("cost");
let totalCost = 0;

for (const btn of document.getElementsByClassName("add-to-cart")) {
  btn.addEventListener("click", (e) => {
    let item = e.target.parentNode.parentNode.getAttribute("id");
    totalCost += items[item];
    totalCostContainer.innerText = totalCost;
  });
}
