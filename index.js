const menuButton = document.querySelector(".menu-icon span");
const searchBotton = document.querySelector(".search-icon");
const cancelButton = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
menuButton.onclick = ()=>{
  items.classList.add("active");
  menuButton.classList.add("hide");
  searchBotton.classList.add("hide");
  cancelButton.classList.add("show");
}
cancelButton.onclick = ()=>{
  items.classList.remove("active");
  menuButton.classList.remove("hide");
  searchBotton.classList.remove("hide");
  cancelButton.classList.remove("show");
  form.classList.remove("active");
  cancelButton.style.color = "#004584";
}
searchBotton.onclick = ()=>{
  form.classList.add("active");
  searchBotton.classList.add("hide");
  cancelButton.classList.add("show");
}