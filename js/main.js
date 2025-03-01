const IconPlus = document.getElementById("plus-icon");
const ListPlus = document.getElementById("list-plus");
console.log(IconPlus);
console.log(ListPlus);

const Click = IconPlus.addEventListener("click", () => {
  ListPlus.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  // Kiểm tra xem click có nằm trong #list-plus hoặc #plus-icon không
  if (!ListPlus.contains(e.target) && e.target !== IconPlus) {
    ListPlus.classList.remove("active");
  }
});
