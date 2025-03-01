const IconPlus = document.getElementById("plus-icon");
const ListPlus = document.getElementById("list-plus");
console.log(IconPlus);
console.log(ListPlus);

const Click = IconPlus.addEventListener("click", () => {
  ListPlus.classList.toggle("active");
});
