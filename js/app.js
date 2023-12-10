const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const banner = document.querySelector(".banner");
const modal = document.querySelector(".modal-overlay");

openBtn.addEventListener("click", () => {
    banner.classList.toggle("hide");
    modal.classList.toggle("hide");
})

closeBtn.addEventListener("click", () => {
    banner.classList.toggle("hide");
    modal.classList.toggle("hide");
})