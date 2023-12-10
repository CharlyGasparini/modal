const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const banner = document.querySelector(".banner");
const modal = document.querySelector(".modal-overlay");

openBtn.addEventListener("click", () => {
    modal.classList.toggle("show");
})

closeBtn.addEventListener("click", () => {
    modal.classList.toggle("show");
})