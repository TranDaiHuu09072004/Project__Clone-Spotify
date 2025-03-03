const IconPlus = document.getElementById("plus-icon");
const Xicons = document.getElementById("X-icon");
const ListPlus = document.getElementById("list-plus");
const HomeIcons = document.getElementById("homeIcons");
const HoverBoder = document.getElementById("boder-hover");
const InputClick = document.getElementById("Input");
const IconsSearch = document.getElementById("Icons-Search");
const userAvatar = document.getElementById("user");
const listUserAcount = document.getElementById("list__user-account");
const IconPlusAside = document.getElementById("icons--list-plus");
const listItemAside = document.getElementById("listItemAside");
console.log(listItemAside);

const Click = IconPlus.addEventListener("click", () => {
  ListPlus.classList.toggle("active");
  Xicons.style.display = "block";
  IconPlus.style.display = "none";
});

const CloseX = Xicons.addEventListener("click", () => {
  ListPlus.classList.remove("active");
  Xicons.style.display = "none";
  IconPlus.style.display = "block";
});

document.addEventListener("click", (e) => {
  if (
    !ListPlus.contains(e.target) &&
    e.target !== IconPlus &&
    e.target !== Xicons
  ) {
    ListPlus.classList.remove("active");
    Xicons.style.display = "none";
    IconPlus.style.display = "block";
  }
});

const ClickHomeIcons = HomeIcons.addEventListener("click", () => {
  HomeIcons.style.animation = "Zoomicons 0.3s linear";
  setTimeout(() => {
    HomeIcons.style.animation = "";
  }, 300);
});

InputClick.addEventListener("focus", () => {
  HoverBoder.style.border = "2px solid var(--white-color)";
});

InputClick.addEventListener("blur", () => {
  HoverBoder.style.border = "2px solid transparent";
});

IconsSearch.addEventListener("click", () => {
  HoverBoder.style.border = "2px solid var(--white-color)";
  setTimeout(() => {
    HoverBoder.style.border = "2px solid transparent";
  }, 100);
});

userAvatar.addEventListener("click", (e) => {
  e.stopPropagation();
  listUserAcount.style.display = "block";
});

document.addEventListener("click", (e) => {
  if (!userAvatar.contains(e.target) && !listUserAcount.contains(e.target)) {
    listUserAcount.style.display = "none";
  }
});

IconPlusAside.addEventListener("click", (e) => {
  listItemAside.classList.toggle("active");
  e.stopPropagation();
});

// Ẩn khi click ra ngoài
document.addEventListener("click", (e) => {
  if (!IconPlusAside.contains(e.target) && !listItemAside.contains(e.target)) {
    listItemAside.classList.remove("active");
  }
});
