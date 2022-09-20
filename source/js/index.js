let modal = document.querySelector(".modal-container");
let button = document.querySelector(".product__button")

button.onclick = function () {
  modal.classList.remove("modal-container--closed")
}
