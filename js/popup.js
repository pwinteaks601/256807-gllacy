var link = document.querySelector(".contacts-button");
var popup = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-close");
var username = popup.querySelector("[name=user-name]")

link.addEventListener("click", function (evt) {
  evt.preventDefault ()
  popup.classList.add("modal-show");
  username.focus();
});


close.addEventListener("click", function (evt) {
  evt.preventDefault ()
  popup.classList.remove("modal-show");
});
