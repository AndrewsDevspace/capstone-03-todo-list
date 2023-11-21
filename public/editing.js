document.querySelectorAll(".post-edit").forEach((element) => {
  element.addEventListener("click", buttonPostEdit_Clicked);
});

function buttonPostEdit_Clicked() {
  let i = this.dataset.postnumber;
  document.querySelector(".post-old-div.postnumber-" + i).classList.add("html-element-hidden");
  document.querySelector(".post-update.postnumber-" + i).classList.remove("html-element-hidden");
  document.querySelector(".text-input.postnumber-" + i).focus();
}
